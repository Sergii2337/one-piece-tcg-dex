"""
Genera prices-data.js con los precios de Cardmarket para cada carta (incluidas las alternativas).

Fuentes (públicas, sin claves):
  - Cartas Bandai (con pack_id):  punk-records  cards_by_id.json
  - Catálogo Cardmarket (One Piece = juego 18): products_singles_18.json
  - Guía de precios diaria Cardmarket:          price_guide_18.json

Emparejamiento:
  1. Cada colección de Bandai (pack_id) se asocia a la expansión de Cardmarket que
     comparte más cartas con ella.
  2. Dentro de esa expansión, las versiones de un mismo código se ordenan
     (Cardmarket por idProduct; Bandai: base, _p1, _p2..., _r1...) y se emparejan en orden.
  3. Si el número de versiones no coincide, solo se empareja la carta base: es mejor
     mostrar "No disp." que un precio de otra versión.

Uso:  python tools/update_prices.py
"""
import collections
import json
import re
import urllib.request
from datetime import datetime
from pathlib import Path

PUNK_URL = 'https://cdn.jsdelivr.net/gh/buhbbl/punk-records@main/english/index/cards_by_id.json'
MKM_BASE = 'https://downloads.s3.cardmarket.com/productCatalog'
PRODUCTS_URL = f'{MKM_BASE}/productList/products_singles_18.json'
PRICES_URL = f'{MKM_BASE}/priceGuide/price_guide_18.json'
OUTPUT = Path(__file__).resolve().parent.parent / 'prices-data.js'

CODE_RE = re.compile(r'\(([A-Z]{1,4}\d{0,2}-\d{3})\)')


def fetch_json(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'op-tcg-dex-price-updater'})
    with urllib.request.urlopen(req, timeout=120) as res:
        return json.load(res)


def version_order(card_id):
    if '_' not in card_id:
        return (0, 0)
    suffix = card_id.split('_', 1)[1].lower()
    kind = {'p': 1, 'r': 2}.get(suffix[0], 3)
    return (kind, int(re.sub(r'\D', '', suffix) or 0))


def normalize_id(raw):
    parts = raw.strip().split('_')
    if len(parts) > 1:
        return parts[0].upper() + '_' + '_'.join(parts[1:]).lower()
    return parts[0].upper()


def main():
    print('Descargando datos...')
    cards = fetch_json(PUNK_URL)
    products = fetch_json(PRODUCTS_URL)['products']
    guide = fetch_json(PRICES_URL)
    prices = {p['idProduct']: p for p in guide['priceGuides']}

    # Cardmarket: expansión -> código -> [idProduct ordenados]
    mkm = collections.defaultdict(lambda: collections.defaultdict(list))
    for prod in products:
        m = CODE_RE.search(prod['name'])
        if m:
            mkm[prod['idExpansion']][m.group(1)].append(prod['idProduct'])
    for exp in mkm.values():
        for ids in exp.values():
            ids.sort()

    # Bandai: pack -> código -> [ids]
    bandai = collections.defaultdict(lambda: collections.defaultdict(list))
    for key, card in cards.items():
        card_id = normalize_id(key)
        bandai[str(card.get('pack_id'))][card_id.split('_')[0]].append(card_id)

    result = {}
    ambiguous = 0
    for pack, codes in bandai.items():
        best_exp, best_score = None, 0
        for exp, exp_codes in mkm.items():
            score = sum(min(len(ids), len(exp_codes.get(c, []))) for c, ids in codes.items())
            if score > best_score:
                best_exp, best_score = exp, score
        if best_exp is None:
            continue

        for code, ids in codes.items():
            candidates = mkm[best_exp].get(code, [])
            if not candidates:
                continue
            ids.sort(key=version_order)
            if len(candidates) != len(ids):
                ambiguous += len(ids)
                pairs = [(ids[0], candidates[0])] if '_' not in ids[0] else []
            else:
                pairs = zip(ids, candidates)
            for card_id, id_product in pairs:
                p = prices.get(id_product, {})
                result[card_id] = {
                    'mkmId': id_product,
                    'mkm': p.get('trend'),
                    'low': p.get('low'),
                    'avg7': p.get('avg7'),
                }

    meta = {
        'source': 'Cardmarket Price Guide (One Piece)',
        'priceGuideDate': guide.get('createdAt'),
        'generatedAt': datetime.now().isoformat(timespec='seconds'),
    }
    lines = [
        '// Precios de Cardmarket por carta (incluidas versiones alternativas).',
        '// Generado automáticamente con tools/update_prices.py — no editar a mano.',
        '',
        f'const ONE_PIECE_PRICES_META = {json.dumps(meta, ensure_ascii=False)};',
        '',
        'const ONE_PIECE_PRICES_DB = {',
    ]
    entries = sorted(result.items(), key=lambda kv: (kv[0].split('_')[0], version_order(kv[0])))
    lines += [f'  {json.dumps(k)}: {json.dumps(v)},' for k, v in entries]
    lines += [
        '};',
        '',
        "if (typeof window !== 'undefined') {",
        '  window.ONE_PIECE_PRICES_META = ONE_PIECE_PRICES_META;',
        '  window.ONE_PIECE_PRICES_DB = ONE_PIECE_PRICES_DB;',
        '}',
        '',
    ]
    OUTPUT.write_text('\n'.join(lines), encoding='utf-8')
    print(f'{len(result)} de {len(cards)} cartas con precio '
          f'({ambiguous} versiones sin emparejar por ambigüedad) -> {OUTPUT.name}')


if __name__ == '__main__':
    main()
