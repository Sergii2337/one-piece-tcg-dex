import urllib.request
import re
import json
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

def parse_card_page(html, card_id):
    name_match = re.search(r'class="card-text-name"><a[^>]*>([^<]+)</a>', html)
    name = name_match.group(1).strip() if name_match else f"Carta {card_id}"

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
        "cost": cost_str,
        "attribute": attr
    }

def main():
    test_cards = [
        "ST27-005", "ST27-001", "ST21-001", "ST22-001", "ST23-001", "ST24-001",
        "OP17-039", "OP17-118", "OP17-001", "OP09-082", "OP09-041", "OP01-001"
    ]
    results = []
    for cid in test_cards:
        url = f"https://onepiece.limitlesstcg.com/cards/{cid}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        try:
            html = urllib.request.urlopen(req, timeout=5).read().decode("utf-8")
            data = parse_card_page(html, cid)
            results.append(data)
            print(f"Parsed {cid}: {data['name']} | Color: {data['color']} | Type: {data['cardType']} | Traits: {data['traits']}")
        except Exception as e:
            print(f"Error {cid}: {e}")

    with open("scraped_sample.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
