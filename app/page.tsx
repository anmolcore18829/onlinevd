import DownloaderInput from "@/components/DownloaderInput";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
            Universal Video Downloader
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
            Download high-quality videos and audio from YouTube, TikTok, Instagram, Twitter, and 100+ other sites for free.
          </p>

          <DownloaderInput />
        </div>
      </section>

      <SupportedPlatforms />
      <HowItWorks />
      <FAQ />
      
      {/* Monetag Ad Zone 3 */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full text-center text-muted-foreground text-xs py-4 border border-dashed border-border rounded-lg bg-surface/30">
          {/* AD SLOT: Native ad */}
          Advertisement
        </div>
      </div>
    </div>
  );
}
