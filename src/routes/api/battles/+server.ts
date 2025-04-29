import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Temporary mock data
const mockBattles = [
  {
    id: '1',
    left: {
      id: 'left1',
      url: 'https://picsum.photos/400/400?random=1',
      name: 'Brainrot 1',
      description: 'A cool brainrot',
      elo: 1200
    },
    right: {
      id: 'right1',
      url: 'https://picsum.photos/400/400?random=2',
      name: 'Brainrot 2',
      description: 'Another cool brainrot',
      elo: 1200
    }
  }
];

export const GET: RequestHandler = async () => {
  return json(mockBattles);
}; 