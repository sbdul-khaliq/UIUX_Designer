// Case study library. To add a project, append an object to `projects` —
// a page is created automatically at /work/<slug>.
// All copy below is PLACEHOLDER content. Replace with your real project details.
import ecommerce from "@/assets/project-ecommerce.jpg";
import saas from "@/assets/project-saas.jpg";
import mobile from "@/assets/project-mobile.jpg";
import landing from "@/assets/project-landing.jpg";
import wireframes from "@/assets/wireframes.jpg";

export type Category =
  | "Web Design"
  | "Mobile Apps"
  | "Ecommerce"
  | "SaaS"
  | "Dashboard"
  | "Landing Pages";

export const categories: ("All" | Category)[] = [
  "All",
  "Web Design",
  "Mobile Apps",
  "Ecommerce",
  "SaaS",
  "Dashboard",
  "Landing Pages",
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
  designSystem?: { colors: string[]; fonts: string[]; components: string[] };
  responsive: { image: string; text: string };
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
    slug: "luxury-ecommerce-redesign",
    title: "Ecommerce Redesign",
    heroTitle: ["Luxury Ecommerce", "Experience Redesign"],
    client: "Client name (placeholder)",
    industry: "Luxury Fashion",
    type: "Conversion Focused Design",
    role: "UI/UX Designer",
    year: "2026",
    timeline: "8 Weeks",
    categories: ["Ecommerce", "Web Design"],
    summary:
      "Redesigned the ecommerce experience to create a cleaner shopping journey and stronger product discovery.",
    thumbnail: ecommerce,
    heroImage: ecommerce,
    tools: ["Figma", "FigJam", "Photoshop"],
    services: ["UX Research", "User Flow", "Wireframing", "UI Design", "Prototype", "Design System"],
    overview:
      "Placeholder — describe the business, its customers and what you were responsible for. Two or three sentences is ideal.",
    challenge: [
      "Placeholder — what problem existed and what was wrong with the previous experience.",
      "Placeholder — which user pain points needed to be solved.",
    ],
    goals: ["Clearer product discovery", "Simpler checkout", "Stronger brand perception"],
    myContribution: ["UX Strategy", "Information Architecture", "User Flows", "Wireframes", "UI Design", "Responsive Design", "Prototype", "Design System"],
    teamContribution: ["Development (client team)", "Photography (client)", "Copywriting (client)"],
    process: defaultProcess,
    userFlow: ["Landing Page", "Product Discovery", "Product Details", "Add to Cart", "Checkout", "Confirmation"],
    wireframes: [wireframes],
    screens: [ecommerce],
    designSystem: {
      colors: ["oklch(0.96 0.01 85)", "oklch(0.2 0 0)", "oklch(0.8 0.03 80)", "oklch(0.55 0.02 70)"],
      fonts: ["Serif display — headings", "Sans — interface"],
      components: ["Buttons", "Inputs", "Product cards", "Navigation", "Filters", "Grid"],
    },
    responsive: {
      image: ecommerce,
      text: "Placeholder — explain how the layout adapts between desktop, tablet and mobile.",
    },
    outcome: [
      { title: "Simpler navigation", text: "Placeholder — describe the qualitative change." },
      { title: "Better mobile experience", text: "Placeholder — describe the qualitative change." },
      { title: "Stronger brand perception", text: "Placeholder — describe the qualitative change." },
    ],
  },
  {
    slug: "saas-analytics-dashboard",
    title: "Analytics Dashboard",
    heroTitle: ["SaaS Analytics", "Dashboard Platform"],
    client: "Client name (placeholder)",
    industry: "B2B SaaS",
    type: "Product Design",
    role: "Product Designer",
    year: "2025",
    timeline: "12 Weeks",
    categories: ["SaaS", "Dashboard"],
    summary:
      "Restructured a data-heavy dashboard so teams can find the metrics that matter in seconds.",
    thumbnail: saas,
    heroImage: saas,
    tools: ["Figma", "FigJam"],
    services: ["UX Audit", "Information Architecture", "UI Design", "Design System"],
    overview: "Placeholder — describe the product and your responsibilities.",
    challenge: ["Placeholder — describe the problem and previous experience.", "Placeholder — business goals."],
    goals: ["Faster insight", "Consistent components", "Scalable layout"],
    myContribution: ["UX Audit", "Information Architecture", "UI Design", "Design System"],
    teamContribution: ["Engineering", "Product management"],
    process: defaultProcess,
    userFlow: ["Login", "Overview", "Filter Data", "Drill Down", "Export Report"],
    wireframes: [wireframes],
    screens: [saas],
    responsive: { image: saas, text: "Placeholder — explain responsive behaviour." },
    outcome: [
      { title: "Improved visual hierarchy", text: "Placeholder — describe the qualitative change." },
      { title: "Better usability", text: "Placeholder — describe the qualitative change." },
    ],
  },
  {
    slug: "personal-finance-app",
    title: "Personal Finance App",
    heroTitle: ["Personal Finance", "Mobile App"],
    client: "Client name (placeholder)",
    industry: "Fintech",
    type: "Mobile App Design",
    role: "UI/UX Designer",
    year: "2025",
    timeline: "10 Weeks",
    categories: ["Mobile Apps"],
    summary: "Designed a calm, approachable budgeting app that makes everyday money decisions easier.",
    thumbnail: mobile,
    heroImage: mobile,
    tools: ["Figma", "Protopie"],
    services: ["UX Research", "User Flow", "UI Design", "Prototype"],
    overview: "Placeholder — describe the product and your responsibilities.",
    challenge: ["Placeholder — describe the problem.", "Placeholder — describe user needs."],
    goals: ["Reduce anxiety around money", "Quick daily check-ins"],
    myContribution: ["UX Research", "User Flows", "UI Design", "Prototype"],
    process: defaultProcess,
    userFlow: ["Onboarding", "Connect Account", "Set Budget", "Track Spending", "Review Goals"],
    wireframes: [wireframes],
    screens: [mobile],
    responsive: { image: mobile, text: "Placeholder — explain platform adaptations." },
    outcome: [
      { title: "Simpler navigation", text: "Placeholder — describe the qualitative change." },
      { title: "Better usability", text: "Placeholder — describe the qualitative change." },
      { title: "Clearer money insights", text: "Placeholder — describe the qualitative change." },
    ],
  },
  {
    slug: "architecture-studio-website",
    title: "Architecture Studio Website",
    heroTitle: ["Architecture Studio", "Brand Website"],
    client: "Client name (placeholder)",
    industry: "Architecture",
    type: "Landing Page & Website",
    role: "Web Designer",
    year: "2024",
    timeline: "6 Weeks",
    categories: ["Landing Pages", "Web Design"],
    summary: "An editorial website that lets the studio's work and philosophy lead the conversation.",
    thumbnail: landing,
    heroImage: landing,
    tools: ["Figma", "Framer"],
    services: ["Art Direction", "Wireframing", "UI Design", "Responsive Design"],
    overview: "Placeholder — describe the business and your responsibilities.",
    challenge: ["Placeholder — describe the problem.", "Placeholder — describe the goals."],
    goals: ["Showcase portfolio", "Generate enquiries"],
    myContribution: ["Art Direction", "Wireframes", "UI Design", "Responsive Design"],
    process: defaultProcess,
    userFlow: ["Home", "Projects", "Project Detail", "Contact"],
    wireframes: [wireframes],
    screens: [landing],
    responsive: { image: landing, text: "Placeholder — explain responsive behaviour." },
    outcome: [
      { title: "Stronger brand perception", text: "Placeholder — describe the qualitative change." },
      { title: "Improved visual hierarchy", text: "Placeholder — describe the qualitative change." },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
