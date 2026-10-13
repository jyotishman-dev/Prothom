import { BID_WEIGHT, QUALITY_WEIGHT } from "@/lib/ranking/computeRankScore";

export function RankExplainer() {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xl">⚖️</span>
        <h3 className="font-serif font-bold text-base text-ink">
          How Rankings Are Calculated
        </h3>
      </div>

      <p className="text-xs text-stone-600 leading-relaxed">
        We ensure discoverability is fair, transparent, and high quality. The highest bidder alone cannot buy the #1 rank without real customer satisfaction.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-stone-800">Quality Score</span>
            <span className="text-xs font-bold text-emerald-700">{QUALITY_WEIGHT * 100}%</span>
          </div>
          <ul className="text-[11px] text-stone-500 space-y-1 list-disc list-inside">
            <li>Star Rating (1-5 scale)</li>
            <li>Verified Customer Reviews</li>
            <li>Listing completeness & Photos</li>
            <li>Penalty for unresolved complaints</li>
          </ul>
        </div>

        <div className="p-3 rounded-lg bg-stone-50 border border-stone-100">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-stone-800">Monthly Bid</span>
            <span className="text-xs font-bold text-gamosa-red">{BID_WEIGHT * 100}%</span>
          </div>
          <ul className="text-[11px] text-stone-500 space-y-1 list-disc list-inside">
            <li>Open second-price auction</li>
            <li>Floor: ₹1,000 / Cap: ₹10,000</li>
            <li>Winner pays 2nd-place bid + ₹50</li>
            <li>Transparent monthly bid window</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
