'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, MapPin, ArrowRight, Clock } from 'lucide-react';
import { assetPath } from '@/lib/assets';
import { smoothScrollTo } from '@/lib/smooth-scroll';

export function ChamberlainHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Scroll ascension
  const emblemY = useTransform(scrollY, [0, 240], [0, -60]);
  const emblemScale = useTransform(scrollY, [0, 240], [1, 0.82]);
  const emblemOpacity = useTransform(scrollY, [0, 260], [1, 0.15]);

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo('menu', 112, 650);
  };

  const scrollToLocation = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo('konum', 112, 650);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100dvh-5rem)] sm:min-h-[90vh] flex flex-col justify-center items-center bg-[#faf8f2] px-4 sm:px-6 lg:px-8 py-4 sm:py-14 border-b border-[#0038a8]/15 overflow-hidden select-none"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center my-auto space-y-[clamp(0.85rem,2.8vh,2rem)]">
        {/* Centerpiece: Larger Viewport-Adaptive Emblem */}
        <motion.div
          style={{ y: emblemY, scale: emblemScale, opacity: emblemOpacity }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[clamp(280px,68vmin,600px)] h-[clamp(280px,68vmin,600px)] shrink-0 will-change-transform"
        >
          <Image
            src={assetPath('/assets/jon-emblem-duo.png')}
            alt="Jön Coffees Co."
            fill
            className="object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-400 cursor-pointer"
            priority
          />
        </motion.div>

        {/* Quality Seal Title */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1 max-w-xl mx-auto"
        >
          <h1 className="text-[clamp(1.25rem,4vw,2.75rem)] font-black text-[#0038a8] tracking-tight font-display uppercase leading-tight">
            100% SPECIALTY GRADE ARABICA
          </h1>

          <p className="text-[clamp(0.7rem,1.8vw,0.875rem)] font-bold text-gray-600 tracking-wide uppercase font-display">
            İzmir Hatay &bull; Günlük Taze Kavrum & Nitelikli Demlemeler
          </p>
        </motion.div>

        {/* Action Strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md mx-auto space-y-3"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <a
              href="#menu"
              onClick={scrollToMenu}
              className="btn-chamberlain-primary w-full sm:w-auto py-3.5 px-8 text-xs tracking-wider justify-center shadow-md active:scale-97 cursor-pointer group"
            >
              <Coffee className="w-4 h-4" />
              <span>Menüyü İncele</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#konum"
              onClick={scrollToLocation}
              className="btn-chamberlain-secondary w-full sm:w-auto py-3.5 px-6 text-xs tracking-wider justify-center shadow-xs active:scale-97 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#0038a8]" />
              <span>Yol Tarifi</span>
            </a>
          </div>

          {/* Stacked Legible Micro Info */}
          <div className="pt-2 flex flex-col items-center justify-center space-y-1 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#0038a8]">
              <MapPin className="w-3.5 h-3.5 text-[#0038a8]" />
              <span>Hatay Metrosu&apos;na 2 dk yürüme mesafesinde</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-600 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span>Pzt - Cmt: <strong className="text-[#0038a8]">09:00 - 20:30</strong></span>
              </span>
              <span>&bull;</span>
              <span className="text-amber-800 font-bold">Pazar: Kapalı</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
