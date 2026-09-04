import { absoluteUrl, siteConfig } from "@/lib/site";
import type { Category } from "@/lib/products";

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.shortDescription,
    slogan: siteConfig.tagline,
    foundingDate: siteConfig.foundingYear,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logo),
    },
    image: absoluteUrl(siteConfig.ogImage),
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.telephone,
      email: siteConfig.email,
      contactType: "sales",
      areaServed: siteConfig.areaServed,
      availableLanguage: ["en", "hi", "gu"],
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: siteConfig.knowsAbout,
    ...(siteConfig.sameAs.length ? { sameAs: siteConfig.sameAs } : {}),
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage";
}): Json {
  const url = absoluteUrl(opts.path);
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Collection page + the list of products inside a catalogue category. */
export function categorySchema(category: Category): Json[] {
  const categoryUrl = absoluteUrl(`/products/${category.slug}`);

  const collectionPage: Json = {
    "@type": "CollectionPage",
    "@id": `${categoryUrl}#webpage`,
    url: categoryUrl,
    name: `${category.name} | ${siteConfig.name}`,
    description: category.heroBlurb,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };

  const itemList: Json = {
    "@type": "ItemList",
    name: category.name,
    description: category.heroBlurb,
    numberOfItems: category.items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: category.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: item.name,
        description: item.description,
        category: category.name,
        url: `${categoryUrl}#${slugify(item.name)}`,
        brand: { "@id": ORG_ID },
        manufacturer: { "@id": ORG_ID },
      },
    })),
  };

  return [collectionPage, itemList];
}

/** ItemList for the products overview page. */
export function catalogueSchema(categories: Category[]): Json {
  return {
    "@type": "ItemList",
    name: "Product solutions",
    numberOfItems: categories.length,
    itemListElement: categories.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      description: c.cardBlurb,
      url: absoluteUrl(`/products/${c.slug}`),
    })),
  };
}

export function contactPageSchema(): Json {
  return {
    "@type": "ContactPage",
    "@id": absoluteUrl("/contact") + "#webpage",
    url: absoluteUrl("/contact"),
    name: `Contact | ${siteConfig.name}`,
    description:
      "Share your fabric, uniform, workwear or promotional apparel requirement with A V CORP.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/**
 * Wrap one or more schema nodes in a single JSON-LD graph document with the
 * shared @context.
 */
export function graph(nodes: Json[]): Json {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
