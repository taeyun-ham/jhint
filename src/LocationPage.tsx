import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import { Breadcrumbs, SiteLayout, usePageMeta } from './SiteChrome';

const koreanAddress = '인천시 연수구 송도미래로 30 D-1311';
const englishAddress = 'D-1311, 30 Songdo Mirae-ro, Yeonsu-gu, Incheon, Republic of Korea';
const mapQuery = encodeURIComponent('인천광역시 연수구 송도미래로 30');

export default function LocationPage() {
  usePageMeta(
    'JH International Location in Songdo, Incheon | Visit Us',
    'Find JH International at D-1311, 30 Songdo Mirae-ro, Yeonsu-gu, Incheon, South Korea. View the address and open directions.',
    '/location',
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'JH International',
      url: 'https://jhint.kr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'D-1311, 30 Songdo Mirae-ro',
        addressLocality: 'Yeonsu-gu, Incheon',
        addressCountry: 'KR',
      },
    },
  );

  return (
    <SiteLayout>
      <article className="content-page location-page">
        <header className="page-hero location-hero">
          <Breadcrumbs current="Location" />
          <p className="eyebrow">JH INTERNATIONAL / SOUTH KOREA</p>
          <h1>Find us<br /><em>in Songdo.</em></h1>
          <p className="page-intro">Our company address is in Songdo, Incheon. Use the map below to find the building, and include unit D-1311 when arranging your visit.</p>
          <span className="page-hero-image-note">KOREA · GLOBAL CONNECTIONS</span>
        </header>

        <section className="location-content" aria-labelledby="location-heading">
          <div className="location-details">
            <p className="eyebrow">COMPANY ADDRESS</p>
            <MapPin size={32} strokeWidth={1.4} aria-hidden="true" />
            <h2 id="location-heading">JH International</h2>
            <address>
              <strong>{koreanAddress}</strong>
              <span>{englishAddress}</span>
            </address>
            <p>Planning a meeting? Please contact us before visiting so we can coordinate the details.</p>
            <a className="button dark" href="/inquiry">CONTACT JH INTERNATIONAL <ArrowRight size={18} /></a>
          </div>
          <div className="location-map">
            <iframe
              title="Map showing 30 Songdo Mirae-ro, Yeonsu-gu, Incheon"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="location-map-links">
              <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer">OPEN IN GOOGLE MAPS <ArrowUpRight size={17} /></a>
              <a href={`https://map.naver.com/p/search/${mapQuery}`} target="_blank" rel="noopener noreferrer">OPEN IN NAVER MAP <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
