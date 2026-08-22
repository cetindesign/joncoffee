'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORE_INFO } from '@/data/store-info';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="sss" className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2 sm:space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Yardım & Merak Edilenler
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#102341] tracking-tight font-display uppercase">
            SIKÇA SORULAN SORULAR
          </h2>
          <p className="text-xs sm:text-base font-medium text-gray-600">
            Ziyaretiniz öncesinde aklınıza takılabilecek yanıtlar.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {STORE_INFO.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-[#f8fafc] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#102341] hover:text-[#1b3561] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#102341]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4 sm:p-6 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium border-t border-gray-100">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
