import type { Program } from "@/lib/types/content";

/**
 * Program entries use only authenticated copy from project docs
 * (homepage-content.md, brand-story.md, site-architecture.md).
 *
 * Arrays stay empty until real activities, projects, etc. exist.
 * Never invent workshops, testimonials, or opportunities.
 */
export const programs: Program[] = [
  {
    id: "program-ai-for-seniors",
    name: "AI For Seniors",
    slug: "ai-for-seniors",
    shortDescription:
      "Helping older adults discover practical ways to use AI with confidence through patient, hands-on workshops.",
    longDescription:
      "Helping older adults discover practical ways to use AI with confidence through patient, hands-on workshops.",
    heroImage: null,
    mission:
      "Helping older adults discover practical ways to use AI with confidence through patient, hands-on workshops.",
    vision: null,
    whyExists:
      "While helping their grandfather (“Daadu”) and several of his friends begin using AI, Naaisha and Sayoni realized that many older adults were excited about AI but simply didn’t know where to start.",
    originNote:
      "AI For Seniors began at home — with patience, curiosity, and the belief that older adults belong in the future of AI.",
    activities: [],
    projects: [],
    leadershipItems: [],
    competitions: [],
    opportunities: [],
    featuredWorkshopIds: [],
    featuredTestimonialIds: [],
  },
  {
    id: "program-girls-applying-ai",
    name: "Girls Applying AI",
    slug: "girls-applying-ai",
    shortDescription:
      "Building a welcoming community where girls explore, create, and lead with Artificial Intelligence.",
    longDescription:
      "Building a welcoming community where girls explore, create, and lead with Artificial Intelligence.",
    heroImage: null,
    mission:
      "Building a welcoming community where girls explore, create, and lead with Artificial Intelligence.",
    vision: null,
    whyExists:
      "Through conversations with her younger sister, Sayoni, and many of their friends, they noticed that girls were curious about AI but often lacked welcoming spaces where they could confidently learn, experiment, and build.",
    originNote:
      "Girls Applying AI grew from a simple observation: curiosity was already there. The welcoming space was not.",
    activities: [],
    projects: [],
    leadershipItems: [],
    competitions: [],
    opportunities: [],
    featuredWorkshopIds: [],
    featuredTestimonialIds: [],
  },
  {
    id: "program-ai-visionaries",
    name: "AI Visionaries",
    slug: "ai-visionaries",
    shortDescription:
      "Empowering students to discover how AI can solve real-world problems across industries while developing leadership and innovation.",
    longDescription:
      "Empowering students to discover how AI can solve real-world problems across industries while developing leadership and innovation.",
    heroImage: null,
    mission:
      "Empowering students to discover how AI can solve real-world problems across industries while developing leadership and innovation.",
    vision: null,
    whyExists:
      "Naaisha founded AI Visionaries as a high school freshman after realizing that many students wanted to explore how Artificial Intelligence could be applied beyond coding.",
    originNote:
      "AI Visionaries is where the movement began — a student-led space to explore how AI can be applied in the real world.",
    activities: [],
    projects: [],
    leadershipItems: [],
    competitions: [],
    opportunities: [],
    featuredWorkshopIds: [],
    featuredTestimonialIds: [],
  },
];
