export interface Experience {
  id: string;
  company: string;
  role: string;
  dates: string;
  description: string[];
  logo: string;
  color: string;
}

export const experience: Experience[] = [
  {
    id: "no-j",
    company: "No Jumper Cafe",
    role: "Co-Founder",
    dates: "Mar 2026 – Present",
    description: [
      "Mixing new drinks.",
    ],
    logo: "/logos/no-j.png",
    color: "#21880cff",
  },
  {
    id: "wells-fargo",
    company: "Wells Fargo",
    role: "Product Data Analyst Intern",
    dates: "Jun 2025 – Aug 2025",
    description: [
      "Led cross-functional team of 6 (PMs, engineers, data scientists) to define requirements, prioritize features, and ship ML-driven pricing tool, improving vehicle valuation accuracy from R²: 0.45 → 0.82 and shaping $1.3M+ partnership",
      "Redefined KPI framework for repossessions and automated decisions rules, reducing costs by 20% and increasing revenue by 25% through faster, data-driven execution",
      "Developed Python pipelines to unify 100k+ repossession records across 6 datasets with 50% lower processing time",
      "Partnered with PMs, engineers, subject matter experts, and data scientists to automate repossession decisions with partner Carfax; presented recommendations to 20+ senior leaders to influence future repossession strategies and Carfax adoption"
    ],
    logo: "/logos/wells-fargo.png",
    color: "#D71E28",
  },
  {
    id: "ucsd",
    company: "University of California, San Diego",
    role: "Product Intern",
    dates: "Sep 2024 – Jun 2025",
    description: [
      "Built and launched dashboards used by 20+ counselors and thousands of students to track career outcomes.",
      "Integrated survey and system data pipelines, enabling iterative improvements to UCSD’s First Destination Survey."
    ],
    logo: "/logos/ucsd.png",
    color: "#241adeff",
  },
  {
    id: "aicella",
    company: "AiCella",
    role: "Data Science Intern",
    dates: "Jan 2023 – Mar 2023",
    description: [
      "Helped oncology patients and physicians make sense of complex cancer therapy data by building intuitive dashboards translating 7 AI models into actionable insights - directly impacting treatment decisions for real people",
      "Created interactive dashboards that empowered 15 physicians and researchers to interpret therapy results",
      "Presented platform at JPMorgan Healthcare Week, generating interest from 3 potential partners"
    ],
    logo: "/logos/aicella.png",
    color: "#10e8e5ff",
  },
];
