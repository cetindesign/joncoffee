'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { STORE_INFO } from '@/data/store-info';
import { Coffee, MapPin } from 'lucide-react';

export function FloatingAction() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm md:hidden"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-full border border-gray-200 p-1.5 shadow-xl flex items-center justify-between gap-2">
            <Link
              href="#menu"
              className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] py-2.5 px-4 rounded-full bg-gray-100 text-xs font-bold text-[#102341] active:scale-95 transition-transform select-none"
            >
              <Coffee className="w-4 h-4" />
              <span>Menü</span>
            </Link>

            <a
              href={STORE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] py-2.5 px-4 rounded-full bg-[#102341] text-white text-xs font-bold active:scale-95 transition-transform shadow-xs select-none"
            >
              <MapPin className="w-4 h-4" />
              <span>Yol Tarifi</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
