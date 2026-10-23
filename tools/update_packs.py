"""
Genera packs-data.js con el nombre oficial y la portada (versión inglesa) de cada sobre.

Fuente: listado de boosters de la web oficial en inglés (en.onepiece-cardgame.com/products).
Cada producto enlaza a su lista de cartas con ?series=<pack_id>, el mismo pack_id que usa
punk-records, así que la portada se asocia directamente a las cartas del sobre.

Uso:  python tools/update_packs.py
"""
import html
import json
import re
import urllib.request
from datetime import datetime
from pathlib import Path

BASE = 'https://en.onepiece-cardgame.com'
LIST_URL = BASE + '/products/?subcategory=boosters&page={page}'
OUTPUT = Path(__file__).resolve().parent.parent / 'packs-data.js'

ITEM_RE = re.compile(r'<li class="linkListColBox".*?</li>', re.S)
IMG_RE = re.compile(r'data-src="([^"]+)"')
SERIES_RE = re.compile(r'series=(\d+)')
TITLE_RE = re.compile(r'linkListColTitle">([^<]+)<')
# "BOOSTER PACK -EMPERORS IN THE NEW WORLD- [OP-09]" -> nombre y código
NAME_RE = re.compile(r'-(.+)-\s*\[([^\]]+)\]')


def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (op-tcg-dex-pack-updater)'})
    with urllib.request.urlopen(req, timeout=60) as res:
        return res.read().decode('utf-8', errors='replace')


def main():
    packs = {}
    for page in range(1, 20):
        items = ITEM_RE.findall(fetch(LIST_URL.format(page=page)))
        new = 0
        for item in items:
            img, series, title = IMG_RE.search(item), SERIES_RE.search(item), TITLE_RE.search(item)
            if not (img and series and title) or series.group(1) in packs:
                continue
            title = html.unescape(title.group(1)).strip()
            m = NAME_RE.search(title)
            cover = img.group(1).split('?')[0]
            if cover.startswith('/'):
                cover = BASE + cover
            packs[series.group(1)] = {
                'name': m.group(1).strip() if m else title,
                'label': m.group(2).strip() if m else '',
                'cover': cover,
            }
            new += 1
        if not new:
            break

    meta = {'source': BASE + '/products/', 'generatedAt': datetime.now().isoformat(timespec='seconds')}
    lines = [
        '// Nombre oficial y portada (versión inglesa) de cada sobre, por pack_id.',
        '// Generado automáticamente con tools/update_packs.py — no editar a mano.',
        '',
        f'const ONE_PIECE_PACKS_META = {json.dumps(meta, ensure_ascii=False)};',
        '',
        'const ONE_PIECE_PACKS = {',
    ]
    lines += [f'  {json.dumps(k)}: {json.dumps(v, ensure_ascii=False)},' for k, v in sorted(packs.items())]
    lines += [
        '};',
        '',
        "if (typeof window !== 'undefined') {",
        '  window.ONE_PIECE_PACKS_META = ONE_PIECE_PACKS_META;',
        '  window.ONE_PIECE_PACKS = ONE_PIECE_PACKS;',
        '}',
        '',
    ]
    OUTPUT.write_text('\n'.join(lines), encoding='utf-8')
    print(f'{len(packs)} sobres -> {OUTPUT.name}')


if __name__ == '__main__':
    main()
