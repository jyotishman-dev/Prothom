import Link from "next/link";
import { CATEGORIES, CITIES, type CategorySlug } from "@/lib/config/site";
import { listingService } from "@/services";
import { ListingGrid } from "@/components/listing/ListingGrid";
import { RankExplainer } from "@/components/bidding/RankExplainer";

export default async function HomePage() {
  const featuredListings = await listingService.getFeaturedListings();
  const categoryKeys = Object.keys(CATEGORIES) as CategorySlug[];

  const categoryIcons: Record<CategorySlug, string> = {
    colleges: "🎓",
    coaching: "📚",
    homestays: "🏡",
    "restaurants-cafes": "🍲",
    "wedding-services": "💍",
    influencers: "🎥",
    medical: "🏥",
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100/70 to-paper py-16 sm:py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gamosa-red/10 border border-gamosa-red/20 text-gamosa-red text-xs font-semibold uppercase tracking-wider">
            <span>⚜️</span> Assam’s Verified Directory
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink tracking-tight max-w-4xl mx-auto leading-tight">
            The #1 spot is earned, not just bought.
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Discover honest, verified businesses in Guwahati, Jorhat, Dibrugarh, Majuli, and across Assam. Ranks are determined by verified customer reviews and transparent monthly auctions.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/categories"
              className="px-6 py-3 rounded-lg bg-gamosa-red hover:bg-gamosa-red/90 text-white font-medium text-sm shadow-sm transition-all"
            >
              Browse Categories
            </Link>
            <Link
              href="/how-ranking-works"
              className="px-6 py-3 rounded-lg bg-white border border-stone-200 hover:bg-stone-50 text-stone-800 font-medium text-sm shadow-xs transition-all"
            >
              How Ranking Works
            </Link>
          </div>
        </div>
      </section>

      {/* Explore by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gamosa-red">
              Curated Verticals
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
              Popular Categories
            </h2>
          </div>
          <Link
            href="/categories"
            className="text-xs font-semibold text-stone-600 hover:text-ink hidden sm:block"
          >
            All Categories →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryKeys.map((catKey) => {
            const cat = CATEGORIES[catKey];
            return (
              <Link
                key={catKey}
                href={`/category/${catKey}`}
                className="group p-4 rounded-xl border border-stone-200 bg-white hover:border-gamosa-red/40 hover:shadow-md transition-all flex flex-col items-center text-center space-y-2 relative"
              >
                {cat.comingSoon && (
                  <span className="absolute top-2 right-2 text-[9px] font-bold uppercase bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded">
                    Soon
                  </span>
                )}
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {categoryIcons[catKey]}
                </span>
                <span className="font-medium text-sm text-stone-800 group-hover:text-gamosa-red transition-colors">
                  {cat.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Featured Partners
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
              Top Ranked in Assam
            </h2>
          </div>
          <Link
            href="/categories"
            className="text-xs font-semibold text-stone-600 hover:text-ink hidden sm:block"
          >
            Explore all listings →
          </Link>
        </div>

        <ListingGrid listings={featuredListings.slice(0, 6)} />
      </section>

      {/* Rank Explainer Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <RankExplainer />
      </section>

      {/* Explore by City */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-gamosa-red">
            Regional Focus
          </span>
          <h2 className="font-serif text-2xl font-bold text-ink mt-1">
            Browse by City or District
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.entries(CITIES).map(([slug, c]) => (
            <Link
              key={slug}
              href={`/search?city=${slug}`}
              className="px-4 py-2 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-xs font-medium text-stone-700 transition-colors"
            >
              📍 {c.label} <span className="text-stone-400">({c.district})</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
