"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this video downloader completely free?",
    answer: "Yes! FreeVidOnline is 100% free to use. There are no hidden fees, subscriptions, or limits on the number of videos you can download."
  },
  {
    question: "Do I need to install any software or extension?",
    answer: "No installation is required. Our downloader works entirely in your web browser, making it safe and compatible with all devices (PC, Mac, Android, iOS)."
  },
  {
    question: "Which video formats and qualities are supported?",
    answer: "We support a wide range of formats including MP4, WEBM, and MKV for video, and MP3, M4A for audio. You can download videos in qualities ranging from 144p up to 8K, depending on the original video's source."
  },
  {
    question: "Can I download videos from TikTok without the watermark?",
    answer: "Yes, our TikTok downloader automatically extracts the clean, watermark-free version of the video whenever possible."
  },
  {
    question: "Where are the downloaded videos saved on my device?",
    answer: "Files are typically saved in your device's default 'Downloads' folder. On Windows/Mac, you can press Ctrl+J or Cmd+J in your browser to view your download history."
  },
  {
    question: "Is it legal to download videos from social media?",
    answer: "Downloading videos for personal, offline viewing is generally acceptable. However, you should not download copyrighted material for distribution or commercial use without the creator's permission. Please respect copyright laws in your jurisdiction."
  },
  {
    question: "Why do some high-quality videos (4K/1080p) have no sound?",
    answer: "Platforms like YouTube separate the high-quality video and audio streams to save bandwidth. Our tool automatically merges them back together for you, but in rare cases where merging fails, you might see them listed separately."
  },
  {
    question: "Are my downloads anonymous and safe?",
    answer: "Absolutely. We do not store your download history or keep copies of the videos on our servers. Your privacy and security are guaranteed."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Everything you need to know about using our free video downloader.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-medium hover:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
