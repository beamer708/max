## MNCK Property Maintenance Website

Modern, responsive multi-page service website built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

### Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Project Structure

- `app/` - App Router files and global styles
- `components/layout/` - Navbar and footer
- `components/sections/` - Home page sections
- `components/ui/` - Reusable UI utilities

### App Routes

- `/` (Home)
- `/services`
- `/who-we-serve`
- `/service-areas`
- `/projects`
- `/about`
- `/faqs`
- `/contact`

### Included Features

- Sticky navigation with responsive mobile menu
- Shared header and footer across all pages
- Framer Motion section reveals and subtle CTA pulse
- Services, audience segmentation, service area coverage pages
- Projects gallery with client-side lightbox
- FAQ accordion page
- Validated contact form with success/error states
- SEO-ready page metadata using App Router `metadata`

### Scripts

- `npm run dev` - Start dev server
- `npm run lint` - Run ESLint
- `npm run build` - Build for production
- `npm run start` - Start production server

### Notes

- Update contact details in `components/sections/ContactSection.tsx`
- Replace placeholder project images in `public/projects/`
# max
