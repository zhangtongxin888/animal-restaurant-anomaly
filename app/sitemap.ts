import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://animalrestaurantanomaly.wiki";
  return ["", "/beginner-guide", "/anomalies", "/upgrades", "/faq", "/sources"].map((path, index) => ({ url: `${base}${path}`, lastModified: new Date("2026-08-12"), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : path === "/beginner-guide" ? .9 : .7 }));
}
