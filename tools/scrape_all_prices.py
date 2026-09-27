import urllib.request
import re
import json
import time
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed

sys.stdout.reconfigure(encoding='utf-8')

# Load unique card IDs from cards-data.js
with open('cards-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

card_ids = sorted(list(set(re.findall(r'"([A-Z0-9]+-[0-9]+)":\s*\{', text))))
print(f"Total cards to fetch prices for: {len(card_ids)}", flush=True)

prices_db = {}

def fetch_price(cid):
    url = f"https://onepiece.limitlesstcg.com/cards/{cid}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    try:
        html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8", errors="ignore")
        
        # Look for Cardmarket EUR price
        cm_match = re.search(r'<a class="card-price eur"[^>]*href="([^"]+)"[^>]*>([0-9.,]+)\s*€?</a>', html)
        tcg_match = re.search(r'<a class="card-price usd"[^>]*href="([^"]+)"[^>]*>\$([0-9.,]+)</a>', html)
        
        eur_price = None
        cm_url = None
        if cm_match:
            eur_price = float(cm_match.group(2).replace(',', '.'))
            cm_url = cm_match.group(1)
            
        usd_price = None
        tcg_url = None
        if tcg_match:
            usd_price = float(tcg_match.group(2).replace(',', '.'))
            tcg_url = tcg_match.group(1)
            
        return cid, {
            "mkm": eur_price,
            "mkmUrl": cm_url,
            "usd": usd_price,
            "tcgUrl": tcg_url
        }
    except Exception as e:
        return cid, {
            "mkm": None,
            "usd": None
        }

start_time = time.time()
completed = 0

with ThreadPoolExecutor(max_workers=30) as executor:
    futures = {executor.submit(fetch_price, cid): cid for cid in card_ids}
    for future in as_completed(futures):
        cid, data = future.result()
        if data.get("mkm") is not None or data.get("usd") is not None:
            prices_db[cid] = data
        completed += 1
        if completed % 200 == 0 or completed == len(card_ids):
            print(f"Progress: {completed}/{len(card_ids)} cards processed ({len(prices_db)} priced) in {time.time() - start_time:.1f}s", flush=True)

output_file = "prices-data.js"
js_content = f"// Pre-calculated Price Trends for One Piece TCG (Cardmarket MKM & TCGPlayer)\n// Auto-generated: {time.strftime('%Y-%m-%d %H:%M:%S')}\n\nconst ONE_PIECE_PRICES_DB = " + json.dumps(prices_db, indent=2, ensure_ascii=False) + ";\n\nif (typeof window !== 'undefined') {\n  window.ONE_PIECE_PRICES_DB = ONE_PIECE_PRICES_DB;\n}\n"

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"DONE! Wrote {len(prices_db)} price entries to {output_file} in {time.time() - start_time:.1f}s", flush=True)
