// Text-only portfolio content for the MCP server.
// Kept free of asset/JSX imports so it can be bundled into the Deno edge function.

export type McpProject = {
  id: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  client: string;
  industry: string;
  platform: string;
  status?: string;
  tags?: string[];
  liveUrl?: string;
  overview: string;
  problem: string;
  outcomes: string[];
  tools: string[];
  caseStudyPath: string;
};

export const mcpProjects: McpProject[] = [
  {
    id: "leaptra",
    name: "LeapTra",
    tagline:
      "Growth infrastructure for businesses that have outgrown freelancers and generalist agencies",
    role: "Product Designer",
    year: "2025",
    client: "LeapTra",
    industry: "SaaS / Growth Infrastructure",
    platform: "Web App + Marketing Site",
    status: "Active",
    tags: ["SaaS", "AI Agents", "Growth Infrastructure", "Brand", "Product", "Embedded Talent"],
    liveUrl: "https://leaptra.com",
    overview:
      "LeapTra builds and operates the growth layer for scaling businesses — product, distribution, brand, and embedded talent — run as one coordinated system against one set of numbers. Work covered AI agent UX, admin dashboards, and client-facing product interfaces.",
    problem:
      "Scaling businesses outgrow freelancers but get fragmented output from agencies with no accountability to outcomes. The design work had to be measured in efficiency and conversion, not deliverables.",
    outcomes: [
      "40% improvement in overall business efficiency across designed workflows",
      "52% reduction in response time from the email organiser and lead qualifier agent",
      "28% increase in lead conversion from the CRM routing system",
      "35% improvement in internal reporting and monitoring efficiency",
    ],
    tools: ["Figma", "Framer", "Notion", "Loom"],
    caseStudyPath: "/projects/leaptra",
  },
  {
    id: "jompal",
    name: "Jomppa",
    tagline: "Errand service platform for Nigerians and the Nigerian diaspora",
    role: "Product Designer (End-to-End)",
    year: "2024",
    client: "Jomppa",
    industry: "Errand Services / Diaspora",
    platform: "PWA (Mobile-first)",
    status: "Active",
    tags: ["PWA", "Errand Services", "Diaspora", "Design Systems", "Mobile"],
    liveUrl: "https://jomppa.com",
    overview:
      "An errand platform for Nigerians and the Nigerian diaspora — send gifts, deliver corporate documents, run grocery errands, and handle day-to-day tasks within Nigeria and across borders.",
    problem:
      "Nigerians abroad relied on informal middlemen with no accountability, recourse, or refunds when errands failed. Jomppa turns that into a trusted, trackable service.",
    outcomes: [
      "45% improvement in platform load time",
      "25% reduction in user onboarding time",
      "40% decrease in developer handoff time",
      "40% increase in overall platform engagement",
    ],
    tools: ["Figma", "Maze", "Miro"],
    caseStudyPath: "/projects/jompal",
  },
  {
    id: "next-level-procurement",
    name: "Next Level Procurement",
    tagline: "Procurement and logistics, made visible",
    role: "Product Designer (Web Experience)",
    year: "2025",
    client: "Next Level Procurement",
    industry: "Procurement / Logistics",
    platform: "Web",
    status: "Live",
    tags: ["B2B", "Procurement", "Logistics", "Web Design", "Trust Design"],
    liveUrl: "https://nextlevelprocurement.com",
    overview:
      "A procurement and logistics web experience designed to communicate operational credibility, service breadth, and reliability to B2B buyers evaluating vendors.",
    problem:
      "Procurement buyers de-risk rather than shop, and generic corporate copy forced them to guess whether the company could handle their category of work.",
    outcomes: [
      "Clear, scannable service structure replacing ambiguous corporate copy",
      "Higher-quality inbound enquiries through structured request capture",
      "Consistent brand presentation across desktop and mobile",
    ],
    tools: ["Figma", "Lovable", "Notion"],
    caseStudyPath: "/projects/next-level-procurement",
  },
  {
    id: "harkardah",
    name: "Harkardah",
    tagline: "Brand and digital experience with cultural grounding",
    role: "Product & Brand Designer",
    year: "2025",
    client: "Harkardah",
    industry: "Brand / Digital Experience",
    platform: "Web",
    status: "Live",
    tags: ["Branding", "Editorial", "Web Design", "Identity", "Storytelling"],
    liveUrl: "https://harkardah.com",
    overview:
      "Brand direction, editorial storytelling, and interface design developed together rather than sequentially, producing an identity that feels rooted rather than borrowed.",
    problem:
      "The brand risked landing in generic startup visual territory — neutral type, safe palette, stock imagery — making it forgettable and culturally anonymous.",
    outcomes: [
      "A distinctive identity that avoids generic startup visual language",
      "Consistent brand expression across brand assets and the live site",
      "Editorial structure that holds attention through long-form content",
    ],
    tools: ["Figma", "Lovable", "Illustrator"],
    caseStudyPath: "/projects/harkardah",
  },
  {
    id: "hantarp",
    name: "HanTarp",
    tagline: "Industrial product clarity for a technical buyer",
    role: "Product Designer (Web Experience)",
    year: "2025",
    client: "HanTarp",
    industry: "Industrial / Manufacturing",
    platform: "Web",
    status: "Live",
    tags: ["Industrial", "B2B", "Product Catalogue", "Web Design", "Technical UX"],
    liveUrl: "https://hantarp.com",
    overview:
      "A web experience for an industrial products business, designed so trade buyers can confirm specification, availability, and ordering path without friction.",
    problem:
      "Product ranges were presented as marketing copy rather than structured data, forcing buyers to enquire just to answer basic spec questions.",
    outcomes: [
      "Specification data legible without contacting sales",
      "Faster product discovery through structured categorisation",
      "Reduced avoidable enquiries by answering spec questions on-page",
    ],
    tools: ["Figma", "Lovable", "Notion"],
    caseStudyPath: "/projects/hantarp",
  },
  {
    id: "ytf",
    name: "Young Titans Foundation",
    tagline: "A bold, reason-driven website for youth development",
    role: "Web Designer",
    year: "2025",
    client: "Young Titans Foundation",
    industry: "Non-profit / Education",
    platform: "Marketing Site",
    overview:
      "A story-led website for a youth development foundation with impact metrics up front, a single donation CTA, and a programs hub segmented by audience.",
    problem:
      "The old site had no clear donation path, scattered program info, and didn't reflect the energy of the work on the ground.",
    outcomes: [
      "Donations up 3.4× in the first quarter",
      "Volunteer signups grew 60%",
      "Press mentions across 5 outlets",
    ],
    tools: ["Figma", "Webflow", "Photography direction"],
    caseStudyPath: "/projects/ytf",
  },
  {
    id: "saglev",
    name: "Saglev Electric Vehicle",
    tagline: "Premium EV landing experience",
    role: "Web Designer",
    year: "2025",
    client: "Saglev",
    industry: "Automotive / EV",
    platform: "Marketing Site",
    overview:
      "A cinematic EV landing experience with modular feature blocks, spec callouts, and an embedded demo-drive booking module.",
    problem:
      "As a new entrant, Saglev had to establish premium credibility and explain its model lineup in a single scrollable narrative.",
    outcomes: [
      "Premium brand perception on par with global EV brands",
      "Higher demo-drive booking intent from the landing page",
    ],
    tools: ["Figma", "After Effects", "Framer"],
    caseStudyPath: "/projects/saglev",
  },
  {
    id: "dealmate",
    name: "DealMate Escrow System",
    tagline: "Trustworthy escrow for high-value transactions",
    role: "Product Designer",
    year: "2024",
    client: "DealMate",
    industry: "Fintech / Escrow",
    platform: "Web + Mobile",
    overview:
      "A secure escrow product built around an always-visible deal timeline, party-aware action prompts, and a symmetric dispute flow.",
    problem:
      "Users abandoned mid-transaction because they couldn't tell what stage the deal was in or what action was required next.",
    outcomes: [
      "Transaction completion up 41%",
      "Support tickets down 28%",
      "NPS climbed from 22 to 51",
    ],
    tools: ["Figma", "Protopie", "Linear"],
    caseStudyPath: "/projects/dealmate",
  },
];

export const mcpProfile = {
  name: "Abiodun Adedamola",
  headline: "Product Designer · AI Vibe Coder · Product Strategist",
  summary:
    "Product designer who designs and ships with AI tooling: UI/UX and product design, AI vibe coding, product motion design in Figma, editorial design and storytelling, and branding. Currently building growth-facing products and internal tools, and positioning toward product strategy — including a school management system for a family-owned school as a long-term operator play.",
  focusAreas: [
    "Product & UI/UX design",
    "AI vibe coding (shipping real products with AI tooling)",
    "Product motion design (Figma)",
    "Editorial design & storytelling",
    "Branding & identity",
    "Product strategy for education businesses",
  ],
  links: {
    portfolio: "https://mocreativeportfolio.lovable.app",
    linkedin: "https://www.linkedin.com/in/abiodun-adedamola-605398289",
    instagram: "https://www.instagram.com/official_damoskylala",
  },
  pages: [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/projects", title: "Projects" },
    { path: "/toolstack", title: "Toolstack" },
    { path: "/playground", title: "Playground" },
    { path: "/blogs", title: "Blogs" },
    { path: "/shop", title: "Shop" },
    { path: "/songs", title: "Songs" },
    { path: "/contact", title: "Contact" },
  ],
};

export const mcpToolstack = [
  { name: "Figma", category: "Design & Motion" },
  { name: "Lovable", category: "AI Vibe Coding" },
  { name: "Claude", category: "AI Vibe Coding" },
  { name: "Google Stitch", category: "AI Vibe Coding" },
  { name: "Antigravity", category: "AI Vibe Coding" },
  { name: "Trae AI", category: "AI Vibe Coding" },
  { name: "VS Code", category: "Development" },
  { name: "ChatGPT", category: "AI Assistant" },
  { name: "Framer", category: "Web & Prototyping" },
  { name: "After Effects", category: "Motion" },
  { name: "Notion", category: "Docs & Planning" },
  { name: "Pinterest", category: "Research & Inspiration" },
];
