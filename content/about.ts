import { siteSettings } from "@/content/site";

/**
 * About page copy — people and leadership.
 * Team members live in content/team.ts.
 */

export type AboutContent = {
  title: string;
  eyebrow: string;
  lead: string;
  invitation: string;
  invitationCta: { label: string; href: string };
};

export const aboutContent: AboutContent = {
  title: "Meet the Team",
  eyebrow: "About",
  lead: "AI Onward is a youth-led initiative. These are the people building it.",
  invitation: "Want to help build AI Onward?",
  invitationCta: {
    label: "Explore Leadership & Volunteer Opportunities",
    href: siteSettings.forms.join,
  },
};
