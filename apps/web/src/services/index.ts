/**
 * Service exports – swap mock with real by setting NEXT_PUBLIC_USE_MOCK=false
 * and implementing real service classes in services/real/
 */
import { mockListingService } from "./mock/listing";
import { mockBidService } from "./mock/bid";
import { mockReviewService } from "./mock/review";
import { mockAuthService } from "./mock/auth";
import { mockAdminService } from "./mock/admin";
import type { ListingService, BidService, ReviewService, AuthService, AdminService } from "./types";

const useMock = process.env.NEXT_PUBLIC_USE_MOCK !== "false";

export const listingService: ListingService = useMock ? mockListingService : mockListingService;
export const bidService: BidService = useMock ? mockBidService : mockBidService;
export const reviewService: ReviewService = useMock ? mockReviewService : mockReviewService;
export const authService: AuthService = useMock ? mockAuthService : mockAuthService;
export const adminService: AdminService = useMock ? mockAdminService : mockAdminService;

// When real services are ready, replace the mock fallbacks:
// export const listingService: ListingService = useMock ? mockListingService : realListingService;
