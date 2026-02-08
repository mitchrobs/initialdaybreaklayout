export interface Game {
  id: string;
  name: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  categoryId: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  gameIds: string[];
}

export type PuzzleStatus = 'completed' | 'in-progress' | 'not-started';

export interface DailyPuzzle {
  gameId: string;
  status: PuzzleStatus;
  difficulty?: string;
  completionTime?: string;
  completionDetail?: string;
  friendActivity: FriendActivity[];
}

export interface FriendActivity {
  friendId: string;
  detail?: string;
}

export interface User {
  id: string;
  name: string;
  avatarColor: string;
  initial: string;
}

export interface UserProfile extends User {
  streak: number;
  gamesPlayed: number;
  joinDate: string;
}

export type EventType = 'daily-challenge' | 'weekly-tournament' | 'community';

export interface GameEvent {
  id: string;
  title: string;
  description: string;
  type: EventType;
  gameId?: string;
  startDate: string;
  endDate: string;
  participants: number;
  isActive: boolean;
  prize?: string;
}

export interface LeaderboardEntry {
  userId: string;
  rank: number;
  score: number;
  gamesCompleted: number;
}

export interface FriendRequest {
  fromUserId: string;
  timestamp: string;
}

export interface ActivityFeedItem {
  id: string;
  userId: string;
  action: string;
  timestamp: string;
  gameId: string;
}
