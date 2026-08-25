'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StatusBadge } from './status-badge';
import { LanguageToggle } from './language-toggle';
import { useLanguage } from '@/context/language-context';
import { assetPath } from '@/lib/assets';
import { smoothScrollTo } from '@/lib/smooth-scroll';
import { Menu, X, ArrowRight } from 'lucide-react';

export function ChamberlainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, locale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Dock logo into header once user scrolls past the top hero threshold
      setIsScrolled(window.scrollY > 90);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoothScrollTo(id);
  };

  const handleTopClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoothScrollTo('top');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f2] border-b border-[#0038a8]/15">
      {/* Continuous 60fps Marquee Ticker */}
      <div className="bg-[#0038a8] text-white py-2 overflow-hidden select-none border-b border-[#0038a8]/20">
        <div className="animate-continuous-marquee flex items-center gap-8 text-[11px] sm:text-xs font-black tracking-widest uppercase font-display">
          {/* Loop 1 */}
          <div className="flex items-center gap-8 shrink-0">
            {t.marquee.map((item, idx) => (
              <span key={idx} className="flex items-center gap-3 shrink-0">
                <span>{item}</span>
                <span className="text-[#fab80b]">★</span>
              </span>
            ))}
          </div>

          {/* Loop 2 (Seamless clone) */}
          <div className="flex items-center gap-8 shrink-0" aria-hidden="true">
            {t.marquee.map((item, idx) => (
              <span key={`clone-${idx}`} className="flex items-center gap-3 shrink-0">
                <span>{item}</span>
                <span className="text-[#fab80b]">★</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Mobile Left: Hamburger */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-2 text-[#0038a8] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? t.nav.closeMobileMenu : t.nav.openMobileMenu}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Brand Logo & Wordmark (Logo smoothly docks on scroll) */}
        <div className="flex items-center gap-8">
          <button
            onClick={handleTopClick}
            className="flex items-center text-left cursor-pointer group"
          >
            {/* Morphing Docked Logo: Hidden at top (scrollY=0), glides in on scroll */}
            <motion.div
              initial={false}
              animate={{
                width: isScrolled ? 34 : 0,
                opacity: isScrolled ? 1 : 0,
                scale: isScrolled ? 1 : 0.5,
                marginRight: isScrolled ? 10 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-full overflow-hidden border-2 border-[#0038a8] bg-white pointer-events-none"
            >
              <Image
                src={assetPath('/assets/jon-badge-circle.png')}
                alt="Jön Coffees Co."
                fill
                className="object-contain p-0.5"
                priority
              />
            </motion.div>

            <span className="font-extrabold text-lg sm:text-2xl tracking-tighter text-[#0038a8] uppercase leading-none font-display">
              JÖN COFFEES CO.
            </span>
          </button>

          {/* Desktop Nav Links with precise smooth scroll */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, 'menu')}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              {t.nav.menu}
            </a>
            <a
              href="#blends"
              onClick={(e) => handleNavClick(e, 'blends')}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              {t.nav.blends}
            </a>
            <a
              href="#karakterler"
              onClick={(e) => handleNavClick(e, 'karakterler')}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              {t.nav.story}
            </a>
            <a
              href="#konum"
              onClick={(e) => handleNavClick(e, 'konum')}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              {t.nav.location}
            </a>
          </nav>
        </div>

        {/* Right Action: Language Switcher & Status Badge */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-3.5">
            <StatusBadge showDetails />
            <LanguageToggle />
          </div>

          {/* Mobile Right: Language Switcher */}
          <div className="lg:hidden">
            <LanguageToggle variant="mobile-header" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f2] border-t border-[#0038a8]/20 px-6 py-6 space-y-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#0038a8]/15">
            <StatusBadge showDetails />
            <LanguageToggle />
          </div>

          <div className="flex flex-col gap-4 font-extrabold text-lg text-[#0038a8] font-display uppercase">
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, 'menu')}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>{t.nav.menu}</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
            <a
              href="#blends"
              onClick={(e) => handleNavClick(e, 'blends')}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>{t.nav.blends}</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
            <a
              href="#karakterler"
              onClick={(e) => handleNavClick(e, 'karakterler')}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>{t.nav.story}</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
            <a
              href="#konum"
              onClick={(e) => handleNavClick(e, 'konum')}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>{t.nav.location}</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
          </div>

          <div className="pt-4 border-t border-[#0038a8]/15 text-xs text-gray-600 font-medium">
            <p>İzmir Hatay &bull; {locale === 'tr' ? 'Metronun yanı başında.' : 'Right next to metro.'}</p>
          </div>
        </div>
      )}
    </header>
  );
}
