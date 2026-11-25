import { ArrowRight, ClipboardCheck, ListOrdered, Rabbit, Route, ShieldCheck, Type, type LucideIcon } from 'lucide-react';
import { Breadcrumbs, QuoteBand, SiteLayout, usePageMeta } from './SiteChrome';

// C-2 시설 신뢰 띠
const facilityStandards: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: 'CGMP & ISO 22716 Certified',
    description: 'Every cosmetic production run is manufactured under strict international Good Manufacturing Practice standards, with dedicated GMP facilities available for health supplements.',
  },
  {
    icon: Rabbit,
    title: 'Cruelty-Free Commitment',
    description: 'Zero animal testing is conducted at any stage of raw material sourcing, R&D formulation, or finished product manufacturing.',
  },
  {
    icon: Route,
    title: 'Halal & Specialty Pathways',
    description: 'Where required by your target market, we structure eligible formulations and production routes to meet Halal certification standards.',
  },
];

// C-3 지역별 지원
const marketSupport = [
  {
    code: 'US',
    title: 'United States (FDA & MoCRA Ready)',
    description: 'We manufacture in MoCRA-compliant, FDA-registered Korean facilities and support cosmetic facility registration, product listing, safety substantiation, and U.S. labeling requirements.',
  },
  {
    code: 'EU · UK',
    title: 'European Union & UK (CPSR & PIF)',
    description: 'We partner directly with accredited regulatory compliance specialists to prepare full Product Information Files (PIF) and Cosmetic Product Safety Reports (CPSR) under Regulation (EC) No 1223/2009.',
  },
  {
    code: 'AU · NZ',
    title: 'Australia & New Zealand (AICIS / EPA)',
    description: "We compile ingredient-level disclosures, safety dossiers, and export documentation aligned with Australia's AICIS chemical rules (plus TGA pathways for therapeutic sun care) and New Zealand's EPA Cosmetic Products Group Standard.",
  },
  {
    code: 'UAE · GCC',
    title: 'Middle East & UAE',
    description: 'Extensive export experience supporting product registration, Municipality/ESMA compliance requirements, Certificates of Free Sale (CFS), and Halal-compatible pathways across the UAE and GCC.',
  },
  {
    code: 'GLOBAL',
    title: 'Asia, Africa, LATAM & Central Asia',
    description: 'Full export dossier compilation—including ingredient breakdowns, stability data, and legalized trade certificates—tailored to local customs and health authority rules worldwide.',
  },
  {
    code: 'KR',
    title: 'South Korea (MFDS) & Global Export',
    description: 'Complete Korean Ministry of Food and Drug Safety (MFDS) product documentation, Certificates of Free Sale (CFS), and Certificates of Origin for smooth international customs clearance.',
  },
];

// C-4 컴플라이언스 관리 항목
const governanceItems = [
  { label: 'Technical & Formula Dossiers:', body: 'Full INCI breakdowns, quantitative formulas, Certificates of Analysis (COA), Safety Data Sheets (SDS), and Product Information File (PIF) support.' },
  { label: 'Safety, Stability & Label Testing:', body: 'Product-specific stability, packaging compatibility, microbiological screening, preservative efficacy (challenge) testing, and market-specific INCI/claim reviews.' },
  { label: 'Export & Trade Certificates:', body: 'Korean Ministry of Food and Drug Safety (MFDS) certificates, Certificates of Free Sale (CFS), Certificates of Origin, and embassy legalization support.' },
  { label: 'Clear Responsibility Alignment:', body: 'Upfront division of regulatory duties between JH International, your testing partners, and your local Responsible Person or importer for seamless market entry (including EU CPNP, UK SCPN, and US MoCRA).' },
];

// C-5 포장 컴플라이언스
const packagingItems: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: ClipboardCheck, title: 'Mandatory Label Elements', body: 'Verification of net weight/volume formats, batch/lot coding, Period After Opening (PAO) or expiration dates, manufacturer/importer details, and required safety warnings.' },
  { icon: ListOrdered, title: 'INCI & Ingredient Formatting', body: 'Accurate ingredient lists ordered by concentration, allergen disclosures, and colorant index (CI) numbering aligned with local nomenclature.' },
  { icon: Type, title: 'Claims & Typography Check', body: 'Screening front-of-pack marketing claims, font size minimums, and mandatory regulatory icons (e.g., e-mark, recycling symbols, sun protection ratings).' },
];

export default function CompliancePage() {
  usePageMeta(
    'Global Cosmetics Regulatory Compliance | JH International',
    'Korean cosmetics OEM/ODM in CGMP, ISO 22716 and FDA-registered facilities, with FDA/MoCRA, EU CPSR/PIF, MFDS and export documents for global market entry.',
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
            <h1>Global regulatory readiness built for worldwide market entry.</h1>
            <p className="compliance-intro">JH International plans and manufactures cosmetics in CGMP-, ISO 22716-, and U.S. FDA-registered facilities in South Korea. Whether you are launching in North America, Europe, Australia and New Zealand, the Middle East, Asia, Africa, LATAM, or Central Asia, we compile complete technical and export documentation to support seamless market entry anywhere in the world.</p>
          </div>
          <div className="compliance-review compliance-standards" aria-label="Facility standards">
            {facilityStandards.map((item) => (
              <section key={item.title}>
                <item.icon className="compliance-icon" size={28} strokeWidth={1.6} aria-hidden="true" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </section>
            ))}
          </div>
        </header>

        <section className="compliance-markets" aria-labelledby="compliance-markets-title">
          <div className="section-intro"><p className="eyebrow">GLOBAL MARKET SUPPORT</p><h2 id="compliance-markets-title">Compliance documentation tailored to every region.</h2></div>
          <div className="compliance-market-grid">
            {marketSupport.map((market) => (
              <article key={market.title}>
                <span className="compliance-region-code" aria-hidden="true">{market.code}</span>
                <h3>{market.title}</h3>
                <p>{market.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="compliance-details" aria-labelledby="compliance-details-title">
          <div className="compliance-details-heading">
            <p className="eyebrow">COMPLIANCE GOVERNANCE</p>
            <h2 id="compliance-details-title">The right evidence<br />for each project.</h2>
            <p>Regulatory requirements vary by formula, manufacturing site, and target market. Before production begins, we verify exact facility credentials—such as ISO 22716 (GMP) and FDA registration—for your assigned site and define responsibilities for testing, registration, labeling, and import procedures. This ensures every credential matches your final product scope rather than relying on blanket claims.</p>
            <a className="button dark" href="/inquiry">DISCUSS YOUR REQUIREMENTS <ArrowRight size={18} /></a>
          </div>
          <ol className="compliance-governance">
            {governanceItems.map((item, index) => (
              <li key={item.label}><span>{String(index + 1).padStart(2, '0')}</span><p><strong>{item.label}</strong> {item.body}</p></li>
            ))}
          </ol>
        </section>

        <section className="compliance-packaging" aria-labelledby="compliance-packaging-title">
          <div className="compliance-packaging-intro">
            <p className="eyebrow">PACKAGING COMPLIANCE</p>
            <h2 id="compliance-packaging-title">Market-ready packaging, artwork review, and localized translations.</h2>
            <p>Packaging compliance goes beyond translating text—it requires meeting strict regional rules on mandatory disclosures, INCI formatting, symbol usage, and bilingual layouts. Before printing begins, we review your packaging die lines and artwork against destination market regulations to prevent customs holds and costly reprints.</p>
          </div>
          <h3 className="compliance-packaging-label">Global Packaging &amp; Artwork Review</h3>
          <div className="compliance-packaging-grid">
            {packagingItems.map((item, index) => (
              <section key={item.title}>
                <item.icon className="compliance-icon" size={28} strokeWidth={1.6} aria-hidden="true" />
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </section>
            ))}
          </div>
        </section>
        <QuoteBand
          compact
          title="Tell us what you're building."
          body="Share your product scope, target markets, estimated volumes, packaging direction, and launch timeline. Our Korean R&D and regulatory team will review your brief and outline feasibility, compliance steps, and next actions."
        />
      </article>
    </SiteLayout>
  );
}
