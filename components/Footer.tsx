import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-xl tracking-tight mb-4 block">FreeVidOnline</Link>
            <p className="text-sm text-muted-foreground">
              The universal video downloader. Save videos from your favorite platforms in high quality.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/youtube-downloader" className="hover:text-primary transition-colors">YouTube Downloader</Link></li>
              <li><Link href="/tiktok-downloader" className="hover:text-primary transition-colors">TikTok Downloader</Link></li>
              <li><Link href="/instagram-downloader" className="hover:text-primary transition-colors">Instagram Downloader</Link></li>
              <li><Link href="/facebook-video-downloader" className="hover:text-primary transition-colors">Facebook Downloader</Link></li>
              <li><Link href="/twitter-video-downloader" className="hover:text-primary transition-colors">Twitter Downloader</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center md:text-left text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} FreeVidOnline. All rights reserved.</p>
          <p className="mt-2 md:mt-0 max-w-xl md:text-right">
            FreeVidOnline is intended for personal use only. We do not store or host any videos. Users are responsible for complying with copyright laws in their jurisdiction.
          </p>
        </div>
      </div>
    </footer>
  );
}
