import { siteSettings } from "@/content/site";
import type { SiteSettings } from "@/lib/types/content";

/**
 * Site-wide settings accessor.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  return siteSettings;
}
