import { leaderboard, activityFeed } from '../data/social';
import { groups } from '../data/groups';
import { friends, currentUser } from '../data/user';
import { games } from '../data/games';
import { SectionHeader } from '../components/shared/SectionHeader';
import { GroupCard } from '../components/social/GroupCard';
import { CreateGroupButton } from '../components/social/CreateGroupButton';
import { LeaderboardRow } from '../components/social/LeaderboardRow';
import { FriendActivityItem } from '../components/social/FriendActivityItem';
import type { User } from '../types';

export function SocialPage() {
  const allUsers: Record<string, User> = {
    ...friends,
    [currentUser.id]: currentUser,
  };

  return (
    <div className="pt-2 pb-4">
      <SectionHeader title="🎯 Your Groups" showSeeAll={false} />
      <div className="mt-3">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
        <CreateGroupButton />
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
    </div>
  );
}
