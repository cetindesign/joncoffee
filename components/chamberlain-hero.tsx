'use client';

import Image from 'next/image';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';

export function ChamberlainHero() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#e3ecf1] border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[540px] sm:min-h-[600px] items-center">
        {/* Left Column: Typography & Story */}
        <div className="lg:col-span-6 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-12 sm:py-16 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#102341]/80">
              İzmir Hatay &bull; %100 Specialty Arabica
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#102341] tracking-tight font-display uppercase leading-[1.05]">
            AYNI İYİ KAHVE. <br />
            <span className="text-[#102341]/70">YEPYENİ HİSLER.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            İster işine odaklanan bir <strong className="text-[#102341]">Focused</strong>, ister yeni tatlar peşindeki bir <strong className="text-[#102341]">Surprised</strong> ol. Nitelikli çekirdekler ve samimi mahalle kahveciliği.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
            <a
              href="#menu"
              onClick={scrollToMenu}
              className="btn-chamberlain-primary w-full sm:w-auto text-xs sm:text-sm py-4 px-8 cursor-pointer"
            >
              <span>Menüyü Keşfet</span>
              <ArrowRight className="w-4 h-4" />
            </a>

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

          <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-600 font-medium">
            <div className="flex text-[#fab80b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#fab80b]" />
              ))}
            </div>
            <span>1.200+ Mahalleli Tarafından Tavsiye Ediliyor</span>
          </div>
        </div>

        {/* Right Column: Pure Full-Bleed Atmosphere Photo (NO FLOATING GLASS BOXES) */}
        <div className="lg:col-span-6 h-full min-h-[340px] sm:min-h-[460px] lg:min-h-[600px] relative">
          <Image
            src={assetPath('/assets/hero-coffee-lifestyle.jpg')}
            alt="Jön Coffee Atmosphere"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
