import type { Bid } from "@/types";

export const BIDS: Bid[] = [
  { id: "bid-001", auctionId: "auc-001", listingId: "lst-001", amount: 7500, createdAt: "2026-10-02T10:30:00Z" },
  { id: "bid-002", auctionId: "auc-002", listingId: "lst-001", amount: 5000, createdAt: "2026-10-02T11:00:00Z" },
  { id: "bid-003", auctionId: "auc-003", listingId: "lst-001", amount: 6000, createdAt: "2026-09-02T09:15:00Z" },
  { id: "bid-004", auctionId: "auc-003", listingId: "lst-002", amount: 4500, createdAt: "2026-09-03T14:20:00Z" },
  { id: "bid-005", auctionId: "auc-004", listingId: "lst-025", amount: 8000, createdAt: "2026-09-01T16:45:00Z" },
];
