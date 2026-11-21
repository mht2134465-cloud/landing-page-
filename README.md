# uperskill Shop — Modern Lifestyle Shop Landing Page

A modern, responsive, and interactive shop landing page built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**.

## 🌟 Key Features

- **Header & Navigation**:
  - Sticky glassmorphism header with announcement banner (dismissible).
  - Live search bar with instant keyword matching across titles, categories, and descriptions.
  - Wishlist counter with slide-out drawer and "Move to Cart" actions.
  - Interactive shopping cart counter badge with bounce feedback.
  - Mobile responsive slide-out navigation menu.

- **Hero Section**:
  - High-impact visual headline with gradient typography.
  - Trust metrics: 45k+ customers, 4.9/5 verified rating, plastic-free shipping.
  - Featured product spotlight card with interactive Quick Add and Quick View triggers.

- **Value Proposition Perks**:
  - Free Worldwide Shipping (Orders over $75).
  - 30-Day Risk-Free Trial.
  - 2-Year Comprehensive Hardware Warranty.
  - 24/7 Concierge Support.

- **Interactive Product Catalog**:
  - 12 curated products across 4 categories (*Audio & Tech*, *Home & Living*, *Accessories*, *Apparel & Wear*).
  - Category pill filter with live product counts.
  - Multi-criteria sorting (Featured, Price Low-High, Price High-Low, Highest Rated, Most Reviews).
  - Reset filters shortcut when filters/search are active.

- **Product Cards**:
  - Hover zoom transitions and stock status badges.
  - Discount percentage pills (`-25%`, etc.) and staff pick tags.
  - Wishlist toggle heart button with smooth state persistence (`localStorage`).
  - Quick View modal preview button.
  - One-click "Add to Cart" with instant visual feedback.

- **Product Quick View Modal**:
  - High-resolution product showcase.
  - Detailed spec checklists and highlights.
  - Quantity adjuster (`-` / `+`).
  - Direct cart and wishlist integration.

- **Interactive Cart Drawer**:
  - Slide-out drawer from the right.
  - Dynamic Free Shipping progress bar (unlocks free delivery at $75+).
  - Quantity controls (`-` / `+`) and item removal.
  - Coupon code support with pre-loaded `UPERSKILL15` (15% off) and `WELCOME10` (10% off).
  - Live subtotal, discount, shipping, and total calculations.

- **Simulated Checkout Flow**:
  - 2-step checkout modal with shipping address and card payment details.
  - Simulated processing state with spinner.
  - Order confirmation screen with unique order tracking reference (`#UPERSKILL-XXXXXX`).

- **Flash Deals & Promo Section**:
  - Live countdown clock (hours, minutes, seconds).
  - One-click "Copy Code" coupon voucher for `UPERSKILL15`.

- **Social Proof & Engagement**:
  - Verified buyer testimonials with customer portraits and purchased item tags.
  - Expandable FAQ accordion.
  - Newsletter subscriber form with instant validation.
  - Full-featured footer with back-to-top navigation.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
The optimized production bundle will be created in the `dist` folder.
