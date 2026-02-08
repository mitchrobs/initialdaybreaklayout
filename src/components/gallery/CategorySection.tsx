import type { Category, Game } from '../../types';
import { SectionHeader } from '../shared/SectionHeader';
import { GameCard } from './GameCard';

interface CategorySectionProps {
  category: Category;
  games: Game[];
}

export function CategorySection({ category, games }: CategorySectionProps) {
  return (
    <section>
      <SectionHeader title={category.title} subtitle={category.subtitle} />
      <div className="flex gap-3.5 overflow-x-auto scrollbar-hide snap-x px-5 pb-2 mt-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
