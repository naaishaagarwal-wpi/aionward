import type { MediaAsset, Program } from "@/lib/types/content";

/**
 * Homepage copy — sourced from docs/homepage-content.md and docs/brand-story.md.
 * Do not invent stats, workshops, testimonials, or partners here.
 */

export type HomepageHero = {
  brand: string;
  headline: string;
  annotation: string;
  primaryCta: { label: string; href: string };
  /** Canonical path under public/media — pages reference, never own copies */
  image: MediaAsset;
};

export type HomepageOrigin = {
  opening: string;
  supporting: string;
  belonging: string;
  transition: string;
  homeTitle: string;
  storyBeats: Array<{ id: string; text: string }>;
  realization: string;
  /** Family / founding moment — canonical path under public/media */
  image: MediaAsset;
};

export type HomepageWhy = {
  title: string;
  paragraphs: string[];
  annotation: string;
};

export type HomepageMoments = {
  title: string;
  lead: string;
  bridge: string;
  realization: string;
  dominant: {
    image: MediaAsset;
    caption: string;
  };
  supporting: Array<{
    image: MediaAsset;
    caption: string;
  }>;
};

export type HomepagePlace = {
  title: string;
  annotation: string;
  pathways: Array<{
    id: string;
    label: string;
    href: string;
  }>;
  cta: { label: string; href: string };
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
  moments: HomepageMoments;
  place: HomepagePlace;
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
    brand: "AI Onward",
    headline: "Everyone belongs\nin the future of AI.",
    annotation: "The future is something we create together.",
    primaryCta: { label: "Help Shape the Future", href: "#your-place" },
    image: {
      src: "/media/events/workshops/2026-06-16-ai-seniors-westford-ma/discussion-2.jpeg",
      alt: "Naaisha listens as seniors lean in with questions during an AI For Seniors workshop in Westford.",
    },
  },
  origin: {
    opening: "AI is moving fast.",
    supporting:
      "But the future of AI cannot belong to only a few. It cannot belong only to engineers, only to companies, or only to young people.",
    belonging: "Everyone deserves a place to learn, explore, and create.",
    transition: "That belief became AI Onward.",
    homeTitle: "It started at home.",
    storyBeats: [
      {
        id: "beat-naaisha",
        text: "Naaisha discovered AI and saw how it could matter beyond code.",
      },
      {
        id: "beat-sayoni",
        text: "Sayoni explored ideas and ways to serve others.",
      },
      {
        id: "beat-daadu",
        text: "Helping their grandfather — Daadu — showed how many people wonder where they fit in an AI future.",
      },
    ],
    realization: "Together they realized everyone should have a place.",
    image: {
      src: "/media/stories/founding-story/naaisha-sayoni-daadu.png",
      alt: "Naaisha, Sayoni, and their grandfather Daadu together at home.",
    },
  },
  moments: {
    title: "Moments That Matter",
    lead: "AI is not about technology alone.",
    bridge: "It is about the moment someone realizes:",
    realization: "I can do this.",
    dominant: {
      image: {
        src: "/media/events/workshops/2026-06-22-ai-seniors-newton-ma/demo.jpg",
        alt: "Naaisha leans in to help a senior explore AI during a workshop in Newton.",
      },
      caption: "Side by side in Newton.",
    },
    supporting: [
      {
        image: {
          src: "/media/events/workshops/2026-06-16-ai-seniors-westford-ma/cover.jpeg",
          alt: "Seniors fill a community room as Naaisha leads an AI For Seniors workshop in Westford.",
        },
        caption: "A full room in Westford.",
      },
      {
        image: {
          src: "/media/events/workshops/2026-06-16-ai-seniors-westford-ma/discussion-1.jpeg",
          alt: "A senior gestures while speaking as Naaisha listens during an AI For Seniors workshop.",
        },
        caption: "A question from the table.",
      },
    ],
  },
  place: {
    title: "Your Place in the Future.",
    annotation: "Choose where you begin.",
    pathways: [
      {
        id: "place-student",
        label: "Student",
        href: "/contact",
      },
      {
        id: "place-learner",
        label: "Exploring AI",
        href: "/contact",
      },
      {
        id: "place-organization",
        label: "Organizations",
        href: "/contact",
      },
      {
        id: "place-help",
        label: "Volunteer",
        href: "/contact",
      },
    ],
    cta: { label: "Help Shape the Future", href: "/contact" },
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
