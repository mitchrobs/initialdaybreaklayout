import { useLocation } from 'react-router-dom';
import { currentUser } from '../../data/user';

interface HeaderProps {
  onOpenProfile: () => void;
}

export function Header({ onOpenProfile }: HeaderProps) {
  const location = useLocation();
  const path = location.pathname;

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="px-5 pt-14 pb-2">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          {path === '/gallery' && (
            <>
              <h1 className="font-display text-[32px] font-bold leading-tight tracking-tight">
                Welcome back,
                <br />
                <span className="text-coral">{currentUser.name}</span>
              </h1>
            </>
          )}
          {path === '/my-games' && (
            <>
              <h1 className="font-display text-[32px] font-bold leading-tight tracking-tight">
                My Games
              </h1>
              <p className="text-charcoal-light text-sm mt-0.5">{dateStr}</p>
            </>
          )}
          {path === '/events' && (
            <h1 className="font-display text-[32px] font-bold leading-tight tracking-tight">
              Events
            </h1>
          )}
          {path === '/social' && (
            <h1 className="font-display text-[32px] font-bold leading-tight tracking-tight">
              Social
            </h1>
          )}
        </div>
        <button
          onClick={onOpenProfile}
          className="ml-3 mt-1 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0"
          style={{ backgroundColor: currentUser.avatarColor }}
        >
          {currentUser.initial}
        </button>
      </div>
    </header>
  );
}
