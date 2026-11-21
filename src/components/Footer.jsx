import React from 'react';
import { 
  Sparkles, 
  ArrowUp, 
  ShieldCheck, 
  Heart, 
  Globe 
} from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProducts = (category) => {
    if (onSelectCategory && category) {
      onSelectCategory(category);
    }
    const el = document.getElementById('products');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-slate-800 via-indigo-900 to-indigo-500 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-indigo-300" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                uperskill Shop
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Thoughtfully curated studio tech, tactile home ceramics, and everyday accessories engineered for timeless style, lasting durability, and quiet luxury.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px]">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>Worldwide Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Certified B-Corp Pending</span>
              </div>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore Collections
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToProducts('All')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToProducts('Audio & Tech')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tech & Audio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToProducts('Home & Living')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home & Living
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToProducts('Accessories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Everyday Accessories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToProducts('Apparel & Wear')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Apparel & Wear
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Customer Care
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  30-Day Returns Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  2-Year Warranty
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Concierge Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              About uperskill Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Our Philosophy
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Sustainable Sourcing
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Design Studio
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Press & Media Kit
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy & Terms
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 uperskill Shop Inc. All rights reserved. Crafted with care for modern living.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Payment Secured by Stripe & Apple Pay</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
