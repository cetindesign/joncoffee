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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[580px] sm:min-h-[640px]">
        {/* Left Column: Typography & Story */}
        <div className="lg:col-span-6 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-12 sm:py-20 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-[#102341] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>İzmir Hatay &bull; %100 Specialty Arabica</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#102341] tracking-tight font-display uppercase leading-[1.05]">
            AYNI İYİ KAHVE. <br />
            <span className="opacity-90">YEPYENİ HİSLER.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            İster işine odaklanan bir <strong className="text-[#102341]">Focused</strong>, ister yeni tatlar peşindeki bir <strong className="text-[#102341]">Surprised</strong> ol. Özenle seçilmiş çekirdekler ve samimi mahalle kahveciliği.
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

          <div className="pt-4 flex items-center justify-center lg:justify-start gap-2 text-xs text-gray-600 font-medium">
            <div className="flex text-[#fab80b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#fab80b]" />
              ))}
            </div>
            <span>1.200+ Mahalleli Tarafından Tavsiye Ediliyor</span>
          </div>
        </div>

        {/* Right Column: Hero Visual Atmosphere */}
        <div className="lg:col-span-6 relative flex items-center justify-center p-4 sm:p-8 lg:p-12">
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
            <Image
              src={assetPath('/assets/hero-coffee-lifestyle.jpg')}
              alt="Jön Coffee Atmosphere"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Bottom Floating Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-white/40 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#e3ecf1] shrink-0">
                  <Image
                    src={assetPath('/assets/jon-badge-circle.png')}
                    alt="Jön Mascot"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#102341] uppercase tracking-wide">
                    İzmir Hatay Kafe
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    Haftanın 7 günü taze kavrum
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Açık &bull; Servis Var
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
