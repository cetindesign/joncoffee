'use client';

import { useState, useMemo } from 'react';
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
  Snowflake,
} from 'lucide-react';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyCold, setOnlyCold] = useState(false);
  const [onlyPopular, setOnlyPopular] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      if (onlyCold && !item.isCold) {
        return false;
      }
      if (onlyPopular && !item.isPopular && !item.isSignature) {
        return false;
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
  }, [activeCategory, searchQuery, onlyCold, onlyPopular]);

  return (
    <section id="menu" className="py-14 sm:py-24 px-3.5 sm:px-6 lg:px-8 bg-[#fbf9f4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
            Tüm İçecek Koleksiyonu
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#102341] tracking-tight font-display uppercase leading-tight">
            JÖN KAFE MENÜSÜ
          </h2>
          <p className="text-xs sm:text-base font-medium text-gray-600">
            Espresso bazlı sıcak kahvelerden 16 saatlik soğuk demlemelere ve özel ikramlara kadar.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kahve veya lezzet ara..."
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-full bg-white border border-gray-200 text-xs sm:text-sm font-medium text-[#102341] placeholder:text-gray-400 focus:outline-none focus:border-[#102341] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setOnlyCold(!onlyCold)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                onlyCold
                  ? 'bg-[#102341] text-white border-[#102341]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              <Snowflake className="w-3.5 h-3.5 text-cyan-600" />
              Sadece Soğuklar
            </button>

            <button
              onClick={() => setOnlyPopular(!onlyPopular)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                onlyPopular
                  ? 'bg-[#102341] text-white border-[#102341]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-[#fab80b] text-[#fab80b]" />
              En Sevilenler
            </button>
          </div>
        </div>

        {/* Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery('');
                }}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
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

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 hover:border-gray-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                  <h3 className="font-extrabold text-sm sm:text-lg text-[#102341] group-hover:text-[#1b3561] transition-colors font-display">
                    {item.name}
                  </h3>
                  {item.badge ? (
                    <span className="shrink-0 bg-[#e3ecf1] text-[#102341] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  ) : item.isPopular ? (
                    <span className="shrink-0 bg-amber-50 text-amber-900 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 fill-[#fab80b] text-[#fab80b]" /> Popüler
                    </span>
                  ) : null}
                </div>

                <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-2 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {item.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-[10px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.calories && (
                  <span className="text-[10px] sm:text-[11px] font-semibold text-gray-400">
                    {item.calories}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Allergen & Nutritional Transparency Banner */}
        <div className="p-5 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-[#102341]">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              {ALLERGEN_INFO.title}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-[11px] sm:text-xs text-gray-600 leading-relaxed">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
              <strong className="text-amber-950 block mb-1">Alerjen Bildirimi:</strong>
              {ALLERGEN_INFO.content}
            </div>
            <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
              <strong className="text-[#102341] block mb-1">Kalori & Besin Bilgisi:</strong>
              {ALLERGEN_INFO.calorieDisclaimer}
            </div>
          </div>
        </div>
      </div>

      {/* Item Modal (Showcase Details) */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 max-w-sm sm:max-w-lg w-full shadow-2xl space-y-4 relative animate-in fade-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-[#102341] hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              {selectedItem.badge && (
                <span className="inline-block bg-[#e3ecf1] text-[#102341] text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-1">
                  {selectedItem.badge}
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-black text-[#102341] font-display">
                {selectedItem.name}
              </h3>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                {selectedItem.category.replace('-', ' ')}
              </p>
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
                <span className="font-bold text-[#102341]">Süt:</span>
                <span className="font-semibold text-gray-600">Laktozsuz, Yulaf, Badem</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-[#102341]">Servis:</span>
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
                className="btn-chamberlain-primary w-full py-3 text-xs tracking-wider"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
