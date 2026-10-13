import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_NAME } from "@/lib/config/site";

export const metadata = {
  title: "Terms of Service",
  description: `Terms and conditions for businesses and consumers using ${SITE_NAME}.`,
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-gamosa-red">
          Legal & Governance
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          Terms of Service
        </h1>
        <p className="text-xs text-stone-500">
          Last revised: October 2026
        </p>
      </div>

      <div className="space-y-6 text-sm text-stone-700 leading-relaxed border-t border-stone-200 pt-6">
        <h2 className="font-serif text-xl font-bold text-ink">1. Platform Eligibility</h2>
        <p>
          Only legally registered commercial, hospitality, educational, or professional entities located within the state of Assam, India may claim a business profile on {SITE_NAME}.
        </p>

        <h2 className="font-serif text-xl font-bold text-ink">2. Auction & Bidding Commitment</h2>
        <p>
          Bids entered into monthly auctions are binding. When an auction settles, winning entities will be invoiced under the second-price clearing mechanism. Failure to settle invoices results in immediate rank revocation.
        </p>

        <h2 className="font-serif text-xl font-bold text-ink">3. Review Authenticity</h2>
        <p>
          Businesses are strictly prohibited from submitting synthetic, paid, or coerced reviews. Accounts caught falsifying feedback are permanently banned from the directory.
        </p>
      </div>
    </div>
  );
}
