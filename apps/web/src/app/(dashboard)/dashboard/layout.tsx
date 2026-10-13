import Link from "next/link";
import { GamosaDivider } from "@/components/layout/GamosaDivider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabs = [
    { label: "Overview", href: "/dashboard" },
    { label: "Edit Listing", href: "/dashboard/listing" },
    { label: "Auctions & Bids", href: "/dashboard/bids" },
    { label: "Customer Reviews", href: "/dashboard/reviews" },
    { label: "Billing & Invoices", href: "/dashboard/payouts" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gamosa-red">
            Business Partner Console
          </span>
          <h1 className="font-serif text-3xl font-bold text-ink mt-1">
            Talent Academy, Jorhat
          </h1>
          <p className="text-xs text-stone-500 mt-0.5">
            Owner ID: usr-001 • Listing: lst-001 (Coaching Centres, Jorhat)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/listing/talent-academy-jorhat"
            target="_blank"
            className="text-xs px-3 py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 font-medium text-stone-700 transition-colors"
          >
            Preview Public Page ↗
          </Link>
        </div>
      </div>

      {/* Nav Tabs */}
      <nav className="flex gap-2 overflow-x-auto pb-1 border-b border-stone-200 scrollbar-thin">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="px-4 py-2 text-xs font-semibold rounded-t-lg hover:bg-stone-100 text-stone-600 transition-colors border-b-2 border-transparent hover:border-stone-400 whitespace-nowrap"
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      <div>{children}</div>
    </div>
  );
}
