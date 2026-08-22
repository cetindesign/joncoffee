'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { STORE_INFO } from '@/data/store-info';
import { Coffee, MapPin, Sparkles } from 'lucide-react';

export function FloatingAction() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm md:hidden">
      <div className="bg-white/95 backdrop-blur-md rounded-full border border-gray-200 p-1.5 shadow-lg flex items-center justify-between gap-2">
        <Link
          href="#menu"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-gray-100 text-xs font-bold text-[#102341] active:scale-95 transition-all"
        >
          <Coffee className="w-3.5 h-3.5" />
          <span>Menü</span>
        </Link>

        <a
          href={STORE_INFO.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-[#102341] text-white text-xs font-bold active:scale-95 transition-all shadow-xs"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Yol Tarifi</span>
        </a>
      </div>
    </div>
  );
}
