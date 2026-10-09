// Case study library. To add a project, append an object to `projects` —
// a page is created automatically at /work/<slug>.
import wireframes from "@/assets/wireframes.jpg";
import leluxeHero from "@/assets/leluxe-hero.png";
import leluxeRefills from "@/assets/leluxe-refills.png";
import leluxeBlog from "@/assets/leluxe-blog.png";
import leluxeMobile from "@/assets/leluxe-mobile.png";
import navyHero from "@/assets/navy-hero.png";
import navyCollections from "@/assets/navy-collections.png";
import navyCatalog from "@/assets/navy-catalog.png";
import navyPdp from "@/assets/navy-pdp.png";
import navyMegamenu from "@/assets/navy-megamenu.png";
import baskHero from "@/assets/bask-hero.png";
import baskOrderMgmt from "@/assets/bask-order-mgmt.png";
import baskPricing from "@/assets/bask-pricing.png";
import baskCtaFooter from "@/assets/bask-cta-footer.png";
import baskPatientFlow from "@/assets/bask-patient-flow.png";
import laairsoftHero from "@/assets/laairsoft-hero.png";
import laairsoftHomepage from "@/assets/laairsoft-homepage.png";
import laairsoftPdpCart from "@/assets/laairsoft-pdp-cart.png";
import laairsoftCartDrawer from "@/assets/laairsoft-cart-drawer.png";
import laairsoftMobile from "@/assets/laairsoft-mobile.png";

export type Category =
  | "Ecommerce"
  | "Web Design"
  | "SaaS"
  | "Dashboard"
  | "Mobile Apps";

export const categories: ("All" | Category)[] = [
  "All",
  "Ecommerce",
  "Web Design",
  "SaaS",
  "Dashboard",
  "Mobile Apps",
];

export type Project = {
  slug: string;
  title: string;
  heroTitle: [string, string];
  client: string;
  industry: string;
  type: string;
  role: string;
  year: string;
  timeline: string;
  categories: Category[];
  summary: string;
  thumbnail: string;
  heroImage: string;
  liveUrl?: string;
  tools: string[];
  services: string[];
  overview: string;
  challenge: string[];
  goals: string[];
  myContribution: string[];
  teamContribution?: string[];
  process: { title: string; text: string }[];
  userFlow: string[];
  wireframes: string[];
  screens: string[];
  designSystem?: {
    colors: (string | { name: string; hex: string; role?: string })[];
    fonts: (string | { name: string; role?: string; sample?: string })[];
    components: (string | { name: string; type?: string })[];
  };
  responsive: { image: string; text: string; layout?: "mobile" | "landscape" };
  outcome: { title: string; text: string }[];
};

const defaultProcess = [
  { title: "Research", text: "Stakeholder interviews, analytics review and competitor audit." },
  { title: "Define", text: "Problem statements, personas and success criteria." },
  { title: "Structure", text: "Information architecture, user flows and content model." },
  { title: "Design", text: "Wireframes evolving into high-fidelity UI." },
  { title: "Prototype", text: "Interactive prototypes for key journeys." },
  { title: "Validate", text: "Usability testing and iteration with real users." },
];

export const projects: Project[] = [
  {
    slug: "leluxe-ecommerce",
    title: "Le Luxe — Luxury Ecommerce",
    heroTitle: ["Le Luxe", "Luxury Ecommerce Experience"],
    client: "Le Luxe (leluxe.co)",
    liveUrl: "https://leluxe.co/",
    industry: "Luxury Fabric Care & Fragrance",
    type: "eCommerce UX & UI Design",
    role: "Figma UI/UX Designer",
    year: "2024",
    timeline: "6 Weeks",
    categories: ["Ecommerce", "Web Design"],
    summary:
      "End-to-end Figma UI/UX design for Le Luxe, transforming everyday laundry and home fragrances into an elevated, high-converting digital shopping ritual.",
    thumbnail: leluxeHero,
    heroImage: leluxeHero,
    tools: ["Figma"],
    services: [
      "UX Research",
      "Figma Design System",
      "Wireframing",
      "UI Design",
      "Interactive Prototyping",
      "Conversion Rate Optimization (CRO)",
    ],
    overview:
      "Le Luxe introduces a new era of sensory laundry care, transforming everyday household routines into effortless rituals of elegance. As the Figma UI/UX Designer, I crafted an editorial, minimal, and conversion-optimized digital flagship store that communicates sensory luxury, streamlines product discovery, and drives direct-to-consumer sales.",
    challenge: [
      "Elevate a functional product category (laundry care & fabric mist) into an aspirational luxury eCommerce brand experience.",
      "Streamline complex scent and refill discovery without confusing or overwhelming the shopper.",
      "Design a thumb-friendly, mobile-first purchase journey with rapid bundle building and frictionless cart checkout in Figma.",
    ],
    goals: [
      "Editorial Brand Identity: Establish modern luxury through bold typography, stark monochrome contrast, and high-impact hero imagery.",
      "Intuitive Scent Discovery: Create clear scent-selection UX and refill subscription options to increase Average Order Value (AOV).",
      "Frictionless Mobile Shopping: Optimize sticky cart drawers and product detail pages (PDPs) for high mobile checkout velocity.",
    ],
    myContribution: [
      "Full Figma UI/UX architecture and responsive design system from scratch.",
      "Information architecture, user flows, and wireframes for desktop and mobile viewports.",
      "High-fidelity component library with auto-layout, interactive variants, and micro-interactions.",
      "Interactive Figma prototypes for stakeholder alignment and developer handoff.",
    ],
    teamContribution: [
      "Brand Strategy & Creative Direction (Le Luxe team)",
      "Shopify Theme Development (Engineering team)",
    ],
    process: defaultProcess,
    userFlow: [
      "Editorial Hero Experience",
      "Curated Scent & Formula Discovery",
      "Interactive PDP & Refill Selection",
      "Slide-out Cart & Bundle Builder",
      "Express Checkout",
    ],
    wireframes: [wireframes],
    screens: [leluxeHero, leluxeRefills, leluxeBlog],
    designSystem: {
      colors: [
        { name: "Obsidian Noir", hex: "#0B0B0C", role: "Primary Background & Deep Contrast" },
        { name: "Pure Silk", hex: "#FFFFFF", role: "High-Contrast Text & Primary CTAs" },
        { name: "Muted Slate", hex: "#71717A", role: "Secondary Details & Meta Info" },
        { name: "Silver Frost", hex: "#E4E4E7", role: "Subtle Borders, Dividers & Badges" },
      ],
      fonts: [
        { name: "Editorial Modern Sans", role: "Brand & Hero Headlines", sample: "Aa Bb Cc 123 — Bold 48px" },
        { name: "Geometric Interface Sans", role: "Body, PDP Specs & Cart Drawer", sample: "Aa Bb Cc 123 — Regular 14px" },
      ],
      components: [
        { name: "Minimal Header with Cart Count", type: "Header & Navigation" },
        { name: "Hero Scent Carousel", type: "Interactive Showcase" },
        { name: "Refill & Bundle Selector", type: "eCommerce Funnel" },
        { name: "Slide-Out Mini Cart Drawer", type: "Conversion UX" },
        { name: "Sticky Add-to-Cart Action Bar", type: "Mobile CTA" },
      ],
    },
    responsive: {
      image: leluxeMobile,
      text: "Designed with a strict mobile-first methodology in Figma. The layout adapts seamlessly from 375px mobile screens up to 1440px wide desktop monitors, ensuring quick navigation, thumb-friendly tap targets, and frictionless checkout.",
      layout: "mobile",
    },
    outcome: [
      {
        title: "Editorial Luxury Aesthetic",
        text: "Elevated standard laundry care into an aspirational luxury home essential, strengthening direct customer trust.",
      },
      {
        title: "Optimized Scent & Refill Funnels",
        text: "Interactive scent cards and bundle building drove higher Average Order Value (AOV) and customer retention.",
      },
      {
        title: "Seamless Mobile Experience",
        text: "Reduced checkout friction with thumb-accessible sticky purchase bars and clear delivery transparency.",
      },
    ],
  },
  {
    slug: "navy-professional",
    title: "Navy Professional — Luxury Beauty & Salon Tools",
    heroTitle: ["Navy Professional", "Luxury Salon & Beauty eCommerce"],
    client: "Navy Professional (navyprofessional.com)",
    liveUrl: "https://www.navyprofessional.com/",
    industry: "Professional Beauty, Nailcare & Salon Tools",
    type: "eCommerce UX & UI Design",
    role: "Figma UI/UX Designer",
    year: "2024",
    timeline: "8 Weeks",
    categories: ["Ecommerce", "Web Design"],
    summary:
      "Designed an editorial, high-converting digital flagship store in Figma for Navy Professional — uniting British salon heritage, tactile aesthetics, and frictionless DTC/B2B shopping journeys.",
    thumbnail: navyHero,
    heroImage: navyHero,
    tools: ["Figma"],
    services: [
      "UX Research",
      "Figma Design System",
      "Information Architecture",
      "Mega Menu & Navigation UX",
      "UI Design",
      "Bundle & Cross-Sell CRO",
    ],
    overview:
      "Navy Professional is a renowned British brand setting new hygiene and craftsmanship standards across beauty salons worldwide with precision gold tools, hygiene systems, and botanical care. As the Figma UI/UX Designer, I designed a warm, editorial digital experience that bridges luxury heritage with modern conversion UX, facilitating both bulk salon re-ordering and direct-to-consumer ritual discovery.",
    challenge: [
      "Balancing two distinct user personas on a single platform: professional salon owners ordering technical tools and direct consumers exploring daily self-care.",
      "Structuring an extensive product portfolio (hygiene, gold tools, skincare, accessories) into an intuitive, non-cluttered discovery hierarchy.",
      "Increasing Average Order Value (AOV) on Product Detail Pages without introducing intrusive popups or friction into the purchase funnel.",
    ],
    goals: [
      "Editorial Heritage Identity: Craft a tactile aesthetic reflecting Yorkshire craftsmanship through warm neutral tones, rich serif typography, and organic styling.",
      "Intuitive Category & Tool Discovery: Build an interactive mega-menu and faceted sidebar filter for rapid salon technician replenishment.",
      "1-Click Complete Set Bundles: Design high-converting 'Complete Set' cross-sell components on PDPs that encourage multi-item routine purchases seamlessly.",
    ],
    myContribution: [
      "Complete end-to-end Figma UI/UX architecture and scalable design system.",
      "Wireframes, user flow diagrams, and information architecture across desktop and mobile.",
      "High-fidelity component library with auto-layout v5, states, and responsive token structures.",
      "Interactive Figma prototypes demonstrating hover-driven mega menus and 1-click bundle add-to-cart flows.",
    ],
    teamContribution: [
      "Brand Direction & Editorial Photography (Navy Professional team)",
      "Shopify Plus Engineering (Development team)",
    ],
    process: defaultProcess,
    userFlow: [
      "Editorial Autumn Hero & Press Social Proof",
      "Interactive 'Tools' Mega-Menu Preview",
      "Curated 8-Tile Signature Collections Matrix",
      "Faceted Professional Catalog with Quick-Add",
      "Product Detail Page & 1-Click Complete Set Funnel",
    ],
    wireframes: [wireframes],
    screens: [navyHero, navyMegamenu, navyCollections, navyCatalog, navyPdp],
    designSystem: {
      colors: [
        { name: "Heritage Olive", hex: "#424D36", role: "Primary Brand Accent & Top Announcement Bar" },
        { name: "Warm Parchment", hex: "#F7F4EE", role: "Editorial Canvas & Warm Background" },
        { name: "Antique Gold", hex: "#B89B5E", role: "Tool Accents, Badges & Collection Tags" },
        { name: "Deep Charcoal", hex: "#232323", role: "High-Contrast Typography & CTAs" },
      ],
      fonts: [
        { name: "Classic Editorial Serif", role: "Brand Headlines & Editorial Voice", sample: "The Care Season — Serif 44px" },
        { name: "Geometric Grotesk Sans", role: "Navigation, Specifications & Cart UI", sample: "Navy Hand Cream · £24.95 — 14px" },
      ],
      components: [
        { name: "Announcement Ribbon & Free Gift Tracker", type: "Header UX" },
        { name: "Interactive Hover Mega Menu", type: "Navigation" },
        { name: "8-Tile Signature Collections Matrix", type: "Visual Discovery" },
        { name: "Faceted Professional Filter Sidebar", type: "Catalog UX" },
        { name: "Complete Set 1-Click Cross-Sell Bar", type: "PDP Conversion UX" },
      ],
    },
    responsive: {
      image: navyCatalog,
      text: "Engineered in Figma with strict 12-column grid systems and fluid responsive scaling. Touch targets for quantity counters, quick add-to-bag drawers, and faceted filter sheets ensure seamless one-thumb navigation on mobile devices.",
      layout: "landscape",
    },
    outcome: [
      {
        title: "Tactile Editorial Aesthetic",
        text: "Elevated salon tools into an aspirational British heritage ritual, reinforced by features in Marie Claire, GQ, and Harper's Bazaar.",
      },
      {
        title: "Higher Routine Bundle Conversion",
        text: "The 1-click 'Complete Set' cross-sell module on PDPs significantly boosted multi-product cart additions.",
      },
      {
        title: "Streamlined Salon Ordering",
        text: "Reduced time-to-cart for professional technicians restocking hygiene and salon tools using intuitive sidebar filters.",
      },
    ],
  },
  {
    slug: "bask-health-telehealth",
    title: "Bask Health — Telehealth & E-Prescribing SaaS",
    heroTitle: ["Bask Health", "Telehealth & E-Prescribing Platform"],
    client: "Bask Health (bask.health)",
    liveUrl: "https://bask.health/",
    industry: "Telehealth SaaS & Healthcare Technology",
    type: "SaaS & Healthcare Product Design",
    role: "Figma UI/UX Designer",
    year: "2024",
    timeline: "10 Weeks",
    categories: ["SaaS", "Dashboard", "Web Design", "Mobile Apps"],
    summary:
      "Architected an enterprise dark-mode SaaS design system and telehealth patient experience in Figma for Bask Health — powering compliant e-prescribing, clinic order management, and customizable patient intake funnels.",
    thumbnail: baskHero,
    heroImage: baskHero,
    tools: ["Figma"],
    services: [
      "UX Research",
      "Figma Design System",
      "Information Architecture",
      "Telehealth Intake Funnels",
      "SaaS UI Design",
      "HIPAA & Compliance UX",
    ],
    overview:
      "Bask Health is an all-in-one telehealth infrastructure platform that enables healthcare brands, clinicians, and digital health startups to launch compliant telehealth experiences at enterprise scale. As the Figma UI/UX Designer, I crafted an expansive dark-mode digital ecosystem spanning marketing architecture, transparent tier pricing, centralized order management for e-prescribing, and frictionless mobile intake flows for patient treatment.",
    challenge: [
      "Translating deeply complex medical workflows (EMR, e-prescribing, pharmacy fulfillment, patient questionnaires) into clean, modular building blocks.",
      "Designing high-conversion patient intake flows on mobile that collect necessary clinical data (identity, symptoms, dosage history) without overwhelming the user.",
      "Establishing a confident, futuristic dark-theme design language with electric blue accents that communicates enterprise medical security, LegitScript certification, and HIPAA compliance.",
    ],
    goals: [
      "Modular Telehealth Platform: Create a cohesive visual hierarchy communicating modular building blocks for doctors, entrepreneurs, and developers.",
      "Frictionless Clinical Intake: Design progressive-disclosure mobile questionnaire flows that maximize completion rate for online prescriptions.",
      "Transparent SaaS Pricing: Build an interactive 3-tier pricing matrix comparing Start-up, Enterprise, and Custom tiers with clear feature differentiators.",
    ],
    myContribution: [
      "Complete Figma design system with high-contrast dark mode palette, tokenized typography, and micro-interactions.",
      "End-to-end patient onboarding and e-prescribing questionnaire flows optimized for mobile conversion.",
      "Figma component library featuring modular navigation, interactive mega menus, pricing tiers, and compliance badges.",
      "Interactive prototypes for developer handoff and executive stakeholder reviews.",
    ],
    teamContribution: [
      "Clinical Advisory & Regulatory Compliance (Bask Health medical team)",
      "Full-Stack SaaS Platform Engineering (Development team)",
    ],
    process: defaultProcess,
    userFlow: [
      "Dark-Mode Telehealth Platform Hero",
      "Modular Products & Solutions Mega-Menu",
      "Centralized Order Management & E-Prescribing",
      "3-Tier Transparent Plans & Pricing Matrix",
      "Mobile Patient Intake & Prescription Checkout",
    ],
    wireframes: [wireframes],
    screens: [baskHero, baskOrderMgmt, baskPricing, baskCtaFooter, baskPatientFlow],
    designSystem: {
      colors: [
        { name: "Electric Cyan", hex: "#0066FF", role: "Primary Interactive CTAs, Active States & Badges" },
        { name: "Midnight Obsidian", hex: "#030712", role: "Dark Mode Background & Deep Canvas" },
        { name: "Neon Azure Glow", hex: "#3B82F6", role: "Radial Glow Gradients & Category Highlights" },
        { name: "Medical Slate", hex: "#94A3B8", role: "Secondary Labels, Badges & Divider Lines" },
      ],
      fonts: [
        { name: "Geometric Tech Sans", role: "Headlines & Hero Claims", sample: "The Platform for Telehealth — Bold 48px" },
        { name: "Functional Interface Grotesk", role: "Questionnaires, Specs & Pricing Tables", sample: "Centralized Order Management · Latisse 3ml — 14px" },
      ],
      components: [
        { name: "Floating Dark Mega Menu", type: "Header Navigation" },
        { name: "Progressive Patient Questionnaire Cards", type: "Mobile Intake UX" },
        { name: "Highlighted Enterprise Pricing Card", type: "Conversion UX" },
        { name: "Centralized E-Prescribing Dashboard Card", type: "SaaS Workflow" },
        { name: "HIPAA & LegitScript Trust Badges", type: "Compliance Verification" },
      ],
    },
    responsive: {
      image: baskPatientFlow,
      text: "Mobile-first patient intake flow designed with progressive disclosure, large touch-friendly radio selectors, and instant plan modification controls to eliminate prescription checkout abandonment.",
      layout: "landscape",
    },
    outcome: [
      {
        title: "Enterprise Market Positioning",
        text: "Successfully elevated Bask Health from a private beta concept into a trusted, enterprise-grade digital health infrastructure brand.",
      },
      {
        title: "Streamlined Patient Intake",
        text: "Multi-step dosage and questionnaire screens achieved higher completion rates during clinical intake.",
      },
      {
        title: "Clear Pricing Clarity",
        text: "Transparent 3-tier SaaS pricing matrix enabled self-serve onboarding for startups and clear demo booking for enterprise healthcare networks.",
      },
    ],
  },
  {
    slug: "la-airsoft-ecommerce",
    title: "LA Airsoft — Tactical Airsoft & Gear eCommerce",
    heroTitle: ["LA Airsoft", "Tactical Gear & Airsoft eCommerce"],
    client: "LA Airsoft (laairsoft.com)",
    liveUrl: "https://laairsoft.com/",
    industry: "Tactical Airsoft, Competitive Sports & Custom Gear",
    type: "eCommerce UX & UI Design",
    role: "Figma UI/UX Designer",
    year: "2024",
    timeline: "7 Weeks",
    categories: ["Ecommerce", "Web Design", "Mobile Apps"],
    summary:
      "Designed a high-velocity, dark-mode tactical eCommerce platform in Figma for LA Airsoft — featuring interactive custom gun loadout builders, gamified free shipping meters, and slide-out cross-sell cart drawers.",
    thumbnail: laairsoftHero,
    heroImage: laairsoftHero,
    tools: ["Figma"],
    services: [
      "UX Research",
      "Figma Design System",
      "Information Architecture",
      "Interactive Loadout Builder UX",
      "Slide-Out Cart Drawer CRO",
      "Mobile-First UI Design",
    ],
    overview:
      "LA Airsoft is a premier destination for competitive airsoft players, tactical hobbyists, and custom rifle builders across the United States. As the Figma UI/UX Designer, I crafted an energetic, high-octane dark-mode digital storefront with vibrant neon green accents. The design pairs technical credibility and parts compatibility with gamified purchase funnels, including interactive loadout diagrams, free-shipping threshold meters, and frictionless 1-click cart cross-sells.",
    challenge: [
      "Airsoft enthusiasts need deep technical assurance: parts compatibility, FPS velocity, gearbox specs, and modular upgrades.",
      "Structuring a massive catalog spanning rifles, Hi-Capa pistols, internal motors, batteries, and tactical gear without cognitive fatigue.",
      "Reducing shopping cart abandonment and raising Average Order Value (AOV) on high-ticket custom airsoft setups ($800–$2,500+).",
    ],
    goals: [
      "Aggressive Tactical Aesthetics: Combine deep charcoal carbon backgrounds with high-visibility neon lime accents (#39D000) for high visual adrenaline.",
      "Interactive Custom Gun Builder: Design an exploded view parts diagram with interactive hotspots to let players build dream loadouts piece by piece.",
      "Conversion-Driven Cart Drawer: Integrate dynamic free shipping progress bars, 1-click accessory cross-sells, and package protection directly inside the slide-out drawer.",
    ],
    myContribution: [
      "Full end-to-end Figma UI/UX architecture for desktop and mobile viewports.",
      "Modular Figma component library with variants for product cards, flash sale countdowns, and loadout hotspots.",
      "Slide-out cart drawer architecture with dynamic free shipping progress calculation and instant accessory add-ons.",
      "Interactive Figma prototypes illustrating micro-interactions, mobile sticky buy bars, and builder hover states.",
    ],
    teamContribution: [
      "Merchandising & Product Catalog Strategy (LA Airsoft team)",
      "Shopify Plus Development (Engineering team)",
    ],
    process: defaultProcess,
    userFlow: [
      "High-Impact Neon Sale Hero Banner",
      "New Drops & Interactive Loadout Builder",
      "Category Discovery & Technical Filter Facets",
      "Product Detail Page & Custom Spec Selectors",
      "Slide-Out Cart with Free Shipping Meter & 1-Click Upsells",
    ],
    wireframes: [wireframes],
    screens: [laairsoftHero, laairsoftHomepage, laairsoftPdpCart, laairsoftCartDrawer],
    designSystem: {
      colors: [
        { name: "Toxic Neon Lime", hex: "#39D000", role: "Primary Interactive CTAs, Sale Badges & Free Shipping Meter" },
        { name: "Tactical Carbon", hex: "#0E1110", role: "Dark Canvas & Deep Contrast Background" },
        { name: "Gunmetal Gray", hex: "#1C2220", role: "Product Card Surfaces & Divider Borders" },
        { name: "Signal White", hex: "#FFFFFF", role: "Primary Typography & Header Claims" },
      ],
      fonts: [
        { name: "Industrial Display Sans", role: "Sale Banners & Hero Headlines", sample: "SALE OF THE WEEK — Heavy 52px" },
        { name: "Tactical Interface Sans", role: "Specs, Badges & Cart Drawer UI", sample: "Wolverine Airsoft MTW-308 · $854.99 — 14px" },
      ],
      components: [
        { name: "Slide-Out Mini Cart Drawer", type: "Conversion UX" },
        { name: "Dynamic Free Shipping Meter", type: "AOV Gamification" },
        { name: "Interactive Gun Builder Hotspot Card", type: "Product Customizer" },
        { name: "1-Click Quick Add Cross-Sell Tiles", type: "Cart Upsell" },
        { name: "Same-Day Dispatch Trust Ribbon", type: "Header Social Proof" },
      ],
    },
    responsive: {
      image: laairsoftMobile,
      text: "Optimized with a mobile-first philosophy in Figma. Quick search with predictive results, horizontal swipeable carousels, and thumb-friendly checkout buttons deliver instantaneous checkout speed on smartphones.",
      layout: "mobile",
    },
    outcome: [
      {
        title: "Increased Average Order Value",
        text: "The free shipping threshold meter and 1-click cart cross-sells drove a measurable increase in multi-item accessory purchases.",
      },
      {
        title: "Enhanced Parts Discovery",
        text: "Interactive loadout diagrams helped players understand modular compatibility, reducing support inquiries.",
      },
      {
        title: "High-Octane Brand Identity",
        text: "Stood out distinctively in a crowded niche through vibrant neon green energy and clean dark-mode typography.",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
