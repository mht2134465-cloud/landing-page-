import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  CreditCard, 
  Lock, 
  Truck, 
  Sparkles, 
  ArrowRight,
  PackageCheck
} from 'lucide-react';

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  cartItems, 
  totalAmount, 
  onOrderSuccess 
}) {
  const [formData, setFormData] = useState({
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    address: '742 Evergreen Terrace',
    city: 'San Francisco',
    postalCode: '94107',
    cardNumber: '•••• •••• •••• 4242',
    expiry: '08/28',
    cvv: '921'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const generatedOrder = `AURA-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setIsProcessing(false);
      setIsSuccess(true);
      if (onOrderSuccess) onOrderSuccess();
    }, 1500);
  };

  const handleFinish = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={isProcessing ? undefined : onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-100 z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {isSuccess ? 'Order Confirmed!' : 'Secure Express Checkout'}
            </h2>
          </div>
          {!isProcessing && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Body */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-in zoom-in-50 duration-300">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                Payment Successful
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Thank you for your order!
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Order reference: <strong className="font-mono text-slate-900">{orderNumber}</strong>
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs text-slate-600 space-y-2 text-left max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <span>Confirmation sent to:</span>
                <strong className="text-slate-800">{formData.email}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated Delivery:</span>
                <strong className="text-emerald-700">3-4 Business Days</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Items:</span>
                <strong className="text-slate-800">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </strong>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleFinish}
                className="w-full max-w-xs py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-bold text-sm transition-all cursor-pointer shadow-md"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Quick summary strip */}
            <div className="flex items-center justify-between bg-indigo-50/70 border border-indigo-100 p-3.5 rounded-2xl text-xs">
              <div>
                <span className="text-slate-500">Order Total:</span>
                <span className="text-base font-black text-slate-900 ml-2">${totalAmount}</span>
              </div>
              <span className="text-indigo-700 font-semibold flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> Free Express Delivery
              </span>
            </div>

            {/* Shipping Address Inputs */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                1. Shipping Address
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-medium"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-medium"
                />
              </div>
              <input
                type="text"
                required
                placeholder="Street Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-medium"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-medium"
                />
                <input
                  type="text"
                  required
                  placeholder="Postal / ZIP Code"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-medium"
                />
              </div>
            </div>

            {/* Payment Details */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Payment Method
              </h4>
              <div className="relative">
                <CreditCard className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  className="w-full text-xs pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-mono font-medium"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="MM / YY"
                  value={formData.expiry}
                  onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-mono font-medium"
                />
                <input
                  type="text"
                  required
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-mono font-medium"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 disabled:bg-slate-400 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-98"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Authorizing Payment...</span>
                  </span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay ${totalAmount} Now</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
