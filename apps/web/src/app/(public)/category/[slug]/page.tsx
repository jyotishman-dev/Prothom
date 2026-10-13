import { notFound } from "next/navigation";
import { CATEGORIES, CITIES, type CategorySlug, type CitySlug } from "@/lib/config/site";
import { listingService } from "@/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ListingGrid } from "@/components/listing/ListingGrid";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES[slug as CategorySlug];
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.label} in Assam`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES[slug as CategorySlug];

  if (!category) {
    notFound();
  }

  const listings = await listingService.getListings({
    category: slug as CategorySlug,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Categories", href: "/categories" },
          { label: category.label },
        ]}
      />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gamosa-red">
            Verified Category
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1">
            {category.label} in Assam
          </h1>
          <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
            {category.description}
          </p>
        </div>

        {category.comingSoon && (
          <div className="px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium shrink-0">
            ⚠️ Category launching soon
          </div>
        )}
      </div>

      {/* Filter by Cities */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
          Filter by City / District:
        </span>
        <div className="flex flex-wrap gap-2">
          <Link
            href={`/category/${slug}`}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-ink text-white"
          >
            All Assam ({listings.length})
          </Link>
          {Object.entries(CITIES).map(([citySlug, c]) => (
            <Link
              key={citySlug}
              href={`/category/${slug}/${citySlug}`}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Results */}
      <div>
        <ListingGrid
          listings={listings}
          emptyTitle={`No listings yet in ${category.label}`}
          emptyDescription="Be the first verified business in Assam to list in this category!"
        />
      </div>
    </div>
  );
}
