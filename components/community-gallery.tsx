'use client';

import Image from 'next/image';
import { STORE_INFO } from '@/data/store-info';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const GALLERY = [
  {
    image: '/assets/gallery-latte.jpg',
    tag: 'Barista Latte Art',
  },
  {
    image: '/assets/gallery-pet.jpg',
    tag: '%100 Pet-Friendly',
  },
  {
    image: '/assets/gallery-workspace.jpg',
    tag: 'Çalışma & Odaklanma',
  },
  {
    image: '/assets/jon-table-atmosphere.jpg',
    tag: 'Hatay Mahalle Ruhu',
  },
];

export function CommunityGallery() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Topluluk & Anlar
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
              #JÖNCOFFEEMOMENTS
            </h2>
          </div>

          <a
            href={STORE_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#102341] hover:text-[#1b3561] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>{STORE_INFO.socials.instagramHandle} Takip Et</span>
          </a>
        </div>

        {/* 4-Image UGC Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden aspect-square bg-gray-100 border border-gray-200 shadow-xs"
            >
              <Image
                src={item.image}
                alt={item.tag}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-bold text-white tracking-wide">
                  ✦ {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
