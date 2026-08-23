'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee, MapPin, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';

export function ChamberlainHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // As user scrolls the first 240px, the center emblem glides smoothly up toward the header
  const emblemY = useTransform(scrollY, [0, 240], [0, -60]);
  const emblemScale = useTransform(scrollY, [0, 240], [1, 0.82]);
  const emblemOpacity = useTransform(scrollY, [0, 260], [1, 0.15]);

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100dvh-5rem)] sm:min-h-[90vh] flex flex-col justify-center items-center bg-[#faf8f2] px-4 sm:px-6 lg:px-8 py-4 sm:py-14 border-b border-[#0038a8]/15 overflow-hidden select-none"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center my-auto space-y-[clamp(0.75rem,2.5vh,1.75rem)]">
        {/* Centerpiece: Large Viewport-Adaptive Emblem that glides up on scroll */}
        <motion.div
          style={{ y: emblemY, scale: emblemScale, opacity: emblemOpacity }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[clamp(260px,62vmin,560px)] h-[clamp(260px,62vmin,560px)] shrink-0 will-change-transform"
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
          <h1 className="text-[clamp(1.2rem,3.8vw,2.75rem)] font-black text-[#0038a8] tracking-tight font-display uppercase leading-tight">
            100% SPECIALTY GRADE ARABICA
          </h1>

          <p className="text-[clamp(0.6875rem,1.8vw,0.875rem)] font-bold text-gray-600 tracking-wide uppercase font-display">
            İzmir Hatay &bull; Günlük Taze Kavrum & Nitelikli Demlemeler
          </p>
        </motion.div>

        {/* Action Strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md mx-auto space-y-2"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <a
              href="#menu"
              onClick={scrollToMenu}
              className="btn-chamberlain-primary w-full sm:w-auto py-3.5 px-6 text-xs tracking-wider justify-center shadow-md active:scale-97 cursor-pointer group"
            >
              <Coffee className="w-4 h-4" />
              <span>Kafe Menüsünü İncele</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={STORE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-chamberlain-secondary w-full sm:w-auto py-3.5 px-5 text-xs tracking-wider justify-center shadow-xs active:scale-97 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#0038a8]" />
              <span>Yol Tarifi</span>
            </a>
          </div>

          {/* Micro Location note */}
          <div className="pt-0.5 flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#0038a8]/75">
            <span>Hatay Metro 2 dk &bull; Pzt-Cmt 09:00 - 20:30 &bull; Pazar Kapalı</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
