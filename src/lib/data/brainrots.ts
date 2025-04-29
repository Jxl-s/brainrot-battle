export interface BrainrotData {
	id: string;
	name: string;
	imageUrl: string;
	description: string;
}

export const brainrots: BrainrotData[] = [
	{
		id: 'brr-brr-patapim',
		name: 'Brr brr Patapim',
		imageUrl: 'brainrot/brr-brr-patapim.webp',
		description: 'He is secretly Elon Musk'
	},
	{
		id: 'liril-laril',
		name: 'Liril\u00ec Laril\u00e0',
		imageUrl: 'brainrot/liril-laril.webp',
		description: 'A cactus elephant wearing sandals'
	},
	{
		id: 'frigo-camelo',
		name: 'Frigo Camelo',
		imageUrl: 'brainrot/frigo-camelo.webp',
		description: 'The world is a very cold place for him'
	},
	{
		id: 'ballerina-cappuccina',
		name: 'Ballerina Cappuccina',
		imageUrl: 'brainrot/ballerina-cappuccina.webp',
		description: 'She loves music and dance'
	},
	{
		id: 'bearorito-applepitolirotito',
		name: 'Bearorito Applepitolirotito',
		imageUrl: 'brainrot/bearorito-applepitolirotito.webp',
		description: 'He does not know that he will die one day'
	},
	{
		id: 'boneca-ambalabu',
		name: 'Boneca Ambalabu',
		imageUrl: 'brainrot/boneca-ambalabu.webp',
		description: 'A threat to humanity, no one knows how to stop it'
	},
	{
		id: 'cappuccino-assassino',
		name: 'Cappuccino Assassino',
		imageUrl: 'brainrot/cappuccino-assassino.webp',
		description: 'An extremely fast and silent assasin'
	},
	{
		id: 'chimpanzini-bananini',
		name: 'Chimpanzini Bananini',
		imageUrl: 'brainrot/chimpanzini-bananini.webp',
		description: 'This is very yummy yummy'
	},
	{
		id: 'crocodilo-potatino',
		name: 'Crocodilo Potatino',
		imageUrl: 'brainrot/crocodilo-potatino.webp',
		description: 'A big ray of sunshine, who does not know he passed away'
	},
	{
		id: 'ecco-cavallo-virtuoso',
		name: 'Ecco Cavallo Virtuoso',
		imageUrl: 'brainrot/ecco-cavallo-virtuoso.webp',
		description: 'A criminal mastermind, who is also a horse'
	},
	{
		id: 'glorbo-fruttodrillo',
		name: 'Glorbo Fruttodrillo',
		imageUrl: 'brainrot/glorbo-fruttodrillo.webp',
		description: 'A big fat watermelon crocodile'
	},
	{
		id: 'orangutini-ananasini',
		name: 'Orangutini Ananasini',
		imageUrl: 'brainrot/orangutini-ananasini.webp',
		description: 'He likes living alone in the jungle'
	},
	{
		id: 'piccione-macchina',
		name: 'Piccione Macchina',
		imageUrl: 'brainrot/piccione-macchina.webp',
		description: 'The cybertruck pigeon of doom, controlled by Elon Musk'
	},
	{
		id: 'tric-trac-baraboom',
		name: 'Tric Trac baraboom',
		imageUrl: 'brainrot/tric-trac-baraboom.webp',
		description: 'Did you know it can fly'
	},
	{
		id: 'trippi-troppi',
		name: 'Trippi Troppi',
		imageUrl: 'brainrot/trippi-troppi.webp',
		description: 'The king in the water, that can morph into a cat'
	},
	{
		id: 'bombardiro-crocodillo',
		name: 'Bombardiro Crocodillo',
		imageUrl: 'brainrot/bombardiro-crocodillo.webp',
		description: 'It commited lots of war crimes'
	},
	{
		id: 'tralalero-tralala',
		name: 'Tralalero Tralala',
		imageUrl: 'brainrot/tralalero-tralala.webp',
		description: 'Insane jaw strength, can eat anything, and run super fast'
	},
	{
		id: 'tung-tung-tung-sahur',
		name: 'Tung Tung Tung Sahur',
		imageUrl: 'brainrot/tung-tung-tung-sahur.webp',
		description: 'A terrifying anomaly, do not call it three times'
	}
];

export function getBrainrotById(id: string): BrainrotData | undefined {
	return brainrots.find((brainrot) => brainrot.id === id);
}

export function getAllBrainrots(): BrainrotData[] {
	return [...brainrots];
}

