'use client';

import { useState } from 'react';
import { STORE_INFO } from '@/data/store-info';
import { StatusBadge } from './status-badge';
import { useLanguage } from '@/context/language-context';
import { Compass, Copy, Check, MapPin, Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

const DAY_NAMES_EN: Record<number, string> = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  0: 'Sunday',
};

export function LocationHours() {
  const currentDayIndex = new Date().getDay();
  const [copied, setCopied] = useState(false);
  const { t, locale } = useLanguage();

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(STORE_INFO.location.fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard fallback
    }
  };

  return (
    <section id="konum" className="scroll-mt-28 sm:scroll-mt-32 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#0038a8]/15">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#0038a8]/20">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
              {t.location.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0038a8] tracking-tight font-display uppercase">
              {t.location.title}
            </h2>
          </div>

          <StatusBadge showDetails />
        </div>

        {/* 2-Column Store Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Col: Address & Embedded Google Maps (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-3">
              <div>
                <p className="text-base sm:text-lg font-black text-[#0038a8] font-display">
                  {STORE_INFO.location.addressText}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed pt-1">
                  {locale === 'tr' ? (
                    <>İzmir Metrosu <strong>Hatay İstasyonu</strong>&apos;nda inerek sadece 2 dakikalık düzayak yürüyüşle kafemize ulaşabilirsiniz.</>
                  ) : (
                    <>Just a 2-minute flat walk after exiting Izmir Metro <strong>Hatay Station</strong>.</>
                  )}
                </p>
              </div>

              {/* 1-Tap Action Bar */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleCopyAddress}
                  className="btn-chamberlain-secondary py-2 px-3.5 text-xs font-bold justify-center cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{t.location.addressCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#0038a8]" />
                      <span>{t.location.copyAddress}</span>
                    </>
                  )}
                </button>

                <a
                  href={STORE_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chamberlain-primary py-2 px-3.5 text-xs justify-center cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{t.location.openInMaps}</span>
                </a>
              </div>
            </div>

            {/* Embedded Live Google Maps */}
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#0038a8]/20 shadow-sm bg-[#faf8f2]">
              <iframe
                title="Jön Coffee İzmir Hatay Google Harita Konumu"
                src={STORE_INFO.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Col: Weekly Hours Table (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-[#0038a8]/20">
              <Compass className="w-4 h-4 text-[#0038a8]" />
              <h3 className="font-black text-xs uppercase tracking-widest text-[#0038a8] font-display">
                {t.location.weeklyHoursTitle}
              </h3>
            </div>

            {/* Clean Typographic Rows */}
            <div className="divide-y divide-[#0038a8]/10 text-xs sm:text-sm">
              {STORE_INFO.hours.map((item) => {
                const isToday = item.dayIndex === currentDayIndex;
                const dayName = locale === 'en' ? DAY_NAMES_EN[item.dayIndex] : item.day;

                return (
                  <div
                    key={item.dayIndex}
                    className={`py-3 flex items-center justify-between transition-colors ${
                      isToday ? 'font-black text-[#0038a8]' : 'text-gray-700 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{dayName}</span>
                      {isToday && (
                        <span className="text-[9px] font-black bg-[#0038a8] text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-display">
                          {t.location.todayBadge}
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-xs tracking-tight text-right font-bold">
                      {item.isOpen ? `${item.open} - ${item.close}` : t.location.closed}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Note & Direct Contact */}
            <div className="pt-4 border-t border-[#0038a8]/15 space-y-3">
              <div className="space-y-1 text-xs text-gray-600 font-medium">
                <p>&bull; {t.location.sundayClosed}</p>
                <p>&bull; {t.location.weekdayHours}</p>
                <p>&bull; {t.location.petFriendlyGarden}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={STORE_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chamberlain-primary py-2 px-3 text-xs justify-center cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.location.whatsapp}</span>
                </a>
                <a
                  href={`tel:${STORE_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="btn-chamberlain-secondary py-2 px-3 text-xs justify-center cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0038a8]" />
                  <span>{STORE_INFO.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
