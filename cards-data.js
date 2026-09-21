// Comprehensive One Piece TCG Cards Database & Fallback Engine
// Scraped & Verified from Official Bandai / Limitless TCG Database

const ONE_PIECE_CARDS_DB = {
  "EB01-037": {
    "id": "EB01-037",
    "name": "Mr. 9",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB01-012": {
    "id": "EB01-012",
    "name": "Cavendish",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Beautiful Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB01-030": {
    "id": "EB01-030",
    "name": "Loguetown",
    "cardType": "Stage",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB01-001": {
    "id": "EB01-001",
    "name": "Kouzuki Oden",
    "cardType": "Leader",
    "color": "Red/Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "EB01-018": {
    "id": "EB01-018",
    "name": "Mountain God",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal / Land of Wano",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "EB01-020": {
    "id": "EB01-020",
    "name": "Chambres",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB01-026": {
    "id": "EB01-026",
    "name": "Prince Bellett",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "EB01-011": {
    "id": "EB01-011",
    "name": "Mini-Merry",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB01-021": {
    "id": "EB01-021",
    "name": "Hannyabal",
    "cardType": "Leader",
    "color": "Blue/Purple",
    "traits": "Impel Down",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "EB01-024": {
    "id": "EB01-024",
    "name": "Hamlet",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB01-009": {
    "id": "EB01-009",
    "name": "Just Shut Up and Come with Us!!!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Drum Kingdom / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB01-031": {
    "id": "EB01-031",
    "name": "Kalifa",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "EB01-023": {
    "id": "EB01-023",
    "name": "Edward Weevil",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "EB01-038": {
    "id": "EB01-038",
    "name": "Oh Come My Way",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB01-035": {
    "id": "EB01-035",
    "name": "Ms. Monday",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "EB01-029": {
    "id": "EB01-029",
    "name": "Sorry. I'm a Goner.",
    "cardType": "Event",
    "color": "Blue",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB01-007": {
    "id": "EB01-007",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Red",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "EB01-033": {
    "id": "EB01-033",
    "name": "Blueno",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB01-040": {
    "id": "EB01-040",
    "name": "Kyros",
    "cardType": "Leader",
    "color": "Black/Yellow",
    "traits": "Dressrosa",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "EB01-005": {
    "id": "EB01-005",
    "name": "Doma",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "EB01-019": {
    "id": "EB01-019",
    "name": "Off-White",
    "cardType": "Event",
    "color": "Green",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB01-008": {
    "id": "EB01-008",
    "name": "LittleOars Jr.",
    "cardType": "Character",
    "color": "Red",
    "traits": "Giant / Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB01-016": {
    "id": "EB01-016",
    "name": "Bingoh",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "EB01-006": {
    "id": "EB01-006",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB01-036": {
    "id": "EB01-036",
    "name": "Minochihuahua",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down / Jailer Beast",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB01-039": {
    "id": "EB01-039",
    "name": "Conquerer of Three Worlds Ragnaraku",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "EB01-022": {
    "id": "EB01-022",
    "name": "Inazuma",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB01-015": {
    "id": "EB01-015",
    "name": "Scratchmen Apoo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / On-Air Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "EB01-014": {
    "id": "EB01-014",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB01-010": {
    "id": "EB01-010",
    "name": "There's No Way You Could Defeat Me!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Water Seven / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "EB01-003": {
    "id": "EB01-003",
    "name": "Kid & Killer",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB01-032": {
    "id": "EB01-032",
    "name": "Army Wolves",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Impel Down",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "EB01-004": {
    "id": "EB01-004",
    "name": "Koza",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "EB01-025": {
    "id": "EB01-025",
    "name": "Fourtricks",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "EB01-013": {
    "id": "EB01-013",
    "name": "Kouzuki Hiyori",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "4 Cost / 0 Power"
  },
  "EB01-034": {
    "id": "EB01-034",
    "name": "Ms. Wednesday",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB01-027": {
    "id": "EB01-027",
    "name": "Mr.1(Daz.Bonez)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB01-002": {
    "id": "EB01-002",
    "name": "Izo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Land of Wano / Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "EB01-017": {
    "id": "EB01-017",
    "name": "Blueno",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / CP0",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "EB01-028": {
    "id": "EB01-028",
    "name": "Gum-Gum Champion Rifle",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB01-050": {
    "id": "EB01-050",
    "name": "...I Want to Live!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "EB01-041": {
    "id": "EB01-041",
    "name": "Crocus",
    "cardType": "Character",
    "color": "Black",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "EB01-049": {
    "id": "EB01-049",
    "name": "T-Bone",
    "cardType": "Character",
    "color": "Black",
    "traits": "Water Seven / Navy",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "EB01-046": {
    "id": "EB01-046",
    "name": "Brook",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB01-043": {
    "id": "EB01-043",
    "name": "Spandine",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "EB01-042": {
    "id": "EB01-042",
    "name": "Scarlet",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB01-048": {
    "id": "EB01-048",
    "name": "Laboon",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB01-044": {
    "id": "EB01-044",
    "name": "Funkfreed",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "EB01-045": {
    "id": "EB01-045",
    "name": "Brook",
    "cardType": "Character",
    "color": "Black",
    "traits": "Rumbar Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB01-047": {
    "id": "EB01-047",
    "name": "Laboon",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "EB01-060": {
    "id": "EB01-060",
    "name": "Did Someone Say...Kami?",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "EB01-051": {
    "id": "EB01-051",
    "name": "Finger Pistol",
    "cardType": "Event",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "EB01-052": {
    "id": "EB01-052",
    "name": "Viola",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB01-055": {
    "id": "EB01-055",
    "name": "Charlotte Compote",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "EB01-058": {
    "id": "EB01-058",
    "name": "Mont Blanc Cricket",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Monkey Mountain Alliance",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "EB01-057": {
    "id": "EB01-057",
    "name": "Shirahoshi",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB01-054": {
    "id": "EB01-054",
    "name": "Gan.Fall",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB01-053": {
    "id": "EB01-053",
    "name": "Gastino",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Scientist",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "EB01-061": {
    "id": "EB01-061",
    "name": "Mr.2.Bon.Kurei(Bentham)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Former Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "EB01-059": {
    "id": "EB01-059",
    "name": "Kingdom Come",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "EB01-056": {
    "id": "EB01-056",
    "name": "Charlotte Flampe",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "EB02-003": {
    "id": "EB02-003",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Drum Kingdom / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "EB02-004": {
    "id": "EB02-004",
    "name": "Don Accino",
    "cardType": "Character",
    "color": "Red",
    "traits": "Accino Family",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "EB02-002": {
    "id": "EB02-002",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB02-001": {
    "id": "EB02-001",
    "name": "Karoo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Alabasta",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "EB02-007": {
    "id": "EB02-007",
    "name": "Cloven Rose Blizzard",
    "cardType": "Event",
    "color": "Red",
    "traits": "Animal / Water Seven / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "EB02-012": {
    "id": "EB02-012",
    "name": "Gaimon",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "EB02-005": {
    "id": "EB02-005",
    "name": "Fake Straw Hat Crew",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fake Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "EB02-011": {
    "id": "EB02-011",
    "name": "Arlong",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / East Blue / Arlong Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB02-008": {
    "id": "EB02-008",
    "name": "The Peak",
    "cardType": "Event",
    "color": "Red",
    "traits": "Music",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB02-006": {
    "id": "EB02-006",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Red",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB02-010": {
    "id": "EB02-010",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Green/Purple",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "EB02-009": {
    "id": "EB02-009",
    "name": "Thousand Sunny",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB02-017": {
    "id": "EB02-017",
    "name": "Nami",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "EB02-015": {
    "id": "EB02-015",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "EB02-018": {
    "id": "EB02-018",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Buggy Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "EB02-014": {
    "id": "EB02-014",
    "name": "Sarfunkel",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB02-013": {
    "id": "EB02-013",
    "name": "Carrot",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "EB02-016": {
    "id": "EB02-016",
    "name": "Chopperman",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB02-019": {
    "id": "EB02-019",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB02-021": {
    "id": "EB02-021",
    "name": "Gum-Gum Giant Pistol",
    "cardType": "Event",
    "color": "Green",
    "traits": "Water Seven / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "EB02-022": {
    "id": "EB02-022",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB02-020": {
    "id": "EB02-020",
    "name": "We Are!",
    "cardType": "Event",
    "color": "Green",
    "traits": "Music",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB02-023": {
    "id": "EB02-023",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB02-024": {
    "id": "EB02-024",
    "name": "Sogeking",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Sniper Island",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB02-025": {
    "id": "EB02-025",
    "name": "Donquixote Rosinante",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "EB02-026": {
    "id": "EB02-026",
    "name": "Nefeltari Vivi",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "EB02-027": {
    "id": "EB02-027",
    "name": "Vista",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB02-028": {
    "id": "EB02-028",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Alabasta / Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "EB02-030": {
    "id": "EB02-030",
    "name": "And That's When Somebody Makes Fun of Their Friend's Dream!!!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB02-034": {
    "id": "EB02-034",
    "name": "Komei",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy / Foxy Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "EB02-035": {
    "id": "EB02-035",
    "name": "Sanji & Pudding",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "EB02-033": {
    "id": "EB02-033",
    "name": "Klabautermann",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sprite",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "EB02-031": {
    "id": "EB02-031",
    "name": "Hope",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Music",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB02-032": {
    "id": "EB02-032",
    "name": "Iceburg",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "EB02-036": {
    "id": "EB02-036",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "EB02-029": {
    "id": "EB02-029",
    "name": "Grandpa Ryu",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal / East Blue",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "EB02-037": {
    "id": "EB02-037",
    "name": "Franky",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB02-039": {
    "id": "EB02-039",
    "name": "GERMA 66",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "EB02-040": {
    "id": "EB02-040",
    "name": "BRAND NEW WORLD",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Music",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB02-038": {
    "id": "EB02-038",
    "name": "Magellan",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB02-041": {
    "id": "EB02-041",
    "name": "Merry Go",
    "cardType": "Stage",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB02-044": {
    "id": "EB02-044",
    "name": "Sengoku",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "EB02-042": {
    "id": "EB02-042",
    "name": "All-Hunt Grount",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "EB02-043": {
    "id": "EB02-043",
    "name": "Jonathan",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "EB02-045": {
    "id": "EB02-045",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB02-047": {
    "id": "EB02-047",
    "name": "Blueno",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB02-046": {
    "id": "EB02-046",
    "name": "Hildon",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "EB02-048": {
    "id": "EB02-048",
    "name": "Brook",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB02-049": {
    "id": "EB02-049",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB02-050": {
    "id": "EB02-050",
    "name": "Kokoro no Chizu",
    "cardType": "Event",
    "color": "Black",
    "traits": "Music",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB02-051": {
    "id": "EB02-051",
    "name": "Three-Pace Hum Soul Notch Slash",
    "cardType": "Event",
    "color": "Black",
    "traits": "Former Rumbar Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "EB02-052": {
    "id": "EB02-052",
    "name": "Enel",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "10 Cost / 11000 Power"
  },
  "EB02-053": {
    "id": "EB02-053",
    "name": "Myskina Olga",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Alchemi",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB02-055": {
    "id": "EB02-055",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB02-054": {
    "id": "EB02-054",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB02-057": {
    "id": "EB02-057",
    "name": "Mad Treasure",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Treasure Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB02-056": {
    "id": "EB02-056",
    "name": "Vegapunk",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Scientist / Egghead",
    "rarity": "R",
    "cost": "5 Cost / 0 Power"
  },
  "EB02-058": {
    "id": "EB02-058",
    "name": "UUUUUS!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Music",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB02-059": {
    "id": "EB02-059",
    "name": "Without Your Help I Can't Become the King of the Pirates!!!!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "EB02-061": {
    "id": "EB02-061",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB02-060": {
    "id": "EB02-060",
    "name": "Merry Go",
    "cardType": "Stage",
    "color": "Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "EB03-001": {
    "id": "EB03-001",
    "name": "Nefeltari Vivi",
    "cardType": "Leader",
    "color": "Red/Blue",
    "traits": "Alabasta",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "EB03-003": {
    "id": "EB03-003",
    "name": "Uta",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "EB03-002": {
    "id": "EB03-002",
    "name": "Ain",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Neo Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB03-007": {
    "id": "EB03-007",
    "name": "Baccarat",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Grantesoro",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB03-006": {
    "id": "EB03-006",
    "name": "Nami",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "EB03-004": {
    "id": "EB03-004",
    "name": "Carina",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Grantesoro",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "EB03-005": {
    "id": "EB03-005",
    "name": "Sugar",
    "cardType": "Character",
    "color": "Red",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "EB03-015": {
    "id": "EB03-015",
    "name": "Camie",
    "cardType": "Character",
    "color": "Green",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB03-016": {
    "id": "EB03-016",
    "name": "Kouzuki Hiyori",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "EB03-008": {
    "id": "EB03-008",
    "name": "Hibari",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "EB03-009": {
    "id": "EB03-009",
    "name": "Makino",
    "cardType": "Character",
    "color": "Red",
    "traits": "Windmill Village",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "EB03-010": {
    "id": "EB03-010",
    "name": "Monet",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB03-017": {
    "id": "EB03-017",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB03-013": {
    "id": "EB03-013",
    "name": "Carrot",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB03-012": {
    "id": "EB03-012",
    "name": "Otama",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB03-019": {
    "id": "EB03-019",
    "name": "Wanda",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB03-011": {
    "id": "EB03-011",
    "name": "But If We Ever See Each Other Again... Will You Call Me Your Shipmate?!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB03-014": {
    "id": "EB03-014",
    "name": "Kuina",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Frost Moon Village",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB03-021": {
    "id": "EB03-021",
    "name": "Alvida",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "4 Cost / 2000 Power"
  },
  "EB03-023": {
    "id": "EB03-023",
    "name": "Kaya",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB03-020": {
    "id": "EB03-020",
    "name": "There You Are, Sore Loser!",
    "cardType": "Event",
    "color": "Green",
    "traits": "FILM",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB03-018": {
    "id": "EB03-018",
    "name": "Tashigi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "EB03-022": {
    "id": "EB03-022",
    "name": "Isuka",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "EB03-025": {
    "id": "EB03-025",
    "name": "Hina",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB03-027": {
    "id": "EB03-027",
    "name": "Marguerite",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB03-026": {
    "id": "EB03-026",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "EB03-028": {
    "id": "EB03-028",
    "name": "Yu",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB03-024": {
    "id": "EB03-024",
    "name": "Nefeltari Vivi",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "5 Cost / 4000 Power"
  },
  "EB03-029": {
    "id": "EB03-029",
    "name": "Insolent Fool!! Stand Down!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB03-030": {
    "id": "EB03-030",
    "name": "Viola",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB03-031": {
    "id": "EB03-031",
    "name": "Vinsmoke Reiju",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "EB03-034": {
    "id": "EB03-034",
    "name": "Charlotte Linlin",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "EB03-036": {
    "id": "EB03-036",
    "name": "Baby 5",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 2000 Power"
  },
  "EB03-033": {
    "id": "EB03-033",
    "name": "Charlotte Brulee",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB03-035": {
    "id": "EB03-035",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "EB03-032": {
    "id": "EB03-032",
    "name": "Charlotte Flampe",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "EB03-038": {
    "id": "EB03-038",
    "name": "Thanks for the Treat. ♡",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB03-037": {
    "id": "EB03-037",
    "name": "Lim",
    "cardType": "Character",
    "color": "Purple",
    "traits": "ODYSSEY",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB03-040": {
    "id": "EB03-040",
    "name": "Kalifa",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB03-042": {
    "id": "EB03-042",
    "name": "Koala",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB03-041": {
    "id": "EB03-041",
    "name": "Kujyaku",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "EB03-039": {
    "id": "EB03-039",
    "name": "Ulti",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB03-043": {
    "id": "EB03-043",
    "name": "Stussy",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "EB03-044": {
    "id": "EB03-044",
    "name": "Black Maria",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB03-045": {
    "id": "EB03-045",
    "name": "Perona",
    "cardType": "Character",
    "color": "Black",
    "traits": "Muggy Kingdom / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "EB03-047": {
    "id": "EB03-047",
    "name": "Miss.Valentine(Mikita)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "EB03-046": {
    "id": "EB03-046",
    "name": "Miss Doublefinger(Zala)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB03-048": {
    "id": "EB03-048",
    "name": "Rebecca",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB03-050": {
    "id": "EB03-050",
    "name": "Conis",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB03-049": {
    "id": "EB03-049",
    "name": "I Knew You People Were Behind This.",
    "cardType": "Event",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB03-051": {
    "id": "EB03-051",
    "name": "Charlotte Smoothie",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "EB03-053": {
    "id": "EB03-053",
    "name": "Nami",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB03-052": {
    "id": "EB03-052",
    "name": "Shirahoshi",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "EB03-054": {
    "id": "EB03-054",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "EB03-062": {
    "id": "EB03-062",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "8 Cost / 6000 Power"
  },
  "EB03-056": {
    "id": "EB03-056",
    "name": "Belo Betty",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 3000 Power"
  },
  "EB03-058": {
    "id": "EB03-058",
    "name": "Lilith",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Scientist",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB03-055": {
    "id": "EB03-055",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "EB03-059": {
    "id": "EB03-059",
    "name": "S-Snake",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Seraphim / Egghead",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB04-003": {
    "id": "EB04-003",
    "name": "Smoker & Tashigi",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard / Navy",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "EB03-060": {
    "id": "EB03-060",
    "name": "Will You Be My Servant?",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB03-061": {
    "id": "EB03-061",
    "name": "Uta",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "EB04-002": {
    "id": "EB04-002",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Red",
    "traits": "Egghead / Bonney Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "EB04-001": {
    "id": "EB04-001",
    "name": "Jewelry Bonney",
    "cardType": "Leader",
    "color": "Red/Yellow",
    "traits": "Egghead / Bonney Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "EB04-004": {
    "id": "EB04-004",
    "name": "Zeff",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "EB03-057": {
    "id": "EB03-057",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB04-005": {
    "id": "EB04-005",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Seven Warlords of the Sea / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "EB04-006": {
    "id": "EB04-006",
    "name": "Moda",
    "cardType": "Character",
    "color": "Red",
    "traits": "Lulucia Kingdom",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "EB04-007": {
    "id": "EB04-007",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Red",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "EB04-008": {
    "id": "EB04-008",
    "name": "Distorted Future",
    "cardType": "Event",
    "color": "Red",
    "traits": "Egghead / Bonney Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB04-010": {
    "id": "EB04-010",
    "name": "Lulucia Kingdom",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Lulucia Kingdom",
    "rarity": "R",
    "cost": "7 Cost"
  },
  "EB04-012": {
    "id": "EB04-012",
    "name": "Kikunojo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "EB04-014": {
    "id": "EB04-014",
    "name": "Kozuki Sukiyaki",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "EB04-013": {
    "id": "EB04-013",
    "name": "Carrot",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "EB04-011": {
    "id": "EB04-011",
    "name": "Scaled Neptunian",
    "cardType": "Character",
    "color": "Green",
    "traits": "Neptunian",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "EB04-015": {
    "id": "EB04-015",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Fish-Man Island / The Sun Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "EB04-016": {
    "id": "EB04-016",
    "name": "Bird Neptunian",
    "cardType": "Character",
    "color": "Green",
    "traits": "Neptunian",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "EB04-009": {
    "id": "EB04-009",
    "name": "It's My Student's Farewell. I Want It to Be Proper.",
    "cardType": "Event",
    "color": "Red",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "EB04-022": {
    "id": "EB04-022",
    "name": "Issho",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Navy",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "EB04-018": {
    "id": "EB04-018",
    "name": "Megalo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal / Fish-Man Island",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "EB04-020": {
    "id": "EB04-020",
    "name": "Shark Brick Fist",
    "cardType": "Event",
    "color": "Green",
    "traits": "Fish-Man / Fish-Man Island / The Sun Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB04-019": {
    "id": "EB04-019",
    "name": "Eleclaw",
    "cardType": "Event",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB04-021": {
    "id": "EB04-021",
    "name": "Igaram",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB04-023": {
    "id": "EB04-023",
    "name": "Chaka & Pell",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "EB04-017": {
    "id": "EB04-017",
    "name": "Mystoms",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 5000 Power"
  },
  "EB04-026": {
    "id": "EB04-026",
    "name": "Bluegrass",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Egghead / Navy",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "EB04-025": {
    "id": "EB04-025",
    "name": "Nefeltari Vivi",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "7 Cost / 4000 Power"
  },
  "EB04-024": {
    "id": "EB04-024",
    "name": "Terracotta",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB04-028": {
    "id": "EB04-028",
    "name": "Ice Time",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "EB04-027": {
    "id": "EB04-027",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "EB04-029": {
    "id": "EB04-029",
    "name": "I Heard the Sound...of a Lady's Teardrops Falling",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Punk Hazard / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB04-030": {
    "id": "EB04-030",
    "name": "Kaido",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "EB04-032": {
    "id": "EB04-032",
    "name": "Queen",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "EB04-038": {
    "id": "EB04-038",
    "name": "Rosinante & Law",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "EB04-031": {
    "id": "EB04-031",
    "name": "King",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Lunarian / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB04-035": {
    "id": "EB04-035",
    "name": "Hitokiri Kamazo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "SMILE / Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB04-036": {
    "id": "EB04-036",
    "name": "Foxy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "EB04-034": {
    "id": "EB04-034",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "EB04-033": {
    "id": "EB04-033",
    "name": "Groggy Monsters",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Giant / Fish-Man / Foxy Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB04-037": {
    "id": "EB04-037",
    "name": "Porche",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "EB04-043": {
    "id": "EB04-043",
    "name": "Kaku",
    "cardType": "Character",
    "color": "Black",
    "traits": "Egghead / CP0",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "EB04-040": {
    "id": "EB04-040",
    "name": "Flame Dragon Torch",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB04-039": {
    "id": "EB04-039",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "EB04-047": {
    "id": "EB04-047",
    "name": "Helmeppo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "EB04-042": {
    "id": "EB04-042",
    "name": "Alpha",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP8",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "EB04-041": {
    "id": "EB04-041",
    "name": "Stealth Black",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "EB04-048": {
    "id": "EB04-048",
    "name": "Rob Lucci",
    "cardType": "Character",
    "color": "Black",
    "traits": "Egghead / CP0",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "EB04-045": {
    "id": "EB04-045",
    "name": "Ginny",
    "cardType": "Character",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "EB04-046": {
    "id": "EB04-046",
    "name": "Doll",
    "cardType": "Character",
    "color": "Black",
    "traits": "Egghead / Navy",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "EB04-044": {
    "id": "EB04-044",
    "name": "Koby",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "EB04-049": {
    "id": "EB04-049",
    "name": "Finger Pistol Yellow Lotus",
    "cardType": "Event",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "EB04-051": {
    "id": "EB04-051",
    "name": "Emet",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead",
    "rarity": "R",
    "cost": "8 Cost / 7000 Power"
  },
  "EB04-050": {
    "id": "EB04-050",
    "name": "I'll Whip You Into Shape. ♡",
    "cardType": "Event",
    "color": "Black",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "EB04-053": {
    "id": "EB04-053",
    "name": "Sentomaru",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Navy",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "EB04-054": {
    "id": "EB04-054",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Revolutionary Army",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "EB04-056": {
    "id": "EB04-056",
    "name": "Pacifista",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Biological Weapon / Egghead / Navy",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "EB04-055": {
    "id": "EB04-055",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "EB04-052": {
    "id": "EB04-052",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "EB04-058": {
    "id": "EB04-058",
    "name": "Borsalino",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "EB04-057": {
    "id": "EB04-057",
    "name": "Vegapunk",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Ohara / Scientist",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "EB04-059": {
    "id": "EB04-059",
    "name": "Black Rope Dragon Twister",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Fish-Man Island / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "OP01-003": {
    "id": "OP01-003",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Red/Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "EB04-060": {
    "id": "EB04-060",
    "name": "Gum-Gum Hawk Gatling",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Egghead / The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP01-001": {
    "id": "OP01-001",
    "name": "Roronoa Zoro",
    "cardType": "Leader",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "EB04-061": {
    "id": "EB04-061",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP01-002": {
    "id": "OP01-002",
    "name": "Trafalgar Law",
    "cardType": "Leader",
    "color": "Red/Green",
    "traits": "Supernovas / Heart Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP01-006": {
    "id": "OP01-006",
    "name": "Otama",
    "cardType": "Character",
    "color": "Red",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP01-005": {
    "id": "OP01-005",
    "name": "Uta",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP01-004": {
    "id": "OP01-004",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-007": {
    "id": "OP01-007",
    "name": "Caribou",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Caribou Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-008": {
    "id": "OP01-008",
    "name": "Cavendish",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Beautiful Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-010": {
    "id": "OP01-010",
    "name": "Komachiyo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Land of Wano",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP01-014": {
    "id": "OP01-014",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-013": {
    "id": "OP01-013",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-016": {
    "id": "OP01-016",
    "name": "Nami",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP01-015": {
    "id": "OP01-015",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-017": {
    "id": "OP01-017",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-009": {
    "id": "OP01-009",
    "name": "Carrot",
    "cardType": "Character",
    "color": "Red",
    "traits": "Minks",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-019": {
    "id": "OP01-019",
    "name": "Bartolomeo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Barto Club",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP01-012": {
    "id": "OP01-012",
    "name": "Sai",
    "cardType": "Character",
    "color": "Red",
    "traits": "Happosui Army",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP01-011": {
    "id": "OP01-011",
    "name": "Gordon",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-022": {
    "id": "OP01-022",
    "name": "Brook",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-025": {
    "id": "OP01-025",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP01-018": {
    "id": "OP01-018",
    "name": "Hajrudin",
    "cardType": "Character",
    "color": "Red",
    "traits": "Giant / New Giant Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP01-021": {
    "id": "OP01-021",
    "name": "Franky",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-020": {
    "id": "OP01-020",
    "name": "Hyogoro",
    "cardType": "Character",
    "color": "Red",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-024": {
    "id": "OP01-024",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-023": {
    "id": "OP01-023",
    "name": "Marco",
    "cardType": "Character",
    "color": "Red",
    "traits": "Former Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP01-026": {
    "id": "OP01-026",
    "name": "Gum-Gum Fire-Fist Pistol Red Hawk",
    "cardType": "Event",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP01-033": {
    "id": "OP01-033",
    "name": "Izo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Former Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP01-027": {
    "id": "OP01-027",
    "name": "Round Table",
    "cardType": "Event",
    "color": "Red",
    "traits": "Supernovas / Beautiful Pirates",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP01-028": {
    "id": "OP01-028",
    "name": "Green Star Rafflesia",
    "cardType": "Event",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP01-029": {
    "id": "OP01-029",
    "name": "Radical Beam!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP01-032": {
    "id": "OP01-032",
    "name": "Ashura Doji",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-030": {
    "id": "OP01-030",
    "name": "In Two Years!! At the Sabaody Archipelago!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP01-034": {
    "id": "OP01-034",
    "name": "Inuarashi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-031": {
    "id": "OP01-031",
    "name": "Kouzuki Oden",
    "cardType": "Leader",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP01-035": {
    "id": "OP01-035",
    "name": "Okiku",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP01-038": {
    "id": "OP01-038",
    "name": "Kanjuro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-037": {
    "id": "OP01-037",
    "name": "Kawamatsu",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-042": {
    "id": "OP01-042",
    "name": "Komurasaki",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP01-036": {
    "id": "OP01-036",
    "name": "Otsuru",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP01-039": {
    "id": "OP01-039",
    "name": "Killer",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP01-045": {
    "id": "OP01-045",
    "name": "Jean Bart",
    "cardType": "Character",
    "color": "Green",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP01-040": {
    "id": "OP01-040",
    "name": "Kin'emon",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP01-044": {
    "id": "OP01-044",
    "name": "Shachi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-041": {
    "id": "OP01-041",
    "name": "Kouzuki Momonosuke",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP01-043": {
    "id": "OP01-043",
    "name": "Shinobu",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP01-046": {
    "id": "OP01-046",
    "name": "Denjiro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP01-051": {
    "id": "OP01-051",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP01-053": {
    "id": "OP01-053",
    "name": "Wire",
    "cardType": "Character",
    "color": "Green",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP01-048": {
    "id": "OP01-048",
    "name": "Nekomamushi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-049": {
    "id": "OP01-049",
    "name": "Bepo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP01-047": {
    "id": "OP01-047",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP01-050": {
    "id": "OP01-050",
    "name": "Penguin",
    "cardType": "Character",
    "color": "Green",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP01-059": {
    "id": "OP01-059",
    "name": "BE-BENG!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP01-056": {
    "id": "OP01-056",
    "name": "Demon Face",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Hawkins Pirates",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "OP01-054": {
    "id": "OP01-054",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Navy / Drake Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP01-055": {
    "id": "OP01-055",
    "name": "You Can Be My Samurai!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP01-052": {
    "id": "OP01-052",
    "name": "Raizo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-060": {
    "id": "OP01-060",
    "name": "Donquixote Doflamingo",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP01-057": {
    "id": "OP01-057",
    "name": "Paradise Waterfall",
    "cardType": "Event",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP01-061": {
    "id": "OP01-061",
    "name": "Kaido",
    "cardType": "Leader",
    "color": "Blue/Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP01-067": {
    "id": "OP01-067",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP01-058": {
    "id": "OP01-058",
    "name": "Punk Gibson",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP01-062": {
    "id": "OP01-062",
    "name": "Crocodile",
    "cardType": "Leader",
    "color": "Blue/Purple",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP01-064": {
    "id": "OP01-064",
    "name": "Alvida",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Buggy Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-063": {
    "id": "OP01-063",
    "name": "Arlong",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / Arlong Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-066": {
    "id": "OP01-066",
    "name": "Krieg",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Krieg Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP01-065": {
    "id": "OP01-065",
    "name": "Vergo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy / Donquixote Pirates / Punk Hazard",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP01-068": {
    "id": "OP01-068",
    "name": "Gecko Moria",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-070": {
    "id": "OP01-070",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "9 Cost / 9000 Power"
  },
  "OP01-071": {
    "id": "OP01-071",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 2000 Power"
  },
  "OP01-069": {
    "id": "OP01-069",
    "name": "Caesar Clown",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Scientist / Punk Hazard",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-072": {
    "id": "OP01-072",
    "name": "Smiley",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Biological Weapon / Punk Hazard",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP01-073": {
    "id": "OP01-073",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-074": {
    "id": "OP01-074",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-075": {
    "id": "OP01-075",
    "name": "Pacifista",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Biological Weapon / Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-079": {
    "id": "OP01-079",
    "name": "Ms. All Sunday",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP01-076": {
    "id": "OP01-076",
    "name": "Bellamy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP01-084": {
    "id": "OP01-084",
    "name": "Mr.2.Bon.Kurei(Bentham)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-088": {
    "id": "OP01-088",
    "name": "Desert Spada",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP01-077": {
    "id": "OP01-077",
    "name": "Perona",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP01-080": {
    "id": "OP01-080",
    "name": "Miss Doublefinger(Zala)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-078": {
    "id": "OP01-078",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-086": {
    "id": "OP01-086",
    "name": "Overheat",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP01-081": {
    "id": "OP01-081",
    "name": "Mocha",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Punk Hazard",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP01-082": {
    "id": "OP01-082",
    "name": "Monet",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Donquixote Pirates / Punk Hazard",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-083": {
    "id": "OP01-083",
    "name": "Mr.1(Daz.Bonez)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-085": {
    "id": "OP01-085",
    "name": "Mr.3(Galdino)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-093": {
    "id": "OP01-093",
    "name": "Ulti",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-091": {
    "id": "OP01-091",
    "name": "King",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP01-089": {
    "id": "OP01-089",
    "name": "Crescent Cutlass",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP01-087": {
    "id": "OP01-087",
    "name": "Officer Agents",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP01-090": {
    "id": "OP01-090",
    "name": "Baroque Works",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP01-092": {
    "id": "OP01-092",
    "name": "Urashima",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP01-100": {
    "id": "OP01-100",
    "name": "Kurozumi Higurashi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano / Kurozumi Clan",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-094": {
    "id": "OP01-094",
    "name": "Kaido",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP01-102": {
    "id": "OP01-102",
    "name": "Jack",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-096": {
    "id": "OP01-096",
    "name": "King",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP01-099": {
    "id": "OP01-099",
    "name": "Kurozumi Semimaru",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano / Kurozumi Clan",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-103": {
    "id": "OP01-103",
    "name": "Scratchmen Apoo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / On-Air Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP01-095": {
    "id": "OP01-095",
    "name": "Kyoshirou",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP01-097": {
    "id": "OP01-097",
    "name": "Queen",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 5000 Power"
  },
  "OP01-098": {
    "id": "OP01-098",
    "name": "Kurozumi Orochi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano / Kurozumi Clan",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP01-101": {
    "id": "OP01-101",
    "name": "Sasaki",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-104": {
    "id": "OP01-104",
    "name": "Speed",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-105": {
    "id": "OP01-105",
    "name": "Bao Huang",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-107": {
    "id": "OP01-107",
    "name": "Babanuki",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP01-106": {
    "id": "OP01-106",
    "name": "Basil Hawkins",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / Hawkins Pirates",
    "rarity": "R",
    "cost": "4 Cost / 2000 Power"
  },
  "OP01-108": {
    "id": "OP01-108",
    "name": "Hitokiri Kamazo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Supernovas / Kid Pirates / SMILE",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-111": {
    "id": "OP01-111",
    "name": "Black Maria",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-110": {
    "id": "OP01-110",
    "name": "Fukurokuju",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP01-112": {
    "id": "OP01-112",
    "name": "Page One",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP01-109": {
    "id": "OP01-109",
    "name": "Who's.Who",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP01-114": {
    "id": "OP01-114",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy / Drake Pirates / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP01-113": {
    "id": "OP01-113",
    "name": "Holedem",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP01-116": {
    "id": "OP01-116",
    "name": "Artificial Devil Fruit SMILE",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP02-002": {
    "id": "OP02-002",
    "name": "Monkey.D.Garp",
    "cardType": "Leader",
    "color": "Red/Black",
    "traits": "Navy",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP01-115": {
    "id": "OP01-115",
    "name": "Elephant's Marchoo",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP01-118": {
    "id": "OP01-118",
    "name": "Ulti-Mortar",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP01-117": {
    "id": "OP01-117",
    "name": "Sheep's Horn",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP01-119": {
    "id": "OP01-119",
    "name": "Thunder Bagua",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP01-120": {
    "id": "OP01-120",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP02-001": {
    "id": "OP02-001",
    "name": "Edward.Newgate",
    "cardType": "Leader",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "L",
    "cost": "6 Life / 6000 Power"
  },
  "OP02-004": {
    "id": "OP02-004",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP01-121": {
    "id": "OP01-121",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP02-003": {
    "id": "OP02-003",
    "name": "Atmos",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP02-006": {
    "id": "OP02-006",
    "name": "Kingdew",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP02-005": {
    "id": "OP02-005",
    "name": "Curly.Dadan",
    "cardType": "Character",
    "color": "Red",
    "traits": "Mountain Bandits",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-007": {
    "id": "OP02-007",
    "name": "Thatch",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP02-009": {
    "id": "OP02-009",
    "name": "Squard",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP02-008": {
    "id": "OP02-008",
    "name": "Jozu",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP02-010": {
    "id": "OP02-010",
    "name": "Dogura",
    "cardType": "Character",
    "color": "Red",
    "traits": "Mountain Bandits",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP02-013": {
    "id": "OP02-013",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP02-015": {
    "id": "OP02-015",
    "name": "Makino",
    "cardType": "Character",
    "color": "Red",
    "traits": "Windmill Village",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP02-017": {
    "id": "OP02-017",
    "name": "Masked Deuce",
    "cardType": "Character",
    "color": "Red",
    "traits": "Spade Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-012": {
    "id": "OP02-012",
    "name": "Blenheim",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-011": {
    "id": "OP02-011",
    "name": "Vista",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP02-014": {
    "id": "OP02-014",
    "name": "Whitey Bay",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP02-023": {
    "id": "OP02-023",
    "name": "You May Be a Fool...but I Still Love You",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP02-018": {
    "id": "OP02-018",
    "name": "Marco",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-025": {
    "id": "OP02-025",
    "name": "Kin'emon",
    "cardType": "Leader",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP02-016": {
    "id": "OP02-016",
    "name": "Magura",
    "cardType": "Character",
    "color": "Red",
    "traits": "Mountain Bandits",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP02-021": {
    "id": "OP02-021",
    "name": "Seaquake",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP02-019": {
    "id": "OP02-019",
    "name": "Rakuyo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP02-022": {
    "id": "OP02-022",
    "name": "Whitebeard Pirates",
    "cardType": "Event",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP02-020": {
    "id": "OP02-020",
    "name": "LittleOars Jr.",
    "cardType": "Character",
    "color": "Red",
    "traits": "Giant / Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP02-028": {
    "id": "OP02-028",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP02-024": {
    "id": "OP02-024",
    "name": "Moby Dick",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP02-026": {
    "id": "OP02-026",
    "name": "Sanji",
    "cardType": "Leader",
    "color": "Green/Blue",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP02-027": {
    "id": "OP02-027",
    "name": "Inuarashi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP02-032": {
    "id": "OP02-032",
    "name": "Shishilian",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-029": {
    "id": "OP02-029",
    "name": "Carrot",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP02-030": {
    "id": "OP02-030",
    "name": "Kouzuki Oden",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP02-031": {
    "id": "OP02-031",
    "name": "Kouzuki Toki",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP02-037": {
    "id": "OP02-037",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP02-033": {
    "id": "OP02-033",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP02-034": {
    "id": "OP02-034",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP02-040": {
    "id": "OP02-040",
    "name": "Brook",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-036": {
    "id": "OP02-036",
    "name": "Nami",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP02-035": {
    "id": "OP02-035",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-044": {
    "id": "OP02-044",
    "name": "Wanda",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-046": {
    "id": "OP02-046",
    "name": "Diable Jambe Venaison Shoot",
    "cardType": "Event",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP02-039": {
    "id": "OP02-039",
    "name": "Franky",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP02-038": {
    "id": "OP02-038",
    "name": "Nekomamushi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP02-041": {
    "id": "OP02-041",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP02-045": {
    "id": "OP02-045",
    "name": "Three Sword Style Oni Giri",
    "cardType": "Event",
    "color": "Green",
    "traits": "FILM / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP02-043": {
    "id": "OP02-043",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP02-042": {
    "id": "OP02-042",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP02-047": {
    "id": "OP02-047",
    "name": "Paradise Totsuka",
    "cardType": "Event",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP02-049": {
    "id": "OP02-049",
    "name": "Emporio.Ivankov",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP02-051": {
    "id": "OP02-051",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP02-052": {
    "id": "OP02-052",
    "name": "Cabaji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Buggy Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-054": {
    "id": "OP02-054",
    "name": "Gecko Moria",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP02-050": {
    "id": "OP02-050",
    "name": "Inazuma",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-055": {
    "id": "OP02-055",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP02-048": {
    "id": "OP02-048",
    "name": "Land of Wano",
    "cardType": "Stage",
    "color": "Green",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP02-059": {
    "id": "OP02-059",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-060": {
    "id": "OP02-060",
    "name": "Mohji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Buggy Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP02-053": {
    "id": "OP02-053",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP02-058": {
    "id": "OP02-058",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Buggy Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP02-063": {
    "id": "OP02-063",
    "name": "Mr.1(Daz.Bonez)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP02-061": {
    "id": "OP02-061",
    "name": "Morley",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Giant / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-062": {
    "id": "OP02-062",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP02-066": {
    "id": "OP02-066",
    "name": "Impel Down All Stars",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP02-065": {
    "id": "OP02-065",
    "name": "Mr.3(Galdino)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-069": {
    "id": "OP02-069",
    "name": "DEATH WINK",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP02-064": {
    "id": "OP02-064",
    "name": "Mr.2.Bon.Kurei(Bentham)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP02-068": {
    "id": "OP02-068",
    "name": "Gum-Gum Rain",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP02-067": {
    "id": "OP02-067",
    "name": "Arabesque Brick Fist",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Fish-Man / Impel Down",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP02-071": {
    "id": "OP02-071",
    "name": "Magellan",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP02-070": {
    "id": "OP02-070",
    "name": "New Kama Land",
    "cardType": "Stage",
    "color": "Blue",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP02-056": {
    "id": "OP02-056",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP02-057": {
    "id": "OP02-057",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP02-073": {
    "id": "OP02-073",
    "name": "Little Sadi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP02-076": {
    "id": "OP02-076",
    "name": "Shiryu",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-074": {
    "id": "OP02-074",
    "name": "Saldeath",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP02-072": {
    "id": "OP02-072",
    "name": "Zephyr",
    "cardType": "Leader",
    "color": "Purple/Black",
    "traits": "FILM / Neo Navy",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP02-077": {
    "id": "OP02-077",
    "name": "Solitaire",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP02-075": {
    "id": "OP02-075",
    "name": "Shiki",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Golden Lion Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-079": {
    "id": "OP02-079",
    "name": "Douglas Bullet",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / The Pirates Fest",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP02-078": {
    "id": "OP02-078",
    "name": "Daifugo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP02-086": {
    "id": "OP02-086",
    "name": "Minokoala",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down / Jailer Beast",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-085": {
    "id": "OP02-085",
    "name": "Magellan",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP02-081": {
    "id": "OP02-081",
    "name": "Domino",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP02-088": {
    "id": "OP02-088",
    "name": "Sphinx",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Impel Down",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP02-082": {
    "id": "OP02-082",
    "name": "Byrnndi World",
    "cardType": "Character",
    "color": "Purple",
    "traits": "World Pirates",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP02-083": {
    "id": "OP02-083",
    "name": "Hannyabal",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP02-080": {
    "id": "OP02-080",
    "name": "Dobon",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP02-090": {
    "id": "OP02-090",
    "name": "Hydra",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP02-084": {
    "id": "OP02-084",
    "name": "Blugori",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Impel Down",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP02-087": {
    "id": "OP02-087",
    "name": "Minotaur",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down / Jailer Beast",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-092": {
    "id": "OP02-092",
    "name": "Impel Down",
    "cardType": "Stage",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP02-089": {
    "id": "OP02-089",
    "name": "Judgment of Hell",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP02-096": {
    "id": "OP02-096",
    "name": "Kuzan",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-091": {
    "id": "OP02-091",
    "name": "Venom Road",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP02-094": {
    "id": "OP02-094",
    "name": "Isuka",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP02-093": {
    "id": "OP02-093",
    "name": "Smoker",
    "cardType": "Leader",
    "color": "Black",
    "traits": "Navy",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP02-097": {
    "id": "OP02-097",
    "name": "Komille",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP02-095": {
    "id": "OP02-095",
    "name": "Onigumo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP02-099": {
    "id": "OP02-099",
    "name": "Sakazuki",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP02-098": {
    "id": "OP02-098",
    "name": "Koby",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP02-100": {
    "id": "OP02-100",
    "name": "Jango",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-103": {
    "id": "OP02-103",
    "name": "Sengoku",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-106": {
    "id": "OP02-106",
    "name": "Tsuru",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP02-101": {
    "id": "OP02-101",
    "name": "Strawberry",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-102": {
    "id": "OP02-102",
    "name": "Smoker",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP02-104": {
    "id": "OP02-104",
    "name": "Sentomaru",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-105": {
    "id": "OP02-105",
    "name": "Tashigi",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP02-108": {
    "id": "OP02-108",
    "name": "Donquixote Rosinante",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP02-111": {
    "id": "OP02-111",
    "name": "Fullbody",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-109": {
    "id": "OP02-109",
    "name": "Jaguar.D.Saul",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Navy",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP02-107": {
    "id": "OP02-107",
    "name": "Doberman",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP02-114": {
    "id": "OP02-114",
    "name": "Borsalino",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP02-112": {
    "id": "OP02-112",
    "name": "Bell-mère",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP02-110": {
    "id": "OP02-110",
    "name": "Hina",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP02-115": {
    "id": "OP02-115",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-113": {
    "id": "OP02-113",
    "name": "Helmeppo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP02-116": {
    "id": "OP02-116",
    "name": "Yamakaji",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP02-117": {
    "id": "OP02-117",
    "name": "Ice Age",
    "cardType": "Event",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP03-004": {
    "id": "OP03-004",
    "name": "Curiel",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP03-015": {
    "id": "OP03-015",
    "name": "Lim",
    "cardType": "Character",
    "color": "Red",
    "traits": "ODYSSEY",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP03-009": {
    "id": "OP03-009",
    "name": "Haruta",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP02-119": {
    "id": "OP02-119",
    "name": "Meteor Volcano",
    "cardType": "Event",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP03-008": {
    "id": "OP03-008",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Buggy Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP02-118": {
    "id": "OP02-118",
    "name": "Yasakani Sacred Jewel",
    "cardType": "Event",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP02-120": {
    "id": "OP02-120",
    "name": "Uta",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP02-121": {
    "id": "OP02-121",
    "name": "Kuzan",
    "cardType": "Character",
    "color": "Black",
    "traits": "Former Navy",
    "rarity": "R",
    "cost": "10 Cost / 10000 Power"
  },
  "OP03-002": {
    "id": "OP03-002",
    "name": "Adio",
    "cardType": "Character",
    "color": "Red",
    "traits": "ODYSSEY",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP03-001": {
    "id": "OP03-001",
    "name": "Portgas.D.Ace",
    "cardType": "Leader",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP03-003": {
    "id": "OP03-003",
    "name": "Izo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Land of Wano / Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP03-005": {
    "id": "OP03-005",
    "name": "Thatch",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP03-007": {
    "id": "OP03-007",
    "name": "Namule",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP03-011": {
    "id": "OP03-011",
    "name": "Blamenco",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP03-006": {
    "id": "OP03-006",
    "name": "Speed Jil",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP03-013": {
    "id": "OP03-013",
    "name": "Marco",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP03-010": {
    "id": "OP03-010",
    "name": "Fossa",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP03-012": {
    "id": "OP03-012",
    "name": "Marshall.D.Teach",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP03-014": {
    "id": "OP03-014",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP03-016": {
    "id": "OP03-016",
    "name": "Flame Emperor",
    "cardType": "Event",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "7 Cost"
  },
  "OP03-020": {
    "id": "OP03-020",
    "name": "Striker",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP03-018": {
    "id": "OP03-018",
    "name": "Fire Fist",
    "cardType": "Event",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP03-017": {
    "id": "OP03-017",
    "name": "Cross Fire",
    "cardType": "Event",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP03-021": {
    "id": "OP03-021",
    "name": "Kuro",
    "cardType": "Leader",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP03-023": {
    "id": "OP03-023",
    "name": "Alvida",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Alvida Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP03-019": {
    "id": "OP03-019",
    "name": "Fiery Doll",
    "cardType": "Event",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP03-029": {
    "id": "OP03-029",
    "name": "Chew",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / East Blue / Arlong Pirates",
    "rarity": "R",
    "cost": "4 Cost / 3000 Power"
  },
  "OP03-022": {
    "id": "OP03-022",
    "name": "Arlong",
    "cardType": "Leader",
    "color": "Green/Yellow",
    "traits": "Fish-Man / East Blue / Arlong Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP03-024": {
    "id": "OP03-024",
    "name": "Gin",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP03-028": {
    "id": "OP03-028",
    "name": "Jango",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP03-026": {
    "id": "OP03-026",
    "name": "Kuroobi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / East Blue / Arlong Pirates",
    "rarity": "R",
    "cost": "4 Cost / 3000 Power"
  },
  "OP03-027": {
    "id": "OP03-027",
    "name": "Sham",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP03-025": {
    "id": "OP03-025",
    "name": "Krieg",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP03-030": {
    "id": "OP03-030",
    "name": "Nami",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Arlong Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP03-032": {
    "id": "OP03-032",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Buggy Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP03-034": {
    "id": "OP03-034",
    "name": "Buchi",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP03-031": {
    "id": "OP03-031",
    "name": "Pearl",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP03-035": {
    "id": "OP03-035",
    "name": "Momoo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal / East Blue",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP03-033": {
    "id": "OP03-033",
    "name": "Hatchan",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / East Blue / Arlong Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP03-036": {
    "id": "OP03-036",
    "name": "Out-of-the-Bag",
    "cardType": "Event",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP03-044": {
    "id": "OP03-044",
    "name": "Kaya",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP03-049": {
    "id": "OP03-049",
    "name": "Patty",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP03-051": {
    "id": "OP03-051",
    "name": "Bell-mère",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue / Former Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP03-048": {
    "id": "OP03-048",
    "name": "Nojiko",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP03-037": {
    "id": "OP03-037",
    "name": "Tooth Attack",
    "cardType": "Event",
    "color": "Green",
    "traits": "Fish-Man / East Blue / Arlong Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP03-042": {
    "id": "OP03-042",
    "name": "Usopp's Pirate Crew",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP03-041": {
    "id": "OP03-041",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP03-040": {
    "id": "OP03-040",
    "name": "Nami",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP03-038": {
    "id": "OP03-038",
    "name": "Deathly Poison Gas Bomb MH5",
    "cardType": "Event",
    "color": "Green",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP03-039": {
    "id": "OP03-039",
    "name": "One, Two, Jango",
    "cardType": "Event",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP03-050": {
    "id": "OP03-050",
    "name": "Boodle",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP03-047": {
    "id": "OP03-047",
    "name": "Zeff",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP03-043": {
    "id": "OP03-043",
    "name": "Gaimon",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP03-045": {
    "id": "OP03-045",
    "name": "Carne",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP03-046": {
    "id": "OP03-046",
    "name": "Genzo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP03-053": {
    "id": "OP03-053",
    "name": "Yosaku & Johnny",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP03-052": {
    "id": "OP03-052",
    "name": "Merry",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP03-055": {
    "id": "OP03-055",
    "name": "Gum-Gum Giant Gavel",
    "cardType": "Event",
    "color": "Blue",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP03-056": {
    "id": "OP03-056",
    "name": "Sanji's Pilaf",
    "cardType": "Event",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP03-054": {
    "id": "OP03-054",
    "name": "Usopp's Rubber Band of Doom!!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP03-058": {
    "id": "OP03-058",
    "name": "Iceburg",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP03-059": {
    "id": "OP03-059",
    "name": "Kaku",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP03-057": {
    "id": "OP03-057",
    "name": "Three Thousand Worlds",
    "cardType": "Event",
    "color": "Blue",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP03-064": {
    "id": "OP03-064",
    "name": "Tilestone",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP03-066": {
    "id": "OP03-066",
    "name": "Paulie",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP03-061": {
    "id": "OP03-061",
    "name": "Kiwi & Mozu",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / The Franky Family",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP03-060": {
    "id": "OP03-060",
    "name": "Kalifa",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP03-062": {
    "id": "OP03-062",
    "name": "Kokoro",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Merfolk / Water Seven",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP03-063": {
    "id": "OP03-063",
    "name": "Zambai",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / The Franky Family",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP03-072": {
    "id": "OP03-072",
    "name": "Gum-Gum Jet Gatling",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Water Seven / Straw Hat Crew",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP03-065": {
    "id": "OP03-065",
    "name": "Chimney & Gonbe",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Water Seven",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP03-067": {
    "id": "OP03-067",
    "name": "Peepley Lulu",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP03-070": {
    "id": "OP03-070",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP03-069": {
    "id": "OP03-069",
    "name": "Minorhinoceros",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down / Jailer Beast",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP03-068": {
    "id": "OP03-068",
    "name": "Minozebra",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down / Jailer Beast",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP03-071": {
    "id": "OP03-071",
    "name": "Rob Lucci",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP03-073": {
    "id": "OP03-073",
    "name": "Hull Dismantler Slash",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Water Seven / The Franky Family",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP03-074": {
    "id": "OP03-074",
    "name": "Top Knot",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP03-076": {
    "id": "OP03-076",
    "name": "Rob Lucci",
    "cardType": "Leader",
    "color": "Black",
    "traits": "CP9",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP03-075": {
    "id": "OP03-075",
    "name": "Galley-La Company",
    "cardType": "Stage",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP03-082": {
    "id": "OP03-082",
    "name": "Kumadori",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP03-077": {
    "id": "OP03-077",
    "name": "Charlotte Linlin",
    "cardType": "Leader",
    "color": "Black/Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP03-078": {
    "id": "OP03-078",
    "name": "Issho",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP03-090": {
    "id": "OP03-090",
    "name": "Blueno",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP03-081": {
    "id": "OP03-081",
    "name": "Kalifa",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP03-079": {
    "id": "OP03-079",
    "name": "Vergo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP03-080": {
    "id": "OP03-080",
    "name": "Kaku",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP03-084": {
    "id": "OP03-084",
    "name": "Jerry",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP6",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP03-085": {
    "id": "OP03-085",
    "name": "Jabra",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP03-086": {
    "id": "OP03-086",
    "name": "Spandam",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP03-087": {
    "id": "OP03-087",
    "name": "Nero",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP03-091": {
    "id": "OP03-091",
    "name": "Helmeppo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP03-088": {
    "id": "OP03-088",
    "name": "Fukurou",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP03-089": {
    "id": "OP03-089",
    "name": "Brannew",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP03-083": {
    "id": "OP03-083",
    "name": "Corgy",
    "cardType": "Character",
    "color": "Black",
    "traits": "World Government",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP03-095": {
    "id": "OP03-095",
    "name": "Soap Sheep",
    "cardType": "Event",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP03-092": {
    "id": "OP03-092",
    "name": "Rob Lucci",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP03-094": {
    "id": "OP03-094",
    "name": "Air Door",
    "cardType": "Event",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP03-096": {
    "id": "OP03-096",
    "name": "Tempest Kick Sky Slicer",
    "cardType": "Event",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP03-098": {
    "id": "OP03-098",
    "name": "Enies Lobby",
    "cardType": "Stage",
    "color": "Black",
    "traits": "World Government",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP03-093": {
    "id": "OP03-093",
    "name": "Wanze",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP7",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP03-097": {
    "id": "OP03-097",
    "name": "Six King Pistol",
    "cardType": "Event",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP03-100": {
    "id": "OP03-100",
    "name": "Kingbaum",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates / Homies",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP03-102": {
    "id": "OP03-102",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Vinsmoke Family",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP03-101": {
    "id": "OP03-101",
    "name": "Camie",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP03-103": {
    "id": "OP03-103",
    "name": "Bobbin the Disposer",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP03-099": {
    "id": "OP03-099",
    "name": "Charlotte Katakuri",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP03-104": {
    "id": "OP03-104",
    "name": "Shirley",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP03-106": {
    "id": "OP03-106",
    "name": "Charlotte Opera",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP03-105": {
    "id": "OP03-105",
    "name": "Charlotte Oven",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP03-110": {
    "id": "OP03-110",
    "name": "Charlotte Smoothie",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP03-107": {
    "id": "OP03-107",
    "name": "Charlotte Galette",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP03-113": {
    "id": "OP03-113",
    "name": "Charlotte Perospero",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP03-108": {
    "id": "OP03-108",
    "name": "Charlotte Cracker",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP03-109": {
    "id": "OP03-109",
    "name": "Charlotte Chiffon",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP03-111": {
    "id": "OP03-111",
    "name": "Charlotte Praline",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk / The Sun Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP03-112": {
    "id": "OP03-112",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP03-114": {
    "id": "OP03-114",
    "name": "Charlotte Linlin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP03-115": {
    "id": "OP03-115",
    "name": "Streusen",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP03-116": {
    "id": "OP03-116",
    "name": "Shirahoshi",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk",
    "rarity": "R",
    "cost": "5 Cost / 0 Power"
  },
  "OP03-117": {
    "id": "OP03-117",
    "name": "Napoleon",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates / Homies",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP03-118": {
    "id": "OP03-118",
    "name": "Ikoku Sovereignty",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP03-119": {
    "id": "OP03-119",
    "name": "Buzz Cut Mochi",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP04-001": {
    "id": "OP04-001",
    "name": "Nefeltari Vivi",
    "cardType": "Leader",
    "color": "Red/Blue",
    "traits": "Alabasta",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP03-120": {
    "id": "OP03-120",
    "name": "Tropical Torment",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP03-121": {
    "id": "OP03-121",
    "name": "Thunder Bolt",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP03-122": {
    "id": "OP03-122",
    "name": "Sogeking",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Sniper Island",
    "rarity": "R",
    "cost": "7 Cost / 6000 Power"
  },
  "OP04-002": {
    "id": "OP04-002",
    "name": "Igaram",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP03-123": {
    "id": "OP03-123",
    "name": "Charlotte Katakuri",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP04-003": {
    "id": "OP04-003",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP04-004": {
    "id": "OP04-004",
    "name": "Karoo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Alabasta",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP04-008": {
    "id": "OP04-008",
    "name": "Chaka",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP04-005": {
    "id": "OP04-005",
    "name": "Kung Fu Jugon",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Alabasta",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP04-007": {
    "id": "OP04-007",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP04-006": {
    "id": "OP04-006",
    "name": "Koza",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP04-009": {
    "id": "OP04-009",
    "name": "Super Spot-Billed Duck Troops",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Alabasta",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP04-011": {
    "id": "OP04-011",
    "name": "Nami",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP04-012": {
    "id": "OP04-012",
    "name": "Nefeltari Cobra",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP04-010": {
    "id": "OP04-010",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP04-014": {
    "id": "OP04-014",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP04-015": {
    "id": "OP04-015",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP04-016": {
    "id": "OP04-016",
    "name": "Bad Manners Kick Course",
    "cardType": "Event",
    "color": "Red",
    "traits": "Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP04-019": {
    "id": "OP04-019",
    "name": "Donquixote Doflamingo",
    "cardType": "Leader",
    "color": "Green/Purple",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP04-013": {
    "id": "OP04-013",
    "name": "Pell",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP04-018": {
    "id": "OP04-018",
    "name": "Enchanting Vertigo Dance",
    "cardType": "Event",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP04-017": {
    "id": "OP04-017",
    "name": "Happiness Punch",
    "cardType": "Event",
    "color": "Red",
    "traits": "Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP04-020": {
    "id": "OP04-020",
    "name": "Issho",
    "cardType": "Leader",
    "color": "Green/Black",
    "traits": "Navy",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP04-021": {
    "id": "OP04-021",
    "name": "Viola",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP04-022": {
    "id": "OP04-022",
    "name": "Eric",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP04-028": {
    "id": "OP04-028",
    "name": "Diamante",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP04-030": {
    "id": "OP04-030",
    "name": "Trebol",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP04-023": {
    "id": "OP04-023",
    "name": "Kuro",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP04-024": {
    "id": "OP04-024",
    "name": "Sugar",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP04-027": {
    "id": "OP04-027",
    "name": "Daddy Masterson",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Former Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP04-031": {
    "id": "OP04-031",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Green",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "10 Cost / 10000 Power"
  },
  "OP04-026": {
    "id": "OP04-026",
    "name": "Senor Pink",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP04-025": {
    "id": "OP04-025",
    "name": "Giolla",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP04-033": {
    "id": "OP04-033",
    "name": "Machvise",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP04-029": {
    "id": "OP04-029",
    "name": "Dellinger",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP04-032": {
    "id": "OP04-032",
    "name": "Baby 5",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP04-036": {
    "id": "OP04-036",
    "name": "Donquixote Family",
    "cardType": "Event",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP04-034": {
    "id": "OP04-034",
    "name": "Lao.G",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP04-039": {
    "id": "OP04-039",
    "name": "Rebecca",
    "cardType": "Leader",
    "color": "Blue/Black",
    "traits": "Dressrosa",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP04-038": {
    "id": "OP04-038",
    "name": "The Weak Do Not Have the Right to Choose How They Die!!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "OP04-035": {
    "id": "OP04-035",
    "name": "Spiderweb",
    "cardType": "Event",
    "color": "Green",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP04-040": {
    "id": "OP04-040",
    "name": "Queen",
    "cardType": "Leader",
    "color": "Blue/Yellow",
    "traits": "Animal Kingdom Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP04-044": {
    "id": "OP04-044",
    "name": "Kaido",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP04-037": {
    "id": "OP04-037",
    "name": "Flapping Thread",
    "cardType": "Event",
    "color": "Green",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP04-043": {
    "id": "OP04-043",
    "name": "Ulti",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP04-042": {
    "id": "OP04-042",
    "name": "Ipponmatsu",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP04-041": {
    "id": "OP04-041",
    "name": "Apis",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP04-050": {
    "id": "OP04-050",
    "name": "Hanger",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP04-046": {
    "id": "OP04-046",
    "name": "Queen",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP04-048": {
    "id": "OP04-048",
    "name": "Sasaki",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP04-049": {
    "id": "OP04-049",
    "name": "Jack",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP04-045": {
    "id": "OP04-045",
    "name": "King",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP04-052": {
    "id": "OP04-052",
    "name": "Black Maria",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP04-047": {
    "id": "OP04-047",
    "name": "Ice Oni",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Plague / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "8 Cost / 0 Power"
  },
  "OP04-051": {
    "id": "OP04-051",
    "name": "Who's.Who",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP04-053": {
    "id": "OP04-053",
    "name": "Page One",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP04-063": {
    "id": "OP04-063",
    "name": "Franky",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / The Franky Family",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP04-062": {
    "id": "OP04-062",
    "name": "Bananagator",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP04-054": {
    "id": "OP04-054",
    "name": "Rokki",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Giant / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP04-055": {
    "id": "OP04-055",
    "name": "Plague Rounds",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP04-057": {
    "id": "OP04-057",
    "name": "Dragon Twister Demolition Breath",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP04-059": {
    "id": "OP04-059",
    "name": "Iceburg",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Water Seven / Galley-La Company",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP04-058": {
    "id": "OP04-058",
    "name": "Crocodile",
    "cardType": "Leader",
    "color": "Purple/Yellow",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP04-056": {
    "id": "OP04-056",
    "name": "Gum-Gum Red Roc",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "OP04-067": {
    "id": "OP04-067",
    "name": "Miss.MerryChristmas(Drophy)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP04-060": {
    "id": "OP04-060",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP04-061": {
    "id": "OP04-061",
    "name": "Tom",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Fish-Man / Water Seven",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP04-064": {
    "id": "OP04-064",
    "name": "Ms. All Sunday",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP04-065": {
    "id": "OP04-065",
    "name": "Miss.Goldenweek(Marianne)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP04-066": {
    "id": "OP04-066",
    "name": "Miss.Valentine(Mikita)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP04-069": {
    "id": "OP04-069",
    "name": "Mr.2.Bon.Kurei(Bentham)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP04-071": {
    "id": "OP04-071",
    "name": "Mr.4(Babe)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP04-068": {
    "id": "OP04-068",
    "name": "Yokozuna",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Water Seven",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP04-072": {
    "id": "OP04-072",
    "name": "Mr.5(Gem)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP04-070": {
    "id": "OP04-070",
    "name": "Mr.3(Galdino)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP04-074": {
    "id": "OP04-074",
    "name": "Colors Trap",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP04-073": {
    "id": "OP04-073",
    "name": "Mr.13 & Ms.Friday",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Baroque Works",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP04-076": {
    "id": "OP04-076",
    "name": "Weakness...Is an Unforgivable Sin.",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP04-075": {
    "id": "OP04-075",
    "name": "Nez-Palm Cannon",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP04-082": {
    "id": "OP04-082",
    "name": "Kyros",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP04-077": {
    "id": "OP04-077",
    "name": "Ideo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP04-083": {
    "id": "OP04-083",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP04-080": {
    "id": "OP04-080",
    "name": "Gyats",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP04-078": {
    "id": "OP04-078",
    "name": "Oimo & Kashii",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / World Government",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP04-079": {
    "id": "OP04-079",
    "name": "Orlumbus",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Yonta Maria Fleet",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP04-081": {
    "id": "OP04-081",
    "name": "Cavendish",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Beautiful Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP04-084": {
    "id": "OP04-084",
    "name": "Stussy",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP04-086": {
    "id": "OP04-086",
    "name": "Chinjao",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Happosui Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP04-085": {
    "id": "OP04-085",
    "name": "Suleiman",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP04-087": {
    "id": "OP04-087",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Heart Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP04-092": {
    "id": "OP04-092",
    "name": "Rebecca",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP04-096": {
    "id": "OP04-096",
    "name": "Corrida Coliseum",
    "cardType": "Stage",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP04-088": {
    "id": "OP04-088",
    "name": "Hajrudin",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Dressrosa / New Giant Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP04-091": {
    "id": "OP04-091",
    "name": "Leo",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Tontattas / Dressrosa",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP04-089": {
    "id": "OP04-089",
    "name": "Bartolomeo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Barto Club",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP04-090": {
    "id": "OP04-090",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP04-097": {
    "id": "OP04-097",
    "name": "Otama",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP04-093": {
    "id": "OP04-093",
    "name": "Gum-Gum King Kong Gun",
    "cardType": "Event",
    "color": "Black",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP04-100": {
    "id": "OP04-100",
    "name": "Capone\"Gang\"Bege",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Firetank Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP04-094": {
    "id": "OP04-094",
    "name": "Trueno Bastardo",
    "cardType": "Event",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP04-095": {
    "id": "OP04-095",
    "name": "Barrier!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Dressrosa / Barto Club",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP04-098": {
    "id": "OP04-098",
    "name": "Toko",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP04-101": {
    "id": "OP04-101",
    "name": "Carmel",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The House of Lambs",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP04-099": {
    "id": "OP04-099",
    "name": "Olin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP04-102": {
    "id": "OP04-102",
    "name": "Kin'emon",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP04-103": {
    "id": "OP04-103",
    "name": "Kouzuki Hiyori",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP04-104": {
    "id": "OP04-104",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Vinsmoke Family",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP04-109": {
    "id": "OP04-109",
    "name": "Tonoyasu",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP04-105": {
    "id": "OP04-105",
    "name": "Charlotte Amande",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP04-106": {
    "id": "OP04-106",
    "name": "Charlotte Bavarois",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP04-108": {
    "id": "OP04-108",
    "name": "Charlotte Moscato",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP04-111": {
    "id": "OP04-111",
    "name": "Hera",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates / Homies",
    "rarity": "R",
    "cost": "5 Cost / 3000 Power"
  },
  "OP04-110": {
    "id": "OP04-110",
    "name": "Pound",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Whole Cake Island",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP04-113": {
    "id": "OP04-113",
    "name": "Rabiyan",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates / Homies",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP04-107": {
    "id": "OP04-107",
    "name": "Charlotte Perospero",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP04-112": {
    "id": "OP04-112",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "9 Cost / 9000 Power"
  },
  "OP05-002": {
    "id": "OP05-002",
    "name": "Belo Betty",
    "cardType": "Leader",
    "color": "Red/Yellow",
    "traits": "Revolutionary Army",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP04-114": {
    "id": "OP04-114",
    "name": "Randolph",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates / Homies",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP04-119": {
    "id": "OP04-119",
    "name": "Donquixote Rosinante",
    "cardType": "Character",
    "color": "Green",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP04-115": {
    "id": "OP04-115",
    "name": "Gun Modoki",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP04-116": {
    "id": "OP04-116",
    "name": "Diable Jambe Joue Shot",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Vinsmoke Family",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP04-117": {
    "id": "OP04-117",
    "name": "Heavenly Fire",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP05-004": {
    "id": "OP05-004",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP04-118": {
    "id": "OP04-118",
    "name": "Nefeltari Vivi",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "7 Cost / 4000 Power"
  },
  "OP05-001": {
    "id": "OP05-001",
    "name": "Sabo",
    "cardType": "Leader",
    "color": "Red/Black",
    "traits": "Revolutionary Army",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP05-003": {
    "id": "OP05-003",
    "name": "Inazuma",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP05-005": {
    "id": "OP05-005",
    "name": "Karasu",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP05-007": {
    "id": "OP05-007",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP05-011": {
    "id": "OP05-011",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP05-016": {
    "id": "OP05-016",
    "name": "Morley",
    "cardType": "Character",
    "color": "Red",
    "traits": "Giant / Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP05-012": {
    "id": "OP05-012",
    "name": "Hack",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP05-013": {
    "id": "OP05-013",
    "name": "Bunny Joe",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP05-014": {
    "id": "OP05-014",
    "name": "Pell",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP05-010": {
    "id": "OP05-010",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP05-018": {
    "id": "OP05-018",
    "name": "Emporio Energy Hormone",
    "cardType": "Event",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP05-009": {
    "id": "OP05-009",
    "name": "Toh-Toh",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP05-008": {
    "id": "OP05-008",
    "name": "Chaka",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP05-006": {
    "id": "OP05-006",
    "name": "Koala",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP05-015": {
    "id": "OP05-015",
    "name": "Belo Betty",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP05-017": {
    "id": "OP05-017",
    "name": "Lindbergh",
    "cardType": "Character",
    "color": "Red",
    "traits": "Minks / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP05-019": {
    "id": "OP05-019",
    "name": "Fire Fist",
    "cardType": "Event",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP05-021": {
    "id": "OP05-021",
    "name": "Revolutionary Army HQ",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP05-023": {
    "id": "OP05-023",
    "name": "Vergo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP05-022": {
    "id": "OP05-022",
    "name": "Donquixote Rosinante",
    "cardType": "Leader",
    "color": "Green/Blue",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP05-025": {
    "id": "OP05-025",
    "name": "Gladius",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP05-020": {
    "id": "OP05-020",
    "name": "Four Thousand-Brick Fist",
    "cardType": "Event",
    "color": "Red",
    "traits": "Fish-Man / Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP05-024": {
    "id": "OP05-024",
    "name": "Kuween",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP05-026": {
    "id": "OP05-026",
    "name": "Sarquiss",
    "cardType": "Character",
    "color": "Green",
    "traits": "Bellamy Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP05-027": {
    "id": "OP05-027",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP05-028": {
    "id": "OP05-028",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP05-029": {
    "id": "OP05-029",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP05-031": {
    "id": "OP05-031",
    "name": "Buffalo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP05-033": {
    "id": "OP05-033",
    "name": "Baby 5",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP05-030": {
    "id": "OP05-030",
    "name": "Donquixote Rosinante",
    "cardType": "Character",
    "color": "Green",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP05-032": {
    "id": "OP05-032",
    "name": "Pica",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP05-034": {
    "id": "OP05-034",
    "name": "Baby 5",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP05-035": {
    "id": "OP05-035",
    "name": "Bellamy",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP05-039": {
    "id": "OP05-039",
    "name": "Stick-Stickem Meteora",
    "cardType": "Event",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP05-036": {
    "id": "OP05-036",
    "name": "Monet",
    "cardType": "Character",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP05-043": {
    "id": "OP05-043",
    "name": "Ulti",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP05-041": {
    "id": "OP05-041",
    "name": "Sakazuki",
    "cardType": "Leader",
    "color": "Blue/Black",
    "traits": "Navy",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP05-038": {
    "id": "OP05-038",
    "name": "Charlestone",
    "cardType": "Event",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP05-037": {
    "id": "OP05-037",
    "name": "Because the Side of Justice Will Be Whichever Side Wins!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP05-040": {
    "id": "OP05-040",
    "name": "Birdcage",
    "cardType": "Stage",
    "color": "Green",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "OP05-042": {
    "id": "OP05-042",
    "name": "Issho",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP05-044": {
    "id": "OP05-044",
    "name": "John Giant",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Giant / Navy",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP05-045": {
    "id": "OP05-045",
    "name": "Stainless",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP05-047": {
    "id": "OP05-047",
    "name": "Basil Hawkins",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal Kingdom Pirates / Hawkins Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP05-058": {
    "id": "OP05-058",
    "name": "It's a Waste of Human Life!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "8 Cost"
  },
  "OP05-048": {
    "id": "OP05-048",
    "name": "Bastille",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP05-061": {
    "id": "OP05-061",
    "name": "Uso-Hachi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP05-046": {
    "id": "OP05-046",
    "name": "Dalmatian",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP05-054": {
    "id": "OP05-054",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP05-057": {
    "id": "OP05-057",
    "name": "Hound Blaze",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP05-049": {
    "id": "OP05-049",
    "name": "Haccha",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Giant / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP05-056": {
    "id": "OP05-056",
    "name": "X.Barrels",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Former Navy",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP05-053": {
    "id": "OP05-053",
    "name": "Mozambia",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP05-050": {
    "id": "OP05-050",
    "name": "Hina",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP05-052": {
    "id": "OP05-052",
    "name": "Maynard",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP05-055": {
    "id": "OP05-055",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy / Drake Pirates / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP05-051": {
    "id": "OP05-051",
    "name": "Borsalino",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP05-059": {
    "id": "OP05-059",
    "name": "Let Us Begin the World of Violence!!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "OP05-065": {
    "id": "OP05-065",
    "name": "San-Gorou",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP05-060": {
    "id": "OP05-060",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP05-062": {
    "id": "OP05-062",
    "name": "O-Nami",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP05-064": {
    "id": "OP05-064",
    "name": "Killer",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP05-063": {
    "id": "OP05-063",
    "name": "O-Robi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP05-066": {
    "id": "OP05-066",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP05-067": {
    "id": "OP05-067",
    "name": "Zoro-Juurou",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP05-070": {
    "id": "OP05-070",
    "name": "Fra-Nosuke",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 4000 Power"
  },
  "OP05-068": {
    "id": "OP05-068",
    "name": "Chopa-Emon",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP05-069": {
    "id": "OP05-069",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP05-073": {
    "id": "OP05-073",
    "name": "Miss Doublefinger(Zala)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP05-072": {
    "id": "OP05-072",
    "name": "Hone-Kichi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP05-074": {
    "id": "OP05-074",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP05-071": {
    "id": "OP05-071",
    "name": "Bepo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Minks / Heart Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP05-077": {
    "id": "OP05-077",
    "name": "Gamma Knife",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP05-078": {
    "id": "OP05-078",
    "name": "Punk Rotten",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP05-082": {
    "id": "OP05-082",
    "name": "Shirahoshi",
    "cardType": "Character",
    "color": "Black",
    "traits": "Merfolk",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP05-076": {
    "id": "OP05-076",
    "name": "When You're at Sea You Fight against Pirates!!",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP05-075": {
    "id": "OP05-075",
    "name": "Mr.1(Daz.Bonez)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP05-079": {
    "id": "OP05-079",
    "name": "Viola",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP05-080": {
    "id": "OP05-080",
    "name": "Elizabello II",
    "cardType": "Character",
    "color": "Black",
    "traits": "Kingdom of Prodence / Dressrosa",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP05-081": {
    "id": "OP05-081",
    "name": "One-Legged Toy Soldier",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP05-083": {
    "id": "OP05-083",
    "name": "Sterry",
    "cardType": "Character",
    "color": "Black",
    "traits": "Goa Kingdom",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP05-085": {
    "id": "OP05-085",
    "name": "Nefeltari Cobra",
    "cardType": "Character",
    "color": "Black",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP05-084": {
    "id": "OP05-084",
    "name": "Saint Charlos",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP05-087": {
    "id": "OP05-087",
    "name": "Hakuba",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Beautiful Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP05-086": {
    "id": "OP05-086",
    "name": "Nefeltari Vivi",
    "cardType": "Character",
    "color": "Black",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP05-089": {
    "id": "OP05-089",
    "name": "Saint Mjosgard",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons",
    "rarity": "R",
    "cost": "5 Cost / 1000 Power"
  },
  "OP05-098": {
    "id": "OP05-098",
    "name": "Enel",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP05-091": {
    "id": "OP05-091",
    "name": "Rebecca",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "4 Cost / 0 Power"
  },
  "OP05-096": {
    "id": "OP05-096",
    "name": "I Bid 500 Million!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Celestial Dragons",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP05-088": {
    "id": "OP05-088",
    "name": "Mansherry",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Tontattas / Dressrosa",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP05-099": {
    "id": "OP05-099",
    "name": "Amazon",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP05-092": {
    "id": "OP05-092",
    "name": "Saint Rosward",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons",
    "rarity": "R",
    "cost": "5 Cost / 0 Power"
  },
  "OP05-097": {
    "id": "OP05-097",
    "name": "Mary Geoise",
    "cardType": "Stage",
    "color": "Black",
    "traits": "Mary Geoise",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP05-090": {
    "id": "OP05-090",
    "name": "Riku Doldo III",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP05-093": {
    "id": "OP05-093",
    "name": "Rob Lucci",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP05-094": {
    "id": "OP05-094",
    "name": "Haute Couture Patch★Work",
    "cardType": "Event",
    "color": "Black",
    "traits": "The Tontattas / Dressrosa",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP05-101": {
    "id": "OP05-101",
    "name": "Ohm",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Vassals",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP05-095": {
    "id": "OP05-095",
    "name": "Dragon Claw",
    "cardType": "Event",
    "color": "Black",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP05-100": {
    "id": "OP05-100",
    "name": "Enel",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP05-103": {
    "id": "OP05-103",
    "name": "Kotori",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP05-107": {
    "id": "OP05-107",
    "name": "Lieutenant Spacey",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Moon",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP05-102": {
    "id": "OP05-102",
    "name": "Gedatsu",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Vassals",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP05-112": {
    "id": "OP05-112",
    "name": "Captain McKinley",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP05-104": {
    "id": "OP05-104",
    "name": "Conis",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP05-106": {
    "id": "OP05-106",
    "name": "Shura",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Vassals",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP05-105": {
    "id": "OP05-105",
    "name": "Satori",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Vassals",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP05-110": {
    "id": "OP05-110",
    "name": "Holly",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Sky Island",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP05-115": {
    "id": "OP05-115",
    "name": "Two-Hundred Million Volts Amaru",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP05-108": {
    "id": "OP05-108",
    "name": "Nola",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Sky Island",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP05-113": {
    "id": "OP05-113",
    "name": "Yama",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP05-109": {
    "id": "OP05-109",
    "name": "Pagaya",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP05-114": {
    "id": "OP05-114",
    "name": "El Thor",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP05-111": {
    "id": "OP05-111",
    "name": "Hotori",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP05-116": {
    "id": "OP05-116",
    "name": "Hino Bird Zap",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP05-117": {
    "id": "OP05-117",
    "name": "Upper Yard",
    "cardType": "Stage",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP05-118": {
    "id": "OP05-118",
    "name": "Kaido",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP06-003": {
    "id": "OP06-003",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP06-001": {
    "id": "OP06-001",
    "name": "Uta",
    "cardType": "Leader",
    "color": "Red/Purple",
    "traits": "FILM",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP05-119": {
    "id": "OP05-119",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP06-002": {
    "id": "OP06-002",
    "name": "Inazuma",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-008": {
    "id": "OP06-008",
    "name": "Schneider",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Mugiwara Chase",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP06-007": {
    "id": "OP06-007",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP06-005": {
    "id": "OP06-005",
    "name": "Gasparde",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Former Navy / Gasparde Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP06-004": {
    "id": "OP06-004",
    "name": "Baron Omatsuri",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Omatsuri Island",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-006": {
    "id": "OP06-006",
    "name": "Saga",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Asuka Island",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-009": {
    "id": "OP06-009",
    "name": "Shuraiya",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Shipbuilding Town",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP06-010": {
    "id": "OP06-010",
    "name": "Douglas Bullet",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / The Pirates Fest",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP06-011": {
    "id": "OP06-011",
    "name": "Tot Musica",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP06-012": {
    "id": "OP06-012",
    "name": "Bear.King",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Trump Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP06-015": {
    "id": "OP06-015",
    "name": "Lily Carnation",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Omatsuri Island",
    "rarity": "R",
    "cost": "4 Cost / 0 Power"
  },
  "OP06-013": {
    "id": "OP06-013",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-016": {
    "id": "OP06-016",
    "name": "Raise Max",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP06-019": {
    "id": "OP06-019",
    "name": "Blue Dragon Seal Water Stream",
    "cardType": "Event",
    "color": "Red",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP06-017": {
    "id": "OP06-017",
    "name": "Meteor-Strike of Love",
    "cardType": "Event",
    "color": "Red",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP06-018": {
    "id": "OP06-018",
    "name": "Gum-Gum King Kong Gatling",
    "cardType": "Event",
    "color": "Red",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP06-014": {
    "id": "OP06-014",
    "name": "Ratchet",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Mecha Island",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP06-026": {
    "id": "OP06-026",
    "name": "Koushirou",
    "cardType": "Character",
    "color": "Green",
    "traits": "Frost Moon Village",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP06-021": {
    "id": "OP06-021",
    "name": "Perona",
    "cardType": "Leader",
    "color": "Green/Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP06-020": {
    "id": "OP06-020",
    "name": "Hody Jones",
    "cardType": "Leader",
    "color": "Green",
    "traits": "Fish-Man / New Fish-Man Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP06-022": {
    "id": "OP06-022",
    "name": "Yamato",
    "cardType": "Leader",
    "color": "Green/Yellow",
    "traits": "Land of Wano",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP06-025": {
    "id": "OP06-025",
    "name": "Camie",
    "cardType": "Character",
    "color": "Green",
    "traits": "Merfolk",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP06-023": {
    "id": "OP06-023",
    "name": "Arlong",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / East Blue / Arlong Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP06-024": {
    "id": "OP06-024",
    "name": "Ikaros Much",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / New Fish-Man Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP06-028": {
    "id": "OP06-028",
    "name": "Zeo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / New Fish-Man Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-036": {
    "id": "OP06-036",
    "name": "Ryuma",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP06-029": {
    "id": "OP06-029",
    "name": "Daruma",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / New Fish-Man Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP06-035": {
    "id": "OP06-035",
    "name": "Hody Jones",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / New Fish-Man Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP06-032": {
    "id": "OP06-032",
    "name": "Hammond",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / New Fish-Man Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP06-027": {
    "id": "OP06-027",
    "name": "Gyro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Gyro Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP06-031": {
    "id": "OP06-031",
    "name": "Hatchan",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Former Arlong Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-033": {
    "id": "OP06-033",
    "name": "Vander Decken IX",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Flying Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP06-038": {
    "id": "OP06-038",
    "name": "The Billion-fold World Trichiliocosm",
    "cardType": "Event",
    "color": "Green",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP06-034": {
    "id": "OP06-034",
    "name": "Hyouzou",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP06-030": {
    "id": "OP06-030",
    "name": "Dosun",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / New Fish-Man Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP06-037": {
    "id": "OP06-037",
    "name": "Wadatsumi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Flying Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP06-047": {
    "id": "OP06-047",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP06-039": {
    "id": "OP06-039",
    "name": "You Ain't Even Worth Killing Time!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP06-043": {
    "id": "OP06-043",
    "name": "Aramaki",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP06-048": {
    "id": "OP06-048",
    "name": "Zeff",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP06-041": {
    "id": "OP06-041",
    "name": "The Ark Noah",
    "cardType": "Stage",
    "color": "Green",
    "traits": "Fish-Man Island",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "OP06-046": {
    "id": "OP06-046",
    "name": "Sakazuki",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP06-040": {
    "id": "OP06-040",
    "name": "Shark Arrows",
    "cardType": "Event",
    "color": "Green",
    "traits": "Fish-Man / New Fish-Man Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP06-042": {
    "id": "OP06-042",
    "name": "Vinsmoke Reiju",
    "cardType": "Leader",
    "color": "Blue/Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP06-045": {
    "id": "OP06-045",
    "name": "Kuzan",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP06-049": {
    "id": "OP06-049",
    "name": "Sengoku",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP06-044": {
    "id": "OP06-044",
    "name": "Gion",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-055": {
    "id": "OP06-055",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP06-052": {
    "id": "OP06-052",
    "name": "Tokikake",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-054": {
    "id": "OP06-054",
    "name": "Borsalino",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP06-053": {
    "id": "OP06-053",
    "name": "Jaguar.D.Saul",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Giant / Navy",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-050": {
    "id": "OP06-050",
    "name": "Tashigi",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP06-051": {
    "id": "OP06-051",
    "name": "Tsuru",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 4000 Power"
  },
  "OP06-057": {
    "id": "OP06-057",
    "name": "But I Will Never Doubt a Woman's Tears!!!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP06-061": {
    "id": "OP06-061",
    "name": "Vinsmoke Ichiji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP06-058": {
    "id": "OP06-058",
    "name": "Gravity Blade Raging Tiger",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "7 Cost"
  },
  "OP06-059": {
    "id": "OP06-059",
    "name": "White Snake",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP06-056": {
    "id": "OP06-056",
    "name": "Ama no Murakumo Sword",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP06-063": {
    "id": "OP06-063",
    "name": "Vinsmoke Sora",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / Kingdom of GERMA",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP06-064": {
    "id": "OP06-064",
    "name": "Vinsmoke Niji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP06-060": {
    "id": "OP06-060",
    "name": "Vinsmoke Ichiji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP06-062": {
    "id": "OP06-062",
    "name": "Vinsmoke Judge",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP06-066": {
    "id": "OP06-066",
    "name": "Vinsmoke Yonji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP06-065": {
    "id": "OP06-065",
    "name": "Vinsmoke Niji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP06-073": {
    "id": "OP06-073",
    "name": "Shiki",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Golden Lion Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP06-074": {
    "id": "OP06-074",
    "name": "Zephyr (Navy)",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Navy",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP06-067": {
    "id": "OP06-067",
    "name": "Vinsmoke Yonji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-069": {
    "id": "OP06-069",
    "name": "Vinsmoke Reiju",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-078": {
    "id": "OP06-078",
    "name": "GERMA 66",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP06-070": {
    "id": "OP06-070",
    "name": "Eldoraggo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Eldoraggo Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP06-076": {
    "id": "OP06-076",
    "name": "Hitokiri Kamazo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Supernovas / Kid Pirates / SMILE",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-072": {
    "id": "OP06-072",
    "name": "Cosette",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kingdom of GERMA",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP06-071": {
    "id": "OP06-071",
    "name": "Gild Tesoro",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Grantesoro",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP06-068": {
    "id": "OP06-068",
    "name": "Vinsmoke Reiju",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP06-077": {
    "id": "OP06-077",
    "name": "Black Bug",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP06-075": {
    "id": "OP06-075",
    "name": "Count Battler",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Crown Island",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-079": {
    "id": "OP06-079",
    "name": "Kingdom of GERMA",
    "cardType": "Stage",
    "color": "Purple",
    "traits": "Kingdom of GERMA",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP06-084": {
    "id": "OP06-084",
    "name": "Jigoro of the Wind",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-083": {
    "id": "OP06-083",
    "name": "Oars",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 7000 Power"
  },
  "OP06-080": {
    "id": "OP06-080",
    "name": "Gecko Moria",
    "cardType": "Leader",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP06-081": {
    "id": "OP06-081",
    "name": "Absalom",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-086": {
    "id": "OP06-086",
    "name": "Gecko Moria",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP06-082": {
    "id": "OP06-082",
    "name": "Inuppe",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-085": {
    "id": "OP06-085",
    "name": "Kumacy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-087": {
    "id": "OP06-087",
    "name": "Cerberus",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP06-088": {
    "id": "OP06-088",
    "name": "Sai",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Happosui Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP06-089": {
    "id": "OP06-089",
    "name": "Taralan",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-092": {
    "id": "OP06-092",
    "name": "Brook",
    "cardType": "Character",
    "color": "Black",
    "traits": "Former Rumbar Pirates",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP06-090": {
    "id": "OP06-090",
    "name": "Dr. Hogback",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-096": {
    "id": "OP06-096",
    "name": "...Nothing...at All!!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP06-094": {
    "id": "OP06-094",
    "name": "Lola",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP06-095": {
    "id": "OP06-095",
    "name": "Shadows Asgard",
    "cardType": "Event",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP06-091": {
    "id": "OP06-091",
    "name": "Victoria Cindry",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP06-093": {
    "id": "OP06-093",
    "name": "Perona",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-099": {
    "id": "OP06-099",
    "name": "Aisa",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP06-098": {
    "id": "OP06-098",
    "name": "Thriller Bark",
    "cardType": "Stage",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP06-097": {
    "id": "OP06-097",
    "name": "Negative Hollow",
    "cardType": "Event",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP06-101": {
    "id": "OP06-101",
    "name": "O-Nami",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-102": {
    "id": "OP06-102",
    "name": "Kamakiri",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP06-104": {
    "id": "OP06-104",
    "name": "Kikunojo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP06-103": {
    "id": "OP06-103",
    "name": "Kawamatsu",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Fish-Man / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP06-100": {
    "id": "OP06-100",
    "name": "Inuarashi",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Minks / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP06-109": {
    "id": "OP06-109",
    "name": "Denjiro",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP06-106": {
    "id": "OP06-106",
    "name": "Kouzuki Hiyori",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP06-107": {
    "id": "OP06-107",
    "name": "Kouzuki Momonosuke",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP06-105": {
    "id": "OP06-105",
    "name": "Genbo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP06-108": {
    "id": "OP06-108",
    "name": "Tenguyama Hitetsu",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP07-006": {
    "id": "OP07-006",
    "name": "Sterry",
    "cardType": "Character",
    "color": "Red",
    "traits": "Goa Kingdom",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP07-016": {
    "id": "OP07-016",
    "name": "Galaxy Wink",
    "cardType": "Event",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-014": {
    "id": "OP07-014",
    "name": "Moda",
    "cardType": "Character",
    "color": "Red",
    "traits": "Lulucia Kingdom",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP07-017": {
    "id": "OP07-017",
    "name": "Dragon Breath",
    "cardType": "Event",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP07-018": {
    "id": "OP07-018",
    "name": "KEEP OUT",
    "cardType": "Event",
    "color": "Red",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-021": {
    "id": "OP07-021",
    "name": "Urouge",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Fallen Monk Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-019": {
    "id": "OP07-019",
    "name": "Jewelry Bonney",
    "cardType": "Leader",
    "color": "Green",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP07-009": {
    "id": "OP07-009",
    "name": "Dogura & Magura",
    "cardType": "Character",
    "color": "Red",
    "traits": "Mountain Bandits",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP07-020": {
    "id": "OP07-020",
    "name": "Aladine",
    "cardType": "Character",
    "color": "Green",
    "traits": "Merfolk / The Sun Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-024": {
    "id": "OP07-024",
    "name": "Koala",
    "cardType": "Character",
    "color": "Green",
    "traits": "Foolshout Island",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP07-023": {
    "id": "OP07-023",
    "name": "Caribou",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Caribou Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-022": {
    "id": "OP07-022",
    "name": "Otama",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP07-008": {
    "id": "OP07-008",
    "name": "Mr. Tanaka",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Grantesoro",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP07-013": {
    "id": "OP07-013",
    "name": "Masked Deuce",
    "cardType": "Character",
    "color": "Red",
    "traits": "Spade Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP07-010": {
    "id": "OP07-010",
    "name": "Baccarat",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Grantesoro",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP07-011": {
    "id": "OP07-011",
    "name": "Bluejam",
    "cardType": "Character",
    "color": "Red",
    "traits": "Goa Kingdom / Bluejam Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-015": {
    "id": "OP07-015",
    "name": "Monkey.D.Dragon",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP07-012": {
    "id": "OP07-012",
    "name": "Porchemy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Goa Kingdom / Bluejam Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-119": {
    "id": "OP06-119",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "9 Cost / 9000 Power"
  },
  "OP07-002": {
    "id": "OP07-002",
    "name": "Ain",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Neo Navy",
    "rarity": "R",
    "cost": "7 Cost / 6000 Power"
  },
  "OP07-007": {
    "id": "OP07-007",
    "name": "Dice",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Grantesoro",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP07-001": {
    "id": "OP07-001",
    "name": "Monkey.D.Dragon",
    "cardType": "Leader",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP07-004": {
    "id": "OP07-004",
    "name": "Curly.Dadan",
    "cardType": "Character",
    "color": "Red",
    "traits": "Mountain Bandits",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP06-110": {
    "id": "OP06-110",
    "name": "Nekomamushi",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Minks / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-029": {
    "id": "OP07-029",
    "name": "Basil Hawkins",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Hawkins Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP06-114": {
    "id": "OP06-114",
    "name": "Wyper",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP06-116": {
    "id": "OP06-116",
    "name": "Reject",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP07-003": {
    "id": "OP07-003",
    "name": "Outlook III",
    "cardType": "Character",
    "color": "Red",
    "traits": "Goa Kingdom",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP07-005": {
    "id": "OP07-005",
    "name": "Carina",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Grantesoro",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP06-112": {
    "id": "OP06-112",
    "name": "Raizo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP06-111": {
    "id": "OP06-111",
    "name": "Braham",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP06-117": {
    "id": "OP06-117",
    "name": "The Ark Maxim",
    "cardType": "Stage",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-027": {
    "id": "OP07-027",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP07-028": {
    "id": "OP07-028",
    "name": "Scratchmen Apoo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / On-Air Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP07-026": {
    "id": "OP07-026",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-025": {
    "id": "OP07-025",
    "name": "Coribou",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Caribou Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP06-115": {
    "id": "OP06-115",
    "name": "You're the One Who Should Disappear.",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP06-118": {
    "id": "OP06-118",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "9 Cost / 9000 Power"
  },
  "OP06-113": {
    "id": "OP06-113",
    "name": "Raki",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP07-046": {
    "id": "OP07-046",
    "name": "Sengoku",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP07-045": {
    "id": "OP07-045",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Seven Warlords of the Sea / The Sun Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-041": {
    "id": "OP07-041",
    "name": "Gloriosa (Grandma Nyon)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP07-036": {
    "id": "OP07-036",
    "name": "Demonic Aura Nine-Sword Style Asura Demon Nine Flash",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP07-051": {
    "id": "OP07-051",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP07-039": {
    "id": "OP07-039",
    "name": "Edward Weevil",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-047": {
    "id": "OP07-047",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP07-030": {
    "id": "OP07-030",
    "name": "Pappag",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP07-042": {
    "id": "OP07-042",
    "name": "Gecko Moria",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-050": {
    "id": "OP07-050",
    "name": "Boa Sandersonia",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP07-040": {
    "id": "OP07-040",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-032": {
    "id": "OP07-032",
    "name": "Fisher Tiger",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-044": {
    "id": "OP07-044",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP07-048": {
    "id": "OP07-048",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP07-049": {
    "id": "OP07-049",
    "name": "Buckin",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Weevil's Mother",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP07-056": {
    "id": "OP07-056",
    "name": "Slave Arrow",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-031": {
    "id": "OP07-031",
    "name": "Bartolomeo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Barto Club",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP07-043": {
    "id": "OP07-043",
    "name": "Salome",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal / Kuja Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP07-035": {
    "id": "OP07-035",
    "name": "Karmic Punishment",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Fallen Monk Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-057": {
    "id": "OP07-057",
    "name": "Perfume Femur",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP07-034": {
    "id": "OP07-034",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP07-037": {
    "id": "OP07-037",
    "name": "More Pizza!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-033": {
    "id": "OP07-033",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-054": {
    "id": "OP07-054",
    "name": "Marguerite",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP07-038": {
    "id": "OP07-038",
    "name": "Boa Hancock",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP07-052": {
    "id": "OP07-052",
    "name": "Boa Marigold",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-053": {
    "id": "OP07-053",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-055": {
    "id": "OP07-055",
    "name": "Snake Dance",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP07-064": {
    "id": "OP07-064",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP07-062": {
    "id": "OP07-062",
    "name": "Vinsmoke Reiju",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kingdom of GERMA / The Vinsmoke Family",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP07-058": {
    "id": "OP07-058",
    "name": "Island of Women",
    "cardType": "Stage",
    "color": "Blue",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-063": {
    "id": "OP07-063",
    "name": "Capote",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Fish-Man / Foxy Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP07-061": {
    "id": "OP07-061",
    "name": "Vinsmoke Sanji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kingdom of GERMA / The Vinsmoke Family",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP07-065": {
    "id": "OP07-065",
    "name": "Gina",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP07-069": {
    "id": "OP07-069",
    "name": "Pickles",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP07-060": {
    "id": "OP07-060",
    "name": "Itomimizu",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP07-066": {
    "id": "OP07-066",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Foxy Pirates",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP07-067": {
    "id": "OP07-067",
    "name": "Tonjit",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Long Ring Long Land",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP07-059": {
    "id": "OP07-059",
    "name": "Foxy",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP07-068": {
    "id": "OP07-068",
    "name": "Hamburg",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-075": {
    "id": "OP07-075",
    "name": "Slow-Slow Beam",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-070": {
    "id": "OP07-070",
    "name": "Big Bun",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Giant / Fish-Man / Foxy Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP07-073": {
    "id": "OP07-073",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP07-071": {
    "id": "OP07-071",
    "name": "Foxy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP07-083": {
    "id": "OP07-083",
    "name": "Gecko Moria",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-072": {
    "id": "OP07-072",
    "name": "Porche",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP07-087": {
    "id": "OP07-087",
    "name": "Baskerville",
    "cardType": "Character",
    "color": "Black",
    "traits": "World Government",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP07-078": {
    "id": "OP07-078",
    "name": "Megaton Nine-Tails Rush",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP07-074": {
    "id": "OP07-074",
    "name": "Monda",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Foxy Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP07-076": {
    "id": "OP07-076",
    "name": "Slow-Slow Beam Sword",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP07-079": {
    "id": "OP07-079",
    "name": "Rob Lucci",
    "cardType": "Leader",
    "color": "Black",
    "traits": "CP0",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP07-081": {
    "id": "OP07-081",
    "name": "Kalifa",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-080": {
    "id": "OP07-080",
    "name": "Kaku",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-082": {
    "id": "OP07-082",
    "name": "Captain John",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates / Former Rocks Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP07-077": {
    "id": "OP07-077",
    "name": "We're Going to Claim the One Piece!!!",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Land of Wano",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-089": {
    "id": "OP07-089",
    "name": "Maha",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP07-085": {
    "id": "OP07-085",
    "name": "Stussy",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "9 Cost / 9000 Power"
  },
  "OP07-091": {
    "id": "OP07-091",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-084": {
    "id": "OP07-084",
    "name": "Gismonda",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP07-088": {
    "id": "OP07-088",
    "name": "Hattori",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal / CP0",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP07-086": {
    "id": "OP07-086",
    "name": "Spandam",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP07-090": {
    "id": "OP07-090",
    "name": "Morgans",
    "cardType": "Character",
    "color": "Black",
    "traits": "Journalist",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP07-092": {
    "id": "OP07-092",
    "name": "Joseph",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP07-095": {
    "id": "OP07-095",
    "name": "Iron Body",
    "cardType": "Event",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP07-093": {
    "id": "OP07-093",
    "name": "Rob Lucci",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-094": {
    "id": "OP07-094",
    "name": "Shave",
    "cardType": "Event",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-097": {
    "id": "OP07-097",
    "name": "Vegapunk",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "Scientist / Egghead",
    "rarity": "L",
    "cost": "2 Life / 5000 Power"
  },
  "OP07-096": {
    "id": "OP07-096",
    "name": "Tempest Kick",
    "cardType": "Event",
    "color": "Black",
    "traits": "CP9",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-099": {
    "id": "OP07-099",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP07-098": {
    "id": "OP07-098",
    "name": "Atlas",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Scientist / Egghead",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-101": {
    "id": "OP07-101",
    "name": "Shaka",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Scientist / Egghead",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-102": {
    "id": "OP07-102",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Fish-Man / Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-100": {
    "id": "OP07-100",
    "name": "Edison",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Scientist / Egghead",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-103": {
    "id": "OP07-103",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP07-104": {
    "id": "OP07-104",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP07-105": {
    "id": "OP07-105",
    "name": "Pythagoras",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Scientist / Egghead",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-107": {
    "id": "OP07-107",
    "name": "Franky",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP07-109": {
    "id": "OP07-109",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Four Emperors / Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-108": {
    "id": "OP07-108",
    "name": "Vega Force 01",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP07-106": {
    "id": "OP07-106",
    "name": "Fuza",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Sky Island",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP07-111": {
    "id": "OP07-111",
    "name": "Lilith",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Scientist / Egghead",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP07-113": {
    "id": "OP07-113",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-114": {
    "id": "OP07-114",
    "name": "He Possesses the World's Most Brilliant Mind",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Scientist / Egghead",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-115": {
    "id": "OP07-115",
    "name": "I Re-Quasar Helllp!!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Scientist / Egghead",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-110": {
    "id": "OP07-110",
    "name": "York",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Scientist / Egghead",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP07-112": {
    "id": "OP07-112",
    "name": "Lucy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP07-116": {
    "id": "OP07-116",
    "name": "Blaze Slice",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP07-118": {
    "id": "OP07-118",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP07-117": {
    "id": "OP07-117",
    "name": "Egghead",
    "cardType": "Stage",
    "color": "Yellow",
    "traits": "Egghead",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP08-002": {
    "id": "OP08-002",
    "name": "Marco",
    "cardType": "Leader",
    "color": "Red/Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP08-001": {
    "id": "OP08-001",
    "name": "Tony Tony.Chopper",
    "cardType": "Leader",
    "color": "Red/Green",
    "traits": "Animal / Drum Kingdom / Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP07-119": {
    "id": "OP07-119",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "10 Cost / 10000 Power"
  },
  "OP08-010": {
    "id": "OP08-010",
    "name": "Hiking Bear",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Drum Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP08-003": {
    "id": "OP08-003",
    "name": "Twenty Doctors",
    "cardType": "Character",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP08-006": {
    "id": "OP08-006",
    "name": "Chessmarimo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-008": {
    "id": "OP08-008",
    "name": "Dalton",
    "cardType": "Character",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-004": {
    "id": "OP08-004",
    "name": "Kuromarimo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-007": {
    "id": "OP08-007",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Drum Kingdom / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP08-011": {
    "id": "OP08-011",
    "name": "Musshuru",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Drum Kingdom",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP08-005": {
    "id": "OP08-005",
    "name": "Chess",
    "cardType": "Character",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP08-009": {
    "id": "OP08-009",
    "name": "Maria Onion Bear",
    "cardType": "Character",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP08-018": {
    "id": "OP08-018",
    "name": "Cloven Rose",
    "cardType": "Event",
    "color": "Red",
    "traits": "Animal / Drum Kingdom / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP08-014": {
    "id": "OP08-014",
    "name": "Wapol",
    "cardType": "Character",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP08-013": {
    "id": "OP08-013",
    "name": "Robson",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Drum Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP08-016": {
    "id": "OP08-016",
    "name": "Dr.Hiriluk",
    "cardType": "Character",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP08-017": {
    "id": "OP08-017",
    "name": "I'd Never Shoot You!!!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP08-012": {
    "id": "OP08-012",
    "name": "Lapins",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Drum Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP08-015": {
    "id": "OP08-015",
    "name": "Dr.Kureha",
    "cardType": "Character",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-020": {
    "id": "OP08-020",
    "name": "Drum Kingdom",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP08-019": {
    "id": "OP08-019",
    "name": "Munch-Munch Mutation",
    "cardType": "Event",
    "color": "Red",
    "traits": "Drum Kingdom",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP08-025": {
    "id": "OP08-025",
    "name": "Shishilian",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP08-021": {
    "id": "OP08-021",
    "name": "Carrot",
    "cardType": "Leader",
    "color": "Green",
    "traits": "Minks",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP08-023": {
    "id": "OP08-023",
    "name": "Carrot",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-028": {
    "id": "OP08-028",
    "name": "Nekomamushi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / The Akazaya Nine",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-024": {
    "id": "OP08-024",
    "name": "Concelot",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP08-033": {
    "id": "OP08-033",
    "name": "Roddy",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-030": {
    "id": "OP08-030",
    "name": "Pedro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-026": {
    "id": "OP08-026",
    "name": "Giovanni",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP08-022": {
    "id": "OP08-022",
    "name": "Inuarashi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / The Akazaya Nine",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-034": {
    "id": "OP08-034",
    "name": "Wanda",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-031": {
    "id": "OP08-031",
    "name": "Miyagi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP08-027": {
    "id": "OP08-027",
    "name": "Tristan",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP08-035": {
    "id": "OP08-035",
    "name": "BB",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP08-029": {
    "id": "OP08-029",
    "name": "Pekoms",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP08-032": {
    "id": "OP08-032",
    "name": "Milky",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP08-037": {
    "id": "OP08-037",
    "name": "Garchu",
    "cardType": "Event",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP08-036": {
    "id": "OP08-036",
    "name": "Electrical Luna",
    "cardType": "Event",
    "color": "Green",
    "traits": "Minks",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP08-039": {
    "id": "OP08-039",
    "name": "Zou",
    "cardType": "Stage",
    "color": "Green",
    "traits": "Animal",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP08-041": {
    "id": "OP08-041",
    "name": "Aphelandra",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP08-044": {
    "id": "OP08-044",
    "name": "Kingdew",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP08-038": {
    "id": "OP08-038",
    "name": "We Would Never Sell a Comrade to an Enemy!!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "Minks / The Akazaya Nine",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP08-042": {
    "id": "OP08-042",
    "name": "Edward Weevil",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-040": {
    "id": "OP08-040",
    "name": "Atmos",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-043": {
    "id": "OP08-043",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP08-046": {
    "id": "OP08-046",
    "name": "Shakuyaku",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-045": {
    "id": "OP08-045",
    "name": "Thatch",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-053": {
    "id": "OP08-053",
    "name": "Thank You...for Loving Me!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP08-047": {
    "id": "OP08-047",
    "name": "Jozu",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP08-048": {
    "id": "OP08-048",
    "name": "Sweetpea",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP08-051": {
    "id": "OP08-051",
    "name": "Buckin",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Former Rocks Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-056": {
    "id": "OP08-056",
    "name": "Moby Dick",
    "cardType": "Stage",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP08-049": {
    "id": "OP08-049",
    "name": "Speed Jil",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-055": {
    "id": "OP08-055",
    "name": "Phoenix Brand",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Former Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP08-054": {
    "id": "OP08-054",
    "name": "You Can't Take Our King This Early in the Game.",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP08-050": {
    "id": "OP08-050",
    "name": "Namule",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP08-052": {
    "id": "OP08-052",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-057": {
    "id": "OP08-057",
    "name": "King",
    "cardType": "Leader",
    "color": "Purple/Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP08-062": {
    "id": "OP08-062",
    "name": "Charlotte Katakuri",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP08-059": {
    "id": "OP08-059",
    "name": "Alber",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Lunarian / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-058": {
    "id": "OP08-058",
    "name": "Charlotte Pudding",
    "cardType": "Leader",
    "color": "Purple/Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP08-064": {
    "id": "OP08-064",
    "name": "Charlotte Cracker",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-065": {
    "id": "OP08-065",
    "name": "Charlotte Smoothie",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP08-060": {
    "id": "OP08-060",
    "name": "King",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP08-063": {
    "id": "OP08-063",
    "name": "Charlotte Katakuri",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP08-061": {
    "id": "OP08-061",
    "name": "Charlotte Oven",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-067": {
    "id": "OP08-067",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP08-066": {
    "id": "OP08-066",
    "name": "Charlotte Brulee",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "OP08-068": {
    "id": "OP08-068",
    "name": "Charlotte Perospero",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP08-069": {
    "id": "OP08-069",
    "name": "Charlotte Linlin",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Former Rocks Pirates / Big Mom Pirates",
    "rarity": "R",
    "cost": "9 Cost / 9000 Power"
  },
  "OP08-071": {
    "id": "OP08-071",
    "name": "Count Niwatori",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP08-070": {
    "id": "OP08-070",
    "name": "Baron Tamago",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP08-072": {
    "id": "OP08-072",
    "name": "Biscuit Warrior",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP08-073": {
    "id": "OP08-073",
    "name": "Viscount Hiyoko",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-074": {
    "id": "OP08-074",
    "name": "Black Maria",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP08-076": {
    "id": "OP08-076",
    "name": "It's to Die For...",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP08-075": {
    "id": "OP08-075",
    "name": "Candy Maiden",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP08-077": {
    "id": "OP08-077",
    "name": "Conquest of the Sea",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates / Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "OP08-083": {
    "id": "OP08-083",
    "name": "Sheepshead",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP08-078": {
    "id": "OP08-078",
    "name": "Ulti",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP08-081": {
    "id": "OP08-081",
    "name": "Guernica",
    "cardType": "Character",
    "color": "Black",
    "traits": "CP0",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-079": {
    "id": "OP08-079",
    "name": "Kaido",
    "cardType": "Character",
    "color": "Black",
    "traits": "Former Rocks Pirates / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "9 Cost / 9000 Power"
  },
  "OP08-080": {
    "id": "OP08-080",
    "name": "Queen",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-082": {
    "id": "OP08-082",
    "name": "Sasaki",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP08-086": {
    "id": "OP08-086",
    "name": "Ginrummy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP08-084": {
    "id": "OP08-084",
    "name": "Jack",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP08-091": {
    "id": "OP08-091",
    "name": "Who's.Who",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / Former CP9",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP08-085": {
    "id": "OP08-085",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Black",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-097": {
    "id": "OP08-097",
    "name": "Heliceratops",
    "cardType": "Event",
    "color": "Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP08-095": {
    "id": "OP08-095",
    "name": "Iron Body Fang Flash",
    "cardType": "Event",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / Former CP9",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP08-099": {
    "id": "OP08-099",
    "name": "Kalgara",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Jaya / Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP08-088": {
    "id": "OP08-088",
    "name": "Duval",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Flying Fish Riders",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-087": {
    "id": "OP08-087",
    "name": "Scratchmen Apoo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / On-Air Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-096": {
    "id": "OP08-096",
    "name": "People's Dreams Don't Ever End!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP08-090": {
    "id": "OP08-090",
    "name": "Hamlet",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP08-089": {
    "id": "OP08-089",
    "name": "Basil Hawkins",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / Hawkins Pirates",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP08-093": {
    "id": "OP08-093",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy / Drake Pirates / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP08-092": {
    "id": "OP08-092",
    "name": "Page One",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP08-101": {
    "id": "OP08-101",
    "name": "Charlotte Angel",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP08-094": {
    "id": "OP08-094",
    "name": "Imperial Flame",
    "cardType": "Event",
    "color": "Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP08-098": {
    "id": "OP08-098",
    "name": "Kalgara",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "Jaya / Sky Island / Shandian Warrior",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP08-100": {
    "id": "OP08-100",
    "name": "South Bird",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Jaya / Sky Island",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-102": {
    "id": "OP08-102",
    "name": "Charlotte Opera",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP08-103": {
    "id": "OP08-103",
    "name": "Charlotte Custard",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP08-104": {
    "id": "OP08-104",
    "name": "Charlotte Poire",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-105": {
    "id": "OP08-105",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Bonney Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP08-111": {
    "id": "OP08-111",
    "name": "S-Shark",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Seraphim",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-109": {
    "id": "OP08-109",
    "name": "Mont Blanc Noland",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Jaya / Botanist",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-108": {
    "id": "OP08-108",
    "name": "Mont Blanc Cricket",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Jaya / Monkey Mountain Alliance",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP08-116": {
    "id": "OP08-116",
    "name": "Burn Bazooka",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP08-107": {
    "id": "OP08-107",
    "name": "Nitro",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates / Homies",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-106": {
    "id": "OP08-106",
    "name": "Nami",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP08-113": {
    "id": "OP08-113",
    "name": "S-Bear",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Seraphim",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP08-110": {
    "id": "OP08-110",
    "name": "Wyper",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-112": {
    "id": "OP08-112",
    "name": "S-Snake",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Seraphim",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP08-114": {
    "id": "OP08-114",
    "name": "S-Hawk",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Seraphim",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP08-115": {
    "id": "OP08-115",
    "name": "The Earth Will Not Lose!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-002": {
    "id": "OP09-002",
    "name": "Uta",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP08-117": {
    "id": "OP08-117",
    "name": "Burn Blade",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "OP09-004": {
    "id": "OP09-004",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP08-118": {
    "id": "OP08-118",
    "name": "Silvers Rayleigh",
    "cardType": "Character",
    "color": "Red",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP09-001": {
    "id": "OP09-001",
    "name": "Shanks",
    "cardType": "Leader",
    "color": "Red",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP08-119": {
    "id": "OP08-119",
    "name": "Kaido & Linlin",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates / Big Mom Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP09-003": {
    "id": "OP09-003",
    "name": "Shachi & Penguin",
    "cardType": "Character",
    "color": "Red",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-007": {
    "id": "OP09-007",
    "name": "Heat",
    "cardType": "Character",
    "color": "Red",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-006": {
    "id": "OP09-006",
    "name": "Howling Gab",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP09-005": {
    "id": "OP09-005",
    "name": "Silvers Rayleigh",
    "cardType": "Character",
    "color": "Red",
    "traits": "Roger Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-008": {
    "id": "OP09-008",
    "name": "Building Snake",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP09-009": {
    "id": "OP09-009",
    "name": "Benn.Beckman",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP09-021": {
    "id": "OP09-021",
    "name": "Red Force",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP09-010": {
    "id": "OP09-010",
    "name": "Bonk Punch",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-014": {
    "id": "OP09-014",
    "name": "Limejuice",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP09-011": {
    "id": "OP09-011",
    "name": "Hongo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP09-012": {
    "id": "OP09-012",
    "name": "Monster",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Red-Haired Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-016": {
    "id": "OP09-016",
    "name": "Rockstar",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP09-015": {
    "id": "OP09-015",
    "name": "Lucky.Roux",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-013": {
    "id": "OP09-013",
    "name": "Yasopp",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-022": {
    "id": "OP09-022",
    "name": "Lim",
    "cardType": "Leader",
    "color": "Green/Purple",
    "traits": "ODYSSEY",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP09-017": {
    "id": "OP09-017",
    "name": "Wire",
    "cardType": "Character",
    "color": "Red",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP09-019": {
    "id": "OP09-019",
    "name": "Nobody Hurts a Friend of Mine!!!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP09-023": {
    "id": "OP09-023",
    "name": "Adio",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY",
    "rarity": "R",
    "cost": "9 Cost / 9000 Power"
  },
  "OP09-020": {
    "id": "OP09-020",
    "name": "Come On!! We'll Fight You!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-018": {
    "id": "OP09-018",
    "name": "Get Out of Here!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP09-024": {
    "id": "OP09-024",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-032": {
    "id": "OP09-032",
    "name": "Donquixote Rosinante",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-031": {
    "id": "OP09-031",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-026": {
    "id": "OP09-026",
    "name": "Sakazuki",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Navy",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP09-025": {
    "id": "OP09-025",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-027": {
    "id": "OP09-027",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-029": {
    "id": "OP09-029",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-028": {
    "id": "OP09-028",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-030": {
    "id": "OP09-030",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-034": {
    "id": "OP09-034",
    "name": "Perona",
    "cardType": "Character",
    "color": "Green",
    "traits": "Muggy Kingdom / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP09-033": {
    "id": "OP09-033",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-036": {
    "id": "OP09-036",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-035": {
    "id": "OP09-035",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP09-037": {
    "id": "OP09-037",
    "name": "Lim",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP09-039": {
    "id": "OP09-039",
    "name": "Gum-Gum Cuatro Jet Cross Shock Bazooka",
    "cardType": "Event",
    "color": "Green",
    "traits": "ODYSSEY / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-038": {
    "id": "OP09-038",
    "name": "Rob Lucci",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / CP9",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP09-040": {
    "id": "OP09-040",
    "name": "Thunder Lance Flip Caliber Phoenix Shot",
    "cardType": "Event",
    "color": "Green",
    "traits": "ODYSSEY / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP09-044": {
    "id": "OP09-044",
    "name": "Izo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Land of Wano / Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-043": {
    "id": "OP09-043",
    "name": "Alvida",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-042": {
    "id": "OP09-042",
    "name": "Buggy",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "The Four Emperors / Cross Guild",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP09-041": {
    "id": "OP09-041",
    "name": "Soul Franky Swing Arm Boxing Solid",
    "cardType": "Event",
    "color": "Green",
    "traits": "ODYSSEY / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-046": {
    "id": "OP09-046",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild / Former Baroque Works",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP09-045": {
    "id": "OP09-045",
    "name": "Cabaji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP09-047": {
    "id": "OP09-047",
    "name": "Kouzuki Oden",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Land of Wano / Whitebeard Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP09-049": {
    "id": "OP09-049",
    "name": "Jozu",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP09-057": {
    "id": "OP09-057",
    "name": "Cross Guild",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-048": {
    "id": "OP09-048",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP09-055": {
    "id": "OP09-055",
    "name": "Mr.1(Daz.Bonez)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild / Former Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP09-050": {
    "id": "OP09-050",
    "name": "Nami",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP09-052": {
    "id": "OP09-052",
    "name": "Marco",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP09-051": {
    "id": "OP09-051",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Four Emperors / Cross Guild",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP09-054": {
    "id": "OP09-054",
    "name": "Richie",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal / Cross Guild",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP09-058": {
    "id": "OP09-058",
    "name": "Special Muggy Ball",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Buggy Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP09-053": {
    "id": "OP09-053",
    "name": "Mohji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP09-060": {
    "id": "OP09-060",
    "name": "Emptee Bluffs Island",
    "cardType": "Stage",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-056": {
    "id": "OP09-056",
    "name": "Mr.3(Galdino)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild / Former Baroque Works",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP09-059": {
    "id": "OP09-059",
    "name": "Murder at the Steam Bath",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Buggy Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP09-063": {
    "id": "OP09-063",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP09-062": {
    "id": "OP09-062",
    "name": "Nico Robin",
    "cardType": "Leader",
    "color": "Purple/Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP09-064": {
    "id": "OP09-064",
    "name": "Killer",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP09-061": {
    "id": "OP09-061",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Purple/Black",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP09-068": {
    "id": "OP09-068",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-065": {
    "id": "OP09-065",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP09-066": {
    "id": "OP09-066",
    "name": "Jean Bart",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP09-067": {
    "id": "OP09-067",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP09-069": {
    "id": "OP09-069",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP09-080": {
    "id": "OP09-080",
    "name": "Thousand Sunny",
    "cardType": "Stage",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-070": {
    "id": "OP09-070",
    "name": "Nami",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP09-078": {
    "id": "OP09-078",
    "name": "Gum-Gum Giant",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-071": {
    "id": "OP09-071",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP09-072": {
    "id": "OP09-072",
    "name": "Franky",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-073": {
    "id": "OP09-073",
    "name": "Brook",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP09-075": {
    "id": "OP09-075",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP09-077": {
    "id": "OP09-077",
    "name": "Gum-Gum Lightning",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP09-074": {
    "id": "OP09-074",
    "name": "Bepo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Minks / Heart Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP09-076": {
    "id": "OP09-076",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP09-081": {
    "id": "OP09-081",
    "name": "Marshall.D.Teach",
    "cardType": "Leader",
    "color": "Black",
    "traits": "The Four Emperors / Blackbeard Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP09-079": {
    "id": "OP09-079",
    "name": "Gum-Gum Jump Rope",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP09-083": {
    "id": "OP09-083",
    "name": "Van Augur",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-085": {
    "id": "OP09-085",
    "name": "Gecko Moria",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-082": {
    "id": "OP09-082",
    "name": "Avalo Pizarro",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP09-089": {
    "id": "OP09-089",
    "name": "Stronger",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal / Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP09-088": {
    "id": "OP09-088",
    "name": "Shiryu",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-084": {
    "id": "OP09-084",
    "name": "Catarina Devon",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-086": {
    "id": "OP09-086",
    "name": "Jesus Burgess",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-090": {
    "id": "OP09-090",
    "name": "Doc Q",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP09-093": {
    "id": "OP09-093",
    "name": "Marshall.D.Teach",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Four Emperors / Blackbeard Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP09-087": {
    "id": "OP09-087",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Black",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP09-091": {
    "id": "OP09-091",
    "name": "Vasco Shot",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP09-097": {
    "id": "OP09-097",
    "name": "Black Vortex",
    "cardType": "Event",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP09-092": {
    "id": "OP09-092",
    "name": "Marshall.D.Teach",
    "cardType": "Character",
    "color": "Black",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-094": {
    "id": "OP09-094",
    "name": "Peachbeard",
    "cardType": "Character",
    "color": "Black",
    "traits": "Peachbeard Pirates / Blackbeard Pirates Allies",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP09-096": {
    "id": "OP09-096",
    "name": "My Era...Begins!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-095": {
    "id": "OP09-095",
    "name": "Laffitte",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP09-098": {
    "id": "OP09-098",
    "name": "Black Hole",
    "cardType": "Event",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP09-102": {
    "id": "OP09-102",
    "name": "Professor Clover",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Ohara",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP09-104": {
    "id": "OP09-104",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP09-100": {
    "id": "OP09-100",
    "name": "Karasu",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-099": {
    "id": "OP09-099",
    "name": "Fullalead",
    "cardType": "Stage",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-103": {
    "id": "OP09-103",
    "name": "Koala",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP09-101": {
    "id": "OP09-101",
    "name": "Kuzan",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-107": {
    "id": "OP09-107",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP09-105": {
    "id": "OP09-105",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-106": {
    "id": "OP09-106",
    "name": "Nico Olvia",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Ohara",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP09-115": {
    "id": "OP09-115",
    "name": "Ice Block Partisan",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-108": {
    "id": "OP09-108",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP09-112": {
    "id": "OP09-112",
    "name": "Belo Betty",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-109": {
    "id": "OP09-109",
    "name": "Jaguar.D.Saul",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Ohara / Giant / Navy",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP09-110": {
    "id": "OP09-110",
    "name": "Pierre",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Sky Island",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP09-111": {
    "id": "OP09-111",
    "name": "Brook",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP09-118": {
    "id": "OP09-118",
    "name": "Gol.D.Roger",
    "cardType": "Character",
    "color": "Red",
    "traits": "King of the Pirates / Roger Pirates",
    "rarity": "R",
    "cost": "10 Cost / 13000 Power"
  },
  "OP09-113": {
    "id": "OP09-113",
    "name": "Morley",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Giant / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP09-116": {
    "id": "OP09-116",
    "name": "Never Underestimate the Power of Miracles!!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP09-114": {
    "id": "OP09-114",
    "name": "Lindbergh",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Minks / Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP09-119": {
    "id": "OP09-119",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP09-117": {
    "id": "OP09-117",
    "name": "Dereshi!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Ohara",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP10-001": {
    "id": "OP10-001",
    "name": "Smoker",
    "cardType": "Leader",
    "color": "Red/Green",
    "traits": "Punk Hazard / Navy",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP10-003": {
    "id": "OP10-003",
    "name": "Sugar",
    "cardType": "Leader",
    "color": "Red/Purple",
    "traits": "Donquixote Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP10-002": {
    "id": "OP10-002",
    "name": "Caesar Clown",
    "cardType": "Leader",
    "color": "Red/Blue",
    "traits": "Scientist / Punk Hazard",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP10-004": {
    "id": "OP10-004",
    "name": "Vergo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard / Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP10-006": {
    "id": "OP10-006",
    "name": "Caesar Clown",
    "cardType": "Character",
    "color": "Red",
    "traits": "Scientist / Punk Hazard",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP10-005": {
    "id": "OP10-005",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP10-007": {
    "id": "OP10-007",
    "name": "Ceaser Soldier",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP10-012": {
    "id": "OP10-012",
    "name": "Dragon Number Thirteen",
    "cardType": "Character",
    "color": "Red",
    "traits": "Biological Weapon / Punk Hazard",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP10-010": {
    "id": "OP10-010",
    "name": "Chadros.Higelyges (Brownbeard)",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard / Brownbeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP10-009": {
    "id": "OP10-009",
    "name": "Smiley",
    "cardType": "Character",
    "color": "Red",
    "traits": "Biological Weapon / Punk Hazard",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-017": {
    "id": "OP10-017",
    "name": "Rock",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP10-008": {
    "id": "OP10-008",
    "name": "Scotch",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP10-011": {
    "id": "OP10-011",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP10-015": {
    "id": "OP10-015",
    "name": "Mocha",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP10-013": {
    "id": "OP10-013",
    "name": "Nami",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP10-014": {
    "id": "OP10-014",
    "name": "Franky",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Punk Hazard / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP10-016": {
    "id": "OP10-016",
    "name": "Monet",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP10-019": {
    "id": "OP10-019",
    "name": "Divine Departure",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP10-018": {
    "id": "OP10-018",
    "name": "Ten-Layer Igloo",
    "cardType": "Event",
    "color": "Red",
    "traits": "Punk Hazard / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP10-022": {
    "id": "OP10-022",
    "name": "Trafalgar Law",
    "cardType": "Leader",
    "color": "Green/Yellow",
    "traits": "Dressrosa / Supernovas / Heart Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP10-020": {
    "id": "OP10-020",
    "name": "Gum-Gum UFO",
    "cardType": "Event",
    "color": "Red",
    "traits": "Punk Hazard / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP10-021": {
    "id": "OP10-021",
    "name": "Punk Hazard",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Punk Hazard",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP10-023": {
    "id": "OP10-023",
    "name": "Issho",
    "cardType": "Character",
    "color": "Green",
    "traits": "Dressrosa / Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-024": {
    "id": "OP10-024",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-026": {
    "id": "OP10-026",
    "name": "Kin'emon",
    "cardType": "Character",
    "color": "Green",
    "traits": "Punk Hazard / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP10-025": {
    "id": "OP10-025",
    "name": "Enel",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Sky Island",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-027": {
    "id": "OP10-027",
    "name": "Kin'emon",
    "cardType": "Character",
    "color": "Green",
    "traits": "Punk Hazard / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP10-028": {
    "id": "OP10-028",
    "name": "Kouzuki Momonosuke",
    "cardType": "Character",
    "color": "Green",
    "traits": "Punk Hazard / Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP10-031": {
    "id": "OP10-031",
    "name": "Sengoku",
    "cardType": "Character",
    "color": "Green",
    "traits": "Dressrosa / Navy",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP10-033": {
    "id": "OP10-033",
    "name": "Nami",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP10-032": {
    "id": "OP10-032",
    "name": "Tashigi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Punk Hazard / Navy",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP10-029": {
    "id": "OP10-029",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-030": {
    "id": "OP10-030",
    "name": "Smoker",
    "cardType": "Character",
    "color": "Green",
    "traits": "Punk Hazard / Navy",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP10-035": {
    "id": "OP10-035",
    "name": "Brook",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP10-036": {
    "id": "OP10-036",
    "name": "Perona",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Muggy Kingdom / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-038": {
    "id": "OP10-038",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-034": {
    "id": "OP10-034",
    "name": "Franky",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-037": {
    "id": "OP10-037",
    "name": "Lim",
    "cardType": "Character",
    "color": "Green",
    "traits": "ODYSSEY",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP10-039": {
    "id": "OP10-039",
    "name": "Gum-Gum Dragon Fire Pistol Twister Star",
    "cardType": "Event",
    "color": "Green",
    "traits": "ODYSSEY / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP10-044": {
    "id": "OP10-044",
    "name": "Cub",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Tontattas / Dressrosa",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP10-041": {
    "id": "OP10-041",
    "name": "Radio Knife",
    "cardType": "Event",
    "color": "Green",
    "traits": "Dressrosa / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP10-040": {
    "id": "OP10-040",
    "name": "The Weak Do Not Have the Right to Choose How They Die",
    "cardType": "Event",
    "color": "Green",
    "traits": "Punk Hazard / The Seven Warlords of the Sea / Heart Pirates",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "OP10-046": {
    "id": "OP10-046",
    "name": "Kyros",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP10-043": {
    "id": "OP10-043",
    "name": "Moocy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal / Dressrosa",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP10-048": {
    "id": "OP10-048",
    "name": "Sai",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Happosui Army",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP10-052": {
    "id": "OP10-052",
    "name": "Bartolomeo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Barto Club",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-051": {
    "id": "OP10-051",
    "name": "Hack",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-042": {
    "id": "OP10-042",
    "name": "Usopp",
    "cardType": "Leader",
    "color": "Blue/Black",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP10-045": {
    "id": "OP10-045",
    "name": "Cavendish",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Beautiful Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP10-047": {
    "id": "OP10-047",
    "name": "Koala",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP10-053": {
    "id": "OP10-053",
    "name": "Bian",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Tontattas / Dressrosa",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP10-050": {
    "id": "OP10-050",
    "name": "Hajrudin",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Giant / Dressrosa / New Giant Pirates",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP10-049": {
    "id": "OP10-049",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-054": {
    "id": "OP10-054",
    "name": "Blue Gilly",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP10-059": {
    "id": "OP10-059",
    "name": "Fo...llow...Me...and...I...Will...Gui...de...You",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP10-056": {
    "id": "OP10-056",
    "name": "Mansherry",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Tontattas / Dressrosa",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP10-055": {
    "id": "OP10-055",
    "name": "Marco",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP10-057": {
    "id": "OP10-057",
    "name": "Leo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Tontattas / Dressrosa",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP10-058": {
    "id": "OP10-058",
    "name": "Rebecca",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "7 Cost / 4000 Power"
  },
  "OP10-063": {
    "id": "OP10-063",
    "name": "Vinsmoke Sanji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kingdom of GERMA / The Vinsmoke Family",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP10-061": {
    "id": "OP10-061",
    "name": "Special Long-Range Attack!! Bagworm",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP10-062": {
    "id": "OP10-062",
    "name": "Violet",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP10-060": {
    "id": "OP10-060",
    "name": "Barrier-Barrier Pistol",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Dressrosa / Barto Club",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "OP10-067": {
    "id": "OP10-067",
    "name": "Senor Pink",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-069": {
    "id": "OP10-069",
    "name": "Fighting Fish",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Dressrosa",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP10-064": {
    "id": "OP10-064",
    "name": "Clone Soldier",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kingdom of GERMA",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP10-066": {
    "id": "OP10-066",
    "name": "Giolla",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP10-072": {
    "id": "OP10-072",
    "name": "Donquixote Rosinante",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-065": {
    "id": "OP10-065",
    "name": "Sugar",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP10-070": {
    "id": "OP10-070",
    "name": "Trebol",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-068": {
    "id": "OP10-068",
    "name": "Diamante",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP10-071": {
    "id": "OP10-071",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP10-077": {
    "id": "OP10-077",
    "name": "Bellamy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP10-073": {
    "id": "OP10-073",
    "name": "Buffalo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP10-074": {
    "id": "OP10-074",
    "name": "Pica",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-075": {
    "id": "OP10-075",
    "name": "Foxy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Foxy Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP10-082": {
    "id": "OP10-082",
    "name": "Kuzan",
    "cardType": "Character",
    "color": "Black",
    "traits": "Former Navy / Blackbeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP10-076": {
    "id": "OP10-076",
    "name": "Baby 5",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP10-078": {
    "id": "OP10-078",
    "name": "I Do Not Forgive Those Who Laugh at My Family!!!",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP10-080": {
    "id": "OP10-080",
    "name": "Little Black Bears",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP10-079": {
    "id": "OP10-079",
    "name": "God Thread",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "OP10-084": {
    "id": "OP10-084",
    "name": "Sanjuan.Wolf",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Blackbeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP10-090": {
    "id": "OP10-090",
    "name": "Franky",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-081": {
    "id": "OP10-081",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-089": {
    "id": "OP10-089",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP10-086": {
    "id": "OP10-086",
    "name": "Shiryu",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-087": {
    "id": "OP10-087",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal / Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP10-083": {
    "id": "OP10-083",
    "name": "Kouzuki Momonosuke",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP10-097": {
    "id": "OP10-097",
    "name": "Gum-Gum Rhino Schneider",
    "cardType": "Event",
    "color": "Black",
    "traits": "Dressrosa / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP10-085": {
    "id": "OP10-085",
    "name": "Jesus Burgess",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Blackbeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-088": {
    "id": "OP10-088",
    "name": "Nami",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP10-096": {
    "id": "OP10-096",
    "name": "There’s No Longer Any Need for the Seven Warlords of the Sea!!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP10-092": {
    "id": "OP10-092",
    "name": "Perona",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-098": {
    "id": "OP10-098",
    "name": "Liberation",
    "cardType": "Event",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "OP10-095": {
    "id": "OP10-095",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP10-094": {
    "id": "OP10-094",
    "name": "Ryuma",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP10-091": {
    "id": "OP10-091",
    "name": "Brook",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP10-093": {
    "id": "OP10-093",
    "name": "Saint Homing",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP10-104": {
    "id": "OP10-104",
    "name": "Caribou",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Caribou Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-100": {
    "id": "OP10-100",
    "name": "Inazuma",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-101": {
    "id": "OP10-101",
    "name": "Urouge",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Fallen Monk Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP10-102": {
    "id": "OP10-102",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-001": {
    "id": "OP11-001",
    "name": "Koby",
    "cardType": "Leader",
    "color": "Red/Black",
    "traits": "Navy / SWORD",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP10-099": {
    "id": "OP10-099",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP10-106": {
    "id": "OP10-106",
    "name": "Killer",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP10-105": {
    "id": "OP10-105",
    "name": "Cavendish",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Dressrosa / Supernovas / Beautiful Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP10-107": {
    "id": "OP10-107",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP10-103": {
    "id": "OP10-103",
    "name": "Capone\"Gang\"Bege",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Firetank Pirates",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP10-111": {
    "id": "OP10-111",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP10-108": {
    "id": "OP10-108",
    "name": "Scratchmen Apoo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / On-Air Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP10-114": {
    "id": "OP10-114",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Navy / Drake Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP10-109": {
    "id": "OP10-109",
    "name": "Basil Hawkins",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Hawkins Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-112": {
    "id": "OP10-112",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP10-110": {
    "id": "OP10-110",
    "name": "Heat & Wire",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP10-115": {
    "id": "OP10-115",
    "name": "Let's Meet Again in the New World",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP11-005": {
    "id": "OP11-005",
    "name": "Smoker",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP10-113": {
    "id": "OP10-113",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP10-119": {
    "id": "OP10-119",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Dressrosa / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP11-003": {
    "id": "OP11-003",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP10-116": {
    "id": "OP10-116",
    "name": "Damned Punk",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP11-002": {
    "id": "OP11-002",
    "name": "Ain",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Neo Navy",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP10-117": {
    "id": "OP10-117",
    "name": "ROOM",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP10-118": {
    "id": "OP10-118",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP11-006": {
    "id": "OP11-006",
    "name": "Zephyr",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Neo Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-008": {
    "id": "OP11-008",
    "name": "Doll",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "OP11-012": {
    "id": "OP11-012",
    "name": "Franky",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP11-004": {
    "id": "OP11-004",
    "name": "Kujyaku",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP11-011": {
    "id": "OP11-011",
    "name": "Bins",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Neo Navy",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP11-007": {
    "id": "OP11-007",
    "name": "Tashigi",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP11-009": {
    "id": "OP11-009",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP11-010": {
    "id": "OP11-010",
    "name": "Hibari",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-014": {
    "id": "OP11-014",
    "name": "Borsalino",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Navy",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP11-013": {
    "id": "OP11-013",
    "name": "Prince Grus",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP11-015": {
    "id": "OP11-015",
    "name": "Mocha",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP11-017": {
    "id": "OP11-017",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy / SWORD / Drake Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP11-019": {
    "id": "OP11-019",
    "name": "Glorp Web!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP11-016": {
    "id": "OP11-016",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-020": {
    "id": "OP11-020",
    "name": "X Calibur",
    "cardType": "Event",
    "color": "Red",
    "traits": "Navy / SWORD / Drake Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP11-018": {
    "id": "OP11-018",
    "name": "Honesty Impact",
    "cardType": "Event",
    "color": "Red",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "OP11-021": {
    "id": "OP11-021",
    "name": "Jinbe",
    "cardType": "Leader",
    "color": "Green",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP11-023": {
    "id": "OP11-023",
    "name": "Arlong",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Fish-Man Island / The Sun Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP11-024": {
    "id": "OP11-024",
    "name": "Aladine",
    "cardType": "Character",
    "color": "Green",
    "traits": "Merfolk / Fish-Man Island / The Sun Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP11-022": {
    "id": "OP11-022",
    "name": "Shirahoshi",
    "cardType": "Leader",
    "color": "Green/Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP11-025": {
    "id": "OP11-025",
    "name": "Ishilly",
    "cardType": "Character",
    "color": "Green",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP11-028": {
    "id": "OP11-028",
    "name": "Lord of the Coast",
    "cardType": "Character",
    "color": "Green",
    "traits": "Neptunian / East Blue",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP11-033": {
    "id": "OP11-033",
    "name": "Bird Neptunian",
    "cardType": "Character",
    "color": "Green",
    "traits": "Neptunian",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP11-029": {
    "id": "OP11-029",
    "name": "Charlotte Praline",
    "cardType": "Character",
    "color": "Green",
    "traits": "Merfolk / Fish-Man Island / The Sun Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP11-026": {
    "id": "OP11-026",
    "name": "Scaled Neptunian",
    "cardType": "Character",
    "color": "Green",
    "traits": "Neptunian",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP11-027": {
    "id": "OP11-027",
    "name": "Bulge-Eyed Neptunian",
    "cardType": "Character",
    "color": "Green",
    "traits": "Neptunian",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP11-034": {
    "id": "OP11-034",
    "name": "Hatchan",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Fish-Man Island / Former Arlong Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP11-030": {
    "id": "OP11-030",
    "name": "Shirahoshi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP11-032": {
    "id": "OP11-032",
    "name": "Surume",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal / Fish-Man Island",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-031": {
    "id": "OP11-031",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Fish-Man Island / The Sun Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP11-044": {
    "id": "OP11-044",
    "name": "Vinsmoke Judge",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP11-040": {
    "id": "OP11-040",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Blue/Purple",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "3 Life / 6000 Power"
  },
  "OP11-035": {
    "id": "OP11-035",
    "name": "Fisher Tiger",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Fish-Man Island / The Sun Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP11-043": {
    "id": "OP11-043",
    "name": "Vinsmoke Ichiji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP11-036": {
    "id": "OP11-036",
    "name": "Spotted Neptunian",
    "cardType": "Character",
    "color": "Green",
    "traits": "Neptunian",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP11-042": {
    "id": "OP11-042",
    "name": "Vito",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Firetank Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP11-038": {
    "id": "OP11-038",
    "name": "Gum-Gum Elephant Gatling",
    "cardType": "Event",
    "color": "Green",
    "traits": "Fish-Man Island / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP11-046": {
    "id": "OP11-046",
    "name": "Vinsmoke Yonji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP11-037": {
    "id": "OP11-037",
    "name": "Ancient Weapon Poseidon",
    "cardType": "Event",
    "color": "Green",
    "traits": "Fish-Man Island",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP11-039": {
    "id": "OP11-039",
    "name": "Vagabond Drill",
    "cardType": "Event",
    "color": "Green",
    "traits": "Fish-Man / Fish-Man Island / The Sun Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP11-041": {
    "id": "OP11-041",
    "name": "Nami",
    "cardType": "Leader",
    "color": "Blue/Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP11-047": {
    "id": "OP11-047",
    "name": "Vinsmoke Reiju",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP11-045": {
    "id": "OP11-045",
    "name": "Vinsmoke Niji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-048": {
    "id": "OP11-048",
    "name": "Capone\"Gang\"Bege",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Supernovas / Firetank Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP11-049": {
    "id": "OP11-049",
    "name": "Carrot",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Minks",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP11-053": {
    "id": "OP11-053",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-055": {
    "id": "OP11-055",
    "name": "Bartolomeo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Supernovas",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP11-052": {
    "id": "OP11-052",
    "name": "Charlotte Lola",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Firetank Pirates / Former Rolling Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP11-050": {
    "id": "OP11-050",
    "name": "Gotti",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Firetank Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP11-051": {
    "id": "OP11-051",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Vinsmoke Family / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP11-054": {
    "id": "OP11-054",
    "name": "Nami",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-061": {
    "id": "OP11-061",
    "name": "Gum-Gum Jet Culverin",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP11-056": {
    "id": "OP11-056",
    "name": "Brook",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP11-064": {
    "id": "OP11-064",
    "name": "Saldeath",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP11-059": {
    "id": "OP11-059",
    "name": "Gum-Gum King Cobra",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP11-057": {
    "id": "OP11-057",
    "name": "Pedro",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Minks",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP11-060": {
    "id": "OP11-060",
    "name": "Let's Crash This Wedding!!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP11-058": {
    "id": "OP11-058",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP11-075": {
    "id": "OP11-075",
    "name": "Jaguar.D.Saul",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Giant / Ohara / Former Navy",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP11-062": {
    "id": "OP11-062",
    "name": "Charlotte Katakuri",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP11-068": {
    "id": "OP11-068",
    "name": "Charlotte Daifuku",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP11-065": {
    "id": "OP11-065",
    "name": "Charlotte Anana",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP11-063": {
    "id": "OP11-063",
    "name": "Little Sadi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP11-067": {
    "id": "OP11-067",
    "name": "Charlotte Katakuri",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP11-069": {
    "id": "OP11-069",
    "name": "Charlotte Brulee",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP11-066": {
    "id": "OP11-066",
    "name": "Charlotte Oven",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP11-078": {
    "id": "OP11-078",
    "name": "Decuplets",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-074": {
    "id": "OP11-074",
    "name": "Streusen",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP11-083": {
    "id": "OP11-083",
    "name": "Caribou",
    "cardType": "Character",
    "color": "Black",
    "traits": "Caribou Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP11-070": {
    "id": "OP11-070",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP11-073": {
    "id": "OP11-073",
    "name": "Charlotte Linlin",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP11-076": {
    "id": "OP11-076",
    "name": "Hannyabal",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP11-071": {
    "id": "OP11-071",
    "name": "Charlotte Perospero",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP11-072": {
    "id": "OP11-072",
    "name": "Charlotte Mont-d'or",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP11-077": {
    "id": "OP11-077",
    "name": "Randolph",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Homies / Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP11-082": {
    "id": "OP11-082",
    "name": "Aramaki",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP11-081": {
    "id": "OP11-081",
    "name": "Cognac Mama-Mash",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "OP11-080": {
    "id": "OP11-080",
    "name": "Gear Two",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP11-085": {
    "id": "OP11-085",
    "name": "Kurozumi Orochi",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Kurozumi Clan",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP11-079": {
    "id": "OP11-079",
    "name": "When Two Men Are Fighting the Last Thing I Need Is Some Half-Hearted Assistance!!!!",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP11-084": {
    "id": "OP11-084",
    "name": "Kuzan",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP11-090": {
    "id": "OP11-090",
    "name": "Briscola",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP11-087": {
    "id": "OP11-087",
    "name": "Miss Sarahebi",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-086": {
    "id": "OP11-086",
    "name": "Coribou",
    "cardType": "Character",
    "color": "Black",
    "traits": "Caribou Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP11-089": {
    "id": "OP11-089",
    "name": "Black Maria",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP11-096": {
    "id": "OP11-096",
    "name": "Ripper",
    "cardType": "Character",
    "color": "Black",
    "traits": "East Blue / Navy",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP11-088": {
    "id": "OP11-088",
    "name": "Shu",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP11-094": {
    "id": "OP11-094",
    "name": "Morgan",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP11-092": {
    "id": "OP11-092",
    "name": "Helmeppo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP11-091": {
    "id": "OP11-091",
    "name": "Berry Good",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP11-095": {
    "id": "OP11-095",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP11-098": {
    "id": "OP11-098",
    "name": "Blue Hole",
    "cardType": "Event",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP11-093": {
    "id": "OP11-093",
    "name": "Bogard",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP11-099": {
    "id": "OP11-099",
    "name": "I'm Gonna Be a Navy Officer!!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "East Blue / Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP11-097": {
    "id": "OP11-097",
    "name": "After All These Years I'm Losing My Edge!!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP11-101": {
    "id": "OP11-101",
    "name": "Capone\"Gang\"Bege",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Firetank Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP11-100": {
    "id": "OP11-100",
    "name": "Otohime",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP11-104": {
    "id": "OP11-104",
    "name": "Shirley",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP11-110": {
    "id": "OP11-110",
    "name": "Fukaboshi",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP11-108": {
    "id": "OP11-108",
    "name": "Neptune",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP11-103": {
    "id": "OP11-103",
    "name": "Long-Jaw Neptunian",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Neptunian",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP11-113": {
    "id": "OP11-113",
    "name": "Ryuboshi",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP11-105": {
    "id": "OP11-105",
    "name": "Charlotte Chiffon",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Firetank Pirates / Former Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-109": {
    "id": "OP11-109",
    "name": "Pappag",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Fish-Man Island",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP11-107": {
    "id": "OP11-107",
    "name": "Topknot Neptunian",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Neptunian",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP11-102": {
    "id": "OP11-102",
    "name": "Camie",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP12-001": {
    "id": "OP12-001",
    "name": "Silvers Rayleigh",
    "cardType": "Leader",
    "color": "Red",
    "traits": "Former Roger Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP11-106": {
    "id": "OP11-106",
    "name": "Zeus",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Homies / Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP11-111": {
    "id": "OP11-111",
    "name": "Mamboshi",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP11-112": {
    "id": "OP11-112",
    "name": "Megalo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Fish-Man Island",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP11-114": {
    "id": "OP11-114",
    "name": "Gum-Gum Fire-Fist Pistol Red Hawk",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP11-116": {
    "id": "OP11-116",
    "name": "Merman Combat Ultramarine",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "OP11-118": {
    "id": "OP11-118",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP11-117": {
    "id": "OP11-117",
    "name": "Fish-Man Island",
    "cardType": "Stage",
    "color": "Yellow",
    "traits": "Fish-Man Island",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP11-119": {
    "id": "OP11-119",
    "name": "Koby",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP12-005": {
    "id": "OP12-005",
    "name": "Shiki",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Golden Lion Pirates",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP11-115": {
    "id": "OP11-115",
    "name": "You're Just Not My Type!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP12-002": {
    "id": "OP12-002",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-004": {
    "id": "OP12-004",
    "name": "Kouzuki Oden",
    "cardType": "Character",
    "color": "Red",
    "traits": "Land of Wano / Kouzuki Clan / Roger Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP12-003": {
    "id": "OP12-003",
    "name": "Crocus",
    "cardType": "Character",
    "color": "Red",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP12-007": {
    "id": "OP12-007",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Red",
    "traits": "Roger Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP12-008": {
    "id": "OP12-008",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP12-006": {
    "id": "OP12-006",
    "name": "Shakuyaku",
    "cardType": "Character",
    "color": "Red",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP12-009": {
    "id": "OP12-009",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP12-010": {
    "id": "OP12-010",
    "name": "Douglas Bullet",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / The Pirates Fest / Former Roger Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-011": {
    "id": "OP12-011",
    "name": "Duval",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Flying Fish Riders",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP12-012": {
    "id": "OP12-012",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Roger Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP12-021": {
    "id": "OP12-021",
    "name": "Ipponmatsu",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP12-013": {
    "id": "OP12-013",
    "name": "Hatchan",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Former Arlong Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP12-016": {
    "id": "OP12-016",
    "name": "To Never Doubt--That Is Power!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP12-017": {
    "id": "OP12-017",
    "name": "Color of Observation Haki",
    "cardType": "Event",
    "color": "Red",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP12-019": {
    "id": "OP12-019",
    "name": "Color of Arms Haki",
    "cardType": "Event",
    "color": "Red",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP12-015": {
    "id": "OP12-015",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP12-014": {
    "id": "OP12-014",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP12-018": {
    "id": "OP12-018",
    "name": "Color of the Supreme King Haki",
    "cardType": "Event",
    "color": "Red",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP12-020": {
    "id": "OP12-020",
    "name": "Roronoa Zoro",
    "cardType": "Leader",
    "color": "Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP12-024": {
    "id": "OP12-024",
    "name": "Gyukimaru",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal / Land of Wano",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-028": {
    "id": "OP12-028",
    "name": "Kouzuki Hiyori",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP12-023": {
    "id": "OP12-023",
    "name": "Kawamatsu",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-030": {
    "id": "OP12-030",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Green",
    "traits": "Muggy Kingdom / The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP12-022": {
    "id": "OP12-022",
    "name": "Inuarashi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-025": {
    "id": "OP12-025",
    "name": "Kin'emon",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP12-027": {
    "id": "OP12-027",
    "name": "Koushirou",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Frost Moon Village",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP12-032": {
    "id": "OP12-032",
    "name": "Nekomamushi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-026": {
    "id": "OP12-026",
    "name": "Kuina",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Frost Moon Village",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "OP12-031": {
    "id": "OP12-031",
    "name": "Tashigi",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Navy",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP12-033": {
    "id": "OP12-033",
    "name": "Helmeppo",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-029": {
    "id": "OP12-029",
    "name": "Shimotsuki Kouzaburou",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Frost Moon Village / Land of Wano",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP12-040": {
    "id": "OP12-040",
    "name": "Kuzan",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP12-039": {
    "id": "OP12-039",
    "name": "Luffy Is the Man Who Will Become the King of Pirates!!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP12-035": {
    "id": "OP12-035",
    "name": "Morgan",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Navy",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP12-037": {
    "id": "OP12-037",
    "name": "Demon Aura Nine Sword Style Asura Blades Drawn Dead Man's Game",
    "cardType": "Event",
    "color": "Green",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP12-043": {
    "id": "OP12-043",
    "name": "Kuzan",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP12-034": {
    "id": "OP12-034",
    "name": "Perona",
    "cardType": "Character",
    "color": "Green",
    "traits": "Muggy Kingdom / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP12-038": {
    "id": "OP12-038",
    "name": "Two-Sword Style Rashomon",
    "cardType": "Event",
    "color": "Green",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP12-036": {
    "id": "OP12-036",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-041": {
    "id": "OP12-041",
    "name": "Sanji",
    "cardType": "Leader",
    "color": "Blue/Purple",
    "traits": "The Vinsmoke Family / Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP12-042": {
    "id": "OP12-042",
    "name": "Alvida",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-044": {
    "id": "OP12-044",
    "name": "Sakazuki",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP12-048": {
    "id": "OP12-048",
    "name": "Donquixote Rosinante",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP12-047": {
    "id": "OP12-047",
    "name": "Sengoku",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP12-046": {
    "id": "OP12-046",
    "name": "Zephyr(Navy)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "FILM / Navy",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP12-045": {
    "id": "OP12-045",
    "name": "Jango",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP12-049": {
    "id": "OP12-049",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Four Emperors / Cross Guild",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-050": {
    "id": "OP12-050",
    "name": "Jaguar.D.Saul",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Giant / Ohara / Navy",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-054": {
    "id": "OP12-054",
    "name": "Marshall.D.Teach",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP12-051": {
    "id": "OP12-051",
    "name": "Hina",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP12-052": {
    "id": "OP12-052",
    "name": "Fullbody",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP12-053": {
    "id": "OP12-053",
    "name": "Borsalino",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-063": {
    "id": "OP12-063",
    "name": "Vinsmoke Reiju",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Vinsmoke Family / GERMA 66",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-055": {
    "id": "OP12-055",
    "name": "Mohji & Cabaji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-065": {
    "id": "OP12-065",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-056": {
    "id": "OP12-056",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP12-058": {
    "id": "OP12-058",
    "name": "I Will Make Whitebeard the King of the Pirates",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "9 Cost"
  },
  "OP12-072": {
    "id": "OP12-072",
    "name": "Zeff",
    "cardType": "Character",
    "color": "Purple",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-064": {
    "id": "OP12-064",
    "name": "Vergo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Punk Hazard / Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP12-057": {
    "id": "OP12-057",
    "name": "Ice Block Pheasant Peck",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP12-059": {
    "id": "OP12-059",
    "name": "Concasser",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Sky Island / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP12-060": {
    "id": "OP12-060",
    "name": "Boeuf Burst",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP12-061": {
    "id": "OP12-061",
    "name": "Donquixote Rosinante",
    "cardType": "Leader",
    "color": "Purple/Yellow",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP12-062": {
    "id": "OP12-062",
    "name": "Vinsmoke Sora",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kingdom of GERMA / The Vinsmoke Family",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP12-073": {
    "id": "OP12-073",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Dressrosa / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP12-067": {
    "id": "OP12-067",
    "name": "Carmen",
    "cardType": "Character",
    "color": "Purple",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP12-066": {
    "id": "OP12-066",
    "name": "Carne",
    "cardType": "Character",
    "color": "Purple",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP12-068": {
    "id": "OP12-068",
    "name": "Gin",
    "cardType": "Character",
    "color": "Purple",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-085": {
    "id": "OP12-085",
    "name": "Karasu",
    "cardType": "Character",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-070": {
    "id": "OP12-070",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Alabasta / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP12-069": {
    "id": "OP12-069",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP12-076": {
    "id": "OP12-076",
    "name": "Monet",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Punk Hazard / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-074": {
    "id": "OP12-074",
    "name": "Patty",
    "cardType": "Character",
    "color": "Purple",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP12-077": {
    "id": "OP12-077",
    "name": "The \"Extinguishes All Sound Created by Your Influence\" Technique",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP12-071": {
    "id": "OP12-071",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP12-075": {
    "id": "OP12-075",
    "name": "Ms. All Sunday",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-078": {
    "id": "OP12-078",
    "name": "Brochette Blow",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP12-080": {
    "id": "OP12-080",
    "name": "Baratie",
    "cardType": "Stage",
    "color": "Purple",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP12-079": {
    "id": "OP12-079",
    "name": "Luffy Is the Man Who Will Be King of the Pirates!!!",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP12-082": {
    "id": "OP12-082",
    "name": "Issho",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Navy",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP12-081": {
    "id": "OP12-081",
    "name": "Koala",
    "cardType": "Leader",
    "color": "Black/Yellow",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP12-090": {
    "id": "OP12-090",
    "name": "Belo Betty",
    "cardType": "Character",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP12-084": {
    "id": "OP12-084",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP12-083": {
    "id": "OP12-083",
    "name": "Inazuma",
    "cardType": "Character",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-088": {
    "id": "OP12-088",
    "name": "Bastille",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Navy",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP12-087": {
    "id": "OP12-087",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-086": {
    "id": "OP12-086",
    "name": "Koala",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP12-089": {
    "id": "OP12-089",
    "name": "Hack",
    "cardType": "Character",
    "color": "Black",
    "traits": "Fish-Man / Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-091": {
    "id": "OP12-091",
    "name": "Poker",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP12-097": {
    "id": "OP12-097",
    "name": "Captains Assembled",
    "cardType": "Event",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP12-093": {
    "id": "OP12-093",
    "name": "Morley",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-098": {
    "id": "OP12-098",
    "name": "Hair Removal Fist",
    "cardType": "Event",
    "color": "Black",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP12-092": {
    "id": "OP12-092",
    "name": "Mizerka",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal Kingdom Pirates / SMILE",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-094": {
    "id": "OP12-094",
    "name": "Monkey.D.Dragon",
    "cardType": "Character",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP12-096": {
    "id": "OP12-096",
    "name": "Ursa Shock",
    "cardType": "Event",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP12-095": {
    "id": "OP12-095",
    "name": "Lindbergh",
    "cardType": "Character",
    "color": "Black",
    "traits": "Minks / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-099": {
    "id": "OP12-099",
    "name": "Kalgara",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Jaya / Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-100": {
    "id": "OP12-100",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-105": {
    "id": "OP12-105",
    "name": "Trafalgar Lammy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Flevance",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP12-103": {
    "id": "OP12-103",
    "name": "Seto",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Jaya / Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-106": {
    "id": "OP12-106",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Dressrosa / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-101": {
    "id": "OP12-101",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP12-102": {
    "id": "OP12-102",
    "name": "Shirahoshi",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP12-117": {
    "id": "OP12-117",
    "name": "Slam Gibson",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP12-104": {
    "id": "OP12-104",
    "name": "Sentomaru",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-111": {
    "id": "OP12-111",
    "name": "Baby 5",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP12-108": {
    "id": "OP12-108",
    "name": "Donquixote Rosinante",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP12-107": {
    "id": "OP12-107",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP12-109": {
    "id": "OP12-109",
    "name": "Pacifista",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Biological Weapon / Egghead / Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP13-003": {
    "id": "OP13-003",
    "name": "Gol.D.Roger",
    "cardType": "Leader",
    "color": "Red/Purple",
    "traits": "King of the Pirates / Roger Pirates",
    "rarity": "L",
    "cost": "5 Life / 7000 Power"
  },
  "OP12-112": {
    "id": "OP12-112",
    "name": "Baby 5",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP12-114": {
    "id": "OP12-114",
    "name": "Wyper",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP12-113": {
    "id": "OP12-113",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-110": {
    "id": "OP12-110",
    "name": "Buffalo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP12-118": {
    "id": "OP12-118",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP12-116": {
    "id": "OP12-116",
    "name": "We'll Ring the Bell Waiting for You!!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Jaya / Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP12-115": {
    "id": "OP12-115",
    "name": "I Love You!!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-001": {
    "id": "OP13-001",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Red/Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP13-002": {
    "id": "OP13-002",
    "name": "Portgas.D.Ace",
    "cardType": "Leader",
    "color": "Red/Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "L",
    "cost": "3 Life / 6000 Power"
  },
  "OP12-119": {
    "id": "OP12-119",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP13-006": {
    "id": "OP13-006",
    "name": "Woop Slap",
    "cardType": "Character",
    "color": "Red",
    "traits": "Windmill Village",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP13-005": {
    "id": "OP13-005",
    "name": "Inazuma",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP13-009": {
    "id": "OP13-009",
    "name": "Curly.Dadan",
    "cardType": "Character",
    "color": "Red",
    "traits": "Mountain Bandits",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP13-004": {
    "id": "OP13-004",
    "name": "Sabo",
    "cardType": "Leader",
    "color": "Red/Black",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP13-010": {
    "id": "OP13-010",
    "name": "Lord of the Coast",
    "cardType": "Character",
    "color": "Red",
    "traits": "Neptunian / East Blue",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP13-012": {
    "id": "OP13-012",
    "name": "Nefeltari Vivi",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP13-007": {
    "id": "OP13-007",
    "name": "Ace & Sabo & Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Goa Kingdom",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP13-008": {
    "id": "OP13-008",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP13-014": {
    "id": "OP13-014",
    "name": "Portgas.D.Rouge",
    "cardType": "Character",
    "color": "Red",
    "traits": "Baterilla",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP13-015": {
    "id": "OP13-015",
    "name": "Makino",
    "cardType": "Character",
    "color": "Red",
    "traits": "Windmill Village",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP13-016": {
    "id": "OP13-016",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP13-011": {
    "id": "OP13-011",
    "name": "Nefeltari Cobra",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-018": {
    "id": "OP13-018",
    "name": "Wapol",
    "cardType": "Character",
    "color": "Red",
    "traits": "Evil Black Drum Kingdom",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP13-017": {
    "id": "OP13-017",
    "name": "Monkey.D.Dragon",
    "cardType": "Character",
    "color": "Red",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP13-013": {
    "id": "OP13-013",
    "name": "Higuma",
    "cardType": "Character",
    "color": "Red",
    "traits": "Mountain Bandits",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP13-020": {
    "id": "OP13-020",
    "name": "Meteor Fist",
    "cardType": "Event",
    "color": "Red",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP13-023": {
    "id": "OP13-023",
    "name": "Uta",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP13-021": {
    "id": "OP13-021",
    "name": "Gum-Gum Gatling Gun",
    "cardType": "Event",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-019": {
    "id": "OP13-019",
    "name": "But Ace Here Said You Deserved It!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-025": {
    "id": "OP13-025",
    "name": "Koby",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-022": {
    "id": "OP13-022",
    "name": "Windmill Village",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Windmill Village",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-024": {
    "id": "OP13-024",
    "name": "Gordon",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP13-026": {
    "id": "OP13-026",
    "name": "Sunny-Kun",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP13-029": {
    "id": "OP13-029",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP13-030": {
    "id": "OP13-030",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal / FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-031": {
    "id": "OP13-031",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP13-027": {
    "id": "OP13-027",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP13-028": {
    "id": "OP13-028",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP13-033": {
    "id": "OP13-033",
    "name": "Franky",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP13-032": {
    "id": "OP13-032",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP13-036": {
    "id": "OP13-036",
    "name": "Helmeppo",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-035": {
    "id": "OP13-035",
    "name": "Bepo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / FILM / Heart Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP13-037": {
    "id": "OP13-037",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP13-034": {
    "id": "OP13-034",
    "name": "Brook",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP13-038": {
    "id": "OP13-038",
    "name": "Gum-Gum Elephant Gun",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP13-048": {
    "id": "OP13-048",
    "name": "Blamenco",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-040": {
    "id": "OP13-040",
    "name": "I Know You're Strong... So I'll Go All Out from the Very Start!!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-039": {
    "id": "OP13-039",
    "name": "Gum-Gum Snake Shot",
    "cardType": "Event",
    "color": "Green",
    "traits": "Fish-Man Island / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP13-041": {
    "id": "OP13-041",
    "name": "Izo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Land of Wano / Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP13-043": {
    "id": "OP13-043",
    "name": "Otama",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP13-046": {
    "id": "OP13-046",
    "name": "Vista",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP13-044": {
    "id": "OP13-044",
    "name": "Curiel",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP13-042": {
    "id": "OP13-042",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP13-054": {
    "id": "OP13-054",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-051": {
    "id": "OP13-051",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP13-050": {
    "id": "OP13-050",
    "name": "Boa Sandersonia",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP13-045": {
    "id": "OP13-045",
    "name": "Haruta",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP13-047": {
    "id": "OP13-047",
    "name": "Fossa",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP13-060": {
    "id": "OP13-060",
    "name": "Amatsuki Toki",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano / Roger Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP13-049": {
    "id": "OP13-049",
    "name": "Blenheim",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP13-052": {
    "id": "OP13-052",
    "name": "Boa Marigold",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "5 Cost / 4000 Power"
  },
  "OP13-055": {
    "id": "OP13-055",
    "name": "Rakuyo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP13-053": {
    "id": "OP13-053",
    "name": "Marshall.D.Teach",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP13-059": {
    "id": "OP13-059",
    "name": "Brilliant Punk",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP13-056": {
    "id": "OP13-056",
    "name": "LittleOars Jr.",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Giant / Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP13-057": {
    "id": "OP13-057",
    "name": "If I Bowed Down to Power, What's the Point in Living?",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-063": {
    "id": "OP13-063",
    "name": "Kouzuki Oden",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano / Kouzuki Clan / Roger Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-061": {
    "id": "OP13-061",
    "name": "Inuarashi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Minks / Roger Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP13-058": {
    "id": "OP13-058",
    "name": "Phoenix Pyreapple",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Former Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-065": {
    "id": "OP13-065",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Roger Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP13-062": {
    "id": "OP13-062",
    "name": "Crocus",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Roger Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-069": {
    "id": "OP13-069",
    "name": "Tom",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Fish-Man / Water Seven",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP13-066": {
    "id": "OP13-066",
    "name": "Silvers Rayleigh",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Roger Pirates",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP13-064": {
    "id": "OP13-064",
    "name": "Gol.D.Roger",
    "cardType": "Character",
    "color": "Purple",
    "traits": "King of the Pirates / Roger Pirates",
    "rarity": "R",
    "cost": "10 Cost / 13000 Power"
  },
  "OP13-067": {
    "id": "OP13-067",
    "name": "Scopper Gaban",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Roger Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP13-072": {
    "id": "OP13-072",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Roger Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP13-070": {
    "id": "OP13-070",
    "name": "Napoleon",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Homies / Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP13-068": {
    "id": "OP13-068",
    "name": "Douglas Bullet",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Former Roger Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP13-074": {
    "id": "OP13-074",
    "name": "Hera",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Homies / Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP13-075": {
    "id": "OP13-075",
    "name": "Guess We'll Have Another Scrap. You Can Only Risk Death While You're Still Alive!!",
    "cardType": "Event",
    "color": "Purple",
    "traits": "King of the Pirates / Roger Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-076": {
    "id": "OP13-076",
    "name": "Divine Departure",
    "cardType": "Event",
    "color": "Purple",
    "traits": "King of the Pirates / Roger Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP13-073": {
    "id": "OP13-073",
    "name": "Prometheus",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Homies / Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-071": {
    "id": "OP13-071",
    "name": "Nekomamushi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Minks / Roger Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP13-079": {
    "id": "OP13-079",
    "name": "Imu",
    "cardType": "Leader",
    "color": "Black",
    "traits": "?",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP13-078": {
    "id": "OP13-078",
    "name": "Oro Jackson",
    "cardType": "Stage",
    "color": "Purple",
    "traits": "Roger Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-077": {
    "id": "OP13-077",
    "name": "Go All the Way to the Top!!",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-087": {
    "id": "OP13-087",
    "name": "Saint Charlos",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP13-090": {
    "id": "OP13-090",
    "name": "Hack",
    "cardType": "Character",
    "color": "Black",
    "traits": "Fish-Man / Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP13-081": {
    "id": "OP13-081",
    "name": "Koala",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-083": {
    "id": "OP13-083",
    "name": "St. Jaygarcia Saturn",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons / Five Elders",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP13-082": {
    "id": "OP13-082",
    "name": "Five Elders",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons / Five Elders",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP13-080": {
    "id": "OP13-080",
    "name": "St. Ethanbaron V. Nusjuro",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons / Five Elders",
    "rarity": "R",
    "cost": "6 Cost / 5000 Power"
  },
  "OP13-084": {
    "id": "OP13-084",
    "name": "St. Shepherd Ju Peter",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons / Five Elders",
    "rarity": "R",
    "cost": "7 Cost / 5000 Power"
  },
  "OP13-085": {
    "id": "OP13-085",
    "name": "Saint Jalmac",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP13-086": {
    "id": "OP13-086",
    "name": "Saint Shalria",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP13-089": {
    "id": "OP13-089",
    "name": "St. Topman Warcury",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons / Five Elders",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP13-088": {
    "id": "OP13-088",
    "name": "Terry Gilteo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-094": {
    "id": "OP13-094",
    "name": "York",
    "cardType": "Character",
    "color": "Black",
    "traits": "Egghead / Scientist",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP13-095": {
    "id": "OP13-095",
    "name": "Saint Rosward",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP13-091": {
    "id": "OP13-091",
    "name": "St. Marcus Mars",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons / Five Elders",
    "rarity": "R",
    "cost": "6 Cost / 5000 Power"
  },
  "OP13-103": {
    "id": "OP13-103",
    "name": "Gyogyo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Bonney Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP13-092": {
    "id": "OP13-092",
    "name": "Saint Mjosgard",
    "cardType": "Character",
    "color": "Black",
    "traits": "Celestial Dragons",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP13-117": {
    "id": "OP13-117",
    "name": "Gum-Gum Dawn Stamp",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Egghead / The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "OP13-093": {
    "id": "OP13-093",
    "name": "Morgans",
    "cardType": "Character",
    "color": "Black",
    "traits": "Journalist",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP13-096": {
    "id": "OP13-096",
    "name": "The Five Elders Are at Your Service!!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Celestial Dragons / Five Elders",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-097": {
    "id": "OP13-097",
    "name": "The World's Equilibrium Cannot Be Maintained Forever",
    "cardType": "Event",
    "color": "Black",
    "traits": "Celestial Dragons / Five Elders",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-099": {
    "id": "OP13-099",
    "name": "The Empty Throne",
    "cardType": "Stage",
    "color": "Black",
    "traits": "Mary Geoise",
    "rarity": "R",
    "cost": "7 Cost"
  },
  "OP13-098": {
    "id": "OP13-098",
    "name": "Never Existed... in the First Place...",
    "cardType": "Event",
    "color": "Black",
    "traits": "Celestial Dragons / Five Elders",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP13-100": {
    "id": "OP13-100",
    "name": "Jewelry Bonney",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "Egghead / Bonney Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP13-104": {
    "id": "OP13-104",
    "name": "Kouzuki Hiyori",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "4 Cost / 0 Power"
  },
  "OP13-101": {
    "id": "OP13-101",
    "name": "Atlas",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Scientist",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-102": {
    "id": "OP13-102",
    "name": "Edison",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Scientist",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP13-106": {
    "id": "OP13-106",
    "name": "Conney",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Bonney Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP13-110": {
    "id": "OP13-110",
    "name": "Stussy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / CP0",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP13-107": {
    "id": "OP13-107",
    "name": "Shaka",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Scientist",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP13-108": {
    "id": "OP13-108",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Bonney Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP13-105": {
    "id": "OP13-105",
    "name": "Kouzuki Momonosuke",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP13-109": {
    "id": "OP13-109",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP13-111": {
    "id": "OP13-111",
    "name": "Pythagoras",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Scientist",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP13-115": {
    "id": "OP13-115",
    "name": "Paper Art Afterimage",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Egghead / CP0",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP13-113": {
    "id": "OP13-113",
    "name": "Lilith",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Scientist",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP13-119": {
    "id": "OP13-119",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP13-114": {
    "id": "OP13-114",
    "name": "S-Snake",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Seraphim / Egghead",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP13-112": {
    "id": "OP13-112",
    "name": "Vegapunk",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Scientist",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP13-116": {
    "id": "OP13-116",
    "name": "The One Who Is the Most Free Is the Pirate King!!!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-002": {
    "id": "OP14-002",
    "name": "Urouge",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Fallen Monk Pirates",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP14-001": {
    "id": "OP14-001",
    "name": "Trafalgar Law",
    "cardType": "Leader",
    "color": "Red",
    "traits": "The Seven Warlords of the Sea / Supernovas / Heart Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP13-118": {
    "id": "OP13-118",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man Island / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP13-120": {
    "id": "OP13-120",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP14-003": {
    "id": "OP14-003",
    "name": "Capone\"Gang\"Bege",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Firetank Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP14-013": {
    "id": "OP14-013",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP14-008": {
    "id": "OP14-008",
    "name": "Scratchmen Apoo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / On-Air Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP14-006": {
    "id": "OP14-006",
    "name": "Shachi & Penguin",
    "cardType": "Character",
    "color": "Red",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP14-004": {
    "id": "OP14-004",
    "name": "Cavendish",
    "cardType": "Character",
    "color": "Red",
    "traits": "Dressrosa / Supernovas / Beautiful Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP14-022": {
    "id": "OP14-022",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-007": {
    "id": "OP14-007",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP14-005": {
    "id": "OP14-005",
    "name": "Killer",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP14-009": {
    "id": "OP14-009",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Seven Warlords of the Sea / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP14-011": {
    "id": "OP14-011",
    "name": "Bartolomeo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Dressrosa / Supernovas / Barto Club",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP14-012": {
    "id": "OP14-012",
    "name": "Bepo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Minks / Heart Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP14-010": {
    "id": "OP14-010",
    "name": "Basil Hawkins",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Hawkins Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP14-015": {
    "id": "OP14-015",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP14-016": {
    "id": "OP14-016",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Navy / Drake Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP14-017": {
    "id": "OP14-017",
    "name": "Chambres",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Seven Warlords of the Sea / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP14-025": {
    "id": "OP14-025",
    "name": "Kuro",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP14-014": {
    "id": "OP14-014",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-019": {
    "id": "OP14-019",
    "name": "I Have a Plan to Take Down One of the Four Emperors!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Seven Warlords of the Sea / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-018": {
    "id": "OP14-018",
    "name": "Time for the Counterattack",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Seven Warlords of the Sea / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-020": {
    "id": "OP14-020",
    "name": "Dracule Mihawk",
    "cardType": "Leader",
    "color": "Green",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP14-023": {
    "id": "OP14-023",
    "name": "Kikunojo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP14-026": {
    "id": "OP14-026",
    "name": "Kouzuki Oden",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-021": {
    "id": "OP14-021",
    "name": "Issho",
    "cardType": "Character",
    "color": "Green",
    "traits": "Dressrosa / Navy",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP14-024": {
    "id": "OP14-024",
    "name": "Kin'emon",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-028": {
    "id": "OP14-028",
    "name": "Johnny",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP14-027": {
    "id": "OP14-027",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP14-029": {
    "id": "OP14-029",
    "name": "Tashigi",
    "cardType": "Character",
    "color": "Green",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP14-030": {
    "id": "OP14-030",
    "name": "Chaka & Pell",
    "cardType": "Character",
    "color": "Green",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP14-031": {
    "id": "OP14-031",
    "name": "Nami",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 2000 Power"
  },
  "OP14-033": {
    "id": "OP14-033",
    "name": "Perona",
    "cardType": "Character",
    "color": "Green",
    "traits": "Muggy Kingdom / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP14-032": {
    "id": "OP14-032",
    "name": "Humandrill",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal / Muggy Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP14-037": {
    "id": "OP14-037",
    "name": "For Fun",
    "cardType": "Event",
    "color": "Green",
    "traits": "East Blue / The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-034": {
    "id": "OP14-034",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP14-035": {
    "id": "OP14-035",
    "name": "Yosaku",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP14-036": {
    "id": "OP14-036",
    "name": "Strive to Surpass me, Roronoa Zoro!!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "East Blue / The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-038": {
    "id": "OP14-038",
    "name": "I Never Bother to Remember the Faces of Trash",
    "cardType": "Event",
    "color": "Green",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-039": {
    "id": "OP14-039",
    "name": "Coffin Boat",
    "cardType": "Stage",
    "color": "Green",
    "traits": "East Blue / The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-044": {
    "id": "OP14-044",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP14-042": {
    "id": "OP14-042",
    "name": "Arlong",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP14-040": {
    "id": "OP14-040",
    "name": "Jinbe",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "Fish-Man / The Seven Warlords of the Sea / The Sun Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP14-041": {
    "id": "OP14-041",
    "name": "Boa Hancock",
    "cardType": "Leader",
    "color": "Blue/Yellow",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP14-045": {
    "id": "OP14-045",
    "name": "Kuroobi",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP14-046": {
    "id": "OP14-046",
    "name": "Koala",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Foolshout Island",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP14-047": {
    "id": "OP14-047",
    "name": "Shirahoshi",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "4 Cost / 0 Power"
  },
  "OP14-043": {
    "id": "OP14-043",
    "name": "Aladine",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Merfolk / The Sun Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-049": {
    "id": "OP14-049",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Seven Warlords of the Sea / The Sun Pirates",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP14-050": {
    "id": "OP14-050",
    "name": "Chew",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP14-051": {
    "id": "OP14-051",
    "name": "Hatchan",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP14-048": {
    "id": "OP14-048",
    "name": "Shiryu",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP14-054": {
    "id": "OP14-054",
    "name": "Fisher Tiger",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP14-052": {
    "id": "OP14-052",
    "name": "Hannyabal",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP14-056": {
    "id": "OP14-056",
    "name": "Wadatsumi",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP14-053": {
    "id": "OP14-053",
    "name": "Vista",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP14-057": {
    "id": "OP14-057",
    "name": "Don't Worry!! I'm Here!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Fish-Man / The Seven Warlords of the Sea / The Sun Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP14-062": {
    "id": "OP14-062",
    "name": "Gladius",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP14-058": {
    "id": "OP14-058",
    "name": "Ocean Current Shoulder Throw",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Fish-Man / The Seven Warlords of the Sea / The Sun Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP14-055": {
    "id": "OP14-055",
    "name": "The Macro Gang",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP14-059": {
    "id": "OP14-059",
    "name": "Please Take Me with You!! I Can Be of Great Help to You!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Fish-Man / The Seven Warlords of the Sea / The Sun Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-068": {
    "id": "OP14-068",
    "name": "Trebol",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP14-061": {
    "id": "OP14-061",
    "name": "Vergo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Punk Hazard / Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP14-064": {
    "id": "OP14-064",
    "name": "Giolla",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP14-065": {
    "id": "OP14-065",
    "name": "Senor Pink",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-060": {
    "id": "OP14-060",
    "name": "Donquixote Doflamingo",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP14-067": {
    "id": "OP14-067",
    "name": "Dellinger",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP14-063": {
    "id": "OP14-063",
    "name": "Sugar",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "OP14-066": {
    "id": "OP14-066",
    "name": "Diamante",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP14-078": {
    "id": "OP14-078",
    "name": "Bullet String",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP14-077": {
    "id": "OP14-077",
    "name": "Penta-Chromatic String",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP14-073": {
    "id": "OP14-073",
    "name": "Machvise",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP14-071": {
    "id": "OP14-071",
    "name": "Pica",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP14-074": {
    "id": "OP14-074",
    "name": "Monet",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Punk Hazard / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP14-069": {
    "id": "OP14-069",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "10 Cost / 10000 Power"
  },
  "OP14-070": {
    "id": "OP14-070",
    "name": "Buffalo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP14-072": {
    "id": "OP14-072",
    "name": "Baby 5",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "OP14-075": {
    "id": "OP14-075",
    "name": "Lao.G",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP14-076": {
    "id": "OP14-076",
    "name": "Ever White",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-079": {
    "id": "OP14-079",
    "name": "Crocodile",
    "cardType": "Leader",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP14-080": {
    "id": "OP14-080",
    "name": "Gecko Moria",
    "cardType": "Leader",
    "color": "Black/Yellow",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP14-081": {
    "id": "OP14-081",
    "name": "Spider Mice",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP14-082": {
    "id": "OP14-082",
    "name": "Oinkchuck",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP14-083": {
    "id": "OP14-083",
    "name": "Ms. Wednesday",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP14-086": {
    "id": "OP14-086",
    "name": "Miss Doublefinger(Zala)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP14-093": {
    "id": "OP14-093",
    "name": "Mr.4(Babe)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-085": {
    "id": "OP14-085",
    "name": "Miss.Goldenweek(Marianne)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP14-084": {
    "id": "OP14-084",
    "name": "Ms. All Sunday",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP14-094": {
    "id": "OP14-094",
    "name": "Mr.5(Gem)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP14-088": {
    "id": "OP14-088",
    "name": "Miss.MerryChristmas(Drophy)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP14-087": {
    "id": "OP14-087",
    "name": "Miss.Valentine(Mikita)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP14-091": {
    "id": "OP14-091",
    "name": "Mr.2.Bon.Kurei(Bentham)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-090": {
    "id": "OP14-090",
    "name": "Mr.1(Daz.Bonez)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP14-089": {
    "id": "OP14-089",
    "name": "Ryuma",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP14-092": {
    "id": "OP14-092",
    "name": "Mr.3(Galdino)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP14-096": {
    "id": "OP14-096",
    "name": "Ground Death",
    "cardType": "Event",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-100": {
    "id": "OP14-100",
    "name": "Absalom",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP14-103": {
    "id": "OP14-103",
    "name": "Gloriosa (Grandma Nyon)",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP14-095": {
    "id": "OP14-095",
    "name": "Mr.9",
    "cardType": "Character",
    "color": "Black",
    "traits": "Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP14-104": {
    "id": "OP14-104",
    "name": "Gecko Moria",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP14-106": {
    "id": "OP14-106",
    "name": "Salome",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Amazon Lily",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP14-099": {
    "id": "OP14-099",
    "name": "Disappointed?",
    "cardType": "Event",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-097": {
    "id": "OP14-097",
    "name": "Hurry Up and Make Me the Pirate King!",
    "cardType": "Event",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-101": {
    "id": "OP14-101",
    "name": "Oars",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Giant / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP14-102": {
    "id": "OP14-102",
    "name": "Kumacy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP14-098": {
    "id": "OP14-098",
    "name": "Crescent Cutlass",
    "cardType": "Event",
    "color": "Black",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-105": {
    "id": "OP14-105",
    "name": "Gorgon Sisters",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "6 Cost / 5000 Power"
  },
  "OP14-107": {
    "id": "OP14-107",
    "name": "Shakuyaku",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "6 Cost / 5000 Power"
  },
  "OP14-109": {
    "id": "OP14-109",
    "name": "Victoria Cindry",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP14-108": {
    "id": "OP14-108",
    "name": "Silvers Rayleigh",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP14-110": {
    "id": "OP14-110",
    "name": "Dr. Hogback",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-112": {
    "id": "OP14-112",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP14-111": {
    "id": "OP14-111",
    "name": "Perona",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-113": {
    "id": "OP14-113",
    "name": "Marguerite",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Amazon Lily",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP14-118": {
    "id": "OP14-118",
    "name": "You'll Frighten Me... ♡",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-114": {
    "id": "OP14-114",
    "name": "Ran",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP14-115": {
    "id": "OP14-115",
    "name": "Rindo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP14-119": {
    "id": "OP14-119",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Green",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP14-117": {
    "id": "OP14-117",
    "name": "Brick Bat",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP14-116": {
    "id": "OP14-116",
    "name": "Salamander",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP14-120": {
    "id": "OP14-120",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP15-022": {
    "id": "OP15-022",
    "name": "Brook",
    "cardType": "Leader",
    "color": "Green/Black",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP15-001": {
    "id": "OP15-001",
    "name": "Krieg",
    "cardType": "Leader",
    "color": "Red/Green",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP15-005": {
    "id": "OP15-005",
    "name": "Cabaji",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Buggy Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP15-002": {
    "id": "OP15-002",
    "name": "Lucy",
    "cardType": "Leader",
    "color": "Red/Blue",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP15-007": {
    "id": "OP15-007",
    "name": "Gin",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP15-006": {
    "id": "OP15-006",
    "name": "Cavendish",
    "cardType": "Character",
    "color": "Red",
    "traits": "Dressrosa / Beautiful Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP15-003": {
    "id": "OP15-003",
    "name": "Alvida",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Alvida Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP15-004": {
    "id": "OP15-004",
    "name": "Sea Cat",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Alabasta",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP15-008": {
    "id": "OP15-008",
    "name": "Krieg",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP15-026": {
    "id": "OP15-026",
    "name": "Jango",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-013": {
    "id": "OP15-013",
    "name": "Pincers",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Alabasta",
    "rarity": "R",
    "cost": "4 Cost / 2000 Power"
  },
  "OP15-010": {
    "id": "OP15-010",
    "name": "Nezumi",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Navy",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP15-011": {
    "id": "OP15-011",
    "name": "Pearl",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP15-012": {
    "id": "OP15-012",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Buggy Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP15-009": {
    "id": "OP15-009",
    "name": "Koby",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Navy",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-016": {
    "id": "OP15-016",
    "name": "Fullbody",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP15-014": {
    "id": "OP15-014",
    "name": "Bartolomeo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Dressrosa / Barto Club",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP15-017": {
    "id": "OP15-017",
    "name": "Morgan",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP15-020": {
    "id": "OP15-020",
    "name": "Fire Fist",
    "cardType": "Event",
    "color": "Red",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "7 Cost"
  },
  "OP15-015": {
    "id": "OP15-015",
    "name": "Higuma",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Mountain Bandits",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP15-021": {
    "id": "OP15-021",
    "name": "Just Watch Me, Ace!!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP15-019": {
    "id": "OP15-019",
    "name": "Barrier Bulls",
    "cardType": "Event",
    "color": "Red",
    "traits": "Dressrosa / Barto Club",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP15-024": {
    "id": "OP15-024",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Green",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP15-018": {
    "id": "OP15-018",
    "name": "Mohji",
    "cardType": "Character",
    "color": "Red",
    "traits": "East Blue / Buggy Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP15-028": {
    "id": "OP15-028",
    "name": "Meowban Brothers",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-027": {
    "id": "OP15-027",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP15-033": {
    "id": "OP15-033",
    "name": "Hody Jones",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Fish-Man Island / New Fish-Man Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP15-023": {
    "id": "OP15-023",
    "name": "Arlong",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / East Blue / Arlong Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP15-025": {
    "id": "OP15-025",
    "name": "Kuro",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Black Cat Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP15-032": {
    "id": "OP15-032",
    "name": "Brook",
    "cardType": "Character",
    "color": "Green",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP15-031": {
    "id": "OP15-031",
    "name": "Purinpurin",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Navy",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP15-029": {
    "id": "OP15-029",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Green",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP15-037": {
    "id": "OP15-037",
    "name": "The Outcome Will Tell Us Who's Strong and Who's Weak",
    "cardType": "Event",
    "color": "Green",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP15-034": {
    "id": "OP15-034",
    "name": "Yorki",
    "cardType": "Character",
    "color": "Green",
    "traits": "Rumbar Pirates",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP15-030": {
    "id": "OP15-030",
    "name": "Hyouzou",
    "cardType": "Character",
    "color": "Green",
    "traits": "Merfolk / Fish-Man Island",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP15-035": {
    "id": "OP15-035",
    "name": "Laboon",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-041": {
    "id": "OP15-041",
    "name": "Orlumbus",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Yonta Maria Fleet",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP15-040": {
    "id": "OP15-040",
    "name": "Viola",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Donquixote Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-036": {
    "id": "OP15-036",
    "name": "Ryuma",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP15-039": {
    "id": "OP15-039",
    "name": "Rebecca",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "Dressrosa",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP15-038": {
    "id": "OP15-038",
    "name": "It's an Order! Do Not Defy Me!!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "East Blue / Krieg Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP15-043": {
    "id": "OP15-043",
    "name": "Kelly Funk",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Mogaro Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP15-050": {
    "id": "OP15-050",
    "name": "Bobby Funk",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Mogaro Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "OP15-048": {
    "id": "OP15-048",
    "name": "Chinjao",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Happosui Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP15-042": {
    "id": "OP15-042",
    "name": "Kyros",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP15-047": {
    "id": "OP15-047",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP15-045": {
    "id": "OP15-045",
    "name": "Sai",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Happosui Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP15-044": {
    "id": "OP15-044",
    "name": "Koala",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP15-046": {
    "id": "OP15-046",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP15-057": {
    "id": "OP15-057",
    "name": "Dressrosa Kingdom",
    "cardType": "Stage",
    "color": "Blue",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP15-059": {
    "id": "OP15-059",
    "name": "Amazon",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP15-049": {
    "id": "OP15-049",
    "name": "Hajrudin",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Giant / Dressrosa / New Giant Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP15-053": {
    "id": "OP15-053",
    "name": "Rebecca",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP15-054": {
    "id": "OP15-054",
    "name": "And No One Else Can Have It! It's Our Memento of Him",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "OP15-052": {
    "id": "OP15-052",
    "name": "Leo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Tontattas / Dressrosa",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-051": {
    "id": "OP15-051",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP15-058": {
    "id": "OP15-058",
    "name": "Enel",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP15-055": {
    "id": "OP15-055",
    "name": "Go Ahead and Use 'Em, Mr. Luffy!!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Dressrosa / Barto Club",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "OP15-056": {
    "id": "OP15-056",
    "name": "Would You Let Me Eat the Flame-Flame Fruit?",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "7 Cost"
  },
  "OP15-060": {
    "id": "OP15-060",
    "name": "Enel",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP15-063": {
    "id": "OP15-063",
    "name": "Gedatsu",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island / Vassals",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-062": {
    "id": "OP15-062",
    "name": "Captain Seamars",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Moon / Space Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP15-061": {
    "id": "OP15-061",
    "name": "Ohm",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island / Vassals",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-065": {
    "id": "OP15-065",
    "name": "Goro",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Alabasta / Hot Springs Island",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP15-067": {
    "id": "OP15-067",
    "name": "Shura",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island / Vassals",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-066": {
    "id": "OP15-066",
    "name": "Satori",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island / Vassals",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-068": {
    "id": "OP15-068",
    "name": "Heavenly Warriors",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP15-064": {
    "id": "OP15-064",
    "name": "Kotori",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-069": {
    "id": "OP15-069",
    "name": "Nola",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Sky Island",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-073": {
    "id": "OP15-073",
    "name": "Yama",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP15-076": {
    "id": "OP15-076",
    "name": "Lightning Beast Kiten",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP15-074": {
    "id": "OP15-074",
    "name": "Varie",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP15-071": {
    "id": "OP15-071",
    "name": "Holly",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Sky Island",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP15-080": {
    "id": "OP15-080",
    "name": "Oars",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 0 Power"
  },
  "OP15-072": {
    "id": "OP15-072",
    "name": "Hotori",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-078": {
    "id": "OP15-078",
    "name": "Mamaragan",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP15-075": {
    "id": "OP15-075",
    "name": "El Thor",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP15-070": {
    "id": "OP15-070",
    "name": "Fuza",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Sky Island",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP15-077": {
    "id": "OP15-077",
    "name": "Lightning Dragon",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP15-079": {
    "id": "OP15-079",
    "name": "Absalom",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP15-082": {
    "id": "OP15-082",
    "name": "Charlotte Lola",
    "cardType": "Character",
    "color": "Black",
    "traits": "Rolling Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP15-081": {
    "id": "OP15-081",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-083": {
    "id": "OP15-083",
    "name": "Spoil",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Victims' Club",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP15-084": {
    "id": "OP15-084",
    "name": "Dr. Hogback",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-085": {
    "id": "OP15-085",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP15-090": {
    "id": "OP15-090",
    "name": "Perona",
    "cardType": "Character",
    "color": "Black",
    "traits": "Thriller Bark Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-088": {
    "id": "OP15-088",
    "name": "Pirates Docking Six",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP15-087": {
    "id": "OP15-087",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP15-101": {
    "id": "OP15-101",
    "name": "Kalgara",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Jaya / Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP15-086": {
    "id": "OP15-086",
    "name": "Nami",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "8 Cost / 6000 Power"
  },
  "OP15-097": {
    "id": "OP15-097",
    "name": "I Find It Embarrassing as a Human Being",
    "cardType": "Event",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP15-091": {
    "id": "OP15-091",
    "name": "Margarita",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Owner of Cindry's Shadow",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP15-094": {
    "id": "OP15-094",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP15-089": {
    "id": "OP15-089",
    "name": "Franky",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP15-098": {
    "id": "OP15-098",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "Sky Island / Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP15-093": {
    "id": "OP15-093",
    "name": "The Risky Brothers",
    "cardType": "Character",
    "color": "Black",
    "traits": "Rolling Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-096": {
    "id": "OP15-096",
    "name": "Swallow Bond en Avant",
    "cardType": "Event",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP15-099": {
    "id": "OP15-099",
    "name": "Urouge",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Supernovas / Fallen Monk Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP15-092": {
    "id": "OP15-092",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP15-095": {
    "id": "OP15-095",
    "name": "Gum-Gum Storm",
    "cardType": "Event",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP15-108": {
    "id": "OP15-108",
    "name": "Nami",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-105": {
    "id": "OP15-105",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP15-114": {
    "id": "OP15-114",
    "name": "Wyper",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP15-102": {
    "id": "OP15-102",
    "name": "Gan.Fall",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP15-106": {
    "id": "OP15-106",
    "name": "Octoballoon",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Sky Island",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP15-104": {
    "id": "OP15-104",
    "name": "Conis",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP15-100": {
    "id": "OP15-100",
    "name": "Kamakiri",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP15-103": {
    "id": "OP15-103",
    "name": "Genbo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP15-109": {
    "id": "OP15-109",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "OP15-107": {
    "id": "OP15-107",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Sky Island / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP15-112": {
    "id": "OP15-112",
    "name": "Raki",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP15-111": {
    "id": "OP15-111",
    "name": "Mont Blanc Noland",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Jaya / Botanist",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP15-110": {
    "id": "OP15-110",
    "name": "Braham",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Shandian Warrior",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP15-113": {
    "id": "OP15-113",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP15-117": {
    "id": "OP15-117",
    "name": "Heso!!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP15-115": {
    "id": "OP15-115",
    "name": "Impact Dial",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP16-001": {
    "id": "OP16-001",
    "name": "Portgas.D.Ace",
    "cardType": "Leader",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP15-116": {
    "id": "OP15-116",
    "name": "Gum-Gum Golden Rifle",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Sky Island / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP15-119": {
    "id": "OP15-119",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Sky Island / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP15-118": {
    "id": "OP15-118",
    "name": "Enel",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP16-002": {
    "id": "OP16-002",
    "name": "Izo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Land of Wano / Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-003": {
    "id": "OP16-003",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP16-006": {
    "id": "OP16-006",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP16-005": {
    "id": "OP16-005",
    "name": "Thatch",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP16-009": {
    "id": "OP16-009",
    "name": "Speed Jil",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP16-012": {
    "id": "OP16-012",
    "name": "Benn.Beckman",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP16-011": {
    "id": "OP16-011",
    "name": "Vista",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP16-007": {
    "id": "OP16-007",
    "name": "Jozu",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP16-010": {
    "id": "OP16-010",
    "name": "Namule",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-004": {
    "id": "OP16-004",
    "name": "Curiel",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP16-008": {
    "id": "OP16-008",
    "name": "Squard",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP16-013": {
    "id": "OP16-013",
    "name": "McGuy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP16-015": {
    "id": "OP16-015",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP16-020": {
    "id": "OP16-020",
    "name": "If You're Coming with Me... Kiss Your Lives Goodbye!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP16-017": {
    "id": "OP16-017",
    "name": "LittleOars Jr.",
    "cardType": "Character",
    "color": "Red",
    "traits": "Giant / Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "4 Cost / 8000 Power"
  },
  "OP16-014": {
    "id": "OP16-014",
    "name": "Marco",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP16-016": {
    "id": "OP16-016",
    "name": "Ramba",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP16-022": {
    "id": "OP16-022",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Green/Blue",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP16-019": {
    "id": "OP16-019",
    "name": "Let's Show 'Em What We're Made Of!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "9 Cost"
  },
  "OP16-021": {
    "id": "OP16-021",
    "name": "Moby Dick",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-023": {
    "id": "OP16-023",
    "name": "Arlong",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Impel Down / The Sun Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP16-018": {
    "id": "OP16-018",
    "name": "Rockstar",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-026": {
    "id": "OP16-026",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP16-029": {
    "id": "OP16-029",
    "name": "Antlerkov",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP16-024": {
    "id": "OP16-024",
    "name": "Inazuma",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP16-025": {
    "id": "OP16-025",
    "name": "Bunkov",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP16-027": {
    "id": "OP16-027",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Green",
    "traits": "Fish-Man / Impel Down / The Sun Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP16-028": {
    "id": "OP16-028",
    "name": "Smoker",
    "cardType": "Character",
    "color": "Green",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP16-030": {
    "id": "OP16-030",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP16-031": {
    "id": "OP16-031",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Buggy Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP16-037": {
    "id": "OP16-037",
    "name": "Mr.3(Galdino)",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP16-032": {
    "id": "OP16-032",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP16-034": {
    "id": "OP16-034",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP16-033": {
    "id": "OP16-033",
    "name": "Morley",
    "cardType": "Character",
    "color": "Green",
    "traits": "Giant / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP16-035": {
    "id": "OP16-035",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP16-039": {
    "id": "OP16-039",
    "name": "Gum-Gum Twin Jet Pistol",
    "cardType": "Event",
    "color": "Green",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-040": {
    "id": "OP16-040",
    "name": "Gum-Gum Hammer Rifle",
    "cardType": "Event",
    "color": "Green",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-042": {
    "id": "OP16-042",
    "name": "Prisoner of Impel Down",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP16-036": {
    "id": "OP16-036",
    "name": "Mr.2.Bon.Kurei(Bentham)",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "OP16-038": {
    "id": "OP16-038",
    "name": "Let's Go!! To the Navy Headquarters!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-052": {
    "id": "OP16-052",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP16-041": {
    "id": "OP16-041",
    "name": "Buggy",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "Impel Down / Buggy Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP16-060": {
    "id": "OP16-060",
    "name": "Sengoku",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "Navy",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP16-046": {
    "id": "OP16-046",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / Impel Down / The Sun Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP16-043": {
    "id": "OP16-043",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP16-045": {
    "id": "OP16-045",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP16-044": {
    "id": "OP16-044",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP16-048": {
    "id": "OP16-048",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Buggy Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP16-047": {
    "id": "OP16-047",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Donquixote Pirates",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP16-056": {
    "id": "OP16-056",
    "name": "Mr.3(Galdino)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP16-051": {
    "id": "OP16-051",
    "name": "Mohji & Cabaji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP16-053": {
    "id": "OP16-053",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Dressrosa / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP16-049": {
    "id": "OP16-049",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 0 Power"
  },
  "OP16-080": {
    "id": "OP16-080",
    "name": "Marshall.D.Teach",
    "cardType": "Leader",
    "color": "Black/Yellow",
    "traits": "The Seven Warlords of the Sea / Blackbeard Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "OP16-055": {
    "id": "OP16-055",
    "name": "Mr.2.Bon.Kurei(Bentham)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP16-057": {
    "id": "OP16-057",
    "name": "Captain Buggy's Our Savior!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-050": {
    "id": "OP16-050",
    "name": "Miss Olive",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP16-059": {
    "id": "OP16-059",
    "name": "We'll Change This Mission from Sneaky to Flashy!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Impel Down / Buggy Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-054": {
    "id": "OP16-054",
    "name": "Mr.1(Daz.Bonez)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP16-058": {
    "id": "OP16-058",
    "name": "The Prisoners Are Rioting!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-061": {
    "id": "OP16-061",
    "name": "Older Brother Marine",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP16-074": {
    "id": "OP16-074",
    "name": "Magellan",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP16-065": {
    "id": "OP16-065",
    "name": "Sakazuki",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Admiral / Navy",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP16-064": {
    "id": "OP16-064",
    "name": "Koby",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-070": {
    "id": "OP16-070",
    "name": "Donquixote Rosinante",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy / Donquixote Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP16-066": {
    "id": "OP16-066",
    "name": "Sengoku",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP16-069": {
    "id": "OP16-069",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP16-062": {
    "id": "OP16-062",
    "name": "Younger Brother Marine",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP16-073": {
    "id": "OP16-073",
    "name": "Borsalino",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Admiral / Navy",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP16-068": {
    "id": "OP16-068",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Donquixote Pirates",
    "rarity": "R",
    "cost": "4 Cost / 3000 Power"
  },
  "OP16-063": {
    "id": "OP16-063",
    "name": "Kuzan",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Admiral / Navy",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP16-067": {
    "id": "OP16-067",
    "name": "Tsuru",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-071": {
    "id": "OP16-071",
    "name": "Benevolent King of the Waves",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP16-077": {
    "id": "OP16-077",
    "name": "\"Buddha\" Sengoku",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-072": {
    "id": "OP16-072",
    "name": "Hannyabal",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Impel Down",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP16-075": {
    "id": "OP16-075",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP16-084": {
    "id": "OP16-084",
    "name": "Kouzuki Momonosuke",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "5 Cost / 0 Power"
  },
  "OP16-078": {
    "id": "OP16-078",
    "name": "Marineford",
    "cardType": "Stage",
    "color": "Purple",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-076": {
    "id": "OP16-076",
    "name": "The Three Admirals!!",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Admiral / Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-079": {
    "id": "OP16-079",
    "name": "Yamato",
    "cardType": "Leader",
    "color": "Black",
    "traits": "Land of Wano",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP16-082": {
    "id": "OP16-082",
    "name": "Kin'emon",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP16-081": {
    "id": "OP16-081",
    "name": "Otama",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "OP16-088": {
    "id": "OP16-088",
    "name": "Shimotsuki Ushimaru",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP16-102": {
    "id": "OP16-102",
    "name": "Avalo Pizarro",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Impel Down / Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-083": {
    "id": "OP16-083",
    "name": "Kouzuki Oden",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP16-086": {
    "id": "OP16-086",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Straw Hat Crew",
    "rarity": "R",
    "cost": "8 Cost / 9000 Power"
  },
  "OP16-085": {
    "id": "OP16-085",
    "name": "Kouzuki Momonosuke",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "9 Cost / 6000 Power"
  },
  "OP16-094": {
    "id": "OP16-094",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Spade Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP16-103": {
    "id": "OP16-103",
    "name": "Van Augur",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-106": {
    "id": "OP16-106",
    "name": "Sanjuan.Wolf",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Giant / Impel Down / Blackbeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP16-087": {
    "id": "OP16-087",
    "name": "Shinobu",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP16-092": {
    "id": "OP16-092",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-090": {
    "id": "OP16-090",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal / Land of Wano / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP16-089": {
    "id": "OP16-089",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP16-091": {
    "id": "OP16-091",
    "name": "Nami",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-097": {
    "id": "OP16-097",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP16-105": {
    "id": "OP16-105",
    "name": "Gecko Moria",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP16-095": {
    "id": "OP16-095",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP16-100": {
    "id": "OP16-100",
    "name": "Hallowed Glacier Slash",
    "cardType": "Event",
    "color": "Black",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-101": {
    "id": "OP16-101",
    "name": "Mahoroba",
    "cardType": "Event",
    "color": "Black",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP16-108": {
    "id": "OP16-108",
    "name": "Shiryu",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Impel Down / Blackbeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP16-098": {
    "id": "OP16-098",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "6 Cost / 5000 Power"
  },
  "OP16-093": {
    "id": "OP16-093",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP16-096": {
    "id": "OP16-096",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Black",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP16-099": {
    "id": "OP16-099",
    "name": "I've Come Here... To Cut Those Chains!!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-112": {
    "id": "OP16-112",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP16-104": {
    "id": "OP16-104",
    "name": "Catarina Devon",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Impel Down / Blackbeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 3000 Power"
  },
  "OP17-002": {
    "id": "OP17-002",
    "name": "Atmos",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP16-110": {
    "id": "OP16-110",
    "name": "Vasco Shot",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Impel Down / Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-107": {
    "id": "OP16-107",
    "name": "Jesus Burgess",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP16-109": {
    "id": "OP16-109",
    "name": "Doc Q",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP16-114": {
    "id": "OP16-114",
    "name": "Laffitte",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP16-115": {
    "id": "OP16-115",
    "name": "Black Vortex",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP16-111": {
    "id": "OP16-111",
    "name": "Boa Sandersonia",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP17-004": {
    "id": "OP17-004",
    "name": "Inuarashi & Nekomamushi",
    "cardType": "Character",
    "color": "Red",
    "traits": "Minks / Land of Wano / Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP16-113": {
    "id": "OP16-113",
    "name": "Boa Marigold",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Kuja Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP16-116": {
    "id": "OP16-116",
    "name": "Zehahahahaha!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Blackbeard Pirates",
    "rarity": "R",
    "cost": "8 Cost"
  },
  "OP16-119": {
    "id": "OP16-119",
    "name": "Marshall.D.Teach",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Blackbeard Pirates",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "OP17-001": {
    "id": "OP17-001",
    "name": "Edward.Newgate",
    "cardType": "Leader",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP17-003": {
    "id": "OP17-003",
    "name": "Izo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Land of Wano / Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP16-117": {
    "id": "OP16-117",
    "name": "Black Hole",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Seven Warlords of the Sea / Blackbeard Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP16-118": {
    "id": "OP16-118",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP17-008": {
    "id": "OP17-008",
    "name": "Jozu",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP17-005": {
    "id": "OP17-005",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP17-009": {
    "id": "OP17-009",
    "name": "Haruta",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP17-010": {
    "id": "OP17-010",
    "name": "Fossa",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "OP17-006": {
    "id": "OP17-006",
    "name": "Kingdew",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP17-012": {
    "id": "OP17-012",
    "name": "Blenheim",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP17-007": {
    "id": "OP17-007",
    "name": "Kouzuki Oden",
    "cardType": "Character",
    "color": "Red",
    "traits": "Land of Wano / Kouzuki Clan / Whitebeard Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP17-015": {
    "id": "OP17-015",
    "name": "Marco",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP17-013": {
    "id": "OP17-013",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP17-011": {
    "id": "OP17-011",
    "name": "Blamenco",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP17-014": {
    "id": "OP17-014",
    "name": "Whitey Bay",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP17-023": {
    "id": "OP17-023",
    "name": "Nami",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "OP17-017": {
    "id": "OP17-017",
    "name": "Ga Ha Ha Ha!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-016": {
    "id": "OP17-016",
    "name": "Rakuyo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "OP17-035": {
    "id": "OP17-035",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP17-018": {
    "id": "OP17-018",
    "name": "The Power to Destroy the World",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-019": {
    "id": "OP17-019",
    "name": "I Don't Have Time to Chat with Snot-Nosed Brats",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-022": {
    "id": "OP17-022",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Green",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP17-024": {
    "id": "OP17-024",
    "name": "Howling Gab",
    "cardType": "Character",
    "color": "Green",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP17-026": {
    "id": "OP17-026",
    "name": "Fugar",
    "cardType": "Character",
    "color": "Green",
    "traits": "Red-Haired Pirates Allies",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP17-020": {
    "id": "OP17-020",
    "name": "Shanks",
    "cardType": "Leader",
    "color": "Green",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP17-021": {
    "id": "OP17-021",
    "name": "Crone Oli",
    "cardType": "Character",
    "color": "Green",
    "traits": "Red-Haired Pirates Allies",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP17-025": {
    "id": "OP17-025",
    "name": "Building Snake",
    "cardType": "Character",
    "color": "Green",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP17-039": {
    "id": "OP17-039",
    "name": "Rocks.D.Xebec",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP17-027": {
    "id": "OP17-027",
    "name": "Benn.Beckman",
    "cardType": "Character",
    "color": "Green",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP17-038": {
    "id": "OP17-038",
    "name": "I Think He's Seen an Ugly Future...",
    "cardType": "Event",
    "color": "Green",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP17-028": {
    "id": "OP17-028",
    "name": "Bonk Punch & Monster",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal / Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 3000 Power"
  },
  "OP17-032": {
    "id": "OP17-032",
    "name": "Limejuice",
    "cardType": "Character",
    "color": "Green",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP17-036": {
    "id": "OP17-036",
    "name": "Withdraw Now and Allow Me to Save Face",
    "cardType": "Event",
    "color": "Green",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-030": {
    "id": "OP17-030",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP17-029": {
    "id": "OP17-029",
    "name": "Hongo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP17-034": {
    "id": "OP17-034",
    "name": "Rockstar",
    "cardType": "Character",
    "color": "Green",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP17-033": {
    "id": "OP17-033",
    "name": "Lucky.Roux",
    "cardType": "Character",
    "color": "Green",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "OP17-031": {
    "id": "OP17-031",
    "name": "Yasopp",
    "cardType": "Character",
    "color": "Green",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP17-041": {
    "id": "OP17-041",
    "name": "Wang Zhi",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP17-037": {
    "id": "OP17-037",
    "name": "Are You That Afraid of the New Era?!!",
    "cardType": "Event",
    "color": "Green",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-042": {
    "id": "OP17-042",
    "name": "Kaido",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP17-043": {
    "id": "OP17-043",
    "name": "Ganzui",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP17-040": {
    "id": "OP17-040",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "OP17-047": {
    "id": "OP17-047",
    "name": "Shiki",
    "cardType": "Character",
    "color": "Blue",
    "traits": "FILM / Impel Down / Golden Lion Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP17-044": {
    "id": "OP17-044",
    "name": "Captain John",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP17-045": {
    "id": "OP17-045",
    "name": "Kyo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "OP17-046": {
    "id": "OP17-046",
    "name": "Gloriosa",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Amazon Lily / Rocks Pirates",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "OP17-048": {
    "id": "OP17-048",
    "name": "Shiki",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "OP17-051": {
    "id": "OP17-051",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / Impel Down / The Sun Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP17-050": {
    "id": "OP17-050",
    "name": "Streusen",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP17-049": {
    "id": "OP17-049",
    "name": "Charlotte Linlin",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP17-052": {
    "id": "OP17-052",
    "name": "Don Marlon",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP17-055": {
    "id": "OP17-055",
    "name": "There's No Authority in the World That Lasts Forever!!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP17-070": {
    "id": "OP17-070",
    "name": "Scratchmen Apoo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "On-Air Pirates / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "OP17-054": {
    "id": "OP17-054",
    "name": "Miss Buckingham Stussy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "OP17-053": {
    "id": "OP17-053",
    "name": "Barbell",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / Rocks Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "OP17-058": {
    "id": "OP17-058",
    "name": "Kaido",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP17-056": {
    "id": "OP17-056",
    "name": "Rocks Pirates",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP17-057": {
    "id": "OP17-057",
    "name": "Fullalead",
    "cardType": "Stage",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-063": {
    "id": "OP17-063",
    "name": "Kaido",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP17-060": {
    "id": "OP17-060",
    "name": "Ulti & Page One",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "OP17-059": {
    "id": "OP17-059",
    "name": "Aramaki",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Admiral / Navy",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP17-062": {
    "id": "OP17-062",
    "name": "Kaido",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP17-061": {
    "id": "OP17-061",
    "name": "Lead Performers",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Fish-Man / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "9 Cost / 11000 Power"
  },
  "OP17-066": {
    "id": "OP17-066",
    "name": "Kurozumi Orochi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano / Kurozumi Clan",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "OP17-064": {
    "id": "OP17-064",
    "name": "King",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Lunarian / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP17-067": {
    "id": "OP17-067",
    "name": "Kurozumi Kanjuro",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano / Kurozumi Clan",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP17-065": {
    "id": "OP17-065",
    "name": "Queen",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP17-071": {
    "id": "OP17-071",
    "name": "Who's.Who",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / Former CP9",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP17-072": {
    "id": "OP17-072",
    "name": "Black Maria",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "OP17-077": {
    "id": "OP17-077",
    "name": "Kundali Dragon Swarm",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-068": {
    "id": "OP17-068",
    "name": "Sasaki",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP17-069": {
    "id": "OP17-069",
    "name": "Jack",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Fish-Man / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "OP17-075": {
    "id": "OP17-075",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy / Drake Pirates / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP17-073": {
    "id": "OP17-073",
    "name": "Basil Hawkins",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / Hawkins Pirates",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP17-074": {
    "id": "OP17-074",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "OP17-076": {
    "id": "OP17-076",
    "name": "Wo Ro Ro Ro Ro... I Think I've Sobered Up",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "0 Cost"
  },
  "OP17-079": {
    "id": "OP17-079",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Black",
    "traits": "Elbaph / The Four Emperors / Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP17-080": {
    "id": "OP17-080",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Black",
    "traits": "Elbaph / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP17-086": {
    "id": "OP17-086",
    "name": "Nami",
    "cardType": "Character",
    "color": "Black",
    "traits": "Elbaph / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP17-078": {
    "id": "OP17-078",
    "name": "Drunken Dragon Bagua",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "OP17-081": {
    "id": "OP17-081",
    "name": "Gerd",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Elbaph / New Giant Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "OP17-082": {
    "id": "OP17-082",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Black",
    "traits": "Elbaph / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP17-087": {
    "id": "OP17-087",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Black",
    "traits": "Elbaph / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP17-083": {
    "id": "OP17-083",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Black",
    "traits": "Fish-Man / Elbaph / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP17-090": {
    "id": "OP17-090",
    "name": "Franky",
    "cardType": "Character",
    "color": "Black",
    "traits": "Elbaph / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP17-085": {
    "id": "OP17-085",
    "name": "Dorry",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Elbaph / Giant Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP17-092": {
    "id": "OP17-092",
    "name": "Brogy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Elbaph / Giant Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "OP17-084": {
    "id": "OP17-084",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal / Elbaph / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP17-094": {
    "id": "OP17-094",
    "name": "Rodo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Elbaph / New Giant Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP17-088": {
    "id": "OP17-088",
    "name": "Hajrudin",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Elbaph / New Giant Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP17-089": {
    "id": "OP17-089",
    "name": "Jaguar.D.Saul",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Elbaph / Former Navy",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "OP17-091": {
    "id": "OP17-091",
    "name": "Brook",
    "cardType": "Character",
    "color": "Black",
    "traits": "Elbaph / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP17-093": {
    "id": "OP17-093",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Elbaph / The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "8 Cost / 8000 Power"
  },
  "OP17-096": {
    "id": "OP17-096",
    "name": "I'm Luffy!! The Man Who Will Be King of the Pirates!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Elbaph / The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-095": {
    "id": "OP17-095",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Black",
    "traits": "Elbaph / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "OP17-097": {
    "id": "OP17-097",
    "name": "I'll Feed on This Rage and Use It to Bring the World to Ruin!!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Giant / Elbaph",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-099": {
    "id": "OP17-099",
    "name": "Charlotte Linlin",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "OP17-104": {
    "id": "OP17-104",
    "name": "Charlotte Cracker",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP17-098": {
    "id": "OP17-098",
    "name": "Gum-Gum Kong Gun",
    "cardType": "Event",
    "color": "Black",
    "traits": "Elbaph / The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-103": {
    "id": "OP17-103",
    "name": "Charlotte Katakuri",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 4000 Power"
  },
  "OP17-101": {
    "id": "OP17-101",
    "name": "Caribou",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Caribou Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "OP17-102": {
    "id": "OP17-102",
    "name": "Charlotte Oven",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "OP17-100": {
    "id": "OP17-100",
    "name": "Capone\"Gang\"Bege",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Firetank Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP17-105": {
    "id": "OP17-105",
    "name": "Charlotte Chiffon",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Firetank Pirates / Former Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 0 Power"
  },
  "OP17-106": {
    "id": "OP17-106",
    "name": "Charlotte Smoothie",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 4000 Power"
  },
  "OP17-108": {
    "id": "OP17-108",
    "name": "Charlotte Brulee",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP17-107": {
    "id": "OP17-107",
    "name": "Charlotte Daifuku",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP17-110": {
    "id": "OP17-110",
    "name": "Charlotte Perospero",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 4000 Power"
  },
  "OP17-117": {
    "id": "OP17-117",
    "name": "Maser Saber",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-109": {
    "id": "OP17-109",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP17-111": {
    "id": "OP17-111",
    "name": "Charlotte Mont-d'or",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "OP17-114": {
    "id": "OP17-114",
    "name": "Sweet 3 Generals",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 4000 Power"
  },
  "OP17-112": {
    "id": "OP17-112",
    "name": "Charlotte Linlin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP17-116": {
    "id": "OP17-116",
    "name": "Fulgora",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "OP17-113": {
    "id": "OP17-113",
    "name": "Streusen",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "OP17-115": {
    "id": "OP17-115",
    "name": "Don't you know that even in the cruel world of pirates there's still a code of honor?!!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "P-030": {
    "id": "P-030",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Seven Warlords of the Sea / The Sun Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "PRB02-001": {
    "id": "PRB02-001",
    "name": "Koby",
    "cardType": "Character",
    "color": "Red",
    "traits": "Navy / SWORD",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "P-041": {
    "id": "P-041",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "OP17-118": {
    "id": "OP17-118",
    "name": "Rocks.D.Xebec",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Rocks Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "PRB01-001": {
    "id": "PRB01-001",
    "name": "Sanji",
    "cardType": "Leader",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "P-014": {
    "id": "P-014",
    "name": "Koby",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Navy",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "P-084": {
    "id": "P-084",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Four Emperors / Cross Guild",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "OP17-119": {
    "id": "OP17-119",
    "name": "Loki",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Elbaph",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "P-055": {
    "id": "P-055",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "P-029": {
    "id": "P-029",
    "name": "Bartolomeo",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Supernovas / Barto Club",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "P-053": {
    "id": "P-053",
    "name": "Nami",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "P-061": {
    "id": "P-061",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Straw Hat Crew",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "PRB02-003": {
    "id": "PRB02-003",
    "name": "Lucky.Roux",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 2000 Power"
  },
  "PRB02-005": {
    "id": "PRB02-005",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "PRB02-002": {
    "id": "PRB02-002",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Red",
    "traits": "Punk Hazard / The Seven Warlords of the Sea / Heart Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "PRB02-004": {
    "id": "PRB02-004",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "PRB02-006": {
    "id": "PRB02-006",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "PRB02-007": {
    "id": "PRB02-007",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Seven Warlords of the Sea / The Sun Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "PRB02-008": {
    "id": "PRB02-008",
    "name": "Marco",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Land of Wano / Former Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "PRB02-010": {
    "id": "PRB02-010",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 5000 Power"
  },
  "PRB02-012": {
    "id": "PRB02-012",
    "name": "Nami",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "PRB02-009": {
    "id": "PRB02-009",
    "name": "Mr.3(Galdino)",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild / Former Baroque Works",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "PRB02-011": {
    "id": "PRB02-011",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "PRB02-013": {
    "id": "PRB02-013",
    "name": "Gecko Moria",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "PRB02-014": {
    "id": "PRB02-014",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "ST01-002": {
    "id": "ST01-002",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "PRB02-016": {
    "id": "PRB02-016",
    "name": "Otama",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "PRB02-015": {
    "id": "PRB02-015",
    "name": "Shiryu",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "PRB02-017": {
    "id": "PRB02-017",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "FILM / The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "PRB02-018": {
    "id": "PRB02-018",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "ST01-001": {
    "id": "ST01-001",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST01-003": {
    "id": "ST01-003",
    "name": "Karoo",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Alabasta",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "ST01-004": {
    "id": "ST01-004",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST01-007": {
    "id": "ST01-007",
    "name": "Nami",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST01-008": {
    "id": "ST01-008",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST01-005": {
    "id": "ST01-005",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST01-010": {
    "id": "ST01-010",
    "name": "Franky",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST01-006": {
    "id": "ST01-006",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST01-009": {
    "id": "ST01-009",
    "name": "Nefeltari Vivi",
    "cardType": "Character",
    "color": "Red",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST01-011": {
    "id": "ST01-011",
    "name": "Brook",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST01-012": {
    "id": "ST01-012",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST01-013": {
    "id": "ST01-013",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST01-014": {
    "id": "ST01-014",
    "name": "Guard Point",
    "cardType": "Event",
    "color": "Red",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST02-001": {
    "id": "ST02-001",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Leader",
    "color": "Green",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST01-015": {
    "id": "ST01-015",
    "name": "Gum-Gum Jet Pistol",
    "cardType": "Event",
    "color": "Red",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "ST02-002": {
    "id": "ST02-002",
    "name": "Vito",
    "cardType": "Character",
    "color": "Green",
    "traits": "Firetank Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST02-004": {
    "id": "ST02-004",
    "name": "Capone\"Gang\"Bege",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Firetank Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST02-007": {
    "id": "ST02-007",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Bonney Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST01-017": {
    "id": "ST01-017",
    "name": "Thousand Sunny",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST01-016": {
    "id": "ST01-016",
    "name": "Diable Jambe",
    "cardType": "Event",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST02-005": {
    "id": "ST02-005",
    "name": "Killer",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "ST02-009": {
    "id": "ST02-009",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST02-006": {
    "id": "ST02-006",
    "name": "Koby",
    "cardType": "Character",
    "color": "Green",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST02-003": {
    "id": "ST02-003",
    "name": "Urouge",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Fallen Monk Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST02-008": {
    "id": "ST02-008",
    "name": "Scratchmen Apoo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / On-Air Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST02-010": {
    "id": "ST02-010",
    "name": "Basil Hawkins",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Hawkins Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST02-011": {
    "id": "ST02-011",
    "name": "Heat",
    "cardType": "Character",
    "color": "Green",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST02-013": {
    "id": "ST02-013",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "ST02-012": {
    "id": "ST02-012",
    "name": "Bepo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Heart Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "ST03-004": {
    "id": "ST03-004",
    "name": "Gecko Moria",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST02-017": {
    "id": "ST02-017",
    "name": "Straw Sword",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Hawkins Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST02-016": {
    "id": "ST02-016",
    "name": "Repel",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST03-006": {
    "id": "ST03-006",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Fish-Man / The Seven Warlords of the Sea / The Sun Pirates",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST02-015": {
    "id": "ST02-015",
    "name": "Scalpel",
    "cardType": "Event",
    "color": "Green",
    "traits": "Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST03-001": {
    "id": "ST03-001",
    "name": "Crocodile",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST02-014": {
    "id": "ST02-014",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Green",
    "traits": "Navy / Supernovas / Drake Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST03-003": {
    "id": "ST03-003",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST03-002": {
    "id": "ST03-002",
    "name": "Edward Weevil",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST03-011": {
    "id": "ST03-011",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Buggy's Delivery",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "ST03-005": {
    "id": "ST03-005",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST03-007": {
    "id": "ST03-007",
    "name": "Sentomaru",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST03-017": {
    "id": "ST03-017",
    "name": "Love-Love Mellow",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST03-008": {
    "id": "ST03-008",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Heart Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST03-009": {
    "id": "ST03-009",
    "name": "Donquixote Doflamingo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Donquixote Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "ST03-012": {
    "id": "ST03-012",
    "name": "Pacifista",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Biological Weapon / Navy",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST03-014": {
    "id": "ST03-014",
    "name": "Marshall.D.Teach",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Blackbeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "ST03-016": {
    "id": "ST03-016",
    "name": "Thrust Pad Cannon",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST04-002": {
    "id": "ST04-002",
    "name": "Ulti",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST03-013": {
    "id": "ST03-013",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "ST03-010": {
    "id": "ST03-010",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST03-015": {
    "id": "ST03-015",
    "name": "Sables",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "ST04-001": {
    "id": "ST04-001",
    "name": "Kaido",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST04-003": {
    "id": "ST04-003",
    "name": "Kaido",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "ST04-004": {
    "id": "ST04-004",
    "name": "King",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST04-012": {
    "id": "ST04-012",
    "name": "Page One",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST04-011": {
    "id": "ST04-011",
    "name": "Black Maria",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "ST04-010": {
    "id": "ST04-010",
    "name": "Who's.Who",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "ST04-005": {
    "id": "ST04-005",
    "name": "Queen",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST04-006": {
    "id": "ST04-006",
    "name": "Sasaki",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST04-007": {
    "id": "ST04-007",
    "name": "Sheepshead",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / Smile",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST04-014": {
    "id": "ST04-014",
    "name": "Lead Performer \"Disaster\"",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "ST04-008": {
    "id": "ST04-008",
    "name": "Jack",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST04-009": {
    "id": "ST04-009",
    "name": "Ginrummy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates / Smile",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "ST04-015": {
    "id": "ST04-015",
    "name": "Brachio Bomber",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "6 Cost"
  },
  "ST04-016": {
    "id": "ST04-016",
    "name": "Blast Breath",
    "cardType": "Event",
    "color": "Purple",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST04-013": {
    "id": "ST04-013",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Navy / Drake Pirates / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST05-001": {
    "id": "ST05-001",
    "name": "Shanks",
    "cardType": "Leader",
    "color": "Purple",
    "traits": "FILM / The Four Emperors / Red-Haired Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST04-017": {
    "id": "ST04-017",
    "name": "Onigashima Island",
    "cardType": "Stage",
    "color": "Purple",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "ST05-007": {
    "id": "ST05-007",
    "name": "Gordon",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "ST05-004": {
    "id": "ST05-004",
    "name": "Uta",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST05-005": {
    "id": "ST05-005",
    "name": "Carina",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Grantesoro",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST05-002": {
    "id": "ST05-002",
    "name": "Ain",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Neo Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST05-012": {
    "id": "ST05-012",
    "name": "Baccarat",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Grantesoro",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST05-013": {
    "id": "ST05-013",
    "name": "Bins",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Neo Navy",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST05-003": {
    "id": "ST05-003",
    "name": "Ann",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / The Pirates Fest",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST05-009": {
    "id": "ST05-009",
    "name": "Scarlet",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Animal / Golden Lion Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST05-010": {
    "id": "ST05-010",
    "name": "Zephyr",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Neo Navy",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "ST05-006": {
    "id": "ST05-006",
    "name": "Gild Tesoro",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Grantesoro",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST05-008": {
    "id": "ST05-008",
    "name": "Shiki",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Golden Lion Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST05-011": {
    "id": "ST05-011",
    "name": "Douglas Bullet",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / The Pirates Fest",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "ST05-015": {
    "id": "ST05-015",
    "name": "Dr. Indigo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / Scientist / Golden Lion Pirates",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST05-014": {
    "id": "ST05-014",
    "name": "Buena Festa",
    "cardType": "Character",
    "color": "Purple",
    "traits": "FILM / The Pirates Fest",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "ST06-004": {
    "id": "ST06-004",
    "name": "Smoker",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "ST06-008": {
    "id": "ST06-008",
    "name": "Hina",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST06-002": {
    "id": "ST06-002",
    "name": "Koby",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST06-001": {
    "id": "ST06-001",
    "name": "Sakazuki",
    "cardType": "Leader",
    "color": "Black",
    "traits": "Navy",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST05-016": {
    "id": "ST05-016",
    "name": "Lion's Threat Imperial Earth Bind",
    "cardType": "Event",
    "color": "Purple",
    "traits": "FILM / Golden Lion Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "ST06-003": {
    "id": "ST06-003",
    "name": "Jango",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "ST05-017": {
    "id": "ST05-017",
    "name": "Union Armada",
    "cardType": "Event",
    "color": "Purple",
    "traits": "FILM / The Pirates Fest",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST06-006": {
    "id": "ST06-006",
    "name": "Tashigi",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST06-005": {
    "id": "ST06-005",
    "name": "Sengoku",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST06-010": {
    "id": "ST06-010",
    "name": "Helmeppo",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST06-007": {
    "id": "ST06-007",
    "name": "Tsuru",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "ST06-009": {
    "id": "ST06-009",
    "name": "Fullbody",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST06-014": {
    "id": "ST06-014",
    "name": "Shockwave",
    "cardType": "Event",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST07-001": {
    "id": "ST07-001",
    "name": "Charlotte Linlin",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST06-016": {
    "id": "ST06-016",
    "name": "White Out",
    "cardType": "Event",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST07-005": {
    "id": "ST07-005",
    "name": "Charlotte Daifuku",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST06-017": {
    "id": "ST06-017",
    "name": "Navy HQ",
    "cardType": "Stage",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST06-013": {
    "id": "ST06-013",
    "name": "T-Bone",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST07-003": {
    "id": "ST07-003",
    "name": "Charlotte Katakuri",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST07-006": {
    "id": "ST07-006",
    "name": "Charlotte Flampe",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST06-011": {
    "id": "ST06-011",
    "name": "Momonga",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST06-015": {
    "id": "ST06-015",
    "name": "Great Eruption",
    "cardType": "Event",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST07-002": {
    "id": "ST07-002",
    "name": "Charlotte Anana",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "ST06-012": {
    "id": "ST06-012",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST07-004": {
    "id": "ST07-004",
    "name": "Charlotte Snack",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST07-007": {
    "id": "ST07-007",
    "name": "Charlotte Brulee",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "ST08-002": {
    "id": "ST08-002",
    "name": "Uta",
    "cardType": "Character",
    "color": "Black",
    "traits": "FILM",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST07-010": {
    "id": "ST07-010",
    "name": "Charlotte Linlin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "ST07-008": {
    "id": "ST07-008",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST07-012": {
    "id": "ST07-012",
    "name": "Baron Tamago",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST07-009": {
    "id": "ST07-009",
    "name": "Charlotte Mont-d'or",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST07-015": {
    "id": "ST07-015",
    "name": "Soul Pocus",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "ST07-014": {
    "id": "ST07-014",
    "name": "Pekoms",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Minks / Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST07-011": {
    "id": "ST07-011",
    "name": "Zeus",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates / Homies",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "ST08-003": {
    "id": "ST08-003",
    "name": "Gaimon",
    "cardType": "Character",
    "color": "Black",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST07-017": {
    "id": "ST07-017",
    "name": "Queen Mama Chanter",
    "cardType": "Stage",
    "color": "Yellow",
    "traits": "Big Mom Pirates / Homies",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST07-016": {
    "id": "ST07-016",
    "name": "Power Mochi",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST07-013": {
    "id": "ST07-013",
    "name": "Prometheus",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates / Homies",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "ST08-001": {
    "id": "ST08-001",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST08-006": {
    "id": "ST08-006",
    "name": "Shirahoshi",
    "cardType": "Character",
    "color": "Black",
    "traits": "Merfolk",
    "rarity": "R",
    "cost": "4 Cost / 0 Power"
  },
  "ST09-001": {
    "id": "ST09-001",
    "name": "Yamato",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST08-004": {
    "id": "ST08-004",
    "name": "Koby",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "ST08-007": {
    "id": "ST08-007",
    "name": "Nefeltari Vivi",
    "cardType": "Character",
    "color": "Black",
    "traits": "Alabasta",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "ST08-008": {
    "id": "ST08-008",
    "name": "Higuma",
    "cardType": "Character",
    "color": "Black",
    "traits": "Mountain Bandits",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST08-005": {
    "id": "ST08-005",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Black",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "ST08-009": {
    "id": "ST08-009",
    "name": "Makino",
    "cardType": "Character",
    "color": "Black",
    "traits": "Windmill Village",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "ST08-010": {
    "id": "ST08-010",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "ST08-012": {
    "id": "ST08-012",
    "name": "Laboon",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST08-013": {
    "id": "ST08-013",
    "name": "Mr.2.Bon.Kurei(Bentham)",
    "cardType": "Character",
    "color": "Black",
    "traits": "Former Baroque Works",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST08-011": {
    "id": "ST08-011",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST08-015": {
    "id": "ST08-015",
    "name": "Gum-Gum Pistol",
    "cardType": "Event",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "ST08-014": {
    "id": "ST08-014",
    "name": "Gum-Gum Bell",
    "cardType": "Event",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST09-004": {
    "id": "ST09-004",
    "name": "Kaido",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Four Emperors / Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST09-003": {
    "id": "ST09-003",
    "name": "Ulti",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal Kingdom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST09-002": {
    "id": "ST09-002",
    "name": "Uzuki Tempura",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST09-005": {
    "id": "ST09-005",
    "name": "Kouzuki Oden",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "ST09-008": {
    "id": "ST09-008",
    "name": "Shimotsuki Ushimaru",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST09-007": {
    "id": "ST09-007",
    "name": "Shinobu",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "ST09-011": {
    "id": "ST09-011",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST09-009": {
    "id": "ST09-009",
    "name": "Fugetsu Omusubi",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST09-006": {
    "id": "ST09-006",
    "name": "Kouzuki Momonosuke",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST09-010": {
    "id": "ST09-010",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST10-001": {
    "id": "ST10-001",
    "name": "Trafalgar Law",
    "cardType": "Leader",
    "color": "Red/Purple",
    "traits": "Heart Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "ST09-014": {
    "id": "ST09-014",
    "name": "Narikabura Arrow",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST09-013": {
    "id": "ST09-013",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "ST09-012": {
    "id": "ST09-012",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "ST10-005": {
    "id": "ST10-005",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "ST10-004": {
    "id": "ST10-004",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "ST09-015": {
    "id": "ST09-015",
    "name": "Thunder Bagua",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST10-003": {
    "id": "ST10-003",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Leader",
    "color": "Red/Purple",
    "traits": "Kid Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST10-002": {
    "id": "ST10-002",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Red/Purple",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "3 Life / 6000 Power"
  },
  "ST10-008": {
    "id": "ST10-008",
    "name": "Shachi & Penguin",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST10-007": {
    "id": "ST10-007",
    "name": "Killer",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST10-006": {
    "id": "ST10-006",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "10 Cost / 11000 Power"
  },
  "ST10-009": {
    "id": "ST10-009",
    "name": "Jean Bart",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST10-010": {
    "id": "ST10-010",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST10-012": {
    "id": "ST10-012",
    "name": "Bepo",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Minks / Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST10-011": {
    "id": "ST10-011",
    "name": "Heat",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST10-013": {
    "id": "ST10-013",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "ST10-014": {
    "id": "ST10-014",
    "name": "Wire",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "ST10-017": {
    "id": "ST10-017",
    "name": "Punk Vise",
    "cardType": "Event",
    "color": "Purple",
    "traits": "Kid Pirates",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "ST10-015": {
    "id": "ST10-015",
    "name": "Gum-Gum Giant Sumo Slap",
    "cardType": "Event",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST11-001": {
    "id": "ST11-001",
    "name": "Uta",
    "cardType": "Leader",
    "color": "Green",
    "traits": "FILM",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST10-016": {
    "id": "ST10-016",
    "name": "Gum-Gum Kong Gatling",
    "cardType": "Event",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "ST11-003": {
    "id": "ST11-003",
    "name": "Backlight",
    "cardType": "Event",
    "color": "Green",
    "traits": "Music / FILM",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST11-004": {
    "id": "ST11-004",
    "name": "New Genesis",
    "cardType": "Event",
    "color": "Green",
    "traits": "Music / FILM",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST12-001": {
    "id": "ST12-001",
    "name": "Roronoa Zoro & Sanji",
    "cardType": "Leader",
    "color": "Green/Blue",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "ST12-003": {
    "id": "ST12-003",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Green",
    "traits": "The Seven Warlords of the Sea / Muggy Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST11-005": {
    "id": "ST11-005",
    "name": "I'm invincible",
    "cardType": "Event",
    "color": "Green",
    "traits": "Music / FILM",
    "rarity": "R",
    "cost": "3 Cost"
  },
  "ST11-002": {
    "id": "ST11-002",
    "name": "Uta",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST12-004": {
    "id": "ST12-004",
    "name": "Humandrill",
    "cardType": "Character",
    "color": "Green",
    "traits": "Animal / Muggy Kingdom",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST12-002": {
    "id": "ST12-002",
    "name": "Kuina",
    "cardType": "Character",
    "color": "Green",
    "traits": "Frost Moon Village",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "ST12-005": {
    "id": "ST12-005",
    "name": "Perona",
    "cardType": "Character",
    "color": "Green",
    "traits": "Muggy Kingdom / Thriller Bark Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST12-007": {
    "id": "ST12-007",
    "name": "Rika",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "ST12-006": {
    "id": "ST12-006",
    "name": "Yosaku & Johnny",
    "cardType": "Character",
    "color": "Green",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST12-010": {
    "id": "ST12-010",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST12-012": {
    "id": "ST12-012",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "ST12-008": {
    "id": "ST12-008",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST12-009": {
    "id": "ST12-009",
    "name": "Elephant True Bluefin",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Animal",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "ST12-013": {
    "id": "ST12-013",
    "name": "Zeff",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "ST12-014": {
    "id": "ST12-014",
    "name": "Duval",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Flying Fish Riders",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "ST12-011": {
    "id": "ST12-011",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST12-017": {
    "id": "ST12-017",
    "name": "Plastic Surgery Shot",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST13-002": {
    "id": "ST13-002",
    "name": "Portgas.D.Ace",
    "cardType": "Leader",
    "color": "Blue/Yellow",
    "traits": "Whitebeard Pirates",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "ST13-001": {
    "id": "ST13-001",
    "name": "Sabo",
    "cardType": "Leader",
    "color": "Red/Yellow",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "ST12-015": {
    "id": "ST12-015",
    "name": "Patty & Carne",
    "cardType": "Character",
    "color": "Blue",
    "traits": "East Blue",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST12-016": {
    "id": "ST12-016",
    "name": "Lion Strike",
    "cardType": "Event",
    "color": "Green",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST13-003": {
    "id": "ST13-003",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Black/Yellow",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 5000 Power"
  },
  "ST13-004": {
    "id": "ST13-004",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST13-005": {
    "id": "ST13-005",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST13-006": {
    "id": "ST13-006",
    "name": "Curly.Dadan",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Mountain Bandits",
    "rarity": "R",
    "cost": "5 Cost / 4000 Power"
  },
  "ST13-007": {
    "id": "ST13-007",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Goa Kingdom",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "ST13-008": {
    "id": "ST13-008",
    "name": "Sabo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST13-010": {
    "id": "ST13-010",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Goa Kingdom",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "ST13-011": {
    "id": "ST13-011",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "ST14-005": {
    "id": "ST14-005",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Black",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST13-014": {
    "id": "ST13-014",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Goa Kingdom",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "ST13-009": {
    "id": "ST13-009",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "7 Cost / 7000 Power"
  },
  "ST13-013": {
    "id": "ST13-013",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST13-016": {
    "id": "ST13-016",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "5 Cost / 4000 Power"
  },
  "ST13-012": {
    "id": "ST13-012",
    "name": "Makino",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Windmill Village",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "ST13-015": {
    "id": "ST13-015",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST13-018": {
    "id": "ST13-018",
    "name": "Gum-Gum Jet Spear",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Punk Hazard / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST13-017": {
    "id": "ST13-017",
    "name": "Flame Dragon King",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST14-004": {
    "id": "ST14-004",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Black",
    "traits": "Fish-Man / The Sun Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST14-009": {
    "id": "ST14-009",
    "name": "Franky",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST14-002": {
    "id": "ST14-002",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST13-019": {
    "id": "ST13-019",
    "name": "The Three Brothers' Bond",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Goa Kingdom",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST14-008": {
    "id": "ST14-008",
    "name": "Haredas",
    "cardType": "Character",
    "color": "Black",
    "traits": "Sky Island",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "ST14-003": {
    "id": "ST14-003",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST14-001": {
    "id": "ST14-001",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST14-010": {
    "id": "ST14-010",
    "name": "Brook",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "ST14-007": {
    "id": "ST14-007",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST14-006": {
    "id": "ST14-006",
    "name": "Nami",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "ST14-011": {
    "id": "ST14-011",
    "name": "Heracles",
    "cardType": "Character",
    "color": "Black",
    "traits": "Bowin Island",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST14-013": {
    "id": "ST14-013",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "ST15-004": {
    "id": "ST15-004",
    "name": "Thatch",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST15-003": {
    "id": "ST15-003",
    "name": "Kingdew",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST14-012": {
    "id": "ST14-012",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "ST15-002": {
    "id": "ST15-002",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "ST14-015": {
    "id": "ST14-015",
    "name": "Gum-Gum Diable Three-Swords Style Mouten Jet Six Hundred Pound Phoenix Cannon",
    "cardType": "Event",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST16-001": {
    "id": "ST16-001",
    "name": "Uta",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST15-001": {
    "id": "ST15-001",
    "name": "Atmos",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST14-016": {
    "id": "ST14-016",
    "name": "I Have My Crew!!",
    "cardType": "Event",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST14-017": {
    "id": "ST14-017",
    "name": "Thousand Sunny",
    "cardType": "Stage",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST14-014": {
    "id": "ST14-014",
    "name": "Gum-Gum Giant Rifle",
    "cardType": "Event",
    "color": "Black",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST15-005": {
    "id": "ST15-005",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST16-002": {
    "id": "ST16-002",
    "name": "Gordon",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM",
    "rarity": "R",
    "cost": "2 Cost / 0 Power"
  },
  "ST16-003": {
    "id": "ST16-003",
    "name": "Charlotte Katakuri",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST16-005": {
    "id": "ST16-005",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST16-004": {
    "id": "ST16-004",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Green",
    "traits": "FILM / The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "9 Cost / 11000 Power"
  },
  "ST17-001": {
    "id": "ST17-001",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST17-002": {
    "id": "ST17-002",
    "name": "Trafalgar Law",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Heart Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST18-001": {
    "id": "ST18-001",
    "name": "Uso-Hachi",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "ST17-005": {
    "id": "ST17-005",
    "name": "Marshall.D.Teach",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Blackbeard Pirates",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST18-004": {
    "id": "ST18-004",
    "name": "Zoro-Juurou",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST17-004": {
    "id": "ST17-004",
    "name": "Boa Hancock",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Kuja Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST17-003": {
    "id": "ST17-003",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Seven Warlords of the Sea / Buggy's Delivery",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST18-003": {
    "id": "ST18-003",
    "name": "San-Gorou",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST18-002": {
    "id": "ST18-002",
    "name": "O-Nami",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 2000 Power"
  },
  "ST19-001": {
    "id": "ST19-001",
    "name": "Smoker",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "ST18-005": {
    "id": "ST18-005",
    "name": "Luffy-Tarou",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "ST19-002": {
    "id": "ST19-002",
    "name": "Sengoku",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST20-004": {
    "id": "ST20-004",
    "name": "Charlotte Pudding",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 2000 Power"
  },
  "ST20-005": {
    "id": "ST20-005",
    "name": "Charlotte Linlin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST21-001": {
    "id": "ST21-001",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Red",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST19-003": {
    "id": "ST19-003",
    "name": "Tashigi",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST20-001": {
    "id": "ST20-001",
    "name": "Charlotte Katakuri",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST19-004": {
    "id": "ST19-004",
    "name": "Hina",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST20-002": {
    "id": "ST20-002",
    "name": "Charlotte Cracker",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST20-003": {
    "id": "ST20-003",
    "name": "Charlotte Brulee",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "ST21-002": {
    "id": "ST21-002",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST19-005": {
    "id": "ST19-005",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Black",
    "traits": "Navy",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST21-003": {
    "id": "ST21-003",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST21-004": {
    "id": "ST21-004",
    "name": "Jewelry Bonney",
    "cardType": "Character",
    "color": "Red",
    "traits": "Egghead / Bonney Pirates",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "ST21-007": {
    "id": "ST21-007",
    "name": "Sentomaru",
    "cardType": "Character",
    "color": "Red",
    "traits": "Egghead / Navy",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "ST21-006": {
    "id": "ST21-006",
    "name": "Stussy",
    "cardType": "Character",
    "color": "Red",
    "traits": "Egghead",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST21-015": {
    "id": "ST21-015",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST21-009": {
    "id": "ST21-009",
    "name": "Nami",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "ST21-012": {
    "id": "ST21-012",
    "name": "Brook",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST21-011": {
    "id": "ST21-011",
    "name": "Franky",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST21-005": {
    "id": "ST21-005",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST21-014": {
    "id": "ST21-014",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST21-008": {
    "id": "ST21-008",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Red",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST21-017": {
    "id": "ST21-017",
    "name": "Gum-Gum Mole Pistol",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost"
  },
  "ST21-013": {
    "id": "ST21-013",
    "name": "Vegapunk",
    "cardType": "Character",
    "color": "Red",
    "traits": "Scientist / Egghead",
    "rarity": "R",
    "cost": "1 Cost / 3000 Power"
  },
  "ST21-010": {
    "id": "ST21-010",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST21-016": {
    "id": "ST21-016",
    "name": "Gum-Gum Dawn Whip",
    "cardType": "Event",
    "color": "Red",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST22-002": {
    "id": "ST22-002",
    "name": "Izo",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Land of Wano / Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "ST22-001": {
    "id": "ST22-001",
    "name": "Ace & Newgate",
    "cardType": "Leader",
    "color": "Blue",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "L",
    "cost": "5 Life / 5000 Power"
  },
  "ST22-003": {
    "id": "ST22-003",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "ST22-004": {
    "id": "ST22-004",
    "name": "Elmy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "3 Cost / 5000 Power"
  },
  "ST22-007": {
    "id": "ST22-007",
    "name": "Squard",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST22-005": {
    "id": "ST22-005",
    "name": "Kouzuki Oden",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Land of Wano / Kouzuki Clan / Whitebeard Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "ST22-009": {
    "id": "ST22-009",
    "name": "Vista",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST22-006": {
    "id": "ST22-006",
    "name": "Jozu",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "ST22-008": {
    "id": "ST22-008",
    "name": "Decalvan Brothers",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "2 Cost / 4000 Power"
  },
  "ST22-010": {
    "id": "ST22-010",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST22-013": {
    "id": "ST22-013",
    "name": "LittleOars Jr.",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Giant / Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "ST22-011": {
    "id": "ST22-011",
    "name": "Whitey Bay",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST22-014": {
    "id": "ST22-014",
    "name": "A.O.",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST22-012": {
    "id": "ST22-012",
    "name": "Marco",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST22-015": {
    "id": "ST22-015",
    "name": "I Am Whitebeard!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "8 Cost"
  },
  "ST22-017": {
    "id": "ST22-017",
    "name": "Fire Fist",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost"
  },
  "ST24-005": {
    "id": "ST24-005",
    "name": "X.Drake",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Navy / Drake Pirates",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "ST24-001": {
    "id": "ST24-001",
    "name": "Capone\"Gang\"Bege",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Firetank Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "ST23-002": {
    "id": "ST23-002",
    "name": "Shanks",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Red-Haired Pirates",
    "rarity": "R",
    "cost": "9 Cost / 10000 Power"
  },
  "ST23-003": {
    "id": "ST23-003",
    "name": "Benn.Beckman",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST22-016": {
    "id": "ST22-016",
    "name": "Take That Back!! Take Back What You Said!!",
    "cardType": "Event",
    "color": "Blue",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST24-002": {
    "id": "ST24-002",
    "name": "Kid & Killer",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "ST23-001": {
    "id": "ST23-001",
    "name": "Uta",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM",
    "rarity": "R",
    "cost": "6 Cost / 4000 Power"
  },
  "ST23-005": {
    "id": "ST23-005",
    "name": "Yasopp",
    "cardType": "Character",
    "color": "Red",
    "traits": "Red-Haired Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST23-004": {
    "id": "ST23-004",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "FILM / Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST24-004": {
    "id": "ST24-004",
    "name": "Law & Bepo",
    "cardType": "Character",
    "color": "Green",
    "traits": "Minks / Supernovas / Heart Pirates",
    "rarity": "R",
    "cost": "10 Cost / 11000 Power"
  },
  "ST24-003": {
    "id": "ST24-003",
    "name": "Basil Hawkins",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Hawkins Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "ST26-002": {
    "id": "ST26-002",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Animal / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST25-003": {
    "id": "ST25-003",
    "name": "Crocodile & Mihawk",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild / Former Baroque Works",
    "rarity": "R",
    "cost": "8 Cost / 7000 Power"
  },
  "ST25-002": {
    "id": "ST25-002",
    "name": "Cabaji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "ST27-001": {
    "id": "ST27-001",
    "name": "Avalo Pizarro",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST26-004": {
    "id": "ST26-004",
    "name": "General Franky",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "8 Cost / 10000 Power"
  },
  "ST25-001": {
    "id": "ST25-001",
    "name": "Alvida",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST26-003": {
    "id": "ST26-003",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST28-001": {
    "id": "ST28-001",
    "name": "Ashura Doji",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "ST25-004": {
    "id": "ST25-004",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Blue",
    "traits": "The Four Emperors / Cross Guild",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "ST28-003": {
    "id": "ST28-003",
    "name": "Kin'emon",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST25-005": {
    "id": "ST25-005",
    "name": "Mohji",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Cross Guild",
    "rarity": "R",
    "cost": "4 Cost / 1000 Power"
  },
  "ST27-003": {
    "id": "ST27-003",
    "name": "Kuzan",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates / Former Navy",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "ST26-005": {
    "id": "ST26-005",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST26-001": {
    "id": "ST26-001",
    "name": "Soba Mask",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "ST27-005": {
    "id": "ST27-005",
    "name": "Marshall.D.Teach",
    "cardType": "Character",
    "color": "Black",
    "traits": "The Four Emperors / Blackbeard Pirates",
    "rarity": "R",
    "cost": "7 Cost / 8000 Power"
  },
  "ST27-004": {
    "id": "ST27-004",
    "name": "Sanjuan.Wolf",
    "cardType": "Character",
    "color": "Black",
    "traits": "Giant / Blackbeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST27-002": {
    "id": "ST27-002",
    "name": "Catarina Devon",
    "cardType": "Character",
    "color": "Black",
    "traits": "Blackbeard Pirates",
    "rarity": "R",
    "cost": "1 Cost / 1000 Power"
  },
  "ST28-002": {
    "id": "ST28-002",
    "name": "Izo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Former Whitebeard Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "ST28-004": {
    "id": "ST28-004",
    "name": "Kouzuki Momonosuke",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST29-003": {
    "id": "ST29-003",
    "name": "Kaku",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / CP0",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST29-001": {
    "id": "ST29-001",
    "name": "Monkey.D.Luffy",
    "cardType": "Leader",
    "color": "Yellow",
    "traits": "Egghead / The Four Emperors / Straw Hat Crew",
    "rarity": "L",
    "cost": "6 Life / 5000 Power"
  },
  "ST28-005": {
    "id": "ST28-005",
    "name": "Yamato",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Land of Wano",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "ST29-007": {
    "id": "ST29-007",
    "name": "Tony Tony.Chopper",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Animal / Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST29-005": {
    "id": "ST29-005",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Fish-Man / Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 5000 Power"
  },
  "ST29-002": {
    "id": "ST29-002",
    "name": "Usopp",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST29-004": {
    "id": "ST29-004",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST29-006": {
    "id": "ST29-006",
    "name": "Stussy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST29-008": {
    "id": "ST29-008",
    "name": "Nami",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "3 Cost / 1000 Power"
  },
  "ST29-009": {
    "id": "ST29-009",
    "name": "Nico Robin",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 2000 Power"
  },
  "ST29-012": {
    "id": "ST29-012",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 0 Power"
  },
  "ST29-011": {
    "id": "ST29-011",
    "name": "Brook",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 2000 Power"
  },
  "ST29-014": {
    "id": "ST29-014",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "6 Cost / 8000 Power"
  },
  "ST29-010": {
    "id": "ST29-010",
    "name": "Franky",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST29-013": {
    "id": "ST29-013",
    "name": "Rob Lucci",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Egghead / CP0",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST29-016": {
    "id": "ST29-016",
    "name": "Kizaru!! Compared to Two Years Ago We're a Hundred Times Stronger Now!!",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Egghead / The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST29-015": {
    "id": "ST29-015",
    "name": "Raw Heat Strike",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST29-017": {
    "id": "ST29-017",
    "name": "Iai Death Lion Song",
    "cardType": "Event",
    "color": "Yellow",
    "traits": "Egghead / Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost"
  },
  "ST30-001": {
    "id": "ST30-001",
    "name": "Luffy & Ace",
    "cardType": "Leader",
    "color": "Red/Green",
    "traits": "Impel Down / Whitebeard Pirates / Straw Hat Crew",
    "rarity": "L",
    "cost": "4 Life / 6000 Power"
  },
  "ST30-003": {
    "id": "ST30-003",
    "name": "Edward.Newgate",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Whitebeard Pirates",
    "rarity": "R",
    "cost": "8 Cost / 6000 Power"
  },
  "ST30-002": {
    "id": "ST30-002",
    "name": "Inazuma",
    "cardType": "Character",
    "color": "Red",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST30-006": {
    "id": "ST30-006",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Impel Down / The Sun Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST30-004": {
    "id": "ST30-004",
    "name": "Emporio.Ivankov",
    "cardType": "Character",
    "color": "Red",
    "traits": "Impel Down / Revolutionary Army",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST30-005": {
    "id": "ST30-005",
    "name": "Jozu",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST30-011": {
    "id": "ST30-011",
    "name": "Buggy",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Buggy Pirates",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "ST30-007": {
    "id": "ST30-007",
    "name": "Portgas.D.Ace",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST30-015": {
    "id": "ST30-015",
    "name": "The Name of This Era Is \"Whitebeard\"!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST30-010": {
    "id": "ST30-010",
    "name": "Crocodile",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "ST30-008": {
    "id": "ST30-008",
    "name": "Marco",
    "cardType": "Character",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST30-012": {
    "id": "ST30-012",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Straw Hat Crew",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST30-017": {
    "id": "ST30-017",
    "name": "And You Get Yourself in Big Trouble!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Whitebeard Pirates",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST30-009": {
    "id": "ST30-009",
    "name": "LittleOars Jr.",
    "cardType": "Character",
    "color": "Red",
    "traits": "Giant / Whitebeard Pirates Allies",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST30-013": {
    "id": "ST30-013",
    "name": "Mr.2.Bon.Kurei(Bentham)",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST31-001": {
    "id": "ST31-001",
    "name": "Sanji",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 3000 Power"
  },
  "ST30-014": {
    "id": "ST30-014",
    "name": "Mr.3(Galdino)",
    "cardType": "Character",
    "color": "Green",
    "traits": "Impel Down / Former Baroque Works",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST30-016": {
    "id": "ST30-016",
    "name": "Can You Still Fight, Luffy?! Of Course!!",
    "cardType": "Event",
    "color": "Red",
    "traits": "Whitebeard Pirates / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST32-002": {
    "id": "ST32-002",
    "name": "Kouzuki Oden",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / Kouzuki Clan",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST32-001": {
    "id": "ST32-001",
    "name": "Kin'emon",
    "cardType": "Character",
    "color": "Green",
    "traits": "Land of Wano / The Akazaya Nine",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST31-003": {
    "id": "ST31-003",
    "name": "Brook",
    "cardType": "Character",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST33-001": {
    "id": "ST33-001",
    "name": "Koby",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 1000 Power"
  },
  "ST31-005": {
    "id": "ST31-005",
    "name": "Thousand Sunny",
    "cardType": "Stage",
    "color": "Red",
    "traits": "Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost"
  },
  "ST31-002": {
    "id": "ST31-002",
    "name": "Jinbe",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Straw Hat Crew",
    "rarity": "R",
    "cost": "5 Cost / 6000 Power"
  },
  "ST33-002": {
    "id": "ST33-002",
    "name": "Sakazuki",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST33-005": {
    "id": "ST33-005",
    "name": "Monkey.D.Garp",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "ST32-004": {
    "id": "ST32-004",
    "name": "Silvers Rayleigh",
    "cardType": "Character",
    "color": "Green",
    "traits": "Former Roger Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST32-005": {
    "id": "ST32-005",
    "name": "Roronoa Zoro",
    "cardType": "Character",
    "color": "Green",
    "traits": "Supernovas / Straw Hat Crew",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST31-004": {
    "id": "ST31-004",
    "name": "Monkey.D.Luffy",
    "cardType": "Character",
    "color": "Red",
    "traits": "The Four Emperors / Straw Hat Crew",
    "rarity": "R",
    "cost": "7 Cost / 9000 Power"
  },
  "ST33-004": {
    "id": "ST33-004",
    "name": "Borsalino",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "6 Cost / 6000 Power"
  },
  "ST32-003": {
    "id": "ST32-003",
    "name": "Dracule Mihawk",
    "cardType": "Character",
    "color": "Green",
    "traits": "Muggy Kingdom / The Seven Warlords of the Sea",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST33-003": {
    "id": "ST33-003",
    "name": "Smoker",
    "cardType": "Character",
    "color": "Blue",
    "traits": "Navy",
    "rarity": "R",
    "cost": "2 Cost / 3000 Power"
  },
  "ST35-002": {
    "id": "ST35-002",
    "name": "Lindbergh",
    "cardType": "Character",
    "color": "Red",
    "traits": "Minks / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "ST35-003": {
    "id": "ST35-003",
    "name": "Karasu",
    "cardType": "Character",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST34-003": {
    "id": "ST34-003",
    "name": "Charlotte Brulee",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST34-004": {
    "id": "ST34-004",
    "name": "Charlotte Linlin",
    "cardType": "Character",
    "color": "Purple",
    "traits": "The Four Emperors / Big Mom Pirates",
    "rarity": "R",
    "cost": "10 Cost / 12000 Power"
  },
  "ST35-001": {
    "id": "ST35-001",
    "name": "Hack",
    "cardType": "Character",
    "color": "Red",
    "traits": "Fish-Man / Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  },
  "ST34-001": {
    "id": "ST34-001",
    "name": "Charlotte Katakuri",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "5 Cost / 7000 Power"
  },
  "ST34-002": {
    "id": "ST34-002",
    "name": "Charlotte Cracker",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Big Mom Pirates",
    "rarity": "R",
    "cost": "4 Cost / 5000 Power"
  },
  "ST34-005": {
    "id": "ST34-005",
    "name": "Baron Tamago & Pekoms",
    "cardType": "Character",
    "color": "Purple",
    "traits": "Minks / Big Mom Pirates",
    "rarity": "R",
    "cost": "3 Cost / 4000 Power"
  },
  "ST35-005": {
    "id": "ST35-005",
    "name": "Bartholomew Kuma",
    "cardType": "Character",
    "color": "Black",
    "traits": "Revolutionary Army",
    "rarity": "R",
    "cost": "5 Cost / 5000 Power"
  },
  "ST36-004": {
    "id": "ST36-004",
    "name": "Bartolomeo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Dressrosa / Supernovas / Barto Club",
    "rarity": "R",
    "cost": "1 Cost / 2000 Power"
  },
  "ST36-001": {
    "id": "ST36-001",
    "name": "Cavendish",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Dressrosa / Supernovas / Beautiful Pirates",
    "rarity": "R",
    "cost": "3 Cost / 3000 Power"
  },
  "ST35-004": {
    "id": "ST35-004",
    "name": "Koala",
    "cardType": "Character",
    "color": "Black",
    "traits": "Dressrosa / Revolutionary Army",
    "rarity": "R",
    "cost": "7 Cost / 6000 Power"
  },
  "ST36-002": {
    "id": "ST36-002",
    "name": "Killer",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "4 Cost / 6000 Power"
  },
  "ST36-005": {
    "id": "ST36-005",
    "name": "Eustass\"Captain\"Kid",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / Kid Pirates",
    "rarity": "R",
    "cost": "6 Cost / 7000 Power"
  },
  "ST36-003": {
    "id": "ST36-003",
    "name": "Scratchmen Apoo",
    "cardType": "Character",
    "color": "Yellow",
    "traits": "Supernovas / On-Air Pirates",
    "rarity": "R",
    "cost": "4 Cost / 4000 Power"
  }
};

const STARTER_DECKS_META = {
  "ST01": { code: "ST01", name: "Straw Hat Crew", color: "Red", traits: "Straw Hat Crew" },
  "ST02": { code: "ST02", name: "Worst Generation", color: "Green", traits: "Supernovas" },
  "ST03": { code: "ST03", name: "The Seven Warlords of the Sea", color: "Blue", traits: "The Seven Warlords of the Sea" },
  "ST04": { code: "ST04", name: "Animal Kingdom Pirates", color: "Purple", traits: "Animal Kingdom Pirates" },
  "ST05": { code: "ST05", name: "ONE PIECE FILM edition", color: "Purple", traits: "FILM" },
  "ST06": { code: "ST06", name: "Absolute Justice", color: "Black", traits: "Navy" },
  "ST07": { code: "ST07", name: "Big Mom Pirates", color: "Yellow", traits: "Big Mom Pirates" },
  "ST08": { code: "ST08", name: "Side Monkey.D.Luffy", color: "Black", traits: "Straw Hat Crew" },
  "ST09": { code: "ST09", name: "Side Yamato", color: "Yellow", traits: "Land of Wano" },
  "ST10": { code: "ST10", name: "The Three Captains", color: "Red/Purple", traits: "Supernovas / Straw Hat / Heart / Kid" },
  "ST11": { code: "ST11", name: "Uta", color: "Green", traits: "FILM / Music" },
  "ST12": { code: "ST12", name: "Zoro & Sanji", color: "Green/Blue", traits: "Straw Hat Crew" },
  "ST13": { code: "ST13", name: "The Three Brothers", color: "Yellow", traits: "ASL / Revolutionary Army / Whitebeard" },
  "ST14": { code: "ST14", name: "3D2Y", color: "Black", traits: "Straw Hat Crew" },
  "ST15": { code: "ST15", name: "RED Edward.Newgate", color: "Red", traits: "Whitebeard Pirates" },
  "ST16": { code: "ST16", name: "GREEN Uta", color: "Green", traits: "FILM / Music" },
  "ST17": { code: "ST17", name: "BLUE Donquixote Doflamingo", color: "Blue", traits: "Donquixote Pirates / The Seven Warlords of the Sea" },
  "ST18": { code: "ST18", name: "PURPLE Monkey.D.Luffy", color: "Purple", traits: "Straw Hat Crew" },
  "ST19": { code: "ST19", name: "BLACK Smoker", color: "Black", traits: "Navy" },
  "ST20": { code: "ST20", name: "YELLOW Charlotte Katakuri", color: "Yellow", traits: "Big Mom Pirates" },
  "ST21": { code: "ST21", name: "EX Gear 5", color: "Red", traits: "Straw Hat Crew" },
  "ST22": { code: "ST22", name: "Ace & Newgate", color: "Blue", traits: "Whitebeard Pirates / Spade Pirates" },
  "ST23": { code: "ST23", name: "RED Shanks", color: "Red", traits: "Red Hair Pirates / FILM" },
  "ST24": { code: "ST24", name: "GREEN Jewelry Bonney", color: "Green", traits: "Supernovas / Bonney Pirates" },
  "ST25": { code: "ST25", name: "BLUE Buggy", color: "Blue", traits: "Cross Guild / The Seven Warlords of the Sea" },
  "ST26": { code: "ST26", name: "PURPLE/BLACK Monkey.D.Luffy", color: "Purple/Black", traits: "Straw Hat Crew" },
  "ST27": { code: "ST27", name: "BLACK Marshall.D.Teach", color: "Black", traits: "Blackbeard Pirates" },
  "ST28": { code: "ST28", name: "GREEN/YELLOW Yamato", color: "Green/Yellow", traits: "Land of Wano" },
  "ST29": { code: "ST29", name: "Egghead", color: "Yellow", traits: "Egghead / Straw Hat Crew" },
  "ST30": { code: "ST30", name: "EX Luffy & Ace", color: "Red/Green", traits: "Straw Hat Crew / Whitebeard Pirates" },
  "ST31": { code: "ST31", name: "RED Monkey.D.Luffy", color: "Red", traits: "Straw Hat Crew" },
  "ST32": { code: "ST32", name: "GREEN Roronoa Zoro", color: "Green", traits: "Straw Hat Crew / Land of Wano" },
  "ST33": { code: "ST33", name: "BLUE Kuzan", color: "Blue", traits: "Navy / Former Navy" },
  "ST34": { code: "ST34", name: "PURPLE Charlotte Katakuri", color: "Purple", traits: "Big Mom Pirates" },
  "ST35": { code: "ST35", name: "RED/BLACK Sabo", color: "Red/Black", traits: "Revolutionary Army / Dressrosa" },
  "ST36": { code: "ST36", name: "YELLOW Eustass \"Captain\" Kid", color: "Yellow", traits: "Supernovas / Kid Pirates" }
};

const STARTER_DECK_COLORS = Object.fromEntries(
  Object.entries(STARTER_DECKS_META).map(([k, v]) => [k, v.color])
);

function normalizeSetCode(input) {
  if (!input) return null;
  const clean = input.toUpperCase().trim().replace(/[\s\-_]/g, '');
  
  // ST01 to ST99 (e.g. ST29, ST1 -> ST01)
  const stMatch = clean.match(/^ST0*([1-9][0-9]?)$/);
  if (stMatch) {
    const num = parseInt(stMatch[1], 10);
    return `ST${num.toString().padStart(2, '0')}`;
  }

  // OP01 to OP99
  const opMatch = clean.match(/^OP0*([1-9][0-9]?)$/);
  if (opMatch) {
    const num = parseInt(opMatch[1], 10);
    return `OP${num.toString().padStart(2, '0')}`;
  }

  // EB01 to EB99
  const ebMatch = clean.match(/^EB0*([1-9][0-9]?)$/);
  if (ebMatch) {
    const num = parseInt(ebMatch[1], 10);
    return `EB${num.toString().padStart(2, '0')}`;
  }

  // PRB01 to PRB99
  const prbMatch = clean.match(/^PRB0*([1-9][0-9]?)$/);
  if (prbMatch) {
    const num = parseInt(prbMatch[1], 10);
    return `PRB${num.toString().padStart(2, '0')}`;
  }

  // Promo P
  if (clean === 'P' || clean === 'PROMO') {
    return 'P';
  }

  return null;
}

function getStarterDeckInfo(setCode) {
  const normalized = normalizeSetCode(setCode) || setCode;
  return STARTER_DECKS_META[normalized] || null;
}

function getCardsBySet(setCodeQuery) {
  const normalized = normalizeSetCode(setCodeQuery) || (setCodeQuery ? setCodeQuery.toUpperCase().trim() : '');
  if (!normalized) return [];

  const prefix = normalized + '-';
  const results = [];

  for (const [id, card] of Object.entries(ONE_PIECE_CARDS_DB)) {
    if (id.startsWith(prefix)) {
      results.push({
        ...card,
        set: card.set || `Set ${normalized}`,
        imageFallbacks: getCardImageURLs(id)
      });
    }
  }

  results.sort((a, b) => {
    const numA = parseInt(a.id.split('-')[1], 10) || 0;
    const numB = parseInt(b.id.split('-')[1], 10) || 0;
    return numA - numB;
  });

  return results;
}

function determineCardColor(cardId) {
  if (!cardId) return 'Red';
  const clean = cardId.toUpperCase().trim();

  if (ONE_PIECE_CARDS_DB[clean] && ONE_PIECE_CARDS_DB[clean].color) {
    return ONE_PIECE_CARDS_DB[clean].color;
  }

  const parts = clean.split('-');
  if (parts.length < 2) return 'Red';

  const setCode = parts[0];
  const num = parseInt(parts[1], 10) || 1;

  if (STARTER_DECK_COLORS[setCode]) {
    return STARTER_DECK_COLORS[setCode];
  }

  if (setCode === 'OP01') {
    if (num <= 29) return 'Red';
    if (num <= 59) return 'Green';
    if (num <= 90) return 'Blue';
    return 'Purple';
  }
  if (setCode === 'OP02') {
    if (num <= 24) return 'Red';
    if (num <= 48) return 'Green';
    if (num <= 70) return 'Blue';
    if (num <= 92) return 'Purple';
    return 'Black';
  }
  if (setCode === 'OP03') {
    if (num <= 20) return 'Red';
    if (num <= 39) return 'Green';
    if (num <= 57) return 'Blue';
    if (num <= 75) return 'Purple';
    if (num <= 98) return 'Black';
    return 'Yellow';
  }
  if (setCode === 'OP04') {
    if (num <= 19) return 'Red';
    if (num <= 38) return 'Green';
    if (num <= 57) return 'Blue';
    if (num <= 76) return 'Purple';
    if (num <= 98) return 'Black';
    return 'Yellow';
  }
  if (setCode === 'OP05') {
    if (num <= 19) return 'Red';
    if (num <= 39) return 'Green';
    if (num <= 59) return 'Blue';
    if (num <= 79) return 'Purple';
    if (num <= 97) return 'Black';
    return 'Yellow';
  }
  if (setCode === 'OP06') {
    if (num <= 19) return 'Red';
    if (num <= 40) return 'Green';
    if (num <= 59) return 'Blue';
    if (num <= 79) return 'Purple';
    if (num <= 99) return 'Black';
    return 'Yellow';
  }
  if (setCode === 'OP07') {
    if (num <= 18) return 'Red';
    if (num <= 37) return 'Green';
    if (num <= 58) return 'Blue';
    if (num <= 78) return 'Purple';
    if (num <= 96) return 'Black';
    return 'Yellow';
  }
  if (setCode === 'OP08') {
    if (num <= 18) return 'Red';
    if (num <= 37) return 'Green';
    if (num <= 56) return 'Blue';
    if (num <= 77) return 'Purple';
    if (num <= 97) return 'Black';
    return 'Yellow';
  }
  if (setCode === 'OP09') {
    if (num <= 20) return 'Red';
    if (num <= 40) return 'Green';
    if (num <= 60) return 'Blue';
    if (num <= 80) return 'Purple';
    if (num <= 98) return 'Black';
    return 'Yellow';
  }
  if (setCode === 'OP10') {
    if (num <= 20) return 'Red';
    if (num <= 40) return 'Green';
    if (num <= 60) return 'Blue';
    if (num <= 80) return 'Purple';
    if (num <= 98) return 'Black';
    return 'Yellow';
  }
  if (setCode === 'OP17') {
    if (num <= 20) return 'Red';
    if (num <= 38) return 'Green';
    if (num <= 60) return 'Blue';
    if (num <= 78) return 'Purple';
    if (num <= 98) return 'Black';
    return 'Yellow';
  }
  if (setCode === 'EB01') {
    if (num <= 10) return 'Red';
    if (num <= 20) return 'Green';
    if (num <= 32) return 'Blue';
    if (num <= 44) return 'Purple';
    if (num <= 54) return 'Black';
    return 'Yellow';
  }

  return 'Red';
}

function getCardImageURLs(cardId) {
  if (!cardId) return [];
  const cleanId = cardId.toUpperCase().trim();
  const setCode = cleanId.split('-')[0];

  return [
    `https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/one-piece/${setCode}/${cleanId}_EN.webp`,
    `https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/one-piece/${setCode}/${cleanId}.webp`,
    `https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/one-piece/${setCode}/${cleanId}_JP.webp`,
    `https://en.onepiece-cardgame.com/images/cardlist/card/${cleanId}.png`
  ];
}

function createGenericCard(cardId) {
  const cleanId = cardId.toUpperCase().trim();
  const color = determineCardColor(cleanId);
  const parts = cleanId.split('-');
  const setCode = parts[0] || 'OP01';
  const num = parseInt(parts[1], 10) || 1;

  let cardType = 'Character';
  let rarity = 'R';
  if (num === 1 && (setCode.startsWith('OP') || setCode.startsWith('ST'))) {
    cardType = 'Leader';
    rarity = 'L';
  }

  let traits = 'One Piece Pirates';
  if (STARTER_DECKS_META[setCode]) {
    traits = STARTER_DECKS_META[setCode].traits;
  }

  return {
    id: cleanId,
    name: `Carta ${cleanId}`,
    set: `Set ${setCode}`,
    cardType: cardType,
    color: color,
    traits: traits,
    rarity: rarity,
    cost: '4 Cost / 5000 Power',
    imageFallbacks: getCardImageURLs(cleanId)
  };
}

function findOrGenerateCard(query) {
  if (!query) return createGenericCard('OP01-001');
  const clean = query.toUpperCase().trim();

  if (ONE_PIECE_CARDS_DB[clean]) {
    const dbCard = ONE_PIECE_CARDS_DB[clean];
    return {
      ...dbCard,
      set: dbCard.set || `Set ${clean.split('-')[0]}`,
      imageFallbacks: getCardImageURLs(clean)
    };
  }

  for (const [id, c] of Object.entries(ONE_PIECE_CARDS_DB)) {
    if (c.name && c.name.toLowerCase() === query.toLowerCase().trim()) {
      return {
        ...c,
        set: c.set || `Set ${id.split('-')[0]}`,
        imageFallbacks: getCardImageURLs(id)
      };
    }
  }

  return createGenericCard(clean);
}

function generateFallbackCardSVG(card) {
  const colorMap = {
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
  };
  
  const primaryColor = (card.color || 'Red').split('/')[0];
  const bgHex = colorMap[primaryColor] || '#2563eb';
  const name = (card.name || card.id).slice(0, 20);
  const type = card.cardType || 'Character';

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="420" viewBox="0 0 300 420">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bgHex}" />
          <stop offset="100%" stop-color="#0a0f1d" />
        </linearGradient>
      </defs>
      <rect width="300" height="420" rx="16" fill="url(#g)" stroke="#f59e0b" stroke-width="4"/>
      <circle cx="150" cy="160" r="70" fill="rgba(0,0,0,0.4)" stroke="#f59e0b" stroke-width="2"/>
      <text x="150" y="175" font-size="50" text-anchor="middle" fill="#f59e0b">\U0001f3f4\u200d\u2620\ufe0f</text>
      <rect x="20" y="260" width="260" height="50" rx="8" fill="rgba(0,0,0,0.7)" />
      <text x="150" y="292" font-size="16" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">${name}</text>
      <text x="150" y="340" font-size="20" font-family="monospace" font-weight="bold" fill="#f59e0b" text-anchor="middle">${card.id}</text>
      <text x="150" y="375" font-size="13" font-family="sans-serif" fill="#94a3b8" text-anchor="middle">${type} \u2022 ${card.color}</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}


function searchCardsInDB(query) {
  if (!query || typeof query !== 'string') return [];
  const rawQ = query.trim();
  if (!rawQ) return [];

  const cleanQ = rawQ.toLowerCase().replace(/[\.\-_,;:\'\"\/]+/g, ' ').trim();
  const words = cleanQ.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  const results = [];
  const entries = Object.entries(ONE_PIECE_CARDS_DB);

  for (let i = 0; i < entries.length; i++) {
    const [cardId, card] = entries[i];
    const name = card.name || '';
    const traits = card.traits || '';
    const color = card.color || '';
    const cardType = card.cardType || '';
    const set = card.set || `Set ${cardId.split('-')[0]}`;

    const fullTarget = `${cardId} ${name} ${traits} ${color} ${cardType} ${set}`;
    const cleanTarget = fullTarget.toLowerCase().replace(/[\.\-_,;:\'\"\/]+/g, ' ');

    const matchesAll = words.every(w => cleanTarget.includes(w));
    if (matchesAll) {
      results.push({
        ...card,
        set: set,
        imageFallbacks: getCardImageURLs(cardId)
      });
    }
  }

  results.sort((a, b) => {
    const aId = (a.id || '').toUpperCase();
    const bId = (b.id || '').toUpperCase();
    const cleanU = rawQ.toUpperCase();
    if (aId === cleanU && bId !== cleanU) return -1;
    if (bId === cleanU && aId !== cleanU) return 1;

    const aNameClean = (a.name || '').toLowerCase().replace(/[\.\-_,;:\'\"\/]+/g, ' ').trim();
    const bNameClean = (b.name || '').toLowerCase().replace(/[\.\-_,;:\'\"\/]+/g, ' ').trim();

    if (aNameClean === cleanQ && bNameClean !== cleanQ) return -1;
    if (bNameClean === cleanQ && aNameClean !== cleanQ) return 1;

    if (aNameClean.startsWith(cleanQ) && !bNameClean.startsWith(cleanQ)) return -1;
    if (bNameClean.startsWith(cleanQ) && !aNameClean.startsWith(cleanQ)) return 1;

    if (aNameClean.includes(cleanQ) && !bNameClean.includes(cleanQ)) return -1;
    if (bNameClean.includes(cleanQ) && !aNameClean.includes(cleanQ)) return 1;

    return aId.localeCompare(bId);
  });

  return results;
}


function getOfficialCardImageUrl(cardId) {
  const urls = getCardImageURLs(cardId);
  return (urls && urls.length > 0) ? urls[0] : '';
}

function getFallbackCardDataUrl(cardId, name, color) {
  return generateFallbackCardSVG({ id: cardId, name: name, color: color });
}

if (typeof window !== 'undefined') {
  window.ONE_PIECE_CARDS_DB = ONE_PIECE_CARDS_DB;
  window.STARTER_DECKS_META = STARTER_DECKS_META;
  window.normalizeSetCode = normalizeSetCode;
  window.getStarterDeckInfo = getStarterDeckInfo;
  window.getCardsBySet = getCardsBySet;
  window.findOrGenerateCard = findOrGenerateCard;
  window.getCardImageURLs = getCardImageURLs;
  window.generateFallbackCardSVG = generateFallbackCardSVG;
  window.determineCardColor = determineCardColor;
  window.searchCardsInDB = searchCardsInDB;
  window.getOfficialCardImageUrl = getOfficialCardImageUrl;
  window.getFallbackCardDataUrl = getFallbackCardDataUrl;
}
