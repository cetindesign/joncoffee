'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee, MapPin, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';

export function ChamberlainHero() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85dvh] sm:min-h-[90vh] flex flex-col justify-center items-center bg-[#faf8f2] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 border-b border-[#0038a8]/15 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-6 sm:space-y-8">
        {/* Centerpiece: Mascot Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[92vw] h-[92vw] max-w-[420px] max-h-[420px] sm:max-w-[540px] sm:max-h-[540px] lg:max-w-[640px] lg:max-h-[640px] shrink-0"
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1.5 max-w-xl mx-auto"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0038a8] tracking-tight font-display uppercase leading-tight">
            100% SPECIALTY GRADE ARABICA
          </h1>

          <p className="text-xs sm:text-sm font-bold text-gray-600 tracking-wide uppercase font-display">
            İzmir Hatay &bull; Günlük Taze Kavrum & Nitelikli Demlemeler
          </p>
        </motion.div>

        {/* Single Clear Action Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md mx-auto space-y-3 pt-1"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#menu"
              onClick={scrollToMenu}
              className="btn-chamberlain-primary w-full sm:w-auto py-4 px-8 text-xs tracking-wider justify-center shadow-lg active:scale-97 cursor-pointer group"
            >
              <Coffee className="w-4 h-4" />
              <span>Kafe Menüsünü İncele</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={STORE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-chamberlain-secondary w-full sm:w-auto py-4 px-6 text-xs tracking-wider justify-center shadow-sm active:scale-97 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#0038a8]" />
              <span>Yol Tarifi Al</span>
            </a>
          </div>

          {/* Location info */}
          <div className="pt-2 flex items-center justify-center gap-3 text-xs font-bold text-[#0038a8]/75">
            <span>Hatay & İzmirspor Metrolarına 2 dk &bull; Pzt-Cmt 09:00 - 20:30 &bull; Pazar Kapalı</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
