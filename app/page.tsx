import ProfileHero from "@/components/profile/ProfileHero";
import TopArtists from "@/components/sections/TopArtists";
import TopTracks from "@/components/sections/TopTracks";
import Playlists from "@/components/sections/Playlists";
import SectionBlock from "@/components/sections/SectionBlock";
import ContentCard from "@/components/cards/ContentCard";

const sections = [
  { title: "Featured Projects" },
  { title: "About Me" },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <ProfileHero />

      <div className="px-10 py-10 flex flex-col gap-12">
        <TopArtists />
        <Playlists />
        <TopTracks />

        {sections.map((section) => (
          <SectionBlock key={section.title} title={section.title}>
            <ContentCard>
              <p className="text-spotify-muted text-sm">Content coming soon…</p>
            </ContentCard>
          </SectionBlock>
        ))}
      </div>
    </main>
  );
}
