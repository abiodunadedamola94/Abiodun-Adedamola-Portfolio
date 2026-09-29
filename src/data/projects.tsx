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
  /** Three lines a reviewer reads first: outcome, role, scale. */
  tldr?: string[];
  constraints?: string[];
  /** Where the outcome numbers come from. */
  evidence?: string;
  /** Short proof shown on the projects list, e.g. "Conversion up 18%". */
  headlineMetric?: string;
  featured?: boolean;
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

// Case studies. Rules for this file (see docs/PORTFOLIO-AUDIT.md):
// every number must match the résumé or a named source; concept work is not listed;
// each study answers context → problem → role → constraints → decisions → outcomes → reflection.
export const projects: ProjectCaseStudy[] = [
  {
    id: "agentic-os",
    name: "MoCreative Agentic OS",
    tagline: "A one-person business that runs on AI agents I designed",
    role: "Founder, product designer and builder",
    year: "2025 – now",
    client: "MoCreative Concept (own product)",
    industry: "AI automation / operations",
    duration: "Ongoing, built in public",
    platform: "Supabase, Claude, Resend, Notion",
    liveUrl: "https://mocreativeconcept.com",
    liveLabel: "mocreativeconcept.com",
    description:
      "An operating system of 34 planned AI agents that runs my design practice. 15 are live: they write my morning brief, find and research leads, draft proposals, send invoices and track every naira spent.",
    tags: ["AI agents", "Systems design", "0→1", "Automation"],
    status: "Live",
    featured: true,
    headlineMetric: "15 agents live",
    icon: (
      <Icon className="border border-amber-900/40 bg-amber-950/30 text-[10px] font-semibold text-amber-300">OS</Icon>
    ),
    accentClass: "from-amber-400 to-yellow-600",
    tldr: [
      "Designed and shipped 15 production AI agents (34 planned) that run a real business every day.",
      "Sole designer, product owner and builder, working 20 to 25 hours a week.",
      "Human approval on anything external; an automatic budget brake on API spend.",
    ],
    overview:
      "MoCreative Concept is my product design and AI automation practice in Lagos. I treat the business itself as the product: every repeated job becomes an agent, and every agent is designed, specced and shipped like a feature, then run in public.",
    problem:
      "A solo practice loses its week to admin: finding leads, writing proposals, chasing invoices, tracking tools. That time comes straight out of design work, and nothing about it is visible until something is late or over budget.",
    solution:
      "Everything. I mapped the business into layers (command, acquisition, delivery, recurring revenue, brand, finance), wrote a spec card for each of 34 agents, and built them one at a time on Supabase Edge Functions, Claude, Resend and Notion.",
    constraints: [
      "One person, 20 to 25 hours a week, alongside a full-time role.",
      "A tool budget of about $30 a month, so every paid API call is metered.",
      "Nigerian SMB buyers who answer WhatsApp faster than email.",
      "Nothing can reach a client without a human reading it first.",
    ],
    designThinking:
      "I designed the system the way I would design a product for a founder: start from the moment of use. For me that moment is 7am, so the first agent writes a daily brief that tells me what needs attention and why. Each agent after that had to earn a place in that brief. If it couldn't report its own success or failure in one line, it wasn't finished.",
    keyInsights: [
      "Most agents don't need an LLM. Rules-based agents cost almost nothing and fail loudly; I only reach for Claude where judgement is needed.",
      "An agent is only done when it reports on itself: every run writes a log row, and a failure appears in the next morning's brief.",
      "People trust automation more when the approval step is obvious, not hidden.",
    ],
    keyDecisions: [
      { title: "Approval gates over full autonomy", detail: "Agents draft; I send. The prospecting agent writes outreach but can't send it. That trades speed for trust, and at this stage trust is worth more." },
      { title: "Read the prospect's site before pitching", detail: "The lead agent opens each business's own website and picks the pitch from what it finds: a broken or missing site gets a website pitch, a working one gets an AI audit. Generic pitches were the alternative, and they get ignored." },
      { title: "Metered cost with an automatic brake", detail: "Every paid call records its real cost. When the month's Anthropic spend reaches a set limit, the lead agent pauses itself, so I don't find the bill a month later." },
      { title: "Supabase for machines, Notion for people", detail: "Agents write to Postgres; I read summaries in Notion and email. One source of truth, two views, no copying between them." },
    ],
    process: [
      { title: "Map", detail: "Split the business into six layers and listed every recurring job in each." },
      { title: "Spec", detail: "Wrote an agent card per job: trigger, inputs, output, failure mode, cost." },
      { title: "Ship one at a time", detail: "Half-built isn't built. Each agent went live, logged, and alerting before the next started." },
      { title: "Operate", detail: "The morning brief reviews every agent daily; spend control reviews the cost of all of them." },
    ],
    outcomes: [
      "15 agents in production, running on schedules from hourly to every five days",
      "A 7am brief covering pipeline, reply rate, bounce rate, renewals and spend",
      "Tool spend tracked to the naira, with renewal reminders seven days ahead",
      "Two outreach batches researched and drafted by the agents, sent after my review",
    ],
    evidence: "the system's own run logs and spend tracker (September 2026).",
    websiteOverview: [
      "CEO agent: the daily brief with priorities, pipeline and spend.",
      "Prospecting agent: finds businesses, reads their sites, drafts first messages.",
      "Proposal, invoice and payment-chase agents: from accepted brief to paid invoice.",
      "Spend control agent: every subscription, balance and renewal, with a budget brake.",
    ],
    reflection:
      "Designing for my own operations taught me what founders actually need from a designer: not screens, but fewer decisions per day. The best agent is the one I stop thinking about.",
    whatsNext:
      "Productise it: standalone agents, outcome bundles and a pro tier that other businesses can run, with each client's data fully separated.",
    tools: ["Claude", "Supabase", "Resend", "Notion", "Cloudflare", "Claude Code", "Figma"],
  },
  {
    id: "job-search-agent",
    name: "Job Search Agent",
    tagline: "A candidate-first job search that never applies on its own",
    role: "Product designer and builder",
    year: "2026",
    client: "Own product",
    industry: "HR tech / job search",
    duration: "Ongoing",
    platform: "Supabase, Claude, scheduled agent",
    description:
      "A weekly agent that finds remote roles, checks each one is live, scores the fit and drafts the application, then waits for me. Every drafted answer is tagged verified or claimed.",
    tags: ["Product strategy", "AI agents", "Trust design"],
    status: "Live",
    featured: true,
    headlineMetric: "90 roles tracked",
    icon: (
      <Icon className="border border-emerald-900/40 bg-emerald-950/30 text-[10px] font-semibold text-emerald-300">JS</Icon>
    ),
    accentClass: "from-emerald-400 to-teal-600",
    tldr: [
      "Designed the product strategy and built the system end to end.",
      "90 roles tracked and scored; applications drafted but never auto-sent.",
      "Honesty enforced in code: an untagged claim can't be saved.",
    ],
    overview:
      "Applying for remote design roles from Lagos means reading hundreds of postings to find the few you can actually apply for. I built my own agent to do the reading, scoring and drafting, so my time goes on the applications that matter.",
    problem:
      "2026 hiring is flooded with AI-generated applications, and recruiters have started screening for fake candidates. Tools that apply faster make that worse. The scarce thing is trustworthy signal from a real person.",
    solution:
      "Product strategy (\"The Honest Applicant\"), the data model, the scoring rules, the write layer that enforces them, and the weekly scheduled agent.",
    constraints: [
      "Most remote roles are limited to US, EU or UK residents; location had to be scored, not silently filtered.",
      "Two agents write to the same store: a weekly scheduled run and my local sessions.",
      "Submitting an application is irreversible, so it can never be automated.",
    ],
    designThinking:
      "I started from the recruiter's side of the screen. What they need is fewer, truer applications. So the agent optimises for fit and proof, not volume: it drafts, tags every claim with its evidence, and stops.",
    keyDecisions: [
      { title: "No auto-apply, enforced in code", detail: "Recording a submission needs a one-time token and a real person's name. There is no code path that submits a form." },
      { title: "Verified or claimed, on every answer", detail: "An answer that names a dated, checkable result is tagged verified; general experience is tagged claimed. An untagged answer is rejected by the database layer." },
      { title: "Location as a score, not a filter", detail: "Work authorisation is shown as friction and scored honestly. I decide what's worth trying; the agent never hides a role from me." },
    ],
    process: [
      { title: "Strategy", detail: "Mapped the 2026 hiring market, the fraud problem and where honest candidates lose." },
      { title: "Data model", detail: "Postings, applications, answer fields, submissions and an audit log of every run." },
      { title: "Enforced write layer", detail: "An edge function that validates scores, tiers and evidence tags before anything is stored." },
      { title: "Scheduled agent", detail: "A Monday run that searches, verifies and drafts, then refreshes the dashboard." },
    ],
    outcomes: [
      "90 roles tracked and scored across every region",
      "Applications drafted with evidence-tagged answers, sent only after review",
      "One source of truth shared by the scheduled agent and my local sessions",
    ],
    evidence: "the agent's database and run log (September 2026).",
    reflection:
      "Building for my own job search made me the user and the designer at once. The most useful feature turned out to be a refusal: the system won't let me send anything I can't back up.",
    whatsNext:
      "A shareable application page for each role, and a ledger of which employers reply, so candidates can see who's worth their time.",
    tools: ["Supabase", "Claude", "Figma", "Claude Code"],
  },
  {
    id: "jompal",
    name: "Jomppa",
    tagline: "Trusted errands across Nigeria, booked locally or from abroad",
    role: "Product designer (end to end)",
    year: "2025 – now",
    client: "Jomppa, a LeapTra product",
    industry: "Consumer marketplace / errands",
    duration: "From Oct 2025",
    platform: "Web app (PWA): client and agent apps",
    heroImage: jomppaBanner,
    heroImageSources: { 480: jomppaBanner480, 960: jomppaBanner960, 1440: jomppaBanner1440 },
    liveUrl: "https://jomppa.com",
    liveLabel: "jomppa.com",
    description:
      "A two-sided errands marketplace: customers book groceries, pickups, courier runs and home services across Nigeria, and verified local agents complete them, with payment held in escrow until proof of completion.",
    tags: ["Marketplace", "Trust & safety UX", "Design system", "PWA"],
    status: "Live",
    featured: true,
    headlineMetric: "Handoff time down 40%",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md border border-border bg-card">
        <img src={jomppaLogo} alt="Jomppa logo" className="h-full w-full object-contain" />
      </div>
    ),
    accentClass: "from-[#2458E8] to-[#0B1530]",
    tldr: [
      "Led end-to-end design of a two-sided marketplace, now live in Lagos, Abuja and Port Harcourt.",
      "Built the design system across 50+ screens: developer handoff time down 40%.",
      "Load time down 45%, onboarding time down 25%, engagement up 40%.",
    ],
    overview:
      "Many Nigerians abroad still manage life at home: groceries for parents, documents to collect, gifts to send. Informal help is common and often unreliable. Jomppa, built by the LeapTra team, turns those errands into a tracked, paid and protected service.",
    problem:
      "Customers were being asked to pay a stranger for a task they couldn't see, often from another country. Without visible progress and protected money, most people would rather call a relative.",
    solution:
      "End-to-end product design: service categories, the booking flow, live tracking, the escrow and proof-of-completion flow, the agent app, and the design system that holds both apps together.",
    constraints: [
      "Customers often book from abroad, for someone else, on unfamiliar devices.",
      "Two audiences with opposite needs: customers want certainty, agents want jobs and fast payouts.",
      "Variable connectivity; an app-store download would lose many first-time users.",
    ],
    designThinking:
      "Trust was the product. Every screen answers one of three questions: who is doing my errand, where are they now, and is my money safe? If a screen didn't answer one of those, it was cut or merged.",
    keyInsights: [
      "Customers didn't want more features; they wanted to stop worrying.",
      "Proof matters more than speed: a photo at completion does more for trust than a faster ETA.",
      "Agents are users too; their earnings and job feed decide supply.",
    ],
    keyDecisions: [
      { title: "Escrow with proof of completion", detail: "Payment is held and released only after photo proof. A slower payout for agents, in exchange for the confidence that makes customers book at all." },
      { title: "A persistent status layer", detail: "Assigned, en route, arrived, done: live location and milestones on every order, so customers don't need to message support to know what's happening." },
      { title: "PWA over native apps", detail: "A link that works immediately, with no download, for diaspora users onboarding family on different phones." },
      { title: "Design system first", detail: "Components, variants and tokens before high-fidelity screens, so the customer and agent apps stay consistent as the service list grows." },
    ],
    process: [
      { title: "Research", detail: "Mapped errand types, failure points and trust breakdowns in the informal alternatives." },
      { title: "Service architecture", detail: "Grouped errands by urgency and what proof each one needs." },
      { title: "Design system", detail: "Built the Figma component library and tokens across 50+ screens." },
      { title: "Handoff and launch", detail: "Prototyped, documented and supported engineering through to live launch." },
    ],
    outcomes: [
      "Developer handoff time down 40% from the design system",
      "Platform load time down 45%",
      "User onboarding time down 25%",
      "Overall platform engagement up 40%",
      "Live in Lagos, Abuja and Port Harcourt",
    ],
    colorPalette: [
      { name: "Jomppa Blue", hex: "#2458E8", usage: "Primary actions, brand" },
      { name: "Deep Navy", hex: "#0B1530", usage: "Headlines, dark surfaces" },
      { name: "Sunshine", hex: "#FFC629", usage: "Offers, highlights" },
      { name: "Signal Orange", hex: "#FF8A1F", usage: "Status accents" },
      { name: "Mist", hex: "#EAF0FB", usage: "Secondary surfaces" },
      { name: "Slate", hex: "#687287", usage: "Body copy" },
    ],
    typography: [{ family: "Plus Jakarta Sans", usage: "Headlines, UI and body", weights: "500, 600, 700, 800" }],
    reflection:
      "Jomppa taught me that in a trust-starved market, the interface's main job is reassurance. Every animation, label and status exists to lower anxiety, not to impress.",
    whatsNext:
      "Measure repeat bookings per customer and time-to-accept per agent, and design the next release around whichever is weaker.",
    tools: ["Figma"],
  },
  {
    id: "dealmate",
    name: "DealMate Escrow System",
    tagline: "Peer-to-peer escrow people can actually trust",
    role: "Product designer",
    year: "2024",
    client: "DealMate",
    industry: "Fintech / escrow",
    duration: "12 weeks",
    platform: "Web app",
    heroImage: dealmateMockup,
    heroImageSources: { 480: dealmateMockup480, 960: dealmateMockup960, 1440: dealmateMockup1440 },
    description:
      "Transaction flows for a peer-to-peer escrow platform in Nigeria, redesigned around one question: where is my money right now?",
    tags: ["Fintech", "Trust & safety UX", "Transaction flows"],
    status: "Shipped",
    featured: true,
    headlineMetric: "Conversion up 18%",
    icon: (
      <Icon className="border border-indigo-900/40 bg-indigo-950/30 text-[11px] font-bold text-indigo-400">M</Icon>
    ),
    accentClass: "from-indigo-500 to-violet-600",
    tldr: [
      "Redesigned the end-to-end escrow transaction flow.",
      "Conversion up 18%; support tickets down 30%.",
      "One deal timeline that buyer and seller read the same way.",
    ],
    overview:
      "Online deals between strangers in Nigeria often fail on trust: the buyer won't pay first and the seller won't ship first. DealMate holds the money in the middle until both sides are satisfied.",
    problem:
      "Users abandoned transactions halfway because they couldn't tell which stage the deal was in or what they had to do next. Confusion turned into support tickets and lost deals.",
    solution:
      "Product design for the transaction flows: the deal timeline, party-aware prompts, security signals at the riskiest moments, and the dispute flow.",
    constraints: [
      "Users parting with real money through a system they don't fully understand.",
      "Two parties with conflicting interests looking at the same deal.",
      "Compliance language that had to stay accurate without scaring people.",
    ],
    designThinking:
      "Escrow design is anxiety design. I made the deal status the hero of every screen, so the answer to \"where is my money?\" is visible before anyone thinks to ask. The dispute flow was built for symmetry: both parties see the same evidence, timeline and options.",
    keyDecisions: [
      { title: "Status as the hero", detail: "Created, funded, delivered, released: one visible timeline on every screen instead of a status buried in a table." },
      { title: "Party-aware prompts", detail: "The same deal shows the buyer and the seller only the action that's theirs to take next." },
      { title: "Security signals at the right moment", detail: "Protection messaging appears when money moves, not as a banner nobody reads." },
    ],
    process: [
      { title: "Failure mapping", detail: "Listed every way a deal could stall or go wrong, and designed a state for each." },
      { title: "Status system", detail: "Built the visual deal-state model shared by both parties." },
      { title: "Dispute flow", detail: "Evidence upload and a decision log that both sides can see." },
    ],
    outcomes: ["Conversion up 18%", "Support tickets down 30%", "One deal timeline both parties can read at a glance"],
    colorPalette: [
      { name: "Trust Indigo", hex: "#6366F1", usage: "Primary actions, brand" },
      { name: "Background", hex: "#0B0B12", usage: "App background" },
      { name: "Success", hex: "#22C55E", usage: "Released, confirmed" },
      { name: "Warning", hex: "#F59E0B", usage: "Action required" },
      { name: "Danger", hex: "#EF4444", usage: "Dispute, declined" },
    ],
    reflection:
      "The numbers moved because the product finally said what it was doing. Clarity was the feature.",
    whatsNext:
      "Track where remaining disputes start, and design the step before it.",
    tools: ["Figma", "Protopie", "Linear"],
  },
  {
    id: "next-level-procurement",
    name: "Next Level Procurement",
    tagline: "From Shopall Superstore to a UK-facing procurement brand",
    role: "Sole designer and developer",
    year: "2021 – now",
    client: "Next Level Procurement (formerly Shopall Superstore & Logistics)",
    industry: "B2B procurement and logistics",
    duration: "Since 2021",
    platform: "Brand, website, procurement platform (in progress)",
    liveUrl: "https://nextlevelprocurements.com",
    liveLabel: "nextlevelprocurements.com",
    description:
      "My longest client relationship: from social media graphics in 2021, to the rebrand, to a website I designed and built, to the procurement platform I'm designing now.",
    tags: ["Brand", "Web", "B2B", "AI-native build"],
    status: "Live",
    featured: true,
    headlineMetric: "Sole designer since 2021",
    icon: (
      <Icon className="border border-[#2CBAAC]/40 bg-[#2CBAAC]/15 text-[10px] font-semibold text-[#75D7CD]">NL</Icon>
    ),
    accentClass: "from-[#2CBAAC] to-[#121317]",
    tldr: [
      "Sole designer since 2021; led the rebrand from Shopall Superstore & Logistics.",
      "Designed and built the website myself with Lovable, Claude Code and Vercel.",
      "Now designing the procurement management platform.",
    ],
    overview:
      "Next Level Procurement sources products from the UK, EU and China for businesses, and manages importation and delivery to their door. It started as Shopall Superstore & Logistics, a retail and logistics business with years of operating history.",
    problem:
      "The business had outgrown its retail name and look. Procurement buyers don't browse; they de-risk. They need to see capability, scope and reliability quickly, and the old brand said \"shop\", not \"sourcing partner\".",
    solution:
      "Everything design-side: early social campaigns, the rebrand (name positioning, identity, visual direction), the website from concept to live production, and now the platform.",
    constraints: [
      "No separate engineering team: design and build had to be one person.",
      "Buyers across Nigeria and the UK with different expectations of a supplier.",
      "Many enquiries start on WhatsApp, not web forms.",
    ],
    designThinking:
      "I positioned the site as a dedicated buying team rather than a shop. Services lead with scope (sourcing, negotiation, importation, logistics) and the proof points buyers look for: trusted vendors, tracking and reporting.",
    keyDecisions: [
      { title: "Capability before persuasion", detail: "Services and operational scope sit above the fold instead of a slogan." },
      { title: "WhatsApp as a first-class call to action", detail: "It matches how this market actually starts a conversation." },
      { title: "A waitlist for the platform", detail: "Collect demand for real-time supply tracking before building all of it." },
    ],
    process: [
      { title: "Social and brand groundwork", detail: "Campaigns and brand assets for Shopall from 2021; engagement up 60% across channels." },
      { title: "Rebrand", detail: "New name positioning, identity and visual direction as Next Level Procurement." },
      { title: "Website", detail: "Designed and built with Lovable and Claude Code, deployed on Vercel." },
      { title: "Platform", detail: "Designing a procurement management system for suppliers, workflows and reporting." },
    ],
    outcomes: [
      "A live website for the new brand, designed and built by one person",
      "Social engagement up 60% across channels in the Shopall era",
      "A clear service structure for sourcing, logistics and end-to-end packages",
    ],
    colorPalette: [
      { name: "Procurement Teal", hex: "#2CBAAC", usage: "Primary actions, brand" },
      { name: "Light Teal", hex: "#75D7CD", usage: "Highlights on dark" },
      { name: "Ink", hex: "#121317", usage: "Background, headlines" },
      { name: "Graphite", hex: "#24262E", usage: "Cards, panels" },
      { name: "Mist", hex: "#E7EBEF", usage: "Body on dark" },
    ],
    typography: [
      { family: "Geist", usage: "Headlines and body", weights: "400, 500, 600" },
      { family: "Geist Mono", usage: "Labels, data", weights: "400, 500" },
    ],
    reflection:
      "Staying with one client for years showed me how design grows with a business: first posters, then a brand, then the product it runs on.",
    whatsNext:
      "Launch the platform's supplier tracking to the waitlist and measure which service buyers ask for first.",
    tools: ["Figma", "Lovable", "Claude Code", "Vercel"],
  },
  {
    id: "leaptra",
    name: "LeapTra",
    tagline: "Rebrand, repositioning and product design for a growth infrastructure company",
    role: "Product and brand designer",
    year: "2025 – now",
    client: "LeapTra",
    industry: "Growth infrastructure / B2B services",
    duration: "From Sep 2025",
    platform: "Marketing site, internal tools, AI agents",
    heroImage: leaptraWork,
    heroImageSources: { 480: leaptraWork480, 960: leaptraWork960, 1440: leaptraWork1440 },
    proofImage: leaptraProofBanner,
    proofImageSources: { 480: leaptraProof480, 960: leaptraProof960, 1440: leaptraProof1440 },
    liveUrl: "https://leaptra.com",
    liveLabel: "leaptra.com",
    description:
      "LeapTra builds and operates the growth layer for scaling companies: product, distribution, brand and embedded senior talent, run against one set of numbers. I led its rebrand and repositioning, and I design across its site, internal AI agents and products.",
    tags: ["B2B", "AI agents", "Dashboards", "Brand"],
    status: "Active",
    featured: true,
    headlineMetric: "Response time down 52%",
    icon: (
      <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-[#0E1E35]">
        <img src={leaptraLogo} alt="LeapTra logo" className="h-full w-full object-contain p-0.5" />
      </div>
    ),
    accentClass: "from-[#60A5FA] to-[#1D4ED8]",
    tldr: [
      "Led LeapTra's rebrand and repositioning: from AI-agent products to growth infrastructure.",
      "Lead-qualifier agent: response time down 52%, lead conversion up 28%.",
      "Product designer across its internal AI agents and products, including Jomppa.",
    ],
    overview:
      "LeapTra started with AI agents for business automation and has grown into growth infrastructure: four pillars (Product & Platform, Distribution & Demand, Brand & Experience, Embedded Talent) run as one system, plus a platform for payroll, contracts and compliance for distributed teams.",
    problem:
      "Scaling companies outgrow freelancers, but agencies hand back fragmented work with no one accountable for results. LeapTra had to explain a coordinated, outcome-owned model, and its own tools had to run that model efficiently.",
    solution:
      "Brand and product design across the company: the rebrand and new positioning, the website structure, AI agents for sales, marketing, onboarding, operations and support, admin dashboards and monitoring, and the talent platform now in progress.",
    constraints: [
      "A company repositioning while it operates: from AI-agent products to growth infrastructure.",
      "Senior B2B buyers who want proof and structure, not AI hype.",
      "Internal tools used by operators who need to act fast, not browse.",
    ],
    designThinking:
      "I design each agent around the workflow it replaces, not as a generic chat window, and each dashboard around the decision an operator needs to make next. On the site, every section answers a buyer's question in order: what is it, who is it for, how does it work, can I trust it?",
    keyDecisions: [
      { title: "Workflow-first agents", detail: "Each agent fits how the team already works, so adoption doesn't depend on training." },
      { title: "Dense, actionable dashboards", detail: "Built for decisions, not passive monitoring." },
      { title: "Reposition before redesign", detail: "We restructured what LeapTra sells (four pillars run as one system) before touching the visuals, so the brand describes the business rather than decorating it." },
      { title: "A calmer, more senior brand", detail: "Moved from violet AI gradients to navy and signal blue, which reads as infrastructure for B2B buyers rather than another AI tool." },
      { title: "Proof over promises", detail: "The new site leads with operating numbers and anonymised engagements rather than AI claims." },
    ],
    process: [
      { title: "Reposition", detail: "Restructured the offer into Product & Platform, Distribution & Demand, Brand & Experience and Embedded Talent." },
      { title: "Rebrand", detail: "New identity, colour system and site structure: Diagnose, Design, Deploy, Operate." },
      { title: "Map workflows", detail: "Sales, marketing, onboarding, operations and support, step by step." },
      { title: "Design agents and tools", detail: "Lead qualification, email organisation, CRM routing, monitoring dashboards." },
      { title: "Ship with engineering", detail: "Worked with engineers and consultants so every design was buildable on schedule." },
    ],
    outcomes: [
      "Overall business efficiency up 40% across the designed workflows",
      "Response time down 52% with the email organiser and lead-qualifier agent",
      "Lead conversion up 28% through CRM routing",
      "Internal reporting efficiency up 35%",
    ],
    colorPalette: [
      { name: "Navy", hex: "#0E1E35", usage: "Background, brand base" },
      { name: "Signal Blue", hex: "#60A5FA", usage: "Accent, highlights" },
      { name: "Sky", hex: "#85BAFF", usage: "Links, secondary accent" },
      { name: "Ice", hex: "#EDF5FF", usage: "Light surfaces" },
      { name: "Slate", hex: "#CBD5E1", usage: "Secondary text" },
    ],
    typography: [{ family: "Inter", usage: "Headlines, body and UI", weights: "400, 500, 600" }],
    reflection:
      "LeapTra changed how I measure my work. When the company is judged on efficiency and revenue, not design approval, the question stops being \"does it look right?\" and becomes \"does it work?\"",
    whatsNext:
      "Ship LeapTra's talent platform: placing senior talent with other businesses, then running payroll, contracts, compliance and performance for those distributed teams in one system.",
    tools: ["Figma", "Claude Code", "Notion", "Loom", "Illustrator"],
  },
  {
    id: "harkardah",
    name: "Harkardah",
    tagline: "Technology for better education",
    role: "Co-founder, product and brand design",
    year: "2025 – now",
    client: "Harkardah (co-founded venture)",
    industry: "Education technology",
    duration: "Ongoing",
    platform: "Web",
    liveUrl: "https://harkardah.com.ng",
    liveLabel: "harkardah.com.ng",
    description:
      "An education technology venture I co-founded. Harkardah Schools brings administration, academics, attendance, fees and parent communication into one place.",
    tags: ["EdTech", "Brand", "Product", "Co-founder"],
    status: "Building",
    icon: (
      <Icon className="border border-[#0000FE]/40 bg-[#0000FE]/15 text-[10px] font-semibold text-[#8FA0FF]">H</Icon>
    ),
    accentClass: "from-[#0000FE] to-[#12172B]",
    tldr: [
      "Co-founder; I lead product and brand design.",
      "Harkardah Schools: one system for school administration, academics and parents.",
      "Brand and interface designed together from day one.",
    ],
    overview:
      "Harkardah builds digital solutions that help learners learn, teachers teach and schools operate better. It treats education as an ecosystem (learners, teachers, schools and institutions) and starts with Harkardah Schools, an operating system for school administration, academics, communication and records.",
    problem:
      "School administrators juggle attendance, fees, results and parent messages across disconnected tools, and parents see little of it until something goes wrong.",
    solution:
      "Co-founder. I lead product and brand design: the identity, the website, and the product experience for school staff and parents.",
    constraints: [
      "Users range from confident administrators to teachers new to software.",
      "Parents mostly on phones, often on limited data.",
    ],
    designThinking:
      "I designed brand and product in the same room. Identity decisions were tested against real screens before being locked, so the brand holds up inside a data-heavy school dashboard, not just on a homepage.",
    keyDecisions: [
      { title: "One place, not more tools", detail: "Administration, academics, attendance, fees and communication share one model instead of five apps." },
      { title: "Brand tested inside the product", detail: "Type and colour were chosen against dashboards and forms, not just marketing pages." },
    ],
    process: [
      { title: "Positioning", detail: "Defined what Harkardah is for and who it serves first." },
      { title: "Identity", detail: "Built a brand that feels trustworthy to schools and parents." },
      { title: "Product", detail: "Designing the Harkardah Schools experience with my co-founder." },
    ],
    outcomes: [
      "A live brand and website at harkardah.com.ng",
      "A product direction for Harkardah Schools across five school workflows",
    ],
    colorPalette: [
      { name: "Harkardah Blue", hex: "#0000FE", usage: "Primary actions, brand" },
      { name: "Midnight", hex: "#12172B", usage: "Headlines, product surfaces" },
      { name: "Chalk", hex: "#F7F4EC", usage: "Page background" },
      { name: "Periwinkle", hex: "#8FA0FF", usage: "Labels on dark" },
      { name: "Chalk Gold", hex: "#E3A73E", usage: "Status accents" },
    ],
    typography: [
      { family: "Space Grotesk", usage: "Display headlines", weights: "500, 600, 700" },
      { family: "Inter", usage: "Body and UI", weights: "400, 500, 600" },
    ],
    reflection:
      "Co-founding changes the design question from \"what should this look like?\" to \"what should we build first?\"",
    tools: ["Figma", "Lovable", "Illustrator"],
  },
  {
    id: "ytf",
    name: "Young Titans Foundation",
    tagline: "A clearer website for a youth development foundation",
    role: "Product design intern",
    year: "2025",
    client: "Young Titans Foundation",
    industry: "Non-profit / education",
    duration: "Jul – Oct 2025",
    platform: "Website",
    heroVideo: ytfVideo,
    heroPoster: ytfPoster,
    description:
      "Designed the foundation's website and landing page, grounded in 50+ interviews with teachers and parents, and led a small design team to deliver it.",
    tags: ["UX research", "Accessibility", "Web design"],
    status: "Shipped",
    headlineMetric: "Engagement up 52%",
    icon: (
      <Icon className="border border-amber-900/40 bg-amber-950/30 text-[10px] font-semibold text-amber-400">★</Icon>
    ),
    accentClass: "from-amber-500 to-orange-600",
    tldr: [
      "Ran 50+ one-to-one interviews with teachers and parents.",
      "Led a team of 2 to 3 designers; built to WCAG 2.1 AA.",
      "User engagement up 52% after the redesign.",
    ],
    overview:
      "Young Titans Foundation supports young people through education programmes. Its site had to explain the mission, show impact and route visitors to the right programme.",
    problem:
      "Programme information was scattered and the path to getting involved was unclear, so visitors left without acting.",
    solution:
      "Research, information architecture and visual design for the website and landing page; I also led the small design team that delivered it.",
    constraints: [
      "Audiences with very different needs: students, parents, teachers and partners.",
      "Accessibility was a requirement, not a nice-to-have.",
      "A short internship timeline.",
    ],
    designThinking:
      "I let the interviews set the structure. Teachers and parents asked the same few questions, so each became a section, in the order people asked them.",
    keyDecisions: [
      { title: "Research before layout", detail: "50+ interviews, then affinity mapping into roadmap priorities, before any high-fidelity screen." },
      { title: "Accessible by default", detail: "WCAG 2.1 AA colour, type and navigation from the first wireframe." },
      { title: "Audience-based programme hub", detail: "Visitors choose who they are and see only what applies to them." },
    ],
    process: [
      { title: "Interviews", detail: "50+ one-to-one conversations with teachers and parents." },
      { title: "Synthesis", detail: "Affinity mapping turned findings into roadmap priorities." },
      { title: "Design and delivery", detail: "Led 2 to 3 designers through to the live site." },
    ],
    outcomes: [
      "User engagement up 52% after the redesign",
      "WCAG 2.1 AA accessibility across every page",
      "A programme structure shaped by the people who use it",
    ],
    reflection:
      "Leading other designers as an intern taught me that a research artefact everyone can see ends most debates before they start.",
    tools: ["Figma", "Webflow"],
  },
  {
    id: "hantarp",
    name: "Hantarp IT Services",
    tagline: "Trust-first website for a managed IT provider",
    role: "Designer and front-end build (LeapTra client)",
    year: "2025",
    client: "Hantarp",
    industry: "Managed IT and cloud services",
    duration: "Project",
    platform: "Website",
    liveUrl: "https://www.hantarp.com",
    liveLabel: "hantarp.com",
    description:
      "A LeapTra client project: I designed the website for a managed IT, cybersecurity and cloud provider, then shipped it myself by converting the designs to Next.js with an AI-native workflow.",
    tags: ["B2B", "Web design", "Trust signals"],
    status: "Live",
    icon: (
      <Icon className="border border-[#00B472]/40 bg-[#00B472]/15 text-[10px] font-semibold text-[#00C980]">HT</Icon>
    ),
    accentClass: "from-[#00C980] to-[#111827]",
    tldr: [
      "Designed and shipped the site for a managed IT provider, a LeapTra client.",
      "Response-time promises and compliance proof above the fold.",
      "Design to production in Next.js by one person, with no handoff gap.",
    ],
    overview:
      "Hantarp monitors, secures and manages IT for businesses around the clock. Buyers choosing an IT partner are buying reliability they can't see until something breaks.",
    problem:
      "IT providers all sound alike. A buyer needs to judge, quickly, whether this team will answer fast, keep data safe and meet compliance rules.",
    solution:
      "Design and build: information architecture, trust signals, service structure, the consultation flow, and the Next.js front end.",
    designThinking:
      "I put the buyer's three fears in order: will you respond, will my data be safe, will we pass an audit? The page answers them in that order, with specifics rather than adjectives.",
    keyDecisions: [
      { title: "Response times as the headline proof", detail: "Under one hour during business hours, priority for critical incidents and 24/7 emergency support, stated plainly." },
      { title: "Partners and compliance up front", detail: "Microsoft, Fortinet, SentinelOne, Datto and Huntress, plus HIPAA, SOC 2 and NIST, where a buyer looks first." },
      { title: "A three-step process", detail: "Understand, plan, support: a clear path from first call to managed service." },
    ],
    process: [
      { title: "Buyer questions", detail: "Listed what an IT decision-maker checks before a first call." },
      { title: "Structure", detail: "Proof, services, process, then one consultation call to action." },
      { title: "Design to Next.js", detail: "Converted the designs into a Next.js build with an AI-native workflow and shipped it, so nothing was lost between design and code." },
    ],
    outcomes: [
      "A live site that states response times, partners and compliance in one scroll",
      "One clear route to a consultation",
    ],
    colorPalette: [
      { name: "Hantarp Green", hex: "#00B472", usage: "Primary actions, brand" },
      { name: "Signal Green", hex: "#00C980", usage: "Highlights, status" },
      { name: "Ink", hex: "#111827", usage: "Headlines, dark sections" },
    ],
    typography: [
      { family: "Syne", usage: "Display headlines", weights: "600, 700" },
      { family: "DM Sans", usage: "Body and UI", weights: "400, 500" },
    ],
    tools: ["Figma", "Next.js", "Claude Code"],
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
