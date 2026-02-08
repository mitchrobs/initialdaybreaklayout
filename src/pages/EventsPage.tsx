import { events } from '../data/events';
import { DailyChallenge } from '../components/events/DailyChallenge';
import { EventCard } from '../components/events/EventCard';
import { SectionHeader } from '../components/shared/SectionHeader';

export function EventsPage() {
  const daily = events.find((e) => e.type === 'daily-challenge');
  const tournaments = events.filter((e) => e.type === 'weekly-tournament');
  const community = events.filter((e) => e.type === 'community');

  return (
    <div className="pt-2 pb-4">
      {daily && <DailyChallenge event={daily} />}

      <SectionHeader title="Tournaments" showSeeAll={false} />
      <div className="mt-2">
        {tournaments.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <SectionHeader title="Community Events" showSeeAll={false} />
      <div className="mt-2">
        {community.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
