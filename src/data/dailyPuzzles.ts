import type { DailyPuzzle } from '../types';

export const dailyPuzzles: DailyPuzzle[] = [
  {
    gameId: 'kakuro',
    status: 'completed',
    completionTime: '4:32',
    completionDetail: 'no mistakes',
    friendActivity: [
      { friendId: 'sara' },
      { friendId: 'alex' },
      { friendId: 'maya' },
    ],
  },
  {
    gameId: 'whodunit',
    status: 'completed',
    completionDetail: 'Solved in 4 clues',
    friendActivity: [
      { friendId: 'alex', detail: 'needed 6 clues' },
    ],
  },
  {
    gameId: 'nonogram',
    status: 'not-started',
    difficulty: '10×10 · Medium difficulty',
    friendActivity: [
      { friendId: 'sara' },
      { friendId: 'jordan' },
      { friendId: 'maya' },
      { friendId: 'riley' },
    ],
  },
  {
    gameId: 'mapdetective',
    status: 'not-started',
    difficulty: 'Europe · 4 rounds',
    friendActivity: [],
  },
  {
    gameId: 'crossword',
    status: 'in-progress',
    difficulty: '15×15 · Thursday',
    friendActivity: [
      { friendId: 'sara', detail: 'finished in 12:04' },
    ],
  },
];
