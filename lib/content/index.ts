/**
 * Content data layer — single entry point for pages and sections.
 *
 * Version 0.1 reads from local `content/*.ts` files.
 * Future Contentful integration: replace implementations in the sibling
 * modules (or add a Contentful client behind the same exports) without
 * changing page components.
 */
export {
  getPrograms,
  getProgramBySlug,
} from "./programs";

export {
  getWorkshops,
  getFeaturedWorkshops,
  getWorkshopBySlug,
  type WorkshopFilters,
} from "./workshops";

export {
  getTestimonials,
  getTestimonialById,
  getTestimonialsByProgram,
  getTestimonialsByWorkshop,
  getTestimonialsByIds,
} from "./testimonials";

export {
  getTeam,
  getTeamByCategory,
  getTeamMemberById,
} from "./team";

export { getSiteSettings } from "./site";

export { getHomepageContent } from "./homepage";

export { getAboutContent } from "./about";

export { getWorkshopsPageContent } from "./workshops-page";
