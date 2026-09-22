import json
import re

def main():
    print("Loading op_cards_database.json...")
    with open("op_cards_database.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    cards = data.get("cards", {})
    starter_decks = data.get("starter_decks", {})

    print(f"Total cards to export: {len(cards)}")
    print(f"Total starter decks to export: {len(starter_decks)}")

    # We will format cards in a compact JSON format inside JS
    cards_json = json.dumps(cards, ensure_ascii=False, indent=2)
    starters_json = json.dumps(starter_decks, ensure_ascii=False, indent=2)

    js_code = f"""// One Piece TCG Database & Resolver Engine
// Auto-generated comprehensive cards database and image URL resolver

const ONE_PIECE_CARDS_DB = {cards_json};

const STARTER_DECKS_META = {starters_json};

function normalizeSetCode(input) {{
  if (!input || typeof input !== 'string') return null;
  const clean = input.trim().toUpperCase().replace(/[\\s\\-_]/g, '');
  const m = clean.match(/^(OP|ST|EB|PRB)0*([1-9][0-9]?)$/i);
  if (m) {{
    const prefix = m[1].toUpperCase();
    const num = parseInt(m[2], 10);
    return prefix + (num < 10 ? '0' + num : num.toString());
  }}
  if (clean === 'P' || clean === 'PROMO') return 'P';
  return null;
}}

function getStarterDeckInfo(setCode) {{
  if (!setCode) return null;
  const normalized = normalizeSetCode(setCode) || setCode.toUpperCase();
  return STARTER_DECKS_META[normalized] || null;
}}

function getCardsBySet(setCode) {{
  if (!setCode) return [];
  const normalized = normalizeSetCode(setCode) || setCode.toUpperCase();
  const results = [];
  const entries = Object.entries(ONE_PIECE_CARDS_DB);
  
  for (let i = 0; i < entries.length; i++) {{
    const [cardId, card] = entries[i];
    if (cardId.startsWith(normalized + '-')) {{
      results.push({{
        ...card,
        set: card.set || `Set ${{normalized}}`,
        imageFallbacks: getCardImageURLs(cardId)
      }});
    }}
  }}

  // Sort naturally by card number (e.g. ST01-001, ST01-002...)
  results.sort((a, b) => {{
    const aNum = parseInt((a.id.split('-')[1] || '0').replace(/\\D/g, ''), 10);
    const bNum = parseInt((b.id.split('-')[1] || '0').replace(/\\D/g, ''), 10);
    return aNum - bNum;
  }});

  return results;
}}

function determineCardColor(cardId, name, traits) {{
  const prefix = (cardId || '').toUpperCase().split('-')[0];
  const setColors = {{
    'ST01': 'Red', 'ST02': 'Green', 'ST03': 'Blue', 'ST04': 'Purple',
    'ST05': 'Purple', 'ST06': 'Black', 'ST07': 'Yellow', 'ST08': 'Black',
    'ST09': 'Yellow', 'ST10': 'Red/Purple', 'ST11': 'Green', 'ST12': 'Green/Blue',
    'ST13': 'Yellow/Black', 'ST14': 'Black', 'ST15': 'Red', 'ST16': 'Green',
    'ST17': 'Blue', 'ST18': 'Purple', 'ST19': 'Black', 'ST20': 'Yellow',
    'ST21': 'Green', 'ST22': 'Blue', 'ST23': 'Red', 'ST24': 'Purple',
    'ST25': 'Black', 'ST26': 'Yellow', 'ST27': 'Green', 'ST28': 'Blue'
  }};

  if (setColors[prefix]) return setColors[prefix];

  const t = (traits || '').toLowerCase();
  const n = (name || '').toLowerCase();
  if (t.includes('revolutionary') || t.includes('dressrosa')) return 'Red';
  if (t.includes('straw hat') || n.includes('luffy')) return 'Red';
  if (t.includes('heart pirates') || n.includes('law')) return 'Green';
  if (t.includes('wano') || n.includes('zoro')) return 'Green';
  if (t.includes('seven warlords') || t.includes('baroque') || n.includes('crocodile')) return 'Blue';
  if (t.includes('animal kingdom') || n.includes('kaido')) return 'Purple';
  if (t.includes('navy') || t.includes('cp9') || t.includes('world government')) return 'Black';
  if (t.includes('big mom') || t.includes('land of wano') || t.includes('mink')) return 'Yellow';

  return 'Red';
}}

function getCardImageURLs(cardId) {{
  if (!cardId) return [];
  const clean = cardId.trim().toUpperCase().replace(/\\s+/g, '');
  const parts = clean.split('-');
  const setPart = parts[0] || 'OP01';
  const numPart = parts[1] || '001';

  const urls = [];

  // Bandai Official CDN Format (WebP)
  urls.push(`https://en.onepiece-cardgame.com/images/cardlist/card/${{clean}}.png`);
  urls.push(`https://en.onepiece-cardgame.com/images/cardlist/card/${{clean}}_p1.png`);
  urls.push(`https://asia-en.onepiece-cardgame.com/images/cardlist/card/${{clean}}.png`);
  urls.push(`https://onepiece-cardgame.dev/cards/${{clean}}.jpg`);
  urls.push(`https://limitlesstcg.s3.us-east-2.amazonaws.com/one-piece/${{setPart}}/${{clean}}_EN.webp`);
  urls.push(`https://images.gutshot.app/cards/one-piece/${{clean}}.webp`);
  urls.push(`https://raw.githubusercontent.com/limitless-tcg/one-piece-images/main/cards/${{setPart}}/${{clean}}.png`);
  urls.push(`https://api.onepiece-cardgame.dev/cards/${{clean}}/image`);

  return urls;
}}

function createGenericCard(cardId) {{
  const clean = (cardId || '').trim().toUpperCase();
  const parts = clean.split('-');
  const setCode = parts[0] || 'OP01';
  const num = parts[1] || '001';
  const color = determineCardColor(clean, '', '');

  return {{
    id: clean,
    name: `Carta ${{clean}}`,
    cardType: 'Character',
    color: color,
    traits: 'One Piece Pirates',
    rarity: 'C',
    cost: '3 Cost / 4000 Power',
    set: `Set ${{setCode}}`,
    imageFallbacks: getCardImageURLs(clean)
  }};
}}

function findOrGenerateCard(cardId) {{
  if (!cardId) return createGenericCard('OP01-001');
  const clean = cardId.trim().toUpperCase().replace(/\\s+/g, '');
  
  if (ONE_PIECE_CARDS_DB[clean]) {{
    const c = ONE_PIECE_CARDS_DB[clean];
    return {{
      ...c,
      set: c.set || `Set ${{clean.split('-')[0]}}`,
      imageFallbacks: getCardImageURLs(clean)
    }};
  }}

  // Fuzzy prefix lookup (e.g. op01-001 vs OP01-001)
  const keys = Object.keys(ONE_PIECE_CARDS_DB);
  for (let i = 0; i < keys.length; i++) {{
    const id = keys[i];
    if (id.toUpperCase() === clean) {{
      const c = ONE_PIECE_CARDS_DB[id];
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

const COLOR_SYNONYMS_MAP = {{
  'red': 'Red', 'rojo': 'Red', 'roja': 'Red', 'rojos': 'Red', 'rojas': 'Red',
  'green': 'Green', 'verde': 'Green', 'verdes': 'Green',
  'blue': 'Blue', 'azul': 'Blue', 'azules': 'Blue',
  'purple': 'Purple', 'morado': 'Purple', 'morada': 'Purple', 'morados': 'Purple', 'moradas': 'Purple', 'purpura': 'Purple', 'púrpura': 'Purple',
  'black': 'Black', 'negro': 'Black', 'negra': 'Black', 'negros': 'Black', 'negras': 'Black',
  'yellow': 'Yellow', 'amarillo': 'Yellow', 'amarilla': 'Yellow', 'amarillos': 'Yellow', 'amarillas': 'Yellow'
}};

function parseSearchQuery(query) {{
  if (!query || typeof query !== 'string') return {{ set: null, color: null, textTokens: [] }};
  const cleanQ = query.trim().toLowerCase().replace(/[\\.\\-_,;:\\'\\"\\/]+/g, ' ');
  const tokens = cleanQ.split(/\\s+/).filter(Boolean);

  let detectedSet = null;
  let detectedColor = null;
  const textTokens = [];

  for (let i = 0; i < tokens.length; i++) {{
    const t = tokens[i];
    const setCandidate = normalizeSetCode(t);
    if (setCandidate && !detectedSet) {{
      detectedSet = setCandidate;
      continue;
    }}
    if (COLOR_SYNONYMS_MAP[t] && !detectedColor) {{
      detectedColor = COLOR_SYNONYMS_MAP[t];
      continue;
    }}
    textTokens.push(t);
  }}

  return {{ set: detectedSet, color: detectedColor, textTokens: textTokens }};
}}

function searchCardsInDB(query) {{
  if (!query || typeof query !== 'string') return [];
  const rawQ = query.trim();
  if (!rawQ) return [];

  const parsed = parseSearchQuery(rawQ);
  const reqSet = parsed.set;
  const reqColor = parsed.color;
  const textTokens = parsed.textTokens;

  const results = [];
  const entries = Object.entries(ONE_PIECE_CARDS_DB);

  for (let i = 0; i < entries.length; i++) {{
    const [cardId, card] = entries[i];
    const cardSetPrefix = (cardId || '').split('-')[0].toUpperCase();
    const cardColorRaw = (card.color || '');
    const cardColors = cardColorRaw.toLowerCase().split('/').map(c => c.trim());

    // 1. Filtrado por set estricto si se especificó un set (ej: OP01, OP15, ST01)
    if (reqSet && cardSetPrefix !== reqSet) {{
      continue;
    }}

    // 2. Filtrado por color estricto si se especificó un color (ej: Blue, Red, Green)
    if (reqColor && !cardColors.includes(reqColor.toLowerCase())) {{
      continue;
    }}

    // 3. Filtrado por tokens de texto restantes (nombre, rasgos, id, tipo, rareza)
    if (textTokens.length > 0) {{
      const name = card.name || '';
      const traits = card.traits || '';
      const cardType = card.cardType || '';
      const cost = card.cost || '';
      const rarity = card.rarity || '';
      const targetStr = `${{cardId}} ${{name}} ${{traits}} ${{cardType}} ${{cost}} ${{rarity}}`.toLowerCase();
      const cleanTarget = targetStr.replace(/[\\.\\-_,;:\\'\\"\\/]+/g, ' ');
      const targetWords = cleanTarget.split(/\\s+/).filter(Boolean);

      const matchesAll = textTokens.every(tok => {{
        return targetWords.some(w => w.startsWith(tok) || w.includes(tok)) || cleanTarget.includes(tok);
      }});
      if (!matchesAll) continue;
    }}

    // Si no hubo filtro de set ni color y tampoco tokens de texto, omitir
    if (!reqSet && !reqColor && textTokens.length === 0) {{
      continue;
    }}

    const set = card.set || `Set ${{cardSetPrefix}}`;
    results.push({{
      ...card,
      set: set,
      imageFallbacks: getCardImageURLs(cardId)
    }});
  }}

  // Si se buscó un término de texto que coincidía con un color o un set pero no arrojó resultados, fallback general
  if (results.length === 0 && (reqSet || reqColor) && !reqSet) {{
    const cleanQ = rawQ.toLowerCase().replace(/[\\.\\-_,;:\\'\\"\\/]+/g, ' ');
    const allWords = cleanQ.split(/\\s+/).filter(Boolean);
    for (let i = 0; i < entries.length; i++) {{
      const [cardId, card] = entries[i];
      const fullTarget = `${{cardId}} ${{card.name || ''}} ${{card.traits || ''}} ${{card.cardType || ''}}`.toLowerCase();
      if (allWords.every(w => fullTarget.includes(w))) {{
        results.push({{
          ...card,
          set: card.set || `Set ${{cardId.split('-')[0]}}`,
          imageFallbacks: getCardImageURLs(cardId)
        }});
      }}
    }}
  }}

  // Ordenación natural por número de carta (OP01-001, OP01-002...)
  results.sort((a, b) => {{
    const aId = (a.id || '').toUpperCase();
    const bId = (b.id || '').toUpperCase();
    const cleanU = rawQ.toUpperCase();
    if (aId === cleanU && bId !== cleanU) return -1;
    if (bId === cleanU && aId !== cleanU) return 1;

    const aParts = aId.split('-');
    const bParts = bId.split('-');
    if (aParts[0] === bParts[0] && aParts.length > 1 && bParts.length > 1) {{
      const aNum = parseInt(aParts[1], 10);
      const bNum = parseInt(bParts[1], 10);
      if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
    }}
    return aId.localeCompare(bId);
  }});

  return results;
}}

function getOfficialCardImageUrl(cardId) {{
  const urls = getCardImageURLs(cardId);
  return (urls && urls.length > 0) ? urls[0] : '';
}}

function getFallbackCardDataUrl(cardId, name, color) {{
  return generateFallbackCardSVG({{ id: cardId, name: name, color: color }});
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
  window.COLOR_SYNONYMS_MAP = COLOR_SYNONYMS_MAP;
  window.parseSearchQuery = parseSearchQuery;
  window.searchCardsInDB = searchCardsInDB;
  window.getOfficialCardImageUrl = getOfficialCardImageUrl;
  window.getFallbackCardDataUrl = getFallbackCardDataUrl;
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
