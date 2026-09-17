import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Beaker,
  Box,
  Check,
  ClipboardCheck,
  CircleDot,
  Droplets,
  Factory,
  FlaskConical,
  Globe2,
  Layers3,
  MoveRight,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Beaker,
    title: 'FORMULATION & R&D',
    copy: 'Trend-aware Korean formulations developed around your concept, market and performance goals.',
  },
  {
    number: '02',
    icon: Factory,
    title: 'OEM / ODM',
    copy: 'Flexible manufacturing for emerging and established brands, with quality control at every stage.',
  },
  {
    number: '03',
    icon: Box,
    title: 'PACKAGING DESIGN',
    copy: 'Packaging sourcing and refinement that turns a strong formula into a compelling shelf presence.',
  },
  {
    number: '04',
    icon: Globe2,
    title: 'GLOBAL EXPORT',
    copy: 'Export-ready documentation and practical coordination for a confident route into global markets.',
  },
];

const productLines = [
  ['SKINCARE', 'Toners · Essences · Serums · Creams · Masks · Cleansers'],
  ['COLOR COSMETICS', 'Foundation · BB / CC · Powder · Lip · Eye · Multi-use'],
  ['BODY & PERSONAL', 'Body care · Washes · Hand & foot · Spa concepts'],
  ['HAIR & SCALP', 'Shampoo · Conditioner · Treatments · Styling · Scalp care'],
];

const developmentCapabilities = [
  {
    icon: FlaskConical,
    title: 'CUSTOM FORMULATION',
    copy: 'Build from a new brief or adapt a proven formulation platform to your market, texture and positioning.',
  },
  {
    icon: Droplets,
    title: 'INGREDIENT DIRECTION',
    copy: 'Select actives, sensory profiles and ingredient stories that support the product concept and target consumer.',
  },
  {
    icon: ClipboardCheck,
    title: 'TESTING COORDINATION',
    copy: 'Coordinate stability, compatibility, performance and other project-appropriate testing before production.',
  },
];

const faqs = [
  ['DO YOU SUPPORT BOTH OEM AND ODM PROJECTS?', 'Yes. We can coordinate private-label OEM projects as well as more customized ODM development, depending on your formula, packaging and launch requirements.'],
  ['WHAT SHOULD I PREPARE FOR A FIRST CONSULTATION?', 'Your target market, product category, desired claims or texture, target price, estimated quantity and ideal launch timing give us the best starting point.'],
  ['HOW ARE MOQ AND LEAD TIME DECIDED?', 'Minimum quantities and timing vary by formula, component, decoration, testing and production schedule. We confirm them after the initial scope is defined.'],
  ['CAN YOU SUPPORT EXPORT PREPARATION?', 'We coordinate product and manufacturing documentation with the selected partners. Final requirements are reviewed for each destination market and product category.'],
];

const steps = [
  ['01', 'DISCOVER', 'We align on your audience, market, product vision, target cost and launch timing.'],
  ['02', 'DEVELOP', 'Our specialists coordinate formulas, samples, testing and packaging selection.'],
  ['03', 'PRODUCE', 'Approved specifications move into controlled manufacturing and quality assurance.'],
  ['04', 'DELIVER', 'Finished products are prepared for export and coordinated to your destination.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="JH International home">
          <span>JH</span>
          <small>INTERNATIONAL</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#products">PRODUCTS</a>
          <a href="#process">PROCESS</a>
          <a href="/inquiry">INQUIRY</a>
        </nav>
        <a className="header-cta" href="/inquiry">START A PROJECT <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">SEOUL · KOREA / GLOBAL BEAUTY PARTNER</p>
          <h1>BEAUTY,<br />MADE<br /><em>BETTER.</em></h1>
          <p className="hero-description">
            From first formula to final packaging, we create Korean beauty products
            made to move brands forward.
          </p>
          <a className="text-link" href="#services">EXPLORE OUR CAPABILITIES <ArrowDown size={17} /></a>
        </div>
        <div className="hero-visual" role="img" aria-label="Premium Korean skincare campaign">
          <span className="vertical-note">OEM / ODM · PRIVATE LABEL · EXPORT</span>
        </div>
      </section>

      <section className="intro" id="about">
        <div>
          <p className="eyebrow light">YOUR IDEA, MADE REAL</p>
          <h2>We turn ambitious<br />beauty ideas into<br />market-ready products.</h2>
        </div>
        <div className="intro-copy">
          <p>
            JH International connects global brands with Korea&apos;s beauty innovation
            ecosystem. Strategy, formulation, packaging and production—managed as
            one focused process.
          </p>
          <a className="light-link" href="#process">SEE HOW WE WORK <ArrowUpRight size={18} /></a>
        </div>
        <div className="stat-row">
          <div><strong>ONE</strong><span>DEDICATED PARTNER</span></div>
          <div><strong>360°</strong><span>PRODUCT DEVELOPMENT</span></div>
          <div><strong>GLOBAL</strong><span>MARKET PERSPECTIVE</span></div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>ONE PARTNER.<br /><em>EVERY STEP.</em></h2>
          </div>
          <p>Integrated beauty manufacturing services built to make complex product development feel clear.</p>
        </div>
        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, copy }) => (
            <article className="service-card" key={number}>
              <div className="service-top"><span>{number}</span><Icon size={24} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight className="service-arrow" size={21} />
            </article>
          ))}
        </div>
      </section>

      <section className="products" id="products">
        <div className="products-lead">
          <p className="eyebrow light">WHAT WE MAKE</p>
          <h2>FORMULAS FOR<br />THE WAY BEAUTY<br /><i>IS MOVING.</i></h2>
          <p>Built with Korean innovation, adapted to your market, and designed to belong unmistakably to your brand.</p>
        </div>
        <div className="product-list">
          {productLines.map(([title, detail], index) => (
            <div className="product-row" key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{detail}</p></div>
              <ArrowRight size={26} />
            </div>
          ))}
        </div>
      </section>

      <section className="development" id="development">
        <div className="development-heading">
          <p className="eyebrow">R&D / PRODUCT DEVELOPMENT</p>
          <h2>SCIENCE MEETS<br /><em>SENSORY DESIGN.</em></h2>
          <p>
            Through our Korean manufacturing network, we connect concept strategy with
            formulation expertise, premium ingredients, testing coordination and scalable production.
          </p>
        </div>
        <div className="development-grid">
          {developmentCapabilities.map(({ icon: Icon, title, copy }, index) => (
            <article key={title}>
              <div><span>0{index + 1}</span><Icon size={24} strokeWidth={1.4} /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
          <aside className="brief-card">
            <span className="brief-label">A STRONG BRIEF STARTS WITH</span>
            <ul>
              <li>Target market & consumer</li>
              <li>Format, texture & finish</li>
              <li>Hero ingredients & positioning</li>
              <li>Target cost & estimated quantity</li>
              <li>Packaging direction & launch window</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-title">
          <p className="eyebrow">OUR PROCESS</p>
          <h2>FROM BRIEF<br />TO <em>BEAUTY.</em></h2>
          <p>A clear, collaborative path from possibility to finished product.</p>
        </div>
        <div className="steps">
          {steps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <CircleDot size={18} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="standards">
        <div className="standards-copy">
          <p className="eyebrow light">QUALITY, BUILT IN</p>
          <h2>CONFIDENCE AT<br />EVERY <i>STAGE.</i></h2>
          <p>We work with qualified Korean manufacturing partners and align each project with the standards required for its destination market.</p>
        </div>
        <div className="standard-points">
          <div><ShieldCheck /><span>QUALITY-CONTROLLED PRODUCTION</span><Check /></div>
          <div><PackageCheck /><span>MARKET-READY DOCUMENTATION</span><Check /></div>
          <div><Layers3 /><span>TRACEABLE DEVELOPMENT PROCESS</span><Check /></div>
          <div><Sparkles /><span>RESPONSIBLE BEAUTY OPTIONS</span><Check /></div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-heading">
          <p className="eyebrow">GOOD QUESTIONS, CLEAR ANSWERS</p>
          <h2>BEFORE WE<br /><em>BEGIN.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>0{index + 1}</span>{question}<span className="faq-plus">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">START SOMETHING BEAUTIFUL</p>
        <h2>READY TO BUILD<br />WHAT&apos;S <em>NEXT?</em></h2>
        <p className="contact-copy">Tell us where you want your brand to go. We&apos;ll help shape the product that gets it there.</p>
        <a className="contact-button" href="/inquiry">START YOUR R&amp;D INQUIRY <MoveRight size={21} /></a>
        <p className="contact-note" id="contact-details">SKINCARE · HAIR CARE · MAKEUP / COLOUR COSMETICS</p>
      </section>

      <section className="seo-intro" aria-labelledby="korean-manufacturing-heading">
        <p className="eyebrow">KOREAN COSMETICS OEM / ODM</p>
        <div>
          <h2 id="korean-manufacturing-heading">K-BEAUTY PRODUCT DEVELOPMENT<br />FOR GLOBAL BRANDS</h2>
          <p>
            JH International supports skincare, colour cosmetics, body care and hair care projects
            through Korean OEM and ODM development, packaging coordination and export preparation.
          </p>
          <p lang="ko">
            JH International은 한국 화장품 OEM·ODM 파트너로서 스킨케어, 색조화장품,
            바디케어 및 헤어케어의 처방 개발부터 패키징과 수출 준비까지 지원합니다.
          </p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home"><span>JH</span><small>INTERNATIONAL</small></a>
        <p>KOREAN BEAUTY · OEM / ODM · GLOBAL PARTNERSHIP</p>
        <a href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}
