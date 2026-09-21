import json
import os
import re

def main():
    json_path = "full_scraped_cards.json"
    if not os.path.exists(json_path):
        json_path = "one piece tcg scanner/full_scraped_cards.json"
    
    if not os.path.exists(json_path):
        print("Scraped file not ready yet")
        return

    with open(json_path, "r", encoding="utf-8") as f:
        cards_db = json.load(f)

    print(f"Loaded {len(cards_db)} cards from json")

    # Clean up HTML entities
    for cid, c in cards_db.items():
        if "name" in c and c["name"]:
            c["name"] = c["name"].replace('&amp;', '&').replace('&quot;', '"').replace('&#039;', "'").replace('&lt;', '<').replace('&gt;', '>')
        if "traits" in c and c["traits"]:
            c["traits"] = c["traits"].replace('&amp;', '&').replace('&quot;', '"').replace('&#039;', "'").replace('&lt;', '<').replace('&gt;', '>')

    js_code = f"""// Comprehensive One Piece TCG Cards Database & Fallback Engine
// Scraped & Verified from Official Bandai / Limitless TCG Database

const ONE_PIECE_CARDS_DB = {json.dumps(cards_db, ensure_ascii=False, indent=2)};

const STARTER_DECKS_META = {{
  "ST01": {{ code: "ST01", name: "Straw Hat Crew", color: "Red", traits: "Straw Hat Crew" }},
  "ST02": {{ code: "ST02", name: "Worst Generation", color: "Green", traits: "Supernovas" }},
  "ST03": {{ code: "ST03", name: "The Seven Warlords of the Sea", color: "Blue", traits: "The Seven Warlords of the Sea" }},
  "ST04": {{ code: "ST04", name: "Animal Kingdom Pirates", color: "Purple", traits: "Animal Kingdom Pirates" }},
  "ST05": {{ code: "ST05", name: "ONE PIECE FILM edition", color: "Purple", traits: "FILM" }},
  "ST06": {{ code: "ST06", name: "Absolute Justice", color: "Black", traits: "Navy" }},
  "ST07": {{ code: "ST07", name: "Big Mom Pirates", color: "Yellow", traits: "Big Mom Pirates" }},
  "ST08": {{ code: "ST08", name: "Side Monkey.D.Luffy", color: "Black", traits: "Straw Hat Crew" }},
  "ST09": {{ code: "ST09", name: "Side Yamato", color: "Yellow", traits: "Land of Wano" }},
  "ST10": {{ code: "ST10", name: "The Three Captains", color: "Red/Purple", traits: "Supernovas / Straw Hat / Heart / Kid" }},
  "ST11": {{ code: "ST11", name: "Uta", color: "Green", traits: "FILM / Music" }},
  "ST12": {{ code: "ST12", name: "Zoro & Sanji", color: "Green/Blue", traits: "Straw Hat Crew" }},
  "ST13": {{ code: "ST13", name: "The Three Brothers", color: "Yellow", traits: "ASL / Revolutionary Army / Whitebeard" }},
  "ST14": {{ code: "ST14", name: "3D2Y", color: "Black", traits: "Straw Hat Crew" }},
  "ST15": {{ code: "ST15", name: "RED Edward.Newgate", color: "Red", traits: "Whitebeard Pirates" }},
  "ST16": {{ code: "ST16", name: "GREEN Uta", color: "Green", traits: "FILM / Music" }},
  "ST17": {{ code: "ST17", name: "BLUE Donquixote Doflamingo", color: "Blue", traits: "Donquixote Pirates / The Seven Warlords of the Sea" }},
  "ST18": {{ code: "ST18", name: "PURPLE Monkey.D.Luffy", color: "Purple", traits: "Straw Hat Crew" }},
  "ST19": {{ code: "ST19", name: "BLACK Smoker", color: "Black", traits: "Navy" }},
  "ST20": {{ code: "ST20", name: "YELLOW Charlotte Katakuri", color: "Yellow", traits: "Big Mom Pirates" }},
  "ST21": {{ code: "ST21", name: "EX Gear 5", color: "Red", traits: "Straw Hat Crew" }},
  "ST22": {{ code: "ST22", name: "Ace & Newgate", color: "Blue", traits: "Whitebeard Pirates / Spade Pirates" }},
  "ST23": {{ code: "ST23", name: "RED Shanks", color: "Red", traits: "Red Hair Pirates / FILM" }},
  "ST24": {{ code: "ST24", name: "GREEN Jewelry Bonney", color: "Green", traits: "Supernovas / Bonney Pirates" }},
  "ST25": {{ code: "ST25", name: "BLUE Buggy", color: "Blue", traits: "Cross Guild / The Seven Warlords of the Sea" }},
  "ST26": {{ code: "ST26", name: "PURPLE/BLACK Monkey.D.Luffy", color: "Purple/Black", traits: "Straw Hat Crew" }},
  "ST27": {{ code: "ST27", name: "BLACK Marshall.D.Teach", color: "Black", traits: "Blackbeard Pirates" }},
  "ST28": {{ code: "ST28", name: "GREEN/YELLOW Yamato", color: "Green/Yellow", traits: "Land of Wano" }},
  "ST29": {{ code: "ST29", name: "Egghead", color: "Yellow", traits: "Egghead / Straw Hat Crew" }},
  "ST30": {{ code: "ST30", name: "EX Luffy & Ace", color: "Red/Green", traits: "Straw Hat Crew / Whitebeard Pirates" }},
  "ST31": {{ code: "ST31", name: "RED Monkey.D.Luffy", color: "Red", traits: "Straw Hat Crew" }},
  "ST32": {{ code: "ST32", name: "GREEN Roronoa Zoro", color: "Green", traits: "Straw Hat Crew / Land of Wano" }},
  "ST33": {{ code: "ST33", name: "BLUE Kuzan", color: "Blue", traits: "Navy / Former Navy" }},
  "ST34": {{ code: "ST34", name: "PURPLE Charlotte Katakuri", color: "Purple", traits: "Big Mom Pirates" }},
  "ST35": {{ code: "ST35", name: "RED/BLACK Sabo", color: "Red/Black", traits: "Revolutionary Army / Dressrosa" }},
  "ST36": {{ code: "ST36", name: "YELLOW Eustass \\"Captain\\" Kid", color: "Yellow", traits: "Supernovas / Kid Pirates" }}
}};

const STARTER_DECK_COLORS = Object.fromEntries(
  Object.entries(STARTER_DECKS_META).map(([k, v]) => [k, v.color])
);

function normalizeSetCode(input) {{
  if (!input) return null;
  const clean = input.toUpperCase().trim().replace(/[\\\\s\\\\-_]/g, '');
  
  // ST01 to ST99 (e.g. ST29, ST1 -> ST01)
  const stMatch = clean.match(/^ST0*([1-9][0-9]?)$/);
  if (stMatch) {{
    const num = parseInt(stMatch[1], 10);
    return `ST${{num.toString().padStart(2, '0')}}`;
  }}

  // OP01 to OP99
  const opMatch = clean.match(/^OP0*([1-9][0-9]?)$/);
  if (opMatch) {{
    const num = parseInt(opMatch[1], 10);
    return `OP${{num.toString().padStart(2, '0')}}`;
  }}

  // EB01 to EB99
  const ebMatch = clean.match(/^EB0*([1-9][0-9]?)$/);
  if (ebMatch) {{
    const num = parseInt(ebMatch[1], 10);
    return `EB${{num.toString().padStart(2, '0')}}`;
  }}

  // PRB01 to PRB99
  const prbMatch = clean.match(/^PRB0*([1-9][0-9]?)$/);
  if (prbMatch) {{
    const num = parseInt(prbMatch[1], 10);
    return `PRB${{num.toString().padStart(2, '0')}}`;
  }}

  // Promo P
  if (clean === 'P' || clean === 'PROMO') {{
    return 'P';
  }}

  return null;
}}

function getStarterDeckInfo(setCode) {{
  const normalized = normalizeSetCode(setCode) || setCode;
  return STARTER_DECKS_META[normalized] || null;
}}

function getCardsBySet(setCodeQuery) {{
  const normalized = normalizeSetCode(setCodeQuery) || (setCodeQuery ? setCodeQuery.toUpperCase().trim() : '');
  if (!normalized) return [];

  const prefix = normalized + '-';
  const results = [];

  for (const [id, card] of Object.entries(ONE_PIECE_CARDS_DB)) {{
    if (id.startsWith(prefix)) {{
      results.push({{
        ...card,
        set: card.set || `Set ${{normalized}}`,
        imageFallbacks: getCardImageURLs(id)
      }});
    }}
  }}

  results.sort((a, b) => {{
    const numA = parseInt(a.id.split('-')[1], 10) || 0;
    const numB = parseInt(b.id.split('-')[1], 10) || 0;
    return numA - numB;
  }});

  return results;
}}

function determineCardColor(cardId) {{
  if (!cardId) return 'Red';
  const clean = cardId.toUpperCase().trim();

  if (ONE_PIECE_CARDS_DB[clean] && ONE_PIECE_CARDS_DB[clean].color) {{
    return ONE_PIECE_CARDS_DB[clean].color;
  }}

  const parts = clean.split('-');
  if (parts.length < 2) return 'Red';

  const setCode = parts[0];
  const num = parseInt(parts[1], 10) || 1;

  if (STARTER_DECK_COLORS[setCode]) {{
    return STARTER_DECK_COLORS[setCode];
  }}

  if (setCode === 'OP01') {{
    if (num <= 29) return 'Red';
    if (num <= 59) return 'Green';
    if (num <= 90) return 'Blue';
    return 'Purple';
  }}
  if (setCode === 'OP02') {{
    if (num <= 24) return 'Red';
    if (num <= 48) return 'Green';
    if (num <= 70) return 'Blue';
    if (num <= 92) return 'Purple';
    return 'Black';
  }}
  if (setCode === 'OP03') {{
    if (num <= 20) return 'Red';
    if (num <= 39) return 'Green';
    if (num <= 57) return 'Blue';
    if (num <= 75) return 'Purple';
    if (num <= 98) return 'Black';
    return 'Yellow';
  }}
  if (setCode === 'OP04') {{
    if (num <= 19) return 'Red';
    if (num <= 38) return 'Green';
    if (num <= 57) return 'Blue';
    if (num <= 76) return 'Purple';
    if (num <= 98) return 'Black';
    return 'Yellow';
  }}
  if (setCode === 'OP05') {{
    if (num <= 19) return 'Red';
    if (num <= 39) return 'Green';
    if (num <= 59) return 'Blue';
    if (num <= 79) return 'Purple';
    if (num <= 97) return 'Black';
    return 'Yellow';
  }}
  if (setCode === 'OP06') {{
    if (num <= 19) return 'Red';
    if (num <= 40) return 'Green';
    if (num <= 59) return 'Blue';
    if (num <= 79) return 'Purple';
    if (num <= 99) return 'Black';
    return 'Yellow';
  }}
  if (setCode === 'OP07') {{
    if (num <= 18) return 'Red';
    if (num <= 37) return 'Green';
    if (num <= 58) return 'Blue';
    if (num <= 78) return 'Purple';
    if (num <= 96) return 'Black';
    return 'Yellow';
  }}
  if (setCode === 'OP08') {{
    if (num <= 18) return 'Red';
    if (num <= 37) return 'Green';
    if (num <= 56) return 'Blue';
    if (num <= 77) return 'Purple';
    if (num <= 97) return 'Black';
    return 'Yellow';
  }}
  if (setCode === 'OP09') {{
    if (num <= 20) return 'Red';
    if (num <= 40) return 'Green';
    if (num <= 60) return 'Blue';
    if (num <= 80) return 'Purple';
    if (num <= 98) return 'Black';
    return 'Yellow';
  }}
  if (setCode === 'OP10') {{
    if (num <= 20) return 'Red';
    if (num <= 40) return 'Green';
    if (num <= 60) return 'Blue';
    if (num <= 80) return 'Purple';
    if (num <= 98) return 'Black';
    return 'Yellow';
  }}
  if (setCode === 'OP17') {{
    if (num <= 20) return 'Red';
    if (num <= 38) return 'Green';
    if (num <= 60) return 'Blue';
    if (num <= 78) return 'Purple';
    if (num <= 98) return 'Black';
    return 'Yellow';
  }}
  if (setCode === 'EB01') {{
    if (num <= 10) return 'Red';
    if (num <= 20) return 'Green';
    if (num <= 32) return 'Blue';
    if (num <= 44) return 'Purple';
    if (num <= 54) return 'Black';
    return 'Yellow';
  }}

  return 'Red';
}}

function getCardImageURLs(cardId) {{
  if (!cardId) return [];
  const cleanId = cardId.toUpperCase().trim();
  const setCode = cleanId.split('-')[0];

  return [
    `https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/one-piece/${{setCode}}/${{cleanId}}_EN.webp`,
    `https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/one-piece/${{setCode}}/${{cleanId}}.webp`,
    `https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/one-piece/${{setCode}}/${{cleanId}}_JP.webp`,
    `https://en.onepiece-cardgame.com/images/cardlist/card/${{cleanId}}.png`
  ];
}}

function createGenericCard(cardId) {{
  const cleanId = cardId.toUpperCase().trim();
  const color = determineCardColor(cleanId);
  const parts = cleanId.split('-');
  const setCode = parts[0] || 'OP01';
  const num = parseInt(parts[1], 10) || 1;

  let cardType = 'Character';
  let rarity = 'R';
  if (num === 1 && (setCode.startsWith('OP') || setCode.startsWith('ST'))) {{
    cardType = 'Leader';
    rarity = 'L';
  }}

  let traits = 'One Piece Pirates';
  if (STARTER_DECKS_META[setCode]) {{
    traits = STARTER_DECKS_META[setCode].traits;
  }}

  return {{
    id: cleanId,
    name: `Carta ${{cleanId}}`,
    set: `Set ${{setCode}}`,
    cardType: cardType,
    color: color,
    traits: traits,
    rarity: rarity,
    cost: '4 Cost / 5000 Power',
    imageFallbacks: getCardImageURLs(cleanId)
  }};
}}

function findOrGenerateCard(query) {{
  if (!query) return createGenericCard('OP01-001');
  const clean = query.toUpperCase().trim();

  if (ONE_PIECE_CARDS_DB[clean]) {{
    const dbCard = ONE_PIECE_CARDS_DB[clean];
    return {{
      ...dbCard,
      set: dbCard.set || `Set ${{clean.split('-')[0]}}`,
      imageFallbacks: getCardImageURLs(clean)
    }};
  }}

  for (const [id, c] of Object.entries(ONE_PIECE_CARDS_DB)) {{
    if (c.name && c.name.toLowerCase() === query.toLowerCase().trim()) {{
      return {{
        ...c,
        set: c.set || `Set ${{id.split('-')[0]}}`,
        imageFallbacks: getCardImageURLs(id)
      }};
    }}
  }}

  return createGenericCard(clean);
}}

function generateFallbackCardSVG(card) {{
  const colorMap = {{
    'Red': '#dc2626',
    'Green': '#16a34a',
    'Blue': '#2563eb',
    'Purple': '#9333ea',
    'Black': '#1e293b',
    'Yellow': '#ca8a04',
    'Red/Purple': '#dc2626',
    'Green/Blue': '#16a34a',
    'Blue/Black': '#2563eb',
    'Green/Yellow': '#16a34a',
    'Purple/Black': '#9333ea',
    'Red/Black': '#dc2626',
    'Red/Green': '#dc2626',
    'Blue/Yellow': '#2563eb',
    'Green/Black': '#16a34a',
    'Purple/Yellow': '#9333ea',
    'Red/Blue': '#dc2626',
    'Black/Yellow': '#ca8a04'
  }};
  
  const primaryColor = (card.color || 'Red').split('/')[0];
  const bgHex = colorMap[primaryColor] || '#2563eb';
  const name = (card.name || card.id).slice(0, 20);
  const type = card.cardType || 'Character';

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="420" viewBox="0 0 300 420">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${{bgHex}}" />
          <stop offset="100%" stop-color="#0a0f1d" />
        </linearGradient>
      </defs>
      <rect width="300" height="420" rx="16" fill="url(#g)" stroke="#f59e0b" stroke-width="4"/>
      <circle cx="150" cy="160" r="70" fill="rgba(0,0,0,0.4)" stroke="#f59e0b" stroke-width="2"/>
      <text x="150" y="175" font-size="50" text-anchor="middle" fill="#f59e0b">\\U0001f3f4\\u200d\\u2620\\ufe0f</text>
      <rect x="20" y="260" width="260" height="50" rx="8" fill="rgba(0,0,0,0.7)" />
      <text x="150" y="292" font-size="16" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">${{name}}</text>
      <text x="150" y="340" font-size="20" font-family="monospace" font-weight="bold" fill="#f59e0b" text-anchor="middle">${{card.id}}</text>
      <text x="150" y="375" font-size="13" font-family="sans-serif" fill="#94a3b8" text-anchor="middle">${{type}} \\u2022 ${{card.color}}</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${{encodeURIComponent(svg)}}`;
}}

if (typeof window !== 'undefined') {{
  window.ONE_PIECE_CARDS_DB = ONE_PIECE_CARDS_DB;
  window.STARTER_DECKS_META = STARTER_DECKS_META;
  window.normalizeSetCode = normalizeSetCode;
  window.getStarterDeckInfo = getStarterDeckInfo;
  window.getCardsBySet = getCardsBySet;
  window.findOrGenerateCard = findOrGenerateCard;
  window.getCardImageURLs = getCardImageURLs;
  window.generateFallbackCardSVG = generateFallbackCardSVG;
  window.determineCardColor = determineCardColor;
}}
"""

    out_paths = ["cards-data.js", "one piece tcg scanner/cards-data.js"]
    for p in out_paths:
        try:
            with open(p, "w", encoding="utf-8") as f:
                f.write(js_code)
            print(f"Generated {p} successfully!")
        except Exception as e:
            print(f"Skip {p}: {e}")

if __name__ == "__main__":
    main()
