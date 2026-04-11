"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { experience } from "@/data/experience";
import ArtistCard from "@/components/cards/ArtistCard";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function TopArtists() {
  const shown = experience.slice(0, 5);

  return (
    <section className="flex flex-col gap-4">
      {/* Section header */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-white font-bold text-2xl">Work Experience</h2>
          <p className="text-[#B3B3B3] text-xs">The companies that shaped me</p>
        </div>
        <Link
          href="/experience"
          className="text-[#B3B3B3] text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors"
        >
          Show all
        </Link>
      </div>

      {/* Cards row */}
      <div className="flex flex-row gap-6 overflow-x-auto pb-2 scrollbar-none">
        {shown.map((exp, i) => (
          <motion.div
            key={exp.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex-shrink-0"
          >
            <ArtistCard experience={exp} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
