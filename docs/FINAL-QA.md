# AXIOM — Final QA Record

## Stack

| Item | Detail |
|---|---|
| Framework | TanStack Start (SSR) + Vite 8 |
| Package manager | npm (bun.lock present but Bun not installed locally) |
| Build system | Vite + Nitro (Cloudflare/Vercel preset auto-detected) |
| Language | TypeScript + React 19 |
| Styling | Tailwind CSS v4 + tw-animate-css |
| UI components | shadcn/ui (Radix primitives, partially used) |
| Fonts | Archivo (display), Manrope (body), JetBrains Mono (mono) — Google Fonts |
| Deploy | Vercel (connected to GitHub babubhai20011404-jpg/Axiom) |
| Live domain | axiom.contentify.digital |

## Routes

| Route | File |
|---|---|
| `/` | `src/routes/index.tsx` |
| Root shell | `src/routes/__root.tsx` |

## Key source files

| File | Purpose |
|---|---|
| `src/components/site/primitives.tsx` | Shared components + central config (CALENDLY_URL, EMAIL, LINKEDIN_URL) |
| `src/components/site/sections.tsx` | All page sections |
| `src/components/site/Nav.tsx` | Header + mobile menu |
| `src/components/site/mocks-nova.tsx` | NOVA concept UI |
| `src/components/site/mocks-arc.tsx` | ARC concept UI |
| `src/components/site/mocks-vanta.tsx` | VANTA concept UI |
| `src/styles.css` | Global CSS + design tokens |

## Central configuration

All CTAs, emails and links are centralized in `src/components/site/primitives.tsx`:

```ts
export const CALENDLY_URL = "https://calendly.com/siddhantbhendkar14/30min";
export const EMAIL = "siddhantbhendkar14@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/siddhant-bhendkar-29430a3a0/";
```

## Current state (post QA pass 1)

- Founder portrait: **removed** ✓
- FAQ: **React state accordion** — all 6 items open/close with keyboard + ARIA ✓
- CTA centralized: **CALENDLY_URL** used in header, hero, offer, about, final CTA, mobile menu ✓
- Email: **siddhantbhendkar14@gmail.com** in all mailto links ✓
- LinkedIn: **real profile URL** present ✓
- Mobile menu: hamburger with Escape key, closes on link tap ✓
- SEO title: `AXIOM — 72-Hour Product Rescue` ✓
- Meta description: correct ✓
- Open Graph: title, description, type set ✓
- Favicon: `/public/favicon.svg` ✓
- `overflow-x-hidden` on root ✓
- `prefers-reduced-motion` respected ✓
- Focus rings on all interactive elements ✓
- Disclosure labels: NOVA, ARC, VANTA all labelled "Independent concept — fictional product, no client data" ✓

## Credibility scan result

No fake testimonials, client quotes, fabricated metrics, or unattributed third-party work found.

All revenue/conversion numbers appear inside the fictional mock UIs (ARC, NOVA) and are clearly part of the independent concept UI — not claimed as AXIOM results.

Claims checked:
- "Senior product thinking" in WhyAxiom comparison list — describes the service offering, not a fabricated credential. Acceptable.
- "2 engagements available" in top bar — remove or change to a factual statement if not actually true.
- No Fortune 500, award, or client logo claims found.
- No fake years-of-experience claims found.

## Issues to fix in this pass

| # | Issue | Action |
|---|---|---|
| 1 | "2 engagements available" in nav bar — may be misleading if not true | Replace with factual positioning line |
| 2 | Concept section introductions lack explicit problem/hypothesis/decision structure | Strengthen with UX rationale per Phase 5 spec |
| 3 | "Case Study 01/02/03" labels may imply client work | Rename to "Concept 01/02/03" |
| 4 | `CaseIntro` index is hardcoded "03" for all three concepts | Fix index numbering |
| 5 | `accordion-down/up` keyframes reference `--radix-accordion-content-height` but FAQ now uses native `hidden` (Radix no longer used for FAQ) — orphaned CSS | Clean up unused keyframes |
| 6 | Missing `og:url` and `og:image` meta tags | Add with site URL |
| 7 | `package-lock.json` is committed (large file, normally fine but confirm intentional) | Leave — needed for reproducible CI |

## DO NOT change

- Visual identity (colors, typography, spacing, borders)
- $9,000 price
- 72-hour offer
- NOVA / ARC / VANTA designs
- Independent concept disclosures
- Founder name and role
- Calendly, email, LinkedIn URLs
