import type { LeaderboardEntry, User } from '../../types';

interface LeaderboardRowProps {
  entry: LeaderboardEntry;
  user: User;
  isCurrentUser?: boolean;
}

const rankColors: Record<number, string> = {
  1: '#D4A942',
  2: '#A8A8A8',
  3: '#CD7F32',
};

export function LeaderboardRow({ entry, user, isCurrentUser }: LeaderboardRowProps) {
  return (
    <div
      className={`mx-5 py-3 flex items-center gap-3 border-b border-cream-dark/60 last:border-b-0 ${
        isCurrentUser ? 'bg-coral/5 -mx-0 px-5 rounded-lg' : ''
      }`}
    >
      <span
        className="w-7 text-center font-bold text-base"
        style={{ color: rankColors[entry.rank] || undefined }}
      >
        {entry.rank}
      </span>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
        style={{ backgroundColor: user.avatarColor }}
      >
        {user.initial}
      </div>
      <span className={`flex-1 text-[15px] ${isCurrentUser ? 'font-bold' : 'font-medium'}`}>
        {user.name}
        {isCurrentUser && <span className="text-charcoal-light text-xs ml-1">(you)</span>}
      </span>
      <span className="text-sm text-charcoal-light">{entry.score} pts</span>
    </div>
  );
}
