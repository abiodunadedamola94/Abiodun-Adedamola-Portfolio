import { ReactNode } from "react";
import jomppaLogo from "@/assets/jomppa-logo.avif";
import dealmateMockup from "@/assets/dealmate-mockup.jpg";
import leaptraWork from "@/assets/work-leaptra.png";
import jomppaBanner from "@/assets/jomppa-banner.png";
import ytfVideo from "@/assets/ytf-video.mp4";
import leaptraProofBanner from "@/assets/leaptra-proof-banner.png";
import leaptraLogo from "@/assets/leaptra-logo.png";

// Responsive WebP variants (auto-generated alongside the originals)
import leaptraWork480 from "@/assets/work-leaptra-480.webp";
import leaptraWork960 from "@/assets/work-leaptra-960.webp";
import leaptraWork1440 from "@/assets/work-leaptra-1440.webp";
import jomppaBanner480 from "@/assets/jomppa-banner-480.webp";
import jomppaBanner960 from "@/assets/jomppa-banner-960.webp";
import jomppaBanner1440 from "@/assets/jomppa-banner-1440.webp";
import dealmateMockup480 from "@/assets/dealmate-mockup-480.webp";
import dealmateMockup960 from "@/assets/dealmate-mockup-960.webp";
import dealmateMockup1440 from "@/assets/dealmate-mockup-1440.webp";
import leaptraProof480 from "@/assets/leaptra-proof-banner-480.webp";
import leaptraProof960 from "@/assets/leaptra-proof-banner-960.webp";
import leaptraProof1440 from "@/assets/leaptra-proof-banner-1440.webp";
import ytfPoster from "@/assets/ytf-poster.jpg";

export type ColorSwatch = { name: string; hex: string; usage: string };
export type TypographyEntry = { family: string; usage: string; weights: string };

export type ProjectCaseStudy = {
  id: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  client: string;
  industry: string;
  duration: string;
  platform: string;
  heroImage?: string;
  heroImageSources?: Record<number, string>;
  heroVideo?: string;
  heroPoster?: string;
  proofImage?: string;
  proofImageSources?: Record<number, string>;
  liveUrl?: string;
  liveLabel?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  description: string;
  tags?: string[];
  status?: string;
  keyInsights?: string[];
  keyDecisions?: { title: string; detail: string }[];
  reflection?: string;
  whatsNext?: string;
  icon: ReactNode;
  accentClass: string;
  overview: string;
  problem: string;
  solution: string;
  designThinking: string;
  typography?: TypographyEntry[];
  colorPalette?: ColorSwatch[];
  websiteOverview?: string[];
  process: { title: string; detail: string }[];
  outcomes: string[];
  tools: string[];
};

const Icon = ({ children, className }: { children: ReactNode; className: string }) => (
  <div className={`flex h-7 w-7 items-center justify-center rounded-md ${className}`}>{children}</div>
);

export const projects: ProjectCaseStudy[] = [
  {
    id: "leaptra",
    name: "LeapTra",
    tagline: "Growth infrastructure for businesses that have outgrown freelancers and generalist agencies",
    role: "Product Designer",
    year: "2025",
    client: "LeapTra",
    industry: "SaaS / Growth Infrastructure",
    duration: "Ongoing",
    platform: "Web App + Marketing Site",
    heroImage: leaptraWork,
    heroImageSources: { 480: leaptraWork480, 960: leaptraWork960, 1440: leaptraWork1440 },
    proofImage: leaptraProofBanner,
    proofImageSources: { 480: leaptraProof480, 960: leaptraProof960, 1440: leaptraProof1440 },
    liveUrl: "https://leaptra.com",
    liveLabel: "leaptra.com",
    secondaryUrl: "https://leaptra.ai",
    secondaryLabel: "leaptra.ai (AI Studio)",
    description:
      "LeapTra builds and operates the growth layer for scaling businesses — product, distribution, brand, and embedded talent — run as one coordinated system against one set of numbers. It's not an agency. It's not a freelance platform. It's a growth infrastructure partner for businesses that have hit the ceiling of what a generalist setup can deliver.",
    tags: ["SaaS", "AI Agents", "Growth Infrastructure", "Brand", "Product", "Embedded Talent"],
    status: "Active",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-black">
        <img src={leaptraLogo} alt="LeapTra logo" className="h-full w-full object-contain p-0.5" />
      </div>
    ),
    accentClass: "from-[#7b5cff] to-[#4617a9]",
    overview:
      "LeapTra is a growth infrastructure company that embeds directly into scaling businesses to build and operate their product, distribution, brand, and talent functions as one coordinated system. I joined as Product Designer, working across AI agent design, SaaS interface design, and internal tool development.",
    problem:
      "Scaling businesses consistently hit the same wall: they've outgrown freelancers, but agencies give them fragmented output with no accountability to outcomes. LeapTra exists to fill that gap — operating as an embedded growth layer that owns results, not just deliverables. My design work had to reflect that positioning: every product I touched needed to work, not just look good.",
    solution:
      "Product Designer — responsible for AI agent UX design, admin dashboard design, and client-facing product interfaces across LeapTra's suite of services. I designed AI agents for sales, marketing, onboarding, operations, and customer support automation; an email organiser and lead qualifier agent that screens, scores, and routes prospects directly into CRM pipelines; AI-powered chatbot support systems for client onboarding guidance; and admin dashboards for internal reporting and monitoring.",
    designThinking:
      "I treated LeapTra's homepage as a sales conversation. Instead of leading with abstract AI claims, I structured the site around the buyer's actual decision path: What is it? → Who is it for? → How does it work? → What does it cost? → Can I trust it? Each section became a literal answer. For the AI Studio, I leaned into a dense, dark, IDE-like interface that signals power to technical users while keeping the agent library scannable for non-technical buyers. Gradient violets reinforce the 'intelligent system' feel without veering into cliché AI visuals.",
    typography: [
      { family: "Inter", usage: "Body, UI, navigation", weights: "400, 500, 600" },
      { family: "Geist", usage: "Display headings & hero", weights: "500, 600, 700" },
      { family: "JetBrains Mono", usage: "Code blocks, agent IDs, metrics", weights: "400, 500" },
    ],
    colorPalette: [
      { name: "Violet Primary", hex: "#7B5CFF", usage: "Primary CTA, brand accent" },
      { name: "Deep Indigo", hex: "#4617A9", usage: "Gradient base, hover states" },
      { name: "Surface", hex: "#0A0A0F", usage: "App background" },
      { name: "Card", hex: "#13131A", usage: "Cards, modals" },
      { name: "Border", hex: "#262633", usage: "Dividers, outlines" },
      { name: "Text Primary", hex: "#F5F5F7", usage: "Headlines, body" },
    ],
    websiteOverview: [
      "Marketing site (leaptra.com): Hero + value props, agent library showcase, use-case grid by department, transparent pricing with monthly/yearly toggle, social proof, and a final activation CTA.",
      "AI Studio (leaptra.ai): Authenticated dashboard with deployable agent bundles, usage analytics, and team workspace—designed in a dark, console-like aesthetic for power users.",
      "Cross-product consistency through shared tokens, gradient system, and component library.",
    ],
    process: [
      { title: "Discovery", detail: "Mapped user mental models around AI agents and reviewed 12 competitor onboarding flows." },
      { title: "Architecture", detail: "Defined a category system (Sales, CRM, Reporting, Marketing, Operations) plus bundle logic." },
      { title: "UI System", detail: "Built a token-based dark UI with gradient accents, reusable card patterns, and a billing toggle." },
      { title: "Validation", detail: "Tested with 6 SMB owners; iterated copy and pricing display based on confusion points." },
    ],
    keyDecisions: [
      { title: "Workflow-first agents", detail: "Designed each AI agent around the specific workflow it was replacing — not as a generic chat interface, but as a purpose-built tool that fits how the team already operates." },
      { title: "Dense, action-able dashboards", detail: "Dashboard design prioritised information density and action-ability — built for operators who need to make decisions quickly, not for passive monitoring." },
      { title: "Buildable by default", detail: "Cross-functional collaboration with engineers and consultants to ensure every design was actually buildable and shippable on schedule." },
    ],
    outcomes: [
      "40% improvement in overall business efficiency across designed workflows",
      "52% reduction in response time from the email organiser and lead qualifier agent",
      "28% increase in lead conversion from the CRM routing system",
      "35% improvement in internal reporting and monitoring efficiency",
    ],
    reflection:
      "LeapTra pushed me to design for outcomes, not outputs. When the company you're designing for measures success in revenue and efficiency numbers — not in design approval — it sharpens how you think about every decision. I stopped asking \"does this look right?\" and started asking \"does this actually work?\" That shift is permanent.",
    tools: ["Figma", "Framer", "Notion", "Loom"],
  },
  {
    id: "jompal",
    name: "Jomppa",
    tagline: "Errand service platform for Nigerians and the Nigerian diaspora",
    role: "Product Designer (End-to-End)",
    year: "2024",
    client: "Jomppa",
    industry: "Errand Services / Diaspora",
    duration: "End-to-end",
    platform: "PWA (Mobile-first)",
    heroImage: jomppaBanner,
    heroImageSources: { 480: jomppaBanner480, 960: jomppaBanner960, 1440: jomppaBanner1440 },
    liveUrl: "https://jomppa.com",
    liveLabel: "jomppa.com",
    description:
      "An errand service platform built for Nigerians and the Nigerian diaspora — send gifts, deliver corporate documents, run grocery errands, and handle day-to-day tasks within Nigeria and across borders.",
    tags: ["PWA", "Errand Services", "Diaspora", "Design Systems", "Mobile"],
    status: "Active",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-border bg-card">
        <img src={jomppaLogo} alt="Jomppa logo" className="h-full w-full object-contain" />
      </div>
    ),
    accentClass: "from-blue-500 to-indigo-600",
    overview:
      "Jomppa is an errand service platform built specifically for Nigerians and the Nigerian diaspora. It enables users to send gifts, deliver corporate documents, run grocery errands, and handle day-to-day tasks — both within Nigeria and across borders. The platform bridges the gap between Nigerians abroad who need things done at home and trusted, accountable runners who can execute those tasks reliably.",
    problem:
      "There is a specific kind of frustration that Nigerians living abroad know well — the anxiety of needing something done back home with no reliable way to make it happen. Send a birthday gift to a parent in Lagos. Get a contract signed and delivered to a business partner in Abuja. Pick up groceries for a family member who can't leave the house. The informal alternatives — WhatsApp middlemen, asking favours from friends of friends — worked until they didn't. When they failed, there was no accountability, no recourse, and often no refund. For the diaspora especially, this carried extra emotional weight. Jomppa was built to close this gap.",
    solution:
      "Product Designer — end-to-end. Research, information architecture, service categorisation, wireframing, prototyping, design system, high-fidelity UI, and developer handoff through to launch.",
    designThinking:
      "Trust is the product, not the errand — users don't just want it done, they want to feel confident it will be done correctly, on time, without chasing. Different errands also carry different emotional weight: a corporate document has legal implications, a birthday gift carries sentiment, groceries have perishability concerns. Each needed its own UX treatment. And diaspora users onboard differently — often in a hurry, on a different device, across a time zone — so zero app store friction was non-negotiable.",
    keyInsights: [
      "Trust is the product, not the errand. Users don't just want it done — they want to feel confident it will be done correctly, on time, without chasing.",
      "Different errands carry different emotional weight. A corporate document has legal implications. A birthday gift carries sentiment. Groceries have perishability concerns. Each needed its own UX treatment.",
      "Diaspora users onboard differently. They're often in a hurry, on a different device, across a time zone. Zero app store friction was non-negotiable.",
    ],
    keyDecisions: [
      { title: "PWA over native app", detail: "A link that works immediately, no download required — designed specifically for diaspora onboarding behaviour." },
      { title: "Service-specific flows", detail: "Distinct request flows for gift sending, document delivery, and grocery runs, with tailored fields, confirmation language, and timeline expectations." },
      { title: "Real-time status design", detail: "A persistent status layer (confirmed → runner assigned → en route → delivered) to reduce anxiety and eliminate the urge to contact support." },
      { title: "Design system built to scale", detail: "A component library from day one, not as an afterthought." },
    ],
    typography: [
      { family: "Satoshi", usage: "Headlines, hero, marketing", weights: "500, 700, 900" },
      { family: "Inter", usage: "Body, forms, UI", weights: "400, 500, 600" },
    ],
    colorPalette: [
      { name: "Trust Blue", hex: "#2563EB", usage: "Primary actions, brand" },
      { name: "Indigo Deep", hex: "#4F46E5", usage: "Gradients, hover" },
      { name: "Soft Sky", hex: "#EFF6FF", usage: "Backgrounds, surfaces" },
      { name: "Ink", hex: "#0F172A", usage: "Headlines, primary text" },
      { name: "Slate", hex: "#475569", usage: "Body copy, secondary" },
      { name: "Success", hex: "#10B981", usage: "Confirmation, ETA badges" },
    ],
    websiteOverview: [
      "Platform (jomppa.com): installable PWA with service categories for gifting, document delivery, groceries, and custom errands.",
      "Cross-border request flow: diaspora users place an errand for a recipient in Nigeria, pay in their own currency, and track it live.",
      "Real-time status layer: confirmed → runner assigned → en route → delivered, visible on every screen.",
      "Design system: component library and tokens built from day one for fast, consistent developer handoff.",
    ],
    process: [
      { title: "Research", detail: "Interviewed diaspora users and Nigeria-based recipients to map errand types, failure modes, and trust breakdowns in informal alternatives." },
      { title: "Service Categorisation", detail: "Defined the information architecture and grouped errands by emotional weight and operational requirements." },
      { title: "Design System", detail: "Built the component library, tokens, and patterns before high-fidelity UI to keep the platform scalable." },
      { title: "Handoff & Launch", detail: "Prototyped, documented, and handed off to engineering through to live launch." },
    ],
    outcomes: [
      "45% improvement in platform load time",
      "25% reduction in user onboarding time",
      "40% decrease in developer handoff time (reflecting design system quality)",
      "40% increase in overall platform engagement",
    ],
    reflection:
      "Jomppa taught me that the most important UX problem is often not the one immediately visible. On the surface it's an errand app. Underneath, it's a trust platform for a community that has historically relied on informal systems with no accountability. Designing for the diaspora pushed me to think harder about context — the emotional distance of being abroad, the high stakes of getting something wrong for a loved one, the friction of onboarding under time pressure. Those constraints made the design better.",
    tools: ["Figma", "Maze", "Miro"],
  },
  {
    id: "ytf",
    name: "Young Titans Foundation",
    tagline: "A bold, reason-driven website for youth development",
    role: "Web Designer",
    year: "2025",
    client: "Young Titans Foundation",
    industry: "Non-profit / Education",
    duration: "5 weeks",
    platform: "Marketing Site",
    heroVideo: ytfVideo,
    heroPoster: ytfPoster,
    description:
      "A bold, reason-driven website for a youth development foundation—clear storytelling, strong visual identity, and purposeful content structure.",
    icon: (
      <Icon className="border border-amber-900/40 bg-amber-950/30 text-[10px] font-semibold text-amber-400">★</Icon>
    ),
    accentClass: "from-amber-500 to-orange-600",
    overview:
      "The foundation needed a digital home that conveyed mission, impact, and credibility to attract donors, partners, and program applicants.",
    problem:
      "Their old site had no clear donation path, scattered program info, and didn't reflect the energy of the work being done on the ground.",
    solution:
      "Built a story-led site with impact metrics up front, a single donation CTA across the experience, and a programs hub that segments audiences.",
    designThinking:
      "Non-profits often over-explain and under-show. I flipped that—leading with photography of real beneficiaries and impact numbers before any prose. The warm amber palette was chosen to feel hopeful and human (cool blues felt too clinical for this mission). Every page funnels toward one of two actions: donate or apply. Nothing competes.",
    typography: [
      { family: "Fraunces", usage: "Display headlines, editorial moments", weights: "500, 700" },
      { family: "Inter", usage: "Body, navigation, forms", weights: "400, 500, 600" },
    ],
    colorPalette: [
      { name: "Amber Hope", hex: "#F59E0B", usage: "Primary CTA, accents" },
      { name: "Sunset Orange", hex: "#EA580C", usage: "Gradients, hover" },
      { name: "Cream", hex: "#FFFBEB", usage: "Background sections" },
      { name: "Charcoal", hex: "#1C1917", usage: "Headlines, primary text" },
      { name: "Earth", hex: "#78716C", usage: "Body copy" },
    ],
    websiteOverview: [
      "Hero: photo-led mission statement with single primary CTA (Donate).",
      "Impact strip: live metrics (lives reached, programs run, partners).",
      "Programs hub: segmented by audience (students, mentors, partners).",
      "Stories: long-form beneficiary stories with photography.",
      "Get involved: donation, volunteer, and partnership flows on a single page.",
    ],
    process: [
      { title: "Brand Audit", detail: "Refined the visual language—warm palette, photo-led storytelling, and editorial typography." },
      { title: "Content Strategy", detail: "Restructured content into Mission, Programs, Impact, and Get Involved." },
      { title: "Build", detail: "Shipped a responsive site with CMS-driven program pages and a donation flow." },
    ],
    outcomes: [
      "Donations up 3.4× in the first quarter",
      "Volunteer signups grew 60%",
      "Press mentions across 5 outlets",
    ],
    tools: ["Figma", "Webflow", "Photography direction"],
  },
  {
    id: "saglev",
    name: "Saglev Electric Vehicle",
    tagline: "Premium EV landing experience",
    role: "Web Designer",
    year: "2025",
    client: "Saglev",
    industry: "Automotive / EV",
    duration: "6 weeks",
    platform: "Marketing Site",
    description:
      "A premium EV landing experience with immersive visuals, refined layout, and an automotive feel inspired by global electric car brands.",
    icon: (
      <Icon className="border border-emerald-900/40 bg-emerald-950/30 text-[10px] font-semibold text-emerald-400">≋</Icon>
    ),
    accentClass: "from-emerald-500 to-teal-600",
    overview:
      "Saglev's debut model needed a landing experience that could rival global EV brands and convert demo-drive bookings.",
    problem:
      "As a new entrant, Saglev had to establish premium credibility and explain the model lineup in a single, scrollable narrative.",
    solution:
      "Designed a cinematic hero, modular feature blocks with spec callouts, and a demo-drive booking module embedded throughout the page.",
    designThinking:
      "Premium EV brands sell a feeling before they sell a spec sheet. I studied Lucid, Polestar, and Voyah—they all share quiet confidence: generous whitespace, restrained type, and one hero image that does the heavy lifting. I applied the same restraint to Saglev: minimal copy, full-bleed photography, and a deep emerald accent that signals 'electric' without screaming it.",
    typography: [
      { family: "Neue Haas Grotesk", usage: "Display, hero, model names", weights: "400, 500, 700" },
      { family: "Inter", usage: "Body, specs, navigation", weights: "400, 500" },
    ],
    colorPalette: [
      { name: "Electric Emerald", hex: "#10B981", usage: "Accent, EV badge" },
      { name: "Teal Depth", hex: "#0D9488", usage: "Hover, gradient" },
      { name: "Obsidian", hex: "#0A0A0A", usage: "Background, hero" },
      { name: "Pearl", hex: "#FAFAFA", usage: "Light sections, contrast" },
      { name: "Graphite", hex: "#404040", usage: "Body, captions" },
    ],
    websiteOverview: [
      "Cinematic hero with full-bleed model photography and minimal overlay copy.",
      "Model lineup: horizontally scrolling cards with spec highlights.",
      "Feature deep-dives: range, charging, interior, safety—each a full viewport block.",
      "Persistent demo-drive widget that follows scroll without obstructing content.",
      "Configurator entry point and dealership locator in the footer flow.",
    ],
    process: [
      { title: "Mood & Direction", detail: "Benchmarked Lucid, Polestar, and Voyah; defined the 'understated future' tone." },
      { title: "Layout System", detail: "Created a 12-column rhythm with full-bleed media and tight typographic pairing." },
      { title: "Conversion Design", detail: "Embedded a Demo Drive widget that follows scroll without being intrusive." },
    ],
    outcomes: [
      "Demo drive bookings doubled month-over-month",
      "Average time on page: 3:48",
      "Featured in 2 EV industry roundups",
    ],
    tools: ["Figma", "After Effects", "Framer"],
  },
  {
    id: "dealmate",
    name: "DealMate Escrow System",
    tagline: "Trustworthy escrow for high-value transactions",
    role: "Product Designer",
    year: "2024",
    client: "DealMate",
    industry: "Fintech / Escrow",
    duration: "12 weeks",
    platform: "Web + Mobile",
    heroImage: dealmateMockup,
    heroImageSources: { 480: dealmateMockup480, 960: dealmateMockup960, 1440: dealmateMockup1440 },
    description:
      "A secure and transparent escrow system designed to protect both buyers and sellers in high-value transactions with a clear, trustworthy interface.",
    icon: (
      <Icon className="border border-indigo-900/40 bg-indigo-950/30 text-[11px] font-bold text-indigo-400">M</Icon>
    ),
    accentClass: "from-indigo-500 to-violet-600",
    overview:
      "DealMate needed an escrow product where every party always knew exactly what was happening with their money and their deal.",
    problem:
      "Users abandoned mid-transaction because they couldn't tell what stage the deal was in or what action was required next.",
    solution:
      "Designed a deal timeline with status states, party-aware action prompts, and a dispute flow that felt fair to both sides.",
    designThinking:
      "Escrow design is fundamentally about reducing anxiety. Users are parting with significant money on the promise that a system they don't fully understand will protect them. I made the deal status the hero of every screen—a visible, always-on timeline that answers 'where is my money right now?' before the user even thinks to ask. The dispute flow was designed for symmetry: both parties see the same evidence, the same timeline, the same options. Fairness had to be visually obvious.",
    typography: [
      { family: "Inter", usage: "Entire interface — UI, body, headlines", weights: "400, 500, 600, 700" },
      { family: "IBM Plex Mono", usage: "Transaction IDs, amounts, timestamps", weights: "400, 500" },
    ],
    colorPalette: [
      { name: "Trust Indigo", hex: "#6366F1", usage: "Primary actions, brand" },
      { name: "Violet Depth", hex: "#7C3AED", usage: "Gradient, accents" },
      { name: "Background", hex: "#0B0B12", usage: "App background" },
      { name: "Card", hex: "#15151E", usage: "Cards, modals, panels" },
      { name: "Success", hex: "#22C55E", usage: "Released, confirmed states" },
      { name: "Warning", hex: "#F59E0B", usage: "Pending, action required" },
      { name: "Danger", hex: "#EF4444", usage: "Dispute, declined" },
    ],
    websiteOverview: [
      "Dashboard: all active deals with status timeline and required-action prompts.",
      "Deal detail: created → funded → delivered → released, with party-specific CTAs.",
      "Dispute center: evidence upload, mediator chat, decision log.",
      "Wallet: balance, payouts, and transaction history with monospace amounts.",
    ],
    process: [
      { title: "Risk Mapping", detail: "Workshopped failure modes with legal and ops teams to define every state." },
      { title: "Status System", detail: "Built a visual deal-state model: Created → Funded → Delivered → Released." },
      { title: "Dispute UX", detail: "Designed an evidence-upload flow and mediator dashboard." },
    ],
    outcomes: [
      "Transaction completion up 41%",
      "Support tickets down 28%",
      "NPS climbed from 22 to 51",
    ],
    tools: ["Figma", "Protopie", "Linear"],
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
