import { useState, type ReactNode } from 'react';
import { Header } from './Header';
import { TabBar } from './TabBar';
import { ProfileDrawer } from '../shared/ProfileDrawer';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="mx-auto max-w-md min-h-dvh bg-cream flex flex-col relative shadow-lg">
      <Header onOpenProfile={() => setProfileOpen(true)} />
      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>
      <TabBar />
      <ProfileDrawer isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
