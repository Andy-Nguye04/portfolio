"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { Experience } from "@/data/experience";
import ExperienceModal from "@/components/modals/ExperienceModal";

interface ArtistCardProps {
  experience: Experience;
}

export default function ArtistCard({ experience }: ArtistCardProps) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
        className="flex flex-col items-center gap-3 p-4 rounded-lg cursor-pointer transition-colors duration-200"
        style={{ backgroundColor: hovered ? "#2A2A2A" : "transparent" }}
      >
        {/* Logo with play button overlay */}
        <div className="relative w-[180px] h-[180px] flex-shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden bg-spotify-dark relative">
            <Image
              src={experience.logo}
              alt={experience.company}
              fill
              className="object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Fallback color circle */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: experience.color + "44" }}
            />
          </div>

          {/* Play button */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-spotify-green flex items-center justify-center shadow-lg"
          >
            <Play size={16} fill="black" className="text-black ml-0.5" />
          </motion.div>
        </div>

        {/* Company name */}
        <p className="text-white text-sm font-bold text-center leading-tight">
          {experience.company}
        </p>

        {/* Role */}
        <p className="text-spotify-muted text-xs text-center leading-tight">
          {experience.role}
        </p>
      </motion.div>

      <ExperienceModal
        experience={modalOpen ? experience : null}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
