import { MongoClient, ObjectId } from 'mongodb';
import { getBrainrotById, getAllBrainrots } from '../data/brainrots';
import { MONGODB_URI } from '$env/static/private';

// Use environment variable for MongoDB URI or default to localhost
const DB_NAME = 'brainrot-battle';

let client: MongoClient;

export async function connectToDatabase() {
	if (!client) {
		client = new MongoClient(MONGODB_URI);
		await client.connect();
	}
	return client.db(DB_NAME);
}

export interface BrainrotRecord {
	_id: ObjectId;
	brainrotId: string;
	elo: number;
	battles: number;
	wins: number;
	losses: number;
	updatedAt: Date;
}

// ELO calculation constants
const K_FACTOR = 32;
const INITIAL_ELO = 1500;

export async function calculateNewRatings(winnerElo: number, loserElo: number) {
	const expectedWinner = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
	const expectedLoser = 1 / (1 + Math.pow(10, (winnerElo - loserElo) / 400));

	const newWinnerElo = Math.round(winnerElo + K_FACTOR * (1 - expectedWinner));
	const newLoserElo = Math.round(loserElo + K_FACTOR * (0 - expectedLoser));

	return {
		winnerElo: newWinnerElo,
		loserElo: newLoserElo
	};
}

export async function getOrCreateBrainrotRecord(brainrotId: string): Promise<BrainrotRecord> {
	const db = await connectToDatabase();
	
	// Check if the brainrot already exists in the database
	const existingRecord = await db.collection('brainrots').findOne({ brainrotId });
	
	if (existingRecord) {
		return existingRecord as BrainrotRecord;
	}
	
	// Create a new record if it doesn't exist
	const brainrot: Omit<BrainrotRecord, '_id'> = {
		brainrotId,
		elo: INITIAL_ELO,
		battles: 0,
		wins: 0,
		losses: 0,
		updatedAt: new Date()
	};

	const result = await db.collection('brainrots').insertOne(brainrot);
	return { ...brainrot, _id: result.insertedId };
}

export async function getRandomPair(): Promise<{ left: string; right: string } | null> {
	// Get all brainrots from our data file
	const allBrainrots = getAllBrainrots();
	
	if (allBrainrots.length < 2) return null;
	
	// Get two random brainrots
	const shuffled = [...allBrainrots].sort(() => 0.5 - Math.random());
	
	return {
		left: shuffled[0].id,
		right: shuffled[1].id
	};
}

export async function recordBattleResult(winnerId: string, loserId: string): Promise<void> {
	// Get the winner and loser records
	const winner = await getOrCreateBrainrotRecord(winnerId);
	const loser = await getOrCreateBrainrotRecord(loserId);

	// Calculate new ELO ratings
	const { winnerElo, loserElo } = await calculateNewRatings(winner.elo, loser.elo);

	const db = await connectToDatabase();

	// Update the winner record
	await db.collection('brainrots').updateOne(
		{ _id: winner._id },
		{
			$set: {
				elo: winnerElo,
				updatedAt: new Date()
			},
			$inc: {
				battles: 1,
				wins: 1
			}
		}
	);

	// Update the loser record
	await db.collection('brainrots').updateOne(
		{ _id: loser._id },
		{
			$set: {
				elo: loserElo,
				updatedAt: new Date()
			},
			$inc: {
				battles: 1,
				losses: 1
			}
		}
	);
}

export async function getLeaderboard(limit = 100): Promise<{ brainrotId: string; elo: number; rank: number }[]> {
	const db = await connectToDatabase();
	const records = await db
		.collection('brainrots')
		.find({})
		.sort({ elo: -1 })
		.limit(limit)
		.toArray();
	
	// Add rank to each record
	return records.map((record, index) => ({
		brainrotId: record.brainrotId,
		elo: record.elo,
		rank: index + 1
	}));
} 