interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  showSeeAll?: boolean;
}

export function SectionHeader({ title, subtitle, showSeeAll = true }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-baseline px-5 mb-1.5 mt-6">
      <div>
        <h2 className="font-display text-xl font-bold">{title}</h2>
        {subtitle && (
          <p className="text-sm text-charcoal-light mt-0.5">{subtitle}</p>
        )}
      </div>
      {showSeeAll && (
        <button className="text-coral text-sm font-semibold">See All</button>
      )}
    </div>
  );
}
