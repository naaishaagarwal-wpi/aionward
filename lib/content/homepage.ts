import { homepageContent } from "@/content/homepage";
import type { HomepageContent } from "@/content/homepage";

export async function getHomepageContent(): Promise<HomepageContent> {
  return homepageContent;
}
