import type { TeamMember } from "@/lib/types/content";

/**
 * Confirmed leadership. Bios are taken from each person's
 * public/media/people/executives/<name>/profile.md — do not invent copy.
 * Board members are added here when confirmed (category: "board").
 */
export const team: TeamMember[] = [
  {
    id: "team-naaisha-agarwal",
    name: "Naaisha Agarwal",
    role: "Co-Founder",
    photo: {
      src: "/media/people/executives/naaisha-agarwal/portrait.jpg",
      alt: "Portrait of Naaisha Agarwal",
    },
    bio: "Naaisha Agarwal believes technology only matters when it expands human potential. Passionate about artificial intelligence, entrepreneurship, and bringing people together, she enjoys building communities where curiosity replaces fear and people of every generation feel empowered to learn and create. Whether launching new ideas or solving meaningful problems, she is driven by a simple belief: everyone belongs in the future of AI.",
    linkedIn: null,
    email: null,
    category: "co-founder",
  },
  {
    id: "team-sayoni-agarwal",
    name: "Sayoni Agarwal",
    role: "Co-Founder",
    photo: {
      src: "/media/people/executives/sayoni-agarwal/portrait.jpg",
      alt: "Portrait of Sayoni Agarwal",
    },
    bio: "Sayoni Agarwal believes the best ideas are the ones that make life better for others. Passionate about science, technology, and public service, she enjoys exploring how AI and thoughtful leadership can help build stronger, more inclusive communities. A 2026 Massachusetts State AI Champion in the Presidential AI Challenge and a Project 351 Student Ambassador, she brings curiosity, compassion, and a deep commitment to making a meaningful difference.",
    linkedIn: null,
    email: null,
    category: "co-founder",
  },
  {
    id: "team-aashvik-agarwal",
    name: "Aashvik Agarwal",
    role: "Vice President, North Carolina",
    photo: {
      src: "/media/people/executives/aashvik-agarwal/portrait.jpg",
      alt: "Portrait of Aashvik Agarwal",
    },
    bio: "Aashvik Agarwal believes curiosity, creativity, and teamwork can turn ideas into something real. Passionate about STEM, entrepreneurship, and community service, he serves as President of his school’s Rocketry Team and enjoys exploring math, technology, languages, and music. An FBLA state competitor and MathCounts regional competitor, he also volunteers through the Cary Teen Council and at a senior center, bringing a spirit of curiosity, leadership, and service to AI Onward.",
    linkedIn: null,
    email: null,
    category: "executive",
  },
  {
    id: "team-ayaan-agarwal",
    name: "Ayaan Agarwal",
    role: "Vice President, Greater London Area",
    photo: {
      src: "/media/people/executives/ayaan-agarwal/portrait.jpeg",
      alt: "Portrait of Ayaan Agarwal",
    },
    bio: "Ayaan Agarwal believes that curiosity and confidence can open doors to new ideas and opportunities. A secondary student at a leading UK grammar school, he enjoys exploring science, debating, and team sports, and has won the Maidenhead Science Competition. A competition-winning debater and rugby player, he also plays guitar and brings a spirit of curiosity, communication, and teamwork to AI Onward.",
    linkedIn: null,
    email: null,
    category: "executive",
  },
];
