import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import SupportedPlatforms from "@/components/SupportedPlatforms";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How it Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn how to use FreeVidOnline to save your favorite videos in just a few simple steps.
          </p>
        </div>
      </section>

      <HowItWorks />
      
      <div className="py-16">
        <SupportedPlatforms />
      </div>

      <div className="bg-muted/30 py-16">
        <FAQ />
      </div>
    </div>
  );
}
