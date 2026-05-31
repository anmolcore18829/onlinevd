import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Blog
      </Link>

      <div className="space-y-4 mb-12">
        <Badge variant="secondary" className="px-3 py-1">
          {post.category}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm">{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm">{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="aspect-video bg-muted rounded-3xl mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-bold text-2xl">
          {post.title} Image
        </div>
      </div>

      <div 
        className="prose prose-lg dark:prose-invert max-w-none 
          prose-headings:font-bold prose-headings:text-foreground 
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16 p-8 border border-border rounded-3xl bg-muted/30 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to download?</h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Start saving your favorite videos now with FreeVidOnline. Fast, free, and no registration required.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold">
            Go to Downloader
          </Button>
        </Link>
      </div>
    </article>
  );
}
