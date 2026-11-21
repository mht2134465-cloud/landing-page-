import React from 'react';
import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';

export default function Perks() {
  const perks = [
    {
      icon: <Truck className="w-6 h-6 text-indigo-600" />,
      title: 'Free Worldwide Shipping',
      description: 'On all orders over $75. Tracked delivery straight to your door.'
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-indigo-600" />,
      title: '30-Day Risk-Free Trial',
      description: 'Not totally in love? Enjoy hassle-free returns with prepaid labels.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: '2-Year Full Warranty',
      description: 'All tech and hardware include comprehensive multi-year coverage.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-indigo-600" />,
      title: '24/7 Concierge Support',
      description: 'Dedicated real human assistance for setup, styling, and questions.'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50/80 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                {perk.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {perk.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
