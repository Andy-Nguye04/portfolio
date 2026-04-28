import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeft, GitBranch, MoreHorizontal, Play } from "lucide-react";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="flex flex-col min-h-screen">
      {/* Back button */}
      <div className="px-10 pt-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-spotify-muted hover:text-white transition-colors text-sm"
        >
          <ChevronLeft size={16} />
          Back
        </Link>
      </div>

      {/* Gradient header */}
      <div
        className="px-10 pt-8 pb-10"
        style={{
          background: `linear-gradient(to bottom, ${project.color}cc 0%, ${project.color}44 60%, #191414 100%)`,
        }}
      >
        <div className="flex items-end gap-6">
          {/* Project image */}
          <div
            className="relative w-[232px] h-[232px] rounded-md flex-shrink-0 overflow-hidden"
            style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.6)" }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"

            />
            {/* Fallback */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${project.color}88, #121212)` }}
            />
          </div>

          {/* Project info */}
          <div className="flex flex-col gap-2 pb-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
              Playlist
            </p>
            <h1 className="text-white font-bold leading-none"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              {project.name}
            </h1>
            <p className="text-spotify-muted text-sm max-w-md leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center gap-1 text-sm mt-1">
              <span className="text-white font-semibold">By Andy</span>
              <span className="text-spotify-muted">•</span>
              <span className="text-spotify-muted">
                {project.techStack.length} feature{project.techStack.length !== 1 ? "s" : ""}
              </span>
              <span className="text-spotify-muted">•</span>
              <span className="text-spotify-muted">{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="px-10 py-6 flex items-center gap-6">
        {/* Play / Live */}
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-spotify-green flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-lg"
          >
            <Play size={24} fill="black" className="text-black ml-1" />
          </Link>
        ) : (
          <button
            disabled
            className="w-14 h-14 rounded-full bg-spotify-green/40 flex items-center justify-center cursor-not-allowed"
          >
            <Play size={24} fill="black" className="text-black ml-1 opacity-50" />
          </button>
        )}

        {/* GitHub */}
        {project.githubUrl ? (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-spotify-muted hover:text-white transition-colors"
          >
            <GitBranch size={28} />
          </Link>
        ) : (
          <span className="text-spotify-muted/30 cursor-not-allowed">
            <GitBranch size={28} />
          </span>
        )}

        {/* More options */}
        <button className="text-spotify-muted hover:text-white transition-colors">
          <MoreHorizontal size={28} />
        </button>
      </div>

      {/* Tech stack track list */}
      <div className="px-10 pb-16">
        {/* Column headers */}
        <div className="grid grid-cols-[32px_1fr_1fr_32px] gap-4 px-4 pb-3 border-b border-[#2A2A2A] text-spotify-muted text-xs uppercase tracking-widest">
          <span className="text-right">#</span>
          <span>Technology</span>
          <span>Category</span>
          <span>—</span>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          {project.techStack.map((tech, i) => (
            <div
              key={tech.name}
              className="grid grid-cols-[32px_1fr_1fr_32px] gap-4 px-4 py-3 rounded-md transition-colors hover:bg-[#2A2A2A] cursor-default"
            >
              <span className="text-spotify-muted text-sm text-right self-center tabular-nums">
                {i + 1}
              </span>
              <span className="text-white text-sm self-center font-medium">{tech.name}</span>
              <span className="text-spotify-muted text-sm self-center">{tech.category}</span>
              <span className="text-spotify-muted text-sm self-center">—</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
