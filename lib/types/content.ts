/**
 * Content models for AI Onward.
 * Shaped to match future Contentful content types (see docs/content-strategy.md).
 * Local mock data implements these types; swap the data layer later without changing UI.
 */

export type WorkshopStatus = "upcoming" | "completed";

export type TeamCategory =
  | "executive"
  | "team"
  | "volunteer"
  | "advisor";

export type MediaAsset = {
  /** Local path (e.g. /images/...) or future CDN URL */
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Program = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  heroImage: MediaAsset | null;
  mission: string;
  vision: string | null;
  /** Why this initiative began — from brand story only */
  whyExists: string | null;
  /** Optional origin note for page narrative */
  originNote: string | null;
  /** Structured page sections — empty until authentic content exists */
  activities: string[];
  projects: string[];
  leadershipItems: string[];
  competitions: string[];
  opportunities: string[];
  /** Cross-references Workshop.id */
  featuredWorkshopIds: string[];
  /** Cross-references Testimonial.id */
  featuredTestimonialIds: string[];
};

export type Workshop = {
  id: string;
  title: string;
  slug: string;
  programSlug: string;
  audience: string;
  /** ISO date string (YYYY-MM-DD) */
  date: string;
  time: string | null;
  location: string;
  description: string;
  registrationLink: string | null;
  photos: MediaAsset[];
  /** Cross-references Testimonial.id */
  testimonialIds: string[];
  featured: boolean;
  status: WorkshopStatus;
};

export type Testimonial = {
  id: string;
  name: string;
  photo: MediaAsset | null;
  age: number | null;
  role: string;
  organization: string | null;
  quote: string;
  workshopId: string | null;
  programSlug: string | null;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: MediaAsset | null;
  bio: string;
  linkedIn: string | null;
  email: string | null;
  category: TeamCategory;
};

export type NavLink = {
  label: string;
  href: string;
};

export type ImpactStat = {
  id: string;
  label: string;
  /**
   * null = not yet confirmed. Never invent numbers.
   * Display placeholder until a real value is supplied.
   */
  value: number | null;
};

export type ContactChannel = {
  id: string;
  label: string;
  description: string;
  /** mailto: or external URL; null until a real address exists */
  href: string | null;
};

export type SiteSettings = {
  siteName: string;
  tagline: string;
  description: string;
  navLinks: NavLink[];
  footerLinks: NavLink[];
  socialLinks: NavLink[];
  impactStats: ImpactStat[];
  contactChannels: ContactChannel[];
  /** Primary contact email; null until confirmed */
  contactEmail: string | null;
};
