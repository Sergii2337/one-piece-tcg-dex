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

Solo se usan precios de la versión INGLESA. Cardmarket tiene una expansión gemela
"(Non-English)" / "(Japanese)" / "(Asia Region Legal)" por cada set, con los mismos códigos,
y su catálogo público no dice el idioma. Por eso:
  - NON_ENGLISH_EXPANSIONS lista las ya conocidas (sacadas del filtro de expansiones de
    cardmarket.com/en/OnePiece/Products/Singles). Añade aquí las nuevas cuando salgan.
  - Si aparecen dos expansiones gemelas que no están en la lista, se queda la de precios
    más altos (la japonesa suele ser más barata) y se avisa por consola.

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

# Expansiones de Cardmarket que NO son la versión inglesa (revisado el 2026-10-23)
NON_ENGLISH_EXPANSIONS = {
    5481, 5482, 5483, 5484, 5485, 5510, 5511, 5551, 5558, 5580, 5587, 5591, 5592, 5594,
    5598, 5744, 5804, 5850, 5887, 5968, 5969, 5970, 5971, 5972, 5973, 5975, 5999, 6018, 6029,
    6030, 6031, 6032, 6034, 6138, 6157, 6215, 6224, 6225, 6226, 6227, 6228, 6229, 6233,
    6277, 6379, 6411, 6445, 6478, 6504, 6560, 6606, 6625, 6678, 6685, 6708, 6709, 6710,
    6711, 6712, 6713, 6723,
}

# Nombre de cada expansión inglesa en Cardmarket (mismo origen y fecha). Se usa para exportar
# a la Wants List: "1x Roronoa Zoro OP01-025 (V.2) Romance Dawn"
ENGLISH_EXPANSION_NAMES = {
    5229: "Romance Dawn",
    5230: "Promos",
    5237: "Starter Deck: Straw Hat Crew",
    5238: "Starter Deck: Worst Generation",
    5239: "Starter Deck: The Seven Warlords of the Sea",
    5240: "Starter Deck: Animal Kingdom Pirates",
    5244: "One Piece Products",
    5255: "Starter Deck: ONE PIECE FILM edition",
    5262: "Special Tournament Promos",
    5263: "Paramount War",
    5265: "Starter Deck: Absolute Justice",
    5267: "Premium Bandai Products",
    5300: "Promos: Paramount War",
    5302: "Reprints",
    5303: "Unnumbered Promos",
    5312: "Judge Promos",
    5364: "Pillars of Strength",
    5365: "Kingdoms of Intrigue",
    5366: "Starter Deck: Monkey.D.Luffy",
    5367: "Starter Deck: Yamato",
    5377: "Starter Deck: Big Mom Pirates",
    5380: "Ultra Deck: The Three Captains",
    5413: "Promos: Pillars of Strength",
    5426: "Awakening of the New Era",
    5427: "Starter Deck: Uta",
    5486: "Promos: Kingdoms of Intrigue",
    5524: "Wings of the Captain",
    5565: "Promos: Awakening of the New Era",
    5585: "Memorial Collection",
    5586: "500 Years into the Future",
    5593: "Starter Deck: Zoro & Sanji",
    5595: "Ultra Deck: The Three Brothers",
    5610: "Two Legends",
    5611: "Starter Deck: 3D2Y",
    5622: "Promos: Wings of the Captain",
    5624: "Romance Dawn (Pre-Errata)",
    5747: "Starter Deck: Edward.Newgate",
    5748: "Starter Deck: Green Uta",
    5749: "Starter Deck: Donquixote Doflamingo",
    5750: "Starter Deck: Purple Monkey.D.Luffy",
    5751: "Starter Deck: Smoker",
    5752: "Starter Deck: Charlotte Katakuri",
    5755: "Emperors in the New World",
    5803: "Promos: 500 Years into the Future",
    5805: "The Best",
    5896: "Promos: Two Legends",
    5974: "Royal Blood",
    5979: "Promos: Emperors in the New World",
    5998: "Starter Deck: EX Gear 5",
    6028: "Anime 25th Collection",
    6033: "A Fist of Divine Speed",
    6090: "Promos: Royal Blood",
    6147: "Starter Deck: Green Yellow Yamato",
    6148: "Starter Deck: Black Marshall.D.Teach",
    6149: "Starter Deck: Purple Black Monkey.D.Luffy",
    6150: "Starter Deck: Blue Buggy",
    6151: "Starter Deck: Green Jewelry Bonney",
    6152: "Starter Deck: Red Shanks",
    6160: "Promos: A Fist of Divine Speed",
    6186: "Legacy of the Master",
    6187: "Carrying on his Will",
    6242: "The Best Vol.2",
    6264: "Promos: Legacy of the Master",
    6270: "Starter Deck: EX Ace & Newgate",
    6338: "Learn Together Deck Set 01",
    6372: "Promos: Carrying on his Will",
    6432: "The Azure Sea's Seven",
    6444: "Starter Deck: Egghead",
    6446: "Promos: The Azure Sea's Seven",
    6449: "Heroines Edition",
    6456: "Adventure on Kami’s Island",
    6457: "The Time of Battle",
    6492: "The World’s Strongest Warriors",
    6498: "Mini Promo Cards",
    6501: "Demo Decks",
    6552: "Promos: Adventure on Kami’s Island",
    6562: "Heroines Edition Vol.2",
    6608: "Starter Deck: EX Luffy & Ace",
    6609: "Promos: The Time of Battle",
    6645: "Starter Deck: Yellow Eustass \"Captain\" Kid",
    6646: "Starter Deck: Red/Black Sabo",
    6647: "Starter Deck: Purple Charlotte Katakuri",
    6648: "Starter Deck: Blue Kuzan",
    6649: "Starter Deck: Green Roronoa Zoro",
    6650: "Starter Deck: Red Monkey.D.Luffy",
    6677: "Store Tournament Promos",
    6684: "Winner Cards",
    6707: "Promos: The World’s Strongest Warriors",
    6770: "Set Sail Deck Set",
}


def fetch_json(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'op-tcg-dex-price-updater'})
    with urllib.request.urlopen(req, timeout=120) as res:
        return json.load(res)


def drop_unknown_twins(mkm, prices):
    """Entre dos expansiones nuevas con casi los mismos códigos, deja solo la más cara (la inglesa)."""
    def median_trend(exp):
        values = sorted(prices[i]['trend'] for ids in mkm[exp].values() for i in ids
                        if prices.get(i, {}).get('trend'))
        return values[len(values) // 2] if values else 0

    big = [e for e in mkm if len(mkm[e]) >= 20]
    dropped = set()
    for i, a in enumerate(big):
        for b in big[i + 1:]:
            if a in dropped or b in dropped:
                continue
            shared = len(mkm[a].keys() & mkm[b].keys())
            # Gemelas = casi los mismos códigos y tamaño parecido (no un set y sus "Promos: ...")
            if shared >= 0.8 * max(len(mkm[a]), len(mkm[b])):
                loser = a if median_trend(a) < median_trend(b) else b
                dropped.add(loser)
                print(f'AVISO: expansiones gemelas {a} y {b} sin idioma conocido; se descarta {loser} '
                      f'como no inglesa. Revisa NON_ENGLISH_EXPANSIONS.')
    for e in dropped:
        del mkm[e]


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
        if prod['idExpansion'] in NON_ENGLISH_EXPANSIONS:
            continue
        m = CODE_RE.search(prod['name'])
        if m:
            mkm[prod['idExpansion']][m.group(1)].append(prod['idProduct'])
    for exp in mkm.values():
        for ids in exp.values():
            ids.sort()
    drop_unknown_twins(mkm, prices)

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
                entry = {'mkmId': id_product, 'exp': best_exp}
                # Versión en Cardmarket (V.1, V.2... por orden de idProduct), solo si hay varias
                if len(candidates) > 1:
                    entry['v'] = candidates.index(id_product) + 1
                entry.update({'mkm': p.get('trend'), 'low': p.get('low'), 'avg7': p.get('avg7')})
                result[card_id] = entry

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
        f'const ONE_PIECE_MKM_EXPANSIONS = {json.dumps(ENGLISH_EXPANSION_NAMES, ensure_ascii=False)};',
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
        '  window.ONE_PIECE_MKM_EXPANSIONS = ONE_PIECE_MKM_EXPANSIONS;',
        '}',
        '',
    ]
    OUTPUT.write_text('\n'.join(lines), encoding='utf-8')
    print(f'{len(result)} de {len(cards)} cartas con precio '
          f'({ambiguous} versiones sin emparejar por ambigüedad) -> {OUTPUT.name}')


if __name__ == '__main__':
    main()
