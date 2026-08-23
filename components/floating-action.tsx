'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORE_INFO } from '@/data/store-info';
import { smoothScrollTo } from '@/lib/smooth-scroll';
import { Coffee, MapPin } from 'lucide-react';

export function FloatingAction() {
  const [visible, setVisible] = useState(false);
  const [isInMenu, setIsInMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 240);

      const menuEl = document.getElementById('menu');
      if (menuEl) {
        const rect = menuEl.getBoundingClientRect();
        // Active when menu is in the central view of the viewport
        const inMenu = rect.top <= 140 && rect.bottom >= 180;
        setIsInMenu(inMenu);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScrollTo('menu');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-sm md:hidden"
        >
          <div className="bg-[#faf8f2]/95 backdrop-blur-md rounded-full border border-[#0038a8]/25 p-1.5 shadow-xl flex items-center justify-between gap-2">
            {/* Menu button hides dynamically when browsing inside Menu section */}
            <AnimatePresence>
              {!isInMenu && (
                <motion.a
                  initial={{ opacity: 0, scale: 0.9, width: 0 }}
                  animate={{ opacity: 1, scale: 1, width: '100%' }}
                  exit={{ opacity: 0, scale: 0.85, width: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  href="#menu"
                  onClick={scrollToMenu}
                  className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] py-2.5 px-4 rounded-full bg-white text-xs font-black text-[#0038a8] border border-[#0038a8]/20 active:scale-95 transition-transform duration-200 select-none cursor-pointer font-display uppercase tracking-wider overflow-hidden whitespace-nowrap"
                >
                  <Coffee className="w-4 h-4 text-[#0038a8] shrink-0" />
                  <span>Menü</span>
                </motion.a>
              )}
            </AnimatePresence>

            <a
              href={STORE_INFO.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 min-h-[44px] py-2.5 px-4 rounded-full bg-[#0038a8] text-white text-xs font-black active:scale-95 transition-transform duration-200 shadow-xs select-none font-display uppercase tracking-wider"
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Yol Tarifi</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
