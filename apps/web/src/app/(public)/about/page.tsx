import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_NAME } from "@/lib/config/site";

export const metadata = {
  title: "About Us",
  description: `Learn why ${SITE_NAME} was built and how we are empowering verified businesses across Assam.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <Breadcrumbs items={[{ label: "About" }]} />

      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-gamosa-red">
          Our Mission
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          Built for Assam. Powered by Trust.
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          {SITE_NAME} is an Assam-only business discovery directory built to solve a simple problem: generic online directories are full of spam, fake reviews, and pay-to-win rankings.
        </p>
      </div>

      <div className="space-y-6 text-sm text-stone-700 leading-relaxed border-t border-stone-200 pt-6">
        <h2 className="font-serif text-xl font-bold text-ink">The Assam Context</h2>
        <p>
          From the homestays on Majuli island to coaching institutes in Jorhat preparing students for JEE and APSC, local institutions drive our economy and education. Yet, families and tourists often struggle to know who is genuinely reliable.
        </p>

        <h2 className="font-serif text-xl font-bold text-ink">Why We Are Different</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Document & Physical Verification:</strong> We manually verify every registered enterprise before awarding a verified badge.</li>
          <li><strong>Open Ranking Formula:</strong> 55% of a business’s score is tied strictly to quality (customer ratings, verified guest reviews, complaints). Only 45% is tied to open bidding.</li>
          <li><strong>Zero Secret Algorithms:</strong> Our auction rules are public. Winners pay the second-price plus ₹50 (Vickrey auction) so businesses are never gouged.</li>
          <li><strong>Strict Complaint Enforcement:</strong> Unresolved consumer grievances reduce rank score and risk suspension.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-ink">Coverage</h2>
        <p>
          Currently focusing on Jorhat, Guwahati, Sivasagar, Dibrugarh, Majuli, Tezpur, and Kaziranga, expanding to all 35 districts across Assam.
        </p>
      </div>
    </div>
  );
}
