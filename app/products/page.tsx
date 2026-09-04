import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/Placeholder";
import JsonLd from "@/components/JsonLd";
import { categories } from "@/lib/products";
import {
  breadcrumbSchema,
  catalogueSchema,
  graph,
  webPageSchema,
} from "@/lib/schema";

const description =
  "Explore A V CORP product solutions: performance fabrics, uniform solutions, industrial workwear, promotional apparel, hospitality linen and corporate merchandise.";

export const metadata: Metadata = {
  title: "Products",
  description,
  alternates: { canonical: "/products" },
  openGraph: {
    url: "/products",
    title: "Our Product Solutions",
    description,
  },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/products",
            name: "Our Product Solutions",
            description,
            type: "CollectionPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
          catalogueSchema(categories),
        ])}
      />
      <header className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Products
          </div>
          <h1>Our Product Solutions</h1>
          <p>
            Six connected categories covering performance fabrics, uniforms,
            industrial workwear, promotional apparel, hospitality linen and
            corporate merchandise. Each one is built around your industry, brand
            and end use.
          </p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="grid-3">
            {categories.map((c) => (
              <Link
                className="card product-card"
                href={`/products/${c.slug}`}
                key={c.slug}
              >
                <Placeholder label={`${c.name} photos`} />
                <div className="content">
                  <span className="tag">{c.tag}</span>
                  <h3>{c.name}</h3>
                  <p>{c.cardBlurb}</p>
                  <span className="link-arrow">
                    View products
                    <ArrowRight size={16} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
