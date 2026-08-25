'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  ALLERGEN_INFO,
  MenuItem,
} from '@/data/menu';
import {
  MENU_ITEMS_EN,
} from '@/data/translations';
import { useLanguage } from '@/context/language-context';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { STORE_INFO } from '@/data/store-info';
import {
  Star,
  X,
  ChevronRight,
  Share2,
  Check,
} from 'lucide-react';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('sicak-kahveler');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [copied, setCopied] = useState(false);
  const { t, locale } = useLanguage();

  const handleSelectItem = useCallback((item: MenuItem | null) => {
    setSelectedItem(item);
    setCopied(false);
    if (typeof window !== 'undefined') {
      if (item) {
        const url = new URL(window.location.href);
        url.searchParams.set('item', item.id);
        window.history.replaceState(null, '', url.toString());
      } else {
        const url = new URL(window.location.href);
        url.searchParams.delete('item');
        window.history.replaceState(null, '', url.toString());
      }
    }
  }, []);

  // Deep Link & Custom Event Listener
  useEffect(() => {
    const checkDeepLink = () => {
      const params = new URLSearchParams(window.location.search);
      const itemId = params.get('item');
      if (itemId) {
        const match = MENU_ITEMS.find((m) => m.id === itemId);
        if (match) {
          setSelectedItem(match);
        }
      }
    };

    checkDeepLink();

    const handleCustomOpen = (e: Event) => {
      const customEvt = e as CustomEvent<{ itemId: string }>;
      const itemId = customEvt.detail?.itemId;
      if (itemId) {
        const match = MENU_ITEMS.find((m) => m.id === itemId);
        if (match) {
          setSelectedItem(match);
        }
      }
    };

    window.addEventListener('popstate', checkDeepLink);
    window.addEventListener('open-menu-item', handleCustomOpen);

    return () => {
      window.removeEventListener('popstate', checkDeepLink);
      window.removeEventListener('open-menu-item', handleCustomOpen);
    };
  }, []);

  // Close Bottom Sheet on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleSelectItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSelectItem]);

  // Lock body scroll when Bottom Sheet is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  const getItemData = (item: MenuItem) => {
    if (locale === 'en' && MENU_ITEMS_EN[item.id]) {
      return {
        name: MENU_ITEMS_EN[item.id].name,
        description: MENU_ITEMS_EN[item.id].description,
        badge: MENU_ITEMS_EN[item.id].badge || item.badge,
      };
    }
    return {
      name: item.name,
      description: item.description,
      badge: item.badge,
    };
  };

  const handleShare = async (item: MenuItem) => {
    const itemData = getItemData(item);
    const shareUrl = `${window.location.origin}${window.location.pathname}?item=${item.id}#menu`;
    const shareData = {
      title: `${itemData.name} | Jön Coffee İzmir`,
      text: `${itemData.name} - ${itemData.description}`,
      url: shareUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Clipboard error
      }
    }
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="scroll-mt-28 sm:scroll-mt-32 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f2] border-b border-[#0038a8]/15">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="pb-4 border-b border-[#0038a8]/20 space-y-1">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
            {t.menu.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0038a8] tracking-tight font-display uppercase">
            {t.menu.title}
          </h2>
        </div>

        {/* Category Star Tabs (Clean & Focused) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const catTranslation = t.menuCategories[cat.id as keyof typeof t.menuCategories];
            const catTitle = catTranslation ? catTranslation.title : cat.title;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all duration-200 select-none uppercase tracking-wider font-display cursor-pointer ${
                  isActive
                    ? 'bg-[#0038a8] text-white shadow-xs'
                    : 'bg-white text-[#0038a8] border border-[#0038a8]/30 hover:border-[#0038a8]'
                }`}
              >
                ★ {catTitle} ★
              </button>
            );
          })}
        </div>

        {/* Poster Style Editorial Typographic List with Dot Leaders */}
        <div className="min-h-[440px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + locale}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="divide-y divide-[#0038a8]/15"
            >
              {filteredItems.map((item) => {
                const itemData = getItemData(item);

                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelectItem(item)}
                    className="group py-4 sm:py-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#0038a8]/5 -mx-3 px-3 rounded-xl transition-colors select-none"
                  >
                    <div className="space-y-1 max-w-xl flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-extrabold text-base sm:text-lg text-[#0038a8] font-display group-hover:opacity-85 transition-opacity">
                          {itemData.name}
                        </h3>

                        {/* Dot Leader */}
                        <span className="hidden md:inline-block text-[#0038a8]/25 font-mono text-xs tracking-widest select-none">
                          ........................................
                        </span>

                        {itemData.badge ? (
                          <span className="bg-[#0038a8] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider font-display">
                            ★ {itemData.badge}
                          </span>
                        ) : item.isPopular ? (
                          <span className="bg-[#fab80b] text-[#0038a8] text-[9px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider font-display">
                            <Star className="w-2.5 h-2.5 fill-[#0038a8] text-[#0038a8]" /> {t.menu.popular}
                          </span>
                        ) : null}
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                        {itemData.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[11px] text-[#0038a8]/80 font-bold">
                        <span>{item.isCold ? t.menu.coldServing : t.menu.hotServing}</span>
                        {item.calories && (
                          <>
                            <span>&bull;</span>
                            <span>{item.calories}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5 text-xs font-black text-[#0038a8] group-hover:translate-x-1 transition-all pt-1 sm:pt-0 font-display uppercase">
                      <span className="hidden sm:inline">{t.menu.recipeDetail}</span>
                      <div className="w-7 h-7 rounded-full bg-white border border-[#0038a8]/30 flex items-center justify-center shadow-2xs group-hover:border-[#0038a8]">
                        <ChevronRight className="w-4 h-4 text-[#0038a8]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Solid Cobalt Poster Bottom Strip for Allergens & Calories */}
        <div className="rounded-3xl bg-[#0038a8] text-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed font-medium shadow-md">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-black uppercase tracking-wider text-xs font-display">
              <div className="w-5 h-5 rounded-full bg-white text-[#0038a8] flex items-center justify-center font-black text-[11px]">
                !
              </div>
              <span>{t.menu.allergenTitle}</span>
            </div>
            <p className="text-white/85 text-[11px] sm:text-xs">
              {t.menu.allergenContent}
            </p>
          </div>

          <div className="space-y-1.5 md:border-l md:border-white/20 md:pl-6">
            <div className="flex items-center gap-2 text-white font-black uppercase tracking-wider text-xs font-display">
              <span className="text-white">★</span>
              <span>{t.menu.nutritionTitle}</span>
            </div>
            <p className="text-white/85 text-[11px] sm:text-xs">
              {t.menu.nutritionContent}
            </p>
          </div>
        </div>
      </div>

      {/* Item Detail Bottom Sheet with Direct Deep Link */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-xs"
            onClick={() => handleSelectItem(null)}
          >
            {(() => {
              const itemData = getItemData(selectedItem);
              return (
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#faf8f2] w-full max-w-lg rounded-t-3xl sm:rounded-3xl border-2 border-[#0038a8] shadow-2xl p-6 sm:p-8 space-y-5 select-none"
                >
                  <div className="flex items-start justify-between gap-4 border-b border-[#0038a8]/20 pb-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0038a8]/70 font-display">
                        {t.menu.modalBadge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0038a8] uppercase font-display tracking-tight">
                        {itemData.name}
                      </h3>
                    </div>
                    <button
                      onClick={() => handleSelectItem(null)}
                      className="w-8 h-8 rounded-full bg-white border border-[#0038a8]/30 flex items-center justify-center text-[#0038a8] hover:bg-[#0038a8] hover:text-white transition-colors cursor-pointer"
                      aria-label={t.menu.close}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                    {itemData.description}
                  </p>

                  {/* Recipe Specifications */}
                  <div className="space-y-2.5 p-4 rounded-2xl bg-white border border-[#0038a8]/15 text-xs">
                    <div className="flex justify-between">
                      <span className="font-extrabold text-[#0038a8]">{t.menu.calories}</span>
                      <span className="font-semibold text-gray-700">{selectedItem.calories || (locale === 'tr' ? 'Standart' : 'Standard')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-extrabold text-[#0038a8]">{t.menu.milkOptions}</span>
                      <span className="font-semibold text-gray-700">{t.menu.milkOptionsValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-extrabold text-[#0038a8]">{t.menu.servingType}</span>
                      <span className="font-semibold text-gray-700">{selectedItem.isCold ? t.menu.servingCold : t.menu.servingHot}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedItem.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full bg-[#0038a8]/10 text-[#0038a8] text-[10px] font-bold border border-[#0038a8]/15"
                      >
                        ★ {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2.5 pt-2">
                    <a
                      href={`https://wa.me/${STORE_INFO.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        locale === 'tr'
                          ? `Merhaba Jön Coffee, gelip dükkandan teslim almak üzere "${itemData.name}" hazırlatmak istiyorum.`
                          : `Hello Jön Coffee, I would like to order "${itemData.name}" for in-store pickup.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-chamberlain-primary w-full py-3.5 sm:py-4 px-6 text-xs sm:text-sm justify-center cursor-pointer shadow-md"
                    >
                      <WhatsAppIcon className="w-4 h-4 shrink-0" />
                      <span>{t.menu.orderWhatsApp}</span>
                    </a>

                    <p className="text-[11px] text-gray-500 text-center font-medium">
                      {t.menu.pickupNote}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => handleShare(selectedItem)}
                        className="btn-chamberlain-secondary py-2.5 px-3 text-xs tracking-wider justify-center min-h-[40px] cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">{t.menu.copied}</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5 text-[#0038a8]" />
                            <span>{t.menu.shareWithFriend}</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleSelectItem(null)}
                        className="btn-chamberlain-secondary py-2.5 px-3 text-xs tracking-wider justify-center min-h-[40px] cursor-pointer"
                      >
                        {t.menu.close}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
