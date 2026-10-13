import type { Listing } from "@/types";
import { ListingCard } from "./ListingCard";
import { EmptyState } from "@/components/ui/EmptyState";

export function ListingGrid({
  listings,
  emptyTitle = "No businesses found",
  emptyDescription = "Try adjusting your filters or search criteria.",
}: {
  listings: Listing[];
  emptyTitle?: string;
  emptyDescription?: string;
}) {
  if (listings.length === 0) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
