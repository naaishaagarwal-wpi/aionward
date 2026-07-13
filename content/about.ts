/**
 * About page copy — sourced from docs/brand-story.md.
 * Team members live in content/team.ts (empty until confirmed).
 */

export type AboutContent = {
  title: string;
  eyebrow: string;
  lead: string;
  beginning: string[];
  arcLabel: string;
  culmination: string;
  mission: string;
  vision: string;
  beliefs: string[];
  invitation: string;
};

export const aboutContent: AboutContent = {
  title: "About AI Onward",
  eyebrow: "Our story",
  lead: "AI Onward did not begin as an organization. It began with three observations.",
  beginning: [
    "The first came when Naaisha founded AI Visionaries as a high school freshman after realizing that many students wanted to explore how Artificial Intelligence could be applied beyond coding.",
    "The second came through conversations with her younger sister, Sayoni, and many of their friends. They noticed that girls were curious about AI but often lacked welcoming spaces where they could confidently learn, experiment, and build.",
    "The third came much closer to home. While helping their grandfather (“Daadu”) and several of his friends begin using AI, Naaisha and Sayoni realized that many older adults were excited about AI but simply didn’t know where to start.",
  ],
  arcLabel: "AI Visionaries → Girls Applying AI → AI For Seniors",
  culmination: "AI Onward",
  mission:
    "To help people of every generation confidently understand, explore, and apply Artificial Intelligence.",
  vision:
    "A future where AI is understood not by a select few, but by everyone willing to learn.",
  beliefs: [
    "Curiosity matters more than expertise.",
    "Learning is better together.",
    "Technology should strengthen human connection.",
    "AI should be approachable.",
    "Everyone belongs in the future of AI.",
  ],
  invitation:
    "Whether you are taking your first step with AI or helping others take theirs, there is a place for you at AI Onward.",
};
