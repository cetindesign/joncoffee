'use client';

import Image from 'next/image';
import Link from 'next/link';
import { STORE_INFO } from '@/data/store-info';
import { MapPin, Coffee, Heart, ArrowUp, Star } from 'lucide-react';

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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-jon-blue text-white pt-16 pb-12 px-4 sm:px-6 relative overflow-hidden border-t-4 border-jon-yellow">
      {/* Background star accents */}
      <div className="absolute top-8 right-8 text-white/10 text-9xl font-black pointer-events-none select-none">
        ✦
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-white p-0.5">
                <Image
                  src="/assets/jon-badge-circle.png"
                  alt="Jön Coffee Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white font-display leading-none block">
                  JÖN COFFEES CO.
                </span>
                <span className="text-[11px] text-white/70 font-semibold tracking-wider uppercase">
                  Hatay &bull; İzmir
                </span>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed font-medium">
              İzmir Hatay&apos;da &apos;Focused&apos; ve &apos;Surprised&apos; kahve severler için özenle kavrulmuş çekirdekler ve samimi mahalle atmosferi.
            </p>

            <div className="pt-2">
              <a
                href={STORE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-jon-yellow" />
                <span>{STORE_INFO.socials.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-jon-yellow flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-jon-yellow" /> Hızlı Gezinme
            </h4>
            <ul className="space-y-2 text-xs font-medium text-white/80">
              <li>
                <Link href="#ozeller" className="hover:text-white transition-colors">
                  İmza Lezzetler (JÖN Sunrise)
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-white transition-colors">
                  Tüm Kahve Menüsü
                </Link>
              </li>
              <li>
                <Link href="#hikaye" className="hover:text-white transition-colors">
                  Karakterler & Hikayemiz
                </Link>
              </li>
              <li>
                <Link href="#kahve-testi" className="hover:text-white transition-colors">
                  Kahve Seçim Testi
                </Link>
              </li>
              <li>
                <Link href="#konum" className="hover:text-white transition-colors">
                  Çalışma Saatleri & Ulaşım
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Metro */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-jon-yellow flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-jon-yellow" /> Konum & Ulaşım
            </h4>
            <p className="text-xs text-white/80 leading-relaxed font-medium">
              İnönü Caddesi Yakını, Hatay / İzmir
            </p>
            <p className="text-[11px] text-white/70 leading-relaxed">
              İzmir Metrosu Hatay & İzmirspor İstasyonlarına sadece 2-3 dakika yürüme mesafesinde.
            </p>
            <a
              href={STORE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-bold text-jon-yellow underline decoration-jon-yellow hover:text-white transition-colors"
            >
              Haritada Görüntüle &rarr;
            </a>
          </div>

          {/* Working Hours Summary */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-jon-yellow">
              Çalışma Saatleri
            </h4>
            <div className="space-y-1.5 text-xs text-white/80 font-medium">
              <div className="flex justify-between">
                <span>Hafta İçi (Pzt-Per):</span>
                <span className="font-bold text-white">08:30 - 23:30</span>
              </div>
              <div className="flex justify-between">
                <span>Cuma:</span>
                <span className="font-bold text-white">08:30 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Cumartesi:</span>
                <span className="font-bold text-white">09:00 - 00:00</span>
              </div>
              <div className="flex justify-between">
                <span>Pazar:</span>
                <span className="font-bold text-white">09:30 - 23:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Jön Coffees Co. Tüm hakları saklıdır. İzmir / Hatay.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Sevgiyle demlendi <Heart className="w-3 h-3 text-rose-400 fill-rose-400 inline" />
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Yukarı çık"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 font-bold"
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
