import ProfileHero from "@/components/profile/ProfileHero";
import TopArtists from "@/components/sections/TopArtists";
import TopTracks from "@/components/sections/TopTracks";
import Playlists from "@/components/sections/Playlists";

export default function Home() {
  return (
    <main className="flex flex-col">
      <ProfileHero />

      <div className="px-10 py-10 flex flex-col gap-12">
        <TopArtists />
        <Playlists />
        <TopTracks />
      </div>
    </main>
  );
}
