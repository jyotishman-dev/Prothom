/**
 * Central configuration for the Best of Assam directory
 * Allows easy renaming and updates in a single place.
 */
export const SITE_NAME = "Best of Assam";
export const SITE_TAGLINE = "Assam-only verified directory. The #1 spot is earned.";
export const SITE_URL = "https://bestofassam.in";

// Navigation links used in the header and footer
export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "How it works", href: "/how-ranking-works" },
  { label: "For Businesses", href: "/" },
] as const;

// Category definitions – label and description are displayed in UI
export type CategorySlug = "colleges" | "coaching" | "homestays" | "restaurants-cafes" | "wedding-services" | "influencers" | "medical";
export const CATEGORIES: Record<CategorySlug, { label: string; description: string; comingSoon?: boolean }> = {
  colleges: {
    label: "Colleges",
    description: "Higher‑education institutes across Assam",
  },
  coaching: {
    label: "Coaching Centres",
    description: "Preparation institutes for exams and competitive tests",
  },
  homestays: {
    label: "Homestays",
    description: "Family‑run stays offering authentic Assamese hospitality",
  },
  "restaurants-cafes": {
    label: "Restaurants & Cafés",
    description: "Places to eat, from street‑food stalls to fine dining",
  },
  "wedding-services": {
    label: "Wedding Services",
    description: "Planners, decorators, caterers for Assamese weddings",
  },
  influencers: {
    label: "Influencers",
    description: "Local social‑media personalities promoting Assam",
  },
  medical: {
    label: "Medical",
    description: "Healthcare providers – coming soon",
    comingSoon: true,
  },
};

// City definitions – label is human readable, district provides context
export type CitySlug = "jorhat" | "sivasagar" | "dibrugarh" | "majuli" | "tezpur" | "guwahati" | "kaziranga";
export const CITIES: Record<CitySlug, { label: string; district: string }> = {
  jorhat: { label: "Jorhat", district: "Jorhat" },
  sivasagar: { label: "Sivasagar", district: "Sivasagar" },
  dibrugarh: { label: "Dibrugarh", district: "Dibrugarh" },
  majuli: { label: "Majuli", district: "Jorhat (Island)" },
  tezpur: { label: "Tezpur", district: "Sonitpur" },
  guwahati: { label: "Guwahati", district: "Kamrup Metropolitan" },
  kaziranga: { label: "Kaziranga", district: "Kokrajhar" },
};

// Auction pricing constants used across the app
export const AUCTION_FLOOR = 1000;
export const AUCTION_CAP = 10000;

// Demo OTP for mock auth flow (hard‑coded for simplicity)
export const DEMO_OTP = "123456";
