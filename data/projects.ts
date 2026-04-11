export interface TechItem {
  name: string;
  category: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  techStack: TechItem[];
  image: string;
  color: string;
  year: number;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "vividai",
    slug: "vividai",
    name: "VividAI",
    description:
      "An AI-powered platform for generating and editing vivid visual content. Placeholder description.",
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "OpenAI", category: "API" },
      { name: "Tailwind CSS", category: "Styling" },
    ],
    image: "/images/vividai.png",
    color: "#6C47FF",
    year: 2024,
    githubUrl: undefined,
    liveUrl: "https://vividai.app",
    featured: true,
  },
];
