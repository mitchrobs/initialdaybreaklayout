interface StreakTrackerProps {
  streak: number;
}

export function StreakTracker({ streak }: StreakTrackerProps) {
  const totalDots = 7;
  const filledDots = streak % totalDots || totalDots;

  return (
    <div className="mx-5 mt-4 mb-2 flex items-center gap-3 bg-surface rounded-2xl p-4 shadow-card">
      <span className="text-2xl">🔥</span>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm">{streak}-day streak</p>
        <p className="text-xs text-charcoal-light">Don't break the chain!</p>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: totalDots }).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i < filledDots ? 'bg-coral' : 'bg-cream-dark'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
