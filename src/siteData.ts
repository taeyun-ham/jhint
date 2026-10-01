export type PageSection = {
  eyebrow?: string;
  title: string;
  body?: string[];
  items?: Array<{ title: string; body: string }>;
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
  sections: PageSection[];
  related: string[];
};

export const categories = [
  {
    slug: '/skincare',
    number: '01',
    title: 'Skincare',
    description: 'Korean skincare OEM and ODM development for daily care, treatment and targeted formats.',
    formats: ['Moisturiser', 'Serum', 'Essence', 'Toner', 'Cream', 'Lotion', 'Cleanser', 'Eye cream', 'Face mask', 'Ampoule', 'Exfoliator', 'Oil', 'Balm'],
  },
  {
    slug: '/makeup',
    number: '02',
    title: 'Makeup',
    description: 'Colour cosmetics development shaped around shade, payoff, texture, finish and application.',
    formats: ['Foundation', 'Cushion', 'Concealer', 'Lipstick', 'Lip gloss', 'Lip balm', 'Lip liner', 'Blush', 'Bronzer', 'Highlighter', 'Eyeshadow', 'Mascara', 'Eyeliner', 'Primer'],
  },
  {
    slug: '/sun-care',
    number: '03',
    title: 'Sun Care',
    description: 'Sun care concepts developed around format, sensory profile, target market and project testing needs.',
    formats: ['Sun cream', 'Sun serum', 'Sun stick', 'Sun cushion', 'Sun spray', 'After-sun care'],
  },
  {
    slug: '/hair-care',
    number: '04',
    title: 'Hair Care',
    description: 'Hair and scalp care OEM/ODM projects from cleansing and conditioning to targeted treatments.',
    formats: ['Shampoo', 'Conditioner', 'Hair mask', 'Treatment', 'Leave-in care', 'Hair serum', 'Hair oil', 'Scalp treatment', 'Styling care'],
  },
  {
    slug: '/body-care',
    number: '05',
    title: 'Body Care',
    description: 'Body and personal care concepts with tailored texture, fragrance direction and packaging.',
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
  ['Do you manufacture cosmetics in Korea?', 'JH International supports cosmetic product development and manufacturing in South Korea for international beauty brands. The exact manufacturing route and facility are matched to the product category and project requirements.'],
  ['Do you provide both OEM and ODM services?', 'Yes. OEM can suit brands bringing an established specification, while ODM can include a broader development route from concept and formula through packaging and finished product. The final scope is confirmed after the brief review.'],
  ['What is the MOQ for Korean cosmetics manufacturing?', 'MOQ is project-specific. It changes with formula type, shade count, stock or custom packaging, component decoration and production conditions. We confirm a realistic minimum after reviewing the product brief.'],
  ['Can I use an existing formula?', 'An existing or stock-formula route may be possible depending on the category and required changes. Please send the desired product type, target market and benchmark so we can assess the appropriate route.'],
  ['Can you develop a new custom formula?', 'Custom development can be considered for suitable projects. Your concept, target texture or finish, preferred ingredients, claims direction, market, quantity and timing help define feasibility.'],
  ['Can I receive samples before mass production?', 'Sample development is part of the normal review process. The number of rounds, sample timing and any associated costs depend on the formula and project scope.'],
  ['Do you support private-label projects?', 'Yes. Private-label and more customized OEM/ODM routes can be reviewed. The best option depends on how much differentiation you need in formula, packaging and presentation.'],
  ['Can you source packaging and manage filling?', 'Packaging selection, compatibility considerations, filling and assembly can be coordinated as part of the finished-product project. Stock and custom packaging have different MOQ, cost and timing implications.'],
  ['Can you support international export projects?', 'We work with international project briefs and coordinate available manufacturing and product documentation. Final regulatory, registration, importer and market-entry requirements must be confirmed for the destination.'],
  ['How long does product development take?', 'Timing depends on formula complexity, sample revisions, testing, packaging availability, approvals and production scheduling. We provide a project-specific estimate once the brief is sufficiently defined.'],
  ['What information is needed for a quotation?', 'Please provide the category, concept, sales market, expected quantity, target price, packaging direction, launch date, existing formula status, references, desired claims and texture, colour or finish requirements.'],
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

export const marketingPages: MarketingPage[] = [
  {
    slug: '/about',
    navLabel: 'About',
    eyebrow: 'JH INTERNATIONAL / SOUTH KOREA',
    title: 'A Korean cosmetics manufacturing partner',
    accent: 'for international beauty brands.',
    intro: 'JH International connects product strategy, Korean formulation development, packaging, manufacturing coordination and export preparation in one clear project path.',
    metaTitle: 'About JH International | Korean Cosmetics Manufacturing Partner',
    metaDescription: 'Meet JH International, a Korean cosmetics OEM and ODM manufacturing partner supporting international beauty brands from concept to finished product.',
    sections: [
      {
        eyebrow: 'WHO WE SUPPORT',
        title: 'Built for brands working across borders',
        items: [
          { title: 'Startups', body: 'Structure an early concept into a manufacturable product brief and realistic development route.' },
          { title: 'Retailers & distributors', body: 'Develop market-relevant private-label products with coordinated formula, pack and production decisions.' },
          { title: 'Established brands', body: 'Extend a portfolio or develop a differentiated Korean-made concept for a new consumer or market.' },
        ],
      },
      {
        eyebrow: 'OUR ROLE',
        title: 'From formulation to export-ready finished products',
        body: [
          'We support skincare, makeup, sun care, hair care and body care projects through formulation, samples, packaging coordination, filling, assembly and finished-product preparation.',
          'Capabilities, testing, documentation and schedules are confirmed against each individual brief so buyers receive project-specific answers rather than generic promises.',
        ],
      },
    ],
    related: ['/oem-odm', '/location', '/inquiry'],
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

export const pageBySlug = new Map(marketingPages.map((page) => [page.slug, page]));

export const labelBySlug = new Map<string, string>([
  ['/', 'Home'],
  ...marketingPages.map((page) => [page.slug, page.navLabel] as [string, string]),
  ['/process', 'Process'],
  ['/guides', 'Guides'],
  ['/location', 'Location'],
  ['/faq', 'FAQ'],
  ['/inquiry', 'Inquiry'],
]);
