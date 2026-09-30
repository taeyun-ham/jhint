import InquiryPage from './InquiryPage';
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
  const page = pageBySlug.get(path);
  return page ? <ContentPage page={page} /> : <NotFoundPage />;
}
