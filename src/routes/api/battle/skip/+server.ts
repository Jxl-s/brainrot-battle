import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { deleteBattle } from '$lib/server/db';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { battleId } = await request.json();
        if (!battleId) {
            return json({ error: 'Missing required fields' }, { status: 400 });
        }

        await deleteBattle(battleId);
        return json({ success: true });
    } catch (error) {
        console.error('Error deleting battle:', error);
        return json({ error: 'Failed to delete battle' }, { status: 500 });
    }
};