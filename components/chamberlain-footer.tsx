'use client';

import Image from 'next/image';
import { STORE_INFO } from '@/data/store-info';
import { assetPath } from '@/lib/assets';
import { smoothScrollTo } from '@/lib/smooth-scroll';
import { useLanguage } from '@/context/language-context';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
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
  const { t, locale } = useLanguage();

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  const scrollToTop = () => {
    smoothScrollTo('top');
  };

  return (
    <footer className="bg-[#0038a8] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Top: 3-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pb-12 border-b border-white/20">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 shrink-0 rounded-full overflow-hidden border border-white/30 bg-white/10 p-0.5">
                <Image
                  src={assetPath('/assets/jon-badge-circle.png')}
                  alt="Jön Coffees Co."
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
              {t.footer.brandDesc}
            </p>

            <div>
              <a
                href={STORE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#fab80b] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{STORE_INFO.socials.instagramHandle} {t.footer.followInstagram}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Hızlı Erişim */}
          <div className="space-y-3">
            <h4 className="font-black text-xs uppercase tracking-widest text-white/80 font-display">
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/90 font-medium">
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, 'menu')}
                  className="hover:text-[#fab80b] transition-colors cursor-pointer"
                >
                  {t.nav.menu}
                </a>
              </li>
              <li>
                <a
                  href="#blends"
                  onClick={(e) => handleNavClick(e, 'blends')}
                  className="hover:text-[#fab80b] transition-colors cursor-pointer"
                >
                  {t.nav.blends}
                </a>
              </li>
              <li>
                <a
                  href="#karakterler"
                  onClick={(e) => handleNavClick(e, 'karakterler')}
                  className="hover:text-[#fab80b] transition-colors cursor-pointer"
                >
                  {t.nav.story}
                </a>
              </li>
              <li>
                <a
                  href="#konum"
                  onClick={(e) => handleNavClick(e, 'konum')}
                  className="hover:text-[#fab80b] transition-colors cursor-pointer"
                >
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Çalışma Saatleri & İletişim */}
          <div className="space-y-3">
            <h4 className="font-black text-xs uppercase tracking-widest text-white/80 font-display">
              {t.footer.hoursTitle}
            </h4>
            <div className="space-y-1 text-xs sm:text-sm text-white/90 font-medium">
              <p>{t.footer.hoursText}</p>
              <p className="text-[#fab80b] font-bold">{t.footer.sundayText}</p>
            </div>
            <div className="pt-1 text-xs space-y-1">
              <a
                href={STORE_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-[#fab80b] transition-colors font-semibold"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp: {STORE_INFO.contact.phone}</span>
              </a>
            </div>
            <p className="text-[10px] sm:text-[11px] text-white/70 pt-0.5 font-semibold">
              {t.footer.metroFootnote}
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/75">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} {t.footer.rightsReserved}</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-white font-semibold">
              <span>🇹🇷</span>
              <span>{t.footer.countryCurrency}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white hover:text-[#fab80b] transition-colors font-bold cursor-pointer uppercase tracking-wider text-xs font-display"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
