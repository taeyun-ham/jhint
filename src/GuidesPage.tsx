import { useEffect } from 'react';
import { Breadcrumbs, QuoteBand, SiteLayout, usePageMeta } from './SiteChrome';

// 목록 한 줄: 문자열 또는 [굵은 머리말, 설명]
type GuideListItem = string | readonly [string, string];
type GuideSection = { heading: string; paragraphs?: readonly string[]; list?: readonly GuideListItem[]; after?: string };
type Guide = { slug: string; title: string; intro: string; sections: readonly GuideSection[]; note?: string };

// 요구사항 12(2026-11-23): 8개 가이드를 /guides 한 페이지에서 펼쳐 보기. slug는 옛 주소(/guides/<slug>)와 같게 유지
export const guides: readonly Guide[] = [
  {
    slug: 'oem-vs-odm',
    title: 'OEM vs ODM Cosmetics Manufacturing',
    intro: 'OEM and ODM are two approaches to cosmetics manufacturing, depending on how much product development support your brand requires.',
    sections: [
      { heading: 'OEM – Original Equipment Manufacturing', paragraphs: ['Suitable for brands with an established product concept, formulation or specifications. JH International coordinates manufacturing according to the agreed formula, product requirements and packaging specifications.'] },
      { heading: 'ODM – Original Design Manufacturing', paragraphs: ['Ideal for brands requiring support to develop a product concept into a finished product. This includes custom formulation, ingredient selection, texture, colour, performance and packaging development.'] },
      { heading: 'The JH International Approach', paragraphs: ["We specialise in customised product creation rather than supplying fixed product catalogues. Each project is developed according to the client's brand identity, target market, product expectations and commercial requirements."] },
      { heading: 'Before Starting Your Project', paragraphs: ['Key considerations include:'], list: ['Product concept and category.', 'Target market and regulatory requirements.', 'Formulation and performance expectations.', 'Packaging and design.', 'Estimated quantities and target unit cost.'] },
    ],
    note: 'Formula ownership and intellectual property protections are established through the project agreement.',
  },
  {
    slug: 'oem-vs-private-label',
    title: 'Korean OEM vs Private Label Cosmetics',
    intro: 'OEM and private label differ mainly in the level of product customisation and development involved.',
    sections: [
      { heading: 'OEM – Custom Manufacturing', paragraphs: ['OEM is designed for brands seeking greater control over their products. Formulations, ingredients, texture, fragrance, colours and packaging can be developed or specified according to the project requirements.'] },
      { heading: 'Private Label – Existing Product Platforms', paragraphs: ['Private label typically uses an existing formulation or product platform offered by a manufacturer, with limited customisation options such as branding, packaging or selected product adjustments.'] },
      { heading: 'The JH International Approach', paragraphs: ["We focus on customised OEM/ODM product development rather than supplying fixed private-label catalogues. Our objective is to create distinctive products tailored to each brand's identity, target market and commercial requirements."] },
      { heading: 'What to Prepare', list: ['Product references or development concepts.', 'Desired formulation and product features.', 'Target market and retail positioning.', 'Packaging and design preferences.', 'Estimated order quantities and target unit cost.'] },
    ],
  },
  {
    slug: 'stock-vs-custom-formula',
    title: 'Stock Formula vs Custom Formula',
    intro: 'Choosing between an existing formula and custom formulation depends on your product concept, desired performance, target market and level of customisation.',
    sections: [
      { heading: 'Stock Formula – Existing Development Platform', paragraphs: ['An existing formulation can provide a starting point when its texture, performance and characteristics meet your requirements. Adjustments may be possible depending on the formula and project specifications. Ingredient suitability and regulatory compliance must still be assessed for the intended market.'] },
      { heading: 'Custom Formula – Tailored Development', paragraphs: ['Custom formulation allows greater control over ingredients, texture, colour, fragrance and product performance. Development includes laboratory sampling, evaluation and refinement, with project-specific testing requirements.'] },
      { heading: 'The JH International Approach', paragraphs: ['We assess each project individually to determine the most suitable formulation route based on your product expectations, packaging, target market and commercial objectives.'] },
      { heading: 'Before Approval', list: ['Confirm formulation specifications and samples.', 'Evaluate performance against agreed references.', 'Check packaging compatibility and stability requirements.', 'Review destination-market regulatory requirements.', 'Establish formula ownership and intellectual property terms.'] },
    ],
    note: 'Customisation, testing requirements and development timelines may affect the final MOQ and unit cost.',
  },
  {
    slug: 'stock-vs-custom-packaging',
    title: 'Stock Packaging vs Custom Packaging',
    intro: 'Packaging plays an important role in product presentation, brand identity, manufacturing costs and overall product compatibility.',
    sections: [
      { heading: 'Stock Packaging – Existing Packaging Options', paragraphs: ['Stock packaging uses existing packaging designs and specifications available through established suppliers. It can offer a more cost-effective solution, with selected options for colours, finishes, printing and branding, subject to supplier availability.'] },
      { heading: 'Custom Packaging – Tailored Packaging Development', paragraphs: ["Custom packaging is developed around your brand's identity and product requirements. Options may include customised shapes, materials, colours, printing techniques, surface finishes and structural designs."] },
      { heading: 'The JH International Approach', paragraphs: ['We provide turnkey packaging coordination, working with established packaging suppliers to identify and develop suitable packaging solutions for each project. Our team coordinates packaging selection, design specifications, printing and finishing applications.'] },
      { heading: 'Important Considerations', list: ['Packaging type, materials and dimensions.', 'Printing methods and decorative finishes.', 'Product and packaging compatibility.', 'Supplier MOQ and production requirements.', 'Packaging costs and development timelines.'] },
    ],
    note: 'Packaging selection directly affects the final unit cost, MOQ and production schedule. All specifications are confirmed before final quotation and production.',
  },
  {
    slug: 'manufacturing-process',
    title: 'Korean Cosmetics Manufacturing Process',
    intro: 'From initial product concept to finished goods, every project follows a structured development, approval and manufacturing process.',
    sections: [
      { heading: '01. Product Development & Approval', paragraphs: ['The client provides the product concept, target market, benchmark references, estimated quantity and target price. JH International coordinates formulation development, laboratory sampling, packaging selection and revisions until the product specifications are approved.'] },
      { heading: '02. Manufacturing & Quality Control', paragraphs: ['Following final approval, production is scheduled. Manufacturing includes bulk preparation, filling, assembly and quality inspections according to the agreed product specifications and applicable quality requirements.'] },
      { heading: '03. Export & Delivery Preparation', paragraphs: ["Finished products undergo final checks and preparation for shipment. Available export and product documentation is coordinated according to the destination market and agreed shipping requirements. Import registration and market-entry compliance remain subject to the destination country's regulations."] },
    ],
    note: 'Important: Bulk production begins only after formulation and packaging approval, contract confirmation and receipt of the agreed initial deposit.',
  },
  {
    slug: 'launch-cosmetic-brand-korea',
    title: 'How to Launch a Cosmetic Brand with Korean Manufacturing',
    intro: 'Launching a cosmetic brand requires careful planning of product development, manufacturing requirements, costs and target-market regulations.',
    sections: [
      { heading: '01. Define Your Product & Target Market', paragraphs: ['Identify your product category, target consumer, sales market, brand positioning and desired retail price. Reference products can help communicate your expectations for formulation, performance, texture and appearance.'] },
      { heading: '02. Develop & Approve Your Product', paragraphs: ['Select the appropriate OEM/ODM development route. Review laboratory samples, confirm formulation and packaging specifications, and complete the required revisions, artwork and testing arrangements before production approval.'] },
      { heading: '03. Confirm Your Manufacturing & Launch Plan', paragraphs: ['Establish the required MOQ per formulation or shade, final unit pricing, packaging costs, production timeline, payment terms and export documentation. Ensure destination-market regulatory requirements and importer responsibilities are addressed before shipment.'] },
      { heading: 'The JH International Approach', paragraphs: ['We support international brands from initial concept through custom product development, packaging coordination and manufacturing in South Korea. Each project is assessed according to its product requirements, target market and commercial objectives.'] },
    ],
  },
  {
    slug: 'cosmetic-manufacturing-cost',
    title: 'Cosmetic Manufacturing Costs in Korea',
    intro: 'Cosmetic manufacturing costs are calculated according to the formulation, packaging and complete product specifications. Each project is quoted individually.',
    sections: [
      {
        heading: 'How Is the Unit Price Calculated?',
        paragraphs: ['The finished product unit price generally consists of:'],
        list: [
          ['Formula & Manufacturing:', 'Raw materials, formulation, bulk production and filling.'],
          ['Primary Packaging:', 'Product containers, bottles, tubes, jars, pumps and closures.'],
          ['Design Applications:', 'Printing, hot stamping, coating, labelling and other decorative finishes.'],
          ['Secondary Packaging & Materials:', 'Unit boxes, inserts, shipping cartons, security seals and other required components.'],
        ],
        after: 'Additional costs may apply depending on product complexity, testing and specific project requirements.',
      },
      { heading: 'Key Cost Factors', list: ['Product formulation and ingredients.', 'Packaging materials and specifications.', 'Printing and decorative finishes.', 'MOQ per formulation or colour.', 'Production and quality requirements.'] },
      { heading: 'Requesting an Accurate Quotation', paragraphs: ['Please provide your product concept, target market, estimated quantity per SKU or shade, packaging references, design requirements and target unit cost.'] },
      { heading: 'The JH International Approach', paragraphs: ['We prepare quotations based on the complete product and packaging specifications. Preliminary estimates may be adjusted once the formulation, packaging components and design applications are confirmed.'] },
    ],
    note: 'International freight, import duties, local registration and other market-entry expenses are generally quoted separately.',
  },
  {
    slug: 'cosmetic-development-timeline',
    title: 'Cosmetic Product Development Timeline',
    intro: 'Cosmetic product development involves several stages before mass production can begin. Timelines depend on formulation requirements, packaging specifications, testing and client approvals.',
    sections: [
      { heading: '01. Product Development & Sampling', paragraphs: ['Initial consultation, formulation development, laboratory samples, sample evaluation and revisions. Packaging options and supplier availability are also reviewed during this stage.'] },
      { heading: '02. Packaging, Testing & Final Approval', paragraphs: ['Finalise the formulation, packaging components, artwork and design applications. Complete applicable compatibility, stability and regulatory testing before confirming production specifications.'] },
      { heading: '03. Manufacturing & Delivery', paragraphs: ['Following final sample and packaging approval, contract signing and receipt of the initial deposit, production can be scheduled. Manufacturing, quality control, packing and export preparation follow.'] },
      { heading: 'What Can Affect the Timeline?', list: ['Custom formulation and ingredient requirements.', 'Packaging availability and customised components.', 'Multiple shades or product variations.', 'Sample revisions and testing requirements.', 'Artwork changes and delayed client approvals.', 'Component delivery and international shipping.'] },
      {
        heading: 'The JH International Approach',
        paragraphs: [
          'For standard skincare projects, estimated production lead time is generally 10–14 weeks, starting after sample approval, completed packaging design, contract signing and receipt of the 50% initial deposit.',
          'Other product categories and customised projects may require different schedules. Development and sampling time, where applicable, must be considered separately.',
          'We recommend planning backward from your intended launch date and allowing sufficient time for development, approvals, production and shipping.',
        ],
      },
    ],
  },
];

// /guides#<slug>로 들어오면 그 항목을 펼치고 그 위치로 이동
function openGuideFromHash() {
  const slug = decodeURIComponent(window.location.hash.slice(1));
  if (!guides.some((guide) => guide.slug === slug)) return;
  const item = document.getElementById(slug);
  if (!(item instanceof HTMLDetailsElement)) return;
  item.open = true;
  item.scrollIntoView({ block: 'start' });
}

export function GuidesPage() {
  usePageMeta('Korean Cosmetics OEM ODM Guides | JH International', 'Practical guides to Korean cosmetics OEM, ODM, private label, formula and packaging choices, manufacturing costs and development timelines.', '/guides');
  useEffect(() => {
    openGuideFromHash();
    window.addEventListener('hashchange', openGuideFromHash);
    return () => window.removeEventListener('hashchange', openGuideFromHash);
  }, []);
  // 접힌 내용도 HTML에 그대로 들어감(details) — 검색·AI 수집용
  return (
    <SiteLayout>
      <article className="content-page">
        <header className="page-hero has-background guide-hero"><Breadcrumbs current="Guides" /><p className="eyebrow">COSMETICS MANUFACTURING GUIDES</p><h1>Research the route.<br /><em>Plan your product.</em></h1><p className="page-intro">Compare development options and understand the decisions behind a Korean cosmetics project before requesting a quotation.</p></header>
        <section className="guide-accordion" aria-label="Manufacturing guides">
          {guides.map((guide, index) => (
            <details className="guide-item" id={guide.slug} key={guide.slug}>
              <summary><span>{String(index + 1).padStart(2, '0')}</span><h2>{guide.title}</h2><i aria-hidden="true" /></summary>
              <div className="guide-body">
                <p className="guide-intro">{guide.intro}</p>
                {guide.sections.map((section) => (
                  <section key={section.heading}>
                    <h3>{section.heading}</h3>
                    {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
                    {section.list && <ul>{section.list.map((item) => typeof item === 'string' ? <li key={item}>{item}</li> : <li key={item[0]}><strong>{item[0]}</strong> {item[1]}</li>)}</ul>}
                    {section.after && <p>{section.after}</p>}
                  </section>
                ))}
                {guide.note && <p className="guide-note">{guide.note}</p>}
              </div>
            </details>
          ))}
        </section>
        <QuoteBand compact />
      </article>
    </SiteLayout>
  );
}
