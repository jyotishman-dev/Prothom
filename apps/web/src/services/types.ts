import type { Listing, Auction, Bid, Review, Complaint, User, ListingFilters } from "@/types";

export interface ListingService {
  getListings(filters?: ListingFilters): Promise<Listing[]>;
  getListingBySlug(slug: string): Promise<Listing | null>;
  getListingsByCategory(category: string): Promise<Listing[]>;
  getFeaturedListings(): Promise<Listing[]>;
  updateListing(id: string, data: Partial<Listing>): Promise<Listing>;
}

export interface BidService {
  getAuctions(filters?: { categoryId?: string; cityId?: string }): Promise<Auction[]>;
  getAuctionById(id: string): Promise<Auction | null>;
  getBidsForListing(listingId: string): Promise<Bid[]>;
  placeBid(auctionId: string, listingId: string, amount: number): Promise<Bid>;
  getMyBids(listingId: string): Promise<Bid[]>;
  estimatePayment(bidAmount: number, auctionId: string): Promise<number>;
}

export interface ReviewService {
  getReviewsForListing(listingId: string): Promise<Review[]>;
  submitReview(listingId: string, data: { authorName: string; rating: number; body: string }): Promise<Review>;
}

export interface AuthService {
  sendOtp(phone: string): Promise<boolean>;
  verifyOtp(phone: string, otp: string): Promise<User | null>;
  signup(phone: string, businessName: string, otp: string): Promise<User | null>;
  getCurrentUser(): User | null;
  logout(): void;
}

export interface AdminService {
  getVerificationQueue(): Promise<Listing[]>;
  verifyListing(id: string, approved: boolean): Promise<Listing>;
  getComplaints(): Promise<Complaint[]>;
  handleComplaint(id: string, action: "warn" | "remove-rank" | "ban"): Promise<Complaint>;
}
