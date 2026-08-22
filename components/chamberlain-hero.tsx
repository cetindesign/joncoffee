'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee, Sparkles, MapPin, ArrowDown } from 'lucide-react';
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
    <section className="relative bg-[#faf8f2] border-b-2 border-[#0038a8] px-3 sm:px-6 lg:px-8 py-8 sm:py-16 overflow-hidden select-none">
      {/* Vintage Poster Double-Hairline Frame */}
      <div className="max-w-6xl mx-auto border-2 border-[#0038a8] rounded-3xl p-4 sm:p-10 relative bg-white shadow-sm">
        {/* Corner Stars */}
        <span className="absolute top-2.5 left-3 text-[#0038a8] text-sm sm:text-base font-black">★</span>
        <span className="absolute top-2.5 right-3 text-[#0038a8] text-sm sm:text-base font-black">★</span>
        <span className="absolute bottom-2.5 left-3 text-[#0038a8] text-sm sm:text-base font-black">★</span>
        <span className="absolute bottom-2.5 right-3 text-[#0038a8] text-sm sm:text-base font-black">★</span>

        {/* Top Header Labels (Poster Style) */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs font-black text-[#0038a8] uppercase tracking-widest pb-3 border-b border-[#0038a8]/20 font-display">
          <span className="flex items-center gap-1">★ FOCUSED</span>
          <span className="hidden sm:inline-block text-[#0038a8]/50">İZMİR HATAY &bull; SPECIALTY COFFEE</span>
          <span className="flex items-center gap-1">SURPRISED ★</span>
        </div>

        {/* Mascot Stage: Left Mascot + Center Typography + Right Mascot */}
        <div className="grid grid-cols-12 items-center gap-2 sm:gap-6 py-6 sm:py-12">
          {/* Left Mascot (Focused) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-3 sm:col-span-3 flex flex-col items-center justify-center text-center"
          >
            <div className="relative w-20 h-20 sm:w-36 sm:h-36 lg:w-44 lg:h-44">
              <Image
                src={assetPath('/assets/mascot-focused.png')}
                alt="Focused Mascot"
                fill
                className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <span className="mt-1.5 hidden sm:inline-block text-[10px] lg:text-xs font-black text-[#0038a8] uppercase tracking-wider font-display">
              💻 FOCUSED
            </span>
          </motion.div>

          {/* Center Title & Brand Typography */}
          <div className="col-span-6 sm:col-span-6 text-center space-y-3 sm:space-y-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 text-[9px] sm:text-xs font-black uppercase tracking-widest text-white bg-[#0038a8] px-3 py-0.5 rounded-full font-display">
                ★ 100% SPECIALTY GRADE ARABICA ★
              </div>

              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black text-[#0038a8] tracking-tighter font-display uppercase leading-none mt-1">
                JÖN
              </h1>

              <div className="inline-block border-2 border-[#0038a8] bg-[#0038a8] text-white px-3 sm:px-6 py-0.5 sm:py-1 rounded-full text-xs sm:text-lg font-black tracking-widest uppercase font-display">
                COFFEES CO.
              </div>
            </div>

            <p className="text-[11px] sm:text-base font-extrabold text-[#0038a8] uppercase tracking-tight font-display leading-tight max-w-md mx-auto">
              AYNI İYİ KAHVE. YEPYENİ HİSLER.
            </p>
          </div>

          {/* Right Mascot (Surprised) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-3 sm:col-span-3 flex flex-col items-center justify-center text-center"
          >
            <div className="relative w-20 h-20 sm:w-36 sm:h-36 lg:w-44 lg:h-44">
              <Image
                src={assetPath('/assets/mascot-surprised.png')}
                alt="Surprised Mascot"
                fill
                className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <span className="mt-1.5 hidden sm:inline-block text-[10px] lg:text-xs font-black text-[#0038a8] uppercase tracking-wider font-display">
              ✨ SURPRISED
            </span>
          </motion.div>
        </div>

        {/* Interactive Dual-Mood Action Gate */}
        <div className="pt-4 border-t border-[#0038a8]/20 space-y-3">
          <div className="text-center">
            <span className="text-[10px] sm:text-xs font-black text-[#0038a8]/70 uppercase tracking-widest font-display">
              BUGÜNKÜ MODUNU SEÇ &bull; MENÜYÜ AÇ
            </span>
          </div>

          {/* 2 Big Interactive Mood Cards / Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {/* Button 1: Focused */}
            <button
              onClick={() => scrollToMenuWithMood('focused')}
              className="p-3.5 sm:p-4 rounded-2xl bg-[#0038a8] text-white hover:bg-[#072a78] active:scale-98 transition-all flex items-center justify-between text-left shadow-md cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-xs sm:text-sm uppercase tracking-wide font-display">
                    FOCUSED MODU
                  </h3>
                  <p className="text-[10px] sm:text-xs text-white/80 font-medium">
                    Yoğun Espresso, Flat White & Filtre
                  </p>
                </div>
              </div>
              <ArrowDown className="w-4 h-4 text-white/70 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* Button 2: Surprised */}
            <button
              onClick={() => scrollToMenuWithMood('surprised')}
              className="p-3.5 sm:p-4 rounded-2xl bg-white text-[#0038a8] border-2 border-[#0038a8] hover:bg-[#faf8f2] active:scale-98 transition-all flex items-center justify-between text-left shadow-sm cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0038a8]/10 flex items-center justify-center text-[#0038a8] shrink-0">
                  <Sparkles className="w-5 h-5 text-[#0038a8]" />
                </div>
                <div>
                  <h3 className="font-black text-xs sm:text-sm uppercase tracking-wide font-display">
                    SURPRISED MODU
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#0038a8]/80 font-medium">
                    JÖN Sunrise, Cold Brew & Affogato
                  </p>
                </div>
              </div>
              <ArrowDown className="w-4 h-4 text-[#0038a8]/70 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Quick Location Strip */}
          <div className="pt-2 text-center flex items-center justify-center gap-4 text-[10px] sm:text-xs font-bold text-[#0038a8]/80">
            <a
              href={STORE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Hatay Metro 2 Dk &bull; Pzt-Cmt 09:00-20:30</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
