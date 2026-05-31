export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">About FreeVidOnline</h1>
      
      <div className="prose dark:prose-invert max-w-none space-y-6 text-lg text-muted-foreground">
        <p>
          Welcome to <span className="text-primary font-semibold">FreeVidOnline</span>, your ultimate destination for high-quality video downloads from across the web. Our mission is simple: to provide a fast, reliable, and completely free tool that allows you to save your favorite content for offline viewing.
        </p>

        <h2 className="text-2xl font-bold text-foreground">Why We Started</h2>
        <p>
          In an era where content is everywhere but connectivity isn't, we realized the need for a simple, no-nonsense video downloader. Whether you're traveling, have a slow internet connection, or just want to keep a permanent copy of a memorable video, FreeVidOnline is here to help.
        </p>

        <h2 className="text-2xl font-bold text-foreground">Our Technology</h2>
        <p>
          We use advanced extraction algorithms that support over 100+ platforms, including YouTube, TikTok, Instagram, Facebook, and Twitter. Our system automatically detects the best available quality, from 720p to 4K, and provides direct download links without intrusive ads or malware.
        </p>

        <h2 className="text-2xl font-bold text-foreground">Our Commitment</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-foreground font-medium">Free Forever:</span> No hidden fees, no limits, and no registration required.</li>
          <li><span className="text-foreground font-medium">Privacy First:</span> We don't track your downloads or store your personal data.</li>
          <li><span className="text-foreground font-medium">No Software Required:</span> Everything happens in your browser.</li>
        </ul>

        <p className="pt-8 text-center italic">
          Thank you for choosing FreeVidOnline. Happy downloading!
        </p>
      </div>
    </div>
  );
}
