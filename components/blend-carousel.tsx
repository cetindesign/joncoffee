'use client';

import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
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
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blends" className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 pb-4 border-b border-gray-100">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
              Koleksiyon & Reçeteler
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
              ÖNE ÇIKAN KAHVELERİMİZ
            </h2>
          </div>

          <span className="hidden sm:inline-block text-xs font-bold text-[#102341] uppercase tracking-wider bg-gray-100 px-3.5 py-1.5 rounded-full">
            ✦ %100 SPECIALTY ARABICA
          </span>
        </div>

        {/* Mobile: Horizontal Snap Carousel | Desktop: 4-Col Grid */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {PRODUCTS.map((prod) => (
            <a
              key={prod.id}
              href="#menu"
              onClick={scrollToMenu}
              className="group min-w-[260px] max-w-[280px] sm:min-w-0 sm:max-w-none snap-start shrink-0 bg-white rounded-3xl border border-gray-200 p-4 sm:p-5 flex flex-col justify-between hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div>
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-[#e3ecf1] text-[#102341] px-2.5 py-0.5 rounded-full">
                    {prod.badge}
                  </span>

                  <div className="flex items-center gap-1 text-[11px] text-gray-500 font-semibold">
                    <Star className="w-3 h-3 fill-[#fab80b] text-[#fab80b]" />
                    <span>4.9 ({prod.reviewsCount})</span>
                  </div>
                </div>

                {/* Product Photo Container */}
                <div className={`relative w-full aspect-square ${prod.bgPedestal} rounded-2xl overflow-hidden mb-4`}>
                  <Image
                    src={assetPath(prod.image)}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="space-y-1 mb-4">
                  <h3 className="font-extrabold text-base text-[#102341] leading-snug font-display group-hover:text-[#1b3561] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium line-clamp-1">
                    {prod.subName}
                  </p>

                  {/* Flavor Notes */}
                  <div className="flex flex-wrap gap-1 pt-1.5">
                    {prod.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[9px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Roast Meter */}
                  <div className="pt-2 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-gray-500">
                    <span>{prod.roastLevel}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <span
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full ${
                            dot <= prod.roastDots ? 'bg-[#102341]' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Discreet Text Link */}
              <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#102341] group-hover:translate-x-0.5 transition-transform">
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
