import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bestofassam.in";
  const categories = ["coaching", "colleges", "homestays", "restaurants-cafes", "wedding-services", "influencers"];
  const cities = ["jorhat", "sivasagar", "dibrugarh", "majuli", "tezpur", "guwahati", "kaziranga"];

  const categoryPages = categories.map((c) => ({
    url: `${base}/category/${c}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const rankedPages = categories.flatMap((c) =>
    cities.map((city) => ({
      url: `${base}/category/${c}/${city}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    }))
  );

  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/categories`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/how-ranking-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/complaint-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...categoryPages,
    ...rankedPages,
  ];
}
