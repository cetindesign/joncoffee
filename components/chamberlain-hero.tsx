'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Star, Sparkles } from 'lucide-react';
import { STORE_INFO } from '@/data/store-info';

export function ChamberlainHero() {
  return (
    <section className="relative bg-[#e3ecf1] border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[580px] sm:min-h-[640px]">
        {/* Left Column: Typography & Story (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-12 sm:py-20 space-y-6 text-center lg:text-left">
          {/* Micro Tag */}
          <div className="inline-flex items-center justify-center lg:justify-start gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-[#102341] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>İzmir Hatay &bull; %100 Specialty Arabica</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#102341] tracking-tight font-display uppercase leading-[1.05]">
            AYNI İYİ KAHVE. <br />
            <span className="opacity-90">YEPYENİ HİSLER.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            İster işine odaklanan bir <strong className="text-[#102341]">Focused</strong>, ister yeni tatlar peşindeki bir <strong className="text-[#102341]">Surprised</strong> ol. Özenle seçilmiş çekirdekler ve samimi mahalle kahveciliği.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
            <Link
              href="#menu"
              className="btn-chamberlain-primary w-full sm:w-auto text-xs sm:text-sm py-4 px-8"
            >
              <span>Menüyü Keşfet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={STORE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-chamberlain-secondary w-full sm:w-auto text-xs sm:text-sm py-4 px-6"
            >
              <MapPin className="w-4 h-4 text-[#102341]" />
              <span>Yol Tarifi Al</span>
            </a>
          </div>

          {/* Star review trust badge */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-600 font-medium">
            <div className="flex text-[#fab80b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#fab80b]" />
              ))}
            </div>
            <span>1.200+ Mahalleli Tarafından Tavsiye Ediliyor</span>
          </div>
        </div>

        {/* Right Column: Full-Bleed Lifestyle Photography (6 Cols) */}
        <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[460px] lg:min-h-full overflow-hidden">
          <Image
            src="/assets/hero-coffee-lifestyle.jpg"
            alt="Jön Coffee Atmosphere"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />

          {/* Floating Mascot Badge on Corner */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-sm p-2.5 sm:p-3 rounded-2xl border border-gray-200 shadow-lg flex items-center gap-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-gray-100 bg-white">
              <Image
                src="/assets/jon-badge-circle.png"
                alt="Jön Mascot"
                fill
                className="object-contain"
              />
            </div>
            <div className="pr-1 text-left">
              <span className="text-xs font-bold text-[#102341] uppercase block leading-tight">
                JÖN COFFEES CO.
              </span>
              <span className="text-[10px] text-gray-500 font-semibold">
                Focused & Surprised Ruhu
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
