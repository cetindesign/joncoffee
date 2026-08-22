'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#102341', '#fab80b', '#e3ecf1'],
      });
    } catch {}
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#e3ecf1] text-center border-b border-gray-200">
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#102341]">
          JÖN Coffee Club
        </span>

        <h2 className="text-3xl sm:text-5xl font-black text-[#102341] tracking-tight font-display uppercase leading-tight">
          İLK SİPARİŞİNE ÖZEL <br />
          %10 İNDİRİM KAZAN
        </h2>

        <p className="text-sm sm:text-base font-medium text-gray-600 max-w-lg mx-auto">
          Taze kavrumlar, gizli menü lezzetleri ve Hatay kafemizdeki etkinliklerden ilk sen haberdar ol.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresinizi girin..."
              className="flex-1 px-6 py-4 rounded-full bg-white border border-gray-300 text-xs sm:text-sm font-medium text-[#102341] placeholder:text-gray-400 focus:outline-none focus:border-[#102341] shadow-xs"
            />
            <button
              type="submit"
              className="btn-chamberlain-primary py-4 px-8 text-xs tracking-wider"
            >
              <span>Katıl</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs max-w-md mx-auto space-y-1">
            <p className="text-sm font-bold text-emerald-700 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Aramıza hoş geldiniz!
            </p>
            <p className="text-xs font-semibold text-[#102341]">
              İndirim kodunuz: <strong className="bg-[#fab80b] px-2 py-0.5 rounded text-[#102341]">JON10</strong>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
