import type { MetadataRoute } from "next";
import { getRetreatsWithDetailPages } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

const staticPaths = [
  "/",
  "/daily-sessions",
  "/retreats",
  "/store",
  "/volunteer",
  "/donate",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const pages = staticPaths.map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
  }));

  const retreatPages = getRetreatsWithDetailPages().map((retreat) => ({
    url: `${siteUrl}/retreats/${retreat.slug}`,
  }));

  return [...pages, ...retreatPages];
}
