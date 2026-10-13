import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE, CATEGORIES, CITIES, type CategorySlug, type CitySlug } from "@/lib/config/site";
import { GamosaDivider } from "./GamosaDivider";

export function Footer() {
  const currentYear = 2026;
  const categoryEntries = (Object.entries(CATEGORIES) as [CategorySlug, { label: string; description: string; comingSoon?: boolean }][]).slice(0, 5);
  const cityEntries = (Object.entries(CITIES) as [CitySlug, { label: string; district: string }][]).slice(0, 5);

  return (
    <footer className="bg-stone-900 text-stone-300 mt-20 border-t border-stone-800">
      <GamosaDivider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gamosa-red text-white flex items-center justify-center font-bold font-serif text-lg">
                ব
              </div>
              <span className="font-serif font-bold text-xl text-white">
                {SITE_NAME}
              </span>
            </div>
            <p className="text-sm text-stone-400">
              {SITE_TAGLINE}
            </p>
            <p className="text-xs text-stone-500">
              Fair, transparent local business discovery for Assam. We do not sell ranks; visibility is earned through ratings and open competitive bidding.
            </p>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Top Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {categoryEntries.map(([slug, cat]) => (
                <li key={slug}>
                  <Link
                    href={`/category/${slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Districts */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Districts & Cities
            </h4>
            <ul className="space-y-2 text-sm">
              {cityEntries.map(([slug, c]) => (
                <li key={slug}>
                  <Link
                    href={`/search?city=${slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {c.label} ({c.district})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform & Trust */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Transparency & Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-ranking-works" className="hover:text-white transition-colors">
                  How Ranking Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/complaint-policy" className="hover:text-white transition-colors">
                  Complaint Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-tea-green hover:underline">
                  Business Dashboard →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <p>© {currentYear} {SITE_NAME}. Handcrafted for the people of Assam.</p>
          <div className="flex gap-4">
            <span>Guwahati • Jorhat • Dibrugarh • Majuli • Tezpur • Sivasagar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
