interface LogoProps {
  size?: number;
  variant?: 'default' | 'mark' | 'inverse';
  showWordmark?: boolean;
}

export function LogoMark({ size = 40, variant = 'default' }: { size?: number; variant?: 'default' | 'inverse' }) {
  const color = variant === 'inverse' ? '#FAF6EE' : '#0F0F0F';
  const accent = '#A93E1E';

  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer diamond - the "vessel" that holds the treasure */}
      <path
        d="M24 3 L45 24 L24 45 L3 24 Z"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner K formed by geometric layers - the "treasure" */}
      <path
        d="M14 14 L14 34 M14 24 L26 14 M14 24 L26 34"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="square"
        fill="none"
      />
      {/* Accent triangle - the "gem" being unearthed */}
      <path
        d="M32 18 L38 24 L32 30 Z"
        fill={accent}
      />
      {/* Small dot - the beacon */}
      <circle cx="24" cy="24" r="1.5" fill={accent} />
    </svg>
  );
}

export function Logo({ size = 40, variant = 'default', showWordmark = true }: LogoProps) {
  const textColor = variant === 'inverse' ? 'text-ivory' : 'text-ink';
  const mutedColor = variant === 'inverse' ? 'text-ivory/60' : 'text-terracotta';

  return (
    <div className="flex items-center gap-3 group">
      <LogoMark size={size} variant={variant === 'inverse' ? 'inverse' : 'default'} />
      {showWordmark && (
        <div className="leading-none">
          <div className={`text-xl font-black tracking-[-0.02em] ${textColor}`}>
            KANZA
            <span className="ml-0.5 font-thin">/AI</span>
          </div>
          <div className={`text-[9px] font-semibold tracking-[0.3em] uppercase ${mutedColor} mt-0.5`}>
            The Content Studio
          </div>
        </div>
      )}
    </div>
  );
}
