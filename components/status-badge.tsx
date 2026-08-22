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
    subtext: 'Bugün 20:30’a kadar',
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
        setStatus({
          isOpen: false,
          text: 'Kapalı',
          subtext: `${day === 0 ? 'Pazartesi' : 'Yarın'} ${nextOpenDay?.open || '09:00'}`,
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
          text: 'Açık',
          subtext: `${todayConfig.close}'a kadar`,
        });
      } else {
        const nextDayIndex = (day + 1) % 7;
        const nextDayConfig = STORE_INFO.hours.find((h) => h.dayIndex === nextDayIndex);
        const opensWhen = nextDayConfig?.isOpen
          ? `Yarın ${nextDayConfig.open}`
          : 'Pazartesi 09:00';

        setStatus({
          isOpen: false,
          text: 'Kapalı',
          subtext: opensWhen,
        });
      }
    }

    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

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
      <span className="font-bold text-[#102341] tracking-wide">{status.text}</span>
      {showDetails && (
        <span className="text-gray-500 font-medium flex items-center gap-1">
          <span>&bull;</span>
          <Clock className="w-3 h-3 text-gray-400" />
          <span>{status.subtext}</span>
        </span>
      )}
    </div>
  );
}
