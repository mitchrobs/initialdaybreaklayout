import type { Group } from '../../types';

interface GroupCardProps {
  group: Group;
}

export function GroupCard({ group }: GroupCardProps) {
  const displayedMembers = group.members.slice(0, 5);
  const remaining = group.memberCount - displayedMembers.length;

  return (
    <div className="mx-5 mb-3 bg-surface rounded-2xl shadow-card p-5">
      <div className="flex items-start justify-between mb-1">
        <div>
          <h3 className="font-display text-lg font-bold">
            <span className="mr-1.5">{group.emoji}</span>
            {group.name}
          </h3>
          <p className="text-[13px] text-charcoal-light">{group.memberCount} members</p>
        </div>
        <span className="text-[12px] font-mono font-semibold text-game-green-to bg-game-green-from/10 px-2.5 py-1 rounded-lg">
          #{group.currentUserRank} of {group.memberCount}
        </span>
      </div>

      <div className="flex items-center mt-3 mb-4">
        <div className="flex -space-x-1.5">
          {displayedMembers.map((member) => (
            <div
              key={member.id}
              className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] text-white font-bold border-2 border-surface"
              style={{ backgroundColor: member.avatarColor }}
            >
              {member.initial}
            </div>
          ))}
        </div>
        {remaining > 0 && (
          <span className="ml-1.5 text-[12px] text-charcoal-light font-medium">
            +{remaining}
          </span>
        )}
      </div>

      <div className="border-t border-cream-dark/60 pt-4">
        <div className="grid grid-cols-3 text-center">
          <div>
            <p className="text-lg font-bold text-game-green-from">
              {group.stats.puzzles.toLocaleString()}
            </p>
            <p className="text-[12px] text-charcoal-light">Puzzles</p>
          </div>
          <div>
            <p className="text-lg font-bold text-charcoal">
              {group.stats.avgStreak}
            </p>
            <p className="text-[12px] text-charcoal-light">Avg Streak</p>
          </div>
          <div>
            <p className="text-lg font-bold text-coral">
              ${group.stats.donated.toLocaleString()}
            </p>
            <p className="text-[12px] text-charcoal-light">Donated</p>
          </div>
        </div>
      </div>
    </div>
  );
}
