import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://kashimariyouthsociety.org", lastModified: new Date(), priority: 1 }];
}
