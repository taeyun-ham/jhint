import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Breadcrumbs, QuoteBand, SiteLayout, usePageMeta } from './SiteChrome';

export const guides = [
  {
    slug: 'oem-vs-odm', title: 'OEM vs ODM cosmetics manufacturing', summary: 'Compare who brings the product specification, who develops the formula, and what to confirm before choosing a route.',
    sections: [
      { heading: 'What changes between OEM and ODM?', text: 'OEM usually begins with a brand-defined formula or detailed specification that a manufacturing partner assesses and produces. ODM generally begins earlier: the development partner helps turn a concept into a formula, samples and a finished-product specification. These terms are used differently across suppliers, so the written scope matters more than the label.' },
      { heading: 'When does each route fit?', text: 'OEM can suit a brand that already controls a tested formula and has clear manufacturing requirements. ODM can suit a team that has a consumer, benchmark and positioning in mind but needs support with formulation and product development. Both routes still need packaging, testing, quantity and target-market decisions.' },
      { heading: 'Questions to ask before a quotation', text: 'Clarify formula ownership and transfer rights, sample rounds, testing responsibility, packaging sourcing, minimum quantities, approval milestones and which party holds the final specifications. Send your current formula status and target market with the brief.' },
    ], related: ['/oem-odm', '/formulation', '/inquiry'],
  },
  {
    slug: 'oem-vs-private-label', title: 'Korean OEM vs private label cosmetics', summary: 'Understand the trade-off between a defined manufacturing specification and an established product platform.',
    sections: [
      { heading: 'A difference in starting point', text: 'An OEM project normally starts from a brand-defined product specification. Private label often starts with an available formula or product platform that can be adapted within a supplier’s options. Ask which ingredients, texture, fragrance, claims, components and artwork can actually change.' },
      { heading: 'Speed, differentiation and control', text: 'An established platform may reduce development work and may be easier to plan around available components. A more tailored OEM route can provide greater differentiation, but feasibility, validation, minimum quantities and timing need a closer review. Neither route guarantees a particular lead time or order size.' },
      { heading: 'What to put in your brief', text: 'Include reference products, target retail price, expected first order, intended market and the parts of the product that must be unique. That allows a useful comparison of available platforms and custom work.' },
    ], related: ['/oem-odm', '/moq', '/inquiry'],
  },
  {
    slug: 'stock-vs-custom-formula', title: 'Stock formula vs custom formula', summary: 'Decide how much formulation work your concept needs and which tests follow from that decision.',
    sections: [
      { heading: 'What a stock formula offers', text: 'A stock formula is an existing development platform, not a promise that every ingredient, claim or market is already approved for your project. It can be a practical starting point if its texture and performance align with your brief.' },
      { heading: 'What custom development adds', text: 'Custom formulation gives more room to shape ingredient direction, sensory feel, shade, fragrance and performance. It also introduces prototype review, revision and project-specific testing decisions. Greater customization may affect cost, quantity and launch timing.' },
      { heading: 'How to compare them', text: 'Request samples against the same benchmark and evaluate the formula in its intended package. Confirm changes allowed, intellectual-property terms, stability and compatibility work, destination-market requirements and the approval point before production.' },
    ], related: ['/formulation', '/oem-odm', '/inquiry'],
  },
  {
    slug: 'stock-vs-custom-packaging', title: 'Stock packaging vs custom packaging', summary: 'Compare component availability, brand distinction and the work required to make a pack production-ready.',
    sections: [
      { heading: 'Starting with stock components', text: 'Stock bottles, jars and tubes can give a project an available starting point. Decoration, labels or cartons may still create a distinctive presentation. Availability, colour, closure fit and decoration minimums should be confirmed for the selected component.' },
      { heading: 'Developing custom components', text: 'Custom moulds, materials, colours or applicators can make a product more distinctive, but may require tooling, component samples, higher minimums and longer sourcing time. A drawing alone does not establish filling or formula compatibility.' },
      { heading: 'Approve the complete pack', text: 'Check the formula with its intended primary package, filling method, dispensing experience, decoration, shipping protection and applicable labelling requirements before final purchase commitments.' },
    ], related: ['/packaging', '/moq', '/inquiry'],
  },
  {
    slug: 'manufacturing-process', title: 'Korean cosmetics manufacturing process', summary: 'Follow the decisions from the first product brief through samples, production and export preparation.',
    sections: [
      { heading: 'Development and approval', text: 'The brand shares the category, consumer, destination market, target price, quantity and benchmark. The development route is chosen, samples are reviewed and the formula and packaging specifications are approved.' },
      { heading: 'Manufacturing and quality', text: 'Project-appropriate testing and quality requirements are confirmed before scheduled bulk production. The approved product is filled, assembled and inspected against the agreed specification.' },
      { heading: 'Delivery preparation', text: 'Finished goods and available documentation are prepared for the agreed shipment route. Import, registration and market-entry obligations should be checked for the destination market and responsible importer.' },
    ], related: ['/process', '/formulation', '/inquiry'],
  },
  {
    slug: 'launch-cosmetic-brand-korea', title: 'How to launch a cosmetic brand with Korean manufacturing', summary: 'Build a usable product brief and plan the approvals needed before placing a production order.',
    sections: [
      { heading: 'Define the product and market', text: 'Start with the target consumer, sales country, product category, price position and a small number of reference products. Write down the performance and sensory features that matter most.' },
      { heading: 'Choose a development route', text: 'Compare an established formula and pack with a more customized route. Request samples, assess the formula in its intended packaging and agree on the scope of revisions, testing and artwork.' },
      { heading: 'Plan the commercial launch', text: 'Confirm minimum quantities by variant, the quotation scope, approval milestones, production schedule, importer responsibilities and available documentation. Your first order should reflect the whole launch plan, not just the factory unit price.' },
    ], related: ['/oem-odm', '/process', '/inquiry'],
  },
  {
    slug: 'cosmetic-manufacturing-cost', title: 'How much does cosmetic manufacturing cost in Korea?', summary: 'See which product and packaging choices change a quotation and what information makes estimates useful.',
    sections: [
      { heading: 'Why there is no universal unit price', text: 'Cost depends on formula ingredients, fill size, testing, packaging components, decoration, quantity per variant, filling and assembly. Freight, duties, registration and other market-entry costs may sit outside the manufacturing quotation.' },
      { heading: 'Compare quotations on the same basis', text: 'Check whether development, samples, tooling, artwork setup, testing, cartons, packing and delivery terms are included. A lower unit price is not directly comparable if important work is excluded.' },
      { heading: 'How to request an estimate', text: 'Send the category, formula status, target market, first-order quantity by SKU, target retail position, package reference and desired launch date. A range can then be discussed against real assumptions and revised when specifications are approved.' },
    ], related: ['/moq', '/packaging', '/inquiry'],
  },
  {
    slug: 'cosmetic-development-timeline', title: 'How long does cosmetic product development take?', summary: 'Understand the milestones and dependencies that determine a realistic launch schedule.',
    sections: [
      { heading: 'Work that happens before production', text: 'Brief review, formula selection or development, sample rounds, package sourcing, compatibility and other project-specific checks happen before a production slot can be confirmed. Each approval may depend on the result of the previous stage.' },
      { heading: 'What commonly changes the schedule', text: 'Custom components, tooling, multiple shades, sample revisions, test results, artwork changes and delayed approvals can extend timing. An available stock platform may simplify some steps, but still requires project review.' },
      { heading: 'Build a schedule backward from launch', text: 'Share the desired launch date and destination market early. Agree on decision owners, sample feedback deadlines, testing, component delivery, production and shipping milestones. The final estimate should be specific to your approved brief.' },
    ], related: ['/process', '/packaging', '/inquiry'],
  },
] as const;

export function GuidesPage() {
  usePageMeta('Korean Cosmetics OEM ODM Guides | JH International', 'Practical guides to Korean cosmetics OEM, ODM, private label, formula and packaging choices, manufacturing costs and development timelines.', '/guides');
  return <SiteLayout><article className="content-page"><header className="page-hero has-background guide-hero"><Breadcrumbs current="Guides" /><p className="eyebrow">COSMETICS MANUFACTURING GUIDES</p><h1>Research the route.<br /><em>Plan your product.</em></h1><p className="page-intro">Compare development options and understand the decisions behind a Korean cosmetics project before requesting a quotation.</p></header><section className="guide-list" aria-label="Educational guides">{guides.map((guide, index) => <a href={`/guides/${guide.slug}`} key={guide.slug}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{guide.title}</h2><p>{guide.summary}</p></div><ArrowUpRight aria-hidden="true" /></a>)}</section><QuoteBand compact /></article></SiteLayout>;
}

export function GuidePage({ guide }: { guide: (typeof guides)[number] }) {
  const path = `/guides/${guide.slug}`;
  usePageMeta(`${guide.title} | JH International`, guide.summary, path, { '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.summary, mainEntityOfPage: `https://jhint.kr${path}`, publisher: { '@type': 'Organization', name: 'JH International' } });
  return <SiteLayout><article className="content-page"><header className="page-hero has-background guide-hero"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/guides">Guides</a><span>/</span><span aria-current="page">{guide.title}</span></nav><p className="eyebrow">KOREAN COSMETICS BUYER GUIDE</p><h1>{guide.title}</h1><p className="page-intro">{guide.summary}</p></header><div className="guide-article"><div className="guide-article-label"><p className="eyebrow">THE BUYER'S VIEW</p><a className="text-link" href="/guides">ALL GUIDES <ArrowRight size={16} /></a></div><div>{guide.sections.map((section, index) => <section key={section.heading}><span>{String(index + 1).padStart(2, '0')}</span><h2>{section.heading}</h2><p>{section.text}</p></section>)}<div className="guide-next"><h2>Explore the next step</h2>{guide.related.map((slug) => <a key={slug} href={slug}>{slug === '/inquiry' ? 'Request an OEM / ODM quotation' : slug.slice(1).replaceAll('-', ' ')} <ArrowUpRight size={16} /></a>)}</div></div></div><QuoteBand compact /></article></SiteLayout>;
}
