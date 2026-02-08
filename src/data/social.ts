import type { LeaderboardEntry, FriendRequest, ActivityFeedItem } from '../types';

export const leaderboard: LeaderboardEntry[] = [
  { userId: 'sara', rank: 1, score: 2840, gamesCompleted: 42 },
  { userId: 'teddy', rank: 2, score: 2715, gamesCompleted: 38 },
  { userId: 'alex', rank: 3, score: 2590, gamesCompleted: 35 },
  { userId: 'jordan', rank: 4, score: 2410, gamesCompleted: 33 },
  { userId: 'maya', rank: 5, score: 2285, gamesCompleted: 30 },
  { userId: 'riley', rank: 6, score: 2100, gamesCompleted: 28 },
  { userId: 'sam', rank: 7, score: 1955, gamesCompleted: 25 },
];

export const friendRequests: FriendRequest[] = [
  { fromUserId: 'casey', timestamp: '2 hours ago' },
  { fromUserId: 'morgan', timestamp: '1 day ago' },
];

export const activityFeed: ActivityFeedItem[] = [
  {
    id: '1',
    userId: 'sara',
    action: 'completed Kakuro in 3:45',
    timestamp: '15 min ago',
    gameId: 'kakuro',
  },
  {
    id: '2',
    userId: 'alex',
    action: 'solved today\'s Whodunit',
    timestamp: '32 min ago',
    gameId: 'whodunit',
  },
  {
    id: '3',
    userId: 'jordan',
    action: 'started a Nonogram streak',
    timestamp: '1 hr ago',
    gameId: 'nonogram',
  },
  {
    id: '4',
    userId: 'maya',
    action: 'finished Map Detective: Europe',
    timestamp: '2 hrs ago',
    gameId: 'mapdetective',
  },
  {
    id: '5',
    userId: 'riley',
    action: 'beat the Speed Crossword record',
    timestamp: '3 hrs ago',
    gameId: 'crossword',
  },
  {
    id: '6',
    userId: 'sam',
    action: 'joined the Valentine Mystery event',
    timestamp: '5 hrs ago',
    gameId: 'whodunit',
  },
];
