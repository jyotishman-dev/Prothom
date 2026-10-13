import { listingService } from "@/services";
import type { CitySlug, CategorySlug } from "@/types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ListingGrid } from "@/components/listing/ListingGrid";
import { CITIES } from "@/lib/config/site";

interface SearchPageProps {
  searchParams: Promise<{ city?: string; category?: string }>;
}

export const metadata = {
  title: "Search Businesses",
  description: "Find verified businesses by city and category in Assam.",
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { city, category } = await searchParams;

  const listings = await listingService.getListings({
    city: city as CitySlug,
    category: category as CategorySlug,
  });

  const cityName = city && CITIES[city as CitySlug] ? CITIES[city as CitySlug].label : "All Assam";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumbs items={[{ label: "Search" }, { label: cityName }]} />

      <div className="border-b border-stone-200 pb-4">
        <h1 className="font-serif text-3xl font-bold text-ink">
          Businesses in {cityName}
        </h1>
        <p className="text-xs text-stone-500 mt-1">
          Showing {listings.length} verified listings
        </p>
      </div>

      <ListingGrid
        listings={listings}
        emptyTitle={`No listings found in ${cityName}`}
        emptyDescription="Try selecting a different city or category."
      />
    </div>
  );
}
