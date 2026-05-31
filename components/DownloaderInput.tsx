"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Loader2, Link as LinkIcon, Search } from "lucide-react";
import toast from "react-hot-toast";
import VideoResult from "./VideoResult";
import { VideoInfo } from "@/lib/extract";
import { detectPlatform, Platform } from "@/lib/detect-platform";
import { Badge } from "./ui/Badge";

export default function DownloaderInput() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VideoInfo | null>(null);
  const [searchedUrl, setSearchedUrl] = useState("");
  const [detectedPlatform, setDetectedPlatform] = useState<Platform>("unknown");

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUrl(val);
    if (val) {
      setDetectedPlatform(detectPlatform(val));
    } else {
      setDetectedPlatform("unknown");
    }
  };

  const handleExtract = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast.error("Please enter a valid URL");
      return;
    }

    try {
      new URL(url);
    } catch {
      toast.error("Invalid URL format");
      return;
    }

    setLoading(true);
    setResult(null);
    
    try {
      const res = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to extract video");
      }
      
      setResult(data);
      setSearchedUrl(url);
      toast.success(`${detectedPlatform !== "unknown" ? detectedPlatform.charAt(0).toUpperCase() + detectedPlatform.slice(1) : "Video"} ready for download!`);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
      <form onSubmit={handleExtract} className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex flex-col sm:flex-row items-center gap-2 bg-card p-2 rounded-2xl sm:rounded-full border border-border/50 shadow-2xl">
          <div className="flex-grow flex items-center w-full px-4 py-2 sm:py-0">
            <LinkIcon className="w-5 h-5 text-muted-foreground mr-3 shrink-0" />
            <div className="flex-grow flex flex-col items-start overflow-hidden">
              <div className="flex items-center w-full gap-2">
                <Input 
                  type="text" 
                  placeholder="Paste video URL here (YouTube, TikTok, Facebook, etc.)..." 
                  className="border-0 bg-transparent text-base sm:text-lg focus-visible:ring-0 px-0 shadow-none w-full"
                  value={url}
                  onChange={handleUrlChange}
                  disabled={loading}
                />
                {detectedPlatform !== "unknown" && (
                  <Badge variant="secondary" className="hidden sm:flex capitalize animate-in fade-in zoom-in">
                    {detectedPlatform}
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <Button 
            type="submit" 
            size="lg"
            className="w-full sm:w-auto rounded-xl sm:rounded-full h-14 px-8 text-base font-semibold shadow-lg transition-transform active:scale-95"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Search className="mr-2 h-5 w-5" />
                Download
              </>
            )}
          </Button>
        </div>
      </form>
      
      {detectedPlatform !== "unknown" && (
        <div className="sm:hidden flex justify-center -mt-4">
           <Badge variant="secondary" className="capitalize">
            Detected: {detectedPlatform}
          </Badge>
        </div>
      )}

      {/* Monetag Ad Zone 1 */}
      <div className="w-full text-center text-muted-foreground text-xs py-2 border border-dashed border-border rounded-lg bg-surface/30 hidden md:block">
        {/* AD SLOT: 728x90 leaderboard */}
        Advertisement
      </div>

      {result && <VideoResult videoInfo={result} originalUrl={searchedUrl} />}
    </div>
  );
}
