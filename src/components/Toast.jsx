import React from 'react';
import { CheckCircle2, Heart, ShoppingBag, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'cart':
        return <ShoppingBag className="w-5 h-5 text-emerald-500 shrink-0" />;
      case 'wishlist':
        return <Heart className="w-5 h-5 text-rose-500 shrink-0 fill-rose-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-slate-900 text-white rounded-2xl shadow-2xl p-4 border border-slate-800 flex items-center gap-3 animate-bounce-short transition-all duration-300">
      {getIcon()}
      <div className="flex-1 text-sm font-medium pr-2">
        {toast.message}
      </div>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
