import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getRandomPair, getOrCreateBrainrotRecord } from '$lib/server/db';
import { getBrainrotById } from '$lib/data/brainrots';

export const GET: RequestHandler = async () => {
	try {
		const pair = await getRandomPair();
		if (!pair) {
			return json({ error: 'No brainrots available' }, { status: 404 });
		}

		// Get the brainrot data from our data file
		const leftBrainrot = getBrainrotById(pair.left);
		const rightBrainrot = getBrainrotById(pair.right);

		if (!leftBrainrot || !rightBrainrot) {
			return json({ error: 'Brainrot data not found' }, { status: 404 });
		}

		// Get the ELO ratings from the database
		const leftRecord = await getOrCreateBrainrotRecord(pair.left);
		const rightRecord = await getOrCreateBrainrotRecord(pair.right);

		return json({
			left: {
				id: leftBrainrot.id,
				url: leftBrainrot.imageUrl,
				name: leftBrainrot.name,
				description: leftBrainrot.description,
				elo: leftRecord.elo
			},
			right: {
				id: rightBrainrot.id,
				url: rightBrainrot.imageUrl,
				name: rightBrainrot.name,
				description: rightBrainrot.description,
				elo: rightRecord.elo
			}
		});
	} catch (error) {
		console.error('Error creating battle:', error);
		return json({ error: 'Failed to create battle' }, { status: 500 });
	}
}; 