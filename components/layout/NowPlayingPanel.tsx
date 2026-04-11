"use client";

import { usePlaylist } from "@/context/PlaylistContext";

export default function NowPlayingPanel() {
  const { activeId, setActiveId, playlists } = usePlaylist();

  return (
    <aside className="hidden md:flex fixed top-0 right-0 h-screen w-[320px] bg-[#121212] border-l border-[#2A2A2A] flex-col z-20">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <p className="text-xs font-semibold tracking-widest uppercase text-spotify-muted">
          Now Playing
        </p>
      </div>

      {/* Spotify Embed */}
      <div className="px-3">
        <iframe
          src={`https://open.spotify.com/embed/playlist/${activeId}?utm_source=generator`}
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        />
      </div>

      {/* Playlist Selectors */}
      <div className="flex flex-col gap-2 px-4 pt-4">
        {playlists.map((playlist) => (
          <button
            key={playlist.id}
            onClick={() => setActiveId(playlist.id)}
            className={`w-full text-left text-sm px-4 py-2 rounded-lg transition-colors ${
              activeId === playlist.id
                ? "bg-spotify-dark text-white"
                : "text-spotify-muted hover:text-white hover:bg-spotify-dark/60"
            }`}
          >
            {playlist.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
