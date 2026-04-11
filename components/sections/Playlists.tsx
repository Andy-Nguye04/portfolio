"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import PlaylistCard from "@/components/cards/PlaylistCard";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Playlists() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="flex flex-col gap-4">
      {/* Section header */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-white font-bold text-2xl">Projects</h2>
          <p className="text-[#B3B3B3] text-xs">Things I&apos;ve built</p>
        </div>
        <Link
          href="/projects"
          className="text-[#B3B3B3] text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors"
        >
          Show all
        </Link>
      </div>

      {/* Cards row */}
      <div className="flex flex-row gap-6 overflow-x-auto pb-2 scrollbar-none">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <PlaylistCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
