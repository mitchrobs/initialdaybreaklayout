import type { Group } from '../types';

export const groups: Group[] = [
  {
    id: 'office-trivia',
    name: 'Office Trivia Club',
    emoji: '🏢',
    memberCount: 12,
    currentUserRank: 3,
    members: [
      { id: 'teddy', name: 'Teddy', avatarColor: '#4AAF6E', initial: 'ME' },
      { id: 'alex', name: 'Alex', avatarColor: '#E8983E', initial: 'AX' },
      { id: 'sara', name: 'Sara', avatarColor: '#C9514B', initial: 'SK' },
      { id: 'jordan', name: 'Jordan', avatarColor: '#3A6BB5', initial: 'JR' },
      { id: 'lm', name: 'Liam', avatarColor: '#7B4F9E', initial: 'LM' },
    ],
    stats: { puzzles: 847, avgStreak: '8d', donated: 412 },
  },
  {
    id: 'family-challenge',
    name: 'Family Challenge',
    emoji: '🏠',
    memberCount: 6,
    currentUserRank: 1,
    members: [
      { id: 'teddy', name: 'Teddy', avatarColor: '#4AAF6E', initial: 'ME' },
      { id: 'mk', name: 'Mike', avatarColor: '#E8983E', initial: 'MK' },
      { id: 'em', name: 'Emma', avatarColor: '#4AAF6E', initial: 'EM' },
      { id: 'dn', name: 'Dana', avatarColor: '#C9514B', initial: 'DN' },
    ],
    stats: { puzzles: 234, avgStreak: '5d', donated: 189 },
  },
  {
    id: 'puzzle-masters',
    name: 'Puzzle Masters',
    emoji: '🧩',
    memberCount: 48,
    currentUserRank: 17,
    members: [
      { id: 'teddy', name: 'Teddy', avatarColor: '#4AAF6E', initial: 'ME' },
      { id: 'pp', name: 'Piper', avatarColor: '#C9514B', initial: 'PP' },
      { id: 'bb', name: 'Blake', avatarColor: '#3A6BB5', initial: 'BB' },
      { id: 'tk', name: 'Taka', avatarColor: '#E8983E', initial: 'TK' },
      { id: 'wn', name: 'Wren', avatarColor: '#7B4F9E', initial: 'WN' },
    ],
    stats: { puzzles: 5291, avgStreak: '11d', donated: 2840 },
  },
];
