import urllib.request
import re
import json
import concurrent.futures
import sys

sys.stdout.reconfigure(encoding='utf-8')

SET_SLUGS = [
    'op01-romance-dawn', 'op02-paramount-war', 'op03-pillars-of-strength',
    'op04-kingdoms-of-intrigue', 'op05-awakening-of-the-new-era', 'op06-wings-of-the-captain',
    'op07-500-years-in-the-future', 'op08-two-legends', 'op09-emperors-in-the-new-world',
    'op10-royal-blood', 'op11-a-fist-of-divine-speed', 'op12-legacy-of-the-master',
    'op13-carrying-on-his-will', 'op14-the-azure-seas-seven', 'op15-adventure-on-kamis-island',
    'op16-the-time-of-battle', 'op17-the-worlds-strongest-warriors',
    'eb01-memorial-collection', 'eb02-anime-25th-collection', 'eb03-one-piece-heroines-edition',
    'prb01-premium-booster-one-piece-the-best', 'prb02-one-piece-card-the-best-vol2',
    'st01-straw-hat-crew', 'st02-worst-generation', 'st03-the-seven-warlords-of-the-sea',
    'st04-animal-kingdom-pirates', 'st05-one-piece-film-edition', 'st06-absolute-justice',
    'st07-big-mom-pirates', 'st08-monkey-d-luffy', 'st09-yamato', 'st10-the-three-captains',
    'st11-uta', 'st12-zoro-sanji', 'st13-the-three-brothers', 'st14-3D2Y',
    'st15-red-edward-newgate', 'st16-green-uta', 'st17-blue-donquixote-doflamingo',
    'st18-purple-monkey-d-luffy', 'st19-black-smoker', 'st20-yellow-charlotte-katakuri',
    'st21-ex-gear-5', 'st22-ace-newgate', 'st23-red-shanks', 'st24-green-jewelry-bonney',
    'st25-blue-buggy', 'st26-purple-black-monkey-d-luffy', 'st27-black-marshall-d-teach',
    'st28-green-yellow-yamato', 'st29-egghead', 'st30-ex-luffy-ace', 'st31-red-monkey-d-luffy',
    'st32-green-roronoa-zoro', 'st33-blue-kuzan', 'st34-purple-charlotte-katakuri',
    'st35-red-black-sabo', 'st36-yellow-eustass-captain-kid'
]

def fetch_cards_from_slug(slug):
    url = f"https://onepiece.limitlesstcg.com/cards/{slug}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        html = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
        # Find all card links
        card_matches = re.findall(r'href="/cards/([A-Za-z0-9\-]+)"', html)
        card_ids = [c.upper() for c in card_matches if re.match(r'^(OP|ST|EB|PRB|P)[0-9]{1,2}-[0-9]{3}$|^P-[0-9]{3}$', c.upper())]
        return list(set(card_ids))
    except Exception as e:
        print(f"Error fetching {slug}: {e}")
        return []

def main():
    print(f"Fetching card lists from {len(SET_SLUGS)} sets...")
    all_cards = set()
    with concurrent.futures.ThreadPoolExecutor(max_workers=15) as executor:
        future_to_slug = {executor.submit(fetch_cards_from_slug, s): s for s in SET_SLUGS}
        for future in concurrent.futures.as_completed(future_to_slug):
            slug = future_to_slug[future]
            c_ids = future.result()
            print(f"Loaded {slug}: {len(c_ids)} cards", flush=True)
            all_cards.update(c_ids)

    print(f"Total Unique Cards across all sets: {len(all_cards)}", flush=True)

    sorted_cards = sorted(list(all_cards))
    with open("all_card_ids.json", "w", encoding="utf-8") as f:
        json.dump(sorted_cards, f, indent=2)

if __name__ == "__main__":
    main()
