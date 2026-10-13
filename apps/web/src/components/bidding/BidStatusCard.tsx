import type { Auction, Bid } from "@/types";
import { formatINR } from "@/lib/utils/format";
import { AuctionCountdown } from "./AuctionCountdown";

export function BidStatusCard({
  auction,
  currentBid,
  estimatedPayment,
  rank,
}: {
  auction: Auction;
  currentBid?: Bid;
  estimatedPayment?: number;
  rank?: number | null;
}) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
            Current Auction
          </span>
          <h4 className="font-serif font-bold text-base text-ink capitalize">
            {auction.categoryId.replace("-", " ")} — {auction.cityId}
          </h4>
        </div>
        <AuctionCountdown endDate={auction.bidWindowEnd} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-1">
        <div>
          <span className="text-xs text-stone-500 block">Your Current Bid</span>
          <span className="text-base sm:text-lg font-bold text-ink">
            {currentBid ? formatINR(currentBid.amount) : "No bid placed"}
          </span>
        </div>

        <div>
          <span className="text-xs text-stone-500 block">Estimated Charge</span>
          <span className="text-base sm:text-lg font-bold text-emerald-700">
            {estimatedPayment ? formatINR(estimatedPayment) : "₹0"}
          </span>
          <span className="text-[10px] text-stone-400 block">(Vickrey 2nd-price)</span>
        </div>

        <div>
          <span className="text-xs text-stone-500 block">Projected Position</span>
          <span className="text-base sm:text-lg font-bold text-gamosa-red">
            {rank ? `#${rank} Spot` : "Unranked"}
          </span>
        </div>
      </div>
    </div>
  );
}
