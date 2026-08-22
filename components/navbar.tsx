'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { StatusBadge } from './status-badge';
import { STORE_INFO } from '@/data/store-info';
import { Menu, X, MapPin, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Öne Çıkanlar', href: '#ozeller' },
  { label: 'Menü', href: '#menu' },
  { label: 'Karakterler', href: '#hikaye' },
  { label: 'Kahve Testi', href: '#kahve-testi' },
  { label: 'Konum & Saatler', href: '#konum' },
  { label: 'SSS', href: '#sss' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-jon-cream/90 backdrop-blur-md border-b border-jon-blue/15 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-jon-blue bg-white retro-shadow-sm group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/assets/jon-badge-circle.png"
              alt="Jön Coffees Co. Logo"
              fill
              className="object-cover p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-jon-blue leading-none font-display">
              JÖN COFFEES
            </span>
            <span className="text-[11px] font-semibold text-jon-text-muted tracking-wider uppercase mt-0.5 flex items-center gap-1">
              <span>Hatay, İzmir</span>
              <span className="text-jon-blue">✦</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-jon-blue/15 retro-shadow-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-semibold text-jon-text hover:text-jon-blue transition-colors rounded-full hover:bg-jon-blue-soft/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action & Live Status */}
        <div className="hidden lg:flex items-center gap-3">
          <StatusBadge />
          <a
            href={STORE_INFO.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-jon-blue text-white px-4 py-2 rounded-full text-xs font-bold retro-shadow-sm hover:bg-jon-blue-hover hover:scale-105 active:scale-95 transition-all"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Yol Tarifi</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <StatusBadge />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
            className="p-2 rounded-xl border-2 border-jon-blue bg-white text-jon-blue retro-shadow-sm active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b-2 border-jon-blue bg-jon-cream px-6 py-6 space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-jon-blue/15">
              <span className="text-xs font-bold uppercase tracking-wider text-jon-text-muted">
                Gezinme Menüsü
              </span>
              <StatusBadge showDetails />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white border border-jon-blue/20 text-sm font-bold text-jon-text hover:text-jon-blue hover:bg-jon-blue-soft transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-jon-blue" />
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={STORE_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-jon-blue text-white py-3 rounded-xl font-bold text-sm retro-shadow-sm active:scale-98 transition-all"
              >
                <MapPin className="w-4 h-4" />
                Google Haritalar ile Yol Tarifi Al
              </a>
              <a
                href={STORE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 text-xs font-semibold text-jon-blue"
              >
                Instagram: {STORE_INFO.socials.instagramHandle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
