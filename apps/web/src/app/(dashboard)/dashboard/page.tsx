import Link from "next/link";
import { listingService, bidService } from "@/services";
import { formatINR } from "@/lib/utils/format";
import { BidStatusCard } from "@/components/bidding/BidStatusCard";
import { VerifiedBadge } from "@/components/listing/VerifiedBadge";

export const metadata = {
  title: "Business Dashboard",
};

export default async function DashboardOverviewPage() {
  const listing = await listingService.getListingBySlug("talent-academy-jorhat");
  const auctions = await bidService.getAuctions({ categoryId: "coaching", cityId: "jorhat" });
  const activeAuction = auctions.find((a) => a.status === "open") || auctions[0];

  const bids = listing ? await bidService.getMyBids(listing.id) : [];
  const latestBid = bids[bids.length - 1];
  const estimatedPayment = latestBid && activeAuction ? await bidService.estimatePayment(latestBid.amount, activeAuction.id) : 0;

  return (
    <div className="space-y-8">
      {/* High-level status cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-1">
          <span className="text-xs text-stone-500 font-medium">Verification Status</span>
          <div className="flex items-center gap-2 pt-1">
            <VerifiedBadge date={listing?.verifiedAt} />
            <span className="text-xs text-stone-600">Active</span>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-1">
          <span className="text-xs text-stone-500 font-medium">Current Category Rank</span>
          <div className="text-2xl font-serif font-bold text-gamosa-red pt-0.5">
            #{listing?.currentRank ?? 1} in Jorhat
          </div>
        </div>

        <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-1">
          <span className="text-xs text-stone-500 font-medium">Customer Rating</span>
          <div className="text-2xl font-serif font-bold text-ink pt-0.5">
            ★ {listing?.rating.toFixed(1)} <span className="text-xs font-normal text-stone-400">({listing?.reviewCount} reviews)</span>
          </div>
        </div>

        <div className="p-5 rounded-xl border border-stone-200 bg-white space-y-1">
          <span className="text-xs text-stone-500 font-medium">Active Complaints</span>
          <div className="text-2xl font-serif font-bold text-emerald-700 pt-0.5">
            {listing?.complaintCount ?? 0} <span className="text-xs font-normal text-stone-500">(clean record)</span>
          </div>
        </div>
      </div>

      {/* Active Auction & Bid Widget */}
      {activeAuction && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-xl text-ink">
              Monthly Ranking Auction
            </h2>
            <Link
              href="/dashboard/bids"
              className="text-xs font-semibold text-gamosa-red hover:underline"
            >
              Manage Bids →
            </Link>
          </div>

          <BidStatusCard
            auction={activeAuction}
            currentBid={latestBid}
            estimatedPayment={estimatedPayment}
            rank={listing?.currentRank}
          />
        </div>
      )}

      {/* Quick Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/dashboard/listing"
          className="p-5 rounded-xl border border-stone-200 bg-white hover:border-gamosa-red/40 hover:shadow-sm transition-all space-y-2"
        >
          <div className="text-xl">✏️</div>
          <h3 className="font-serif font-bold text-base text-ink">Update Business Profile</h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            Edit photos, phone, WhatsApp contact numbers, fees, and syllabus tags.
          </p>
        </Link>

        <Link
          href="/dashboard/bids"
          className="p-5 rounded-xl border border-stone-200 bg-white hover:border-gamosa-red/40 hover:shadow-sm transition-all space-y-2"
        >
          <div className="text-xl">📈</div>
          <h3 className="font-serif font-bold text-base text-ink">Bid in October 2026 Auction</h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            Window closes Oct 5th. Floor is ₹1,000, cap is ₹10,000.
          </p>
        </Link>

        <Link
          href="/dashboard/reviews"
          className="p-5 rounded-xl border border-stone-200 bg-white hover:border-gamosa-red/40 hover:shadow-sm transition-all space-y-2"
        >
          <div className="text-xl">💬</div>
          <h3 className="font-serif font-bold text-base text-ink">Review Moderation</h3>
          <p className="text-xs text-stone-500 leading-relaxed">
            View recent student feedback and respond to verified guest ratings.
          </p>
        </Link>
      </div>
    </div>
  );
}
