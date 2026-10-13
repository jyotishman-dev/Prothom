# API Route Handlers

This directory is intentionally empty. The frontend is purely mock-data driven.
When the TypeScript Next.js backend is ready, create route handlers here.

## Planned Endpoints

### Listings
- `GET /api/listings` — `{ filters?: ListingFilters }` → `{ listings: Listing[] }`
- `GET /api/listings/[slug]` → `{ listing: Listing }`
- `POST /api/listings` — `{ name, category, city, … }` → `{ listing: Listing }`
- `PATCH /api/listings/[slug]` → `{ listing: Listing }`

### Reviews
- `GET /api/listings/[slug]/reviews` → `{ reviews: Review[] }`
- `POST /api/listings/[slug]/reviews` — `{ rating, body, authorName }` → `{ review: Review }`

### Auctions & Bids
- `GET /api/auctions` — `{ categoryId?, cityId? }` → `{ auctions: Auction[] }`
- `POST /api/auctions/[id]/bids` — `{ amount: number }` → `{ bid: Bid; estimatedPayment: number }`
- `GET /api/auctions/[id]/bids/my` — (auth required) → `{ bid: Bid; rank: number }`

### Auth
- `POST /api/auth/send-otp` — `{ phone: string }` → `{ success: boolean }`
- `POST /api/auth/verify-otp` — `{ phone, otp }` → `{ token: string; user: User }`
- `POST /api/auth/signup` — `{ phone, businessName, otp }` → `{ token, user }`

### Admin
- `GET /api/admin/verification-queue` → `{ listings: Listing[] }`
- `PATCH /api/admin/listings/[id]/verify` — `{ approved: boolean }` → `{ listing: Listing }`
- `GET /api/admin/complaints` → `{ complaints: Complaint[] }`
- `PATCH /api/admin/complaints/[id]` — `{ action: 'warn' | 'remove-rank' | 'ban' }` → `{ complaint: Complaint }`

### Payouts
- `GET /api/payouts/status` — (auth) → Razorpay Route account status

## Swap Guide

1. Set `NEXT_PUBLIC_USE_MOCK=false` in your `.env.local`
2. Implement each interface in `src/services/real/`
3. Update `src/services/index.ts` to export real implementations
4. No UI code changes required — the service contract is stable
