import urllib.request
import re
import json
import concurrent.futures
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

def parse_card_page(html, card_id):
    name_match = re.search(r'class="card-text-name"><a[^>]*>([^<]+)</a>', html)
    if not name_match:
        return None
    name = name_match.group(1).strip()
    name = name.replace('&amp;', '&').replace('&quot;', '"').replace('&#039;', "'").replace('&lt;', '<').replace('&gt;', '>')

    type_match = re.search(r'data-tooltip="Category">([^<]+)</span>', html)
    card_type = type_match.group(1).strip() if type_match else "Character"

    color_match = re.search(r'data-tooltip="Color">([^<]+)</span>', html)
    color = color_match.group(1).strip() if color_match else "Red"

    traits_match = re.search(r'data-tooltip="Type">([^<]+)</span>', html)
    traits = traits_match.group(1).strip().replace('/', ' / ') if traits_match else "One Piece Pirates"
    traits = traits.replace('&amp;', '&').replace('&quot;', '"').replace('&#039;', "'").replace('&lt;', '<').replace('&gt;', '>')

    cost_match = re.search(r'•\s*([0-9]+\s*(?:Cost|Life))', html)
    cost = cost_match.group(1).strip() if cost_match else ""

    power_match = re.search(r'([0-9]+\s*Power)', html)
    power = power_match.group(1).strip() if power_match else ""

    cost_str = ""
    if cost and power:
        cost_str = f"{cost} / {power}"
    elif cost:
        cost_str = cost
    elif power:
        cost_str = power

    rarity = "L" if card_type == "Leader" else "R"

    return {
        "id": card_id,
        "name": name,
        "cardType": card_type,
        "color": color,
        "traits": traits,
        "rarity": rarity,
        "cost": cost_str
    }

def fetch_single_card(cid):
    url = f"https://onepiece.limitlesstcg.com/cards/{cid}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    try:
        html = urllib.request.urlopen(req, timeout=8).read().decode("utf-8")
        return parse_card_page(html, cid)
    except Exception:
        return None

def main():
    if not os.path.exists("all_card_ids.json"):
        print("Missing all_card_ids.json")
        return

    with open("all_card_ids.json", "r", encoding="utf-8") as f:
        card_ids = json.load(f)

    print(f"Starting parallel fetch of {len(card_ids)} cards...", flush=True)

    db = {}
    completed = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=40) as executor:
        future_to_card = {executor.submit(fetch_single_card, cid): cid for cid in card_ids}
        for future in concurrent.futures.as_completed(future_to_card):
            cid = future_to_card[future]
            res = future.result()
            if res and res.get("name"):
                db[cid] = res
            completed += 1
            if completed % 250 == 0 or completed == len(card_ids):
                print(f"Processed {completed}/{len(card_ids)} -> Saved {len(db)} cards", flush=True)

    print(f"Complete! Total cards successfully scraped: {len(db)}", flush=True)

    with open("full_scraped_cards.json", "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2)

    import convert_json_to_js
    convert_json_to_js.main()

if __name__ == "__main__":
    main()
