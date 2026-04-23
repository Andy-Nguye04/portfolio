"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export const playlists = [
  { id: "1zkURkAEx18TWngQ0XYvIh", label: "Main driving playlist" },
  { id: "6cgBTzxLXW4TDbu0WmPJYH", label: "Cafe playlist" },
  { id: "7oM7wtdrqZfvLW7wk1afe8", label: "All things RnB" },
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
