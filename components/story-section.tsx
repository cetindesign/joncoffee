'use client';

import Image from 'next/image';
import { Coffee, Heart, MapPin, ArrowRight } from 'lucide-react';
import { assetPath } from '@/lib/assets';
import { STORE_INFO } from '@/data/store-info';

export function StorySection() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="karakterler" className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f2] border-b border-[#0038a8]/15">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-1 pb-3 border-b border-[#0038a8]/20">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
            ★ MAHALLE KÜLTÜRÜ ★
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0038a8] tracking-tight font-display uppercase">
            İZMİR HATAY&apos;IN YENİ NESİL KAHVE DURAĞI
          </h2>
        </div>

        {/* 2-Column Grounded Layout: Atmosphere Photo + 3 Concrete Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Atmosphere Photo (5 cols) */}
          <div className="lg:col-span-5 relative w-full h-72 sm:h-96 lg:h-[440px] rounded-3xl overflow-hidden border-2 border-[#0038a8]/20 shadow-sm">
            <Image
              src={assetPath('/assets/hero-coffee-lifestyle.jpg')}
              alt="Jön Coffee Kafe ve Teras Atmosferi"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-[#0038a8] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider font-display">
              ★ İZMİR HATAY &bull; PET FRIENDLY ★
            </div>
          </div>

          {/* Right: 3 Concrete Standards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
              Jön Coffee Co., iyi kahveyi samimi mahalle kültürüyle buluşturan bağımsız bir 3. nesil kahvecidir. Gösterişten uzak, kaliteye ve detaylara odaklı bir deneyim sunarız.
            </p>

            {/* 3 Grounded Commitments */}
            <div className="space-y-4 pt-1">
              {/* Item 1 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#0038a8]/15 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#0038a8] text-white flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-extrabold text-sm sm:text-base text-[#0038a8] font-display">
                    %100 Specialty Grade Arabica
                  </h3>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    Haftalık taze kavrum tek köken çekirdekler, hassas gramajlı espresso kalibrasyonları ve 16 saatlik soğuk damlatma Cold Brew reçeteleri.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#0038a8]/15 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#0038a8] text-white flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-[#fab80b]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-extrabold text-sm sm:text-base text-[#0038a8] font-display">
                    Pet-Friendly & Rahat Çalışma Alanı
                  </h3>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    Evcil hayvanınızla rahatça oturabileceğiniz açık teras, yüksek hızlı Wi-Fi ve laptopla çalışanlar için bol prizli masa düzeni.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#0038a8]/15 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#0038a8] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-extrabold text-sm sm:text-base text-[#0038a8] font-display">
                    Hatay Metrosu&apos;na 2 Dk Düzayak Ulaşım
                  </h3>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    İnönü Caddesi paralelinde, metro çıkışından itibaren yokuşsuz ve kolay yürüyüş mesafesinde merkezi mahalle konumu.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Link */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="btn-chamberlain-primary py-3.5 px-6 text-xs"
              >
                <span>Tüm Menüyü İncele</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={STORE_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-chamberlain-secondary py-3.5 px-5 text-xs"
              >
                <MapPin className="w-4 h-4 text-[#0038a8]" />
                <span>Haritada Gör</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
