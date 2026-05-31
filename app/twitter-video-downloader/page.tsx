import DownloaderInput from "@/components/DownloaderInput";
import { Twitter } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter Video Downloader - Download X Videos & GIFs",
  description: "Save videos and GIFs from Twitter (X) effortlessly. Free online Twitter video downloader.",
};

export default function TwitterDownloader() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <Twitter className="w-16 h-16 text-sky-400 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            Twitter Video Downloader
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
            Download your favorite Twitter (X) videos and GIFs directly to your device in MP4 format.
          </p>

          <DownloaderInput />
        </div>
      </section>
    </div>
  );
}
