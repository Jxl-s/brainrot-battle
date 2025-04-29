import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { recordBattleResult } from '$lib/server/db';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { leftId, rightId, winnerId } = await request.json();

		if (!leftId || !rightId || !winnerId) {
			return json({ error: 'Missing required fields' }, { status: 400 });
		}

		// Determine the loser ID
		const loserId = winnerId === leftId ? rightId : leftId;

		// Record the battle result
		await recordBattleResult(winnerId, loserId);

		return json({ success: true });
	} catch (error) {
		console.error('Error submitting vote:', error);
		return json({ error: 'Failed to submit vote' }, { status: 500 });
	}
}; 