import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - FreeVidOnline",
  description: "Terms of Service for using FreeVidOnline.",
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-invert prose-blue max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: May 31, 2026</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing and using FreeVidOnline ("we", "our", "us", or "the Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Personal Use Only</h2>
        <p>The Service is provided exclusively for your personal, non-commercial use. You agree not to use the Service for any commercial purpose, including without limitation, selling or distributing the downloaded content.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Copyright Compliance</h2>
        <p>FreeVidOnline is a tool for downloading publicly available, non-copyrighted or user-owned content. You agree that you will not use our Service to download copyrighted material without the express permission of the copyright owner.</p>
        <p>We respect the intellectual property rights of others and expect our users to do the same. Any use of our service to infringe on the rights of content creators is strictly prohibited.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. DMCA Compliance</h2>
        <p>Please refer to our DMCA page for information on how we handle copyright infringement notices. As we do not host any files, our ability to remove content is limited to blocking specific URLs from our extraction service.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
        <p>In no event shall FreeVidOnline, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Service Availability</h2>
        <p>We do not guarantee that our Service will be uninterrupted, timely, secure, or error-free. The extraction of videos depends on third-party platforms that may change their systems at any time.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@freevidonline.com.</p>
      </div>
    </div>
  );
}
