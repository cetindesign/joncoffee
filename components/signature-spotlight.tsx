'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { assetPath } from '@/lib/assets';

export function SignatureSpotlight() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ozeller" className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-1">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
            Özel & İmza Reçeteler
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
            JÖN İMZA DENEYİMİ
          </h2>
        </div>

        {/* Feature 1: JÖN SUNRISE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center bg-[#fbf9f4] rounded-3xl p-5 sm:p-10 border border-gray-200 shadow-xs">
          {/* Visual Container */}
          <div className="lg:col-span-6 relative w-full aspect-square sm:aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs">
            <Image
              src={assetPath('/assets/product-sunrise.jpg')}
              alt="Jön Sunrise Drink"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-[#102341] shadow-xs">
              🍊 Surprised İmza Reçetesi
            </div>
          </div>

          {/* Text & Action */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700">
                Katmanlı Narenciye & Espresso
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
                JÖN SUNRISE
              </h3>
              <p className="text-xs sm:text-base font-semibold text-gray-600">
                Taze Portakal Suyu + Taze Double Espresso
              </p>
            </div>

            <p className="text-xs sm:text-base text-gray-600 leading-relaxed font-medium">
              Taze sıkılmış portakal suyunun narenciye tatlılığı ile buz üzerinde şoklanan yoğun espresso katmanının uyumu. Meyvemsi tazelik ve zengin kahve gövdesiyle ezber bozan bir lezzet.
            </p>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-2xl bg-white border border-gray-200 space-y-0.5">
                <span className="text-[11px] sm:text-xs font-bold text-[#102341]">Katmanlı Servis</span>
                <p className="text-[10px] sm:text-[11px] text-gray-500">%60 Portakal &bull; %40 Espresso</p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-gray-200 space-y-0.5">
                <span className="text-[11px] sm:text-xs font-bold text-[#102341]">Düşük Kalori</span>
                <p className="text-[10px] sm:text-[11px] text-gray-500">90 - 150 kcal &bull; Şekersiz</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#102341] hover:text-[#1b3561] transition-colors cursor-pointer"
              >
                <span>Menüde Reçeteyi İncele</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Feature 2: AFFOGATO AL CAFFE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center bg-[#fbf9f4] rounded-3xl p-5 sm:p-10 border border-gray-200 shadow-xs">
          {/* Visual Container */}
          <div className="lg:col-span-6 lg:order-2 relative w-full aspect-square sm:aspect-4/3 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs">
            <Image
              src={assetPath('/assets/product-affogato.jpg')}
              alt="Affogato al Caffe"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-[#102341] shadow-xs">
              🍨 Tatlı & Kahve Füzyonu
            </div>
          </div>

          {/* Text & Action */}
          <div className="lg:col-span-6 lg:order-1 space-y-4 sm:space-y-5">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-900">
                Geleneksel İtalyan Dokunuşu
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
                AFFOGATO AL CAFFE
              </h3>
              <p className="text-xs sm:text-base font-semibold text-gray-600">
                Vanilyalı İtalyan Gelato + Sıcak Double Espresso
              </p>
            </div>

            <p className="text-xs sm:text-base text-gray-600 leading-relaxed font-medium">
              İtalyanca &apos;boğulmuş&apos; anlamına gelen bu klasik tat; vanilyalı dondurma üzerine dökülen taze ve sıcak espresso ile hazırlanır. Tatlı krizine en zarif ve lezzetli kahve çözümü.
            </p>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-2xl bg-white border border-gray-200 space-y-0.5">
                <span className="text-[11px] sm:text-xs font-bold text-[#102341]">Sıcak & Soğuk</span>
                <p className="text-[10px] sm:text-[11px] text-gray-500">9 bar taze çekim gövde</p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-gray-200 space-y-0.5">
                <span className="text-[11px] sm:text-xs font-bold text-[#102341]">Gerçek Vanilya</span>
                <p className="text-[10px] sm:text-[11px] text-gray-500">180 - 320 kcal &bull; İpeksi</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#102341] hover:text-[#1b3561] transition-colors cursor-pointer"
              >
                <span>Menüde Reçeteyi İncele</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
