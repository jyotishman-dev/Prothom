import { reviewService, listingService } from "@/services";
import { ReviewList } from "@/components/listing/ReviewList";

export const metadata = {
  title: "Reviews & Reputation",
};

export default async function DashboardReviewsPage() {
  const listing = await listingService.getListingBySlug("talent-academy-jorhat");
  const reviews = listing ? await reviewService.getReviewsForListing(listing.id) : [];

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="font-serif font-bold text-2xl text-ink">
          Customer Reviews & Reputation
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Reviews account for 55% of your total rank score calculation.
        </p>
      </div>

      <div className="p-5 rounded-xl border border-stone-200 bg-white flex flex-wrap gap-6 items-center">
        <div>
          <span className="text-xs text-stone-400 block uppercase font-semibold">Average Rating</span>
          <span className="font-serif text-3xl font-bold text-ink">★ {listing?.rating.toFixed(1)}</span>
        </div>
        <div className="h-10 w-px bg-stone-200 hidden sm:block" />
        <div>
          <span className="text-xs text-stone-400 block uppercase font-semibold">Total Feedback</span>
          <span className="font-serif text-3xl font-bold text-ink">{listing?.reviewCount} Reviews</span>
        </div>
        <div className="h-10 w-px bg-stone-200 hidden sm:block" />
        <div>
          <span className="text-xs text-stone-400 block uppercase font-semibold">Grievances</span>
          <span className="font-serif text-3xl font-bold text-emerald-700">0 Unresolved</span>
        </div>
      </div>

      <div className="pt-2">
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
}
