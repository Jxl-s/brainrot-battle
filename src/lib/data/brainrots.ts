export interface BrainrotData {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

export const brainrots: BrainrotData[] = [
  {
    id: 'prr-prr-patapim',
    name: 'Prr Prr Patapim',
    imageUrl: '/brainrot/prr-prr-patapim.jpg',
    description: 'A sleepy guy with a dreamy expression.'
  },
  {
    id: 'ballerina-cappucina',
    name: 'Ballerina Cappucina',
    imageUrl: '/brainrot/ballerina-cappucina.jpg',
    description: 'A graceful dancer in a coffee-colored tutu.'
  },
  {
    id: 'chimpanzini-bananini',
    name: 'Chimpanzini Bananini',
    imageUrl: '/brainrot/chimpanzini-bananini.jpg',
    description: 'A playful monkey enjoying a banana treat.'
  },
  {
    id: 'tralalero-tralala',
    name: 'Tralalero Tralala',
    imageUrl: '/brainrot/tralalero-tralala.jpg',
    description: 'A shark with sneakers'
  },
  {
    id: 'tung-tung-sahur',
    name: 'Tung Tung Tung Sahur',
    imageUrl: '/brainrot/tung-tung-sahur.jpg',
    description: 'A mysterious figure with a rhythmic presence.'
  },
  {
    id: 'bombardilo-crocodilo',
    name: 'Bombardilo Crocodilo',
    imageUrl: '/brainrot/bombardilo-crocodilo.jpg',
    description: 'A fierce crocodile with an explosive personality.'
  },
  {
    id: "lirili-larila",
    name: "Lirili Larila",
    imageUrl: "/brainrot/lirili-larila.jpg",
    description: "Prr Prr Patapim's #1 opp"
  }
];

export function getBrainrotById(id: string): BrainrotData | undefined {
  return brainrots.find(brainrot => brainrot.id === id);
}

export function getAllBrainrots(): BrainrotData[] {
  return [...brainrots];
} 