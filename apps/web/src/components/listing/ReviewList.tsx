import type { Review } from "@/types";
import { Rating } from "@/components/ui/Rating";
import { formatRelativeDate } from "@/lib/utils/format";
import { Badge } from "@/components/ui/Badge";

export function ReviewList({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 text-stone-500 text-sm">
        No reviews yet. Be the first to share your experience!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((rev) => (
        <div
          key={rev.id}
          className="p-4 rounded-xl border border-stone-200 bg-white space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-ink">
                {rev.authorName}
              </span>
              {rev.verifiedGuest && (
                <Badge variant="verified" className="text-[10px] py-0 px-1.5">
                  Verified Guest
                </Badge>
              )}
            </div>
            <span className="text-xs text-stone-400">
              {formatRelativeDate(rev.createdAt)}
            </span>
          </div>

          <Rating rating={rev.rating} size="sm" />

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-1">
            {rev.body}
          </p>
        </div>
      ))}
    </div>
  );
}
