import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { PlaylistProvider } from "@/context/PlaylistContext";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import NowPlayingPanel from "@/components/layout/NowPlayingPanel";
import MobileNav from "@/components/layout/MobileNav";
import MiniPlayer from "@/components/layout/MiniPlayer";
import PageWrapper from "@/components/layout/PageWrapper";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Andy Nguyen — Product Manager Portfolio",
  description:
    "Andy Nguyen is a product manager and UCSD student. Explore his projects, experience, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} bg-spotify-black`}>
      <body className="bg-spotify-black text-white font-[family-name:var(--font-dm-sans)] antialiased">
        <PlaylistProvider>
          <Sidebar />
          <TopBar />
          <NowPlayingPanel />
          <MobileNav />
          <MiniPlayer />

          {/* Main scrollable area — responsive margins */}
          <div className="ml-0 md:ml-[72px] mr-0 md:mr-[320px] pt-16 pb-[112px] md:pb-0 min-h-screen">
            <PageWrapper>{children}</PageWrapper>
          </div>
        </PlaylistProvider>
      </body>
    </html>
  );
}
