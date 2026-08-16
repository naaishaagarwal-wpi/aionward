import type { MediaAsset } from "@/lib/types/content";

/**
 * AI For Seniors program page copy.
 * Written for older adults and the organizations that serve them —
 * not as an organizational brochure.
 */

export type AiForSeniorsUseCase = {
  id: string;
  number: string;
  title: string;
  subheading: string;
  body: string;
};

export type AiForSeniorsWorkshopStep = {
  id: string;
  number: string;
  title: string;
  body: string;
};

export type AiForSeniorsPageContent = {
  name: string;
  positioning: string;
  signature: string;
  hero: {
    support: string;
    reassurance: string;
    image: MediaAsset;
  };
  railWhy: {
    label: string;
    body: string;
  };
  mission: {
    label: string;
    body: string;
  };
  vision: {
    label: string;
    body: string;
  };
  requestCtaLabel: string;
  origin: {
    heading: string;
    annotation: string;
    began: string;
    story: string;
    audience: string;
    image: MediaAsset;
  };
  useCases: {
    heading: string;
    support: string;
    cards: AiForSeniorsUseCase[];
  };
  workshop: {
    heading: string;
    body: string;
    steps: AiForSeniorsWorkshopStep[];
  };
  belonging: {
    heading: string;
    body: string;
    statements: string[];
  };
  organizations: {
    heading: string;
    body: string;
    planning: string;
    tailor: string;
  };
  closing: {
    heading: string;
    body: string;
    questionPrompt: string;
  };
};

export const aiForSeniorsPageContent: AiForSeniorsPageContent = {
  name: "AI For Seniors",
  positioning:
    "Helping older adults use AI for the things that matter in their everyday life.",
  signature: "Patience. Practice. Belonging.",
  hero: {
    support:
      "AI can help with things people already care about—staying connected with family, planning a trip, learning something new, organizing information, and navigating an increasingly digital world.",
    reassurance: "No technical background required. Just curiosity.",
    image: {
      src: "/media/events/workshops/2026-06-16-ai-seniors-westford-ma/cover.jpeg",
      alt: "Seniors fill a community room as Naaisha leads an AI For Seniors workshop in Westford.",
    },
  },
  railWhy: {
    label: "Why this exists",
    body: "It started at home, helping a grandfather and his friends. Older adults were curious about AI — they just needed a place to begin.",
  },
  mission: {
    label: "Our mission",
    body: "Help older adults discover practical ways to use AI with confidence in their everyday lives.",
  },
  vision: {
    label: "Our vision",
    body: "A future where older adults aren't left behind as AI becomes part of everyday life.",
  },
  requestCtaLabel: "Request a Workshop",
  origin: {
    heading: "Why this exists",
    annotation: "It started at home.",
    began:
      "AI For Seniors began at home—with patience, curiosity, and the belief that older adults belong in the future of AI.",
    story:
      "While helping their grandfather (“Daadu”) and several of his friends begin using AI, Naaisha and Sayoni realized that many older adults were excited about AI but simply didn't know where to start.",
    audience:
      "AI is becoming part of everyday life. Older adults should have the opportunity to understand it, try it, and decide for themselves how they want to use it.",
    image: {
      src: "/media/stories/founding-story/naaisha-sayoni-daadu.png",
      alt: "Naaisha and Sayoni with their grandfather, Daadu.",
    },
  },
  useCases: {
    heading: "What can AI help you do?",
    support:
      "AI becomes much more interesting when it helps with something you already want to do.",
    cards: [
      {
        id: "connected",
        number: "01",
        title: "Stay Connected",
        subheading: "Make communication easier.",
        body: "Draft a thoughtful message, translate something for family or friends, understand unfamiliar information, or find new ways to stay connected across languages and generations.",
      },
      {
        id: "plan",
        number: "02",
        title: "Plan & Explore",
        subheading: "Make planning easier.",
        body: "Research a destination, build a trip itinerary, compare options, understand unfamiliar information, or simply figure out what comes next.",
      },
      {
        id: "learn",
        number: "03",
        title: "Learn Something New",
        subheading: "Follow your curiosity.",
        body: "Ask questions, explore a new subject, practice a language, learn a skill, or get help understanding something you've always wondered about.",
      },
      {
        id: "memories",
        number: "04",
        title: "Organize Your Memories",
        subheading: "Do more with the things you've already collected.",
        body: "Get help organizing photographs, writing captions, creating stories, or turning memories into something you can share with family.",
      },
      {
        id: "navigate",
        number: "05",
        title: "Navigate the Digital World",
        subheading: "Be curious—and careful.",
        body: "Learn how AI-generated information can be misleading, recognize common online scams, think critically about what you see, and protect your personal information.",
      },
      {
        id: "everyday",
        number: "06",
        title: "Make Everyday Tasks Easier",
        subheading: "Get a little help when you need it.",
        body: "From drafting a letter to making a list, explaining something confusing, or brainstorming an idea, AI can be a useful everyday assistant.",
      },
    ],
  },
  workshop: {
    heading: "Not a lecture. A chance to try it yourself.",
    body: "Our workshops are designed around participation, not technical instruction. We introduce an AI tool or idea, demonstrate something useful, and then give participants time to try it themselves, ask questions, and discover what works for them.",
    steps: [
      {
        id: "see",
        number: "01",
        title: "See it",
        body: "Watch a practical example.",
      },
      {
        id: "try",
        number: "02",
        title: "Try it",
        body: "Follow along and experiment yourself.",
      },
      {
        id: "take",
        number: "03",
        title: "Take it with you",
        body: "Leave with something you can continue using.",
      },
    ],
  },
  belonging: {
    heading: "You don't need to be 'good at technology.'",
    body: "You don't need to know how AI works. You don't need to have used ChatGPT before. And you don't need to be afraid of asking a basic question.",
    statements: [
      "No technical background",
      "Questions welcome",
      "Learn at your own pace",
    ],
  },
  organizations: {
    heading: "Bring AI For Seniors to your community",
    body: "Senior centers, community organizations, libraries, residential communities, and other groups serving older adults can invite AI Onward to host a hands-on workshop for their community.",
    planning: "Planning a program for your community?",
    tailor:
      "We can work with you to tailor the workshop to your audience, setting, and interests.",
  },
  closing: {
    heading: "Ready to bring AI to your community?",
    body: "Whether you're a senior center, community organization, library, residential community, or another group serving older adults, we'd love to hear what your community needs.",
    questionPrompt: "Have a question first?",
  },
};
