"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { Project } from "@/data/projects";

interface PlaylistCardProps {
  project: Project;
}

export default function PlaylistCard({ project }: PlaylistCardProps) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="flex flex-col gap-3 p-4 rounded-lg cursor-pointer transition-colors duration-200 flex-shrink-0 w-[200px]"
      style={{ backgroundColor: hovered ? "#2A2A2A" : "transparent" }}
    >
      {/* Square image */}
      <div className="relative w-[168px] h-[168px] rounded-md overflow-hidden flex-shrink-0"
        style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }}
      >
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-spotify-dark to-[#121212]" />
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />

        {/* Play button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-spotify-green flex items-center justify-center shadow-lg"
        >
          <Play size={16} fill="white" className="text-white ml-0.5" />
        </motion.div>
      </div>

      {/* Project name */}
      <p className="text-white text-sm font-bold leading-tight truncate">{project.name}</p>

      {/* By Andy */}
      <p className="text-spotify-muted text-xs -mt-2">By Andy</p>
    </motion.div>
  );
}
