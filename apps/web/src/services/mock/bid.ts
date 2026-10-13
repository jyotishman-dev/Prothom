import { AUCTIONS } from "@/data/auctions";
import { BIDS } from "@/data/bids";
import type { Auction, Bid } from "@/types";
import type { BidService } from "../types";

const delay = () => new Promise<void>((r) => setTimeout(r, 300));
const bidsStore = [...BIDS];

export const mockBidService: BidService = {
  async getAuctions(filters?: { categoryId?: string; cityId?: string }): Promise<Auction[]> {
    await delay();
    let results = [...AUCTIONS];
    if (filters?.categoryId) results = results.filter((a) => a.categoryId === filters.categoryId);
    if (filters?.cityId) results = results.filter((a) => a.cityId === filters.cityId);
    return results;
  },

  async getAuctionById(id: string): Promise<Auction | null> {
    await delay();
    return AUCTIONS.find((a) => a.id === id) ?? null;
  },

  async getBidsForListing(listingId: string): Promise<Bid[]> {
    await delay();
    return bidsStore.filter((b) => b.listingId === listingId);
  },

  async placeBid(auctionId: string, listingId: string, amount: number): Promise<Bid> {
    await delay();
    const bid: Bid = {
      id: `bid-${Date.now()}`,
      auctionId,
      listingId,
      amount,
      createdAt: new Date().toISOString(),
    };
    bidsStore.push(bid);
    return bid;
  },

  async getMyBids(listingId: string): Promise<Bid[]> {
    await delay();
    return bidsStore.filter((b) => b.listingId === listingId);
  },

  async estimatePayment(bidAmount: number, auctionId: string): Promise<number> {
    await delay();
    const auctionBids = bidsStore
      .filter((b) => b.auctionId === auctionId)
      .sort((a, b) => b.amount - a.amount);
    const secondPrice = auctionBids.length > 1 ? auctionBids[1].amount : 1000;
    return Math.min(bidAmount, secondPrice + 50);
  },
};
