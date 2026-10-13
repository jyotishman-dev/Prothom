import Link from "next/link";
import { GamosaDivider } from "@/components/layout/GamosaDivider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabs = [
    { label: "Verification Queue", href: "/admin/verification" },
    { label: "User Complaints", href: "/admin/complaints" },
    { label: "Auctions Overview", href: "/admin/auctions" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gamosa-red">
            Super Administrator Control
          </span>
          <h1 className="font-serif text-3xl font-bold text-ink mt-1">
            Assam Directory Moderation
          </h1>
          <p className="text-xs text-stone-500 mt-0.5">
            Internal console for verifying local licenses, resolving disputes, and checking auction bids.
          </p>
        </div>

        <div className="px-3 py-1 rounded-md bg-stone-900 text-white text-xs font-mono font-semibold self-start sm:self-auto">
          Role: Admin (usr-admin)
        </div>
      </div>

      {/* Tabs */}
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
