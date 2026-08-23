'use client';

import Image from 'next/image';
import { Coffee, Heart, ArrowRight } from 'lucide-react';
import { assetPath } from '@/lib/assets';

export function StorySection() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLocation = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('konum');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="karakterler" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f2] border-b border-[#0038a8]/15">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Editorial Title */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
            ★ Felsefemiz & Mahalle Ruhu
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0038a8] tracking-tight font-display uppercase leading-tight">
            NİTELİKLİ KAHVE, <br />
            SAMİMİ MAHALLE KÜLTÜRÜ.
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            Jön Coffee Co., İzmir Hatay&apos;da iyi kahveyi ve sıcak mahalle atmosferini bir araya getiren bağımsız bir specialty kahve durağıdır.
          </p>
        </div>

        {/* 2-Column Split: Craft & Space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 divide-y lg:divide-y-0 lg:divide-x divide-[#0038a8]/15">
          {/* Column 1: Craft Coffee */}
          <div className="space-y-6 pt-6 lg:pt-0">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                <Image
                  src={assetPath('/assets/mascot-focused.png')}
                  alt="Jön Coffee Kahve Tutkusu"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0038a8] text-white text-[10px] font-black uppercase tracking-wider font-display">
                  <Coffee className="w-3 h-3 text-white" /> ★ NİTELİKLİ SEÇKİ ★
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0038a8] font-display mt-1">
                  %100 Specialty Grade Arabica
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
              Dünyanın seçkin kahve çiftliklerinden gelen yüksek irtifa çekirdekleri, haftalık taze kavrum profilleri ve titizlikle kalibre edilen demleme reçeteleri.
            </p>

            <div className="space-y-2 text-xs text-gray-700 font-bold border-l-2 border-[#0038a8] pl-4">
              <p>&bull; <strong>Öne Çıkanlar:</strong> Single Origin Espresso, V60 Filtre, 16H Cold Brew, JÖN Sunrise</p>
              <p>&bull; <strong>Süt Opsiyonları:</strong> Laktozsuz, Yulaf ve Badem sütü seçenekleri</p>
            </div>

            <a
              href="#menu"
              onClick={scrollToMenu}
              className="inline-flex items-center gap-2 text-xs font-black text-[#0038a8] hover:opacity-75 tracking-wider uppercase cursor-pointer font-display"
            >
              <span>Menüyü İncele</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Column 2: Neighborhood Atmosphere */}
          <div className="space-y-6 pt-8 lg:pt-0 lg:pl-16">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                <Image
                  src={assetPath('/assets/mascot-surprised.png')}
                  alt="Jön Coffee Mahalle Atmosferi"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0038a8] text-[#fab80b] text-[10px] font-black uppercase tracking-wider font-display">
                  <Heart className="w-3 h-3 text-[#fab80b]" /> ★ YAŞAYAN ALAN ★
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0038a8] font-display mt-1">
                  Pet-Friendly & Çalışma Alanı
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
              İster laptopunla kesintisiz çalış, ister evcil hayvanınla açık terasımızda mahallenin ritmine ortak ol. Hızlı Wi-Fi ve bol prizli rahat oturma alanları.
            </p>

            <div className="space-y-2 text-xs text-gray-700 font-bold border-l-2 border-[#0038a8] pl-4">
              <p>&bull; <strong>Ulaşım:</strong> Hatay Metrosu&apos;na sadece 2 dakika yürüme mesafesinde</p>
              <p>&bull; <strong>Dostlarımız:</strong> Evcil hayvan dostu açık ve kapalı alanlar</p>
            </div>

            <a
              href="#konum"
              onClick={scrollToLocation}
              className="inline-flex items-center gap-2 text-xs font-black text-[#0038a8] hover:opacity-75 tracking-wider uppercase cursor-pointer font-display"
            >
              <span>Konum ve Saatler</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
