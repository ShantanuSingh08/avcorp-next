# A V CORP Next.js Website

Next.js (App Router) rebuild of the static `avcorp_site_preview` HTML/CSS/JS preview.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- Global CSS ported verbatim from the original `styles.css` (`app/globals.css`)
- Product catalogue is data-driven from `lib/products.ts`
- Category pages are statically generated from that data

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm run start     # serve the production build
```

## Structure

| Path | Purpose |
| --- | --- |
| `app/layout.tsx` | Root layout: TopBar + NavBar + Footer chrome, fonts, metadata, global JSON-LD |
| `app/sitemap.ts` / `app/robots.ts` | Generated `sitemap.xml` and `robots.txt` |
| `lib/site.ts` | Site config (domain, contact details, address) used by metadata + schema |
| `lib/schema.ts` | JSON-LD builders (Organization, WebSite, BreadcrumbList, CollectionPage, ItemList) |
| `components/JsonLd.tsx` | Renders a JSON-LD `<script>` tag |
| `app/page.tsx` | Home (hero, about, product solutions, process, industries, why-us, CTA) |
| `app/products/page.tsx` | Product overview grid |
| `app/products/[category]/page.tsx` | One page per catalogue category (statically generated) |
| `app/contact/page.tsx` | Contact details + enquiry form |
| `app/api/contact/route.ts` | Sends the enquiry form via Resend |
| `app/not-found.tsx` | 404 page |
| `components/` | `TopBar`, `NavBar` (client, mobile menu + active link), `Footer`, `Placeholder`, `ContactForm` (client, submits to `/api/contact`) |
| `lib/products.ts` | Category + product data (single source of truth) |
| `public/assets/av-corp-logo.png` | Logo |
| `app/favicon.ico` / `app/icon.png` / `app/apple-icon.png` | Favicons (generated from the logo; Next injects the `<link>` tags) |

## Routes

- `/` (Home, with `#about`, `#industries`, `#process` anchors)
- `/products`
- `/products/performance-fabrics`
- `/products/uniform-solutions`
- `/products/industrial-workwear`
- `/products/promotional-apparel`
- `/products/hospitality-linen`
- `/products/promotional-merchandise`
- `/contact`

## Notes

- Image areas are intentional placeholders. To add a real photo, replace
  `<Placeholder label="..." />` with an `<img>` / `next/image` in the relevant
  component or page.
- The contact form posts to `app/api/contact/route.ts`, which emails the
  enquiry via [Resend](https://resend.com). Copy `.env.example` to `.env.local`
  and set `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL` /
  `CONTACT_FROM_EMAIL`) to enable it; without a key the form shows a friendly
  error instead of failing silently. `CONTACT_FROM_EMAIL` can only stay on
  Resend's shared `onboarding@resend.dev` address until a domain is verified in
  the [Resend dashboard](https://resend.com/domains) — after that, switch it to
  an address on your own domain.
- To add or edit catalogue items, edit `lib/products.ts` and every page updates
  automatically.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain before deploying. It feeds
  canonical URLs, Open Graph tags, `sitemap.xml`, `robots.txt` and all JSON-LD.
  Update contact details, address and `foundingYear` in `lib/site.ts`.
