import { programs } from "@/content/programs";
import type { Program } from "@/lib/types/content";

/**
 * Program content accessors.
 * Swap this module's imports for Contentful fetches later — keep the same signatures.
 */
export async function getPrograms(): Promise<Program[]> {
  return programs;
}

export async function getProgramBySlug(
  slug: string
): Promise<Program | null> {
  return programs.find((program) => program.slug === slug) ?? null;
}
