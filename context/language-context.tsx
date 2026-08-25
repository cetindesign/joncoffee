'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Locale, TranslationDictionary, TRANSLATIONS } from '@/data/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'joncoffee_locale';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('tr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Check URL query params first (?lang=en or ?lang=tr)
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang')?.toLowerCase();

    if (langParam === 'en' || langParam === 'tr') {
      setLocaleState(langParam);
      try {
        localStorage.setItem(STORAGE_KEY, langParam);
      } catch {
        // Storage disabled/fallback
      }
    } else {
      // 2. Check localStorage
      try {
        const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
        if (saved === 'en' || saved === 'tr') {
          setLocaleState(saved);
        }
      } catch {
        // Storage disabled/fallback
      }
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
      const url = new URL(window.location.href);
      if (newLocale === 'en') {
        url.searchParams.set('lang', 'en');
      } else {
        url.searchParams.delete('lang');
      }
      window.history.replaceState(null, '', url.toString());
    } catch {
      // Ignore
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'tr' ? 'en' : 'tr');
  }, [locale, setLocale]);

  const value: LanguageContextType = {
    locale,
    setLocale,
    toggleLocale,
    t: TRANSLATIONS[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
