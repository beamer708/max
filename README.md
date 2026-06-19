# Femi's Pizzeria — Website

Marketing site for **Femi's Pizzeria**, a family-owned pizzeria in Lester, PA,
established 1984. This is a ground-up redesign of the existing
[femispizzeria.com](https://femispizzeria.com).

## Stack

- **React 18** + **Vite 6**
- **React Router 6** — client-side routing, separate pages
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin
- **lucide-react** for icons

### Conventions

- **Colors are applied with inline styles** (`style={{ color: ... }}`), not
  Tailwind arbitrary-value classes (`bg-[#...]`), which have caused rendering
  failures in some environments. All tokens live in [`src/theme.js`](src/theme.js).
- Tailwind is used only for **layout utilities** (flex, grid, spacing, sizing,
  responsive prefixes).
- Fonts: **Oswald** (display/headings, via the `.display` class) and
  **Libre Franklin** (body). Imported in `src/index.css` — Google Fonts `@import`
  first, then `@import "tailwindcss"` (CSS requires `@import` before other rules).
- Visual motif: an **order-ticket** aesthetic — rotated "stamp" badges and a
  perforated ticket edge on deal/receipt cards.
- Motion respects `prefers-reduced-motion`.

## Pages

| Route            | Page                                            |
| ---------------- | ----------------------------------------------- |
| `/`              | Home                                            |
| `/menu`          | Menu (full categories, add-to-cart)             |
| `/order`         | Order (pickup/delivery, build an order)         |
| `/checkout`      | Checkout (customer details, demo payment)       |
| `/confirmation`  | Order confirmation (ticket-style receipt)       |
| `/deal`          | The Deal (Family Night + more deals)            |
| `/story`         | Our Story                                       |
| `/catering`      | Catering & large group inquiry (demo form)      |
| `/find-us`       | Find Us (map, hours, delivery area, FAQ)        |
| `/admin`         | Staff POS (sandbox kitchen dashboard)           |

## Sandbox online ordering (showcase — no backend)

This site demonstrates a full pickup/delivery ordering flow with **no server,
no payments, and no real fulfillment**. It's intentionally lightweight:

- **Menu data** is the single source of truth in
  [`src/data/menu.js`](src/data/menu.js) — read by the Menu, Order, and Home
  pages and the cart.
- **Cart** is React Context ([`src/context/CartContext.jsx`](src/context/CartContext.jsx))
  persisted to `localStorage`. Order type (pickup/delivery), tax, and delivery
  fee are computed there using constants in `src/theme.js` (`ordering`).
- **Placing an order** writes a record to `localStorage`
  ([`src/lib/orders.js`](src/lib/orders.js)) with a friendly number (e.g.
  `#1984-0042`) and status `New`, then shows a ticket-style receipt. Nothing is
  emailed, charged, or transmitted.
- **Staff POS** at `/admin` reads from the same store and lets staff advance
  status (`New → Preparing → Ready → Completed`, or `Cancelled`), filter, and
  clear demo orders.

> ⚠ **Same-browser only.** Because there is no backend, the POS only sees orders
> placed in the **same browser** (they share `localStorage`). This is expected
> for the demo. `/admin` is an **unauthenticated** showcase screen — add real
> auth + a backend before any production use.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

`vercel.json` contains a catch-all rewrite to `index.html` so client-side routes
(e.g. `/menu`) resolve correctly on direct load / refresh.

## Business info (source of truth)

- **Address:** 146 Seneca St, Lester, PA 19029
- **Phone:** 610-595-3364
- **Online ordering (real, current):** https://femispizzeria.pdqonlineordering.com/
- **Facebook:** https://www.facebook.com/FEMISPIZZERIA/timeline
- **Established:** 1984

## ⚠ Open items — confirm with client before launch

### Sandbox / demo boundaries
- [ ] **Online ordering is a demo.** Orders are stored in the browser's
      `localStorage` and are **not** charged, emailed, or sent to the kitchen.
      Wire a real backend + payment processor (or link the existing PDQ ordering
      URL) before going live.
- [ ] **Staff POS (`/admin`) is an unauthenticated demo** and only shows orders
      from the same browser. Add authentication and a shared datastore for real use.
- [ ] **Demo forms** (catering inquiry) don't send anywhere.

### Placeholder content
- [ ] **Hours** on `/find-us` are **placeholders** (Sun–Thu 11am–9pm,
      Fri–Sat 11am–10pm) — not yet confirmed.
- [ ] **Menu items & prices** beyond the original six pizzas / three calzones are
      **placeholders** pending the client's real menu (`src/data/menu.js`).
- [ ] **Deals** (Lunch Special, Game Day Bundle, Student Discount) are placeholders.
- [ ] **Ordering constants** — tax rate (6%), delivery fee ($3.99), delivery
      radius (~5 mi), and prep/delivery ETAs are placeholders (`src/theme.js`).
- [ ] **Testimonials** on the Home page are illustrative placeholders.
- [ ] **No real photography** exists yet. The build intentionally ships with
      **no images/stock photos** rather than generic stock that would
      misrepresent the actual food. Add real photos when available.
- [ ] **"Lester" vs "Essington" naming.** The business sits in an area labeled
      both "Lester, PA" and "Essington, PA" (Lester is an unincorporated
      community within Essington / Tinicum Township). The site uses
      **"Lester, PA"** throughout — confirm the preferred public-facing name.

### Done
- [x] **Map embed** on `/find-us` — live Google Maps embed for 146 Seneca St
      (keyless `output=embed`). Swap for an API-key embed if you want custom
      styling/branding.
