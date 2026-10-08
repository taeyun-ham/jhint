import { ArrowRight } from 'lucide-react';
import { Breadcrumbs, QuoteBand, SiteLayout, usePageMeta } from './SiteChrome';

const reviewAreas = [
  {
    image: '/images/compliance/eu.svg',
    title: 'European Union',
    description: 'We address product-specific EU compliance requirements for the intended market.',
  },
  {
    image: '/images/compliance/us.svg',
    title: 'United States',
    description: 'We coordinate applicable FDA and MoCRA registration, listing and documentation steps for the product.',
  },
  {
    image: '/images/compliance/gmp.svg',
    title: 'Manufacturing practice',
    description: 'Our cosmetics are manufactured in accordance with Good Manufacturing Practices (GMP) and ISO 22716 guidelines.',
  },
  {
    image: '/images/compliance/korea.svg',
    title: 'Korean requirements',
    description: 'We arrange applicable Korean manufacturing and product documentation for the selected production route.',
  },
  {
    image: '/images/compliance/halal.svg',
    title: 'Special requirements',
    description: 'Where available, we can plan a suitable formulation and manufacturing route for halal certification.',
  },
];

export default function CompliancePage() {
  usePageMeta(
    'Cosmetics Quality & Compliance Approach | JH International',
    'Learn how JH International approaches manufacturing controls, product testing, market requirements and project documentation for Korean cosmetics OEM and ODM projects.',
    '/compliance',
  );

  return (
    <SiteLayout>
      <article className="compliance-page">
        <header className="compliance-hero">
          <Breadcrumbs current="Compliance" />
          <div className="compliance-hero-content">
            <span className="compliance-rule" aria-hidden="true" />
            <p className="eyebrow">JH INTERNATIONAL / QUALITY &amp; COMPLIANCE</p>
            <h1>OUR<br />COMPLIANCE</h1>
            <p className="compliance-intro">JH International plans and develops cosmetics manufactured in CGMP- and ISO 22716-certified facilities registered with the U.S. FDA. For the U.S. market, we support applicable cosmetic product listing; for the European Union, we prepare each product to meet the requirements of Regulation (EC) No 1223/2009, including a product-specific safety assessment. Our health supplements are produced in GMP-certified facilities in accordance with applicable food safety standards. Our skin care and cosmetic products undergo product-specific safety assessment and testing. We do not conduct animal testing at any stage of our cosmetics or health-supplement production. Where requested, we support halal-compliant production routes for suitable formulations.</p>
          </div>
          <div className="compliance-review" aria-label="Compliance review areas">
            {reviewAreas.map((area) => (
              <section key={area.title}>
                <img src={area.image} alt={`${area.title} compliance illustration`} width="160" height="108" />
                <h2>{area.title}</h2>
                <p>{area.description}</p>
              </section>
            ))}
          </div>
        </header>

        <section className="compliance-details" aria-labelledby="compliance-details-title">
          <div className="compliance-details-heading">
            <p className="eyebrow">WHAT WE CONFIRM</p>
            <h2 id="compliance-details-title">The right evidence<br />for each project.</h2>
          </div>
          <div className="compliance-details-copy">
            <p>Product categories, manufacturing facilities and target markets do not all share the same requirements. During development, we clarify which party is responsible for testing, registration or notification, labelling, claims and import procedures.</p>
            <p>Facility certifications, product-specific claims and supporting documents are verified for each production site and final product scope. We do not present a registration, a quality standard or a facility credential as an approval of every product.</p>
            <div className="compliance-note">
              <strong>Need a specific certificate or document?</strong>
              <p>Tell us the sales country, product category and required evidence in your brief. We can then confirm availability and responsibilities before quotation or production.</p>
              <a className="text-link" href="/inquiry">DISCUSS YOUR REQUIREMENTS <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>
        <QuoteBand compact />
      </article>
    </SiteLayout>
  );
}
