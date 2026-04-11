"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, FolderOpen, Briefcase, User } from "lucide-react";

const navItems = [
  { href: "/", icon: House, label: "Home" },
  { href: "/projects", icon: FolderOpen, label: "Projects" },
  { href: "/experience", icon: Briefcase, label: "Experience" },
  { href: "/about", icon: User, label: "About" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[60px] bg-[#121212] border-t border-[#2A2A2A] flex items-center justify-around z-30 md:hidden">
      {navItems.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-1 px-4 py-1 transition-colors ${
              isActive ? "text-white" : "text-spotify-muted hover:text-white"
            }`}
          >
            <Icon size={20} />
            <span className="text-[10px] font-medium">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
