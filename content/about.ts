import { siteSettings } from "@/content/site";

/**
 * About page copy — mission, people, and leadership.
 * Team members live in content/team.ts.
 */

export type AboutContent = {
  title: string;
  missionTitle: string;
  mission: string;
  meetTitle: string;
  meetIntro: string;
  invitation: string;
  invitationCta: { label: string; href: string };
};

export const aboutContent: AboutContent = {
  title: "About",
  missionTitle: "Mission",
  mission:
    "We believe AI's future should be shaped by everyone. Our mission is to empower people to understand AI, explore its possibilities, and use it to create meaningful impact.",
  meetTitle: "Meet the Team",
  meetIntro:
    "AI Onward is being built by a growing community of young leaders who believe the future of AI should be shaped by everyone. From our co-founders and executive team to the board members and volunteers joining us, each person brings a different perspective, experience, and reason to help move AI onward.",
  invitation: "Want to help build AI Onward?",
  invitationCta: {
    label: "Explore Leadership & Volunteer Opportunities",
    href: siteSettings.forms.join,
  },
};
