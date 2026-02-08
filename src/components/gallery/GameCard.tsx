import type { Game } from '../../types';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div
      className="min-w-[150px] w-[150px] h-[200px] rounded-2xl shadow-card flex flex-col items-center justify-end p-4 snap-start cursor-pointer active:scale-[0.97] transition-transform"
      style={{
        background: `linear-gradient(145deg, ${game.gradientFrom}, ${game.gradientTo})`,
      }}
    >
      <span className="text-4xl mb-2 drop-shadow-md">{game.icon}</span>
      <span className="text-white font-semibold text-sm text-center leading-tight">
        {game.name}
      </span>
    </div>
  );
}
