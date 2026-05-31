import { Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a question, feedback, or need help with a download? Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col items-center text-center p-6 border border-border rounded-2xl bg-card">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Mail className="text-primary w-6 h-6" />
          </div>
          <h3 className="font-semibold mb-2">Email Support</h3>
          <p className="text-sm text-muted-foreground">support@freevidonline.com</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 border border-border rounded-2xl bg-card">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <MessageSquare className="text-primary w-6 h-6" />
          </div>
          <h3 className="font-semibold mb-2">Feature Request</h3>
          <p className="text-sm text-muted-foreground">feedback@freevidonline.com</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 border border-border rounded-2xl bg-card">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <ShieldCheck className="text-primary w-6 h-6" />
          </div>
          <h3 className="font-semibold mb-2">Legal/DMCA</h3>
          <p className="text-sm text-muted-foreground">legal@freevidonline.com</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto border border-border rounded-3xl p-8 bg-card shadow-xl">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <Input id="subject" placeholder="How can we help?" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea 
              id="message" 
              rows={5} 
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Tell us more about your inquiry..."
            ></textarea>
          </div>
          <Button className="w-full py-6 text-base font-semibold">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
