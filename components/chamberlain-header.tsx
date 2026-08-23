'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StatusBadge } from './status-badge';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';
import { smoothScrollTo } from '@/lib/smooth-scroll';
import { Menu, X, MapPin, ArrowRight } from 'lucide-react';

const MARQUEE_ITEMS = [
  '★ %100 SPECIALTY GRADE ARABICA',
  '★ İZMİR HATAY METROYA 2 DK',
  '★ AYNI İYİ KAHVE, YEPYENİ HİSLER',
  '★ %100 PET FRIENDLY',
  '★ HAFTALIK TAZE KAVRUM',
  '★ 16 SAAT SOĞUK DEMLEME COLD BREW',
  '★ JÖN SUNRISE İMZA REÇETE',
];

export function ChamberlainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    smoothScrollTo(id, 112, 650);
  };

  const handleTopClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    smoothScrollTo('top', 0, 650);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f2] border-b border-[#0038a8]/15">
      {/* Continuous 60fps Marquee Ticker */}
      <div className="bg-[#0038a8] text-white py-2 overflow-hidden select-none border-b border-[#0038a8]/20">
        <div className="animate-continuous-marquee flex items-center gap-8 text-[11px] sm:text-xs font-black tracking-widest uppercase font-display">
          {/* Loop 1 */}
          <div className="flex items-center gap-8 shrink-0">
            {MARQUEE_ITEMS.map((item, idx) => (
              <span key={idx} className="flex items-center gap-3 shrink-0">
                <span>{item}</span>
                <span className="text-[#fab80b]">★</span>
              </span>
            ))}
          </div>

          {/* Loop 2 (Seamless clone) */}
          <div className="flex items-center gap-8 shrink-0" aria-hidden="true">
            {MARQUEE_ITEMS.map((item, idx) => (
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
            aria-label="Menüyü aç"
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
              href="#blends"
              onClick={(e) => handleNavClick(e, 'blends')}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              Öne Çıkanlar
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, 'menu')}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              Menü
            </a>
            <a
              href="#karakterler"
              onClick={(e) => handleNavClick(e, 'karakterler')}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              Mahalle Kültürü
            </a>
            <a
              href="#konum"
              onClick={(e) => handleNavClick(e, 'konum')}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              Konum & Saatler
            </a>
          </nav>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-4">
            <StatusBadge showDetails />
            <a
              href="#konum"
              onClick={(e) => handleNavClick(e, 'konum')}
              className="btn-chamberlain-primary py-2.5 px-5 text-xs cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Konum & Saatler</span>
            </a>
          </div>

          <a
            href="#konum"
            onClick={(e) => handleNavClick(e, 'konum')}
            aria-label="Konum ve Çalışma Saatleri"
            className="lg:hidden p-2 -mr-2 text-[#0038a8] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          >
            <MapPin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f2] border-t border-[#0038a8]/20 px-6 py-6 space-y-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#0038a8]/15">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0038a8]/70">
              İzmir Hatay Kafemiz
            </span>
            <StatusBadge showDetails />
          </div>

          <div className="flex flex-col gap-4 font-extrabold text-lg text-[#0038a8] font-display uppercase">
            <a
              href="#blends"
              onClick={(e) => handleNavClick(e, 'blends')}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>Öne Çıkan Kahveler</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, 'menu')}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>Menü</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
            <a
              href="#karakterler"
              onClick={(e) => handleNavClick(e, 'karakterler')}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>Mahalle Kültürü</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
            <a
              href="#konum"
              onClick={(e) => handleNavClick(e, 'konum')}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>Konum & Çalışma Saatleri</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
