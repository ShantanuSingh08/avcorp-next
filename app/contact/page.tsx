import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, contactPageSchema, graph } from "@/lib/schema";

const description =
  "Share your fabric, uniform, workwear or promotional apparel requirement with A V CORP. Call +91-9879579630 or email avcorp86@gmail.com.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact A V CORP",
    description,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph([
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Contact
          </div>
          <h1>Let&rsquo;s discuss your requirement.</h1>
          <p>
            Share your fabric, uniform, workwear or promotional apparel
            requirement. This preview form is ready to connect to email, WhatsApp,
            CRM or an enquiry backend later.
          </p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="kicker" style={{ color: "#ff8891" }}>
                Reach us
              </div>
              <h2>A V CORP</h2>
              <p>
                <strong>Address</strong>
                <br />
                B-1204, Titanium Heights,
                <br />
                Corporate Road, Prahladnagar,
                <br />
                Ahmedabad 380015 (Guj) India
              </p>
              <p>
                <strong>Phone / WhatsApp</strong>
                <br />
                <a href="tel:+919879579630">+91-9879579630</a>
              </p>
              <p>
                <strong>Email</strong>
                <br />
                <a href="mailto:avcorp86@gmail.com">avcorp86@gmail.com</a>
              </p>
              <p>
                <strong>Business entities</strong>
                <br />
                A V Corp
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
