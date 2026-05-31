import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    try {
      new URL(url);
    } catch {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
    }

    // IMPORTANT: Cloudflare Workers / Edge Runtime cannot run binaries like yt-dlp.
    // You must use an external API or a specialized Edge-compatible library.
    // This is a placeholder for an external API integration.
    
    // Example: Using a public or self-hosted extraction API
    // const response = await fetch(`https://api.example.com/extract?url=${encodeURIComponent(url)}`);
    // const data = await response.json();
    
    return NextResponse.json({
      error: "Cloudflare Edge runtime does not support local video extraction with yt-dlp. Please connect an external API."
    }, { status: 501 });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
