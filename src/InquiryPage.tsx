import InquiryForm from './InquiryForm';
import { Breadcrumbs, SiteLayout, usePageMeta } from './SiteChrome';

export default function InquiryPage() {
  usePageMeta('Request a Korean Cosmetics OEM ODM Quotation | JH International', 'Submit a skin care, makeup, or hair and body care OEM/ODM product development brief to JH International in South Korea.', '/inquiry');
  return (
    <SiteLayout>
      <div className="inquiry-page">
        <section className="inquiry-hero">
          <div>
            <Breadcrumbs current="Inquiry" />
            <p className="eyebrow">R&amp;D PRODUCT DEVELOPMENT INQUIRY</p>
            <h1>Let’s build a clear<br /><em>product brief.</em></h1>
          </div>
          <div className="inquiry-hero-copy">
            <p>Tell us what you want to create. We’ll review your brief to determine the right development route, manufacturing direction, and commercial next steps.</p>
            <ul><li>Product &amp; target market</li><li>Quantity &amp; target price</li><li>Formula &amp; sensory direction</li><li>Packaging &amp; launch timing</li></ul>
          </div>
        </section>
        <InquiryForm />
      </div>
    </SiteLayout>
  );
}
