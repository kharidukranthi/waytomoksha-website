import { organization } from "@/data/organization";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = raw && raw.length > 0 ? raw : organization.websiteUrl;
  return url.replace(/\/$/, "");
}

/**
 * Production indexing must only be enabled after admin review.
 * Default is false so Vercel previews stay noindex.
 * Set NEXT_PUBLIC_ALLOW_INDEXING=true only when connecting the real domain.
 */
export function allowIndexing(): boolean {
  return process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
}
