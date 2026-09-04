import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "A V CORP | Performance Textiles & Uniform Solutions",
    template: "%s | A V CORP",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "performance fabrics",
    "fire retardant fabric",
    "corporate uniforms",
    "industrial workwear",
    "promotional apparel",
    "uniform manufacturer India",
    "hospitality linen",
    "textile solutions Ahmedabad",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "A V CORP | Performance Textiles & Uniform Solutions",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "A V CORP | Performance Textiles & Uniform Solutions",
    description: siteConfig.shortDescription,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Textiles & Apparel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={graph([organizationSchema(), websiteSchema()])} />
      </head>
      <body>
        <TopBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
