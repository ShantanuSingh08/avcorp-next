import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Placeholder from "@/components/Placeholder";
import JsonLd from "@/components/JsonLd";
import { categories, getCategory } from "@/lib/products";
import {
  breadcrumbSchema,
  categorySchema,
  graph,
  slugify,
} from "@/lib/schema";

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) {
    return { title: "Product Category", robots: { index: false, follow: true } };
  }
  const path = `/products/${cat.slug}`;
  return {
    title: cat.name,
    description: cat.heroBlurb,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${cat.name} | A V CORP`,
      description: cat.heroBlurb,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  return (
    <>
      <JsonLd
        data={graph([
          ...categorySchema(cat),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: cat.name, path: `/products/${cat.slug}` },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> /{" "}
            {cat.name}
          </div>
          <h1>{cat.name}</h1>
          <p>{cat.heroBlurb}</p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="category-layout">
            <aside className="sidebar">
              <h3>Product Categories</h3>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className={c.slug === cat.slug ? "active" : ""}
                >
                  {c.name}
                </Link>
              ))}
            </aside>

            <main>
              <img
                className="category-photo"
                src={cat.image}
                alt={cat.name}
              />
              <div className="section-head">
                <div>
                  <div className="kicker">Product category</div>
                  <h2>{cat.name}</h2>
                </div>
                <p>
                  {cat.items.length} products in this range. Share your
                  application and we will confirm compositions, GSM, colours,
                  finishes and order quantities to suit.
                </p>
              </div>

              <div className="product-list">
                {cat.items.map((item) => (
                  <div
                    className="product-item"
                    id={slugify(item.name)}
                    key={item.name}
                  >
                    <Placeholder label={`Add ${item.name} photo`} />
                    <div className="body">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <Link className="link-arrow" href="/contact">
                        Request specs &amp; pricing
                        <ArrowRight size={16} aria-hidden />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
