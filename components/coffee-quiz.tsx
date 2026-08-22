'use client';

import { useState } from 'react';
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
        description: 'Klasik espresso gövdesi veya yumuşak süt köpüğü.',
        type: 'focused',
        icon: '☕',
      },
      {
        label: 'Buzlu, ferahlatıcı veya meyvemsi',
        description: 'Soğuk narenciye katmanı veya vanilyalı gelato dokunuşu.',
        type: 'surprised',
        icon: '🍊',
      },
    ],
  },
  {
    id: 3,
    question: 'Tat profilinde seni en çok ne heyecanlandırır?',
    options: [
      {
        label: 'Bitter çikolata, karamel ve fındık notaları',
        description: 'Karakterli ve dolgun bir kahve bitişi.',
        type: 'focused',
        icon: '🍫',
      },
      {
        label: 'Narenciye tazeliği veya tatlı krema dengesi',
        description: 'Ezber bozan taze ve canlı lezzet kontrastları.',
        type: 'surprised',
        icon: '🍦',
      },
    ],
  },
];

const RECOMMENDATIONS = {
  focused: {
    character: 'FOCUSED',
    title: 'Focused Espresso & Flat White Seçkisi',
    tagline: 'Derin Odaklanma & Dengeli Sertlik',
    description:
      'Single origin Colombia & Ethiopia çekirdeklerimizin zengin gövdesi ve yoğun çikolata-fındık notalarıyla iş temposunu zirveye taşımak için birebir.',
    favItems: ['Double Espresso', 'Focused Flat White', '16H Cold Brew'],
  },
  surprised: {
    character: 'SURPRISED',
    title: 'JÖN Sunrise & Affogato Deneyimi',
    tagline: 'Merak, Keşif & Ferahlatıcı Katmanlar',
    description:
      'Taze sıkılmış portakal suyuyla buz üzerinde buluşan espresso katmanı veya vanilyalı İtalyan gelato üzerine sıcak ristretto akışı.',
    favItems: ['JÖN Sunrise', 'Affogato al Caffe', 'Iced White Mocha'],
  },
};

export function CoffeeQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<('focused' | 'surprised')[]>([]);
  const [result, setResult] = useState<'focused' | 'surprised' | null>(null);

  const handleSelect = (type: 'focused' | 'surprised') => {
    const updatedAnswers = [...answers, type];
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate result
      const focusedCount = updatedAnswers.filter((a) => a === 'focused').length;
      const finalResult = focusedCount >= 2 ? 'focused' : 'surprised';
      setResult(finalResult);

      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#102341', '#fab80b', '#206b99', '#f8d486'],
        });
      } catch {
        // Confetti fallback
      }
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="kahve-testi" className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
            Kişiselleştirilmiş Öneri
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#102341] tracking-tight font-display uppercase leading-tight">
            BUGÜNKÜ JÖN KAHVENİ BUL
          </h2>
          <p className="text-xs sm:text-base font-medium text-gray-600">
            3 kısa soruyla bugünkü moduna ve damak tadına en uygun lezzeti keşfet.
          </p>
        </div>

        <div className="bg-[#fbf9f4] rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Progress Bar */}
                <div className="flex items-center justify-between text-xs font-bold text-gray-500 pb-2 border-b border-gray-200">
                  <span>Soru {currentStep + 1} / {QUESTIONS.length}</span>
                  <div className="flex gap-1.5">
                    {QUESTIONS.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentStep
                            ? 'w-6 bg-[#102341]'
                            : idx < currentStep
                            ? 'w-3 bg-[#102341]/40'
                            : 'w-3 bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-lg sm:text-2xl font-black text-[#102341] text-center font-display">
                  {QUESTIONS[currentStep].question}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {QUESTIONS[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(opt.type)}
                      className="p-5 rounded-2xl bg-white border border-gray-200 text-left hover:border-[#102341] hover:shadow-md active:scale-98 transition-all duration-250 flex flex-col justify-between space-y-3 group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl p-2 rounded-xl bg-gray-50 group-hover:bg-amber-50 transition-colors duration-250">
                          {opt.icon}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#102341] transition-colors duration-200">
                          Seç &rarr;
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-extrabold text-sm sm:text-base text-[#102341] font-display">
                          {opt.label}
                        </h4>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-5"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-[#102341] text-white text-xs font-bold uppercase tracking-wider">
                  ✦ {RECOMMENDATIONS[result].character} PROFİLİ
                </span>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#102341] font-display">
                    {RECOMMENDATIONS[result].title}
                  </h3>
                  <p className="text-sm font-semibold text-amber-700">
                    {RECOMMENDATIONS[result].tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-lg mx-auto bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 leading-relaxed">
                  {RECOMMENDATIONS[result].description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href="#menu"
                    onClick={scrollToMenu}
                    className="btn-chamberlain-primary w-full sm:w-auto text-xs py-3.5 cursor-pointer"
                  >
                    <span>Menüde İncele</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

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
                    className="text-xs font-bold text-gray-400 hover:text-[#102341] flex items-center justify-center gap-1 py-2 px-3 cursor-pointer transition-colors duration-200"
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
