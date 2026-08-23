'use client';

import Image from 'next/image';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';
import { smoothScrollTo } from '@/lib/smooth-scroll';
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
    smoothScrollTo('top');
  };

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <footer className="bg-[#0038a8] text-white pt-12 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border-2 border-white">
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
                <span className="text-[10px] text-white/80 font-bold tracking-widest uppercase mt-0.5 block font-display">
                  ★ İzmir Hatay &bull; Türkiye
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-sm font-medium">
              %100 nitelikli Arabica çekirdekler, günlük taze kavrumlar ve samimi mahalle kahveciliği deneyimi.
            </p>

            <div>
              <a
                href={STORE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#fab80b] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{STORE_INFO.socials.instagramHandle} Takip Et</span>
              </a>
            </div>
          </div>

          {/* Col 2: Hızlı Erişim */}
          <div className="space-y-3">
            <h4 className="font-black text-xs uppercase tracking-widest text-white/80 font-display">
              ★ KEŞFET
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/90 font-medium">
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, 'menu')}
                  className="hover:text-[#fab80b] transition-colors cursor-pointer"
                >
                  Menü
                </a>
              </li>
              <li>
                <a
                  href="#blends"
                  onClick={(e) => handleNavClick(e, 'blends')}
                  className="hover:text-[#fab80b] transition-colors cursor-pointer"
                >
                  Paket Kahveler
                </a>
              </li>
              <li>
                <a
                  href="#karakterler"
                  onClick={(e) => handleNavClick(e, 'karakterler')}
                  className="hover:text-[#fab80b] transition-colors cursor-pointer"
                >
                  Mahalle Kültürü
                </a>
              </li>
              <li>
                <a
                  href="#konum"
                  onClick={(e) => handleNavClick(e, 'konum')}
                  className="hover:text-[#fab80b] transition-colors cursor-pointer"
                >
                  Konum & Yol Tarifi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Çalışma Saatleri */}
          <div className="space-y-3">
            <h4 className="font-black text-xs uppercase tracking-widest text-white/80 font-display">
              ★ ÇALIŞMA SAATLERİ
            </h4>
            <div className="space-y-1 text-xs sm:text-sm text-white/90 font-medium">
              <p>Pzt - Cmt: 09:00 - 20:30</p>
              <p className="text-[#fab80b] font-bold">Pazar: Kapalı</p>
            </div>
            <p className="text-[10px] sm:text-[11px] text-white/70 pt-1 font-semibold">
              Hatay Metrosu&apos;na 2 dk yürüyüş mesafesinde.
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/75">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Jön Coffees Co. Tüm Hakları Saklıdır. İzmir / Hatay.</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-white font-semibold">
              <span>🇹🇷</span>
              <span>Türkiye (TRY ₺)</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white hover:text-[#fab80b] transition-colors font-bold cursor-pointer uppercase tracking-wider text-xs font-display"
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
