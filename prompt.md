You are a senior frontend engineer and product designer. Build the COMPLETE frontend for "Best of Assam" (working name, keep it in one config file so it's easy to rename): an Assam-only verified directory where businesses compete for the #1 spot through monthly SEALED-BID auctions. Use demo data only. A TypeScript Next.js backend will be wired in later, so architecture must make that swap trivial.

## STACK
- Next.js 14+ App Router, TypeScript (strict), Tailwind CSS, Server Components by default, Client Components only where needed
- Zod for validation, React Hook Form for forms, next/font, next/image, lucide-react for icons
- No heavy UI kits. Build components by hand.

## DESIGN DIRECTION (CRITICAL: must NOT look AI-generated)
BANNED: gradients of any kind, purple/blue-violet palettes, glassmorphism, glowing blobs, neon, emoji as icons, generic "Hero with floating cards", centered-everything layouts, excessive rounded-3xl, drop-shadow soup, stock "Unlock the power of..." copy.
DO:
- Look like a confident editorial / local-newspaper-meets-modern-marketplace product. Think flat solid colors, strong typography, thin 1px borders, generous whitespace, asymmetric layouts, real grid structure.
- Palette (solid colors only, define as CSS variables + Tailwind tokens): paper off-white #FAF6EE, ink #1B1A17, Assam tea green #2F5D3A, gamosa red #B3261E (used sparingly for accents/CTAs), muted gold #C79A2B (only for the Featured/#1 marker), stone greys for borders. Dark mode optional, skip if it hurts quality.
- Typography: a serif display font for headings (e.g. Fraunces or Playfair Display) + a clean sans for UI (e.g. Inter or DM Sans). Tight, intentional type scale.
- Subtle Assamese identity: a gamosa-style border pattern (pure CSS, flat stripes) as a divider/footer detail, not a theme park.
- Buttons: solid fill, 4-6px radius, clear hover/focus states. Cards: border, no shadow or very faint shadow.
- Copy tone: plain, human, a little Hinglish-friendly microcopy where natural. No marketing fluff.
- Fully responsive, mobile-first (most users are on phones in Upper Assam, assume slow 4G). 360px to 1440px. Touch targets >= 44px. Bottom sticky CTA bar on mobile listing pages (Call / WhatsApp).
- WCAG AA contrast, visible focus rings, semantic HTML, alt text.

## FOLDER ARCHITECTURE (follow exactly)
src/
  app/
    (public)/
      page.tsx                         Home
      [category]/page.tsx              Category index (e.g. /homestays)
      [category]/[city]/page.tsx       Ranked list (e.g. /homestays/majuli)
      listing/[slug]/page.tsx          Listing detail
      about/ , how-ranking-works/ , terms/ , complaint-policy/
    (dashboard)/
      dashboard/page.tsx               Business overview
      dashboard/listing/page.tsx       Edit listing
      dashboard/bids/page.tsx          Sealed-bid center
      dashboard/reviews/page.tsx
      dashboard/payouts/page.tsx       Razorpay Route linked-account status (mock)
    (auth)/login, signup (phone OTP UI, mock)
    admin/ (verification queue, complaints queue, auction control, mock)
    api/ (leave empty with README explaining planned route handlers)
    sitemap.ts, robots.ts, not-found.tsx, error.tsx, loading.tsx files
  components/
    ui/        Button, Input, Select, Badge, Card, Modal, Tabs, Toast, Skeleton, Rating, EmptyState
    layout/    Header, Footer, MobileNav, Breadcrumbs, GamosaDivider
    listing/   ListingCard, ListingGrid, RankedList, SponsoredLabel, VerifiedBadge, Gallery, ContactBar, ReviewList, ReviewForm, ReportButton
    bidding/   BidForm, BidStatusCard, AuctionCountdown, RankExplainer
    filters/   CityFilter, PriceFilter, SortBar
    admin/     VerificationTable, ComplaintTable
  lib/
    config/    site.ts (brand name, nav, categories, cities)
    utils/     format (₹ INR), slugify, cn, dates
    validators/ zod schemas
    ranking/   computeRankScore.ts (pure function, unit-testable)
  services/                            <<< THE KEY LAYER
    types.ts                           ListingService, BidService, ReviewService, AuthService, AdminService interfaces
    mock/                              mock implementations reading from /data, with artificial 300ms delay
    index.ts                           exports services; switch mock/real via env NEXT_PUBLIC_USE_MOCK=true
  types/                               Listing, Business, Bid, Auction, Review, Complaint, User, Category, City
  data/                                demo JSON/TS data
  hooks/                               useDebounce, useCountdown, useMediaQuery
Rule: UI components NEVER import from /data directly. Everything goes through /services so replacing mocks with fetch calls to the real backend needs zero UI changes.

## DOMAIN MODEL (types)
Category: colleges, coaching, homestays, restaurants-cafes, wedding-services, influencers. Medical = "coming soon" placeholder page only. Do NOT build any hourly-homestay category.
City: Jorhat (primary), Sivasagar, Dibrugarh, Majuli, Tezpur, Guwahati, Kaziranga/Golaghat.
Listing: id, slug, name, category, city, address, phone, whatsapp, priceFrom, images[], description, amenities/tags, rating, reviewCount, verified, verifiedAt, status, currentRank, isFeatured, complaintCount.
Auction: id, categoryId, cityId, month, bidWindowStart (1st), bidWindowEnd (5th), status (open/closed/settled), floorPrice 1000, capPrice 10000.
Bid: id, auctionId, listingId, amount (private), createdAt.

## RANKING + BIDDING UX RULES
- Rank score = 45% normalized bid + 55% quality (rating, review count, photo count, complaint penalty). Implement in lib/ranking/computeRankScore.ts with clear comments and a RankExplainer UI on /how-ranking-works.
- Bids are SEALED. Business sees ONLY their own bid and their current status ("You are currently #2"), never others' amounts.
- Second-price rule: winner pays 2nd place's bid + ₹50. Explain this in plain language inside BidForm with a live calculator preview ("If you win, you'll pay about ₹X").
- Floor ₹1,000, cap ₹10,000, validated with zod.
- Listings with rating < 3.5 or unverified: BidForm is disabled with a clear reason and next step.
- #1 spot always shows a visible "Featured" (sponsored) label. Never hide it.
- Show auction countdown to bid window close.
- Monthly reset note: spots are not permanent.

## PAGES: required details
Home: sharp headline, category tiles (typographic, not icon-blob), city quick picks, "How it works" in 3 steps, trust section (verification process, report button, no fake reviews), top featured listings, business CTA ("List your business free, bid for #1").
Ranked list page: filters (price, rating, verified only), sort, sticky filter bar on mobile as a bottom sheet, #1 Featured card visually distinct (gold left border, not gradient), skeleton loading, empty state, pagination or load more.
Listing detail: gallery, sticky contact bar, verified badge with date, amenities, map placeholder, reviews (only "verified guest" tag), report modal, JSON-LD structured data, dynamic generateMetadata for SEO.
Dashboard: stats cards with simple SVG sparkline, bid center, listing editor with image upload UI (mock), payout status.
Admin: verification queue with checklist (Maps checked, call done, visit done), complaint queue with warn/remove-from-#1/ban actions (mock state).
Auth: phone number + OTP UI (mock OTP 123456).

## DEMO DATA
Create realistic data: 40+ listings across all categories, concentrated in Jorhat, Majuli, Sivasagar, Dibrugarh, Guwahati. Real-sounding Assamese/English business names, realistic ₹ prices, varied ratings (include a few <3.5 and unverified ones to demonstrate gating), 60+ reviews, 2 open auctions, sample bids for the logged-in demo business. Use placeholder images from picsum or local /public SVG placeholders.

## QUALITY BAR
- Strict TypeScript, no `any`. ESLint + Prettier clean.
- generateStaticParams for category/city pages, ISR-ready.
- Loading, error and empty states on every data page.
- Accessible modals, keyboard nav.
- Lighthouse target: 95+ performance and accessibility on mobile.
- Add README.md: setup, folder philosophy, how to swap mock services for the real backend (step by step), env variables, and a TODO list of backend endpoints expected (REST routes + request/response shapes matching the TypeScript types).

## OUTPUT
Generate ALL files, fully working, no placeholders like "TODO implement" in UI code. Start with project setup and design tokens, then ui components, then services/mocks, then pages. After finishing, run the build and fix all type/lint errors.