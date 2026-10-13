import { bidService } from "@/services";
import { formatINR } from "@/lib/utils/format";
import { AuctionCountdown } from "@/components/bidding/AuctionCountdown";

export const metadata = {
  title: "Admin - Auctions Overview",
};

export default async function AdminAuctionsPage() {
  const auctions = await bidService.getAuctions();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif font-bold text-2xl text-ink">
          Auctions Management ({auctions.length})
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Live monitoring of sealed-bid and second-price auctions across categories and districts.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold">
            <tr>
              <th className="p-3.5">Auction ID</th>
              <th className="p-3.5">Category</th>
              <th className="p-3.5">City</th>
              <th className="p-3.5">Month</th>
              <th className="p-3.5">Floor / Cap</th>
              <th className="p-3.5">Status</th>
              <th className="p-3.5">Window / Time Left</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {auctions.map((auc) => (
              <tr key={auc.id} className="hover:bg-stone-50/50">
                <td className="p-3.5 font-mono font-medium text-ink">{auc.id}</td>
                <td className="p-3.5 capitalize text-stone-800">{auc.categoryId.replace("-", " ")}</td>
                <td className="p-3.5 capitalize text-stone-800">{auc.cityId}</td>
                <td className="p-3.5 text-stone-600">{auc.month}</td>
                <td className="p-3.5 text-stone-600 font-mono">
                  {formatINR(auc.floorPrice)} – {formatINR(auc.capPrice)}
                </td>
                <td className="p-3.5">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                      auc.status === "open"
                        ? "bg-emerald-100 text-emerald-800"
                        : auc.status === "settled"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {auc.status}
                  </span>
                </td>
                <td className="p-3.5">
                  {auc.status === "open" ? (
                    <AuctionCountdown endDate={auc.bidWindowEnd} />
                  ) : (
                    <span className="text-stone-400">Ended</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
