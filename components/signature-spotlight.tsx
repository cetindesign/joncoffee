'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';

export function SignatureSpotlight() {
  return (
    <section id="ozeller" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Özel & İmza Reçeteler
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#102341] tracking-tight font-display uppercase">
            JÖN İMZA DENEYİMİ
          </h2>
          <p className="text-xs sm:text-base font-medium text-gray-600">
            Alışılmışın dışına çıkan, kahveyi narenciye ve İtalyan gelatosuyla buluşturan özel tatlar.
          </p>
        </div>

        {/* Feature 1: JÖN SUNRISE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#fbf9f4] rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-xs">
          {/* Visual Container */}
          <div className="lg:col-span-6 relative w-full aspect-square sm:aspect-4/3 rounded-3xl overflow-hidden shadow-sm">
            <Image
              src={assetPath('/assets/product-sunrise.jpg')}
              alt="Jön Sunrise Drink"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-[#102341] shadow-md flex items-center gap-1.5">
              <span>🍊 Surprised İmza Reçetesi</span>
            </div>
          </div>

          {/* Text & Action */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Katmanlı Narenciye & Espresso
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
                JÖN SUNRISE
              </h3>
              <p className="text-sm sm:text-base font-semibold text-gray-600">
                Taze Sıkılmış Soğuk Portakal Suyu + Taze Double Espresso
              </p>
            </div>

            <p className="text-xs sm:text-base text-gray-600 leading-relaxed font-medium">
              Taze sıkılmış portakal suyunun ferahlatıcı narenciye tatlılığı ile buz üzerinde şoklanan yoğun espresso katmanının benzersiz uyumu. İlk yudumda meyvemsi tazelik, ardından zengin kahve gövdesiyle ezber bozan bir deneyim.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white border border-gray-200 space-y-0.5">
                <span className="text-xs font-bold text-[#102341]">Katmanlı Servis</span>
                <p className="text-[11px] text-gray-500">%60 Portakal &bull; %40 Espresso</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-gray-200 space-y-0.5">
                <span className="text-xs font-bold text-[#102341]">Düşük Kalori</span>
                <p className="text-[11px] text-gray-500">90 - 150 kcal &bull; İlave şekersiz</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={STORE_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-chamberlain-primary w-full sm:w-auto text-xs py-3.5 px-6"
              >
                <MapPin className="w-4 h-4" />
                <span>Kafemizde Deneyimleyin</span>
              </a>

              <Link
                href="#menu"
                className="btn-chamberlain-secondary w-full sm:w-auto text-xs py-3.5 px-6"
              >
                <span>Menüde İncele</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature 2: AFFOGATO AL CAFFE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#fbf9f4] rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-xs">
          {/* Visual Container */}
          <div className="lg:col-span-6 lg:order-2 relative w-full aspect-square sm:aspect-4/3 rounded-3xl overflow-hidden shadow-sm">
            <Image
              src={assetPath('/assets/product-affogato.jpg')}
              alt="Affogato al Caffe"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-[#102341] shadow-md flex items-center gap-1.5">
              <span>🍨 Tatlı & Kahve Füzyonu</span>
            </div>
          </div>

          {/* Text & Action */}
          <div className="lg:col-span-6 lg:order-1 space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-900">
                Geleneksel İtalyan Dokunuşu
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
                AFFOGATO AL CAFFE
              </h3>
              <p className="text-sm sm:text-base font-semibold text-gray-600">
                Kadifemsi Vanilyalı İtalyan Gelato + Sıcak Double Espresso
              </p>
            </div>

            <p className="text-xs sm:text-base text-gray-600 leading-relaxed font-medium">
              İtalyanca &apos;boğulmuş&apos; anlamına gelen bu klasik tat; buz gibi vanilyalı dondurma üzerine dökülen taze ve sıcak espresso ile hazırlanır. Tatlı krizine en zarif ve lezzetli kahve çözümü.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white border border-gray-200 space-y-0.5">
                <span className="text-xs font-bold text-[#102341]">Sıcak & Soğuk</span>
                <p className="text-[11px] text-gray-500">9 bar taze çekim gövde</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-gray-200 space-y-0.5">
                <span className="text-xs font-bold text-[#102341]">Gerçek Vanilya</span>
                <p className="text-[11px] text-gray-500">180 - 320 kcal &bull; İpeksi Doku</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={STORE_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-chamberlain-primary w-full sm:w-auto text-xs py-3.5 px-6"
              >
                <MapPin className="w-4 h-4" />
                <span>Kafemizde Deneyimleyin</span>
              </a>

              <Link
                href="#menu"
                className="btn-chamberlain-secondary w-full sm:w-auto text-xs py-3.5 px-6"
              >
                <span>Menüde İncele</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
