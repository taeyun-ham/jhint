import { seoPages } from './seoData';

export type PageSection = {
  eyebrow?: string;
  title: string;
  body?: string[];
  items?: Array<{ title: string; body: string }>;
  points?: Array<{ label: string; body: string }>;
};

export type MarketingPage = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  products?: string[];
  // PRODUCT FORMATS 구역 제목·본문(생략 시 공통값)
  productsHeading?: { title: string; body: string };
  sections: PageSection[];
  related: string[];
  // 페이지별 관련 링크 이름·마지막 문의 구역 문구(생략 시 공통값)
  relatedLabels?: Record<string, string>;
  quote?: { title?: string; body?: string };
};

export const categories = [
  {
    slug: '/skincare',
    number: '01',
    title: 'Skincare',
    description: 'Korean skincare OEM and ODM development for daily care, treatment and targeted formats.',
    // 홈 카테고리 목록 전용 설명(카테고리 페이지 소개문은 description 유지)
    homeDescription: 'Korean skincare OEM and ODM development across daily essentials, active treatments, and targeted formats.',
    formats: ['Moisturiser', 'Serum', 'Essence', 'Toner', 'Cream', 'Lotion', 'Cleanser', 'Eye cream', 'Face mask', 'Ampoule', 'Exfoliator', 'Oil', 'Balm'],
  },
  {
    slug: '/makeup',
    number: '02',
    title: 'Makeup',
    description: 'Colour cosmetics development shaped around shade, payoff, texture, finish and application.',
    homeDescription: 'Color cosmetics development tailored around shade range, pigment payoff, texture, finish, and application.',
    formats: ['Foundation', 'Cushion', 'Concealer', 'Lipstick', 'Lip gloss', 'Lip balm', 'Lip liner', 'Blush', 'Bronzer', 'Highlighter', 'Eyeshadow', 'Mascara', 'Eyeliner', 'Primer'],
  },
  {
    slug: '/sun-care',
    number: '03',
    title: 'Sun Care',
    description: 'Sun care concepts developed around format, sensory profile, target market and project testing needs.',
    homeDescription: 'Sun care formulations engineered for optimal texture, sensory feel, market compliance, and SPF testing requirements.',
    formats: ['Sun cream', 'Sun serum', 'Sun stick', 'Sun cushion', 'Sun spray', 'After-sun care'],
  },
  {
    slug: '/hair-care',
    number: '04',
    title: 'Hair Care',
    description: 'Hair and scalp care OEM/ODM projects from cleansing and conditioning to targeted treatments.',
    homeDescription: 'Hair and scalp care OEM/ODM solutions spanning daily cleansing, conditioning, and targeted treatments.',
    formats: ['Shampoo', 'Conditioner', 'Hair mask', 'Treatment', 'Leave-in care', 'Hair serum', 'Hair oil', 'Scalp treatment', 'Styling care'],
  },
  {
    slug: '/body-care',
    number: '05',
    title: 'Body Care',
    description: 'Body and personal care concepts with tailored texture, fragrance direction and packaging.',
    homeDescription: 'Body and personal care formulations customized around texture, signature fragrance, and functional packaging.',
    formats: ['Body wash', 'Body lotion', 'Body cream', 'Body scrub', 'Hand care', 'Foot care', 'Body oil', 'Body mist'],
  },
] as const;

export const processSteps = [
  ['01', 'Consultation', 'We review your brand, target consumer, sales market, product concept, quantity range, target cost and preferred launch timing. This first conversation identifies the decisions needed before development begins.'],
  ['02', 'Product Concept', 'The brief is translated into a practical product direction: category, format, texture, finish, performance priorities, positioning and reference products. Open questions are documented for alignment.'],
  ['03', 'Formula Development', 'A stock-platform or custom-formula route is selected according to the brief. Ingredient direction, sensory profile, claims goals and destination-market considerations are reviewed together.'],
  ['04', 'Sample Development', 'Prototype samples are prepared for evaluation. Your feedback on texture, colour, fragrance, absorption, payoff or application guides revisions until the direction is approved.'],
  ['05', 'Packaging Selection', 'We coordinate compatible primary and secondary packaging options, decoration and practical filling requirements. Stock and custom components can be evaluated against timing, quantity and budget.'],
  ['06', 'Testing & Quality Control', 'Project-appropriate stability, compatibility, performance and quality checks are planned around the formula, packaging and target market. Requirements are confirmed for each product rather than assumed.'],
  ['07', 'Mass Production', 'After specifications and commercial details are approved, the project moves into scheduled manufacturing under the agreed production and quality-control procedures.'],
  ['08', 'Filling & Assembly', 'Bulk product is filled into approved components, then assembled, coded and packed according to the final specification and presentation requirements.'],
  ['09', 'Finished Product Inspection', 'Finished goods are checked against the approved specification, packaging configuration and project quality requirements before release.'],
  ['10', 'Export Preparation', 'Products and available project documentation are prepared for the agreed delivery route. Destination-market and importer requirements remain specific to each project.'],
] as const;

export const faqs = [
  ['Do you manufacture cosmetics in South Korea?', 'Yes. JH International manages cosmetic product development and manufacturing in South Korea through established Korean manufacturing facilities. Each project is matched with suitable production capabilities, technical expertise and quality requirements according to its product category and specifications.'],
  ['Do you provide both OEM and ODM services?', 'Yes. Our OEM service supports brands with established product specifications or formulations requiring manufacturing. Our ODM service covers product concept development, custom formulation, packaging coordination and finished product manufacturing. We assess each brief to determine the most suitable approach.'],
  ['What are your minimum order quantities (MOQs)?', 'MOQs depend on the product category, formulation and packaging requirements. As a general guide, skincare and standard haircare projects start at 5,000 units per formulation, while makeup typically starts at 10,000–12,000 units per formulation. Certain packaging formats may require higher quantities. We confirm the applicable MOQ after reviewing your project specifications.'],
  ['Can you work with an existing formula or develop a new one?', 'We can review an existing formulation brief or reference product and assess its suitability for manufacturing. Alternatively, our ODM service allows us to develop a custom formulation around your target ingredients, performance, texture and product concept. We can also explore suitable existing laboratory formulation bases or samples where available.'],
  ['Can I develop a new custom formulation?', 'Yes, we offer custom formulation for qualified projects. To help us assess feasibility, share your product concept, desired texture or finish, key ingredients, marketing claims, target market, estimated volume, and launch timeline.'],
  ['Can I receive samples before mass production?', 'Yes, sample development is a standard part of our review process. The number of revision rounds, lead times, and sampling fees will vary based on your specific formula and project scope.'],
  ['Do you support private-label projects?', "Yes. If you are looking for a faster path to market using existing formulas, we offer private-label solutions. We can help you determine whether a ready-to-brand formula or a custom OEM/ODM route best fits your brand's differentiation goals."],
  ['Can you source packaging and manage filling?', 'Yes, we coordinate full turnkey execution, including packaging sourcing, compatibility testing, filling, and assembly. Keep in mind that stock and custom packaging carry different minimum order quantities (MOQs), pricing, and lead times.'],
  ['Can you support international export projects?', 'Yes. We manage international projects and provide the required manufacturing and product documentation. Because regulations vary by region, final market-entry, registration, and importer requirements must be confirmed for your destination country.'],
  ['How long does product development take?', 'Timelines depend on formula complexity, testing, regulatory approvals, and production scheduling. Once your project brief is defined, we will provide a customized timeline estimate.'],
  ['What information is needed for a quotation?', 'To prepare an accurate quote, please share your commercial and product details—including product category, formula status (existing or custom), target price, expected order quantity, packaging direction, destination market, and target launch date—along with your product concept, desired claims, and texture or finish references.'],
] as const;

const commonCategorySections: PageSection[] = [
  {
    eyebrow: 'DEVELOPMENT ROUTES',
    title: 'Stock platform or custom development',
    body: [
      'A proven platform can shorten the path when speed and practical quantities are priorities. A custom route provides more room to shape ingredients, sensory profile and performance around a distinct brand concept.',
      'We assess the suitable route after reviewing the benchmark, target market, packaging, quantity and launch plan.',
    ],
  },
  {
    eyebrow: 'FROM BRIEF TO PRODUCT',
    title: 'A connected manufacturing process',
    items: [
      { title: 'Brief & benchmark', body: 'Define the user, market, price position, product reference and performance priorities.' },
      { title: 'Formula & sample', body: 'Develop and refine the formula, texture, colour, fragrance and application experience.' },
      { title: 'Pack & produce', body: 'Confirm compatible packaging, production details, filling, assembly and finished-product presentation.' },
    ],
  },
];

// 카테고리별로 공통 틀 대신 쓸 문구(요구사항 7: Makeup)
const categoryPageOverrides: Partial<Record<string, Partial<MarketingPage>>> = {
  '/makeup': {
    title: 'Custom color cosmetics',
    accent: 'formulation and manufacturing.',
    intro: 'End-to-end development engineered for precise shade matching, pigment payoff, texture, and wear.',
    productsHeading: {
      title: 'Color cosmetics tailored to your brief.',
      body: 'Formula availability and shade customization scale based on your packaging, component compatibility, and target market.',
    },
    sections: [
      {
        eyebrow: 'DEVELOPMENT ROUTES',
        title: 'Stock platform or custom development',
        body: [
          'A proven base formula speeds up your launch with accessible initial volumes and ready-to-adapt shade ranges. Choosing a bespoke build gives you full control to engineer custom pigments, finish, and wear around your brand’s aesthetic.',
          'We recommend the right approach after reviewing your shade benchmarks, component selection, and launch timeline.',
        ],
      },
      {
        eyebrow: 'FROM BRIEF TO PRODUCT',
        title: 'A connected manufacturing process',
        items: [
          { title: 'Brief & benchmark', body: 'Define your target customer, shade references, price positioning, and wear expectations.' },
          { title: 'Formula & sample', body: 'Iterate on pigment payoff, undertone accuracy, texture, finish, and application feel.' },
          { title: 'Pack & produce', body: 'Verify component and applicator compatibility, bulk filling, assembly, and retail-ready presentation.' },
        ],
      },
    ],
    quote: {
      title: 'Tell us what you want to make.',
      body: 'Share your shade vision, component preferences, and target launch window. Our team will evaluate your brief and map out your next steps to production.',
    },
  },
};

export const marketingPages: MarketingPage[] = [
  {
    slug: '/export',
    navLabel: 'Export Preparation',
    eyebrow: 'EXPORT PREPARATION / SOUTH KOREA',
    title: 'Prepare your products',
    accent: 'for international delivery.',
    intro: 'Coordinate destination-market registration checks, air or sea freight booking and shipping documents before dispatch.',
    metaTitle: 'Cosmetics Export Preparation & Shipping | JH International',
    metaDescription: 'Cosmetics export preparation from Korea: destination-market product registration checks, air and sea freight booking, and CI, PKL, B/L and C/O documentation.',
    sections: [
      {
        eyebrow: '01 / REGISTRATION CHECK',
        title: 'Destination-market product registration',
        body: ['Confirm the product registration status for the importing country with the buyer or importer before shipment.'],
      },
      {
        eyebrow: '02 / FREIGHT BOOKING',
        title: 'Air & sea freight',
        body: ['Coordinate air or sea freight booking according to the agreed shipment schedule and delivery route.'],
      },
      {
        eyebrow: '03 / SHIPPING DOCUMENTS',
        title: 'Documentation for shipment',
        body: ['Prepare and coordinate the applicable shipping documents for the agreed delivery route.'],
        items: [
          { title: 'CI / Commercial Invoice', body: 'Commercial details of the goods and transaction.' },
          { title: 'PKL / Packing List', body: 'Packing details, quantities and shipment weights.' },
          { title: 'B/L / Bill of Lading', body: 'Issued by the carrier for sea shipments as evidence of cargo receipt and the contract of carriage. Air shipments use an Air Waybill (AWB).' },
          { title: 'C/O / Certificate of Origin', body: 'Certifies the country of origin of the exported products and is provided when needed to claim preferential tariffs or when required by the importing country or buyer.' },
        ],
      },
    ],
    related: ['/process', '/compliance', '/packaging', '/inquiry'],
  },
  {
    slug: '/about',
    navLabel: 'About',
    eyebrow: 'JH INTERNATIONAL / SOUTH KOREA',
    title: 'Your Korean cosmetics manufacturing partner',
    accent: 'for international beauty brands.',
    intro: 'JH International connects product strategy, Korean formulation development, regulatory compliance, packaging, production management, and export preparation in one seamless path.',
    metaTitle: 'About JH International | Korean Cosmetics Manufacturing Partner',
    metaDescription: 'Meet JH International, a Korean cosmetics OEM and ODM manufacturing partner supporting international beauty brands from concept to finished product.',
    sections: [
      {
        eyebrow: 'HOW WE COLLABORATE',
        title: 'Built for brands working across borders',
        items: [
          { title: 'Established beauty brands', body: 'Scale existing product lines or launch differentiated Korean-made SKUs backed by large-scale production capabilities, strict quality assurance, and global regulatory compliance.' },
          { title: 'Retailers & global distributors', body: 'Develop high-volume private-label and exclusive retail collections with turnkey formulation, custom tooling, automated filling, and international export logistics.' },
          { title: 'Funded & emerging brands', body: 'Translate commercial product briefs into scalable, retail-ready formulations with structured R&D, compliance documentation, and production planning.' },
        ],
      },
      {
        eyebrow: 'OUR ROLE',
        title: 'Korean OEM/ODM beauty manufacturing built to scale',
        body: [
          'Operating out of South Korea, we partner with brands across skincare, makeup, sun care, hair care, and body care—from emerging lines to global, multi-SKU portfolios. Every project is scoped directly against your commercial brief, aligning production capacity, quality control, and delivery schedules to support reliable execution at every stage of growth.',
        ],
        points: [
          { label: 'Turnkey OEM & ODM:', body: 'Custom R&D, proven base formulations, and primary and secondary packaging sourcing managed under one roof.' },
          { label: 'Scalable Production:', body: 'Flexible-to-high-volume filling, multi-SKU batching, and retail-ready assembly built for growing demand.' },
          { label: 'Global Compliance & Testing:', body: 'Full regulatory documentation, stability and safety testing, and market-specific registration support (FDA, EU CPNP, and beyond).' },
          { label: 'Export & Delivery Support:', body: 'End-to-end export documentation, customs-ready packing, and international freight coordination straight from South Korea.' },
        ],
      },
    ],
    related: ['/oem-odm', '/location', '/inquiry'],
    relatedLabels: { '/oem-odm': 'OEM/ODM SERVICE', '/location': 'OUR LOCATION', '/inquiry': 'MAKE AN INQUIRY' },
    quote: {
      title: 'Tell us what you would like to create with us.',
      body: 'Share your product scope, target markets, estimated volumes, packaging direction, and launch timeline. Our Korean R&D and commercial team will review your brief and provide a tailored feasibility plan, pricing, and the next steps.',
    },
  },
  {
    slug: '/oem-odm',
    navLabel: 'OEM / ODM',
    eyebrow: 'KOREAN COSMETICS OEM / ODM',
    title: 'Choose the development route',
    accent: 'that fits your brand.',
    intro: 'OEM and ODM describe different levels of product ownership and development support. We help international buyers define the right route before quotation.',
    metaTitle: 'Korean Cosmetics OEM & ODM Manufacturer | JH International',
    metaDescription: 'Understand Korean cosmetics OEM, ODM and private-label development with JH International, from formula and samples to packaging, filling and export.',
    sections: [
      {
        eyebrow: 'OEM',
        title: 'Manufacturing from a defined specification',
        body: ['OEM is generally suited to a brand that already has a formula, specification or clearly defined product direction. The manufacturing, packaging and quality requirements are reviewed for feasibility before production.'],
      },
      {
        eyebrow: 'ODM',
        title: 'Development from concept to finished product',
        body: ['ODM can include concept interpretation, formula development, prototype samples, revisions, packaging selection, testing coordination, manufacturing, filling and assembly. The exact scope remains project-specific.'],
      },
      {
        eyebrow: 'PRIVATE LABEL',
        title: 'A practical route using an established platform',
        body: ['Private-label development may use a proven formula and stock packaging to reduce complexity. Available customization, MOQ and timing depend on the selected formula and components.'],
      },
    ],
    related: ['/formulation', '/packaging', '/moq', '/inquiry'],
  },
  ...categories.map((category): MarketingPage => ({
    slug: category.slug,
    navLabel: category.title,
    eyebrow: `KOREAN ${category.title.toUpperCase()} OEM / ODM`,
    title: `${category.title} manufacturing`,
    accent: 'developed in Korea.',
    intro: category.description,
    metaTitle: `Korean ${category.title} Manufacturer & OEM ODM | JH International`,
    metaDescription: `${category.description} Explore formats, development routes, packaging and quotation requirements with JH International.`,
    products: [...category.formats],
    sections: commonCategorySections,
    related: ['/formulation', '/packaging', '/process', '/inquiry'],
    ...categoryPageOverrides[category.slug],
  })),
  {
    slug: '/formulation',
    navLabel: 'Formulation',
    eyebrow: 'COSMETIC FORMULATION / KOREA',
    title: 'Turn a product idea',
    accent: 'into a workable formula.',
    intro: 'Product development begins with a precise brief. We connect concept, benchmark, ingredient direction, sensory goals and samples in a structured formulation process.',
    metaTitle: 'Cosmetic Formulation & Product Development Korea | JH International',
    metaDescription: 'Explore cosmetic formulation and sample development in Korea: client brief, R&D, prototype, feedback, final formula and production.',
    sections: [
      {
        eyebrow: 'DEVELOPMENT PATH',
        title: 'From brief to approved formula',
        items: [
          { title: 'Client brief', body: 'Category, target user, sales market, benchmark, target cost, claims direction and launch timing.' },
          { title: 'R&D and prototype', body: 'Formula direction and prototype samples are prepared around agreed performance and sensory goals.' },
          { title: 'Feedback and revision', body: 'Structured feedback guides the required adjustments to texture, finish, colour, fragrance or application.' },
          { title: 'Final formula', body: 'The approved direction is documented and prepared for the next testing, packaging and production decisions.' },
        ],
      },
      {
        eyebrow: 'A BETTER BRIEF',
        title: 'What to send before development starts',
        body: ['Share your product category, concept, target consumer and market, expected quantity, target price, packaging direction, launch date, formula status, reference products, desired claims and required texture, colour or finish.'],
      },
    ],
    related: ['/oem-odm', '/process', '/moq', '/inquiry'],
  },
  {
    slug: '/packaging',
    navLabel: 'Packaging',
    eyebrow: 'COSMETIC PACKAGING & FILLING / KOREA',
    title: 'Packaging that works',
    accent: 'with the formula and the brand.',
    intro: 'Packaging is a technical and commercial decision. Compatibility, filling method, decoration, quantity, cost and lead time all need to work together.',
    metaTitle: 'Cosmetic Packaging, Filling & Assembly Korea | JH International',
    metaDescription: 'Cosmetic packaging selection, filling and assembly in Korea for international skincare, makeup, sun care, hair care and body care projects.',
    sections: [
      {
        eyebrow: 'PACKAGING ROUTES',
        title: 'Stock packaging or custom components',
        items: [
          { title: 'Stock packaging', body: 'A practical option when timing, accessible quantities and proven component availability are priorities.' },
          { title: 'Decorated stock', body: 'Existing components can be developed with project-appropriate colour, print, label or finishing options.' },
          { title: 'Custom packaging', body: 'A distinctive route that may require higher quantities, tooling, longer lead times and additional validation.' },
        ],
      },
      {
        eyebrow: 'FINISHED PRODUCT',
        title: 'Compatibility, filling and assembly',
        body: ['The component must suit the formula and filling process. Final details can include coding, labels, cartons, inserts, assembly configuration and shipment-ready packing.'],
      },
    ],
    related: ['/formulation', '/moq', '/process', '/inquiry'],
  },
  {
    slug: '/moq',
    navLabel: 'MOQ',
    eyebrow: 'KOREAN COSMETICS MOQ',
    title: 'MOQ is not one number.',
    accent: 'It is a set of project decisions.',
    intro: 'Minimum order quantity depends on the formula, packaging, decoration, shade count and manufacturing route. A useful MOQ answer starts with the product brief.',
    metaTitle: 'Korean Cosmetics MOQ Explained | JH International',
    metaDescription: 'Learn what determines Korean cosmetics OEM and ODM MOQ, including formula, shades, stock or custom packaging, filling and production conditions.',
    sections: [
      {
        eyebrow: 'WHAT CHANGES MOQ',
        title: 'The main variables buyers should expect',
        items: [
          { title: 'Formula and category', body: 'Bulk production conditions, ingredients, format and required testing influence the viable production quantity.' },
          { title: 'Colours and variants', body: 'Each shade, fragrance, size or formula variation may create a separate production or component minimum.' },
          { title: 'Packaging route', body: 'Stock components are usually more flexible than custom moulds, colours, decorations or specialty materials.' },
          { title: 'Commercial plan', body: 'Target cost, launch timing, repeat-order plans and freight configuration help shape a workable quotation.' },
        ],
      },
      {
        eyebrow: 'HOW TO GET AN ANSWER',
        title: 'Send a concise product brief',
        body: ['Tell us the product category, market, expected first quantity, target price, packaging preference, shade or variant count and launch timing. We can then review the route and confirm the relevant minimums.'],
      },
    ],
    related: ['/oem-odm', '/packaging', '/process', '/inquiry'],
  },
];

// Keep page metadata aligned with the descriptions used in generated HTML.
for (const page of marketingPages) {
  page.metaDescription = seoPages[page.slug].description;
}

export const pageBySlug = new Map(marketingPages.map((page) => [page.slug, page]));

export const labelBySlug = new Map<string, string>([
  ['/', 'Home'],
  ...marketingPages.map((page) => [page.slug, page.navLabel] as [string, string]),
  ['/process', 'Process'],
  ['/compliance', 'Compliance'],
  ['/guides', 'Guides'],
  ['/location', 'Location'],
  ['/faq', 'FAQ'],
  ['/inquiry', 'Inquiry'],
]);
