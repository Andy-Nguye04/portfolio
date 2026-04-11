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
    id: "wells-fargo",
    company: "Wells Fargo",
    role: "Software Engineer Intern",
    dates: "Jun 2024 – Aug 2024",
    description: [
      "Placeholder description for Wells Fargo experience.",
      "Built internal tooling using React and Java Spring Boot.",
      "Collaborated with cross-functional teams on enterprise-scale systems.",
    ],
    logo: "/logos/wells-fargo.png",
    color: "#D71E28",
  },
];
