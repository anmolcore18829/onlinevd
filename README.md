# FreeVidOnline - Universal Video Downloader

FreeVidOnline is a production-ready, Vercel-inspired Next.js 14 application designed for downloading videos across major platforms (YouTube, TikTok, Facebook, Instagram, Twitter, etc.).

## Tech Stack
- Framework: **Next.js 14 (App Router)**
- Styling: **Tailwind CSS + framer-motion**
- API Integration: **youtube-dl-exec** (Wrapper for yt-dlp)
- Icons: **lucide-react**

## Features
- Universal support for all major social media platforms.
- Extracts Video (MP4/WEBM/MKV) and Audio (MP3/M4A).
- Provides direct download links without server-side file hosting.
- Clean, dark, Vercel-inspired UI.
- Fully responsive and SEO-optimized.
- Pre-configured ad placement zones for monetization (e.g. Monetag).

## Setup Instructions

### 1. Prerequisites
- Node.js 18+
- `yt-dlp` must be installed on your system or server.
  - MacOS: `brew install yt-dlp`
  - Linux: `sudo apt install yt-dlp` or `wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O /usr/local/bin/yt-dlp && chmod a+rx /usr/local/bin/yt-dlp`
  - Windows: Download `yt-dlp.exe` and add it to your PATH.

### 2. Installation
```bash
npm install
```

### 3. Running Locally
```bash
npm run dev
```

### 4. Building for Production
```bash
npm run build
npm start
```

## Monetization
The application contains commented HTML sections marked with `<!-- AD SLOT -->` in components like `DownloaderInput.tsx`, `VideoResult.tsx`, and `page.tsx`. Insert your ad network scripts (like Monetag or Google AdSense) in these spots.

## Disclaimer
This software is intended for educational purposes and personal use. Do not use this software to download copyrighted material without permission. The authors are not responsible for how this software is used.
