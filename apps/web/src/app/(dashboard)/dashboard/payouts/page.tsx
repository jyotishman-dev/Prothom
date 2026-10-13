import { formatINR } from "@/lib/utils/format";

export const metadata = {
  title: "Invoices & Settlement",
};

export default function DashboardPayoutsPage() {
  const invoices = [
    {
      id: "INV-2026-09",
      month: "September 2026",
      clearedPrice: 4550,
      status: "Paid",
      date: "2026-09-06",
      rankAchieved: "#1 Spot",
    },
    {
      id: "INV-2026-08",
      month: "August 2026",
      clearedPrice: 3850,
      status: "Paid",
      date: "2026-08-06",
      rankAchieved: "#1 Spot",
    },
  ];

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="font-serif font-bold text-2xl text-ink">
          Billing & Invoices
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          History of settled second-price monthly auction invoices.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold">
            <tr>
              <th className="p-3.5">Invoice</th>
              <th className="p-3.5">Billing Period</th>
              <th className="p-3.5">Vickrey Cleared Amount</th>
              <th className="p-3.5">Outcome</th>
              <th className="p-3.5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td className="p-3.5 font-mono font-medium text-ink">{inv.id}</td>
                <td className="p-3.5 text-stone-700">{inv.month}</td>
                <td className="p-3.5 font-semibold text-emerald-800">{formatINR(inv.clearedPrice)}</td>
                <td className="p-3.5 text-gamosa-red font-semibold">{inv.rankAchieved}</td>
                <td className="p-3.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
