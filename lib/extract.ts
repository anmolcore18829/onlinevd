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

// Note: Video extraction logic is now handled in the API route compatible with Edge Runtime.
// Local binary extraction with yt-dlp is not supported on Cloudflare Edge.
