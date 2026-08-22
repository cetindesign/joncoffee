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
    <section id="sss" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Yardım & Merak Edilenler
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#102341] tracking-tight font-display uppercase">
            SIKÇA SORULAN SORULAR
          </h2>
          <p className="text-sm sm:text-base font-medium text-gray-600">
            Ziyaretiniz ve siparişleriniz öncesinde aklınıza takılabilecek yanıtlar.
          </p>
        </div>

        <div className="space-y-4">
          {STORE_INFO.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-[#f8fafc] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base text-[#102341] hover:text-[#1b3561] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-200 ${
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
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed font-medium border-t border-gray-100 bg-white">
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
