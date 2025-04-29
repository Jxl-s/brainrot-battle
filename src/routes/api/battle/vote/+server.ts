import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { recordBattleResult, getBattleById, deleteBattle } from '$lib/server/db';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { battleId, winningSide } = await request.json();

        if (!battleId || !winningSide) {
            return json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Validate winning side is either 'left' or 'right'
        if (winningSide !== 'left' && winningSide !== 'right') {
            return json({ error: 'Invalid winning side' }, { status: 400 });
        }

        // Retrieve the battle from the database
        const battle = await getBattleById(battleId);
        
        if (!battle) {
            return json({ error: 'Battle not found' }, { status: 404 });
        }

        // Determine winner and loser IDs based on the winning side
        const winnerId = winningSide === 'left' ? battle.leftId : battle.rightId;
        const loserId = winningSide === 'left' ? battle.rightId : battle.leftId;

        // Record the battle result
        await recordBattleResult(winnerId, loserId);

		// delete the battle
		await deleteBattle(battleId);
        return json({ success: true });
    } catch (error) {
        console.error('Error submitting vote:', error);
        return json({ error: 'Failed to submit vote' }, { status: 500 });
    }
};