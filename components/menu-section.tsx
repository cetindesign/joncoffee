'use client';

import { useState, useMemo, useEffect } from 'react';
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
} from 'lucide-react';

type MoodFilter = 'all' | 'focused' | 'surprised';

export function MenuSection() {
  const [activeMood, setActiveMood] = useState<MoodFilter>('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Close Bottom Sheet on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Mascot Mood filter
      if (activeMood === 'focused') {
        const isFocused = !item.isCold || item.category === 'sicak-kahveler' || item.category === 'klasikler';
        if (!isFocused) return false;
      } else if (activeMood === 'surprised') {
        const isSurprised = item.isCold || item.isSignature || item.category === 'soguk-kahveler' || item.category === 'ozeller';
        if (!isSurprised) return false;
      }
      // Search query
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
    <section id="menu" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#fbf9f4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        {/* Header & Mood Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
              Tüm İçecek Koleksiyonu
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102341] tracking-tight font-display uppercase">
              JÖN KAFE MENÜSÜ
            </h2>
          </div>

          {/* Mascot Mood Switcher Toggle */}
          <div className="flex items-center gap-1.5 p-1 bg-gray-200/70 rounded-full select-none self-start md:self-auto">
            <button
              onClick={() => setActiveMood('all')}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                activeMood === 'all' ? 'text-[#102341]' : 'text-gray-600 hover:text-[#102341]'
              }`}
            >
              {activeMood === 'all' && (
                <motion.div
                  layoutId="activeMoodPill"
                  className="absolute inset-0 bg-white rounded-full shadow-xs"
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                />
              )}
              <span className="relative z-10">Tüm Menü</span>
            </button>

            <button
              onClick={() => setActiveMood('focused')}
              className={`relative flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                activeMood === 'focused' ? 'text-[#102341]' : 'text-gray-600 hover:text-[#102341]'
              }`}
            >
              {activeMood === 'focused' && (
                <motion.div
                  layoutId="activeMoodPill"
                  className="absolute inset-0 bg-white rounded-full shadow-xs"
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                <Coffee className="w-3 h-3 text-[#102341]" /> Focused
              </span>
            </button>

            <button
              onClick={() => setActiveMood('surprised')}
              className={`relative flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                activeMood === 'surprised' ? 'text-[#102341]' : 'text-gray-600 hover:text-[#102341]'
              }`}
            >
              {activeMood === 'surprised' && (
                <motion.div
                  layoutId="activeMoodPill"
                  className="absolute inset-0 bg-white rounded-full shadow-xs"
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> Surprised
              </span>
            </button>
          </div>
        </div>

        {/* Toolbar: Category Pills + Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Horizontal Category Bar */}
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
                  className={`relative px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all select-none ${
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

          {/* Search Box */}
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

        {/* Menu Items Grid with Motion Stagger */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedItem(item)}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-extrabold text-sm sm:text-base text-[#102341] group-hover:text-[#1b3561] transition-colors font-display">
                      {item.name}
                    </h3>
                    {item.badge ? (
                      <span className="shrink-0 bg-[#e3ecf1] text-[#102341] text-[9px] font-bold px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    ) : item.isPopular ? (
                      <span className="shrink-0 bg-amber-50 text-amber-900 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-[#fab80b] text-[#fab80b]" /> Popüler
                      </span>
                    ) : null}
                  </div>

                  <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-2 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-[10px] font-bold text-[#102341] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    Detay <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Allergen & Nutritional Transparency Banner */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-[#102341]">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <h3 className="font-bold text-xs uppercase tracking-wide">
              {ALLERGEN_INFO.title}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] text-gray-600 leading-relaxed">
            <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100">
              <strong className="text-amber-950 block mb-0.5">Alerjen Bildirimi:</strong>
              {ALLERGEN_INFO.content}
            </div>
            <div className="p-3 rounded-2xl bg-blue-50/50 border border-blue-100">
              <strong className="text-[#102341] block mb-0.5">Kalori & Besin Bilgisi:</strong>
              {ALLERGEN_INFO.calorieDisclaimer}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Sheet / Desktop Centered Card */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Bottom Sheet on Mobile, Centered Modal on Desktop */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative z-10 w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            >
              {/* Drag Handle Bar for Mobile */}
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
                  onClick={() => setSelectedItem(null)}
                  className="p-2 -mr-1 rounded-full text-gray-400 hover:text-[#102341] hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                {selectedItem.description}
              </p>

              {/* Specs Breakdown */}
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

              <div className="pt-2">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="btn-chamberlain-primary w-full py-3.5 text-xs tracking-wider justify-center min-h-[44px]"
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
