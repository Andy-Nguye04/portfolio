import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import HeroBanner from "@/components/profile/HeroBanner";

const skills = [
  "Data Analytics",
  "Product Management",
  "Forecasting",
  "Leadership",
  "Ownership",
  "Curiosity",
  "Innovation",
  "3PT Shooting",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "SQL",
  "PostgreSQL",
  "Git",
  "Tailwind CSS",
  "REST APIs",
  "Figma",
  "TypeScript",
];

const funFacts = [
  "I used to play Esports for League of Legends and CS:GO, I still play video games a lot, notably TeamFightTactics.",
  "I've been to a bunch of concerts and music festivals. I like to take concert photos and have seen almost all of my favorite artists.",
  "I'm learning how to bake and make matcha drinks, and one day want to open my own cafe.",
  "I would do my computer science homework while playing TeamFightTactics...",
];

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero banner */}
      <HeroBanner />

      {/* Content */}
      <div className="px-10 pb-16 flex flex-col gap-10 -mt-4">
        {/* Stat line */}
        <p className="text-spotify-muted text-sm font-medium tracking-wide">
          UCSD Class of 2026, San Diego, CA
        </p>

        {/* About section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-white font-bold text-2xl">About</h2>
          <p className="text-spotify-muted text-sm leading-relaxed max-w-2xl">
            {/* TODO: Replace with real bio */}
            Hi I&apos;m Andy a new grad from UC San Diego, I majored in Cognitive Science with a Specialization in Machine Learning
            and a Minor in Business Analytics. I&apos;m really passionate about data analytics and building good applicable products that
            positively impact users. I&apos;m also super passionate about helping those around me, music (especially festivals and I&apos;m learning
            how to DJ!), and basketball which I play avidly.
          </p>
        </section>

        {/* Skills & Tech tag cloud */}
        <section className="flex flex-col gap-4">
          <h2 className="text-white font-bold text-2xl">Skills &amp; Tech</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full text-sm text-white font-medium bg-[#2A2A2A] hover:bg-spotify-green transition-colors duration-150 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Fun Facts */}
        <section className="flex flex-col gap-4">
          <h2 className="text-white font-bold text-2xl">Fun Facts</h2>
          <ul className="flex flex-col gap-3">
            {funFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-spotify-green font-bold mt-0.5 flex-shrink-0">
                  ♪
                </span>
                <span className="text-spotify-muted leading-relaxed">{fact}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Back to Profile */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-spotify-muted hover:text-white transition-colors text-sm font-medium w-fit"
        >
          <ChevronLeft size={18} />
          Back to Profile
        </Link>
      </div>
    </main>
  );
}
