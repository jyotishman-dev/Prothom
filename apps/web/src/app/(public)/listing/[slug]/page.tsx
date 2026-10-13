import { notFound } from "next/navigation";
import { listingService, reviewService } from "@/services";
import { CATEGORIES } from "@/lib/config/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Gallery } from "@/components/listing/Gallery";
import { Rating } from "@/components/ui/Rating";
import { VerifiedBadge } from "@/components/listing/VerifiedBadge";
import { SponsoredLabel } from "@/components/listing/SponsoredLabel";
import { ContactBar } from "@/components/listing/ContactBar";
import { ReviewList } from "@/components/listing/ReviewList";
import { ReviewForm } from "@/components/listing/ReviewForm";
import { ReportButton } from "@/components/listing/ReportButton";
import { Badge } from "@/components/ui/Badge";

interface ListingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ListingPageProps) {
  const { slug } = await params;
  const listing = await listingService.getListingBySlug(slug);
  if (!listing) return { title: "Listing Not Found" };

  return {
    title: `${listing.name} — ${listing.city.toUpperCase()}`,
    description: listing.description,
  };
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { slug } = await params;
  const listing = await listingService.getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  const reviews = await reviewService.getReviewsForListing(listing.id);
  const categoryLabel = CATEGORIES[listing.category]?.label || listing.category;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Categories", href: "/categories" },
          { label: categoryLabel, href: `/category/${listing.category}` },
          { label: listing.name },
        ]}
      />

      {/* Main Header / Badges */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-stone-200 pb-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            {listing.isFeatured && <SponsoredLabel rank={listing.currentRank} />}
            {listing.verified && <VerifiedBadge date={listing.verifiedAt} />}
            <Badge variant="category" className="capitalize">
              {listing.city}
            </Badge>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            {listing.name}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
            <Rating rating={listing.rating} reviewCount={listing.reviewCount} />
            <span>•</span>
            <span>📍 {listing.address}</span>
          </div>
        </div>

        <div>
          <ReportButton listingId={listing.id} listingName={listing.name} />
        </div>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Photos, Description, Reviews) */}
        <div className="lg:col-span-2 space-y-8">
          <Gallery images={listing.images} title={listing.name} />

          {/* Description & Tags */}
          <div className="rounded-xl border border-stone-200 bg-white p-6 space-y-4">
            <h2 className="font-serif font-bold text-lg text-ink">
              About {listing.name}
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
              {listing.description}
            </p>

            {listing.tags && listing.tags.length > 0 && (
              <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                {listing.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-stone-100 text-stone-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Reviews section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif font-bold text-xl text-ink">
                Customer Reviews ({reviews.length})
              </h2>
            </div>

            <ReviewList reviews={reviews} />
          </div>
        </div>

        {/* Right Column (Sticky Contact & Review Form) */}
        <div className="space-y-6">
          <ContactBar
            phone={listing.phone}
            whatsapp={listing.whatsapp}
            address={listing.address}
            priceFrom={listing.priceFrom}
          />

          <ReviewForm listingId={listing.id} />
        </div>
      </div>
    </div>
  );
}
