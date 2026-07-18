'use client';

import { useLanguage } from '@/contexts/LanguageContext';

interface Props {
  variant?: 'default' | 'inverse';
}

export function LanguageToggle({ variant = 'default' }: Props) {
  const { lang, toggleLang } = useLanguage();

  const isInverse = variant === 'inverse';
  const baseColor = isInverse ? 'text-ivory border-ivory/30' : 'text-ink border-ink/20';
  const activeBg = isInverse ? 'bg-ivory text-ink' : 'bg-ink text-ivory';
  const inactiveHover = isInverse ? 'hover:text-ivory' : 'hover:text-ink';

  return (
    <button
      onClick={toggleLang}
      className={`group inline-flex items-center border ${baseColor} font-semibold overflow-hidden transition-all`}
      aria-label={`Switch to ${lang === 'en' ? 'Arabic' : 'English'}`}
    >
      <span
        className={`px-3 py-1.5 text-xs tracking-widest transition-all ${
          lang === 'en' ? activeBg : `text-ink-subtle ${inactiveHover}`
        }`}
      >
        EN
      </span>
      <span className={`w-px h-4 ${isInverse ? 'bg-ivory/30' : 'bg-ink/20'}`}></span>
      <span
        className={`px-3 py-1.5 text-xs tracking-widest transition-all ${
          lang === 'ar' ? activeBg : `text-ink-subtle ${inactiveHover}`
        }`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        AR
      </span>
    </button>
  );
}
