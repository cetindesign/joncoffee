'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { STORE_INFO } from '@/data/store-info';
import { StatusBadge } from './status-badge';
import { Sparkles, MapPin, ArrowDown, Coffee, Heart, Star, Compass } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 px-4 sm:px-6 flex flex-col justify-center items-center overflow-hidden bg-grid-pattern">
      {/* Background Decorative Blobs & Stars */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-jon-blue/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Retro Stars */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:flex absolute top-32 left-[12%] items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-jon-blue text-jon-blue retro-shadow-sm font-bold text-lg"
      >
        ✦
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden md:flex absolute bottom-40 left-[8%] items-center justify-center w-12 h-12 rounded-full bg-jon-yellow text-jon-blue border-2 border-jon-blue retro-shadow-sm font-bold text-xl"
      >
        ★
      </motion.div>
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden md:flex absolute top-36 right-[12%] items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-jon-blue text-jon-blue retro-shadow-sm font-bold text-lg"
      >
        ⋆
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="hidden md:flex absolute bottom-36 right-[10%] items-center justify-center w-12 h-12 rounded-full bg-jon-blue text-white border-2 border-jon-blue retro-shadow-sm font-bold text-lg"
      >
        ☕
      </motion.div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        {/* Top Tag & Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border-2 border-jon-blue text-xs font-black tracking-wider uppercase text-jon-blue retro-shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-jon-yellow" />
            İzmir Hatay &bull; Nitelikli Mahalle Kahvecisi
          </span>
          <StatusBadge showDetails />
        </motion.div>

        {/* Main Brand Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-jon-blue font-display leading-[1.05]">
            İYİ KAHVE, <br className="hidden sm:block" />
            <span className="relative inline-block text-jon-text underline decoration-jon-yellow decoration-wavy decoration-2 sm:decoration-4">
              İYİ HİSSETTİRİR.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl font-medium text-jon-text-muted pt-2 leading-relaxed">
            İster işine odaklanan bir <strong className="text-jon-blue font-bold">"Focused"</strong>,
            ister yeni tatlar arayan bir <strong className="text-jon-blue font-bold">"Surprised"</strong> ol...
            İzmir Hatay&apos;da taze kavrulmuş nitelikli kahven hazır.
          </p>
        </motion.div>

        {/* Mascot Center Stage with Interactive Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-8 sm:my-10 relative flex items-center justify-center"
        >
          {/* Mascot Focused Sticker (Left) */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: -4 }}
            className="hidden sm:flex flex-col items-center absolute -left-24 sm:-left-32 top-2 bg-white/95 backdrop-blur-sm p-3 rounded-2xl border-2 border-jon-blue retro-shadow z-20 cursor-pointer"
          >
            <div className="relative w-20 h-20 overflow-hidden rounded-xl bg-jon-cream">
              <Image
                src="/assets/mascot-focused.png"
                alt="Focused Mascot"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[11px] font-black text-jon-blue uppercase mt-1 tracking-wider">
              FOCUSED ☕
            </span>
            <span className="text-[9px] font-medium text-jon-text-muted">Odaklan & Üret</span>
          </motion.div>

          {/* Central Main Badge */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-jon-blue bg-white retro-shadow-lg p-2"
          >
            <Image
              src="/assets/jon-badge-circle.png"
              alt="Jön Coffees Co. Badge"
              fill
              className="object-contain p-2 animate-pulse-gentle"
              priority
            />
          </motion.div>

          {/* Mascot Surprised Sticker (Right) */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: 4 }}
            className="hidden sm:flex flex-col items-center absolute -right-24 sm:-right-32 top-2 bg-white/95 backdrop-blur-sm p-3 rounded-2xl border-2 border-jon-blue retro-shadow z-20 cursor-pointer"
          >
            <div className="relative w-20 h-20 overflow-hidden rounded-xl bg-jon-cream">
              <Image
                src="/assets/mascot-surprised.png"
                alt="Surprised Mascot"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[11px] font-black text-jon-blue uppercase mt-1 tracking-wider">
              SURPRISED ★
            </span>
            <span className="text-[9px] font-medium text-jon-text-muted">Yeni Tatlar Keşfet</span>
          </motion.div>
        </motion.div>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mx-auto"
        >
          <Link
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-jon-blue text-white px-8 py-3.5 rounded-2xl font-black text-sm tracking-wide uppercase retro-shadow retro-shadow-hover active:scale-95 transition-all"
          >
            <Coffee className="w-4 h-4" />
            <span>Menüyü Keşfet</span>
          </Link>

          <a
            href={STORE_INFO.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-jon-blue border-2 border-jon-blue px-7 py-3.5 rounded-2xl font-black text-sm tracking-wide uppercase retro-shadow retro-shadow-hover active:scale-95 transition-all"
          >
            <MapPin className="w-4 h-4 text-jon-blue" />
            <span>Yol Tarifi Al</span>
          </a>
        </motion.div>

        {/* Quick Vibe Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 pt-8 border-t border-jon-blue/15 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-left"
        >
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 border border-jon-blue/10">
            <div className="w-8 h-8 rounded-lg bg-jon-blue-soft text-jon-blue flex items-center justify-center font-bold text-sm">
              %100
            </div>
            <div className="text-xs">
              <p className="font-bold text-jon-text">Arabica Seçkisi</p>
              <p className="text-[10px] text-jon-text-muted">Özel Kavrum</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 border border-jon-blue/10">
            <div className="w-8 h-8 rounded-lg bg-jon-blue-soft text-jon-blue flex items-center justify-center font-bold text-sm">
              <Star className="w-4 h-4 text-jon-yellow" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-jon-text">JÖN Sunrise</p>
              <p className="text-[10px] text-jon-text-muted">İmza Reçete</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 border border-jon-blue/10">
            <div className="w-8 h-8 rounded-lg bg-jon-blue-soft text-jon-blue flex items-center justify-center font-bold text-sm">
              <Heart className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-jon-text">Pet Friendly</p>
              <p className="text-[10px] text-jon-text-muted">Dostlarımızla</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 border border-jon-blue/10">
            <div className="w-8 h-8 rounded-lg bg-jon-blue-soft text-jon-blue flex items-center justify-center font-bold text-sm">
              <Compass className="w-4 h-4 text-jon-blue" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-jon-text">Metroya 2 Dk</p>
              <p className="text-[10px] text-jon-text-muted">İzmir Hatay</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <Link
        href="#ozeller"
        className="mt-8 text-jon-blue/70 hover:text-jon-blue flex flex-col items-center gap-1 text-xs font-bold transition-colors"
      >
        <span>Aşağı Kaydır</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </Link>
    </section>
  );
}
