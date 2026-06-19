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
  perforated ticket edge on the Deal card.
- Motion respects `prefers-reduced-motion`.

## Pages

| Route       | Page      |
| ----------- | --------- |
| `/`         | Home      |
| `/menu`     | Menu      |
| `/deal`     | The Deal  |
| `/story`    | Our Story |
| `/find-us`  | Find Us   |

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
- **Online ordering:** https://femispizzeria.pdqonlineordering.com/
- **Facebook:** https://www.facebook.com/FEMISPIZZERIA/timeline
- **Established:** 1984

## ⚠ Open items — confirm with client before launch

- [ ] **Hours** on `/find-us` are **placeholders** (Sun–Thu 11am–9pm,
      Fri–Sat 11am–10pm) — not yet confirmed.
- [ ] **Menu items & prices** beyond the listed items are **placeholders**
      pending the client's real menu.
- [ ] **No real photography** exists yet. The build intentionally ships with
      **no images/stock photos** rather than generic stock that would
      misrepresent the actual food. Add real photos when available.
- [ ] **"Lester" vs "Essington" naming.** The business sits in an area labeled
      both "Lester, PA" and "Essington, PA" (Lester is an unincorporated
      community within Essington / Tinicum Township). The site uses
      **"Lester, PA"** throughout — confirm the preferred public-facing name.
- [x] **Map embed** on `/find-us` — live Google Maps embed for 146 Seneca St
      (keyless `output=embed`). Swap for an API-key embed if you want custom
      styling/branding.
