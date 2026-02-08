export function SlideToPlayButton() {
  return (
    <button className="mx-5 mt-2 w-[calc(100%-2.5rem)] bg-charcoal text-white rounded-2xl py-4 px-6 flex items-center gap-4 text-base font-semibold active:scale-[0.98] transition-transform">
      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
      <span className="text-white/80 font-medium">slide to play all</span>
    </button>
  );
}
