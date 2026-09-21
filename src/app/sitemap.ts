import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { practiceAreas } from "@/data/practiceAreas";
import { attorneys } from "@/data/attorneys";
import { insightArticles } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/about",
    "/practice-areas",
    "/teams",
    "/attorneys",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/legal-disclaimer",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const practiceRoutes = practiceAreas.map((pa) => ({
    url: `${baseUrl}/practice-areas/${pa.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const attorneyRoutes = attorneys.map((at) => ({
    url: `${baseUrl}/attorneys/${at.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const insightRoutes = insightArticles.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...practiceRoutes, ...attorneyRoutes, ...insightRoutes];
}
