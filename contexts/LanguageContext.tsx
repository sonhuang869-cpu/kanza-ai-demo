'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, Language, Translations } from '@/lib/translations';

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? (localStorage.getItem('kanza-lang') as Language | null) : null;
    if (saved === 'ar' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('kanza-lang', newLang);
    }
  };

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  const value: LanguageContextValue = {
    lang,
    t: translations[lang],
    setLang,
    toggleLang,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
