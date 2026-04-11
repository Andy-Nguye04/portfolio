"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export const playlists = [
  { id: "37i9dQZF1DXcBWIGoYBM5M", label: "Top Hits" },
  { id: "37i9dQZF1DX0XUsuxWHRQd", label: "RapCaviar" },
  { id: "37i9dQZF1DX4sWSpwq3LiO", label: "Peaceful Piano" },
];

interface PlaylistContextType {
  activeId: string;
  activeLabel: string;
  setActiveId: (id: string) => void;
  playlists: typeof playlists;
}

const PlaylistContext = createContext<PlaylistContextType | null>(null);

export function PlaylistProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState(playlists[0].id);
  const active = playlists.find((p) => p.id === activeId) ?? playlists[0];
  return (
    <PlaylistContext.Provider
      value={{ activeId, activeLabel: active.label, setActiveId, playlists }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}

export function usePlaylist() {
  const ctx = useContext(PlaylistContext);
  if (!ctx) throw new Error("usePlaylist must be used within PlaylistProvider");
  return ctx;
}
