// Testimonials shown on /contact.
// RULE: an entry is shown only when `approved: true`, meaning that person has read the exact
// wording (or rewritten it) and said yes to it being published under their name.
// The drafts below were written for Adedamola to send to each person for approval; they are
// not quotes until approved. Paste the approved wording into `quote` and flip `approved`.
export type Testimonial = {
  name: string;
  role: string;
  company: string;
  relationship: string;
  quote: string;
  linkedin?: string;
  accent: string; // avatar background, from the person's company brand
  approved: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ifeanyi Larry",
    role: "CEO",
    company: "LeapTra",
    relationship: "Managed Adedamola at LeapTra",
    quote:
      "Damola led our rebrand when we repositioned LeapTra from AI-agent products to growth infrastructure. He didn't just redraw the logo: he helped us restructure how we explain the business, then designed the agents and dashboards our team uses every day. He works like an owner and he ships.",
    accent: "#0E1E35",
    approved: false,
  },
  {
    name: "Fadare Oluwatobi",
    role: "Senior Creative Designer",
    company: "LeapTra",
    relationship: "Worked alongside Adedamola at LeapTra",
    quote:
      "Working next to Damola on LeapTra and Jomppa, I saw him build systems, not just screens. The Jomppa design system he set up made every new screen faster for all of us, and he takes feedback without ego.",
    accent: "#1D4ED8",
    approved: false,
  },
  {
    name: "Kareem Dorcas",
    role: "Client",
    company: "Next Level Procurement",
    relationship: "Client since 2021",
    quote:
      "Damola has been our designer since we were Shopall Superstore & Logistics. He led our rebrand to Next Level Procurement and designed and built our website himself. He understands the business, not just the visuals, and he's someone we can rely on.",
    accent: "#2CBAAC",
    approved: false,
  },
  {
    name: "Israel Akinbami",
    role: "Founder",
    company: "Harkardah",
    relationship: "Co-founder partner at Harkardah",
    quote:
      "Damola leads product and brand design at Harkardah. He brings structure to early ideas: a conversation becomes a clear flow, then a working screen, then a brand schools can trust.",
    accent: "#0000FE",
    approved: false,
  },
  {
    name: "Edith Idahosa",
    role: "Graduate",
    company: "Torilo Academy",
    relationship: "Studied with Adedamola at Torilo Academy",
    quote:
      "At Torilo Academy, Damola was the one who turned our group's ideas into clear, finished designs, and he always shared what he learned with the rest of us.",
    accent: "#3F3F46",
    approved: false,
  },
];

export const approvedTestimonials = testimonials.filter((t) => t.approved);
