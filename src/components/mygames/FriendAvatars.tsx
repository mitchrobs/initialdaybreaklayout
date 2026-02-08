import type { FriendActivity } from '../../types';
import { friends } from '../../data/user';

interface FriendAvatarsProps {
  activity: FriendActivity[];
}

export function FriendAvatars({ activity }: FriendAvatarsProps) {
  if (activity.length === 0) return null;

  const displayed = activity.slice(0, 3);
  const remaining = activity.length - displayed.length;
  const detail = activity[0]?.detail;

  const names = displayed.map((a) => friends[a.friendId]?.name).filter(Boolean);
  let label = '';
  if (names.length === 1 && remaining === 0) {
    label = `${names[0]} played`;
  } else if (names.length === 1 && remaining > 0) {
    label = `${names[0]} & ${remaining} more played`;
  } else if (remaining > 0) {
    label = `${names[0]} & ${names.length - 1 + remaining} friends played`;
  } else {
    label = `${names.join(', ')} played`;
  }

  return (
    <div className="flex items-center gap-1.5 mt-1">
      <div className="flex -space-x-1.5">
        {displayed.map((a) => {
          const friend = friends[a.friendId];
          if (!friend) return null;
          return (
            <div
              key={friend.id}
              className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] text-white font-bold border-2 border-cream"
              style={{ backgroundColor: friend.avatarColor }}
            >
              {friend.initial}
            </div>
          );
        })}
      </div>
      <span className="text-[11px] text-charcoal-light">
        {detail || label}
      </span>
    </div>
  );
}
