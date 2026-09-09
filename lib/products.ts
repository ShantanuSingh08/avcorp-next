export type ProductItem = {
  name: string;
  description: string;
  /** Product photo shown on the category page. Falls back to a placeholder when omitted. */
  image?: string;
};

export type Category = {
  slug: string;
  name: string;
  /** Uppercase tag shown on cards */
  tag: string;
  /** Short blurb used on the home page + products overview cards */
  cardBlurb: string;
  /** Longer intro shown in the category page hero */
  heroBlurb: string;
  /** Text used inside the image placeholder blocks */
  placeholderLabel: string;
  /** Card / hero photography for the category */
  image: string;
  items: ProductItem[];
};

export const categories: Category[] = [
  {
    slug: "performance-fabrics",
    name: "Performance Fabrics",
    tag: "Technical Textiles",
    cardBlurb:
      "Advanced fabrics for challenging industrial and uniform applications.",
    heroBlurb:
      "Technical textiles and performance finishes for uniforms, workwear and demanding environments.",
    placeholderLabel: "fabric product",
    image: "/assets/performance_fabrics.webp",
    items: [
      {
        name: "Fire Retardant (FR)",
        description:
          "Fabric options designed for flame-resistant uniform and workwear applications.",
        image: "/assets/products/Fire Retardant (FR).webp",
      },
      {
        name: "Inherent FR",
        description:
          "Performance built into the fibre system for demanding protective applications.",
        image: "/assets/products/Inherent FR.webp",
      },
      {
        name: "Water Repellent",
        description:
          "Finished fabrics designed to resist light water exposure and improve wearer protection.",
        image: "/assets/products/Water Repellent.webp",
      },
      {
        name: "Oil Repellent",
        description:
          "Specialty finish options for environments where oil resistance is required.",
        image: "/assets/products/Oil Repellent.webp",
      },
      {
        name: "Anti Static",
        description:
          "Fabric solutions developed for applications where static control is important.",
        image: "/assets/products/Anti Static.webp",
      },
      {
        name: "Acid Resistant",
        description:
          "Protective fabric options for selected industrial applications.",
        image: "/assets/products/Acid Resistant.webp",
      },
      {
        name: "ARC Flash Protection",
        description:
          "Performance textile options for arc-flash protective garment applications.",
        image: "/assets/products/ARC Flash Protection.webp",
      },
      {
        name: "High Visibility Fabrics",
        description:
          "Fluorescent and visibility-focused fabric solutions for safety garments.",
        image: "/assets/products/High Visibility Fabrics.webp",
      },
      {
        name: "Reflective Fabrics",
        description:
          "Reflective material options for visibility-enhancing garments.",
        image: "/assets/products/Reflective Fabrics.webp",
      },
      {
        name: "Ripstop Fabrics",
        description:
          "Reinforced constructions designed for improved tear resistance.",
        image: "/assets/products/Ripstop Fabrics.webp",
      },
      {
        name: "UV Protection",
        description: "Fabric solutions with UV-protection performance options.",
        image: "/assets/products/UV Protection.webp",
      },
      {
        name: "Moisture Management",
        description:
          "Fabrics developed to improve comfort through moisture handling.",
        image: "/assets/products/Moisture Management.webp",
      },
      {
        name: "Anti Microbial",
        description: "Finish options aimed at hygiene-focused applications.",
        image: "/assets/products/Anti Microbial.webp",
      },
      {
        name: "Wrinkle Free",
        description:
          "Easy-care fabric options for uniform and corporate apparel.",
        image: "/assets/products/Wrinkle Free.webp",
      },
      {
        name: "Stretch Performance Fabrics",
        description:
          "Comfort stretch options for active work and uniform applications.",
        image: "/assets/products/Stretch Performance Fabrics.webp",
      },
    ],
  },
  {
    slug: "uniform-solutions",
    name: "Uniform Solutions",
    tag: "Corporate Apparel",
    cardBlurb:
      "Consistent, professional uniforms designed around brand and function.",
    heroBlurb:
      "Custom tailored and ready-to-wear uniforms developed around brand, role and working environment.",
    placeholderLabel: "uniform",
    image: "/assets/uniform_solutions.webp",
    items: [
      {
        name: "Corporate Uniforms",
        description:
          "Office and front-of-house uniforms with consistent brand presentation.",
        image: "/assets/products/Corporate Uniforms.webp",
      },
      {
        name: "Industrial Uniforms",
        description:
          "Practical uniforms for factories, plants and industrial teams.",
        image: "/assets/products/Industrial Uniforms.webp",
      },
      {
        name: "Security Uniforms",
        description: "Professional uniform programs for security personnel.",
        image: "/assets/products/Security Uniforms.webp",
      },
      {
        name: "Hospitality Uniforms",
        description:
          "Front office, housekeeping, F&B and service staff uniforms.",
        image: "/assets/products/Hospitality Uniforms.webp",
      },
      {
        name: "Healthcare Uniforms",
        description:
          "Uniform solutions for hospitals, clinics and healthcare teams.",
        image: "/assets/products/Healthcare Uniforms.webp",
      },
      {
        name: "Aviation Uniforms",
        description:
          "Professional uniform concepts for aviation-facing teams.",
        image: "/assets/products/Aviation Uniforms.webp",
      },
      {
        name: "Educational Institutions",
        description:
          "Uniform solutions for institutional and education requirements.",
        image: "/assets/products/Educational Institutions.webp",
      },
    ],
  },
  {
    slug: "industrial-workwear",
    name: "Industrial Workwear",
    tag: "Industrial Safety",
    cardBlurb:
      "Workwear engineered for durability, visibility and workplace requirements.",
    heroBlurb:
      "Durable workwear designed around comfort, visibility, workplace conditions and performance needs.",
    placeholderLabel: "industrial workwear",
    image: "/assets/industrial_workwear.webp",
    items: [
      {
        name: "Factory Uniforms",
        description:
          "Functional everyday uniforms for manufacturing and plant environments.",
        image: "/assets/products/Factory Uniforms.webp",
      },
      {
        name: "Flame Resistant Clothing",
        description: "Protective apparel using suitable FR fabric systems.",
        image: "/assets/products/Flame Resistant Clothing.webp",
      },
      {
        name: "Safety Jackets",
        description:
          "Visibility-focused jackets and vests for industrial teams.",
        image: "/assets/products/Safety Jackets.webp",
      },
      {
        name: "Boiler Suits",
        description: "One-piece workwear solutions for industrial applications.",
        image: "/assets/products/Boiler Suits.webp",
      },
      {
        name: "High Visibility Apparel",
        description: "Garments designed to improve worker visibility.",
        image: "/assets/products/High Visibility Apparel.webp",
      },
      {
        name: "PPE Compatible Garments",
        description:
          "Workwear developed to integrate with additional protective equipment.",
        image: "/assets/products/PPE Compatible Garments.webp",
      },
    ],
  },
  {
    slug: "promotional-apparel",
    name: "Promotional Apparel",
    tag: "Brand Merchandise",
    cardBlurb:
      "Branded apparel for gifting, events, sales teams and employee engagement.",
    heroBlurb:
      "Branded clothing for sales teams, events, gifting, launches and employee programs.",
    placeholderLabel: "promotional apparel",
    image: "/assets/promotional_apparel.webp",
    items: [
      {
        name: "Polo T-Shirts",
        description:
          "Versatile branded polos for corporate and promotional use.",
        image: "/assets/products/Polo T-Shirts.webp",
      },
      {
        name: "Crew Neck T-Shirts",
        description:
          "Comfortable T-shirts suitable for campaigns and events.",
        image: "/assets/products/Crew Neck T-Shirts.webp",
      },
      {
        name: "Hoodies & Sweatshirts",
        description: "Casual branded apparel for teams and gifting.",
        image: "/assets/products/Hoodies & Sweatshirts.webp",
      },
      {
        name: "Jackets",
        description:
          "Lightweight and functional branded outerwear options.",
        image: "/assets/products/Jackets.webp",
      },
      {
        name: "Caps",
        description:
          "Custom branded caps for campaigns, teams and events.",
        image: "/assets/products/Caps.webp",
      },
      {
        name: "Event Merchandise",
        description:
          "Apparel programs tailored for specific events and activations.",
        image: "/assets/products/Event Merchandise.webp",
      },
    ],
  },
  {
    slug: "hospitality-linen",
    name: "Hospitality Linen",
    tag: "Hospitality",
    cardBlurb:
      "Bed, bath, restaurant and institutional linen for hotels and guest facilities.",
    heroBlurb:
      "Bed, bath, restaurant and institutional linen for hotels, resorts, corporate guest houses and institutions.",
    placeholderLabel: "hospitality linen",
    image: "/assets/hospitality_linen.webp",
    items: [
      {
        name: "Bed Linen",
        description:
          "Sheeting, pillow covers and related bed-linen solutions.",
        image: "/assets/products/Bed Linen.webp",
      },
      {
        name: "Bath Linen",
        description:
          "Towels and bath-linen products for hospitality applications.",
        image: "/assets/products/Bath Linen.webp",
      },
      {
        name: "Restaurant Linen",
        description:
          "Table and service linen for food & beverage operations.",
        image: "/assets/products/Restaurant Linen.webp",
      },
      {
        name: "Institutional Linen",
        description: "Linen solutions for institutional and commercial use.",
        image: "/assets/products/Institutional Linen.webp",
      },
    ],
  },
  {
    slug: "promotional-merchandise",
    name: "Promotional Merchandise",
    tag: "Gifting",
    cardBlurb:
      "Bags, backpacks, laptop bags, duffle bags and corporate gift solutions.",
    heroBlurb:
      "Bags and branded merchandise for employee use, corporate gifting and promotional programs.",
    placeholderLabel: "bags & merchandise",
    image: "/assets/promotional_merchandise.webp",
    items: [
      {
        name: "Bags",
        description:
          "General-purpose branded bags in multiple materials and sizes.",
        image: "/assets/products/Bags.webp",
      },
      {
        name: "Backpacks",
        description: "Employee, travel and promotional backpack options.",
        image: "/assets/products/Backpacks.webp",
      },
      {
        name: "Laptop Bags",
        description: "Professional laptop and office-carry solutions.",
        image: "/assets/products/Laptop Bags.webp",
      },
      {
        name: "Duffle Bags",
        description: "Travel and gym-oriented promotional bags.",
        image: "/assets/products/Duffle Bags.webp",
      },
      {
        name: "Gift Sets",
        description:
          "Curated merchandise combinations for corporate gifting.",
        image: "/assets/products/Gift Sets.webp",
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
