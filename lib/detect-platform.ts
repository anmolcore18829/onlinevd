export type Platform = "youtube" | "tiktok" | "facebook" | "instagram" | "twitter" | "pinterest" | "reddit" | "vimeo" | "dailymotion" | "unknown";

export function detectPlatform(url: string): Platform {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.toLowerCase();

    if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) return "youtube";
    if (hostname.includes("tiktok.com")) return "tiktok";
    if (hostname.includes("facebook.com") || hostname.includes("fb.watch")) return "facebook";
    if (hostname.includes("instagram.com")) return "instagram";
    if (hostname.includes("twitter.com") || hostname.includes("x.com")) return "twitter";
    if (hostname.includes("pinterest.com") || hostname.includes("pin.it")) return "pinterest";
    if (hostname.includes("reddit.com")) return "reddit";
    if (hostname.includes("vimeo.com")) return "vimeo";
    if (hostname.includes("dailymotion.com") || hostname.includes("dai.ly")) return "dailymotion";

    return "unknown";
  } catch (error) {
    return "unknown";
  }
}
