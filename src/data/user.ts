import type { User, UserProfile } from '../types';

export const currentUser: UserProfile = {
  id: 'teddy',
  name: 'Teddy',
  avatarColor: '#C9514B',
  initial: 'T',
  streak: 12,
  gamesPlayed: 247,
  joinDate: 'October 2024',
};

export const friends: Record<string, User> = {
  sara: { id: 'sara', name: 'Sara', avatarColor: '#4AAF6E', initial: 'S' },
  alex: { id: 'alex', name: 'Alex', avatarColor: '#E8983E', initial: 'A' },
  maya: { id: 'maya', name: 'Maya', avatarColor: '#C9514B', initial: 'M' },
  jordan: { id: 'jordan', name: 'Jordan', avatarColor: '#3A6BB5', initial: 'J' },
  riley: { id: 'riley', name: 'Riley', avatarColor: '#7B4F9E', initial: 'R' },
  sam: { id: 'sam', name: 'Sam', avatarColor: '#3AAFA9', initial: 'S' },
  casey: { id: 'casey', name: 'Casey', avatarColor: '#5C3D3D', initial: 'C' },
  morgan: { id: 'morgan', name: 'Morgan', avatarColor: '#E8983E', initial: 'M' },
};
