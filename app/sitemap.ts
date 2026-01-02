import type { MetadataRoute } from "next";
import { featuredWorks } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";
  const workUrls = featuredWorks.map((work) => ({
    url: `${baseUrl}/work/${work.slug}`,
    lastModified: new Date()
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/work`, lastModified: new Date() },
    { url: `${baseUrl}/system-design`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...workUrls
  ];
}
