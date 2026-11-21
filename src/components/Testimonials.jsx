import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Real Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Loved by creators & design lovers worldwide.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Over 45,000 customers have made AURA an essential part of their day. Here is what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-300" />
                </div>

                {/* Content */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* Reviewer Bio */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {review.name}
                    </h4>
                    {review.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" title="Verified Customer" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 truncate">
                    {review.role}
                  </p>
                  <span className="text-[10px] text-indigo-600 font-medium block truncate mt-0.5">
                    Purchased: {review.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
