import { leaderboard, friendRequests, activityFeed } from '../data/social';
import { friends, currentUser } from '../data/user';
import { games } from '../data/games';
import { SectionHeader } from '../components/shared/SectionHeader';
import { LeaderboardRow } from '../components/social/LeaderboardRow';
import { FriendActivityItem } from '../components/social/FriendActivityItem';
import { FriendRequestCard } from '../components/social/FriendRequestCard';
import type { User } from '../types';

export function SocialPage() {
  const allUsers: Record<string, User> = {
    ...friends,
    [currentUser.id]: currentUser,
  };

  return (
    <div className="pt-2 pb-4">
      {friendRequests.length > 0 && (
        <>
          <SectionHeader title="Friend Requests" showSeeAll={false} />
          <div className="mt-2">
            {friendRequests.map((req) => {
              const user = friends[req.fromUserId];
              if (!user) return null;
              return (
                <FriendRequestCard
                  key={req.fromUserId}
                  request={req}
                  user={user}
                />
              );
            })}
          </div>
        </>
      )}

      <SectionHeader title="Leaderboard" subtitle="This Week" showSeeAll={false} />
      <div className="mt-1">
        {leaderboard.map((entry) => {
          const user = allUsers[entry.userId];
          if (!user) return null;
          return (
            <LeaderboardRow
              key={entry.userId}
              entry={entry}
              user={user}
              isCurrentUser={entry.userId === currentUser.id}
            />
          );
        })}
      </div>

      <SectionHeader title="Friend Activity" showSeeAll={false} />
      <div className="mt-1">
        {activityFeed.map((item) => {
          const user = friends[item.userId];
          if (!user) return null;
          return (
            <FriendActivityItem
              key={item.id}
              item={item}
              user={user}
              game={games[item.gameId]}
            />
          );
        })}
      </div>
    </div>
  );
}
