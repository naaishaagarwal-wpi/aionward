import type { Program } from "@/lib/types/content";

/**
 * Homepage copy — sourced from docs/homepage-content.md and docs/brand-story.md.
 * Do not invent stats, workshops, testimonials, or partners here.
 */

export type HomepageHero = {
  headline: string;
  supporting: string;
  annotation: string;
  movementLine: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type HomepageOrigin = {
  eyebrow: string;
  title: string;
  lead: string;
  observations: Array<{
    id: string;
    label: string;
    body: string;
    marginNote: string;
    href: string;
  }>;
  belief: string;
  closing: string;
  culmination: string;
};

export type HomepageWhy = {
  title: string;
  paragraphs: string[];
  annotation: string;
};

export type GetInvolvedPath = {
  id: string;
  label: string;
  /** Optional — only include copy from authenticated sources */
  description: string | null;
  href: string;
};

export type HomepageContent = {
  hero: HomepageHero;
  origin: HomepageOrigin;
  why: HomepageWhy;
  programsTitle: string;
  programsAnnotation: string;
  getInvolved: {
    title: string;
    annotation: string;
    paths: GetInvolvedPath[];
  };
  closing: {
    message: string;
    invitation: string;
    cta: { label: string; href: string };
  };
};

export const homepageContent: HomepageContent = {
  hero: {
    headline: "AI belongs to everyone.",
    supporting:
      "Helping every generation confidently understand, explore, and apply Artificial Intelligence through community, education, and real-world experiences.",
    annotation: "Yes, everyone.",
    movementLine: "A youth-led movement.",
    primaryCta: { label: "Explore Our Programs", href: "#programs" },
    secondaryCta: { label: "Join Our Next Workshop", href: "/workshops" },
  },
  origin: {
    eyebrow: "How this began",
    title: "Three observations. One shared belief.",
    lead: "AI Onward did not begin as an organization. It began with three observations.",
    observations: [
      {
        id: "obs-students",
        label: "Students",
        body: "Naaisha founded AI Visionaries as a high school freshman after realizing that many students wanted to explore how Artificial Intelligence could be applied beyond coding.",
        marginNote: "AI Visionaries",
        href: "/ai-visionaries",
      },
      {
        id: "obs-girls",
        label: "Girls",
        body: "Through conversations with her younger sister, Sayoni, and many of their friends, they noticed that girls were curious about AI but often lacked welcoming spaces where they could confidently learn, experiment, and build.",
        marginNote: "Girls Applying AI",
        href: "/girls-applying-ai",
      },
      {
        id: "obs-seniors",
        label: "Seniors",
        body: "While helping their grandfather (“Daadu”) and several of his friends begin using AI, Naaisha and Sayoni realized that many older adults were excited about AI but simply didn’t know where to start.",
        marginNote: "AI For Seniors",
        href: "/ai-for-seniors",
      },
    ],
    belief: "Everyone deserves the opportunity to participate in the future of AI.",
    closing:
      "Rather than treating these efforts as separate projects, they brought them together under one shared vision. That vision became AI Onward.",
    culmination: "AI Onward",
  },
  why: {
    title: "Why AI Onward",
    paragraphs: [
      "AI is changing how we learn, work, and connect.",
      "We believe no one should be left behind.",
      "From students to seniors, AI Onward creates opportunities for people to learn together, ask questions confidently, and discover how AI can improve everyday life.",
    ],
    annotation: "Learning is better together.",
  },
  programsTitle: "Our Programs",
  programsAnnotation: "Three communities. One movement.",
  getInvolved: {
    title: "Get Involved",
    annotation: "There is a place for you here.",
    paths: [
      {
        id: "path-volunteer",
        label: "Volunteer",
        description: "Join as a student volunteer or community helper.",
        href: "/contact",
      },
      {
        id: "path-partner",
        label: "Partner With Us",
        description: "Collaborate as a community or organizational partner.",
        href: "/contact",
      },
      {
        id: "path-host",
        label: "Host a Workshop",
        description: "Invite AI Onward to host a workshop in your community.",
        href: "/contact",
      },
      {
        id: "path-speak",
        label: "Invite Us to Speak",
        description: null,
        href: "/contact",
      },
    ],
  },
  closing: {
    message: "The future of AI should include everyone.",
    invitation: "Join us in moving AI onward.",
    cta: { label: "Get in touch", href: "/contact" },
  },
};

/** Helper for typing program lists on the homepage */
export type HomepageProgram = Pick<
  Program,
  "id" | "name" | "slug" | "shortDescription"
>;
