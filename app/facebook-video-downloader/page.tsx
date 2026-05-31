import DownloaderInput from "@/components/DownloaderInput";
import { Facebook } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook Video Downloader - Download FB Videos & Reels",
  description: "Download Facebook videos, reels, and stories in high quality MP4 format. Free online FB downloader tool.",
};

export default function FacebookDownloader() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <Facebook className="w-16 h-16 text-blue-500 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            Facebook Video Downloader
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
            Save any public Facebook video, reel, or story directly to your device in the best available quality.
          </p>

          <DownloaderInput />
        </div>
      </section>
    </div>
  );
}
