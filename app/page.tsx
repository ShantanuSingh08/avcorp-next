import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Car,
  Check,
  Construction,
  Factory,
  Fuel,
  GraduationCap,
  HardHat,
  HeartPulse,
  Hotel,
  Layers,
  Network,
  Shirt,
  Star,
  Store,
  Truck,
  Zap,
} from "lucide-react";
import Placeholder from "@/components/Placeholder";
import JsonLd from "@/components/JsonLd";
import { categories } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { catalogueSchema, graph, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "A V CORP | Performance Textiles & Uniform Solutions",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: siteConfig.url,
    title: "A V CORP | Performance Textiles & Uniform Solutions",
    description: siteConfig.description,
  },
};

const aboutCards = [
  {
    icon: Layers,
    title: "Technical Performance Fabrics",
    text: "Fire retardant, inherent FR, water repellent, anti-static, arc flash, high visibility, ripstop and other application-led fabrics.",
  },
  {
    icon: Shirt,
    title: "Corporate Uniforms",
    text: "Custom tailored and ready-to-wear uniforms for offices, retail, hospitality, healthcare, aviation and institutions.",
  },
  {
    icon: HardHat,
    title: "Industrial Workwear",
    text: "Factory uniforms, flame-resistant clothing, safety jackets, boiler suits and PPE-compatible garments.",
  },
  {
    icon: Star,
    title: "Promotional Apparel",
    text: "Polo T-shirts, crew necks, jackets, hoodies, caps and branded merchandise for teams, events and gifting.",
  },
];

const processSteps = [
  { title: "Consult", text: "Understand requirements, application and objectives." },
  { title: "Design", text: "Translate brand and functional needs into product direction." },
  { title: "Fabric Development", text: "Source or develop the right fabric and finish." },
  { title: "Sampling", text: "Create samples for fit, feel and approval." },
  { title: "Manufacturing", text: "Execute production with process discipline." },
  { title: "Quality Assurance", text: "Quality checks at critical stages." },
  { title: "Delivery", text: "On-time dispatch with suitable packaging." },
  { title: "After Sales", text: "Reliable support even after delivery." },
];

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Fuel, label: "Oil & Gas" },
  { icon: Car, label: "Automobile" },
  { icon: Construction, label: "Construction" },
  { icon: Zap, label: "Power" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Hotel, label: "Hospitality" },
  { icon: GraduationCap, label: "Education" },
  { icon: Store, label: "Retail" },
  { icon: Briefcase, label: "Corporate" },
  { icon: Truck, label: "Logistics" },
  { icon: Network, label: "Infrastructure" },
];

const strengths = [
  "30+ years experience",
  "Technical fabric knowledge",
  "Custom manufacturing",
  "Strict quality control",
  "Timely deliveries",
  "Low MOQ & bulk orders",
  "Custom branding & embroidery",
  "Pan India supply",
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/",
            name: "A V CORP | Performance Textiles & Uniform Solutions",
            description: siteConfig.description,
          }),
          catalogueSchema(categories),
        ])}
      />
      <header className="hero">
        <div className="container">
          <div>
            <div className="eyebrow">Three generations of textile expertise</div>
            <h1>
              Performance textiles.
              <br />
              <span>Corporate apparel.</span>
              <br />
              Uniform solutions.
            </h1>
            <p>
              For over three decades, A V CORP has delivered textile solutions
              engineered for performance, comfort, durability and brand
              consistency, from technical fabrics to finished uniforms and
              promotional apparel.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/products">
                Explore Products
              </Link>
              <Link className="btn btn-outline" href="/contact">
                Discuss Your Requirement
              </Link>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-card">
              <div className="photo">
                <span>
                  Hero product / uniform photography
                  <br />
                  can be added here later
                </span>
              </div>
              <div className="stat-row">
                <div className="stat">
                  <strong>30+</strong>
                  <span>Years Experience</span>
                </div>
                <div className="stat">
                  <strong>3</strong>
                  <span>Generations Expertise</span>
                </div>
                <div className="stat">
                  <strong>Pan India</strong>
                  <span>Supply Capability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">About A V CORP</div>
              <h2>Textile knowledge built for modern business.</h2>
            </div>
            <p>
              Our core strength lies in understanding fabric, performance
              requirements and end-use applications. We support businesses with
              textile processing, fabric sourcing, uniforms, workwear, corporate
              apparel and made-ups.
            </p>
          </div>
          <div className="grid-4">
            {aboutCards.map((c) => (
              <div className="card" key={c.title}>
                <div className="icon">
                  <c.icon size={24} aria-hidden />
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Product solutions</div>
              <h2>Built around your industry and end use.</h2>
            </div>
            <Link className="btn btn-outline" href="/products">
              View All Categories
            </Link>
          </div>
          <div className="grid-3">
            {categories.map((c) => (
              <Link
                className="card product-card"
                href={`/products/${c.slug}`}
                key={c.slug}
              >
                <Placeholder label={`Add ${c.placeholderLabel} photography`} />
                <div className="content">
                  <span className="tag">{c.tag}</span>
                  <h3>{c.name}</h3>
                  <p>{c.cardBlurb}</p>
                  <span className="link-arrow">
                    Explore category
                    <ArrowRight size={16} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="process">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">How we work</div>
              <h2>From requirement to reliable delivery.</h2>
            </div>
            <p>
              A structured process helps us align design, fabric performance,
              sampling, production quality and final delivery with your business
              needs.
            </p>
          </div>
          <div className="process">
            {processSteps.map((s) => (
              <div className="step" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="soft" id="industries">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Industries we serve</div>
              <h2>Solutions across sectors.</h2>
            </div>
            <p>
              From corporate offices to demanding industrial environments, our
              products can be tailored to each sector&rsquo;s brand, comfort and
              performance needs.
            </p>
          </div>
          <div className="industry-grid">
            {industries.map((i) => (
              <div className="industry" key={i.label}>
                <b>
                  <i.icon size={24} aria-hidden />
                </b>
                {i.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <div>
              <div className="kicker">Why A V CORP</div>
              <h2
                style={{
                  fontSize: 46,
                  color: "var(--navy)",
                  lineHeight: 1.1,
                  margin: "0 0 18px",
                }}
              >
                Experience, technical knowledge and dependable execution.
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 17 }}>
                We combine textile expertise with a practical understanding of
                uniforms, workwear and corporate apparel so clients can source the
                right product with confidence.
              </p>
            </div>
            <div className="dark-panel">
              <h3>Our strengths</h3>
              <p>
                Built for long-term business relationships, not one-time
                transactions.
              </p>
              <div className="checks">
                {strengths.map((s) => (
                  <div className="check" key={s}>
                    <Check size={16} aria-hidden />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Have a uniform or fabric requirement?</h2>
              <p>
                Share the application, quantity and performance needs. We&rsquo;ll
                help you identify the right solution.
              </p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
