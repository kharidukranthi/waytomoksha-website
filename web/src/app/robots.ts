import type { MetadataRoute } from "next";
import { allowIndexing, getSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${getSiteUrl()}/sitemap.xml`;

  if (!allowIndexing()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap,
  };
}
