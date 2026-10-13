import Link from "next/link";
import Image from "next/image";
import type { Listing } from "@/types";
import { formatINR } from "@/lib/utils/format";
import { Rating } from "@/components/ui/Rating";
import { Badge } from "@/components/ui/Badge";
import { VerifiedBadge } from "./VerifiedBadge";
import { SponsoredLabel } from "./SponsoredLabel";

export function ListingCard({ listing }: { listing: Listing }) {
  const thumbnail = listing.images?.[0] || `https://picsum.photos/seed/${listing.id}/600/400`;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border bg-white transition-all hover:shadow-md ${
        listing.isFeatured
          ? "border-muted-gold/60 ring-1 ring-muted-gold/30 bg-gradient-to-b from-amber-50/20 to-white"
          : "border-stone-200"
      }`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-100">
        <Image
          src={thumbnail}
          alt={listing.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 items-center">
          {listing.isFeatured && <SponsoredLabel rank={listing.currentRank} />}
          {listing.verified && <VerifiedBadge date={listing.verifiedAt} />}
        </div>
        <div className="absolute bottom-2 right-2 rounded-md bg-ink/80 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur-xs">
          From {formatINR(listing.priceFrom)}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/listing/${listing.slug}`}
            className="focus:outline-hidden"
          >
            <h3 className="font-serif font-bold text-base text-ink line-clamp-1 group-hover:text-gamosa-red transition-colors">
              {listing.name}
            </h3>
          </Link>
          <span className="text-xs font-medium text-stone-500 capitalize shrink-0">
            {listing.city}
          </span>
        </div>

        <p className="mt-1 text-xs text-stone-600 line-clamp-2 leading-relaxed">
          {listing.description}
        </p>

        {/* Rating and counts */}
        <div className="mt-3 flex items-center justify-between border-t border-stone-100 pt-3 text-xs text-stone-500">
          <Rating
            rating={listing.rating}
            reviewCount={listing.reviewCount}
            size="sm"
          />
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-stone-400 capitalize">
              {listing.category.replace("-", " ")}
            </span>
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-4 pt-2">
          <Link
            href={`/listing/${listing.slug}`}
            className="flex items-center justify-center w-full py-2 px-3 text-xs font-semibold rounded-md bg-stone-100 text-stone-800 hover:bg-gamosa-red hover:text-white transition-colors"
          >
            View Details & Contact
          </Link>
        </div>
      </div>
    </article>
  );
}
