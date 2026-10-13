import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Complaint & Moderation Policy",
  description: "How complaints are reported, investigated, and how penalties affect rankings.",
};

export default function ComplaintPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <Breadcrumbs items={[{ label: "Complaint Policy" }]} />

      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-gamosa-red">
          Integrity & Consumer Safety
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          Complaint & Moderation Policy
        </h1>
        <p className="text-base text-stone-600 leading-relaxed">
          Maintaining high trust is the foundation of Best of Assam. We hold all businesses accountable through active grievance redressal.
        </p>
      </div>

      <div className="space-y-6 text-sm text-stone-700 leading-relaxed border-t border-stone-200 pt-6">
        <h2 className="font-serif text-xl font-bold text-ink">Filing a Complaint</h2>
        <p>
          Any user can submit a complaint directly from a business listing page using the "Report this listing" button. Reports must include specific details regarding the incident.
        </p>

        <h2 className="font-serif text-xl font-bold text-ink">Three-Strike Moderation Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Official Warning:</strong> Business receives a formal notification to rectify the issue within 48 hours.</li>
          <li><strong>Rank Demotion:</strong> Repeated or severe violations result in immediate forfeiture of auction ranks for the month and a permanent -0.2 penalty per unresolved report.</li>
          <li><strong>Listing Suspension:</strong> Proven fraudulent activity or egregious hygiene violations result in permanent directory expulsion.</li>
        </ol>

        <h2 className="font-serif text-xl font-bold text-ink">False Reporting Protection</h2>
        <p>
          To prevent competitor sabotage, complaints with malicious intent or lack of corroboration are reviewed manually by our regional moderation team before penalties are assessed.
        </p>
      </div>
    </div>
  );
}
