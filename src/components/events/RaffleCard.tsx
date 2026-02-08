import type { GameEvent } from '../../types';

interface RaffleCardProps {
  event: GameEvent;
}

export function RaffleCard({ event }: RaffleCardProps) {
  const progress = event.goalAmount
    ? Math.min((event.amountRaised || 0) / event.goalAmount * 100, 100)
    : 0;

  return (
    <div className="mx-5 mb-3 bg-surface rounded-2xl shadow-card overflow-hidden">
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-[15px]">{event.title}</h3>
          {event.isActive && (
            <span className="shrink-0 text-[11px] font-semibold text-game-green-to bg-game-green-from/10 px-2.5 py-0.5 rounded-full">
              Active
            </span>
          )}
        </div>
        <p className="text-[13px] text-charcoal-light">{event.description}</p>

        {event.charityName && (
          <p className="text-[12px] text-charcoal-light mt-2">
            ❤️ Benefiting <span className="font-medium text-charcoal">{event.charityName}</span>
          </p>
        )}

        <div className="flex items-baseline gap-4 mt-3">
          <div>
            <span className="text-lg font-bold text-game-green-from">
              ${(event.amountRaised || 0).toLocaleString()}
            </span>
            <span className="text-[12px] text-charcoal-light ml-1">raised</span>
          </div>
          {event.goalAmount && (
            <span className="text-[12px] text-charcoal-light">
              of ${event.goalAmount.toLocaleString()} goal
            </span>
          )}
        </div>

        {event.goalAmount && (
          <div className="mt-2.5 h-2 bg-cream-dark rounded-full overflow-hidden">
            <div
              className="h-full bg-game-green-from rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        <div className="flex items-center justify-between mt-3">
          <span className="text-[12px] text-charcoal-light">
            {event.participants.toLocaleString()} participants
            {event.ticketCost ? ` · $${event.ticketCost}/ticket` : ' · Free to enter'}
          </span>
          <button className="px-4 py-2 text-[13px] font-semibold text-white bg-coral rounded-full active:scale-[0.97] transition-transform">
            Enter Raffle
          </button>
        </div>
      </div>
    </div>
  );
}
