import { ArrowUpRight, MapPin } from "lucide-react";
import { Breadcrumbs, SiteLayout, usePageMeta } from "./SiteChrome";

const koreanAddress = "인천시 연수구 송도미래로 30 D-1311";
const englishAddress =
  "D-1311, 30 Songdo Mirae-ro, Yeonsu-gu, Incheon, Republic of Korea";
const mapQuery = encodeURIComponent("인천광역시 연수구 송도미래로 30");
const whatsappUrl = "https://wa.me/821079706252";

export default function LocationPage() {
  usePageMeta(
    "JH International Location in Songdo, Incheon | Visit Us",
    "JH International is located at D-1311, 30 Songdo Mirae-ro, Incheon, South Korea. Visits are by appointment only. Contact us on WhatsApp to arrange a meeting.",
    "/location",
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "JH International",
      url: "https://jhint.kr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "D-1311, 30 Songdo Mirae-ro",
        addressLocality: "Yeonsu-gu, Incheon",
        addressCountry: "KR",
      },
      telephone: "+82-10-7970-6252",
    },
  );

  return (
    <SiteLayout>
      <article className="content-page location-page">
        <header className="page-hero location-hero">
          <Breadcrumbs current="Location" />
          <p className="eyebrow">JH INTERNATIONAL / SOUTH KOREA</p>
          <h1>
            Find us
            <br />
            <em>in Korea.</em>
          </h1>
          <p className="page-intro">We're located in Incheon, Korea.</p>
        </header>

        <section
          className="location-content"
          aria-labelledby="location-heading"
        >
          <div className="location-details">
            <p className="eyebrow">COMPANY ADDRESS</p>
            <MapPin size={32} strokeWidth={1.4} aria-hidden="true" />
            <h2 id="location-heading">JH International</h2>
            <address>
              <strong>{koreanAddress}</strong>
              <span>{englishAddress}</span>
            </address>
            <p>
              Our office operates by appointment only. Please contact JH
              International in advance to arrange a meeting.
            </p>
            <div className="location-contact">
              <div>
                <a
                  className="button dark"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CONTACT JH INTERNATIONAL <ArrowUpRight size={18} />
                </a>
                <span className="location-whatsapp">
                  WhatsApp{" "}
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    +82 10 7970 6252
                  </a>
                </span>
              </div>
              {/* QR은 PC에서만 보임(폰은 버튼으로 바로 연결) */}
              <img
                className="location-qr"
                src="/images/contact/jh-international-whatsapp-qr.png"
                alt="Scan to chat with JH International on WhatsApp"
                width="434"
                height="434"
                loading="lazy"
              />
            </div>
          </div>
          <div className="location-map">
            <iframe
              title="Map showing 30 Songdo Mirae-ro, Yeonsu-gu, Incheon"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="location-map-links">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                OPEN IN GOOGLE MAPS <ArrowUpRight size={17} />
              </a>
              <a
                href={`https://map.naver.com/p/search/${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                OPEN IN NAVER MAP <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
