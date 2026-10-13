/**
 * Domain Types for Best of Assam
 */
export type CategorySlug =
  | "colleges"
  | "coaching"
  | "homestays"
  | "restaurants-cafes"
  | "wedding-services"
  | "influencers"
  | "medical";

export type CitySlug =
  | "jorhat"
  | "sivasagar"
  | "dibrugarh"
  | "majuli"
  | "tezpur"
  | "guwahati"
  | "kaziranga";

export interface Category {
  slug: CategorySlug;
  label: string;
  description: string;
  comingSoon?: boolean;
}

export interface City {
  slug: CitySlug;
  label: string;
  district: string;
}

export type ListingStatus = "active" | "pending" | "suspended";
export type AuctionStatus = "open" | "closed" | "settled";

export interface Listing {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  city: CitySlug;
  address: string;
  phone: string;
  whatsapp: string;
  priceFrom: number;
  images: string[];
  description: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  verified: boolean;
  verifiedAt: string | null;
  status: ListingStatus;
  currentRank: number | null;
  isFeatured: boolean;
  complaintCount: number;
  businessId: string;
}

export interface Auction {
  id: string;
  categoryId: CategorySlug;
  cityId: CitySlug;
  month: string; // e.g. "2026-10"
  bidWindowStart: string; // ISO date
  bidWindowEnd: string; // ISO date
  status: AuctionStatus;
  floorPrice: number;
  capPrice: number;
}

export interface Bid {
  id: string;
  auctionId: string;
  listingId: string;
  amount: number;
  createdAt: string;
}

export interface Review {
  id: string;
  listingId: string;
  authorName: string;
  rating: number;
  body: string;
  verifiedGuest: boolean;
  createdAt: string;
}

export interface Complaint {
  id: string;
  listingId: string;
  reporterName: string;
  reason: string;
  details?: string;
  status: "pending" | "resolved" | "dismissed";
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  role: "owner" | "admin";
  businessId?: string;
}

export interface RankScore {
  listingId: string;
  bidScore: number; // 0‑1 normalized
  qualityScore: number; // 0‑1
  total: number; // 0‑1 final rank score
}

export interface ListingFilters {
  category?: CategorySlug;
  city?: CitySlug;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  verifiedOnly?: boolean;
  sort?: "rank" | "rating" | "price_asc" | "price_desc";
}
