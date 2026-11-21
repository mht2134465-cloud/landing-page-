import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function Newsletter({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
    if (onShowToast) {
      onShowToast(`Welcome to the AURA circle! Your 15% code is ready.`, 'general');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Ambient blur */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-3.5 py-1 rounded-full text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AURA Insider Access</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              Join 50,000+ design enthusiasts.
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Subscribe for private sample drop invitations, early access to new releases, and get <strong className="text-white">15% off</strong> your first order.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 p-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-semibold animate-in zoom-in-95 duration-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>You are in! Use code <strong className="font-mono text-white">AURA15</strong> at checkout.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-800 text-white placeholder-slate-400 text-sm pl-11 pr-4 py-3.5 rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="text-[11px] text-slate-400">
              Zero spam. Unsubscribe anytime with a single click.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
