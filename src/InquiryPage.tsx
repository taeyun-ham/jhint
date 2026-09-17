import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import InquiryForm from './InquiryForm';

export default function InquiryPage() {
  return (
    <main className="inquiry-page">
      <header className="inquiry-header">
        <a className="brand" href="/" aria-label="JH International home">
          <span>JH</span>
          <small>INTERNATIONAL</small>
        </a>
        <a className="back-link" href="/">
          <ArrowLeft size={15} /> BACK TO SITE
        </a>
      </header>

      <section className="inquiry-hero">
        <div>
          <p className="eyebrow">R&amp;D PRODUCT DEVELOPMENT</p>
          <h1>BUILD YOUR<br /><em>PRODUCT BRIEF.</em></h1>
        </div>
        <div className="inquiry-hero-copy">
          <p>
            Tell us what you want to create. Our team will review your brief for
            development feasibility, manufacturing direction and project planning.
          </p>
          <p lang="ko">
            스킨케어, 헤어케어 또는 메이크업 제품의 요구사항을 작성해 주세요.
            확인 후 제품 개발 방향과 다음 단계를 안내드립니다.
          </p>
        </div>
      </section>

      <InquiryForm />

      <footer className="inquiry-footer">
        <span>JH INTERNATIONAL · KOREAN BEAUTY OEM / ODM</span>
        <a href="/">VIEW COMPANY SITE <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}
