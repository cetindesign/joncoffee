'use client';

import { useState } from 'react';
import Image from 'next/image';
import { StatusBadge } from './status-badge';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';
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

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

        {/* Brand Logo & Wordmark */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 text-left cursor-pointer"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full overflow-hidden border-2 border-[#0038a8] bg-white">
              <Image
                src={assetPath('/assets/jon-badge-circle.png')}
                alt="Jön Coffees Co."
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <span className="font-extrabold text-lg sm:text-2xl tracking-tighter text-[#0038a8] uppercase leading-none font-display">
              JÖN COFFEES CO.
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#blends"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('blends');
              }}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              Öne Çıkanlar
            </a>
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('menu');
              }}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              Kafe Menüsü
            </a>
            <a
              href="#karakterler"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('karakterler');
              }}
              className="text-xs sm:text-sm font-extrabold text-[#0038a8] hover:opacity-75 tracking-wider uppercase transition-opacity cursor-pointer font-display"
            >
              Hikayemiz
            </a>
            <a
              href="#konum"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('konum');
              }}
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
              href={STORE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-chamberlain-primary py-2.5 px-5 text-xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Yol Tarifi</span>
            </a>
          </div>

          <a
            href={STORE_INFO.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konum ve Yol Tarifi"
            className="lg:hidden p-2 -mr-2 text-[#0038a8] min-h-[44px] min-w-[44px] flex items-center justify-center"
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
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('blends');
              }}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>Öne Çıkan Kahveler</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('menu');
              }}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>Kafe Menüsü</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
            <a
              href="#karakterler"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('karakterler');
              }}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>Hikayemiz</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
            <a
              href="#konum"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('konum');
              }}
              className="py-1 flex items-center justify-between cursor-pointer"
            >
              <span>Konum & Çalışma Saatleri</span>
              <ArrowRight className="w-4 h-4 text-[#0038a8]/50" />
            </a>
          </div>

          <div className="pt-2 border-t border-[#0038a8]/15 space-y-2">
            <a
              href={STORE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-chamberlain-primary py-3.5 text-xs tracking-wider justify-center"
            >
              <MapPin className="w-4 h-4" />
              <span>Google Haritalar&apos;da Aç</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
