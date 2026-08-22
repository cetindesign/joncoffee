'use client';

import Image from 'next/image';
import { useCart } from '@/context/cart-context';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, Sparkles, ArrowRight, Truck } from 'lucide-react';

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    freeShippingThreshold,
    addItem,
  } = useCart();

  const progressPercent = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="w-screen max-w-md bg-white border-l border-gray-200 flex flex-col justify-between shadow-2xl relative"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-gray-100 bg-[#f8fafc] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="w-5 h-5 text-[#102341]" />
                    <h2 className="text-lg font-black text-[#102341] uppercase tracking-tight font-display">
                      SİPARİŞ SEPETİN
                    </h2>
                  </div>
                  <button
                    onClick={closeCart}
                    aria-label="Kapat"
                    className="p-2 rounded-full text-gray-400 hover:text-[#102341] hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Free Shipping Progress Bar */}
                <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#102341]">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-[#fab80b]" />
                      {remainingForFreeShipping > 0
                        ? `Ücretsiz kargo için ${remainingForFreeShipping}₺ daha ekle`
                        : '🎉 Ücretsiz Teslimat Kazandınız!'}
                    </span>
                    <span className="font-bold text-[11px]">%{progressPercent}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#102341] h-full transition-all duration-300 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto" />
                    <h3 className="font-bold text-base text-[#102341]">Sepetiniz henüz boş</h3>
                    <p className="text-xs text-gray-500">
                      En taze çekirdekler ve imza lezzetlerimiz sizi bekliyor!
                    </p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-white border border-gray-200 flex gap-3.5 items-center justify-between"
                    >
                      <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-gray-50 p-1 border border-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-extrabold text-sm text-[#102341] truncate font-display">
                          {item.name}
                        </h4>
                        {item.flavorNotes && (
                          <p className="text-[10px] font-medium text-gray-500 truncate">
                            {item.flavorNotes}
                          </p>
                        )}
                        <span className="text-xs font-black text-[#102341] mt-1 block">
                          {item.price * item.quantity} ₺
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-rose-600 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-2.5 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-gray-500 hover:text-[#102341]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-[#102341]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-gray-500 hover:text-[#102341]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {/* Upsell */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-950">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Sepete Özel Ek Lezzet
                    </span>
                    <span>95 ₺</span>
                  </div>
                  <p className="text-[11px] text-amber-900 font-medium">
                    16 Saat Demleme Şişe Cold Brew eklemek ister misiniz?
                  </p>
                  <button
                    onClick={() =>
                      addItem({
                        id: 'upsell-cold-brew',
                        name: 'Şişe Cold Brew (250ml)',
                        price: 95,
                        image: '/assets/jon-badge-circle.png',
                        category: 'Soğuk Kahve',
                        flavorNotes: '16 Saat Demleme',
                      })
                    }
                    className="w-full py-2 rounded-full bg-[#102341] hover:bg-[#1b3561] text-white font-bold text-xs uppercase transition-colors"
                  >
                    + Sepete Ekle
                  </button>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-100 bg-white space-y-4">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-500">Ara Toplam:</span>
                  <span className="text-2xl font-black text-[#102341] font-display">
                    {subtotal} ₺
                  </span>
                </div>

                <button
                  onClick={() => {
                    alert('Siparişiniz kafemize iletildi!');
                  }}
                  disabled={items.length === 0}
                  className="btn-chamberlain-primary w-full py-4 text-xs tracking-wider disabled:opacity-40"
                >
                  <span>Siparişi Tamamla</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
