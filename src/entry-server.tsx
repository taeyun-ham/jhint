import { renderToString } from 'react-dom/server';
import App from './App';
import { MetadataContext, type PageMetadata } from './SiteChrome';
export { seoPages } from './seoData';
export { heroImageForPath } from './heroImages';
export function render(pathname: string) {
  let metadata: PageMetadata | undefined;
  const html = renderToString(<MetadataContext.Provider value={(value) => { metadata = value; }}><App pathname={pathname} /></MetadataContext.Provider>);
  if (!metadata) throw new Error('Missing metadata for ' + pathname);
  return { html, metadata };
}
