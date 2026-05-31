import DownloaderInput from "@/components/DownloaderInput";
import { Video } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Downloader - Download TikTok Videos Without Watermark",
  description: "Free TikTok video downloader. Save TikTok videos in HD MP4 without any watermark quickly and easily.",
};

export default function TikTokDownloader() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <Video className="w-16 h-16 text-white mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            TikTok Video Downloader
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
            Download TikTok videos without watermark in HD quality. 100% free, fast, and works on all devices.
          </p>

          <DownloaderInput />
        </div>
      </section>
    </div>
  );
}
