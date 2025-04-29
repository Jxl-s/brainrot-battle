export interface BrainrotData {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

export const brainrots: BrainrotData[] = [
  {
      "id": "brr-brr-patapim",
      "name": "Brr brr Patapim",
      "imageUrl": "brainrot/brr-brr-patapim.webp",
      "description": "A guy with big toes"
  },
  {
      "id": "liril-laril",
      "name": "Liril\u00ec Laril\u00e0",
      "imageUrl": "brainrot/liril-laril.webp",
      "description": "A cactus elephant in desert"
  },
  {
      "id": "frigo-camelo",
      "name": "Frigo Camelo",
      "imageUrl": "brainrot/frigo-camelo.webp",
      "description": "A camel holding a fridge"
  },
  {
      "id": "ballerina-cappuccina",
      "name": "Ballerina Cappuccina",
      "imageUrl": "brainrot/ballerina-cappuccina.webp",
      "description": "A dancing cappuccino"
  },
  {
      "id": "bearorito-applepitolirotito",
      "name": "Bearorito Applepitolirotito",
      "imageUrl": "brainrot/bearorito-applepitolirotito.webp",
      "description": "A big apple guy"
  },
  {
      "id": "boneca-ambalabu",
      "name": "Boneca Ambalabu",
      "imageUrl": "brainrot/boneca-ambalabu.webp",
      "description": "A frog human wheel"
  },
  {
      "id": "cappuccino-assassino",
      "name": "Cappuccino Assassino",
      "imageUrl": "brainrot/cappuccino-assassino.webp",
      "description": "He's gonna cut you"
  },
  {
      "id": "chimpanzini-bananini",
      "name": "Chimpanzini Bananini",
      "imageUrl": "brainrot/chimpanzini-bananini.webp",
      "description": "The banana monkey"
  },
  {
      "id": "crocodilo-potatino",
      "name": "Crocodilo Potatino",
      "imageUrl": "brainrot/crocodilo-potatino.webp",
      "description": "A potato crocodile enjoying life"
  },
  {
      "id": "ecco-cavallo-virtuoso",
      "name": "Ecco Cavallo Virtuoso",
      "imageUrl": "brainrot/ecco-cavallo-virtuoso.webp",
      "description": "A piano prodigy horse"
  },
  {
      "id": "glorbo-fruttodrillo",
      "name": "Glorbo Fruttodrillo",
      "imageUrl": "brainrot/glorbo-fruttodrillo.webp",
      "description": "A big fat watermelon crocodile"
  },
  {
      "id": "orangutini-ananasini",
      "name": "Orangutini Ananasini",
      "imageUrl": "brainrot/orangutini-ananasini.webp",
      "description": "A fatass pineapple monkey"
  },
  {
      "id": "piccione-macchina",
      "name": "Piccione Macchina",
      "imageUrl": "brainrot/piccione-macchina.webp",
      "description": "We all love cybertrucks"
  },
  {
      "id": "tric-trac-baraboom",
      "name": "Tric Trac baraboom",
      "imageUrl": "brainrot/tric-trac-baraboom.webp",
      "description": "Brr brr patapim's opp"
  },
  {
      "id": "trippi-troppi",
      "name": "Trippi Troppi",
      "imageUrl": "brainrot/trippi-troppi.webp",
      "description": "The king in the water"
  },
  {
      "id": "bombardiro-crocodillo",
      "name": "Bombardiro Crocodillo",
      "imageUrl": "brainrot/bombardiro-crocodillo.webp",
      "description": "Crocodile head in a b-25"
  },
  {
      "id": "tralalero-tralala",
      "name": "Tralalero Tralala",
      "imageUrl": "brainrot/tralalero-tralala.webp",
      "description": "A shark wearing sneakers"
  },
  {
      "id": "tung-tung-tung-sahur",
      "name": "Tung Tung Tung Sahur",
      "imageUrl": "brainrot/tung-tung-tung-sahur.webp",
      "description": "He fought in the war"
  }
]

export function getBrainrotById(id: string): BrainrotData | undefined {
  return brainrots.find(brainrot => brainrot.id === id);
}

export function getAllBrainrots(): BrainrotData[] {
  return [...brainrots];
} 