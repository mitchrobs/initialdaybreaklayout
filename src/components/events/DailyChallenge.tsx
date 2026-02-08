import type { GameEvent } from '../../types';
import { games } from '../../data/games';

interface DailyChallengeProps {
  event: GameEvent;
}

export function DailyChallenge({ event }: DailyChallengeProps) {
  const game = event.gameId ? games[event.gameId] : null;

  return (
    <div
      className="mx-5 mt-2 rounded-2xl p-5 text-white relative overflow-hidden"
      style={{
        background: game
          ? `linear-gradient(135deg, ${game.gradientFrom}, ${game.gradientTo})`
          : 'linear-gradient(135deg, #C9514B, #9B3B32)',
      }}
    >
      <div className="relative z-10">
        <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">
          Daily Challenge
        </p>
        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
        <p className="text-white/80 text-sm mb-4">{event.description}</p>
        <div className="flex items-center justify-between">
          <button className="bg-white text-charcoal px-5 py-2.5 rounded-full text-sm font-semibold active:scale-[0.97] transition-transform">
            Play Now
          </button>
          <span className="text-white/60 text-xs">
            {event.participants.toLocaleString()} playing
          </span>
        </div>
      </div>
    </div>
  );
}
