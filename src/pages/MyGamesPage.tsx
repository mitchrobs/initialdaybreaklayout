import { dailyPuzzles } from '../data/dailyPuzzles';
import { games } from '../data/games';
import { currentUser } from '../data/user';
import { SlideToPlayButton } from '../components/mygames/SlideToPlayButton';
import { StreakTracker } from '../components/mygames/StreakTracker';
import { PuzzleListItem } from '../components/mygames/PuzzleListItem';
import { SectionHeader } from '../components/shared/SectionHeader';

export function MyGamesPage() {
  return (
    <div className="pt-2 pb-4">
      <SlideToPlayButton />
      <StreakTracker streak={currentUser.streak} />
      <SectionHeader title="Today's Puzzles" showSeeAll={false} />
      <div className="mt-1">
        {dailyPuzzles.map((puzzle) => {
          const game = games[puzzle.gameId];
          if (!game) return null;
          return (
            <PuzzleListItem key={puzzle.gameId} puzzle={puzzle} game={game} />
          );
        })}
      </div>
    </div>
  );
}
