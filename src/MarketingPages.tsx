import { pageHeroImages } from './heroImages';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowRight, ArrowUpRight, Check, CircleDot, ClipboardCheck, Lightbulb, Droplets, Boxes, Factory, Truck, SoapDispenserDroplet, MessageCircle, Globe2, PackageCheck, ShieldCheck } from 'lucide-react';
import { Breadcrumbs, QuoteBand, RelatedLinks, SiteLayout, usePageMeta } from './SiteChrome';
import { categories, faqs, processSteps, type MarketingPage } from './siteData';

const capabilities = [
  { title: 'OEM / ODM', copy: 'Select a proven turnkey formula or build a custom development roadmap tailored to your brand from scratch.', href: '/oem-odm' },
  { title: 'Formulation & sampling', copy: 'Refine ingredients, texture, finish, and clinical performance through structured lab testing and sample reviews.', href: '/formulation' },
  { title: 'Packaging & filling', copy: 'State-of-the-art machinery, automated filling, component sourcing, stability testing, packaging and assembly.', href: '/packaging' },
  { title: 'Export & compliance', copy: 'Coordinate global regulatory compliance checks, air or sea freight booking, and export-ready shipping documentation.', href: '/export' },
];

const manufacturingImages = [
  { number: '03', title: 'Manufacturing facility', description: 'Certified Korean cosmetics production facility and controlled manufacturing environment.', src: '/images/manufacturing/korean-cosmetics-oem-manufacturer-factory-optimized.webp', alt: 'Modern Korean cosmetics OEM manufacturing facility exterior' },
  { number: '04', title: 'Mixing & compounding', description: 'Industrial stainless-steel mixing tanks and hygienic formulation equipment.', src: '/images/manufacturing/korean-cosmetics-mixing-tank-korea-v5-optimized.webp', alt: 'Stainless steel cosmetic formulation mixing tanks in a clean production facility' },
  { number: '05', title: 'Automated filling lines', description: 'High-precision cosmetic filling for bottles, tubes, jars, and custom formats.', src: '/images/manufacturing/korean-cosmetics-filling-machine-korea-v3-optimized.webp', alt: 'Automated Korean cosmetics filling line operating with four matching nozzles and connected supply hoses' },
  { number: '06', title: 'Packaging & assembly', description: 'Automated labeling, batch coding, secondary packaging, and final product assembly.', src: '/images/manufacturing/korean-cosmetics-packaging-line-korea-v6-optimized.webp', alt: 'One worker placing a cosmetic jar into a snug retail carton on a uniform-width packaging conveyor' },
  { number: '07', title: 'Quality assurance & testing', description: 'Rigorous inspection of bulk formulations, packaging components, and finished goods.', src: '/images/manufacturing/korean-cosmetics-quality-control-korea-v2-optimized.webp', alt: 'Masked quality control specialist inspecting cosmetic products in a windowless laboratory' },
  { number: '08', title: 'Export-ready finished goods', description: 'Completed cosmetic products, master cartons, and export-ready shipments.', src: '/images/manufacturing/korean-cosmetics-finished-products-korea-optimized.webp', alt: 'Finished cosmetic products and export-ready packaging cartons' },
];


function pageHeroStyle(src: string): CSSProperties {
  return { '--page-hero-image': `url("${src}")` } as CSSProperties;
}

function EvidenceImage({ number, title, description, src, alt, className = '' }: { number: string; title: string; description: string; src: string; alt: string; className?: string }) {
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const image = imageRef.current;
    if (!image || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        image.loading = 'eager';
        observer.disconnect();
      }
    }, { rootMargin: '1000px 0px' });
    observer.observe(image);
    return () => observer.disconnect();
  }, [src]);
  return (
    <figure className={`evidence-image ${className}`}>
      <img ref={imageRef} src={src} alt={alt} loading="lazy" decoding="async" width="1672" height="940" />
      <figcaption><strong>{title}</strong><p>{description}</p></figcaption>
    </figure>
  );
}

export function HomePage() {
  usePageMeta(
    'Korean Cosmetics OEM & ODM Manufacturer | JH International',
    'JH International supports beauty brands with Korean cosmetics OEM/ODM formulation, samples, packaging, filling, finished-product manufacturing and export.',
    '/',
    {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Organization', '@id': 'https://jhint.kr/#organization', name: 'JH International', url: 'https://jhint.kr', areaServed: 'Worldwide', description: 'Korean cosmetics OEM and ODM product development and manufacturing partner for international beauty brands.' },
        { '@type': 'WebSite', '@id': 'https://jhint.kr/#website', name: 'JH International', url: 'https://jhint.kr', publisher: { '@id': 'https://jhint.kr/#organization' } },
      ],
    },
  );

  return (
    <SiteLayout>
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Korean Cosmetics OEM/ODM Manufacture</p>
          <h1>Formulate.<br />Manufacture.<br /><em>Scale your brand.</em></h1>
          <p>Turnkey K-beauty product development for global brands—from custom formulation and prototyping to packaging, filling, and export-ready delivery.</p>
          <div className="hero-actions"><a className="button dark" href="/inquiry">BOOK A CONSULTATION <ArrowRight size={18} /></a><a className="text-link" href="/process">DISCOVER OUR PROCESS <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="home-hero-visual" role="img" aria-label="JH International premium cosmetic packaging concept" />
      </section>

      <section className="positioning-section">
        <p className="eyebrow light">COMPLETE KOREAN MADE COSMETIC MANUFACTURING</p>
        <div><h2>One seamless path from initial brief to finished product.</h2><p>JH International guides every client through each critical step to turn your beauty concept into a market-ready product—from laboratorial investigation to formulation, sampling, and regulatory compliance, packaging &amp; design, quality assurance, filling, and export preparation.</p></div>
      </section>

      <section className="capabilities-section">
        <div className="section-intro"><p className="eyebrow">OUR MANUFACTURING CAPABILITIES</p><h2>Clear support at every stage.</h2></div>
        <div className="capability-grid">{capabilities.map((item, index) => <a href={item.href} key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p><ArrowUpRight /></a>)}</div>
      </section>

      <section className="category-section">
        <div className="section-intro light"><p className="eyebrow light">PRODUCT CATEGORIES</p><h2>Five categories.<br /><em>Many ways to differentiate.</em></h2></div>
        <div className="category-list">{categories.map((category) => <a href={category.slug} key={category.slug}><span>{category.number}</span><div><h3>{category.title}</h3><p>{category.homeDescription}</p></div><ArrowRight /></a>)}</div>
      </section>

      <section className="journey-section">
        <div><p className="eyebrow">FROM CONCEPT TO FINISHED PRODUCT</p><h2>A transparent process built for international buyers.</h2><p>Each stage flows seamlessly into the next, with every project milestone approved before production moves forward.</p><a className="text-link" href="/process">VIEW ALL 10 STEPS <ArrowUpRight size={16} /></a></div>
        <ol>{['Formulation', 'Sample', 'Packaging', 'Production', 'Filling', 'Assembly', 'Export'].map((step, i) => <li key={step}><span>0{i + 1}</span>{step}</li>)}</ol>
      </section>

      <section className="rnd-section" id="rnd-image">
        <div className="rnd-panel"><EvidenceImage number="02" title="Korean cosmetic R&D laboratory" description="Formula research, ingredient evaluation and sample preparation for beauty product development." src="/images/manufacturing/korean-skincare-oem-formulation-laboratory-v2-optimized.webp" alt="Masked cosmetic formulation scientist working in a modern Korean research laboratory" className="rnd-image" /></div>
        <div className="rnd-copy"><p>Successful product development balances brand positioning with formulation, packaging, MOQs, lead times, and target market compliance.</p><ul><li><Check />BRIEF &amp; BENCHMARK REVIEW</li><li><Check />FORMULATION &amp; PROTOTYPE DIRECTION</li><li><Check />SAMPLE EVALUATION &amp; REVISIONS</li><li><Check />PACKAGING COMPATIBILITY TESTING</li></ul><a className="button dark" href="/formulation">FORMULATION DEVELOPMENT <ArrowRight size={18} /></a></div>
      </section>

      <section className="manufacturing-proof-section" id="manufacturing-images">
        <div className="section-intro"><p className="eyebrow">MANUFACTURING CAPABILITY</p><h2>Explore the end-to-end journey from production to finished goods.</h2></div>
        <p className="image-plan-note">Take a closer look at our fully certified Korean manufacturing facilities, automated production lines, and quality-controlled assembly.</p>
        <div className="manufacturing-image-grid">{manufacturingImages.map((image) => <EvidenceImage key={image.number} {...image} />)}</div>
      </section>

      <section className="trust-section">
        <div><p className="eyebrow light">WHY INTERNATIONAL BRANDS WORK WITH JH</p><h2>Practical solutions.<br />A transparent process.<br /><em>One dedicated partner.</em></h2></div>
        <div className="trust-points"><article><Globe2 /><h3>Global market alignment</h3><p>Every project begins with your target market, consumer profile, price point, MOQ, and launch timeline.</p></article><article><ShieldCheck /><h3>Tailored quality &amp; compliance</h3><p>Safety testing, regulatory documentation, and quality assurance protocols are verified specifically for your formulation and destination market.</p></article><article><PackageCheck /><h3>End-to-end integration</h3><p>Formulation, packaging, filling, assembly, and export logistics are managed as one seamless system.</p></article></div>
      </section>

      <section className="home-faq">
        <div className="section-intro"><p className="eyebrow">KOREAN COSMETICS OEM / ODM FAQ</p><h2>Buyer questions, answered clearly.</h2></div>
        <div className="faq-list">{faqs.slice(0, 5).map(([q, a], i) => <details key={q} open={i === 0}><summary><span>0{i + 1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div>
        <a className="text-link" href="/faq">VIEW ALL FREQUENTLY ASKED QUESTIONS <ArrowUpRight size={16} /></a>
      </section>
      <section className="guide-promo"><div><p className="eyebrow">BUYER GUIDES</p><h2>Compare your options before development begins.</h2></div><div><p>Compare OEM/ODM manufacturing processes, stock vs custom formulations and compatible packaging, and the key factors driving cost and timelines.</p><a className="button dark" href="/guides">EXPLORE ALL GUIDES <ArrowRight size={18} /></a></div></section>
      <QuoteBand body="Share your product category, concept, target market, order quantity, target price, packaging direction, and launch timeline. We will review your brief and outline the next steps." />
    </SiteLayout>
  );
}

export function ContentPage({ page }: { page: MarketingPage }) {
  usePageMeta(page.metaTitle, page.metaDescription, page.slug);
  return (
    <SiteLayout>
      <article className="content-page">
        <header className="page-hero has-background" style={pageHeroStyle(pageHeroImages[page.slug])}>
          <Breadcrumbs current={page.navLabel} />
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}<br /><em>{page.accent}</em></h1>
          <p className="page-intro">{page.intro}</p>
        </header>

        {page.products && <section className="format-section"><div><p className="eyebrow">PRODUCT FORMATS</p><h2>Formats we can discuss for your brief.</h2><p>Availability and development route depend on the formula, packaging, market and project scope.</p></div><ul>{page.products.map((product, i) => <li key={product}><span>{String(i + 1).padStart(2, '0')}</span>{product}</li>)}</ul></section>}

        {page.sections.map((section, sectionIndex) => (
          <section className={`editorial-section ${sectionIndex % 2 ? 'tinted' : ''}`} key={section.title}>
            <div className="editorial-heading"><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2></div>
            <div className="editorial-body">
              {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <div className="editorial-cards">{section.items.map((item, i) => <article key={item.title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>}
            </div>
          </section>
        ))}
        <RelatedLinks slugs={page.related} />
        <QuoteBand compact />
      </article>
    </SiteLayout>
  );
}

const processIcons = [
  MessageCircle, Lightbulb, Droplets, SoapDispenserDroplet, Boxes,
  ShieldCheck, Factory, PackageCheck, ClipboardCheck, Truck,
];

export function ProcessPage() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  usePageMeta('Korean Cosmetics Manufacturing Process | JH International', 'Follow the 10-step Korean cosmetics OEM and ODM process from consultation and formula development to packaging, production, inspection and export.', '/process');
  return (
    <SiteLayout><article className="content-page"><header className="page-hero has-background" style={pageHeroStyle('/images/manufacturing/korean-cosmetics-filling-machine-korea-v3-optimized.webp')}><Breadcrumbs current="Process" /><p className="eyebrow">KOREAN COSMETICS MANUFACTURING PROCESS</p><h1>From first conversation<br /><em>to export preparation.</em></h1><p className="page-intro">A transparent 10-step process helps international buyers understand what happens next, what decisions are required and where project-specific confirmation is needed.</p></header>
      <section className="process-stages" aria-labelledby="process-stages-title">
        <header className="process-stages-heading">
          <p className="eyebrow">10 STEPS / OEM &amp; ODM</p>
          <h2 id="process-stages-title">Our manufacturing process</h2>
        </header>
      <ol className="process-diagram" aria-label="OEM / ODM manufacturing stages">
        {processSteps.map(([number, title, body], index) => {
          const Icon = processIcons[index];
          return (
          <li key={title}>
            <div className="process-card" data-expanded={expandedStep === number}>
              <button className="process-card-trigger" type="button" aria-expanded={expandedStep === number} aria-controls={`process-description-${number}`} aria-describedby={`process-description-${number}`} onClick={() => setExpandedStep(expandedStep === number ? null : number)}>
                <span className="process-step-number">STEP {number}</span>
                <span className="process-icon"><Icon size={48} strokeWidth={1.5} aria-hidden="true" /></span>
                <span className="process-card-title">{title}</span>
                <span className="process-detail-hint">VIEW DETAILS <ArrowUpRight size={13} aria-hidden="true" /></span>
              </button>
              <p className="process-description" id={`process-description-${number}`}>{body}</p>
            </div>
            {index < processSteps.length - 1 && <ArrowRight className="process-connector" size={18} aria-hidden="true" />}
          </li>
          );
        })}
      </ol>
      </section>
      <RelatedLinks slugs={['/oem-odm', '/formulation', '/packaging', '/moq']} /><QuoteBand compact />
    </article></SiteLayout>
  );
}

export function FaqPage() {
  usePageMeta('Korean Cosmetics OEM ODM FAQ | JH International', 'Answers about Korean cosmetics OEM and ODM, MOQ, formulas, samples, private label, packaging, export, lead time and quotations.', '/faq', {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  });
  return (
    <SiteLayout><article className="content-page"><header className="page-hero has-background" style={pageHeroStyle('/images/manufacturing/korean-cosmetics-quality-control-korea-v2-optimized.webp')}><Breadcrumbs current="FAQ" /><p className="eyebrow">KOREAN COSMETICS OEM / ODM FAQ</p><h1>What international buyers<br /><em>need to know.</em></h1><p className="page-intro">Clear starting answers about development, MOQ, samples, packaging, manufacturing and export-related project planning.</p></header>
      <section className="faq-page-list">{faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary><span>{String(i + 1).padStart(2, '0')}</span><h2>{q}</h2><b>+</b></summary><p>{a}</p></details>)}</section>
      <RelatedLinks slugs={['/oem-odm', '/moq', '/process', '/inquiry']} /><QuoteBand compact />
    </article></SiteLayout>
  );
}

export function NotFoundPage() {
  usePageMeta('Page Not Found | JH International', 'The requested page could not be found.', window.location.pathname);
  return <SiteLayout><section className="not-found"><span>404</span><h1>We could not find that page.</h1><p>Return to the manufacturing knowledge base or start a product inquiry.</p><div><a className="button dark" href="/">BACK TO HOME</a><a className="text-link" href="/inquiry">REQUEST A QUOTE <ArrowUpRight size={16} /></a></div></section></SiteLayout>;
}
