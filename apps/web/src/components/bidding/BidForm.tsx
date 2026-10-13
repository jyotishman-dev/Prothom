"use client";

import { useState } from "react";
import { AUCTION_FLOOR, AUCTION_CAP } from "@/lib/config/site";
import { formatINR } from "@/lib/utils/format";
import { bidSchema } from "@/lib/validators/bid";
import { showToast } from "@/components/ui/Toast";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";

export function BidForm({
  auctionId,
  listingId,
  onBidSubmitted,
}: {
  auctionId: string;
  listingId: string;
  onBidSubmitted?: () => void;
}) {
  const [amount, setAmount] = useState<number>(AUCTION_FLOOR);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validation = bidSchema.safeParse({ amount: Number(amount) });
    if (!validation.success) {
      setError(validation.error.issues[0]?.message || "Invalid bid amount");
      return;
    }

    setLoading(true);
    try {
      const { bidService } = await import("@/services");
      await bidService.placeBid(auctionId, listingId, Number(amount));
      showToast(`Your bid of ${formatINR(Number(amount))} has been recorded!`, "success");
      if (onBidSubmitted) onBidSubmitted();
    } catch {
      showToast("Failed to place bid. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 rounded-xl border border-stone-200 bg-white space-y-4">
      <div>
        <h4 className="font-serif font-bold text-base text-ink">Place or Update Your Bid</h4>
        <p className="text-xs text-stone-500 mt-1">
          Bidding operates on an open Vickrey auction. Minimum is {formatINR(AUCTION_FLOOR)}, maximum is {formatINR(AUCTION_CAP)}.
        </p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          Bid Amount (₹)
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-sm font-semibold text-stone-400">₹</span>
          <Input
            type="number"
            min={AUCTION_FLOOR}
            max={AUCTION_CAP}
            step={250}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="pl-8 text-sm font-medium"
          />
        </div>
        {error && <p className="text-xs text-gamosa-red mt-1.5">{error}</p>}
      </div>

      {/* Quick Increment suggestions */}
      <div className="flex flex-wrap gap-2 pt-1">
        {[2000, 3500, 5000, 7500, 10000].map((quick) => (
          <button
            key={quick}
            type="button"
            onClick={() => setAmount(quick)}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
          >
            {formatINR(quick)}
          </button>
        ))}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          isDisabled={loading}
          className="w-full bg-gamosa-red hover:bg-gamosa-red/90 text-white font-medium text-xs"
        >
          {loading ? "Recording Bid..." : `Submit Bid for ${formatINR(amount)}`}
        </Button>
      </div>
    </form>
  );
}
