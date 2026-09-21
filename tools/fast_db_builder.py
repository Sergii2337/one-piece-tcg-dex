import urllib.request
import re
import json
import concurrent.futures
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Official Starter Decks ST01 to ST28 mapping
STARTER_DATA = {
    "ST01": {"color": "Red", "traits": "Straw Hat Crew"},
    "ST02": {"color": "Green", "traits": "Worst Generation / Supernovas"},
    "ST03": {"color": "Blue", "traits": "Seven Warlords of the Sea"},
    "ST04": {"color": "Purple", "traits": "Animal Kingdom Pirates"},
    "ST05": {"color": "Purple", "traits": "FILM"},
    "ST06": {"color": "Black", "traits": "Navy"},
    "ST07": {"color": "Yellow", "traits": "Big Mom Pirates"},
    "ST08": {"color": "Black", "traits": "Straw Hat Crew"},
    "ST09": {"color": "Yellow", "traits": "Land of Wano"},
    "ST10": {"color": "Red/Purple", "traits": "Straw Hat Crew / Heart Pirates / Kid Pirates"},
    "ST11": {"color": "Green", "traits": "FILM / Uta"},
    "ST12": {"color": "Green/Blue", "traits": "Straw Hat Crew"},
    "ST13": {"color": "Yellow", "traits": "Straw Hat Crew / Revolutionary Army / Whitebeard Pirates"},
    "ST14": {"color": "Black", "traits": "Straw Hat Crew"},
    "ST15": {"color": "Red", "traits": "Whitebeard Pirates"},
    "ST16": {"color": "Green", "traits": "FILM"},
    "ST17": {"color": "Blue", "traits": "Donquixote Pirates / Seven Warlords of the Sea"},
    "ST18": {"color": "Purple", "traits": "Straw Hat Crew"},
    "ST19": {"color": "Black", "traits": "Navy"},
    "ST20": {"color": "Yellow", "traits": "Big Mom Pirates"},
    "ST21": {"color": "Red", "traits": "The Four Emperors / Straw Hat Crew"},
    "ST22": {"color": "Blue", "traits": "The Four Emperors / Whitebeard Pirates"},
    "ST23": {"color": "Red", "traits": "FILM"},
    "ST24": {"color": "Green", "traits": "Supernovas / Firetank Pirates"},
    "ST25": {"color": "Blue", "traits": "Seven Warlords of the Sea / Baroque Works"},
    "ST26": {"color": "Purple", "traits": "Animal Kingdom Pirates"},
    "ST27": {"color": "Black", "traits": "The Four Emperors / Blackbeard Pirates"},
    "ST28": {"color": "Blue", "traits": "The Four Emperors / Cross Guild"}
}

def fetch_card(card_id):
    url = f"https://onepiece.limitlesstcg.com/cards/{card_id}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        html = urllib.request.urlopen(req, timeout=4).read().decode("utf-8")
        
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
        traits = traits.replace('&amp;', '&').replace('&quot;', '"').replace('&#039;', "'")

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
    except Exception:
        return None

def main():
    card_ids_to_scrape = []

    # Starters ST01 - ST28 (cards 1-20 each)
    for st_num in range(1, 29):
        st_prefix = f"ST{st_num:02d}"
        for c in range(1, 21):
            card_ids_to_scrape.append(f"{st_prefix}-{c:03d}")

    # OP17, OP09, OP08, OP07, OP06, OP05, OP04, OP03, OP02, OP01 leaders and key cards
    for op_num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 17]:
        op_prefix = f"OP{op_num:02d}"
        for c in range(1, 122):
            card_ids_to_scrape.append(f"{op_prefix}-{c:03d}")

    # EB01, EB02
    for c in range(1, 65):
        card_ids_to_scrape.append(f"EB01-{c:03d}")

    print(f"Targeting {len(card_ids_to_scrape)} specific cards...")

    db = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=30) as executor:
        future_to_card = {executor.submit(fetch_card, cid): cid for cid in card_ids_to_scrape}
        done = 0
        for future in concurrent.futures.as_completed(future_to_card):
            cid = future_to_card[future]
            try:
                res = future.result()
                if res and res.get("name"):
                    db[cid] = res
            except Exception:
                pass
            done += 1
            if done % 200 == 0:
                print(f"Done: {done}/{len(card_ids_to_scrape)} -> Cached {len(db)} cards")

    print(f"Total valid cards fetched from Limitless: {len(db)}")
    with open("full_scraped_cards.json", "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2)

    # Convert immediately
    import convert_json_to_js
    convert_json_to_js.main()

if __name__ == "__main__":
    main()
