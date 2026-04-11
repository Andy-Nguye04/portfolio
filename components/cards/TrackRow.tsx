"use client";

import { useState } from "react";
import {
  GitBranch,
  Link2,
  FileText,
  Mail,
  Sparkles,
  Play,
  ExternalLink,
  Download,
  LucideIcon,
} from "lucide-react";
import { QuickLink } from "@/data/links";

const iconMap: Record<string, LucideIcon> = {
  Github: GitBranch,
  Linkedin: Link2,
  FileText,
  Mail,
  Sparkles,
};

const iconColors: Record<string, string> = {
  github: "#333333",
  linkedin: "#0077B5",
  resume: "#1DB954",
  email: "#EA4335",
  vividai: "#6C47FF",
};

interface TrackRowProps {
  link: QuickLink;
  isLast: boolean;
}

export default function TrackRow({ link, isLast }: TrackRowProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[link.icon] ?? ExternalLink;
  const bgColor = iconColors[link.id] ?? "#444444";

  const linkProps = link.isDownload
    ? { href: link.href, download: true }
    : { href: link.href, target: "_blank", rel: "noopener noreferrer" };

  return (
    <a
      {...linkProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-4 px-4 py-3 transition-colors duration-150 ${
        !isLast ? "border-b border-[#2A2A2A]" : ""
      }`}
      style={{ backgroundColor: hovered ? "#2A2A2A" : "transparent" }}
    >
      {/* Track number / play icon */}
      <div className="w-5 flex items-center justify-center flex-shrink-0">
        {hovered ? (
          <Play size={14} fill="#1DB954" className="text-spotify-green" />
        ) : (
          <span className="text-spotify-muted text-sm tabular-nums">{link.number}</span>
        )}
      </div>

      {/* Icon thumbnail */}
      <div
        className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <Icon size={18} className="text-white" />
      </div>

      {/* Title + subtitle */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">{link.title}</p>
        <p className="text-spotify-muted text-xs truncate">{link.subtitle}</p>
      </div>

      {/* Right: action label */}
      <div className="flex items-center gap-2 flex-shrink-0 text-spotify-muted">
        {link.isDownload ? (
          <>
            <Download size={14} />
            <span className="text-xs">Save</span>
          </>
        ) : (
          <>
            <ExternalLink size={14} />
            <span className="text-xs">Open</span>
          </>
        )}
      </div>
    </a>
  );
}
