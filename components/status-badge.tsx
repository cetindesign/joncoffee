'use client';

import { useState, useEffect } from 'react';
import { STORE_INFO } from '@/data/store-info';
import { useLanguage } from '@/context/language-context';
import { Clock } from 'lucide-react';

export function StatusBadge({ showDetails = false }: { showDetails?: boolean }) {
  const { locale } = useLanguage();
  const [status, setStatus] = useState<{
    isOpen: boolean;
    text: string;
    subtext: string;
  }>({
    isOpen: true,
    text: locale === 'tr' ? 'Açık' : 'Open',
    subtext: locale === 'tr' ? 'Bugün 20:30’a kadar' : 'Until 20:30 today',
  });

  useEffect(() => {
    function checkOpenStatus() {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday...
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentTimeInMinutes = currentHours * 60 + currentMinutes;

      const todayConfig = STORE_INFO.hours.find((h) => h.dayIndex === day);

      if (!todayConfig || !todayConfig.isOpen) {
        // Sunday or closed day -> Opens Monday 09:00
        const nextOpenDay = STORE_INFO.hours.find((h) => h.isOpen);
        const openTime = nextOpenDay?.open || '09:00';
        setStatus({
          isOpen: false,
          text: locale === 'tr' ? 'Kapalı' : 'Closed',
          subtext: locale === 'tr'
            ? `${day === 0 ? 'Pazartesi' : 'Yarın'} ${openTime}`
            : `${day === 0 ? 'Mon' : 'Tomorrow'} ${openTime}`,
        });
        return;
      }

      const [openHour, openMin] = todayConfig.open.split(':').map(Number);
      const openTimeInMinutes = openHour * 60 + openMin;

      const [closeHour, closeMin] = todayConfig.close.split(':').map(Number);
      const closeTimeInMinutes = closeHour * 60 + closeMin;

      const isOpenNow =
        currentTimeInMinutes >= openTimeInMinutes &&
        currentTimeInMinutes < closeTimeInMinutes;

      if (isOpenNow) {
        setStatus({
          isOpen: true,
          text: locale === 'tr' ? 'Açık' : 'Open',
          subtext: locale === 'tr' ? `${todayConfig.close}'a kadar` : `Until ${todayConfig.close}`,
        });
      } else {
        const nextDayIndex = (day + 1) % 7;
        const nextDayConfig = STORE_INFO.hours.find((h) => h.dayIndex === nextDayIndex);
        const opensWhen = nextDayConfig?.isOpen
          ? locale === 'tr' ? `Yarın ${nextDayConfig.open}` : `Tomorrow ${nextDayConfig.open}`
          : locale === 'tr' ? 'Pazartesi 09:00' : 'Mon 09:00';

        setStatus({
          isOpen: false,
          text: locale === 'tr' ? 'Kapalı' : 'Closed',
          subtext: opensWhen,
        });
      }
    }

    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, [locale]);

  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold select-none">
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.isOpen ? 'bg-emerald-600' : 'bg-amber-600'
          }`}
        />
      </span>
      <span className="font-bold text-[#0038a8] tracking-wide">{status.text}</span>
      {showDetails && (
        <span className="text-gray-600 font-medium flex items-center gap-1">
          <span>&bull;</span>
          <Clock className="w-3 h-3 text-gray-400" />
          <span>{status.subtext}</span>
        </span>
      )}
    </div>
  );
}
