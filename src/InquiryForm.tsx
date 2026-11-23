import { useState } from 'react';
import type { ReactNode, SyntheticEvent } from 'react';
import { ArrowRight, Check, LoaderCircle } from 'lucide-react';

type Category = 'skincare' | 'hair-care' | 'makeup';

const categories: Array<{ value: Category; label: string; sub: string }> = [
  { value: 'skincare', label: 'SKIN CARE', sub: 'Skin & personal care' },
  { value: 'makeup', label: 'MAKEUP', sub: 'Colour cosmetics' },
  { value: 'hair-care', label: 'HAIR & BODY CARE', sub: 'Hair, scalp & body care' },
];

const common = {
  price: ['Mass', 'Mid-Market', 'Premium', 'Luxury'],
};

const categoryFields = {
  skincare: { productTypes: ['Cleanser', 'Toner', 'Essence', 'Serum', 'Ampoule', 'Emulsion', 'Cream', 'Gel', 'Mask', 'Eye Care', 'Oil', 'Mist', 'Other'] },
  'hair-care': { productTypes: ['Shampoo', 'Conditioner', 'Hair Mask', 'Treatment', 'Leave-in', 'Hair Serum', 'Hair Oil', 'Scalp Treatment', 'Styling', 'Heat Protectant', 'Body Wash', 'Body Lotion', 'Body Cream', 'Body Oil', 'Body Scrub', 'Hand Care', 'Deodorant', 'Other'] },
  makeup: { productTypes: ['Foundation', 'Cushion', 'Concealer', 'BB / CC', 'Blush', 'Bronzer', 'Highlighter', 'Eyeshadow', 'Mascara', 'Eyeliner', 'Lipstick', 'Lip Balm', 'Lip Gloss', 'Lip Liner', 'Powder', 'Other'] },
} as const;

function Section({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="form-section">
      <div className="form-section-title"><span>{number}</span><h2>{title}</h2></div>
      <div className="form-section-body">{children}</div>
    </section>
  );
}

function TextField({ label, name, type = 'text', required = false, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="form-field">
      <span>{label}{required && <b> *</b>}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onInvalid={(event) => event.currentTarget.setCustomValidity('Please complete this field.')}
        onInput={(event) => event.currentTarget.setCustomValidity('')}
      />
    </label>
  );
}

function Choices({ label, name, options }: { label: string; name: string; options: readonly string[] }) {
  return (
    <fieldset className="choice-group full-field">
      <legend>{label}</legend>
      <div className="choice-grid">
        {options.map((option) => (
          <label key={option}><input type="checkbox" name={name} value={option} /><span>{option}</span></label>
        ))}
      </div>
    </fieldset>
  );
}

export default function InquiryForm() {
  const [category, setCategory] = useState<Category>('skincare');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ kind: 'success' | 'error'; message: string } | null>(null);
  const fields = categoryFields[category];

  async function submit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);
    const form = event.currentTarget;
    const body = new FormData(form);
    body.set('category', category === 'hair-care' ? 'hair & body care' : category);

    try {
      const response = await fetch('/api/inquiry', { method: 'POST', body });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || 'We could not send your inquiry.');
      setStatus({ kind: 'success', message: result.message || 'Your inquiry has been sent.' });
      form.reset();
    } catch (error) {
      setStatus({ kind: 'error', message: error instanceof Error ? error.message : 'We could not send your inquiry.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="inquiry-form" onSubmit={submit} encType="multipart/form-data">
      <div className="category-picker" aria-label="Select inquiry category">
        {categories.map((item, index) => (
          <button className={category === item.value ? 'active' : ''} key={item.value} type="button" onClick={() => setCategory(item.value)}>
            <span>0{index + 1}</span><strong>{item.label}</strong><small>{item.sub}</small>
          </button>
        ))}
      </div>
      <input type="hidden" name="category" value={category} />
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <Section number="01" title="CLIENT & PROJECT INFORMATION">
        <TextField label="Company / Brand Name" name="company_brand" required />
        <TextField label="Full Name" name="full_name" required placeholder="or Contact Name *" />
        <TextField label="Job Title / Role" name="job_title" />
        <TextField label="Email" name="email" type="email" required />
        <TextField label="Phone Number (Including Country Code)" name="phone" type="tel" />
        <TextField label="Target Market(s)" name="target_markets" required placeholder="e.g., South Korea, US, EU, Global" />
        <label className="form-field"><span>Brand Status</span><select name="brand_status"><option>Existing Brand</option><option>New Brand (Pre-Launch)</option><option>Distributor</option></select></label>
        <TextField label="Estimated Launch Timeline" name="launch_timeline" placeholder="YYYY-MM or Q3 2026" />
      </Section>

      <Section number="02" title="PRODUCT & FORMAT">
        <Choices label="Product type" name="product_type" options={fields.productTypes} />
        <TextField label="Working Product Name" name="product_name" />
        <TextField label={category === 'makeup' ? 'Fill Weight / Volume' : 'Target Fill Size'} name="fill_size" />
      </Section>

      <Section number="03" title="COMMERCIAL OVERVIEW">
        <TextField label="Estimated Initial Quantity" name="initial_quantity" placeholder="e.g., 3,000 – 5,000 units" />
        <TextField label="Expected Annual Volume" name="annual_volume" placeholder="e.g., 15,000 units / year" />
        <Choices label="Target Retail Positioning" name="retail_positioning" options={common.price} />
      </Section>

      <div className="form-consent">
        <label><input type="checkbox" name="privacy_consent" required onInvalid={(event) => event.currentTarget.setCustomValidity('Please agree to the privacy notice before submitting your inquiry.')} onInput={(event) => event.currentTarget.setCustomValidity('')} /><span>I agree that JH International may use the submitted information to review and respond to this product development inquiry.</span></label>
      </div>

      <div className="form-submit">
        <div>
          <span className="eyebrow">READY TO SUBMIT?</span>
          <p>Required fields are marked with an asterisk. We&apos;ll review your brief and follow up using the contact details provided.</p>
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? <LoaderCircle className="spin" size={19} /> : <Check size={19} />}
          {submitting ? 'SENDING…' : 'SEND R&D INQUIRY'} <ArrowRight size={19} />
        </button>
      </div>
      {status && <output className={`form-status ${status.kind}`} aria-live="polite">{status.message}</output>}
    </form>
  );
}
