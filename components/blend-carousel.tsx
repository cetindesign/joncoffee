'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { assetPath } from '@/lib/assets';

interface BlendProduct {
  id: string;
  name: string;
  subName: string;
  badge: string;
  bgPedestal: string;
  roastLevel: string;
  roastDots: number;
  flavorNotes: string[];
  reviewsCount: number;
  image: string;
}

const PRODUCTS: BlendProduct[] = [
  {
    id: 'blend-focused-espresso',
    name: 'Focused Espresso Blend',
    subName: 'Single Origin Colombia & Ethiopia (250g)',
    badge: 'EN ÇOK TERCİH EDİLEN',
    bgPedestal: 'bg-[#d8e7f5]',
    roastLevel: 'Orta - Yoğun Kavrum',
    roastDots: 4,
    flavorNotes: ['Bitter Çikolata', 'Fındık', 'Karamel'],
    reviewsCount: 148,
    image: '/assets/product-beans.jpg',
  },
  {
    id: 'blend-jon-sunrise',
    name: 'JÖN Sunrise (İmza İçecek)',
    subName: 'Taze Portakal Suyu + Soğuk Double Espresso',
    badge: 'İMZA REÇETE',
    bgPedestal: 'bg-[#fee9d7]',
    roastLevel: 'Ferahlatıcı & Katmanlı',
    roastDots: 2,
    flavorNotes: ['Taze Portakal', 'Narenciye', 'Yoğun Espresso'],
    reviewsCount: 215,
    image: '/assets/product-sunrise.jpg',
  },
  {
    id: 'blend-cold-brew-bottle',
    name: '16 Saat Demleme Cold Brew',
    subName: 'Özel Seçki Yavaş Soğuk Damlatma (Şişe)',
    badge: '16H DEMLEME',
    bgPedestal: 'bg-[#e2f3ec]',
    roastLevel: 'Yumuşak & İpeksi İçim',
    roastDots: 3,
    flavorNotes: ['Kakao Nibs', 'Kuru Üzüm', 'Düşük Asidite'],
    reviewsCount: 96,
    image: '/assets/product-coldbrew.jpg',
  },
  {
    id: 'blend-affogato-gelato',
    name: 'Affogato Al Caffe',
    subName: 'Vanilyalı İtalyan Gelato + Sıcak Espresso',
    badge: 'TATLI DOKUNUŞ',
    bgPedestal: 'bg-[#fdf2d0]',
    roastLevel: 'Sıcak & Soğuk Füzyon',
    roastDots: 3,
    flavorNotes: ['Vanilya', 'Süt Kreması', 'Ristretto'],
    reviewsCount: 84,
    image: '/assets/product-affogato.jpg',
  },
];

export function BlendCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blends" className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header with Desktop Arrow Controls */}
        <div className="flex items-end justify-between gap-4 pb-4 border-b border-gray-200">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
              Koleksiyon & Reçeteler
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
              ÖNE ÇIKAN KAHVELERİMİZ
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#102341] hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#102341] hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Snap Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        >
          {PRODUCTS.map((prod) => (
            <a
              key={prod.id}
              href="#menu"
              onClick={scrollToMenu}
              className="shrink-0 w-[76vw] sm:w-[300px] lg:w-[280px] snap-start group flex flex-col justify-between cursor-pointer select-none"
            >
              <div>
                {/* Product Photo on Pastel Canvas */}
                <div className={`relative w-full aspect-square ${prod.bgPedestal} rounded-2xl overflow-hidden mb-4`}>
                  <Image
                    src={assetPath(prod.image)}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                  <div className="absolute top-3 left-3 bg-[#102341] text-white text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase">
                    {prod.badge}
                  </div>
                </div>

                {/* Typography */}
                <div className="space-y-1.5 mb-3">
                  <h3 className="font-extrabold text-base text-[#102341] leading-snug font-display group-hover:text-[#1b3561] transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-gray-500 font-medium line-clamp-1">
                    {prod.subName}
                  </p>

                  <p className="text-[11px] font-semibold text-gray-700 pt-0.5">
                    Notalar: {prod.flavorNotes.join(' • ')}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                    <span>{prod.roastLevel}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <span
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full ${
                            dot <= prod.roastDots ? 'bg-[#102341]' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#102341] group-hover:translate-x-1 transition-transform">
                <span>Reçeteyi İncele</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
