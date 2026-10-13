import Link from "next/link";
import type { Listing } from "@/types";
import { formatINR } from "@/lib/utils/format";
import { Rating } from "@/components/ui/Rating";
import { VerifiedBadge } from "./VerifiedBadge";
import { SponsoredLabel } from "./SponsoredLabel";

export function RankedList({ listings }: { listings: Listing[] }) {
  return (
    <div className="space-y-4">
      {listings.map((item, idx) => {
        const displayRank = item.currentRank ?? idx + 1;
        const isTop3 = displayRank <= 3;

        return (
          <div
            key={item.id}
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-xl border bg-white transition-all hover:shadow-md gap-4 ${
              item.isFeatured
                ? "border-muted-gold/60 bg-gradient-to-r from-amber-50/30 to-white"
                : "border-stone-200"
            }`}
          >
            <div className="flex items-start sm:items-center gap-4">
              {/* Rank indicator badge */}
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-base shrink-0 ${
                  displayRank === 1
                    ? "bg-amber-400 text-stone-900 shadow-sm"
                    : displayRank === 2
                    ? "bg-stone-300 text-stone-900 shadow-sm"
                    : displayRank === 3
                    ? "bg-amber-700/80 text-white shadow-sm"
                    : "bg-stone-100 text-stone-600"
                }`}
              >
                #{displayRank}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Link href={`/listing/${item.slug}`}>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-ink hover:text-gamosa-red transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  {item.verified && <VerifiedBadge date={item.verifiedAt} />}
                  {item.isFeatured && <SponsoredLabel />}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-stone-500">
                  <span className="capitalize font-medium text-stone-700">{item.city}</span>
                  <span>•</span>
                  <Rating rating={item.rating} reviewCount={item.reviewCount} size="sm" />
                  <span>•</span>
                  <span>Starts at {formatINR(item.priceFrom)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
              <Link
                href={`/listing/${item.slug}`}
                className="w-full sm:w-auto text-center px-4 py-2 text-xs font-semibold rounded-lg bg-stone-900 text-white hover:bg-gamosa-red transition-colors"
              >
                View Profile
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
