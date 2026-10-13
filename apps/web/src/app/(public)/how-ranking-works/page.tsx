import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RankExplainer } from "@/components/bidding/RankExplainer";
import { AUCTION_FLOOR, AUCTION_CAP } from "@/lib/config/site";
import { formatINR } from "@/lib/utils/format";

export const metadata = {
  title: "How Ranking Works",
  description: "Complete breakdown of our transparent hybrid ranking formula and Vickrey second-price auction.",
};

export default function HowRankingWorksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <Breadcrumbs items={[{ label: "How Ranking Works" }]} />

      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-gamosa-red">
          Algorithm Transparency
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          The 55 / 45 Ranking Principle
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Unlike directories where the highest bidder automatically buys the #1 spot regardless of quality, Best of Assam uses a balanced mathematical score.
        </p>
      </div>

      <RankExplainer />

      <div className="space-y-6 text-sm text-stone-700 leading-relaxed border-t border-stone-200 pt-6">
        <h2 className="font-serif text-xl font-bold text-ink">1. The Mathematical Formula</h2>
        <div className="p-4 rounded-lg bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          TotalScore = (0.45 * NormalizedBid) + (0.55 * QualityScore)
        </div>

        <h3 className="font-serif text-base font-bold text-ink pt-2">Quality Score Breakdown (55%)</h3>
        <p>The Quality Score is computed from four independent signals:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li><strong>Rating Score:</strong> (Rating - 1) / 4 (Ranges from 0 to 1)</li>
          <li><strong>Review Volume:</strong> min(VerifiedReviews / 50, 1.0)</li>
          <li><strong>Profile Completeness:</strong> min(HighResPhotos / 10, 1.0)</li>
          <li><strong>Complaint Deductions:</strong> Each unresolved consumer grievance deducts 0.2 points directly.</li>
        </ul>

        <h3 className="font-serif text-base font-bold text-ink pt-2">Monthly Auction Rules (45%)</h3>
        <p>
          Bidding takes place during the first 5 days of each month (1st to 5th).
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li><strong>Floor Price:</strong> {formatINR(AUCTION_FLOOR)} per month.</li>
          <li><strong>Cap Price:</strong> {formatINR(AUCTION_CAP)} per month (prevents wealthy monopolies from outpricing local artisans).</li>
          <li><strong>Second-Price Vickrey Model:</strong> The highest bidder wins rank weighting, but only pays the 2nd highest bid + ₹50.</li>
        </ul>
      </div>
    </div>
  );
}
