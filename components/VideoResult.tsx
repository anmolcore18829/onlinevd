"use client";

import { VideoInfo } from "@/lib/extract";
import { formatDuration } from "@/lib/format-utils";
import Image from "next/image";
import QualityGrid from "./QualityGrid";
import { Card, CardContent } from "@/components/ui/Card";
import { detectPlatform } from "@/lib/detect-platform";

export default function VideoResult({ videoInfo, originalUrl }: { videoInfo: VideoInfo, originalUrl: string }) {
  const platform = detectPlatform(originalUrl);

  return (
    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="overflow-hidden border-border bg-surface/50 backdrop-blur">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div className="md:col-span-1 flex flex-col gap-4">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
                {videoInfo.thumbnail ? (
                  <Image 
                    src={videoInfo.thumbnail} 
                    alt={videoInfo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">No Thumbnail</span>
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs rounded text-white font-medium">
                  {formatDuration(videoInfo.duration)}
                </div>
                <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 text-xs rounded font-bold uppercase">
                  {platform}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg line-clamp-2" title={videoInfo.title}>
                  {videoInfo.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  By {videoInfo.uploader}
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <QualityGrid formats={videoInfo.formats} />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Monetag Ad Zone 2 */}
      <div className="mt-8 text-center text-muted-foreground text-xs py-4 border border-dashed border-border rounded-lg bg-surface/30">
        {/* AD SLOT: 300x250 rectangle */}
        Advertisement
      </div>
    </div>
  );
}
