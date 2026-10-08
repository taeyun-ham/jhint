export const pageHeroImages: Record<string, string> = {
  '/export': '/images/manufacturing/korean-cosmetics-export-preparation-optimized.webp',
  '/about': '/images/manufacturing/korean-cosmetics-oem-manufacturer-factory-optimized.webp',
  '/oem-odm': '/images/manufacturing/korean-cosmetics-mixing-tank-korea-v5-optimized.webp',
  '/skincare': '/images/categories/korean-skincare-oem-hero-optimized.webp',
  '/makeup': '/images/categories/korean-makeup-oem-hero-optimized.webp',
  '/sun-care': '/images/categories/korean-sun-care-oem-hero-optimized.webp',
  '/hair-care': '/images/categories/korean-hair-care-oem-hero-optimized.webp',
  '/body-care': '/images/categories/korean-body-care-oem-hero-optimized.webp',
  '/formulation': '/images/manufacturing/korean-skincare-oem-formulation-laboratory-v2-optimized.webp',
  '/packaging': '/images/manufacturing/korean-cosmetics-packaging-line-korea-v6-optimized.webp',
  '/moq': '/images/manufacturing/korean-cosmetics-finished-products-korea-optimized.webp',
};

export function heroImageForPath(path: string) {
  if (path === '/') return '/hero-jh-v2.webp';
  if (path === '/process') return '/images/manufacturing/korean-cosmetics-filling-machine-korea-v3-optimized.webp';
  if (path === '/faq') return '/images/manufacturing/korean-cosmetics-quality-control-korea-v2-optimized.webp';
  if (path === '/inquiry') return '/images/manufacturing/korean-skincare-oem-formulation-laboratory-v2-optimized.webp';
  if (path === '/location') return '/images/editorial/jh-international-korea-world-map-hero-optimized.webp';
  if (path === '/guides' || path.startsWith('/guides/')) return '/images/editorial/korean-cosmetics-buyer-guides-hero-optimized.webp';
  return pageHeroImages[path];
}
