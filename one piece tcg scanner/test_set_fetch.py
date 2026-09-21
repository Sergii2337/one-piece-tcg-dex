import urllib.request
import re
import json

def fetch_cards_from_set_page(set_slug):
    url = f"https://onepiece.limitlesstcg.com/cards/{set_slug}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    try:
        html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
        cards = set(re.findall(r'/cards/([A-Za-z0-9\-]+)', html))
        # Filter only card IDs like OP01-001 or ST27-005
        filtered = [c.upper() for c in cards if re.match(r'^(OP|ST|EB|PRB|P)[0-9]{1,2}-[0-9]{3}$|^P-[0-9]{3}$', c.upper())]
        return filtered
    except Exception as e:
        print(f"Error on {set_slug}: {e}", flush=True)
        return []

def main():
    sets = [
        "st27-the-four-emperors-blackbeard-pirates",
        "st21-the-four-emperors-red-hair-pirates",
        "st22-the-four-emperors-whitebeard-pirates",
        "st23-the-four-emperors-cross-guild",
        "st24-the-four-emperors-blackbeard-pirates",
        "st25-the-four-emperors-straw-hat-crew",
        "st26-the-four-emperors-straw-hat-crew",
        "st28-the-four-emperors-cross-guild",
        "op17-the-worlds-strongest-warriors",
        "op09-emperors-in-the-new-world",
        "op08-two-legends",
        "op07-500-years-in-the-future",
        "op06-wings-of-the-captain",
        "op05-awakening-of-the-new-era",
        "op04-kingdoms-of-intrigue",
        "op03-pillars-of-strength",
        "op02-paramount-war",
        "op01-romance-dawn",
        "eb01-memorial-collection"
    ]
    
    all_cards = set()
    for s in sets:
        found = fetch_cards_from_set_page(s)
        print(f"Set {s}: found {len(found)} cards", flush=True)
        all_cards.update(found)
        
    print(f"Total cards identified: {len(all_cards)}", flush=True)

if __name__ == "__main__":
    main()
