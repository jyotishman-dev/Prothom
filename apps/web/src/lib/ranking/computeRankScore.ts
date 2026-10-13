/**
 * Rank Score Formula:
 *   total = 0.45 * normalizedBid + 0.55 * qualityScore
 *
 * normalizedBid = amount / AUCTION_CAP  (0-1)
 *
 * qualityScore = average of:
 *   - ratingScore:       (rating - 1) / 4        // 1-5 -> 0-1
 *   - reviewScore:       min(reviewCount/50, 1)   // capped at 50
 *   - photoScore:        min(photoCount/10, 1)    // capped at 10
 *   - complaintPenalty:  max(0, 1 - 0.2*count)    // -20% per complaint
 */
import type { RankScore } from "@/types";
import { AUCTION_CAP } from "@/lib/config/site";

export const BID_WEIGHT = 0.45;
export const QUALITY_WEIGHT = 0.55;

export interface RankInput {
  listingId: string;
  bidAmount: number;
  rating: number;
  reviewCount: number;
  photoCount: number;
  complaintCount: number;
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export function computeRankScore(input: RankInput): RankScore {
  const { listingId, bidAmount, rating, reviewCount, photoCount, complaintCount } = input;

  const bidScore = clamp01(bidAmount / AUCTION_CAP);

  const ratingScore = clamp01((rating - 1) / 4);
  const reviewScoreVal = clamp01(reviewCount / 50);
  const photoScore = clamp01(photoCount / 10);
  const complaintPenalty = clamp01(1 - 0.2 * complaintCount);

  const qualityScore = (ratingScore + reviewScoreVal + photoScore + complaintPenalty) / 4;
  const total = clamp01(bidScore * BID_WEIGHT + qualityScore * QUALITY_WEIGHT);

  return { listingId, bidScore, qualityScore, total };
}
