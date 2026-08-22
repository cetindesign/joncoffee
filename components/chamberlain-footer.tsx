'use client';

import Image from 'next/image';
import Link from 'next/link';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';
import { ArrowUp } from 'lucide-react';

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export function ChamberlainFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102341] text-white pt-12 sm:pt-20 pb-8 sm:pb-12 px-3.5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white p-0.5">
                <Image
                  src={assetPath('/assets/jon-badge-circle.png')}
                  alt="Jön Coffee Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg sm:text-xl text-white font-display leading-none block uppercase tracking-tight">
                  JÖN COFFEES CO.
                </span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase mt-0.5 block">
                  İzmir Hatay &bull; Türkiye
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm font-medium">
              %100 nitelikli Arabica çekirdekler, Focused & Surprised ruhu ve samimi mahalle kahveciliği deneyimi.
            </p>

            <div>
              <a
                href={STORE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{STORE_INFO.socials.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Kahveler */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">
              KAHVELERİMİZ
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="#blends" className="hover:text-white transition-colors">
                  Focused Espresso Blend
                </Link>
              </li>
              <li>
                <Link href="#blends" className="hover:text-white transition-colors">
                  JÖN Sunrise İmza İçecek
                </Link>
              </li>
              <li>
                <Link href="#blends" className="hover:text-white transition-colors">
                  16 Saat Demleme Cold Brew
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-white transition-colors">
                  Tüm Kafe Menüsü
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hikaye & Kafemiz */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">
              HİKAYE & KAFEMİZ
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="#karakterler" className="hover:text-white transition-colors">
                  Focused & Surprised
                </Link>
              </li>
              <li>
                <Link href="#konum" className="hover:text-white transition-colors">
                  İzmir Hatay Kafe
                </Link>
              </li>
              <li>
                <Link href="#sss" className="hover:text-white transition-colors">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="#kahve-testi" className="hover:text-white transition-colors">
                  Kahve Seçim Testi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Saatler & Metro */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400">
              ÇALIŞMA SAATLERİ
            </h4>
            <div className="space-y-1 text-xs sm:text-sm text-gray-300 font-medium">
              <p>Hafta İçi: 08:30 - 23:30</p>
              <p>Cuma - Cmt: 08:30 - 00:00</p>
              <p>Pazar: 09:30 - 23:00</p>
            </div>
            <p className="text-[10px] sm:text-[11px] text-gray-400 pt-1">
              Hatay & İzmirspor Metrolarına 2 dk.
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Jön Coffees Co. Tüm Hakları Saklıdır. İzmir / Hatay.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-gray-300">
              <span>🇹🇷</span>
              <span className="font-medium">Türkiye (TRY ₺)</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium"
            >
              <span>Yukarı</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
