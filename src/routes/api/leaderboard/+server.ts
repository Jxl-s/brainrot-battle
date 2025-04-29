import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getLeaderboard } from '$lib/server/db';
import { getBrainrotById } from '$lib/data/brainrots';

export const GET: RequestHandler = async () => {
	try {
		const records = await getLeaderboard();
		
		// Combine database records with brainrot data
		const leaderboard = records.map(record => {
			const brainrot = getBrainrotById(record.brainrotId);
			
			return {
				id: record.brainrotId,
				url: brainrot?.imageUrl || '',
				name: brainrot?.name || 'Unknown',
				description: brainrot?.description || '',
				elo: record.elo,
				rank: record.rank
			};
		});
		
		return json(leaderboard);
	} catch (error) {
		console.error('Error fetching leaderboard:', error);
		return json({ error: 'Failed to fetch leaderboard' }, { status: 500 });
	}
}; 