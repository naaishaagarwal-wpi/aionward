import { aboutContent } from "@/content/about";
import type { AboutContent } from "@/content/about";

export async function getAboutContent(): Promise<AboutContent> {
  return aboutContent;
}
