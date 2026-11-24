import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, SiteLayout, usePageMeta } from "./SiteChrome";

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
          {/* 방문 안내를 첫 화면에 둠(2026-11-24 두 번째 섹션 없앰) */}
          <div className="location-visit">
            <p className="location-note">
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
        </header>
      </article>
    </SiteLayout>
  );
}
