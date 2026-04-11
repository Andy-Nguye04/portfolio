import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "Spring Boot",
  "SQL",
  "PostgreSQL",
  "Git",
  "Tailwind CSS",
  "REST APIs",
  "AWS",
  "Docker",
  "Figma",
];

const funFacts = [
  "TODO: Fun fact #1",
  "TODO: Fun fact #2",
  "TODO: Fun fact #3",
  "TODO: Fun fact #4",
];

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero banner */}
      <div className="relative w-full h-64 overflow-hidden">
        {/* Photo — replace src with real image when ready */}
        <Image
          src="/images/andy-hero.jpg"
          alt="Andy Nguyen"
          fill
          className="object-cover object-top"
          onError={undefined}
          priority
        />
        {/* Placeholder gradient when no image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #5C3A2A 0%, #3a2218 50%, #191414 100%)",
          }}
        />
        {/* Gradient overlay — fades photo to black at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 30%, rgba(25,20,20,0.7) 70%, #191414 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="px-10 pb-16 flex flex-col gap-10 -mt-4">
        {/* Stat line */}
        <p className="text-spotify-muted text-sm font-medium tracking-wide">
          UCSD Class of 20XX&nbsp;&nbsp;•&nbsp;&nbsp;San Diego, CA
        </p>

        {/* About section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-white font-bold text-2xl">About</h2>
          <p className="text-spotify-muted text-sm leading-relaxed max-w-2xl">
            {/* TODO: Replace with real bio */}
            TODO: Add a 2–3 sentence bio here. Describe your background, what
            you&apos;re passionate about, and what you&apos;re currently working
            on or studying.
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
