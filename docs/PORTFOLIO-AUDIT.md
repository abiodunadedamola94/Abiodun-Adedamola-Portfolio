# Portfolio audit and conversion plan

Audited 29 Sep 2026: live site mocreativeportfolio.lovable.app and this repo. The lens is a founder or hiring manager deciding in about 60 seconds whether to talk to you.

## What a visitor needs to answer in 60 seconds
1. What do you do, and at what level? (hero)
2. Can I trust it? (proof: named clients, real numbers, live links)
3. Is it relevant to me? (case studies in my domain)
4. What do I do next? (one clear action: email, book, download the résumé)

## Findings, by priority

### P0: fix before sending the link to anyone (done on branch `portfolio-v2`)
| # | Finding | Why it costs you | Fix |
|---|---|---|---|
| 1 | **Case-study numbers contradicted the résumé.** DealMate showed +41% / −28% / NPS 22→51 (résumé: +18% / −30%); Young Titans showed 3.4× donations and 5 press outlets (résumé: +52% engagement); Saglev showed doubled demo drives and EV roundups. | A reviewer who compares the two will conclude the numbers are made up, and that sinks every other claim. | Aligned to the résumé. Saglev now has honest, work-based outcomes. Every number should trace to a source you can defend. |
| 2 | **The hero said nothing concrete** ("How's Your Day?", "stealth-mode UX ninja", "playful chaos"), set at 12px. | It fails the 5-second test: no role, level, proof or next step. | New hero: "I design products and ship them.", four proof points, and See case studies / Résumé / Contact. |
| 3 | **The About page led with building a school management system** for a family school and "future school owner". | To a startup it signals you're leaving. It also overlaps Harkardah's product. | Reframed around MoCreative Concept and the agents, with Topkids as client work. |
| 4 | **The live site is older than the repo.** Its LeapTra page shows "+38% activation" and "2.1× bundles", which aren't in the code. | The public page is still showing the unverified numbers. | Merge `portfolio-v2` into `main`, then press **Publish** in Lovable. |
| 5 | **The link preview read "Portfolio Navigator is a responsive web application…"**, authored by "Lovable". | Every LinkedIn or Slack share looked like a template. | Real title, description and author. |
| 6 | No résumé on the site. | Recruiters want the PDF in one click. | `/Abiodun_Adedamola_Resume.pdf`, with the phone number removed for the public copy. |

### P1: this week
- **Lead with your four strongest case studies, in this order:** Next Level Procurement (first designer since 2021), Jomppa (design system), DealMate (conversion), LeapTra (AI agents). Add two new ones: **MoCreative Agentic OS** and **Job search agent**. Nobody else has those, and they're exactly what AI-native startups want to see.
- **Use one case-study template everywhere:** context → my role and team → the problem in one sentence → constraints → 2–3 key decisions with the options I rejected → outcome with the source of each number → what I'd do next.
- **Tag every number** as measured (with its source) or estimated. Use the same verified/claimed discipline as the job search agent.
- **Testimonials:** first names alone (Ifeanyi, Henry, Edith, Tunde, Amaka) read as invented. Add each person's role, company and LinkedIn, or remove the testimonial.
- **Navigation:** Shop, Songs and Playground dilute a hiring visit. Move them under a single "More" item, or keep them off the main nav while you're job hunting.
- **Hide the "Edit with Lovable" badge** (Lovable project settings; it may need a paid plan).
- **Name:** use "Adedamola" or "Abiodun Adedamola" everywhere. Some pages say "Adedamola Ade".
- **The contact page** needs your email as selectable text and a clear line about what happens next ("I reply within 24 hours").

### P2: next
- A **"Work with me" page** for MoCreative services, so the portfolio sells as well as gets you hired, with its own clear CTA.
- **Case-study images:** real screenshots with short annotations, not just colour palettes and typefaces.
- **Performance:** check Lighthouse on mobile; keep hero images under 200KB.

## Analytics: knowing who comes, what they do, and why they don't convert

### What you already have (it's good)
`src/hooks/useVisitorTracking.ts` logs every page view to Supabase (`visits`: path including `?ref=`, referrer, device, language). The `notify-visit` function emails you once per visitor session.

### Tracked links (live now)
Give every application, DM and post its own link: `mocreativeportfolio.lovable.app/?ref=matcha`, `?ref=linkedin-post`, `?ref=outreach-batch3`. When that link is opened, the "New visit" email's subject shows the ref. You'll know the moment Matcha's founder clicks.

### What to add next (P1)
1. **Events, not just page views.** Log these into Supabase next to `visits`: case study opened, scrolled to Outcomes, résumé downloaded, contact form started, contact form sent, email copied. That tells you *where* people drop.
2. **A weekly digest instead of per-visit emails:** visits by source, top case studies, and the funnel (landed → opened a case study → résumé → contact). Agent 01's 7am brief can include it.
3. **An optional heatmap and session replay:** PostHog's free tier gives funnels, heatmaps and recordings. It needs a PostHog account you create. You'd add the public project key as an env var and I'd wire it in.

### Turning visitors into leads, done properly
- **You can't legally get the email of someone who didn't give it to you.** Tools that claim to identify individual visitors are illegal or high-risk under Nigeria's NDPA and the EU's GDPR, and a founder who notices will see it as a trust breach. Don't use them.
- **What does work is company-level signal plus an opt-in:**
  - The referrer and `?ref=` tell you which campaign or application brought each visit.
  - **Give people a reason to leave their email:** "Get the full case study PDF", "Book 20 minutes", or "Get my build notes when a new agent ships".
  - **Send contact-form leads into the MoCreative pipeline:** the form writes to the leads table, Agent 08 screens it, and you get a same-day email.
- **Treat your metrics as a funnel:** visitors → case study opened (want over 40%) → résumé or contact (want over 5%). If the first rate is low, fix the hero. If the second is low, fix the case study's ending CTA.

## Your part
1. Review the branch: github.com/abiodunadedamola94/Abiodun-Adedamola-Portfolio/tree/portfolio-v2
2. Merge `portfolio-v2` into `main`. Lovable syncs `main`.
3. In Lovable, press **Publish** so the live site updates.
4. Confirm or correct the numbers still unverified: the LeapTra figures, DealMate's "workshopped with legal and ops teams", and whether Saglev and Belle Muse were real clients or concept work.
