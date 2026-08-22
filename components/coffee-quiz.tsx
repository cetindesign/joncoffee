'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RotateCcw, MapPin, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '@/data/store-info';

interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    description: string;
    type: 'focused' | 'surprised';
    icon: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Bugün kafandaki ana mod nedir?',
    options: [
      {
        label: 'İşime odaklanmak & üretmek istiyorum',
        description: 'Laptop açık, kulaklık takılı, kesintisiz tempo.',
        type: 'focused',
        icon: '💻',
      },
      {
        label: 'Günüme enerji & tat katmak istiyorum',
        description: 'Arkadaşlarla sohbet, yeni bir lezzet keşfi.',
        type: 'surprised',
        icon: '✨',
      },
    ],
  },
  {
    id: 2,
    question: 'Sıcaklık ve içim tercihin hangisi?',
    options: [
      {
        label: 'Sıcak, aromatik ve yoğun',
        description: 'Geleneksel espresso veya ipeksi bir sıcak süt dokunuşu.',
        type: 'focused',
        icon: '☕',
      },
      {
        label: 'Buz gibi, katmanlı ve ferah',
        description: 'Soğuk narenciye veya buz üzerinde demlenmiş lezzet.',
        type: 'surprised',
        icon: '🧊',
      },
    ],
  },
  {
    id: 3,
    question: 'Tat profilinde seni hangisi çeker?',
    options: [
      {
        label: 'Saf kahve gövdesi & dengeli asidite',
        description: 'Şekersiz, dürüst ve derin çekirdek aroması.',
        type: 'focused',
        icon: '🎯',
      },
      {
        label: 'Meyvemsi sürprizler veya tatlı dokunuşlar',
        description: 'Portakal & kahve füzyonu veya dondurmalı lezzet.',
        type: 'surprised',
        icon: '🍊',
      },
    ],
  },
];

const RECOMMENDATIONS = {
  focused_hot: {
    name: 'Focused Espresso Blend',
    persona: 'Focused Classic',
    tagline: 'Maksimum odaklanma, zengin gövde.',
    description: '%100 yüksek rakım Arabica çekirdeklerinden taze çekilmiş, zihninizi açacak ve derin odaklanma sağlayacak kusursuz bir fincan.',
    badge: 'FOCUSED SEÇİMİ',
  },
  focused_cold: {
    name: '16 Saat Demleme Cold Brew',
    persona: 'Focused Cool',
    tagline: 'Yumuşak içim, yüksek gövde ve berraklık.',
    description: 'Damla damla soğuk suyla 16 saatte demlenen, düşük asiditesiyle çalışma masanıza enerji katacak serin bir odaklanma iksiri.',
    badge: 'SOĞUK ODAK',
  },
  surprised_hot: {
    name: 'Affogato Al Caffe',
    persona: 'Surprised Sweet',
    tagline: 'İtalyan vanilyalı dondurma ile sıcak espressonun dansı.',
    description: 'Tatlı krizini nitelikli espresso dokunuşuyla çözen, gününüzü anında neşelendirecek bir klasik.',
    badge: 'TATLI DOKUNUŞ',
  },
  surprised_cold: {
    name: 'İmza İçecek: JÖN Sunrise',
    persona: 'Surprised Explorer',
    tagline: 'Taze portakal suyu + buzlu soğuk espresso katmanı.',
    description: 'Alışılmışın tamamen dışında! Narenciye asiditesi ve kahvenin damağınızda patlayacak ferahlatıcı katmanlı füzyonu.',
    badge: 'JÖN İMZASI',
  },
};

export function CoffeeQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<('focused' | 'surprised')[]>([]);
  const [result, setResult] = useState<keyof typeof RECOMMENDATIONS | null>(null);

  const handleSelect = (type: 'focused' | 'surprised') => {
    const updatedAnswers = [...answers, type];
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const focusedCount = updatedAnswers.filter((a) => a === 'focused').length;
      const isCold = updatedAnswers[1] === 'surprised';

      let outcome: keyof typeof RECOMMENDATIONS;
      if (focusedCount >= 2) {
        outcome = isCold ? 'focused_cold' : 'focused_hot';
      } else {
        outcome = isCold ? 'surprised_cold' : 'surprised_hot';
      }

      setResult(outcome);

      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#102341', '#fab80b', '#e3ecf1'],
        });
      } catch {}
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  const currentQ = QUESTIONS[currentStep];

  return (
    <section id="kahve-testi" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#f8fafc] rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-xs space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Kişiselleştirilmiş Karar Rehberi
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102341] font-display uppercase">
              HANGİ JÖN KAHVESİSİN?
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              3 hızlı soruyla bugün sana en iyi gelecek kahve reçetesini bulalım.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Progress bar */}
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#102341] h-full transition-all duration-300 rounded-full"
                    style={{
                      width: `${((currentStep + 1) / QUESTIONS.length) * 100}%`,
                    }}
                  />
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-bold uppercase text-gray-400">
                    Soru {currentStep + 1} / {QUESTIONS.length}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black text-[#102341] mt-1 font-display">
                    {currentQ.question}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {currentQ.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(opt.type)}
                      className="text-left p-6 rounded-2xl bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-xs transition-all group"
                    >
                      <span className="text-2xl mb-2 block">{opt.icon}</span>
                      <strong className="block font-bold text-sm text-[#102341]">
                        {opt.label}
                      </strong>
                      <span className="text-xs text-gray-500 mt-1 block font-medium">
                        {opt.description}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-6 py-2"
              >
                <span className="inline-block bg-[#e3ecf1] text-[#102341] font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {RECOMMENDATIONS[result].badge}
                </span>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-4xl font-black text-[#102341] font-display uppercase">
                    {RECOMMENDATIONS[result].name}
                  </h3>
                  <p className="text-sm font-semibold text-amber-700">
                    {RECOMMENDATIONS[result].tagline}
                  </p>
                </div>

                <p className="text-sm text-gray-600 font-medium max-w-lg mx-auto bg-white p-5 rounded-2xl border border-gray-200">
                  {RECOMMENDATIONS[result].description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <Link
                    href="#menu"
                    className="btn-chamberlain-primary w-full sm:w-auto text-xs py-3.5"
                  >
                    <span>Menüde İncele</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={STORE_INFO.location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-chamberlain-secondary w-full sm:w-auto text-xs py-3.5"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Kafede Tatmaya Gel</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-gray-400 hover:text-[#102341] flex items-center justify-center gap-1 py-2 px-3"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Tekrar Çöz</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
