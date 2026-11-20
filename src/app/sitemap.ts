import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.danscansdumpsterrental.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/junk-removal/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
