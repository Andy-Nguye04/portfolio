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
    id: "no-j",
    slug: "no-j",
    name: "NO J Cafe",
    description:
      "Basketball themed matcha cafe pop-up, coming soon.",
    techStack: [
      { name: "Neveah Tenshi Blend", category: "Matcha Powder" },
      { name: "Jelly Fam", category: "Ube Creamtop Matcha Latte" },
      { name: "Linsanity", category: "Jasmine Milk Matcha Latte" },
      { name: "Green Giant", category: "Matcha Latte" },
      { name: "Shaqilicious", category: "Hojicha Latte" },
    ],
    image: "/images/no-j.png",
    color: "#048911ff",
    year: 2026,
    githubUrl: undefined,
    liveUrl: "https://vividai.app",
    featured: true,
  },
  {
    id: "crave",
    slug: "crave",
    name: "Crave",
    description:
      "Crave is a project made for the UCLA GLITCH X Google DeepMind Hackathon. Crave is an app that helps turn users forgotten recipes playlist into real life meals. Gemini Live powers Crave which is a live-action sous chef that will walk users through the whole step of any recipe video they want to make. Save, rate, and share your recipes with other users and turn that doomscrolling into real food.",
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "Python", category: "Language" },
      { name: "Gemini Flash 2.5", category: "API" },
      { name: "Gemini Live", category: "API" },
      { name: "Gemini Veo", category: "API" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Supabase", category: "Data" },
    ],
    image: "/images/vividai.png",
    color: "#0d9509ff",
    year: 2026,
    githubUrl: undefined,
    liveUrl: "https://vividai.app",
    featured: true,
  },
  {
    id: "vividai",
    slug: "vividai",
    name: "VividAI",
    description:
      "An AI-powered platform for generating and editing vivid visual content. Placeholder description.",
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "JavaScript", category: "Language" },
      { name: "OpenAI", category: "API" },
      { name: "Tavily", category: "API" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Supabase", category: "Data" },
    ],
    image: "/images/vividai.png",
    color: "#6C47FF",
    year: 2024,
    githubUrl: undefined,
    liveUrl: "https://vividai.app",
    featured: true,
  },
  {
    id: "wfInternProject",
    slug: "wfInternProject",
    name: "Wells Fargo Internship Project",
    description:
      "Led a team of 3 interns to build LightGBM Model to accurately label profitable reposession vehicles for Wells Fargo. R²: 0.45 → 0.82.",
    techStack: [
      { name: "Python", category: "Language" },
      { name: "Microsoft Excel", category: "Data" },
      { name: "LightGBM", category: "Machine Learning Model" },
      { name: "Linear Regression", category: "Machine Learning Model" },
    ],
    image: "/images/wf-project.png",
    color: "#e21212ff",
    year: 2025,
    githubUrl: undefined,
    liveUrl: "https://vividai.app",
    featured: true,
  },
  {
    id: "dpoy",
    slug: "dpoy",
    name: "Predicting NBA Defensive Player of the Year: A Data Driven Approach",
    description:
      "Led a 5-person team to design, implement, and evaluate predictive models (Linear Regression, SVM, Decision Tree) to forecast NBA DPOY winners with 99% accuracy across historical seasons. Presented results as a product-style insights dashboard, allowing stakeholders to explore prediction factors.",
    techStack: [
      { name: "Python", category: "Language" },
      { name: "Web Scraping", category: "Data" },
      { name: "SVM", category: "Machine Learning Model" },
      { name: "Linear Regression", category: "Machine Learning Model" },
      { name: "Decision Tree", category: "Machine Learning Model" },

    ],
    image: "/images/dpoy.png",
    color: "#efe80aff",
    year: 2026,
    githubUrl: undefined,
    liveUrl: "https://vividai.app",
    featured: true,
  },
];
