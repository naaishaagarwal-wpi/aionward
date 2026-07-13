import { workshops } from "@/content/workshops";
import type { Workshop, WorkshopStatus } from "@/lib/types/content";

export type WorkshopFilters = {
  status?: WorkshopStatus;
  programSlug?: string;
  featured?: boolean;
};

/**
 * Workshop content accessors.
 * Swap for Contentful queries later without changing page components.
 */
export async function getWorkshops(
  filters?: WorkshopFilters
): Promise<Workshop[]> {
  let results = [...workshops];

  if (filters?.status) {
    results = results.filter((w) => w.status === filters.status);
  }
  if (filters?.programSlug) {
    results = results.filter((w) => w.programSlug === filters.programSlug);
  }
  if (filters?.featured !== undefined) {
    results = results.filter((w) => w.featured === filters.featured);
  }

  return results;
}

export async function getFeaturedWorkshops(): Promise<Workshop[]> {
  return getWorkshops({ featured: true });
}

export async function getWorkshopBySlug(
  slug: string
): Promise<Workshop | null> {
  return workshops.find((w) => w.slug === slug) ?? null;
}
