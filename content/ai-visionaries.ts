/**
 * AI Visionaries program page copy.
 * Audience: students, and schools that want to start a club.
 */

export type AiVisionariesCard = {
  id: string;
  number: string;
  title: string;
  body: string;
};

export type AiVisionariesNetworkNode = {
  id: string;
  title: string;
  body: string;
};

export type AiVisionariesStep = {
  id: string;
  number: string;
  title: string;
  body: string;
};

export type AiVisionariesPageContent = {
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
  northStar: {
    label: string;
    body: string;
  };
  requestCtaLabel: string;
  requestCtaSupport: string;
  learn: {
    heading: string;
    supportHeading: string;
    support: string;
    cards: AiVisionariesCard[];
  };
  network: {
    heading: string;
    supportHeading: string;
    support: string;
    nodes: [
      AiVisionariesNetworkNode,
      AiVisionariesNetworkNode,
      AiVisionariesNetworkNode
    ];
  };
  compete: {
    heading: string;
    supportHeading: string;
    support: string;
    steps: AiVisionariesStep[];
  };
  closing: {
    heading: string;
    support: string;
    statement: string;
  };
};

export const aiVisionariesPageContent: AiVisionariesPageContent = {
  eyebrow: "Program",
  name: "AI Visionaries",
  positioning:
    "Helping students learn about AI, connect with people shaping it, and put their ideas to the test.",
  mission: {
    label: "Mission",
    body: "Give students a platform to learn about AI, network with others who are exploring it, and turn their ideas into research, projects, and real-world impact.",
  },
  vision: {
    label: "Vision",
    body: "A global community of students who learn, network, and compete around AI.",
  },
  northStar: {
    label: "North Star",
    body: "An AI Visionaries club in every high school in the world.",
  },
  requestCtaLabel: "Start a Club",
  requestCtaSupport: "Bring AI Visionaries to your high school.",
  learn: {
    heading: "Learn",
    supportHeading: "Go beyond simply using AI.",
    support:
      "AI Visionaries helps students understand how AI works, what it can and cannot do, and how it is changing the world around them.",
    cards: [
      {
        id: "understand",
        number: "01",
        title: "Understand AI",
        body: "Explore how today's AI systems work, what they can and cannot do, and how to think critically about increasingly capable AI.",
      },
      {
        id: "explore",
        number: "02",
        title: "Explore AI in the Real World",
        body: "Discover how AI is being used in medicine, business, education, science, law, the environment, and beyond.",
      },
      {
        id: "questions",
        number: "03",
        title: "Ask Better Questions",
        body: "Explore questions around bias, privacy, misinformation, ethics, safety, and the choices people make when AI becomes part of the process.",
      },
      {
        id: "apply",
        number: "04",
        title: "Apply What You Learn",
        body: "Use AI to investigate problems, develop ideas, conduct research, build solutions, and communicate what you discover.",
      },
    ],
  },
  network: {
    heading: "Network",
    supportHeading: "Learn from people beyond your classroom.",
    support:
      "AI Visionaries connects students with people who are studying, building, applying, and thinking about AI in the real world.",
    nodes: [
      {
        id: "students",
        title: "Students",
        body: "Learn from peers through presentations, discussions, shared projects, and conversations about AI.",
      },
      {
        id: "experts",
        title: "Experts",
        body: "Hear from researchers, entrepreneurs, engineers, professionals, and others working with AI in different fields.",
      },
      {
        id: "community",
        title: "Community",
        body: "Build relationships with students and organizations that share an interest in AI.",
      },
    ],
  },
  compete: {
    heading: "Compete",
    supportHeading: "Put your ideas to the test.",
    support:
      "Research questions, develop projects, communicate what you discover, and compete alongside other students.",
    steps: [
      {
        id: "explore",
        number: "01",
        title: "Explore",
        body: "Find a question worth asking.",
      },
      {
        id: "build",
        number: "02",
        title: "Build",
        body: "Research it, develop an idea, or create something around it.",
      },
      {
        id: "compete",
        number: "03",
        title: "Compete",
        body: "Put your thinking to the test and share what you discover.",
      },
    ],
  },
  closing: {
    heading: "Every high school. Everywhere.",
    support:
      "AI Visionaries started with one high school. The goal is to build a community of AI Visionaries in high schools around the world—giving students everywhere a place to learn, network, compete, and help shape what comes next.",
    statement: "An AI Visionaries club\nin every high school\nin the world.",
  },
};
