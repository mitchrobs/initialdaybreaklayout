import { currentUser } from '../../data/user';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileDrawer({ isOpen, onClose }: ProfileDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex flex-col">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative mt-12 mx-4 bg-surface rounded-2xl shadow-card p-6 animate-in">
        <div className="flex items-center gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold"
            style={{ backgroundColor: currentUser.avatarColor }}
          >
            {currentUser.initial}
          </div>
          <div>
            <h3 className="font-display text-xl font-bold">{currentUser.name}</h3>
            <p className="text-sm text-charcoal-light">
              Member since {currentUser.joinDate}
            </p>
          </div>
        </div>
        <div className="flex gap-6 mb-5">
          <div>
            <p className="text-2xl font-bold">{currentUser.streak}</p>
            <p className="text-xs text-charcoal-light">Day Streak</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{currentUser.gamesPlayed}</p>
            <p className="text-xs text-charcoal-light">Games Played</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full py-3 text-sm font-semibold text-charcoal-light border border-cream-dark rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}
