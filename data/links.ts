export interface QuickLink {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  href: string;
  icon: string;
  isDownload?: boolean;
}

export const links: QuickLink[] = [
  {
    id: "github",
    number: 1,
    title: "GitHub",
    subtitle: "View my repositories",
    href: "https://github.com/Andy-Nguye04",
    icon: "Github",
  },
  {
    id: "linkedin",
    number: 2,
    title: "LinkedIn",
    subtitle: "Connect with me",
    href: "https://www.linkedin.com/in/andy-nguyen-a514492a3/",
    icon: "Linkedin",
  },
  {
    id: "resume",
    number: 3,
    title: "Resume",
    subtitle: "Download my resume",
    href: "/resume.pdf",
    icon: "FileText",
    isDownload: true,
  },
  {
    id: "email",
    number: 4,
    title: "Email",
    subtitle: "Get in touch",
    href: "mailto:andynguyen.prof0]@gmail.com",
    icon: "Mail",
  },
  {
    id: "crave",
    number: 5,
    title: "Crave",
    subtitle: "My latest project",
    href: "https://vividai.app", /**Switch it to the linkedin post link */
    icon: "Sparkles",
  },
];
