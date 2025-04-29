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
      "description": "Description of Brr brr Patapim"
  },
  {
      "id": "liril-laril",
      "name": "Liril\u00ec Laril\u00e0",
      "imageUrl": "brainrot/liril-laril.webp",
      "description": "Description of Liril\u00ec Laril\u00e0"
  },
  {
      "id": "frigo-camelo",
      "name": "Frigo Camelo",
      "imageUrl": "brainrot/frigo-camelo.webp",
      "description": "Description of Frigo Camelo"
  },
  {
      "id": "ballerina-cappuccina",
      "name": "Ballerina Cappuccina",
      "imageUrl": "brainrot/ballerina-cappuccina.webp",
      "description": "Description of Ballerina Cappuccina"
  },
  {
      "id": "bearorito-applepitolirotito",
      "name": "Bearorito Applepitolirotito",
      "imageUrl": "brainrot/bearorito-applepitolirotito.webp",
      "description": "Description of Bearorito Applepitolirotito"
  },
  {
      "id": "boneca-ambalabu",
      "name": "Boneca Ambalabu",
      "imageUrl": "brainrot/boneca-ambalabu.webp",
      "description": "Description of Boneca Ambalabu"
  },
  {
      "id": "cappuccino-assassino",
      "name": "Cappuccino Assassino",
      "imageUrl": "brainrot/cappuccino-assassino.webp",
      "description": "Description of Cappuccino Assassino"
  },
  {
      "id": "chimpanzini-bananini",
      "name": "Chimpanzini Bananini",
      "imageUrl": "brainrot/chimpanzini-bananini.webp",
      "description": "Description of Chimpanzini Bananini"
  },
  {
      "id": "crocodilo-potatino",
      "name": "Crocodilo Potatino",
      "imageUrl": "brainrot/crocodilo-potatino.webp",
      "description": "Description of Crocodilo Potatino"
  },
  {
      "id": "ecco-cavallo-virtuoso",
      "name": "Ecco Cavallo Virtuoso",
      "imageUrl": "brainrot/ecco-cavallo-virtuoso.webp",
      "description": "Description of Ecco Cavallo Virtuoso"
  },
  {
      "id": "glorbo-fruttodrillo",
      "name": "Glorbo Fruttodrillo",
      "imageUrl": "brainrot/glorbo-fruttodrillo.webp",
      "description": "Description of Glorbo Fruttodrillo"
  },
  {
      "id": "orangutini-ananasini",
      "name": "Orangutini Ananasini",
      "imageUrl": "brainrot/orangutini-ananasini.webp",
      "description": "Description of Orangutini Ananasini"
  },
  {
      "id": "piccione-macchina",
      "name": "Piccione Macchina",
      "imageUrl": "brainrot/piccione-macchina.webp",
      "description": "Description of Piccione Macchina"
  },
  {
      "id": "tric-trac-baraboom",
      "name": "Tric Trac baraboom",
      "imageUrl": "brainrot/tric-trac-baraboom.webp",
      "description": "Description of Tric Trac baraboom"
  },
  {
      "id": "trippi-troppi",
      "name": "Trippi Troppi",
      "imageUrl": "brainrot/trippi-troppi.webp",
      "description": "Description of Trippi Troppi"
  },
  {
      "id": "bombardiro-crocodillo",
      "name": "Bombardiro Crocodillo",
      "imageUrl": "brainrot/bombardiro-crocodillo.webp",
      "description": "Description of Bombardiro Crocodillo"
  },
  {
      "id": "tralalero-tralala",
      "name": "Tralalero Tralala",
      "imageUrl": "brainrot/tralalero-tralala.webp",
      "description": "Description of Tralalero Tralala"
  },
  {
      "id": "tung-tung-tung-sahur",
      "name": "Tung Tung Tung Sahur",
      "imageUrl": "brainrot/tung-tung-tung-sahur.webp",
      "description": "Description of Tung Tung Tung Sahur"
  }
]

export function getBrainrotById(id: string): BrainrotData | undefined {
  return brainrots.find(brainrot => brainrot.id === id);
}

export function getAllBrainrots(): BrainrotData[] {
  return [...brainrots];
} 