import InquiryPage from './InquiryPage';
import LocationPage from './LocationPage';
import { GuidePage, GuidesPage, guides } from './GuidesPage';
import { ContentPage, FaqPage, HomePage, NotFoundPage, ProcessPage } from './MarketingPages';
import { pageBySlug } from './siteData';

function normalizedPath() {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path || '/';
}

export default function App() {
  const path = normalizedPath();
  if (path === '/') return <HomePage />;
  if (path === '/process') return <ProcessPage />;
  if (path === '/faq') return <FaqPage />;
  if (path === '/inquiry') return <InquiryPage />;
  if (path === '/location') return <LocationPage />;
  if (path === '/guides') return <GuidesPage />;
  const guide = guides.find((item) => path === `/guides/${item.slug}`);
  if (guide) return <GuidePage guide={guide} />;
  const page = pageBySlug.get(path);
  return page ? <ContentPage page={page} /> : <NotFoundPage />;
}
