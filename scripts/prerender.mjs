import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const routes = [
  ['about', 'About JH International | Korean Cosmetics Manufacturing Partner', 'Meet JH International, a Korean cosmetics OEM and ODM manufacturing partner supporting international beauty brands from concept to finished product.'],
  ['oem-odm', 'Korean Cosmetics OEM & ODM Manufacturer | JH International', 'Understand Korean cosmetics OEM, ODM and private-label development from formula and samples to packaging, filling and export.'],
  ['skincare', 'Korean Skincare Manufacturer & OEM ODM | JH International', 'Korean skincare OEM and ODM development for international brands, including formula, samples, packaging and finished products.'],
  ['makeup', 'Korean Makeup Manufacturer & OEM ODM | JH International', 'Korean makeup and colour cosmetics OEM and ODM development for international beauty brands.'],
  ['sun-care', 'Korean Sun Care Manufacturer & OEM ODM | JH International', 'Korean sun care OEM and ODM development across cream, serum, stick, cushion, spray and after-sun formats.'],
  ['hair-care', 'Korean Hair Care Manufacturer & OEM ODM | JH International', 'Korean hair and scalp care OEM and ODM development from shampoo and conditioner to targeted treatments.'],
  ['body-care', 'Korean Body Care Manufacturer & OEM ODM | JH International', 'Korean body and personal care OEM and ODM development with tailored formula, fragrance and packaging direction.'],
  ['formulation', 'Cosmetic Formulation & Product Development Korea | JH International', 'Explore cosmetic formulation and sample development in Korea from client brief and prototype to final formula and production.'],
  ['packaging', 'Cosmetic Packaging, Filling & Assembly Korea | JH International', 'Cosmetic packaging selection, filling and assembly in Korea for international beauty product projects.'],
  ['moq', 'Korean Cosmetics MOQ Explained | JH International', 'Learn what determines Korean cosmetics OEM and ODM MOQ, including formula, shades, packaging and production conditions.'],
  ['process', 'Korean Cosmetics Manufacturing Process | JH International', 'Follow the 10-step Korean cosmetics OEM and ODM process from consultation to inspection and export preparation.'],
  ['faq', 'Korean Cosmetics OEM ODM FAQ | JH International', 'Answers about Korean cosmetics OEM and ODM, MOQ, formulas, samples, private label, packaging, export and quotations.'],
  ['inquiry', 'Request a Korean Cosmetics OEM ODM Quotation | JH International', 'Submit a skincare, hair care or makeup OEM/ODM product development brief to JH International in South Korea.'],
  ['location', 'JH International Location in Songdo, Incheon | Visit Us', 'Find JH International at D-1311, 30 Songdo Mirae-ro, Yeonsu-gu, Incheon, South Korea. View the address and open directions.'],
  ['guides', 'Korean Cosmetics OEM ODM Guides | JH International', 'Practical guides to Korean cosmetics OEM, ODM, private label, formula and packaging choices, manufacturing costs and development timelines.'],
  ['guides/oem-vs-odm', 'OEM vs ODM Cosmetics Manufacturing | JH International', 'Compare OEM and ODM cosmetics manufacturing, development scope, formula ownership and questions to ask before a quotation.'],
  ['guides/oem-vs-private-label', 'Korean OEM vs Private Label Cosmetics | JH International', 'Compare defined OEM manufacturing specifications with private label product platforms and their customization options.'],
  ['guides/stock-vs-custom-formula', 'Stock Formula vs Custom Formula | JH International', 'Compare existing cosmetic formula platforms with custom development, samples, testing and approvals.'],
  ['guides/stock-vs-custom-packaging', 'Stock Packaging vs Custom Packaging | JH International', 'Compare stock and custom cosmetic packaging for component availability, minimums, timing and compatibility.'],
  ['guides/manufacturing-process', 'Korean Cosmetics Manufacturing Process Guide | JH International', 'Learn how a Korean cosmetics project moves from brief and samples to production, inspection and export preparation.'],
  ['guides/launch-cosmetic-brand-korea', 'How to Launch a Cosmetic Brand with Korean Manufacturing | JH International', 'Build a product brief and plan formulation, packaging, approvals and production for a Korean-made cosmetics launch.'],
  ['guides/cosmetic-manufacturing-cost', 'Cosmetic Manufacturing Cost in Korea | JH International', 'Learn which formula, packaging, quantity, testing and delivery choices affect Korean cosmetics manufacturing quotations.'],
  ['guides/cosmetic-development-timeline', 'Cosmetic Product Development Timeline | JH International', 'Understand the milestones and dependencies that affect Korean cosmetics formulation, samples, packaging and production timing.'],
];

const template = await readFile('dist/index.html', 'utf8');

for (const [route, title, description] of routes) {
  const path = `/${route}`;
  const schema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `https://jhint.kr${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'JH International',
      url: 'https://jhint.kr/',
    },
  }).replaceAll('<', '\\u003c');
  const page = template
    .replace(/<title>.*?<\/title>/, `<title>${title.replaceAll('&', '&amp;')}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content=".*?"\s*\/>/, `<meta property="og:title" content="${title.replaceAll('&', '&amp;')}" />`)
    .replace(/<meta property="og:description" content=".*?"\s*\/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content=".*?"\s*\/>/, `<meta property="og:url" content="https://jhint.kr${path}" />`)
    .replace(/<link rel="canonical" href=".*?"\s*\/>/, `<link rel="canonical" href="https://jhint.kr${path}" />`)
    .replace(/<script id="page-schema" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="page-schema" type="application/ld+json">${schema}</script>`);
  const directory = join('dist', route);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), page);
}

console.log(`Generated ${routes.length} route-specific HTML entry files.`);
