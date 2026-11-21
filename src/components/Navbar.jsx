import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist,
  searchQuery,
  setSearchQuery,
  activeCategory,
  onSelectCategory
}) {
  const [showBanner, setShowBanner] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Announcement Bar */}
      {showBanner && (
        <div className="bg-slate-950 text-slate-200 text-xs sm:text-sm py-2 px-4 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1 text-center flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1 bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full text-xs font-semibold">
                <Sparkles className="w-3 h-3 text-indigo-400" /> NEW DROP
              </span>
              <span>
                Spring 2026 Collection is live! Use code <strong className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">AURA15</strong> for 15% off.
              </span>
            </div>
            <button 
              onClick={() => setShowBanner(false)}
              className="text-slate-400 hover:text-white p-0.5 ml-2 transition-colors"
              title="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-slate-200/80 py-3.5' 
          : 'bg-white/80 backdrop-blur-sm border-slate-100 py-4.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-indigo-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  AURA
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
                  Living & Style
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <button 
                onClick={() => scrollToSection('products')}
                className="hover:text-slate-900 transition-colors"
              >
                Catalog
              </button>
              <button 
                onClick={() => {
                  onSelectCategory('Audio & Tech');
                  scrollToSection('products');
                }}
                className="hover:text-slate-900 transition-colors"
              >
                Tech & Audio
              </button>
              <button 
                onClick={() => {
                  onSelectCategory('Home & Living');
                  scrollToSection('products');
                }}
                className="hover:text-slate-900 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('deals')}
                className="hover:text-indigo-600 font-semibold text-indigo-600 transition-colors flex items-center gap-1"
              >
                Special Offer
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="hover:text-slate-900 transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="hover:text-slate-900 transition-colors"
              >
                FAQ
              </button>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-xs relative ml-4">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 hover:bg-slate-200/70 focus:bg-white text-slate-800 text-sm pl-10 pr-8 py-2 rounded-full border border-transparent focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Actions: Search (Mobile), Wishlist, Cart */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile Search Toggle */}
              <button
                onClick={() => setShowSearchMobile(!showSearchMobile)}
                className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Button */}
              <button
                onClick={onOpenWishlist}
                className="p-2 text-slate-700 hover:text-rose-600 hover:bg-rose-50/70 rounded-full transition-all relative"
                title="View Wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[11px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={onOpenCart}
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-full transition-all shadow-sm hover:shadow active:scale-95"
                title="View Cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2.5 bg-indigo-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-slate-900">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold hidden sm:inline">Cart</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar Dropdown */}
          {showSearchMobile && (
            <div className="mt-3 lg:hidden pt-2 border-t border-slate-100">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products by title or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-100 text-slate-800 text-sm pl-10 pr-9 py-2.5 rounded-xl border border-transparent focus:border-indigo-400 focus:bg-white focus:outline-none"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 py-4 border-t border-slate-100 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <button
                onClick={() => scrollToSection('products')}
                className="w-full text-left px-3 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Full Catalog</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Audio & Tech');
                  scrollToSection('products');
                }}
                className="w-full text-left px-3 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Audio & Tech</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Home & Living');
                  scrollToSection('products');
                }}
                className="w-full text-left px-3 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Home & Living</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Accessories');
                  scrollToSection('products');
                }}
                className="w-full text-left px-3 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Accessories</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('deals')}
                className="w-full text-left px-3 py-2 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50/50 flex items-center justify-between"
              >
                <span>Special Spring Offer</span>
                <Sparkles className="w-4 h-4 text-indigo-500" />
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="w-full text-left px-3 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Customer Reviews</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="w-full text-left px-3 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Frequently Asked Questions</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
