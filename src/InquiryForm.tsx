import { useState } from "react";
import type { ReactNode, SyntheticEvent } from "react";
import { ArrowRight, Check, FileUp, LoaderCircle } from "lucide-react";

type Category = "skincare" | "hair-care" | "makeup";

const categories: Array<{ value: Category; label: string; sub: string }> = [
  { value: "skincare", label: "SKINCARE", sub: "Skin & personal care" },
  { value: "hair-care", label: "HAIR CARE", sub: "Hair & scalp care" },
  { value: "makeup", label: "MAKEUP", sub: "Colour cosmetics" },
];

const common = {
  referenceType: [
    "Photo / Image",
    "Physical Sample",
    "INCI / Formula",
    "Product Link",
  ],
  price: ["Mass", "Mid", "Premium", "Luxury"],
  markets: [
    "EU",
    "UK",
    "USA",
    "Australia",
    "Korea",
    "Middle East",
    "Asia",
    "Other",
  ],
};

const categoryFields = {
  skincare: {
    productTypes: [
      "Cleanser",
      "Toner",
      "Essence",
      "Serum",
      "Ampoule",
      "Emulsion",
      "Cream",
      "Gel",
      "Mask",
      "Eye Care",
      "Oil",
      "Mist",
      "Other",
    ],
    profileTitle: "SKIN & CONSUMER PROFILE",
    profiles: [
      [
        "Target skin type",
        "skin_type",
        [
          "Dry",
          "Oily",
          "Combination",
          "Normal",
          "Sensitive",
          "Mature",
          "All Skin Types",
        ],
      ],
      [
        "Primary concern",
        "primary_concern",
        [
          "Hydration",
          "Brightening",
          "Firming",
          "Anti-ageing",
          "Soothing",
          "Barrier Care",
          "Pore Care",
          "Blemish",
          "Other",
        ],
      ],
    ],
    formula: [
      [
        "Texture",
        "texture",
        [
          "Watery",
          "Gel",
          "Light Lotion",
          "Cream",
          "Rich Cream",
          "Oil",
          "Balm",
          "Milky",
          "Other",
        ],
      ],
      [
        "Finish",
        "finish",
        ["Matte", "Natural", "Dewy", "Glow", "Silky", "Non-greasy"],
      ],
      [
        "Performance",
        "performance",
        [
          "Fast Absorption",
          "Long-lasting Hydration",
          "Non-sticky",
          "Soothing",
          "Cooling",
          "Layering Friendly",
          "Other",
        ],
      ],
      [
        "Preferences",
        "preferences",
        [
          "Vegan",
          "Natural-derived",
          "Organic",
          "Fragrance-free",
          "Alcohol-free",
          "Silicone-free",
          "Other",
        ],
      ],
    ],
    packaging: [
      "Bottle",
      "Pump",
      "Dropper",
      "Tube",
      "Jar",
      "Airless",
      "Mist",
      "Stick",
      "Other",
    ],
    packagingDetailLabel: "Packaging status",
    packagingDetailName: "packaging_status",
    packagingDetail: [
      "Stock",
      "Custom",
      "Client Supplied",
      "Open to Recommendation",
    ],
  },
  "hair-care": {
    productTypes: [
      "Shampoo",
      "Conditioner",
      "Hair Mask",
      "Treatment",
      "Leave-in",
      "Hair Serum",
      "Hair Oil",
      "Scalp Treatment",
      "Styling",
      "Heat Protectant",
      "Other",
    ],
    profileTitle: "HAIR & SCALP PROFILE",
    profiles: [
      [
        "Hair type",
        "hair_type",
        [
          "Fine",
          "Thick",
          "Straight",
          "Wavy",
          "Curly",
          "Coily",
          "Coloured",
          "Bleached",
          "Damaged",
          "All Hair",
        ],
      ],
      [
        "Scalp type / concern",
        "scalp_concern",
        ["Normal", "Dry", "Oily", "Sensitive", "Flaky", "Itchy", "Other"],
      ],
      [
        "Primary objective",
        "primary_objective",
        [
          "Moisture",
          "Repair",
          "Strength",
          "Smoothness",
          "Shine",
          "Volume",
          "Frizz Control",
          "Scalp Care",
          "Colour Protection",
          "Other",
        ],
      ],
    ],
    formula: [
      [
        "Texture",
        "texture",
        [
          "Liquid",
          "Gel",
          "Cream",
          "Rich Mask",
          "Oil",
          "Serum",
          "Mist",
          "Foam",
          "Other",
        ],
      ],
      [
        "Performance",
        "performance",
        [
          "Fast Rinse",
          "Low Residue",
          "Long-lasting Fragrance",
          "Heat Protection",
          "Anti-frizz",
          "Detangling",
          "Softening",
          "Other",
        ],
      ],
      [
        "Preferences",
        "preferences",
        [
          "Vegan",
          "Natural-derived",
          "Silicone-free",
          "Sulfate-free",
          "Paraben-free",
          "Fragrance-free",
          "Colourant-free",
          "Other",
        ],
      ],
    ],
    packaging: [
      "Bottle",
      "Pump",
      "Tube",
      "Jar",
      "Sachet",
      "Spray",
      "Dropper",
      "Other",
    ],
    packagingDetailLabel: "Dispensing preference",
    packagingDetailName: "dispensing_preference",
    packagingDetail: [
      "Flip Cap",
      "Pump",
      "Foaming Pump",
      "Spray",
      "Dropper",
      "Open to Recommendation",
    ],
  },
  makeup: {
    productTypes: [
      "Foundation",
      "Cushion",
      "Concealer",
      "BB / CC",
      "Blush",
      "Bronzer",
      "Highlighter",
      "Eyeshadow",
      "Mascara",
      "Eyeliner",
      "Lipstick",
      "Lip Balm",
      "Lip Gloss",
      "Lip Liner",
      "Powder",
      "Other",
    ],
    profileTitle: "COLOUR & SHADE REQUIREMENTS",
    profiles: [],
    formula: [
      [
        "Finish",
        "finish",
        [
          "Matte",
          "Soft Matte",
          "Satin",
          "Natural",
          "Dewy",
          "Glow",
          "Glass / High Shine",
          "Metallic",
          "Other",
        ],
      ],
      [
        "Coverage / Payoff",
        "coverage",
        ["Sheer", "Buildable", "Medium", "Full", "High Pigment"],
      ],
      [
        "Performance",
        "performance",
        [
          "Long Wear",
          "Transfer Resistant",
          "Sweat Resistant",
          "Water Resistant",
          "Oil Control",
          "Crease Resistant",
          "Non-drying",
          "Other",
        ],
      ],
      [
        "Sensory",
        "sensory",
        [
          "Lightweight",
          "Creamy",
          "Melting",
          "Silky",
          "Cushioning",
          "Non-sticky",
          "Comfortable",
        ],
      ],
    ],
    packaging: [
      "Tube",
      "Bottle",
      "Compact",
      "Cushion",
      "Stick",
      "Palette",
      "Pen",
      "Pot",
      "Wand",
      "Other",
    ],
    packagingDetailLabel: "Colour references",
    packagingDetailName: "colour_references",
    packagingDetail: [
      "Pantone",
      "Benchmark",
      "Swatch",
      "Client Sample",
      "Other",
    ],
  },
} as const;

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="form-section">
      <div className="form-section-title">
        <span>{number}</span>
        <h2>{title}</h2>
      </div>
      <div className="form-section-body">{children}</div>
    </section>
  );
}

function TextField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="form-field">
      <span>
        {label}
        {required && <b> *</b>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="form-field full-field">
      <span>{label}</span>
      <textarea name={name} rows={4} placeholder={placeholder} />
    </label>
  );
}

function Choices({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <fieldset className="choice-group full-field">
      <legend>{label}</legend>
      <div className="choice-grid">
        {options.map((option) => (
          <label key={option}>
            <input type="checkbox" name={name} value={option} />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function InquiryForm() {
  const [category, setCategory] = useState<Category>("skincare");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);
  const fields = categoryFields[category];

  async function submit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);
    const form = event.currentTarget;
    const body = new FormData(form);
    body.set("category", category);

    try {
      const response = await fetch("/api/inquiry", { method: "POST", body });
      const result = (await response.json()) as { message?: string };
      if (!response.ok)
        throw new Error(result.message || "We could not send your inquiry.");
      setStatus({
        kind: "success",
        message: result.message || "Your inquiry has been sent.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your inquiry.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className="inquiry-form"
      onSubmit={submit}
      encType="multipart/form-data"
    >
      <div className="category-picker" aria-label="Select inquiry category">
        {categories.map((item, index) => (
          <button
            className={category === item.value ? "active" : ""}
            key={item.value}
            type="button"
            onClick={() => setCategory(item.value)}
          >
            <span>0{index + 1}</span>
            <strong>{item.label}</strong>
            <small>{item.sub}</small>
          </button>
        ))}
      </div>
      <input type="hidden" name="category" value={category} />
      <input
        className="honeypot"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <Section number="01" title="CLIENT & PROJECT INFORMATION">
        <TextField label="Company / Brand Name" name="company_brand" required />
        <TextField label="Contact Person" name="contact_person" required />
        <TextField label="Position" name="position" />
        <TextField label="Email" name="email" type="email" required />
        <TextField label="Phone" name="phone" required />
        <TextField
          label="Country / Target Market(s)"
          name="country_target_markets"
          required
        />
        <label className="form-field">
          <span>Brand Status</span>
          <select name="brand_status">
            <option>Existing Brand</option>
            <option>New Brand</option>
          </select>
        </label>
        <TextField
          label="Target Launch Date"
          name="target_launch_date"
          type="date"
        />
      </Section>

      <Section number="02" title="COMMERCIAL OVERVIEW">
        <TextField label="Estimated Initial Quantity" name="initial_quantity" />
        <TextField label="Expected Annual Volume" name="annual_volume" />
        <TextField label="Target MOQ" name="target_moq" />
        <Choices
          label="Target Price Positioning"
          name="price_positioning"
          options={common.price}
        />
      </Section>

      <Section number="03" title="BENCHMARK & REFERENCES">
        <TextArea
          label="Benchmark products, brands or reference links"
          name="benchmark_references"
          placeholder="Include URLs and what you like about each reference."
        />
        <Choices
          label="Reference supplied"
          name="reference_supplied"
          options={common.referenceType}
        />
        <label className="upload-field full-field">
          <FileUp size={22} />
          <span>
            <strong>Attach reference files</strong>
            <small>Images, PDF, DOCX or XLSX · Up to 4 files, 5 MB each</small>
          </span>
          <input
            type="file"
            name="attachments"
            multiple
            accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx,.xls,.xlsx"
          />
        </label>
      </Section>

      <Section number="04" title="PRODUCT & FORMAT">
        <Choices
          label="Product type"
          name="product_type"
          options={fields.productTypes}
        />
        <TextField label="Working Product Name" name="product_name" />
        <TextField
          label={
            category === "makeup" ? "Fill Weight / Volume" : "Target Fill Size"
          }
          name="fill_size"
        />
      </Section>

      <Section number="05" title={fields.profileTitle}>
        {category === "makeup" ? (
          <>
            <TextField label="Number of Shades" name="number_of_shades" />
            <Choices
              label="Colour References"
              name="colour_references"
              options={fields.packagingDetail}
            />
            <TextArea
              label="Shade names, descriptions or colour targets"
              name="shade_targets"
            />
          </>
        ) : (
          fields.profiles.map(([label, name, options]) => (
            <Choices key={name} label={label} name={name} options={options} />
          ))
        )}
      </Section>

      <Section
        number="06"
        title={
          category === "makeup"
            ? "FORMULA, FINISH & PERFORMANCE"
            : "FORMULA & SENSORY REQUIREMENTS"
        }
      >
        {fields.formula.map(([label, name, options]) => (
          <Choices key={name} label={label} name={name} options={options} />
        ))}
        <TextArea
          label={
            category === "makeup"
              ? "Key ingredients, technology or formula requirements"
              : "Preferred / required ingredients or technologies"
          }
          name="formula_requirements"
        />
        <TextArea
          label={
            category === "makeup"
              ? "Ingredients, pigments or materials to avoid"
              : "Ingredients, materials or claims to avoid"
          }
          name="materials_to_avoid"
        />
      </Section>

      {category === "makeup" && (
        <Section number="07" title="BENCHMARK PRODUCT">
          <TextArea
            label="What do you like about the benchmark product?"
            name="benchmark_details"
            placeholder="Colour, texture, finish, wear, coverage and application."
          />
        </Section>
      )}

      <Section
        number={category === "makeup" ? "08" : "07"}
        title={
          category === "makeup"
            ? "PACKAGING & APPLICATION"
            : "CLAIMS & REGULATORY"
        }
      >
        {category !== "makeup" ? (
          <>
            <TextArea
              label="Desired claims / marketing positioning"
              name="claims_positioning"
            />
            <Choices
              label="Target market"
              name="target_market"
              options={common.markets}
            />
            <TextArea
              label="Known regulatory, certification or ingredient restrictions"
              name="regulatory_restrictions"
            />
          </>
        ) : (
          <>
            <Choices
              label="Packaging"
              name="packaging"
              options={fields.packaging}
            />
            <TextArea
              label="Applicator / application requirements"
              name="application_requirements"
            />
          </>
        )}
      </Section>

      <Section
        number={category === "makeup" ? "09" : "08"}
        title={category === "makeup" ? "CLAIMS & REGULATORY" : "PACKAGING"}
      >
        {category === "makeup" ? (
          <>
            <TextArea
              label="Desired claims / positioning"
              name="claims_positioning"
            />
            <Choices
              label="Target market"
              name="target_market"
              options={common.markets}
            />
            <TextArea
              label="Known regulatory or ingredient restrictions"
              name="regulatory_restrictions"
            />
          </>
        ) : (
          <>
            <Choices
              label="Packaging"
              name="packaging"
              options={fields.packaging}
            />
            <Choices
              label={fields.packagingDetailLabel}
              name={fields.packagingDetailName}
              options={fields.packagingDetail}
            />
          </>
        )}
      </Section>

      <div className="form-consent">
        <label>
          <input
            type="checkbox"
            name="privacy_consent"
            required
            onInvalid={(event) =>
              event.currentTarget.setCustomValidity(
                "Please agree to the privacy policy before submitting your inquiry.",
              )
            }
            onChange={(event) => event.currentTarget.setCustomValidity("")}
          />
          <span>
            I agree that JH International may use the submitted information to
            review and respond to this product development inquiry.
          </span>
        </label>
      </div>

      <div className="form-submit">
        <div>
          <span className="eyebrow">READY TO SUBMIT?</span>
          <p>
            Required fields are marked with an asterisk. We&apos;ll review your
            brief and follow up using the contact details provided.
          </p>
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? (
            <LoaderCircle className="spin" size={19} />
          ) : (
            <Check size={19} />
          )}
          {submitting ? "SENDING…" : "SEND R&D INQUIRY"}{" "}
          <ArrowRight size={19} />
        </button>
      </div>
      {status && (
        <output className={`form-status ${status.kind}`} aria-live="polite">
          {status.message}
        </output>
      )}
    </form>
  );
}
