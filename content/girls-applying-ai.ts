/**
 * Girls Applying AI program page copy.
 * Audience: girls and young women 16–24 who are already exploring or applying AI.
 */

export type GirlsApplyingAiCard = {
  id: string;
  number: string;
  title: string;
  body: string;
};

export type GirlsApplyingAiBlock = {
  id: string;
  title: string;
  body: string;
};

export type GirlsApplyingAiPageContent = {
  eyebrow: string;
  name: string;
  positioning: string;
  mission: {
    label: string;
    body: string;
  };
  audience: {
    label: string;
    body: string;
  };
  requestCtaLabel: string;
  share: {
    number: string;
    label: string;
    heading: string;
    intro: string[];
    cards: GirlsApplyingAiCard[];
  };
  connect: {
    number: string;
    label: string;
    heading: string;
    intro: string;
    blocks: [GirlsApplyingAiBlock, GirlsApplyingAiBlock, GirlsApplyingAiBlock];
  };
  inspired: {
    number: string;
    label: string;
    heading: string;
    intro: string;
    blocks: [GirlsApplyingAiBlock, GirlsApplyingAiBlock, GirlsApplyingAiBlock];
  };
  together: {
    number: string;
    label: string;
    heading: string;
    body: string;
  };
};

export const girlsApplyingAiPageContent: GirlsApplyingAiPageContent = {
  eyebrow: "Program",
  name: "Girls Applying AI",
  positioning:
    "Bringing together young women who are already applying AI to share, connect, and learn from one another.",
  mission: {
    label: "Mission",
    body: "Create a community where girls and young women can share how they are using AI, discuss the questions and concerns they are encountering, build relationships with peers, and connect with women who can inspire and guide them.",
  },
  audience: {
    label: "Who it's for",
    body: "Girls and young women ages 16–24—from high school through college—who are already exploring or applying AI.",
  },
  requestCtaLabel: "Join the Community",
  share: {
    number: "01",
    label: "Share",
    heading: "Share what you're learning",
    intro: [
      "You don't have to be an AI expert to have something worth sharing.",
      "Girls Applying AI gives young women a place to talk about how they're using AI, what they're building, what they've discovered, and what they are still figuring out.",
    ],
    cards: [
      {
        id: "trying",
        number: "01",
        title: "What I'm Trying",
        body: "Share the ways you're experimenting with AI—in school, research, projects, work, or everyday life.",
      },
      {
        id: "learning",
        number: "02",
        title: "What I'm Learning",
        body: "Talk about what is working, what isn't, and what you've discovered along the way.",
      },
      {
        id: "wondering",
        number: "03",
        title: "What I'm Wondering",
        body: "Bring questions, concerns, and ideas to a community that is figuring them out together.",
      },
    ],
  },
  connect: {
    number: "02",
    label: "Connect",
    heading: "Meet others figuring it out too",
    intro:
      "Connect with girls and young women from different schools, colleges, communities, and fields who are exploring AI in their own ways.",
    blocks: [
      {
        id: "peers",
        title: "Peer Connections",
        body: "Meet other young women who are already using AI.",
      },
      {
        id: "events",
        title: "Community Events",
        body: "Join conversations and meetups designed around sharing experiences, questions, and ideas.",
      },
      {
        id: "fields",
        title: "Cross-Disciplinary Connections",
        body: "Discover how people in different fields are approaching AI.",
      },
    ],
  },
  inspired: {
    number: "03",
    label: "Be Inspired",
    heading: "Meet women who are already there",
    intro:
      "Hear directly from women researchers, entrepreneurs, engineers, founders, executives, and leaders who are building and working with AI.",
    blocks: [
      {
        id: "stories",
        title: "Stories",
        body: "Hear how women built their paths in AI.",
      },
      {
        id: "perspectives",
        title: "Perspectives",
        body: "Learn how experienced leaders think about opportunities, challenges, and concerns around AI.",
      },
      {
        id: "guidance",
        title: "Guidance",
        body: "Ask questions and build relationships that can help shape your own path.",
      },
    ],
  },
  together: {
    number: "04",
    label: "Come Together",
    heading: "A community built through conversation",
    body: "Girls Applying AI will bring young women together through meetups, conversations, and events—creating spaces to share what we're learning, talk openly about what concerns us, and meet people who can broaden our perspective.",
  },
};
