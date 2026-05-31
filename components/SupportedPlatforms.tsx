import { Youtube, Facebook, Instagram, Twitter, Video } from "lucide-react";

const platforms = [
  { name: "YouTube", icon: Youtube, color: "text-red-500", desc: "1080p, 4K, MP3" },
  { name: "TikTok", icon: Video, color: "text-white", desc: "No Watermark" },
  { name: "Instagram", icon: Instagram, color: "text-pink-500", desc: "Reels, IGTV" },
  { name: "Facebook", icon: Facebook, color: "text-blue-500", desc: "Public Videos" },
  { name: "Twitter / X", icon: Twitter, color: "text-sky-400", desc: "Videos & GIFs" },
  { name: "And more...", icon: Video, color: "text-muted-foreground", desc: "Vimeo, Reddit" },
];

export default function SupportedPlatforms() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Supported Platforms</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            FreeVidOnline works seamlessly across all major social media and video sharing platforms. Download high-quality videos with a single click.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex flex-col items-center p-6 rounded-xl border border-border bg-surface hover:bg-surfaceHover transition-colors text-center">
              <platform.icon className={`w-10 h-10 mb-3 ${platform.color}`} />
              <h3 className="font-semibold text-sm mb-1">{platform.name}</h3>
              <p className="text-xs text-muted-foreground">{platform.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
