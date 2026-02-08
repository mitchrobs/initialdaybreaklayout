import type { FriendRequest, User } from '../../types';

interface FriendRequestCardProps {
  request: FriendRequest;
  user: User;
}

export function FriendRequestCard({ request, user }: FriendRequestCardProps) {
  return (
    <div className="mx-5 mb-2.5 bg-surface rounded-2xl shadow-card p-4 flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
        style={{ backgroundColor: user.avatarColor }}
      >
        {user.initial}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[15px]">{user.name}</p>
        <p className="text-[12px] text-charcoal-light">{request.timestamp}</p>
      </div>
      <div className="flex gap-2 shrink-0">
        <button className="px-4 py-2 text-[13px] font-semibold text-white bg-coral rounded-full active:scale-[0.97] transition-transform">
          Accept
        </button>
        <button className="px-3 py-2 text-[13px] font-semibold text-charcoal-light border border-cream-dark rounded-full">
          Decline
        </button>
      </div>
    </div>
  );
}
