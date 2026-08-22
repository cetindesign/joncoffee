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
  AlertTriangle,
  ChevronRight,
  Coffee,
  Sparkles,
  Share2,
  Check,
} from 'lucide-react';

type MoodFilter = 'all' | 'focused' | 'surprised';

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
  const [activeMood, setActiveMood] = useState<MoodFilter>('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [copied, setCopied] = useState(false);

  // Deep Link listener on Mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get('item');
    if (itemId) {
      const match = MENU_ITEMS.find((m) => m.id === itemId);
      if (match) {
        setSelectedItem(match);
        const el = document.getElementById('menu');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

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

  // Close Bottom Sheet on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleSelectItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSelectItem]);

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
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      if (activeMood === 'focused') {
        const isFocused = !item.isCold || item.category === 'sicak-kahveler' || item.category === 'klasikler';
        if (!isFocused) return false;
      } else if (activeMood === 'surprised') {
        const isSurprised = item.isCold || item.isSignature || item.category === 'soguk-kahveler' || item.category === 'ozeller';
        if (!isSurprised) return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchTags = item.tags?.some((t) => t.toLowerCase().includes(query));
        return matchName || matchDesc || matchTags;
      }
      return true;
    });
  }, [activeCategory, activeMood, searchQuery]);

  return (
    <section id="menu" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#fbf9f4] border-b border-gray-200">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
        {/* Header & Mood Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-200">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
              Koleksiyon & Reçeteler
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
              KAFE MENÜSÜ
            </h2>
          </div>

          {/* Mascot Mood Switcher Toggle */}
          <div className="flex items-center gap-1 p-1 bg-gray-200/60 rounded-full select-none self-start md:self-auto">
            <button
              onClick={() => setActiveMood('all')}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors duration-300 ${
                activeMood === 'all' ? 'text-[#102341]' : 'text-gray-600 hover:text-[#102341]'
              }`}
            >
              {activeMood === 'all' && (
                <motion.div
                  layoutId="activeMoodPill"
                  className="absolute inset-0 bg-white rounded-full shadow-xs"
                  transition={SPRING_TRANSITION}
                />
              )}
              <span className="relative z-10">Tüm Menü</span>
            </button>

            <button
              onClick={() => setActiveMood('focused')}
              className={`relative flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-colors duration-300 ${
                activeMood === 'focused' ? 'text-[#102341]' : 'text-gray-600 hover:text-[#102341]'
              }`}
            >
              {activeMood === 'focused' && (
                <motion.div
                  layoutId="activeMoodPill"
                  className="absolute inset-0 bg-white rounded-full shadow-xs"
                  transition={SPRING_TRANSITION}
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                <Coffee className="w-3 h-3 text-[#102341]" /> Focused
              </span>
            </button>

            <button
              onClick={() => setActiveMood('surprised')}
              className={`relative flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-colors duration-300 ${
                activeMood === 'surprised' ? 'text-[#102341]' : 'text-gray-600 hover:text-[#102341]'
              }`}
            >
              {activeMood === 'surprised' && (
                <motion.div
                  layoutId="activeMoodPill"
                  className="absolute inset-0 bg-white rounded-full shadow-xs"
                  transition={SPRING_TRANSITION}
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> Surprised
              </span>
            </button>
          </div>
        </div>

        {/* Category Tabs & Search (Clean Horizontal Bar) */}
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
                  className={`relative px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 select-none ${
                    isActive
                      ? 'bg-[#102341] text-white shadow-xs'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          <div className="relative shrink-0 sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kahve ara..."
              className="w-full pl-10 pr-8 py-2 rounded-full bg-white border border-gray-200 text-xs font-medium text-[#102341] placeholder:text-gray-400 focus:outline-none focus:border-[#102341] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Editorial Typographic List (ZERO CARD BOXES) */}
        <motion.div layout className="divide-y divide-gray-200/80">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={EASE_TRANSITION}
                onClick={() => handleSelectItem(item)}
                className="group py-4 sm:py-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-black/[0.02] -mx-3 px-3 rounded-xl transition-colors select-none"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-extrabold text-base sm:text-lg text-[#102341] font-display group-hover:text-[#1b3561] transition-colors">
                      {item.name}
                    </h3>

                    {item.badge ? (
                      <span className="bg-[#e3ecf1] text-[#102341] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {item.badge}
                      </span>
                    ) : item.isPopular ? (
                      <span className="bg-amber-100/80 text-amber-900 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-[#fab80b] text-[#fab80b]" /> Popüler
                      </span>
                    ) : null}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[11px] text-gray-500 font-semibold">
                    <span>{item.isCold ? '❄️ Buzlu / Soğuk' : '☕ Sıcak Servis'}</span>
                    {item.calories && (
                      <>
                        <span>&bull;</span>
                        <span>{item.calories}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 text-xs font-bold text-[#102341] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all pt-1 sm:pt-0">
                  <span className="hidden sm:inline">İncele</span>
                  <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-2xs group-hover:border-[#102341]">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Minimal Editorial Transparency Footnote (No giant card) */}
        <div className="pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-600 leading-relaxed font-medium">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[#102341] font-bold uppercase tracking-wider text-[11px]">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>Alerjen Bilgilendirmesi</span>
            </div>
            <p>{ALLERGEN_INFO.content}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[#102341] font-bold uppercase tracking-wider text-[11px] block">
              Besin Değerleri & Süt Alternatifleri
            </span>
            <p>Tüm içeceklerimizde laktozsuz süt, yulaf sütü ve badem sütü opsiyonları mevcuttur. {ALLERGEN_INFO.calorieDisclaimer}</p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Sheet / Desktop Centered Card */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={() => handleSelectItem(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />

            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={SPRING_TRANSITION}
              className="relative z-10 w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            >
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto sm:hidden -mt-1 mb-2" />

              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  {selectedItem.badge && (
                    <span className="inline-block bg-[#e3ecf1] text-[#102341] text-[9px] font-bold px-2 py-0.5 rounded-full mb-1">
                      {selectedItem.badge}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-black text-[#102341] font-display">
                    {selectedItem.name}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {selectedItem.category.replace('-', ' ')}
                  </p>
                </div>

                <button
                  onClick={() => handleSelectItem(null)}
                  className="p-2 -mr-1 rounded-full text-gray-400 hover:text-[#102341] hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                {selectedItem.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="font-bold text-[#102341]">Kalori:</span>
                  <span className="font-semibold text-gray-600">{selectedItem.calories || 'Standart'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#102341]">Süt Seçenekleri:</span>
                  <span className="font-semibold text-gray-600">Laktozsuz, Yulaf, Badem</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#102341]">Servis Şekli:</span>
                  <span className="font-semibold text-gray-600">{selectedItem.isCold ? 'Buzlu Soğuk' : 'Sıcak / Gel-Al'}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedItem.tags?.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-[#e3ecf1] text-[#102341] text-[10px] font-semibold"
                  >
                    ✦ {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <button
                  onClick={() => handleShare(selectedItem)}
                  className="btn-chamberlain-secondary py-3.5 text-xs tracking-wider justify-center min-h-[44px] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Kopyalandı!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-[#102341]" />
                      <span>Arkadaşına Gönder</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleSelectItem(null)}
                  className="btn-chamberlain-primary py-3.5 text-xs tracking-wider justify-center min-h-[44px] cursor-pointer"
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
