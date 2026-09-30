import InquiryForm from './InquiryForm';
import { Breadcrumbs, SiteLayout, usePageMeta } from './SiteChrome';

export default function InquiryPage() {
  usePageMeta('Request a Korean Cosmetics OEM ODM Quotation | JH International', 'Submit a skincare, hair care or makeup OEM/ODM product development brief to JH International in South Korea.', '/inquiry');
  return (
    <SiteLayout>
      <div className="inquiry-page">
        <section className="inquiry-hero">
          <div>
            <Breadcrumbs current="Inquiry" />
            <p className="eyebrow">R&amp;D PRODUCT DEVELOPMENT INQUIRY</p>
            <h1>Build a useful<br /><em>product brief.</em></h1>
          </div>
          <div className="inquiry-hero-copy">
            <p>Tell us what you want to create. We will review your brief for the appropriate development route, manufacturing direction and next commercial steps.</p>
            <ul><li>Product and target market</li><li>Quantity and target price</li><li>Formula and sensory direction</li><li>Packaging and launch timing</li></ul>
          </div>
        </section>
        <InquiryForm />
      </div>
    </SiteLayout>
  );
}
