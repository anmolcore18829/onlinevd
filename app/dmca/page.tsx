import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy - FreeVidOnline",
  description: "Digital Millennium Copyright Act (DMCA) Policy for FreeVidOnline.",
};

export default function DMCAPolicy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">DMCA Policy</h1>
      
      <div className="prose prose-invert prose-blue max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: May 31, 2026</p>

        <p>FreeVidOnline respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (DMCA). It is our policy to respond to any infringement notices and take appropriate actions.</p>
        
        <div className="bg-surface p-6 rounded-lg border border-border my-8">
          <p className="font-semibold text-lg text-accent">Important Note:</p>
          <p className="mt-2">FreeVidOnline <strong>does not host, store, or cache any video or audio files on our servers</strong>. We simply act as a search engine that finds direct URLs to files already hosted on third-party platforms (like YouTube, TikTok, Facebook, etc.).</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Notice and Takedown Procedure</h2>
        <p>If you are a copyright owner or an agent thereof and believe that any content accessed through our Service infringes upon your copyrights, you may submit a notification pursuant to the DMCA by providing our Designated Agent with the following information in writing:</p>
        
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
          <li>Identification of the copyrighted work claimed to have been infringed;</li>
          <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit us to locate the material (e.g., the specific URL on our site that provides the download link);</li>
          <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and email address;</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</li>
          <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Action</h2>
        <p>Since we do not host the files, we cannot delete them from the internet. However, upon receiving a valid DMCA notice, we will <strong>block the specific URL</strong> from being processed by our extraction engine, preventing users from generating download links for that specific video through our site.</p>
        <p>We are committed to responding to valid DMCA takedown requests within <strong>72 hours</strong>.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Designated Agent Contact</h2>
        <p>Please send your DMCA takedown notices to our Designated Agent at:</p>
        <p className="mt-2 text-accent font-medium">dmca@freevidonline.com</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Counter-Notification</h2>
        <p>If you believe that your content was blocked by mistake or misidentification, you may send a counter-notice to our Designated Agent. The counter-notice must include:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Your physical or electronic signature;</li>
          <li>Identification of the material that has been blocked;</li>
          <li>A statement under penalty of perjury that you have a good faith belief that the material was blocked as a result of mistake or misidentification;</li>
          <li>Your name, address, telephone number, and email address.</li>
        </ul>
      </div>
    </div>
  );
}
