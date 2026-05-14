export function AnimatedGridBg() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] animate-pulse-slow" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,255,136,0.6)" strokeWidth="0.5" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0d0d0d 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: 'linear-gradient(to bottom, transparent, #0d0d0d)' }} />
    </div>
  )
}
