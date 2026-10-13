import { LISTINGS } from "@/data/listings";
import type { Listing, ListingFilters } from "@/types";
import type { ListingService } from "../types";

const delay = () => new Promise<void>((r) => setTimeout(r, 300));

export const mockListingService: ListingService = {
  async getListings(filters?: ListingFilters): Promise<Listing[]> {
    await delay();
    let results = [...LISTINGS];

    if (filters?.category) results = results.filter((l) => l.category === filters.category);
    if (filters?.city) results = results.filter((l) => l.city === filters.city);
    if (filters?.minPrice !== undefined) results = results.filter((l) => l.priceFrom >= filters.minPrice!);
    if (filters?.maxPrice !== undefined) results = results.filter((l) => l.priceFrom <= filters.maxPrice!);
    if (filters?.minRating !== undefined) results = results.filter((l) => l.rating >= filters.minRating!);
    if (filters?.verifiedOnly) results = results.filter((l) => l.verified);

    switch (filters?.sort) {
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "price_asc":
        results.sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case "price_desc":
        results.sort((a, b) => b.priceFrom - a.priceFrom);
        break;
      case "rank":
      default:
        results.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          if (a.currentRank !== null && b.currentRank !== null) return a.currentRank - b.currentRank;
          if (a.currentRank !== null) return -1;
          if (b.currentRank !== null) return 1;
          return b.rating - a.rating;
        });
    }
    return results;
  },

  async getListingBySlug(slug: string): Promise<Listing | null> {
    await delay();
    return LISTINGS.find((l) => l.slug === slug) ?? null;
  },

  async getListingsByCategory(category: string): Promise<Listing[]> {
    await delay();
    return LISTINGS.filter((l) => l.category === category);
  },

  async getFeaturedListings(): Promise<Listing[]> {
    await delay();
    return LISTINGS.filter((l) => l.isFeatured);
  },

  async updateListing(id: string, data: Partial<Listing>): Promise<Listing> {
    await delay();
    const listing = LISTINGS.find((l) => l.id === id);
    if (!listing) throw new Error("Listing not found");
    return { ...listing, ...data };
  },
};
