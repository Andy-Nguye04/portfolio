"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { projects } from "@/data/projects";
import PlaylistCard from "@/components/cards/PlaylistCard";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: i * 0.07 },
  }),
};

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="px-10 py-10 flex flex-col gap-8">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1 text-spotify-muted hover:text-white transition-colors text-sm w-fit"
      >
        <ChevronLeft size={16} />
        Back
      </button>

      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-white font-bold text-3xl">All Projects</h1>
        <p className="text-spotify-muted text-sm">{projects.length} project{projects.length !== 1 ? "s" : ""}</p>
      </div>

      {/* Grid */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <PlaylistCard project={project} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
