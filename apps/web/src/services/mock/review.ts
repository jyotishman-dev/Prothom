import { REVIEWS } from "@/data/reviews";
import type { Review } from "@/types";
import type { ReviewService } from "../types";

const delay = () => new Promise<void>((r) => setTimeout(r, 300));
const reviewsStore = [...REVIEWS];

export const mockReviewService: ReviewService = {
  async getReviewsForListing(listingId: string): Promise<Review[]> {
    await delay();
    return reviewsStore
      .filter((r) => r.listingId === listingId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  async submitReview(listingId: string, data: { authorName: string; rating: number; body: string }): Promise<Review> {
    await delay();
    const review: Review = {
      id: `rev-${Date.now()}`,
      listingId,
      authorName: data.authorName,
      rating: data.rating,
      body: data.body,
      verifiedGuest: false,
      createdAt: new Date().toISOString(),
    };
    reviewsStore.push(review);
    return review;
  },
};
