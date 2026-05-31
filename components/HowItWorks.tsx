import { Link as LinkIcon, SlidersHorizontal, DownloadCloud } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download your favorite videos in three simple steps. No software installation required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
              <LinkIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Paste URL</h3>
            <p className="text-muted-foreground text-sm">
              Copy the video link from YouTube, TikTok, or any supported platform and paste it into the search box above.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
              <SlidersHorizontal className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Choose Quality</h3>
            <p className="text-muted-foreground text-sm">
              Select your preferred video format (MP4, WEBM) and resolution (1080p, 4K) or extract audio only (MP3).
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
              <DownloadCloud className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Download</h3>
            <p className="text-muted-foreground text-sm">
              Click the download button and your file will start saving to your device instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
