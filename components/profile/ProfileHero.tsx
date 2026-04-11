"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ProfileHero() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #5C3A2A 0%, #3a2218 40%, #191414 100%)",
      }}
    >
      <div className="px-10 pt-12 pb-10 flex flex-col gap-4">
        {/* Profile photo */}
        <motion.div variants={fadeSlideUp}>
          <Link href="/about" className="block w-fit">
            <div
              className="w-[200px] h-[200px] rounded-full bg-[#5C3A2A]/60 border border-white/10 hover:opacity-90 transition-opacity"
              style={{
                boxShadow: "0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.4)",
              }}
            />
          </Link>
        </motion.div>

        {/* 'Profile' label */}
        <motion.p
          variants={fadeSlideUp}
          className="text-[12px] uppercase tracking-widest text-white font-semibold"
        >
          Profile
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeSlideUp}
          className="font-bold text-white leading-none"
          style={{ fontSize: "clamp(64px, 8vw, 96px)" }}
        >
          Andy Nguyen
        </motion.h1>

        {/* Stats row */}
        <motion.div
          variants={fadeSlideUp}
          className="flex items-center gap-2 text-sm flex-wrap"
        >
          <span className="text-white font-medium">{projects.length} Projects</span>
          <span className="text-spotify-muted">•</span>
          <span className="text-white font-medium">{experience.length} Experiences</span>
          <span className="text-spotify-muted">•</span>
          <span className="text-white font-medium">UCSD &apos;2X</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
