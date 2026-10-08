import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowRight, ArrowUp, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { labelBySlug } from './siteData';

const primaryNav = [
  { label: 'COMPANY', links: [['/about', 'ABOUT'], ['/compliance', 'COMPLIANCE'], ['/location', 'LOCATION']] },
  { label: 'OEM/ODM', links: [['/oem-odm', 'OEM / ODM'], ['/process', 'PROCESS'], ['/guides', 'GUIDES'], ['/faq', 'FAQ']] },
  { label: 'PRODUCTS', links: [['/skincare', 'SKIN CARE'], ['/makeup', 'MAKE UP'], ['/sun-care', 'SUN CARE'], ['/hair-care', 'HAIR CARE'], ['/body-care', 'BODY CARE']] },
] as const;

export function usePageMeta(title: string, description: string, path: string, schema?: Record<string, unknown>) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${window.location.origin}${path}`);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${path}`;

    const node = document.getElementById('page-schema') || document.createElement('script');
    node.id = 'page-schema';
    node.setAttribute('type', 'application/ld+json');
    node.textContent = JSON.stringify(schema || {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: `${window.location.origin}${path}`,
      isPartOf: { '@type': 'WebSite', name: 'JH International', url: window.location.origin },
    });
    if (!node.parentNode) document.head.appendChild(node);
  }, [title, description, path, schema]);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="JH International home">
        <img src="/logo-jh-global.svg" alt="JH International" width="248" height="64" />
      </a>
      <nav className={`primary-nav${open ? ' open' : ''}`} aria-label="Main navigation">
        {primaryNav.map(({ label, links }) => (
          <details className="nav-group" key={label}>
            <summary>{label}<ChevronDown size={14} aria-hidden="true" /></summary>
            <div className="nav-submenu">
              {links.map(([href, linkLabel]) => <a href={href} key={href}>{linkLabel}</a>)}
            </div>
          </details>
        ))}
        <a className="nav-direct" href="/inquiry">INQUIRY</a>
      </nav>
      <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span>/</span><span aria-current="page">{current}</span>
    </nav>
  );
}

export function QuoteBand({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`quote-band${compact ? ' compact' : ''}`}>
      <div>
        <p className="eyebrow light">START YOUR PRODUCT DEVELOPMENT</p>
        <h2>Tell us what you want to make.</h2>
      </div>
      <div>
        <p>Share your product category, market, quantity, target price, packaging direction and launch timing. We will review the brief and outline the next steps.</p>
        <a className="button acid" href="/inquiry">REQUEST AN OEM / ODM QUOTATION <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}

export function RelatedLinks({ slugs }: { slugs: string[] }) {
  return (
    <section className="related-links" aria-labelledby="related-heading">
      <p className="eyebrow" id="related-heading">CONTINUE YOUR RESEARCH</p>
      <div>
        {slugs.map((slug) => (
          <a href={slug} key={slug}><span>{labelBySlug.get(slug) || slug}</span><ArrowUpRight size={20} /></a>
        ))}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <a className="brand footer-brand" href="/" aria-label="JH International home"><img src="/logo-jh-global.svg" alt="JH International" width="248" height="64" /></a>
        <p>Korean cosmetics OEM &amp; ODM product development for international beauty brands.</p>
      </div>
      <div className="footer-links">
        <div><strong>CAPABILITIES</strong><a href="/oem-odm">OEM / ODM</a><a href="/formulation">Formulation</a><a href="/packaging">Packaging</a><a href="/moq">MOQ</a></div>
        <div><strong>CATEGORIES</strong><a href="/skincare">Skincare</a><a href="/makeup">Makeup</a><a href="/sun-care">Sun Care</a><a href="/hair-care">Hair Care</a><a href="/body-care">Body Care</a></div>
        <div><strong>COMPANY</strong><a href="/about">About</a><a href="/location">Location</a><a href="/process">Process</a><a href="/compliance">Compliance</a><a href="/guides">Guides</a><a href="/faq">FAQ</a><a href="/inquiry">Inquiry</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} JH INTERNATIONAL</span><a href="/location">D-1311, 30 Songdo Mirae-ro, Incheon, South Korea</a><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="scroll-to-top"
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      })}
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main id="top">{children}</main><SiteFooter /><ScrollToTop /></>;
}
