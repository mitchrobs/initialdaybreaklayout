import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { MyGamesPage } from './pages/MyGamesPage';
import { GalleryPage } from './pages/GalleryPage';
import { EventsPage } from './pages/EventsPage';
import { SocialPage } from './pages/SocialPage';

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/my-games" element={<MyGamesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="*" element={<Navigate to="/my-games" replace />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
