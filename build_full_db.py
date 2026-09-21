import urllib.request
import re
import json
import concurrent.futures
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Starter deck default colors and traits
STARTER_DECK_INFO = {
    "ST01": {"color": "Red", "traits": "Straw Hat Crew"},
    "ST02": {"color": "Green", "traits": "Worst Generation / Supernovas"},
    "ST03": {"color": "Blue", "traits": "Seven Warlords of the Sea"},
    "ST04": {"color": "Purple", "traits": "Animal Kingdom Pirates"},
    "ST05": {"color": "Purple", "traits": "Film"},
    "ST06": {"color": "Black", "traits": "Navy"},
    "ST07": {"color": "Yellow", "traits": "Big Mom Pirates"},
    "ST08": {"color": "Black", "traits": "Straw Hat Crew"},
    "ST09": {"color": "Yellow", "traits": "Land of Wano"},
    "ST10": {"color": "Red/Purple", "traits": "Straw Hat Crew / Heart Pirates / Kid Pirates"},
    "ST11": {"color": "Green", "traits": "Film / Uta"},
    "ST12": {"color": "Green/Blue", "traits": "Straw Hat Crew"},
    "ST13": {"color": "Yellow", "traits": "Straw Hat Crew / Revolutionary Army / Whitebeard Pirates"},
    "ST14": {"color": "Black", "traits": "Straw Hat Crew"},
    "ST15": {"color": "Red", "traits": "Whitebeard Pirates"},
    "ST16": {"color": "Green", "traits": "Film"},
    "ST17": {"color": "Blue", "traits": "Donquixote Pirates / Seven Warlords of the Sea"},
    "ST18": {"color": "Purple", "traits": "Straw Hat Crew"},
    "ST19": {"color": "Black", "traits": "Navy"},
    "ST20": {"color": "Yellow", "traits": "Big Mom Pirates"},
    "ST21": {"color": "Red", "traits": "Red Hair Pirates / Four Emperors"},
    "ST22": {"color": "Green", "traits": "Whitebeard Pirates / Four Emperors"},
    "ST23": {"color": "Blue", "traits": "Cross Guild / Four Emperors"},
    "ST24": {"color": "Black", "traits": "Blackbeard Pirates / Four Emperors"},
    "ST25": {"color": "Red", "traits": "Straw Hat Crew / Four Emperors"},
    "ST26": {"color": "Green", "traits": "Straw Hat Crew"},
    "ST27": {"color": "Black", "traits": "Blackbeard Pirates / Four Emperors"},
    "ST28": {"color": "Blue", "traits": "Cross Guild / Four Emperors"}
}

def get_all_sets():
    url = "https://onepiece.limitlesstcg.com/cards"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
        set_links = set(re.findall(r'href="/cards/([a-z0-9\-]+)"', html))
        filtered_sets = [s for s in set_links if any(s.startswith(p) for p in ['op', 'st', 'eb', 'prb', 'p-'])]
        filtered_sets.sort()
        return filtered_sets
    except Exception as e:
        print(f"Error fetching sets: {e}")
        return []

def get_cards_in_set(set_slug):
    url = f"https://onepiece.limitlesstcg.com/cards/{set_slug}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
        # Match <a href="/cards/OP01-001"> or <a href="/cards/ST27-005">
        cards = set(re.findall(r'href="/cards/([A-Za-z0-9\-]+)"', html))
        valid_cards = [c.upper() for c in cards if '-' in c and not c.lower().startswith('op0') and not c.lower().startswith('st') and not c.lower().startswith('eb') or (c.upper().startswith(('OP', 'ST', 'EB', 'PRB', 'P-')) and '-' in c)]
        # Filter accurately
        filtered = [c for c in valid_cards if re.match(r'^(OP|ST|EB|PRB|P)[0-9]{1,2}-[0-9]{3}$|^P-[0-9]{3}$', c)]
        return sorted(list(set(filtered)))
    except Exception as e:
        print(f"Error fetching cards for {set_slug}: {e}")
        return []

def fetch_card_details(card_id):
    url = f"https://onepiece.limitlesstcg.com/cards/{card_id}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        html = urllib.request.urlopen(req, timeout=8).read().decode("utf-8")
        
        name_match = re.search(r'class="card-text-name"><a[^>]*>([^<]+)</a>', html)
        name = name_match.group(1).strip() if name_match else None

        type_match = re.search(r'data-tooltip="Category">([^<]+)</span>', html)
        card_type = type_match.group(1).strip() if type_match else "Character"

        color_match = re.search(r'data-tooltip="Color">([^<]+)</span>', html)
        color = color_match.group(1).strip() if color_match else "Red"

        traits_match = re.search(r'data-tooltip="Type">([^<]+)</span>', html)
        traits = traits_match.group(1).strip().replace('/', ' / ') if traits_match else "One Piece Pirates"

        attr_match = re.search(r'data-tooltip="Attribute">([^<]+)</span>', html)
        attr = attr_match.group(1).strip() if attr_match else ""

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
    except Exception as e:
        # Fallback using starter deck or formula
        return None

def build_database():
    sets = get_all_sets()
    print(f"Found {len(sets)} sets on Limitless TCG")
    
    all_card_ids = set()
    for s in sets:
        c_ids = get_cards_in_set(s)
        print(f"Set {s}: {len(c_ids)} cards")
        all_card_ids.update(c_ids)

    print(f"Total unique card IDs found: {len(all_card_ids)}")
    
    # Also add known starter decks ST01-ST28 cards
    for st_num in range(1, 29):
        st_prefix = f"ST{st_num:02d}"
        for c_num in range(1, 25):
            all_card_ids.add(f"{st_prefix}-{c_num:03d}")

    card_list = sorted(list(all_card_ids))
    print(f"Total card list to process: {len(card_list)}")

    db = {}
    
    # Process in parallel
    with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
        future_to_card = {executor.submit(fetch_card_details, cid): cid for cid in card_list}
        completed = 0
        for future in concurrent.futures.as_completed(future_to_card):
            cid = future_to_card[future]
            try:
                data = future.result()
                if data and data.get("name"):
                    db[cid] = data
            except Exception as e:
                pass
            completed += 1
            if completed % 100 == 0:
                print(f"Progress: {completed}/{len(card_list)} (Found {len(db)} cards)")

    print(f"Finished scraping! Total cards in DB: {len(db)}")
    with open("full_scraped_cards.json", "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    build_database()
