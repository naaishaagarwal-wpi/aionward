import type { SiteEmails, SiteForms, SiteSettings } from "@/lib/types/content";

const emails: SiteEmails = {
  general: "hello@aionward.org",
  contact: "contact@aionward.org",
  partnerships: "partners@aionward.org",
  workshops: "workshops@aionward.org",
  join: "join@aionward.org",
  media: "media@aionward.org",
};

const forms: SiteForms = {
  contact: "https://forms.gle/QYAHvFuendX1bkZe7",
  workshops: "https://forms.gle/NKwfS8DJhVjwp9F56",
  partnerships: "https://forms.gle/fMKFELLuBPZtSCBt5",
  join: "https://forms.gle/3gqmPnG47BV15z3x9",
};

/**
 * Site-wide settings and navigation.
 * Impact values are null until confirmed — never fabricate statistics.
 * Official inboxes and Google Form URLs live here — do not hardcode them in UI.
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
  footerLinks: [
    { label: "About", href: "/about" },
    { label: "Programs", href: "/girls-applying-ai" },
    { label: "Workshops", href: "/workshops" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/aionwardorg/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/ai-onward/" },
  ],
  impactStats: [
    { id: "stat-workshops", label: "Workshops Conducted", value: null },
    { id: "stat-participants", label: "Participants Reached", value: null },
    { id: "stat-partners", label: "Community Partners", value: null },
    { id: "stat-volunteers", label: "Student Volunteers", value: null },
  ],
  emails,
  forms,
  contactChannels: [
    {
      id: "contact-general",
      label: "General inquiries",
      description:
        "Questions, ideas, or anything that doesn't fit another category.",
      href: `mailto:${emails.general}`,
      actionLabel: null,
    },
    {
      id: "contact-workshop",
      label: "Request a workshop",
      description:
        "For organizations and communities interested in bringing an AI Onward workshop to their audience.",
      href: forms.workshops,
      actionLabel: "Request a workshop",
    },
    {
      id: "contact-partnerships",
      label: "Partner with AI Onward",
      description: "For organizations interested in collaborating.",
      href: forms.partnerships,
      actionLabel: "Partner with us",
    },
    {
      id: "contact-join",
      label: "Get involved",
      description:
        "For people interested in leadership, volunteering, board service, advising, mentoring, events, research, or other participation.",
      href: forms.join,
      actionLabel: "Get involved",
    },
    {
      id: "contact-media",
      label: "Media & press",
      description: "Press and media inquiries.",
      href: `mailto:${emails.media}`,
      actionLabel: null,
    },
    {
      id: "contact-message",
      label: "Contact us",
      description: "A short form for general structured inquiries.",
      href: forms.contact,
      actionLabel: "Send us a message",
    },
  ],
};
