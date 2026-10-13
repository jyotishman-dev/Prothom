import { bidService, listingService } from "@/services";
import { BidForm } from "@/components/bidding/BidForm";
import { BidStatusCard } from "@/components/bidding/BidStatusCard";
import { RankExplainer } from "@/components/bidding/RankExplainer";

export const metadata = {
  title: "Bids & Ranking Auctions",
};

export default async function DashboardBidsPage() {
  const listing = await listingService.getListingBySlug("talent-academy-jorhat");
  const auctions = await bidService.getAuctions({ categoryId: "coaching", cityId: "jorhat" });
  const activeAuction = auctions.find((a) => a.status === "open") || auctions[0];

  const bids = listing ? await bidService.getMyBids(listing.id) : [];
  const latestBid = bids[bids.length - 1];
  const estimatedPayment = latestBid && activeAuction ? await bidService.estimatePayment(latestBid.amount, activeAuction.id) : 0;

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="font-serif font-bold text-2xl text-ink">
          Auctions & Monthly Bidding
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Participate in monthly second-price auctions for coaching institutes in Jorhat.
        </p>
      </div>

      {activeAuction && (
        <div className="space-y-6">
          <BidStatusCard
            auction={activeAuction}
            currentBid={latestBid}
            estimatedPayment={estimatedPayment}
            rank={listing?.currentRank}
          />

          {listing && (
            <BidForm
              auctionId={activeAuction.id}
              listingId={listing.id}
            />
          )}
        </div>
      )}

      <RankExplainer />
    </div>
  );
}
