import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/lib/types/content";

/**
 * Testimonial content accessors.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function getTestimonialById(
  id: string
): Promise<Testimonial | null> {
  return testimonials.find((t) => t.id === id) ?? null;
}

export async function getTestimonialsByProgram(
  programSlug: string
): Promise<Testimonial[]> {
  return testimonials.filter((t) => t.programSlug === programSlug);
}

export async function getTestimonialsByWorkshop(
  workshopId: string
): Promise<Testimonial[]> {
  return testimonials.filter((t) => t.workshopId === workshopId);
}

export async function getTestimonialsByIds(
  ids: string[]
): Promise<Testimonial[]> {
  if (ids.length === 0) return [];
  const idSet = new Set(ids);
  return testimonials.filter((t) => idSet.has(t.id));
}
