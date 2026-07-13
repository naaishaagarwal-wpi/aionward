import type { SiteSettings } from "@/lib/types/content";

/**
 * Site-wide settings and navigation.
 * Impact values are null until confirmed — never fabricate statistics.
 * Contact email is null until a real address is provided.
 */
export const siteSettings: SiteSettings = {
  siteName: "AI Onward",
  tagline: "AI belongs to everyone.",
  description:
    "A youth-led initiative helping people of every generation confidently understand, explore, and apply Artificial Intelligence.",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "AI For Seniors", href: "/ai-for-seniors" },
    { label: "Girls Applying AI", href: "/girls-applying-ai" },
    { label: "AI Visionaries", href: "/ai-visionaries" },
    { label: "Workshops", href: "/workshops" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  impactStats: [
    { id: "stat-workshops", label: "Workshops Conducted", value: null },
    { id: "stat-participants", label: "Participants Reached", value: null },
    { id: "stat-partners", label: "Community Partners", value: null },
    { id: "stat-volunteers", label: "Student Volunteers", value: null },
  ],
  contactChannels: [
    {
      id: "contact-general",
      label: "General inquiries",
      description: "Questions about AI Onward and how to get involved.",
      href: null,
    },
    {
      id: "contact-workshop",
      label: "Workshop requests",
      description: "Invite AI Onward to host a workshop in your community.",
      href: null,
    },
    {
      id: "contact-volunteer",
      label: "Volunteer",
      description: "Join as a student volunteer or community helper.",
      href: null,
    },
    {
      id: "contact-partnerships",
      label: "Partnerships",
      description: "Collaborate as a community or organizational partner.",
      href: null,
    },
    {
      id: "contact-media",
      label: "Media",
      description: "Press and media inquiries.",
      href: null,
    },
  ],
  contactEmail: null,
};
