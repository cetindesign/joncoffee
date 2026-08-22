'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  {
    title: 'Soğuk Kahveler & Cold Brew',
    subtitle: '16 Saat Yavaş Demleme & Ferahlık',
    image: '/assets/product-coldbrew.jpg',
    href: '#menu',
  },
  {
    title: 'Taze Çekirdek & Kavrum',
    subtitle: '%100 Single Origin Arabica',
    image: '/assets/product-beans.jpg',
    href: '#menu',
  },
  {
    title: 'İmza Reçete: JÖN Sunrise',
    subtitle: 'Portakal Suyu + Taze Double Espresso',
    image: '/assets/product-sunrise.jpg',
    href: '#ozeller',
  },
  {
    title: 'Affogato & Tatlı Dokunuş',
    subtitle: 'Vanilyalı İtalyan Gelato Füzyonu',
    image: '/assets/product-affogato.jpg',
    href: '#ozeller',
  },
];

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#fbf9f4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Kategorilere Göre Keşfet
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#102341] tracking-tight font-display uppercase">
            HER MODA UYGUN BİR YUDUM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="group relative rounded-3xl overflow-hidden aspect-4/5 bg-gray-100 flex flex-col justify-end p-6 border border-gray-200 shadow-xs"
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102341]/90 via-[#102341]/30 to-transparent" />

              {/* Text & Arrow */}
              <div className="relative z-10 space-y-1">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                  {cat.subtitle}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-white font-display leading-tight">
                    {cat.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#102341] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
