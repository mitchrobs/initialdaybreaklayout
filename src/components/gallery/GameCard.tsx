import type { Game } from '../../types';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <div
      className="min-w-[140px] w-[140px] h-[140px] rounded-xl shadow-card flex items-end p-3.5 snap-start cursor-pointer active:scale-[0.97] transition-transform relative overflow-hidden"
      style={{
        background: `linear-gradient(145deg, ${game.gradientFrom}, ${game.gradientTo})`,
      }}
    >
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }} />
      <span className="relative text-white font-semibold text-[14px] leading-tight">
        {game.name}
      </span>
    </div>
  );
}
