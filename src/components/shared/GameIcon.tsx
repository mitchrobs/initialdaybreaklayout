import type { Game } from '../../types';

interface GameIconProps {
  game: Game;
  size?: 'sm' | 'lg';
}

export function GameIcon({ game, size = 'lg' }: GameIconProps) {
  const sizeClass = size === 'lg' ? 'w-[52px] h-[52px] text-2xl rounded-xl' : 'w-8 h-8 text-base rounded-lg';

  return (
    <div
      className={`${sizeClass} flex items-center justify-center shrink-0`}
      style={{
        background: `linear-gradient(135deg, ${game.gradientFrom}, ${game.gradientTo})`,
      }}
    >
      <span className="drop-shadow-sm">{game.icon}</span>
    </div>
  );
}
