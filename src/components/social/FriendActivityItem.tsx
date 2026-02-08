import type { ActivityFeedItem, User, Game } from '../../types';
import { GameIcon } from '../shared/GameIcon';

interface FriendActivityItemProps {
  item: ActivityFeedItem;
  user: User;
  game?: Game;
}

export function FriendActivityItem({ item, user, game }: FriendActivityItemProps) {
  return (
    <div className="mx-5 py-3 flex items-center gap-3 border-b border-cream-dark/60 last:border-b-0">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
        style={{ backgroundColor: user.avatarColor }}
      >
        {user.initial}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[14px]">
          <span className="font-semibold">{user.name}</span>{' '}
          <span className="text-charcoal-light">{item.action}</span>
        </p>
        <p className="text-[11px] text-charcoal-light mt-0.5">{item.timestamp}</p>
      </div>
      {game && <GameIcon game={game} size="sm" />}
    </div>
  );
}
