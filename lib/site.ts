/**
 * Central site configuration.
 *
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment to the real production
 * domain. The fallback below is only used for local builds and should be
 * updated once the live domain is confirmed.
 */
const rawUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.avcorp.co.in";

export const siteConfig = {
  name: "A V CORP",
  legalName: "A V Corp",
  url: rawUrl.replace(/\/+$/, ""),
  tagline: "Textiles engineered for business",
  description:
    "For over three decades, A V CORP has delivered textile solutions engineered for performance, comfort, durability and brand consistency, from technical fabrics to finished uniforms and promotional apparel.",
  shortDescription:
    "Performance textiles, corporate apparel and industrial uniform solutions backed by three generations of textile knowledge.",
  logo: "/assets/av-corp-logo.png",
  ogImage: "/assets/av-corp-logo.png",
  locale: "en_IN",
  foundingYear: "1993",
  telephone: "+91-9879579630",
  email: "avcorp86@gmail.com",
  address: {
    streetAddress: "B-1204, Titanium Heights, Corporate Road, Prahladnagar",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380015",
    addressCountry: "IN",
  },
  areaServed: "IN",
  affiliates: ["A V Corp", "Psynox Ventures LLP", "Partex Corporation"],
  /** Add verified profile URLs (LinkedIn, IndiaMART, Google Business, etc.) as they become available. */
  sameAs: [] as string[],
  knowsAbout: [
    "Performance fabrics",
    "Fire retardant textiles",
    "Corporate uniforms",
    "Industrial workwear",
    "Promotional apparel",
    "Hospitality linen",
    "Textile processing",
    "Uniform manufacturing",
  ],
};

export type SiteConfig = typeof siteConfig;

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
