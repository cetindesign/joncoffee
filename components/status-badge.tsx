'use client';

import { useState, useEffect } from 'react';
import { STORE_INFO } from '@/data/store-info';
import { Clock } from 'lucide-react';

export function StatusBadge({ showDetails = false }: { showDetails?: boolean }) {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    text: string;
    subtext: string;
  }>({
    isOpen: true,
    text: 'Açık',
    subtext: 'Bugün 23:30’a kadar',
  });

  useEffect(() => {
    function checkOpenStatus() {
      // Use local Istanbul time
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday...
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentTimeInMinutes = currentHours * 60 + currentMinutes;

      const todayConfig = STORE_INFO.hours.find((h) => h.dayIndex === day);

      if (!todayConfig) {
        setStatus({ isOpen: false, text: 'Kapalı', subtext: 'Yarın 08:30’da açık' });
        return;
      }

      const [openHour, openMin] = todayConfig.open.split(':').map(Number);
      const openTimeInMinutes = openHour * 60 + openMin;

      let [closeHour, closeMin] = todayConfig.close.split(':').map(Number);
      if (closeHour === 0) closeHour = 24;
      const closeTimeInMinutes = closeHour * 60 + closeMin;

      const isOpenNow =
        currentTimeInMinutes >= openTimeInMinutes &&
        currentTimeInMinutes < closeTimeInMinutes;

      if (isOpenNow) {
        setStatus({
          isOpen: true,
          text: 'Şu An Açık',
          subtext: `Kapanış: ${todayConfig.close}`,
        });
      } else {
        const nextOpenDay = STORE_INFO.hours.find(
          (h) => h.dayIndex === (day + 1) % 7
        );
        setStatus({
          isOpen: false,
          text: 'Şu An Kapalı',
          subtext: `Açılış: Yarın ${nextOpenDay?.open || '08:30'}`,
        });
      }
    }

    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
        status.isOpen
          ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/30'
          : 'bg-amber-500/10 text-amber-800 border border-amber-500/30'
      }`}
    >
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
      <span className="font-bold">{status.text}</span>
      {showDetails && (
        <>
          <span className="text-jon-text-muted/40">•</span>
          <span className="text-jon-text-muted flex items-center gap-1 font-medium">
            <Clock className="w-3 h-3 inline" />
            {status.subtext}
          </span>
        </>
      )}
    </div>
  );
}
