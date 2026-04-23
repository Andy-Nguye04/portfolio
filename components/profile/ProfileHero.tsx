"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
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
      <div className="px-10 pt-12 pb-10 flex flex-row items-end gap-6">
        {/* Profile photo */}
        <motion.div variants={fadeSlideUp} className="flex-shrink-0">
          <Link href="/about" className="block w-fit">
            <div
              className="w-[200px] h-[200px] rounded-full overflow-hidden border border-white/10 hover:opacity-90 transition-opacity relative"
              style={{
                boxShadow: "0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="/images/andy-hero.JPG"
                alt="Andy Nguyen"
                fill
                className="object-cover object-[center_70%]"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Text content */}
        <div className="flex flex-col gap-2 pb-2">
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
            <span className="text-white font-medium">UCSD &apos;2026</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
