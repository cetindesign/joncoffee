'use client';

import { useLanguage } from '@/context/language-context';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  variant?: 'header' | 'mobile-header' | 'footer';
  className?: string;
}

export function LanguageToggle({ variant = 'header', className = '' }: LanguageToggleProps) {
  const { locale, toggleLocale, setLocale } = useLanguage();

  if (variant === 'mobile-header') {
    return (
      <button
        onClick={toggleLocale}
        aria-label={locale === 'tr' ? 'Switch to English' : 'Türkçe diline geç'}
        className={`flex items-center justify-center gap-1 min-h-[40px] px-3 rounded-full bg-white border border-[#0038a8]/25 text-xs font-black text-[#0038a8] uppercase font-display tracking-wider shadow-2xs active:scale-95 transition-transform duration-150 cursor-pointer ${className}`}
      >
        <span className={locale === 'tr' ? 'text-[#0038a8]' : 'text-[#0038a8]/40'}>TR</span>
        <span className="text-[#0038a8]/30 text-[10px]">/</span>
        <span className={locale === 'en' ? 'text-[#0038a8]' : 'text-[#0038a8]/40'}>EN</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLocale}
      aria-label={locale === 'tr' ? 'Switch to English' : 'Türkçe diline geç'}
      className={`group relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#0038a8]/30 hover:border-[#0038a8] text-xs font-black text-[#0038a8] uppercase font-display tracking-wider shadow-2xs hover:shadow-xs active:scale-95 transition-all duration-200 cursor-pointer select-none ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-[#0038a8] group-hover:rotate-12 transition-transform duration-300 shrink-0" />
      <div className="flex items-center gap-1">
        <span className={locale === 'tr' ? 'text-[#0038a8] font-black' : 'text-[#0038a8]/45 font-medium'}>
          TR
        </span>
        <span className="text-[#0038a8]/30 text-[10px] select-none">|</span>
        <span className={locale === 'en' ? 'text-[#0038a8] font-black' : 'text-[#0038a8]/45 font-medium'}>
          EN
        </span>
      </div>
    </button>
  );
}
