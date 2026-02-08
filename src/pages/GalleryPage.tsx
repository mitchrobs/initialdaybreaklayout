import { categories } from '../data/categories';
import { games } from '../data/games';
import { CategorySection } from '../components/gallery/CategorySection';

export function GalleryPage() {
  return (
    <div className="pt-2 pb-4">
      {categories.map((category) => {
        const categoryGames = category.gameIds
          .map((id) => games[id])
          .filter(Boolean);
        return (
          <CategorySection
            key={category.id}
            category={category}
            games={categoryGames}
          />
        );
      })}
    </div>
  );
}
