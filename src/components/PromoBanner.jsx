import React, { useState, useEffect } from 'react';
import { Sparkles, Copy, Check, Clock, Flame, ArrowRight } from 'lucide-react';

export default function PromoBanner({ onApplyCode, onShowToast }) {
  const [copied, setCopied] = useState(false);
  
  // Real-time countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 58
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 24, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText('AURA15');
    setCopied(true);
    if (onApplyCode) onApplyCode('AURA15');
    if (onShowToast) onShowToast('Coupon code AURA15 copied to clipboard!', 'general');
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="deals" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-800/80 via-slate-800/40 to-slate-800/80 border border-slate-700/60 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Promo Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Limited Flash Opportunity</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-300">15% Off</span> Everything in the Spring Drop
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Upgrade your daily ritual with our most celebrated studio hardware, artisan ceramics, and carry essentials. Applies automatically at checkout.
              </p>

              {/* Countdown Clocks */}
              <div className="pt-2">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Offer Expires In:</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-slate-950/80 border border-slate-700/80 rounded-2xl px-4 py-2.5 text-center min-w-[70px]">
                    <span className="block text-2xl sm:text-3xl font-black font-mono text-white">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Hours</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-500">:</span>
                  <div className="bg-slate-950/80 border border-slate-700/80 rounded-2xl px-4 py-2.5 text-center min-w-[70px]">
                    <span className="block text-2xl sm:text-3xl font-black font-mono text-white">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Minutes</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-500">:</span>
                  <div className="bg-slate-950/80 border border-slate-700/80 rounded-2xl px-4 py-2.5 text-center min-w-[70px]">
                    <span className="block text-2xl sm:text-3xl font-black font-mono text-amber-400">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Seconds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Voucher Box & CTA */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center space-y-4">
              <div className="w-full max-w-sm bg-slate-950/90 border border-slate-700 rounded-2xl p-5 shadow-xl space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>Exclusive Voucher</span>
                  <span className="text-emerald-400 font-bold">Active Today</span>
                </div>

                <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl px-4 py-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">Coupon Code</span>
                    <span className="font-mono text-xl font-black tracking-widest text-indigo-300">AURA15</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2 px-3.5 rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Valid on all items. Minimum order $50.</span>
                </div>
              </div>

              <button
                onClick={scrollToProducts}
                className="w-full max-w-sm py-3.5 px-6 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-98"
              >
                <span>Shop the Sale Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
