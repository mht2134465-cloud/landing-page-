import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  ShoppingBag, 
  Flame, 
  CheckCircle2 
} from 'lucide-react';

export default function Hero({ onAddToCart, onQuickView, featuredProduct }) {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/80 via-white to-slate-50/50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Subtle background ambient blur blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-indigo-200/30 via-purple-100/20 to-sky-100/40 blur-3xl -z-10 pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-white/90 border border-slate-200 shadow-xs px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-slate-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Spring & Summer 2026 Collection</span>
              <span className="text-slate-300">|</span>
              <span className="text-indigo-600 font-semibold flex items-center gap-1">
                Save 15% with code AURA15
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Elevate everyday living with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600">
                mindful design.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Thoughtfully curated studio tech, tactile home ceramics, and everyday accessories engineered for timeless style, lasting durability, and quiet luxury.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToProducts}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 shadow-lg shadow-slate-900/15 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const dealsEl = document.getElementById('deals');
                  if (dealsEl) dealsEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-700 border border-slate-200/90 font-medium text-sm hover:bg-slate-50 hover:text-slate-900 transition-all shadow-xs cursor-pointer"
              >
                <Flame className="w-4 h-4 text-amber-500" />
                <span>Limited Flash Deals</span>
              </button>
            </div>

            {/* Stats / Social Proof */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">45k+</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Discerning Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center justify-center lg:justify-start gap-1">
                  <span>4.9</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">2,800+ Verified Reviews</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Plastic-Free Shipping</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background cards */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10 transform -rotate-1" />
              
              <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-100 relative group overflow-hidden">
                {/* Product Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
                    <Sparkles className="w-3.5 h-3.5" /> Featured Spotlight
                  </span>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full">
                    Save $60
                  </span>
                </div>

                {/* Main Product Image Container */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 mb-5">
                  <img
                    src={featuredProduct?.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"}
                    alt={featuredProduct?.name || "Featured Product"}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>In Stock & Ready to Ship</span>
                  </div>
                </div>

                {/* Product Details & Fast Buy */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {featuredProduct?.name || "AURA Studio ANC Headphones"}
                      </h3>
                      <p className="text-xs text-slate-500">
                        Hybrid Active Noise Cancellation • 45hr Battery
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xl font-extrabold text-slate-900">
                        ${featuredProduct?.price || 189}
                      </div>
                      <div className="text-xs text-slate-400 line-through">
                        ${featuredProduct?.originalPrice || 249}
                      </div>
                    </div>
                  </div>

                  {/* Highlights / Specs bullets */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                    <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>Titanium Drivers</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>Memory Foam Comfort</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => onAddToCart(featuredProduct)}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm active:scale-98"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={() => onQuickView(featuredProduct)}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-colors cursor-pointer text-center"
                    >
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Floating reviews badge */}
                <div className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 text-xs text-slate-800">
                  <div className="flex text-amber-400">
                    {'★★★★★'}
                  </div>
                  <span className="font-bold">4.9/5</span>
                  <span className="text-slate-400">(328 reviews)</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
