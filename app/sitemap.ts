import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://animalrestaurantanomaly.wiki";
  const lastModified = new Date("2026-09-23");
  return [
    { url: `${base}`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/beginner-guide`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/anomalies`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/upgrades`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/codes`, lastModified, changeFrequency: "daily", priority: 0.85 },
    { url: `${base}/faq`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sources`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
