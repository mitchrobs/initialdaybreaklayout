import type { GameEvent } from '../../types';
import { games } from '../../data/games';
import { GameIcon } from '../shared/GameIcon';

interface EventCardProps {
  event: GameEvent;
}

export function EventCard({ event }: EventCardProps) {
  const game = event.gameId ? games[event.gameId] : null;

  return (
    <div className="mx-5 mb-3 bg-surface rounded-2xl shadow-card p-4">
      <div className="flex items-start gap-3">
        {game && <GameIcon game={game} size="sm" />}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-[15px]">{event.title}</h3>
            {event.isActive && (
              <span className="shrink-0 text-[11px] font-semibold text-coral bg-coral/10 px-2.5 py-0.5 rounded-full">
                Live
              </span>
            )}
          </div>
          <p className="text-[13px] text-charcoal-light mt-0.5">
            {event.description}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[12px] text-charcoal-light">
              {event.participants.toLocaleString()} playing
            </span>
            {event.prize && (
              <span className="text-[12px] text-charcoal-light">
                🏆 {event.prize}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
