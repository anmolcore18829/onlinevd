import DownloaderInput from "@/components/DownloaderInput";
import { Youtube } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Video Downloader - Download YouTube Videos to MP4/MP3",
  description: "Free online YouTube video downloader. Save YouTube videos in 1080p, 4K MP4 or convert to MP3 audio format easily.",
};

export default function YouTubeDownloader() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <Youtube className="w-16 h-16 text-red-500 mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            YouTube Video Downloader
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
            Download your favorite YouTube videos in high quality MP4 or convert them to MP3. Fast, free, and secure.
          </p>

          <DownloaderInput />
        </div>
      </section>

      <section className="py-16 bg-surface/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">How to download YouTube videos?</h2>
          <div className="space-y-6 text-muted-foreground">
            <p><strong>Step 1:</strong> Go to YouTube and copy the link of the video you want to download.</p>
            <p><strong>Step 2:</strong> Paste the copied link into the search box at the top of this page and click "Get Download Links".</p>
            <p><strong>Step 3:</strong> Wait a few seconds for our tool to process the video. You will then see a list of available formats (MP4, MP3) and qualities (1080p, 720p, etc.).</p>
            <p><strong>Step 4:</strong> Click the "Download" button next to your preferred quality to save the file to your device.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
