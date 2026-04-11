"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Experience } from "@/data/experience";

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {experience && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-spotify-dark rounded-2xl p-8 z-50 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-spotify-muted hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: experience.color + "33", border: `2px solid ${experience.color}55` }}
              >
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: experience.color }}
                />
              </div>
              <div>
                <p className="text-white font-bold text-base">{experience.company}</p>
                <p className="text-spotify-muted text-sm">{experience.dates}</p>
              </div>
            </div>

            {/* Role */}
            <p className="text-spotify-green text-sm font-semibold mb-4">{experience.role}</p>

            {/* Description */}
            <ul className="flex flex-col gap-2">
              {experience.description.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-sm text-spotify-muted leading-relaxed">
                  <span className="text-spotify-green mt-1 flex-shrink-0">–</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
