export type ProductItem = {
  name: string;
  description: string;
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
    items: [
      {
        name: "Fire Retardant (FR)",
        description:
          "Fabric options designed for flame-resistant uniform and workwear applications.",
      },
      {
        name: "Inherent FR",
        description:
          "Performance built into the fibre system for demanding protective applications.",
      },
      {
        name: "Water Repellent",
        description:
          "Finished fabrics designed to resist light water exposure and improve wearer protection.",
      },
      {
        name: "Oil Repellent",
        description:
          "Specialty finish options for environments where oil resistance is required.",
      },
      {
        name: "Anti Static",
        description:
          "Fabric solutions developed for applications where static control is important.",
      },
      {
        name: "Acid Resistant",
        description:
          "Protective fabric options for selected industrial applications.",
      },
      {
        name: "ARC Flash Protection",
        description:
          "Performance textile options for arc-flash protective garment applications.",
      },
      {
        name: "High Visibility Fabrics",
        description:
          "Fluorescent and visibility-focused fabric solutions for safety garments.",
      },
      {
        name: "Reflective Fabrics",
        description:
          "Reflective material options for visibility-enhancing garments.",
      },
      {
        name: "Ripstop Fabrics",
        description:
          "Reinforced constructions designed for improved tear resistance.",
      },
      {
        name: "UV Protection",
        description: "Fabric solutions with UV-protection performance options.",
      },
      {
        name: "Moisture Management",
        description:
          "Fabrics developed to improve comfort through moisture handling.",
      },
      {
        name: "Anti Microbial",
        description: "Finish options aimed at hygiene-focused applications.",
      },
      {
        name: "Wrinkle Free",
        description:
          "Easy-care fabric options for uniform and corporate apparel.",
      },
      {
        name: "Stretch Performance Fabrics",
        description:
          "Comfort stretch options for active work and uniform applications.",
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
    items: [
      {
        name: "Corporate Uniforms",
        description:
          "Office and front-of-house uniforms with consistent brand presentation.",
      },
      {
        name: "Industrial Uniforms",
        description:
          "Practical uniforms for factories, plants and industrial teams.",
      },
      {
        name: "Security Uniforms",
        description: "Professional uniform programs for security personnel.",
      },
      {
        name: "Hospitality Uniforms",
        description:
          "Front office, housekeeping, F&B and service staff uniforms.",
      },
      {
        name: "Healthcare Uniforms",
        description:
          "Uniform solutions for hospitals, clinics and healthcare teams.",
      },
      {
        name: "Aviation Uniforms",
        description:
          "Professional uniform concepts for aviation-facing teams.",
      },
      {
        name: "Educational Institutions",
        description:
          "Uniform solutions for institutional and education requirements.",
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
    items: [
      {
        name: "Factory Uniforms",
        description:
          "Functional everyday uniforms for manufacturing and plant environments.",
      },
      {
        name: "Flame Resistant Clothing",
        description: "Protective apparel using suitable FR fabric systems.",
      },
      {
        name: "Safety Jackets",
        description:
          "Visibility-focused jackets and vests for industrial teams.",
      },
      {
        name: "Boiler Suits",
        description: "One-piece workwear solutions for industrial applications.",
      },
      {
        name: "High Visibility Apparel",
        description: "Garments designed to improve worker visibility.",
      },
      {
        name: "PPE Compatible Garments",
        description:
          "Workwear developed to integrate with additional protective equipment.",
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
    items: [
      {
        name: "Polo T-Shirts",
        description:
          "Versatile branded polos for corporate and promotional use.",
      },
      {
        name: "Crew Neck T-Shirts",
        description:
          "Comfortable T-shirts suitable for campaigns and events.",
      },
      {
        name: "Hoodies & Sweatshirts",
        description: "Casual branded apparel for teams and gifting.",
      },
      {
        name: "Jackets",
        description:
          "Lightweight and functional branded outerwear options.",
      },
      {
        name: "Caps",
        description:
          "Custom branded caps for campaigns, teams and events.",
      },
      {
        name: "Event Merchandise",
        description:
          "Apparel programs tailored for specific events and activations.",
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
    items: [
      {
        name: "Bed Linen",
        description:
          "Sheeting, pillow covers and related bed-linen solutions.",
      },
      {
        name: "Bath Linen",
        description:
          "Towels and bath-linen products for hospitality applications.",
      },
      {
        name: "Restaurant Linen",
        description:
          "Table and service linen for food & beverage operations.",
      },
      {
        name: "Institutional Linen",
        description: "Linen solutions for institutional and commercial use.",
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
    items: [
      {
        name: "Bags",
        description:
          "General-purpose branded bags in multiple materials and sizes.",
      },
      {
        name: "Backpacks",
        description: "Employee, travel and promotional backpack options.",
      },
      {
        name: "Laptop Bags",
        description: "Professional laptop and office-carry solutions.",
      },
      {
        name: "Duffle Bags",
        description: "Travel and gym-oriented promotional bags.",
      },
      {
        name: "Gift Sets",
        description:
          "Curated merchandise combinations for corporate gifting.",
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
