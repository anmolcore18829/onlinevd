"use client";

import { VideoFormat } from "@/lib/extract";
import { formatFileSize } from "@/lib/format-utils";
import { Button } from "@/components/ui/Button";
import { Download, Volume2, Video } from "lucide-react";

export default function QualityGrid({ formats }: { formats: VideoFormat[] }) {
  const videoFormats = formats.filter(f => f.hasVideo);
  const audioFormats = formats.filter(f => !f.hasVideo && f.hasAudio);

  const handleDownload = (url: string) => {
    // In a real app we might proxy this, but for direct links:
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-6">
      {videoFormats.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Video className="w-5 h-5 text-accent" /> Video Quality
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {videoFormats.map((format, i) => (
              <div key={i} className="flex flex-col p-3 rounded-lg border border-border bg-surface hover:bg-surfaceHover transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{format.resolution || format.qualityLabel}</span>
                  <span className="text-xs text-muted-foreground uppercase bg-background px-2 py-1 rounded border border-border">{format.ext}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {formatFileSize(format.filesize)} {format.hasAudio ? "" : "(No Audio)"}
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleDownload(format.url)}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {audioFormats.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 mt-6">
            <Volume2 className="w-5 h-5 text-accent" /> Audio Only
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {audioFormats.map((format, i) => (
              <div key={i} className="flex flex-col p-3 rounded-lg border border-border bg-surface hover:bg-surfaceHover transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Audio ({format.ext})</span>
                  <span className="text-xs text-muted-foreground uppercase bg-background px-2 py-1 rounded border border-border">{format.acodec !== "none" ? format.acodec : format.ext}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {formatFileSize(format.filesize)}
                </div>
                <Button 
                  size="sm" 
                  onClick={() => handleDownload(format.url)}
                  className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  <Download className="w-4 h-4" /> Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
