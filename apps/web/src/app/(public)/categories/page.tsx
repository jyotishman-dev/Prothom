import Link from "next/link";
import { CATEGORIES, type CategorySlug } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Categories",
  description: "Browse all verified business and institutional categories in Assam.",
};

export default function CategoriesPage() {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumbs items={[{ label: "Categories" }]} />

      <div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          All Categories
        </h1>
        <p className="text-sm text-stone-500 mt-1">
          Explore top rated and verified destinations across Assam.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryKeys.map((key) => {
          const cat = CATEGORIES[key];
          return (
            <Link
              key={key}
              href={`/category/${key}`}
              className="group p-6 rounded-xl border border-stone-200 bg-white hover:border-gamosa-red/40 hover:shadow-md transition-all space-y-3 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl group-hover:scale-105 transition-transform">
                  {categoryIcons[key]}
                </span>
                {cat.comingSoon && (
                  <span className="text-[10px] font-bold uppercase bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-ink group-hover:text-gamosa-red transition-colors">
                  {cat.label}
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <span className="inline-block text-xs font-semibold text-gamosa-red pt-2">
                Browse Listings →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
