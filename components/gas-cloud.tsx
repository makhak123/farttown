"use client"

interface GasCloudProps {
  className?: string
  delay?: number
}

export function GasCloud({ className = "", delay = 0 }: GasCloudProps) {
  return (
    <div className={`animate-float-gas ${className}`} style={{ animationDelay: `${delay}s` }}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id={`gas-gradient-${delay}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--toxic-green-glow)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="var(--toxic-green)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--toxic-green)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="50" cy="50" rx="45" ry="35" fill={`url(#gas-gradient-${delay})`} />
        <ellipse cx="35" cy="40" rx="25" ry="20" fill={`url(#gas-gradient-${delay})`} />
        <ellipse cx="65" cy="55" rx="30" ry="22" fill={`url(#gas-gradient-${delay})`} />
      </svg>
    </div>
  )
}
