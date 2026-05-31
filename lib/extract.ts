import { create } from "youtube-dl-exec";

// In production (Vercel), we don't need a custom path if the binary is in the path
// but youtube-dl-exec usually manages this. 
const youtubedl = create(process.env.YTDLP_PATH || undefined);

export interface VideoFormat {
  format_id: string;
  ext: string;
  resolution: string;
  filesize?: number;
  url: string;
  vcodec: string;
  acodec: string;
  hasVideo: boolean;
  hasAudio: boolean;
  qualityLabel?: string;
}

export interface VideoInfo {
  id: string;
  title: string;
  thumbnail: string;
  duration: number;
  uploader: string;
  formats: VideoFormat[];
}

export async function extractVideoInfo(url: string): Promise<VideoInfo> {
  try {
    const output = await youtubedl(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      addHeader: [
        'referer:youtube.com',
        'user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      ]
    });

    const info = output as any;

    // Filter and map formats
    const formats: VideoFormat[] = (info.formats || [])
      .filter((f: any) => f.url && (f.vcodec !== "none" || f.acodec !== "none"))
      .map((f: any) => ({
        format_id: f.format_id,
        ext: f.ext,
        resolution: f.resolution !== "audio only" ? f.resolution : "Audio",
        filesize: f.filesize || f.filesize_approx,
        url: f.url,
        vcodec: f.vcodec,
        acodec: f.acodec,
        hasVideo: f.vcodec !== "none",
        hasAudio: f.acodec !== "none",
        qualityLabel: f.format_note || f.resolution,
      }))
      // Sort by best quality, preferring formats with both audio and video
      .sort((a: VideoFormat, b: VideoFormat) => {
        if (a.hasVideo && a.hasAudio && !(b.hasVideo && b.hasAudio)) return -1;
        if (!(a.hasVideo && a.hasAudio) && b.hasVideo && b.hasAudio) return 1;
        return (b.filesize || 0) - (a.filesize || 0);
      });

    return {
      id: info.id,
      title: info.title,
      thumbnail: info.thumbnail,
      duration: info.duration,
      uploader: info.uploader || info.extractor,
      formats: formats,
    };
  } catch (error) {
    console.error("Extraction error:", error);
    throw new Error("Failed to extract video information. Please check the URL or try again later.");
  }
}
