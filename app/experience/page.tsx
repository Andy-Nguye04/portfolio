"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { experience } from "@/data/experience";
import ArtistCard from "@/components/cards/ArtistCard";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: i * 0.07 },
  }),
};

export default function ExperiencePage() {
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
        <h1 className="text-white font-bold text-3xl">All Experiences</h1>
        <p className="text-spotify-muted text-sm">{experience.length} experience{experience.length !== 1 ? "s" : ""}</p>
      </div>

      {/* Grid */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
      >
        {experience.map((experience, i) => (
          <motion.div
            key={experience.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <ArtistCard experience={experience} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

