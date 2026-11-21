import React from 'react';
import { SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
  sortBy,
  onSelectSort,
  productCounts,
  hasActiveFilters,
  onResetFilters
}) {
  return (
    <div className="space-y-4 mb-8">
      {/* Category Pills & Sorting Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count = productCounts[category] || 0;
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sorting Dropdown & Filter Info */}
        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 bg-rose-50 px-2.5 py-1.5 rounded-lg border border-rose-100 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

          <div className="flex items-center gap-2 bg-white border border-slate-200/80 rounded-xl px-3 py-1.5 shadow-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs text-slate-500 font-medium">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => onSelectSort(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer pr-1"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Highest Rated</option>
              <option value="reviews-desc">Most Reviews</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
