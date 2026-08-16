/**
 * AI For Seniors program page copy.
 * Audience: older adults, and organizations that serve them.
 */

export type AiForSeniorsUseCase = {
  id: string;
  number: string;
  title: string;
  body: string;
};

export type AiForSeniorsWorkshopStep = {
  id: string;
  number: string;
  title: string;
  body: string;
};

export type AiForSeniorsAudience = {
  id: string;
  title: string;
  body: string;
};

export type AiForSeniorsPageContent = {
  eyebrow: string;
  name: string;
  positioning: string;
  mission: {
    label: string;
    body: string;
  };
  vision: {
    label: string;
    body: string;
  };
  requestCtaLabel: string;
  useCases: {
    heading: string;
    support: string;
    cards: AiForSeniorsUseCase[];
  };
  workshop: {
    heading: string;
    support: string;
    steps: AiForSeniorsWorkshopStep[];
  };
  audiences: {
    heading: string;
    cards: AiForSeniorsAudience[];
  };
};

export const aiForSeniorsPageContent: AiForSeniorsPageContent = {
  eyebrow: "Program",
  name: "AI For Seniors",
  positioning:
    "Helping older adults use AI for the things that matter in THEIR everyday life.",
  mission: {
    label: "Mission",
    body: "Help older adults discover practical ways to use AI with confidence in their everyday lives.",
  },
  vision: {
    label: "Vision",
    body: "A future where older adults aren't left behind as AI becomes part of everyday life.",
  },
  requestCtaLabel: "Request a Workshop",
  useCases: {
    heading: "What can AI help you do?",
    support:
      "AI can be useful for things you already do every day—from staying connected with family to planning a trip, learning something new, organizing memories, and navigating an increasingly digital world.",
    cards: [
      {
        id: "connected",
        number: "01",
        title: "Stay Connected",
        body: "Use AI to draft messages, translate conversations, understand unfamiliar information, and communicate more easily with family and friends.",
      },
      {
        id: "plan",
        number: "02",
        title: "Plan & Explore",
        body: "Research destinations, build travel plans, compare options, understand unfamiliar information, and explore new places.",
      },
      {
        id: "learn",
        number: "03",
        title: "Learn Something New",
        body: "Ask questions, explore a new subject, practice a language, learn a skill, or understand something you've always wanted to know.",
      },
      {
        id: "memories",
        number: "04",
        title: "Organize Your Memories",
        body: "Organize photographs, write captions, create stories, and prepare memories to share with family.",
      },
      {
        id: "navigate",
        number: "05",
        title: "Navigate the Digital World",
        body: "Recognize misleading AI-generated information, identify common online scams, protect personal information, and think critically about what you see online.",
      },
      {
        id: "everyday",
        number: "06",
        title: "Make Everyday Tasks Easier",
        body: "Draft a letter, make a list, understand something confusing, organize information, or brainstorm an idea.",
      },
    ],
  },
  workshop: {
    heading: "Learn by doing.",
    support:
      "Our workshops introduce practical AI tools and give participants time to use them themselves. The goal is not to teach technology for its own sake, but to help each person find useful ways AI can fit into their everyday life.",
    steps: [
      {
        id: "see",
        number: "01",
        title: "See",
        body: "A practical example using AI for something familiar.",
      },
      {
        id: "try",
        number: "02",
        title: "Try",
        body: "Follow along and try it yourself.",
      },
      {
        id: "use",
        number: "03",
        title: "Use",
        body: "Leave with something you can continue using.",
      },
    ],
  },
  audiences: {
    heading: "Designed for real people, not technical users.",
    cards: [
      {
        id: "older-adults",
        title: "Older adults",
        body: "Whether you're completely new to AI or have already experimented with it, the workshops start from familiar situations and build practical confidence through hands-on use.",
      },
      {
        id: "organizations",
        title: "Organizations serving older adults",
        body: "Senior centers, libraries, community organizations, residential communities, and other groups can bring a workshop to their community. Sessions can be adapted to the audience, setting, and interests.",
      },
    ],
  },
};
