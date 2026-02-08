import type { DailyPuzzle, Game } from '../../types';
import { GameIcon } from '../shared/GameIcon';
import { FriendAvatars } from './FriendAvatars';

interface PuzzleListItemProps {
  puzzle: DailyPuzzle;
  game: Game;
}

export function PuzzleListItem({ puzzle, game }: PuzzleListItemProps) {
  const statusLine = puzzle.status === 'completed'
    ? `Completed${puzzle.completionTime ? ` · ${puzzle.completionTime}` : ''}${puzzle.completionDetail ? ` · ${puzzle.completionDetail}` : ''}`
    : puzzle.status === 'in-progress'
      ? puzzle.difficulty || 'In progress'
      : puzzle.difficulty || '';

  return (
    <div className="mx-5 py-3.5 flex items-center gap-3.5 border-b border-cream-dark/60 last:border-b-0">
      <GameIcon game={game} />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[15px]">{game.name}</p>
        <p className="text-[13px] text-charcoal-light truncate">{statusLine}</p>
        <FriendAvatars activity={puzzle.friendActivity} />
      </div>
      {puzzle.status === 'completed' ? (
        <button className="shrink-0 px-4 py-2 text-[13px] font-semibold text-charcoal-light border border-cream-dark rounded-full">
          ✓ Done
        </button>
      ) : puzzle.status === 'in-progress' ? (
        <button className="shrink-0 px-4 py-2 text-[13px] font-semibold text-white bg-charcoal rounded-full">
          Continue
        </button>
      ) : (
        <button className="shrink-0 px-5 py-2 text-[13px] font-semibold text-white bg-charcoal rounded-full">
          Play
        </button>
      )}
    </div>
  );
}
