# Prothom (Best of Assam) 🌿

> **Hyperlocal Verified Business Directory & Sealed-Bid Ranking SaaS Platform for Assam**

[![Next.js](https://img.shields.io/badge/Next.js-15%2F16-black?logo=next.js)](https://nextjs.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-EF4444?logo=turborepo)](https://turbo.build/repo)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-green)](#license)

---

## 📌 Executive Summary

**Prothom** (*working title: "Best of Assam"*) is a specialized **B2B / B2C Directory & Hyperlocal Ranking SaaS** designed specifically for Assam, India. It tackles the fundamental trust and visibility problems in local discovery by combining:

1. **Human & Strict On-ground Verification**: Zero spam, no phantom businesses. Every business undergoes strict multi-point checks (Maps verification, phone verification, and physical/on-site checks).
2. **Transparent Sealed-Bid Monthly Auctions**: Businesses compete for the coveted `#1 Featured Spot` using a **Vickrey-style (second-price) sealed-bid auction**.
3. **Quality-Weighted Algorithmic Ranking**: Rank is never bought purely with money. The composite ranking score is calculated with **45% normalized bid + 55% verified quality & trust metrics** (ratings, authentic reviews, photos, and complaint penalties).
4. **Clean Editorial Aesthetic**: Intentionally designed without tacky gradients, glowing blobs, or generic templates. Features an authentic, newspaper-meets-modern-marketplace design tailored with an Assamese identity (paper off-white `#FAF6EE`, Assam tea green `#2F5D3A`, gamosa red `#B3261E`).

---

## 🏗️ Architecture & Tech Stack

This project is structured as a high-performance **Turborepo** monorepo managed with **Bun**:

```
Prothom/
├── apps/
│   └── web/                     # Primary Next.js App Router application
│       ├── src/
│       │   ├── app/             # Public routes, Business Dashboard, Admin Portal
│       │   ├── components/      # UI primitives, Listing, Bidding, Layout
│       │   ├── lib/             # Config, Ranking math, Validation schemas, Formatters
│       │   ├── services/        # Service abstraction layer (Mock & Real API swap)
│       │   ├── types/           # Domain TypeScript definitions
│       │   └── data/            # Realistic demo datasets
├── packages/
│   └── ui/                      # Shared workspace UI components
├── turbo.json                   # Turborepo task pipeline configuration
└── package.json                 # Monorepo root workspace configuration
```

### Technology Highlights
- **Framework**: Next.js (App Router, Server Components by default, Client Components where interactivity is required)
- **Monorepo Engine**: Turborepo & Bun Workspaces
- **Type Safety**: TypeScript in strict mode
- **Styling**: Tailwind CSS v4 with custom semantic tokens
- **Icons & UI Primitives**: Lucide React, accessible headless patterns
- **Data Validation**: Zod schemas for all forms and bid inputs
- **State & Service Layer**: Interface-driven architecture (`services/`) enabling instant switching between mock demo mode and production REST API handlers.

---

## 🎯 Key Product Features

### 1. 🔍 Hyperlocal Public Directory
- **Categories**: Colleges, Coaching Centres, Homestays, Restaurants & Cafés, Wedding Services, Influencers *(Medical category coming soon)*.
- **Assam Regional Coverage**: Jorhat (primary focus), Majuli, Sivasagar, Dibrugarh, Tezpur, Guwahati, and Kaziranga/Golaghat.
- **Mobile-First UX**: Optimized for slow 4G connectivity in Upper Assam with sub-second page loads, sticky mobile contact bars (Direct Call & WhatsApp), and zero layout shift.
- **Full SEO & OpenGraph Support**: Semantic HTML5, dynamic metadata, JSON-LD structured business data, and dynamic XML sitemaps.

### 2. ⚖️ Sealed-Bid Auction & Ranking Formula
- **Sealed Bids**: Participating businesses submit confidential bids between ₹1,000 (floor) and ₹10,000 (cap) during the monthly bid window (1st to 5th of each month). Bids remain private.
- **Fair Second-Price Rule**: If a business wins the top spot, they do not pay their maximum bid; they pay the 2nd-place bid + ₹50.
- **Quality Guardrails**:
  - Unverified businesses or listings with a rating under **3.5 stars** are completely disqualified from bidding.
  - Complaints directly penalize rank scores (-20% penalty per verified complaint).
  - Formula:
    $$\text{Rank Score} = 0.45 \times \text{Normalized Bid} + 0.55 \times \text{Quality Score}$$

### 3. 🏢 Business SaaS Dashboard
- Comprehensive portal for business owners to:
  - Track profile performance and view analytics.
  - Enter the **Sealed-Bid Center** with live cost estimator previews.
  - Manage listing information, photos, and service tags.
  - Monitor customer reviews and Razorpay Route linked-account payout states.

### 4. 🛡️ Verification & Admin Control Center
- Verification queue with checklist workflows (Google Maps check, telephonic audit, physical visit verification).
- Community complaint moderation with automated action triggers (`warn`, `remove-rank`, `ban`).

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (v1.2+ recommended) or Node.js (>=20.x)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/prothom.git
   cd prothom
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```

4. Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)**.

---

## ⚙️ Configuration & Environment Variables

Create a `.env.local` file inside `apps/web/`:

```env
# Toggle between local mock services and production backend API
NEXT_PUBLIC_USE_MOCK=true

# Public application URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Backend API Base URL (used when NEXT_PUBLIC_USE_MOCK=false)
# NEXT_PUBLIC_API_URL=https://api.bestofassam.in
```

---

## 🔄 Swapping Mock Services with Real Backend

Prothom uses an **Interface-Driven Service Architecture** (`apps/web/src/services/`). UI components **never** fetch raw demo data or communicate with APIs directly.

To wire up a real database or REST backend:

1. Create real service implementations in `apps/web/src/services/real/` satisfying the contracts defined in `services/types.ts`:
   - `ListingService`
   - `BidService`
   - `ReviewService`
   - `AuthService`
   - `AdminService`
2. Update `apps/web/src/services/index.ts` to switch implementations when `NEXT_PUBLIC_USE_MOCK === "false"`.
3. Set `NEXT_PUBLIC_USE_MOCK=false` in your `.env.local`.
4. **Zero frontend component code needs to be altered.**

---

## 📋 Backend API Route Specification

The expected backend REST endpoints and payload structures are defined in [apps/web/src/app/api/README.md](apps/web/src/app/api/README.md):

| Domain | Route | Method | Description |
|---|---|---|---|
| **Listings** | `/api/listings` | `GET`, `POST` | Filter or register listings |
| **Listings** | `/api/listings/[slug]` | `GET`, `PATCH` | Retrieve or update listing profile |
| **Reviews** | `/api/listings/[slug]/reviews` | `GET`, `POST` | Fetch or submit verified guest review |
| **Auctions** | `/api/auctions` | `GET` | List active category/city auctions |
| **Bids** | `/api/auctions/[id]/bids` | `POST` | Submit sealed monthly bid |
| **Auth** | `/api/auth/send-otp` | `POST` | Request phone authentication OTP |
| **Auth** | `/api/auth/verify-otp` | `POST` | Validate OTP and issue session token |
| **Admin** | `/api/admin/verification-queue` | `GET` | Fetch pending verifications |
| **Admin** | `/api/admin/complaints` | `GET`, `PATCH` | Triage and resolve user complaints |

---

## 🧪 Available Scripts

| Command | Action |
|---|---|
| `bun run dev` | Starts Next.js development server across monorepo |
| `bun run build` | Compiles and builds all packages and applications for production |
| `bun run lint` | Runs ESLint across the codebase |
| `bun run check-types` | Executes TypeScript type-checks without emitting files |
| `bun run format` | Runs Prettier across all `.ts`, `.tsx`, and `.md` files |

---

## 🗺️ Roadmap

- [x] High-fidelity editorial UI & theme tokens
- [x] Full mock data & service abstraction layer
- [x] Sealed-bid auction math & live payment calculator
- [x] Business owner dashboard & Admin verification portal
- [ ] Connect production PostgreSQL / Supabase backend
- [ ] Integrate SMS OTP gateway (Twilio / Fast2SMS)
- [ ] Integrate Razorpay Route for automated auction settlement & payouts
- [ ] Launch mobile PWA with offline caching for Upper Assam districts

---

## 📄 License

Proprietary © 2026 Prothom / Best of Assam. All rights reserved.
