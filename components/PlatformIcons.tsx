interface IconProps {
  size?: number;
  className?: string;
}

export function InstagramIcon({ size = 16, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  );
}

export function TikTokIcon({ size = 16, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M15 3v11.5a3.5 3.5 0 1 1-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 3c0 2.5 2 4.5 4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TwitterIcon({ size = 16, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 4l7.5 10.5L4.5 20h2.2l6-6.7L17.3 20H20l-8-11.2L19.5 4h-2.2L12 9.5 8 4H4z" fill="currentColor"/>
    </svg>
  );
}

export function SnapchatIcon({ size = 16, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 3c3 0 5 2 5 5v3c1 0 2.5 0.5 2.5 1.5S18 14 17 14c-.5 1.5-1.5 3-2.5 3.5.5 1 2 1.5 3.5 1.5v.5c-1 1-3 1.5-3.5 1.5-.5.5-1 1-2.5 1s-2-.5-2.5-1c-.5 0-2.5-.5-3.5-1.5V19c1.5 0 3-.5 3.5-1.5-1-.5-2-2-2.5-3.5-1 0-2.5-.5-2.5-1.5S6 11 7 11V8c0-3 2-5 5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

export const PlatformIconMap: Record<string, React.FC<IconProps>> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  Twitter: TwitterIcon,
  Snapchat: SnapchatIcon,
};

// Additional editorial icons
export function DiamondIcon({ size = 16, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 3L22 12L12 21L2 12L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 12H22" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

export function QuillIcon({ size = 16, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 4L4 20M18 6L6 18M13 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function VesselIcon({ size = 16, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 3h8l2 4v11a2 2 0 01-2 2H8a2 2 0 01-2-2V7l2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M6 7h12M12 3v4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
