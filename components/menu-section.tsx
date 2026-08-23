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
  Search,
  Star,
  X,
  ChevronRight,
  Share2,
  Check,
  Flame,
} from 'lucide-react';

const SPRING_TRANSITION = {
  type: 'spring',
  stiffness: 180,
  damping: 24,
  mass: 0.8,
} as const;

const EASE_TRANSITION = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1],
} as const;

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('ozeller');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [copied, setCopied] = useState(false);

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

  const handleShare = async (item: MenuItem) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?item=${item.id}#menu`;
    const shareData = {
      title: `${item.name} | Jön Coffee İzmir`,
      text: `${item.name} - ${item.description}`,
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
    return MENU_ITEMS.filter((item) => {
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchTags = item.tags?.some((t) => t.toLowerCase().includes(query));
        return matchName || matchDesc || matchTags;
      }
      return item.category === activeCategory;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="scroll-mt-28 sm:scroll-mt-32 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f2] border-b border-[#0038a8]/15">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="pb-4 border-b border-[#0038a8]/20 space-y-1">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0038a8]/60 font-display">
            ★ Seçki & Reçeteler
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0038a8] tracking-tight font-display uppercase">
            MENÜ
          </h2>
        </div>

        {/* Category Star Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchQuery('');
                  }}
                  className={`relative px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all duration-200 select-none uppercase tracking-wider font-display cursor-pointer ${
                    isActive
                      ? 'bg-[#0038a8] text-white shadow-xs'
                      : 'bg-white text-[#0038a8] border border-[#0038a8]/30 hover:border-[#0038a8]'
                  }`}
                >
                  ★ {cat.title} ★
                </button>
              );
            })}
          </div>

          <div className="relative shrink-0 sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0038a8]/60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kahve ara..."
              className="w-full pl-10 pr-8 py-2 rounded-full bg-white border border-[#0038a8]/30 text-xs font-semibold text-[#0038a8] placeholder:text-[#0038a8]/40 focus:outline-none focus:border-[#0038a8] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0038a8] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Poster Style Editorial Typographic List with Dot Leaders */}
        <div className="min-h-[440px]">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="divide-y divide-[#0038a8]/15"
              >
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectItem(item)}
                    className="group py-4 sm:py-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#0038a8]/5 -mx-3 px-3 rounded-xl transition-colors select-none"
                  >
                    <div className="space-y-1 max-w-xl flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-extrabold text-base sm:text-lg text-[#0038a8] font-display group-hover:opacity-85 transition-opacity">
                          {item.name}
                        </h3>

                        {/* Dot Leader */}
                        <span className="hidden md:inline-block text-[#0038a8]/25 font-mono text-xs tracking-widest select-none">
                          ........................................
                        </span>

                        {item.badge ? (
                          <span className="bg-[#0038a8] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider font-display">
                            ★ {item.badge}
                          </span>
                        ) : item.isPopular ? (
                          <span className="bg-[#fab80b] text-[#0038a8] text-[9px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider font-display">
                            <Star className="w-2.5 h-2.5 fill-[#0038a8] text-[#0038a8]" /> Popüler
                          </span>
                        ) : null}
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[11px] text-[#0038a8]/80 font-bold">
                        <span>{item.isCold ? '❄️ Buzlu / Soğuk' : '☕ Sıcak Servis'}</span>
                        {item.calories && (
                          <>
                            <span>&bull;</span>
                            <span>{item.calories}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5 text-xs font-black text-[#0038a8] group-hover:translate-x-1 transition-all pt-1 sm:pt-0 font-display uppercase">
                      <span className="hidden sm:inline">Reçete</span>
                      <div className="w-7 h-7 rounded-full bg-white border border-[#0038a8]/30 flex items-center justify-center shadow-2xs group-hover:border-[#0038a8]">
                        <ChevronRight className="w-4 h-4 text-[#0038a8]" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="py-14 px-6 text-center space-y-4 flex flex-col items-center justify-center rounded-3xl bg-[#0038a8]/5 border border-dashed border-[#0038a8]/20 my-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#0038a8]/10 text-[#0038a8] flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-base text-[#0038a8] font-display uppercase tracking-tight">
                    Aradığınız Kriterde Kahve Bulunamadı
                  </h4>
                  <p className="text-xs text-gray-600 font-medium max-w-sm">
                    &quot;{searchQuery}&quot; için eşleşen bir reçete veya içecek bulunamadı. Farklı bir arama deneyebilir veya kategorilerden seçebilirsiniz.
                  </p>
                </div>
                <button
                  onClick={() => setSearchQuery('')}
                  className="btn-chamberlain-primary py-2.5 px-5 text-xs uppercase tracking-wider font-display cursor-pointer"
                >
                  Aramayı Temizle & Menüye Dön
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Solid Cobalt Poster Bottom Strip for Allergens & Calories */}
        <div className="rounded-3xl bg-[#0038a8] text-white p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed font-medium shadow-md">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-black uppercase tracking-wider text-xs font-display">
              <div className="w-5 h-5 rounded-full bg-white text-[#0038a8] flex items-center justify-center font-black text-[11px]">
                !
              </div>
              <span>ALERJEN UYARISI</span>
            </div>
            <p className="text-white/85 text-[11px] sm:text-xs">
              {ALLERGEN_INFO.content} Detaylı alerjen bilgisi için lütfen personelimizden bilgi alınız.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-white font-black uppercase tracking-wider text-xs font-display">
              <div className="w-5 h-5 rounded-full bg-white text-[#0038a8] flex items-center justify-center font-black text-[11px]">
                <Flame className="w-3 h-3 fill-[#0038a8] text-[#0038a8]" />
              </div>
              <span>KALORİ & SÜT SEÇENEKLERİ</span>
            </div>
            <p className="text-white/85 text-[11px] sm:text-xs">
              Tüm kahvelerimizde laktozsuz süt, yulaf sütü ve badem sütü opsiyonları mevcuttur. {ALLERGEN_INFO.calorieDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Detail Bottom Sheet */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={() => handleSelectItem(null)}
              className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            />

            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={SPRING_TRANSITION}
              className="relative z-10 w-full sm:max-w-lg bg-[#faf8f2] rounded-t-3xl sm:rounded-3xl border border-[#0038a8]/25 p-6 sm:p-8 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            >
              <div className="w-12 h-1.5 bg-[#0038a8]/20 rounded-full mx-auto sm:hidden -mt-1 mb-2" />

              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  {selectedItem.badge && (
                    <span className="inline-block bg-[#0038a8] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full mb-1 uppercase tracking-wider font-display">
                      ★ {selectedItem.badge}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-black text-[#0038a8] font-display">
                    {selectedItem.name}
                  </h3>
                  <p className="text-[10px] font-extrabold text-[#0038a8]/60 uppercase tracking-wider font-display">
                    {selectedItem.category.replace('-', ' ')}
                  </p>
                </div>

                <button
                  onClick={() => handleSelectItem(null)}
                  className="p-2 -mr-1 rounded-full text-[#0038a8]/60 hover:text-[#0038a8] hover:bg-[#0038a8]/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                {selectedItem.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-white border border-[#0038a8]/15 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="font-extrabold text-[#0038a8]">Kalori:</span>
                  <span className="font-semibold text-gray-700">{selectedItem.calories || 'Standart'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-extrabold text-[#0038a8]">Süt Seçenekleri:</span>
                  <span className="font-semibold text-gray-700">Laktozsuz, Yulaf, Badem</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-extrabold text-[#0038a8]">Servis Şekli:</span>
                  <span className="font-semibold text-gray-700">{selectedItem.isCold ? 'Buzlu Soğuk' : 'Sıcak / Gel-Al'}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedItem.tags?.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-[#0038a8]/10 text-[#0038a8] text-[10px] font-bold border border-[#0038a8]/15"
                  >
                    ★ {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  onClick={() => handleShare(selectedItem)}
                  className="btn-chamberlain-secondary w-full py-3.5 text-xs tracking-wider justify-center min-h-[44px] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Kopyalandı!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-[#0038a8]" />
                      <span>Arkadaşına Gönder</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleSelectItem(null)}
                  className="btn-chamberlain-primary w-full py-3.5 text-xs tracking-wider justify-center min-h-[44px] cursor-pointer"
                >
                  Kapat
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
