import { useEffect } from 'react';
import HomePage from './HomePage';
import InquiryPage from './InquiryPage';

const SITE_NAME = 'JH International';

export default function App() {
  const isInquiry = window.location.pathname.replace(/\/+$/, '') === '/inquiry';

  useEffect(() => {
    document.title = isInquiry
      ? `Cosmetics OEM ODM R&D Inquiry | ${SITE_NAME}`
      : `${SITE_NAME} | Korean Cosmetics OEM ODM Manufacturer`;

    const description = isInquiry
      ? 'Submit a skincare, hair care or makeup OEM/ODM product development brief to JH International in Korea.'
      : 'Korean cosmetics OEM and ODM partner for skincare, makeup, hair care formulation, packaging, manufacturing and global export.';
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [isInquiry]);

  return isInquiry ? <InquiryPage /> : <HomePage />;
}
