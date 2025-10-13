export function DecorativeBorder({ position }: { position: "top" | "bottom" }) {
  if (position === "top") {
    return (
      <div className="w-full h-16 md:h-24 bg-gradient-to-r from-teal-600 via-purple-700 to-amber-600 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 100">
          <pattern id="trianglePattern" x="0" y="0" width="120" height="100" patternUnits="userSpaceOnUse">
            <polygon points="0,50 30,0 60,50" fill="#0d9488" />
            <polygon points="30,0 60,50 90,0" fill="#6b21a8" />
            <polygon points="60,50 90,0 120,50" fill="#d97706" />
            <polygon points="0,50 30,100 60,50" fill="#dc2626" />
            <polygon points="30,100 60,50 90,100" fill="#0d9488" />
            <polygon points="60,50 90,100 120,50" fill="#6b21a8" />
          </pattern>
          <rect width="1200" height="100" fill="url(#trianglePattern)" />
        </svg>
      </div>
    )
  }

  return (
    <div className="w-full h-16 md:h-24 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 relative overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 100">
        <pattern id="wavePattern" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
          <path d="M0,100 Q50,50 100,100 L100,100 L0,100 Z" fill="#f59e0b" />
          <path d="M100,100 Q150,50 200,100 L200,100 L100,100 Z" fill="#f43f5e" />
          <circle cx="50" cy="50" r="50" fill="#000000" />
          <circle cx="150" cy="50" r="50" fill="#000000" />
        </pattern>
        <rect width="1200" height="100" fill="url(#wavePattern)" />
      </svg>
    </div>
  )
}
