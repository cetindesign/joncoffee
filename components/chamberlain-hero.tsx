'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';

export function ChamberlainHero() {
  const scrollToMenuWithMood = (mood: 'focused' | 'surprised' | 'all') => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90dvh] sm:min-h-[94vh] flex flex-col justify-center items-center bg-[#faf8f2] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 border-b border-[#0038a8]/15 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-6 sm:space-y-8">
        {/* Top Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8] font-display"
        >
          <span>★ İZMİR HATAY</span>
          <span className="text-[#0038a8]/40">&bull;</span>
          <span>%100 SPECIALTY GRADE ARABICA ★</span>
        </motion.div>

        {/* Centerpiece: Ultra-Large Screen-Proportional Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[92vw] h-[92vw] max-w-[420px] max-h-[420px] sm:max-w-[540px] sm:max-h-[540px] lg:max-w-[640px] lg:max-h-[640px] shrink-0"
        >
          <Image
            src={assetPath('/assets/jon-emblem-duo.png')}
            alt="Jön Coffees Co. - Focused & Surprised"
            fill
            className="object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-400 cursor-pointer"
            priority
          />
        </motion.div>

        {/* Pure Single Slogan (No explanatory paragraphs) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1 max-w-xl mx-auto"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0038a8] tracking-tight font-display uppercase leading-tight">
            BİR YANIMIZ ODAK, <br />
            <span className="text-[#0038a8]/70">BİR YANIMIZ MERAK.</span>
          </h1>
        </motion.div>

        {/* Dual-Mood Action Gateways */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md mx-auto space-y-3 pt-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              onClick={() => scrollToMenuWithMood('focused')}
              className="btn-chamberlain-primary py-4 px-5 text-xs tracking-wider justify-center shadow-lg active:scale-97 cursor-pointer group"
            >
              <Coffee className="w-4 h-4" />
              <span>Focused Menüsü</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollToMenuWithMood('surprised')}
              className="btn-chamberlain-secondary py-4 px-5 text-xs tracking-wider justify-center shadow-sm active:scale-97 cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-[#0038a8]" />
              <span>Surprised Menüsü</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Quick Location Strip */}
          <div className="pt-2 flex items-center justify-center gap-3 text-xs font-bold text-[#0038a8]/75">
            <a
              href={STORE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Hatay & İzmirspor Metrolarına 2 dk &bull; 09:00 - 20:30</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
