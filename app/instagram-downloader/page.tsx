import DownloaderInput from "@/components/DownloaderInput";
import { Instagram } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Downloader - Download IG Reels, Photos, & Videos",
  description: "Free Instagram downloader. Save Instagram reels, videos, IGTV, and photos in high quality to your phone or computer.",
};

export default function InstagramDownloader() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <Instagram className="w-16 h-16 text-pink-500 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            Instagram Downloader
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
            The easiest way to download Instagram Reels, IGTV videos, and posts in high resolution.
          </p>

          <DownloaderInput />
        </div>
      </section>
    </div>
  );
}
