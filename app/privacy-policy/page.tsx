import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - FreeVidOnline",
  description: "Privacy Policy for FreeVidOnline. Learn how we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-invert prose-blue max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: May 31, 2026</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>Welcome to FreeVidOnline. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data We Collect</h2>
        <p>We do not require you to create an account or provide personal identification information to use our service. However, we automatically collect certain technical information:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>IP Addresses:</strong> Used solely for rate limiting to prevent abuse of our API and to ensure fair usage for all users.</li>
          <li><strong>Browser Type and OS:</strong> For analytics and ensuring website compatibility.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, to improve our service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Video Storage Policy</h2>
        <p><strong>We do NOT store or host any videos.</strong> Our service merely acts as a conduit, fetching direct download links from the respective platforms. The files are downloaded directly from the source servers to your device.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Advertising</h2>
        <p>We use cookies to enhance your browsing experience. Additionally, we use third-party advertising networks (such as Monetag) to serve ads when you visit our website. These companies may use aggregated information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Links</h2>
        <p>Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@freevidonline.com.</p>
      </div>
    </div>
  );
}
