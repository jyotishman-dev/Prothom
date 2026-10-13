import { notFound } from "next/navigation";
import { CATEGORIES, CITIES, type CategorySlug, type CitySlug } from "@/lib/config/site";
import { listingService } from "@/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RankedList } from "@/components/listing/RankedList";
import Link from "next/link";

interface CategoryCityPageProps {
  params: Promise<{ slug: string; city: string }>;
}

export async function generateMetadata({ params }: CategoryCityPageProps) {
  const { slug, city } = await params;
  const category = CATEGORIES[slug as CategorySlug];
  const cityObj = CITIES[city as CitySlug];
  if (!category || !cityObj) return { title: "Not Found" };

  return {
    title: `Best ${category.label} in ${cityObj.label}, Assam`,
    description: `Ranked and verified ${category.label.toLowerCase()} in ${cityObj.label} (${cityObj.district}), Assam.`,
  };
}

export default async function CategoryCityPage({ params }: CategoryCityPageProps) {
  const { slug, city } = await params;
  const category = CATEGORIES[slug as CategorySlug];
  const cityObj = CITIES[city as CitySlug];

  if (!category || !cityObj) {
    notFound();
  }

  const listings = await listingService.getListings({
    category: slug as CategorySlug,
    city: city as CitySlug,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Categories", href: "/categories" },
          { label: category.label, href: `/category/${slug}` },
          { label: cityObj.label },
        ]}
      />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gamosa-red">
            Verified City Ranking
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1">
            Top {category.label} in {cityObj.label}
          </h1>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
            District: {cityObj.district} • Rankings update monthly based on quality ratings and competitive auction bidding.
          </p>
        </div>

        <Link
          href="/how-ranking-works"
          className="text-xs font-semibold text-stone-600 hover:text-ink underline self-start sm:self-auto"
        >
          Why are these ranked this way?
        </Link>
      </div>

      {/* Ranked List View */}
      {listings.length > 0 ? (
        <RankedList listings={listings} />
      ) : (
        <div className="p-8 text-center border border-stone-200 rounded-xl bg-white text-stone-500 text-sm">
          No businesses listed in {cityObj.label} under {category.label} yet.
        </div>
      )}
    </div>
  );
}
