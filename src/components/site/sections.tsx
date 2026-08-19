import { useState } from "react";
import {
  CALENDLY_URL,
  Caption,
  EMAIL,
  GhostButton,
  Heading,
  LINKEDIN_URL,
  LimeButton,
  NumberedCard,
  Section,
  SectionLabel,
} from "./primitives";
import { NovaActivity, NovaConfirm, NovaConvert, NovaDashboard, NovaMobile } from "./mocks-nova";
import { ArcDashboard, ArcDrilldown, ArcMobile } from "./mocks-arc";
import { VantaConfig, VantaLog, VantaRun, VantaWorkflow } from "./mocks-vanta";

export function Hero() {
  return (
    <section id="top" className="grid-bg px-5 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-3 micro text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          Product design / UX / UI
        </div>
        <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[5.4rem]">
          Your product is closer to great than you think.{" "}
          <span className="text-muted-foreground">We fix the critical experience in 72 hours.</span>
        </h1>
        <div className="mt-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            A focused product-design intervention for startups that need a sharper, more credible and launch-ready
            product — without a three-month redesign process.
          </p>
          <div className="flex flex-wrap gap-3">
            <LimeButton href={CALENDLY_URL}>Book a Product Teardown →</LimeButton>
            <GhostButton href="#work">Explore the Work ↓</GhostButton>
          </div>
        </div>
        <div className="mt-16">
          <NovaDashboard />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 micro text-muted-foreground">
            <span>Fig.01 — NOVA · Fictional crypto exchange</span>
            <span className="text-lime">Independent concept</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <Section>
      <SectionLabel index="01">The Problem</SectionLabel>
      <Heading>
        Most products don't need more features.
        <br />
        <span className="text-muted-foreground">They need their important experience fixed.</span>
      </Heading>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <NumberedCard index="01" title="Confusing" body="Users don't know what to do next." />
        <NumberedCard
          index="02"
          title="Unconvincing"
          body="The product doesn't feel as credible as the company behind it."
        />
        <NumberedCard
          index="03"
          title="Unfinished"
          body="Critical flows contain friction, inconsistent states and weak visual hierarchy."
        />
      </div>
      <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
        We identify the highest-impact problems and rebuild the experience around them.
      </p>
    </Section>
  );
}

const phases = [
  {
    window: "00–24H",
    pct: 33,
    title: "Diagnose",
    items: ["UX audit", "Flow reconstruction", "Priority mapping", "Design direction"],
  },
  {
    window: "24–48H",
    pct: 66,
    title: "Rebuild",
    items: ["High-fidelity UI", "Interaction design", "Responsive states", "Visual system"],
  },
  {
    window: "48–72H",
    pct: 100,
    title: "Ship",
    items: ["Interactive prototype", "Developer handoff", "Final polish", "QA"],
  },
];

export function Process() {
  return (
    <Section id="process">
      <SectionLabel index="02">The 72-Hour System</SectionLabel>
      <Heading>One critical experience. Three days.</Heading>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {phases.map((p) => (
          <div key={p.title} className="rounded-xl border border-hairline bg-card p-6">
            <div className="flex items-center justify-between micro text-muted-foreground">
              <span>{p.window}</span>
              <span className="text-lime">{p.pct}%</span>
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-secondary">
              <div className="h-1 rounded-full bg-lime" style={{ width: `${p.pct}%` }} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight">{p.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {p.items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-lime" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 font-display text-xl tracking-tight">
        72 hours. One critical product experience.{" "}
        <span className="text-muted-foreground">No six-month redesign.</span>
      </p>
    </Section>
  );
}

function CaseIntro({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <>
      <SectionLabel index="03">{label}</SectionLabel>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <Heading>{title}</Heading>
        <div>
          <div className="micro text-lime">Independent concept</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
        </div>
      </div>
    </>
  );
}

export function CaseNova() {
  return (
    <Section id="work">
      <CaseIntro
        label="Case Study 01 — Fintech / Crypto"
        title="NOVA — A clearer way to move money."
        body="A concept redesign exploring how a crypto exchange can make conversion, confirmation and transaction tracking feel clearer and more trustworthy."
      />
      <div className="mt-12 space-y-10">
        <div>
          <Caption>[ NOVA — desktop exchange dashboard ]</Caption>
          <NovaDashboard />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Caption>01 Convert · [ USDT → INR conversion screen ]</Caption>
            <NovaConvert />
          </div>
          <div>
            <Caption>02 Confirm · [ transaction confirmation screen ]</Caption>
            <NovaConfirm />
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Caption>03 Track · [ transaction history — clear states ]</Caption>
            <NovaActivity />
          </div>
          <div>
            <Caption>04 Mobile · [ NOVA — mobile exchange ]</Caption>
            <NovaMobile />
          </div>
        </div>
      </div>
      <div className="mt-10 rounded-xl border border-hairline bg-card p-6">
        <div className="micro text-muted-foreground">The design approach</div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Reduce cognitive load. Make money movement explicit. Make transaction state impossible to misunderstand.
        </p>
      </div>
      <p className="mt-8 micro text-muted-foreground">Independent concept — fictional product, no client data.</p>
    </Section>
  );
}

export function CaseArc() {
  return (
    <Section>
      <CaseIntro
        label="Case Study 02 — B2B SaaS"
        title="ARC — Decision-making without the dashboard overload."
        body="A concept exploration of information hierarchy in a B2B analytics platform: what an executive needs at a glance, and what stays one drill-down away."
      />
      <div className="mt-12 space-y-10">
        <div>
          <Caption>[ ARC — executive dashboard ]</Caption>
          <ArcDashboard />
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Caption>[ ARC — drill-down analytics · team performance ]</Caption>
            <ArcDrilldown />
          </div>
          <div>
            <Caption>[ ARC — mobile analytics ]</Caption>
            <ArcMobile />
          </div>
        </div>
      </div>
      <p className="mt-8 micro text-muted-foreground">Concept exploration — fictional product, no client data.</p>
    </Section>
  );
}

export function CaseVanta() {
  return (
    <Section>
      <CaseIntro
        label="Case Study 03 — AI / Automation"
        title="VANTA — Automation you can actually trust."
        body="A concept project on AI workflow automation: complex flows, explicit states, and human approval exactly where it matters. Control and transparency over magic."
      />
      <div className="mt-12 space-y-10">
        <div>
          <Caption>[ VANTA — AI workflow builder ]</Caption>
          <VantaWorkflow />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Caption>[ VANTA — agent configuration ]</Caption>
            <VantaConfig />
          </div>
          <div>
            <Caption>[ VANTA — task execution · approval state ]</Caption>
            <VantaRun />
          </div>
        </div>
        <div>
          <Caption>[ VANTA — activity log ]</Caption>
          <VantaLog />
        </div>
      </div>
      <p className="mt-8 micro text-muted-foreground">Independent concept — fictional product, no client data.</p>
    </Section>
  );
}

const deliverables = [
  ["01", "UX direction", "A clear understanding of what needs fixing and why."],
  ["02", "Production-quality UI", "High-fidelity screens built around your actual product."],
  ["03", "Interactive prototype", "A realistic experience you can test, present and sell."],
  ["04", "Developer handoff", "Specs, states and assets organized for implementation."],
  ["05", "A stronger product", "Not a moodboard. Not a concept. A usable product experience."],
] as const;

export function Deliverables() {
  return (
    <Section>
      <SectionLabel index="04">What Clients Receive</SectionLabel>
      <Heading>At the end of 72 hours, you have:</Heading>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {deliverables.map(([i, t, b]) => (
          <NumberedCard key={i} index={i} title={t} body={b} />
        ))}
      </div>
    </Section>
  );
}

const audience = [
  ["01", "Funded startups", "You have users and investors. Your product needs to look the part."],
  ["02", "Fintech / crypto", "Trust, clarity and transaction flows matter."],
  ["03", "SaaS companies", "Your product works. The experience doesn't communicate its value."],
  ["04", "Founders preparing to launch", "You don't have three months to redesign everything."],
] as const;

export function WhoFor() {
  return (
    <Section>
      <SectionLabel index="05">Who AXIOM Is For</SectionLabel>
      <Heading>Built for teams that already have something to lose.</Heading>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {audience.map(([i, t, b]) => (
          <NumberedCard key={i} index={i} title={t} body={b} />
        ))}
      </div>
      <div className="mt-10 max-w-2xl space-y-2 text-sm text-muted-foreground">
        <p>If your product is still an idea, we're probably too early.</p>
        <p className="text-foreground">
          If you already have a product and know something isn't working, we're exactly where you need us.
        </p>
      </div>
    </Section>
  );
}

export function WhyAxiom() {
  return (
    <Section>
      <SectionLabel index="06">Why AXIOM</SectionLabel>
      <Heading>Focused beats bloated.</Heading>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Agencies are built for breadth. AXIOM is a specialized alternative — built for one critical problem, solved
        properly, fast.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-hairline p-6">
          <div className="micro text-muted-foreground">Traditional agency</div>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {["Discovery phases", "Weeks of meetings", "Large teams", "Multiple layers", "Long redesign cycles"].map(
              (i) => (
                <li key={i} className="border-b border-hairline pb-3 last:border-0">
                  {i}
                </li>
              ),
            )}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            The right choice for large, open-ended programmes.
          </p>
        </div>
        <div className="rounded-xl border border-lime/40 bg-lime/[0.04] p-6">
          <div className="micro text-lime">AXIOM</div>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "One critical flow",
              "Direct collaboration",
              "Senior product thinking",
              "72-hour intervention",
              "Production-ready handoff",
            ].map((i) => (
              <li key={i} className="border-b border-hairline pb-3 last:border-0">
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            The right choice when one experience needs to be excellent by Friday.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Offer() {
  return (
    <Section id="offer">
      <SectionLabel index="07">The Offer</SectionLabel>
      <Heading>
        One intervention. 72 hours. <span className="text-lime">$9,000.</span>
      </Heading>
      <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-hairline bg-card p-6">
          <div className="flex items-center justify-between micro text-muted-foreground">
            <span>Engagement — Rescue / 72H</span>
            <span className="text-lime">Fixed scope</span>
          </div>
          <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            {[
              "One critical product journey",
              "UX audit",
              "High-fidelity redesign",
              "Interactive prototype",
              "Responsive states",
              "Developer handoff",
              "72-hour turnaround",
            ].map((i) => (
              <li key={i} className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-lime" />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-6 micro text-muted-foreground">Payment — 60% to start · 40% on final delivery</p>
        </div>
        <div className="rounded-xl border border-hairline p-6">
          <div className="micro text-muted-foreground">Who this is for</div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            For teams with an existing product and a critical experience that needs to move faster.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Fixed price. Fixed scope. No hourly billing, no discovery retainer, no surprise invoices.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <LimeButton href={CALENDLY_URL}>Book a Product Teardown →</LimeButton>
        <GhostButton href={`mailto:${EMAIL}`}>Email Siddhant →</GhostButton>
      </div>
      <p className="mt-4 micro text-muted-foreground">Or write directly — {EMAIL}</p>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionLabel index="08">About</SectionLabel>
      <div className="max-w-3xl">
        <p className="micro text-lime">Siddhant Bhendkar — Founder / Product Designer</p>
        <Heading className="mt-8">I build focused product experiences for teams that need to move fast.</Heading>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            AXIOM is a one-person product design practice. No account managers, no handoffs, no layers — you work
            directly with me from the first audit to the final handoff.
          </p>
          <p>
            I care about clear flows, honest interfaces and products that feel as credible as the companies behind
            them. The 72-hour format exists because most products don't need a redesign programme — they need one
            critical experience fixed properly, directly, without the wait.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <LimeButton href={CALENDLY_URL}>Book a Product Teardown →</LimeButton>
          <GhostButton href={LINKEDIN_URL} external>
            LinkedIn →
          </GhostButton>
          <GhostButton href={`mailto:${EMAIL}`}>Email Siddhant →</GhostButton>
        </div>
      </div>
    </Section>
  );
}

const faqs = [
  [
    "Can you redesign an entire product in 72 hours?",
    "No. AXIOM focuses on the highest-impact journey rather than pretending an entire product can be responsibly redesigned in three days.",
  ],
  [
    "Do you work with existing products?",
    "Yes — that's the ideal case. An existing product gives us real flows, real constraints and a clear critical experience to rebuild.",
  ],
  [
    "Do you work with startups?",
    "Most engagements are with funded startups preparing to launch, raise or ship a key release.",
  ],
  [
    "Do you develop the product?",
    "No. You receive production-quality design, specs, states and a developer handoff your engineers can implement directly.",
  ],
  [
    "What happens after 72 hours?",
    "You keep everything: the audit, the screens, the prototype and the handoff. Follow-on interventions can be scheduled if another flow needs the same treatment.",
  ],
  [
    "Why $9,000?",
    "Fixed price for a senior, focused, three-day intervention with a defined scope and a defined outcome — no hourly billing and no discovery retainer.",
  ],
] as const;

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const panelId = question.replace(/\W+/g, "-").toLowerCase();

  return (
    <div className="border-b border-hairline last:border-b-0">
      <h3>
        <button
          type="button"
          id={`${panelId}-trigger`}
          aria-expanded={open}
          aria-controls={`${panelId}-panel`}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-base font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span>{question}</span>
          <span
            aria-hidden="true"
            className={`shrink-0 text-lime transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={`${panelId}-panel`}
        role="region"
        aria-labelledby={`${panelId}-trigger`}
        hidden={!open}
        className={open ? "pb-5" : undefined}
      >
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <Section>
      <SectionLabel index="09">FAQ</SectionLabel>
      <Heading>Straight answers.</Heading>
      <div className="mt-12 border-y border-hairline">
        {faqs.map(([question, answer]) => (
          <FaqItem key={question} question={question} answer={answer} />
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section className="grid-bg">
      <Heading className="max-w-4xl text-4xl md:text-6xl">
        Your product doesn't need another meeting. <span className="text-muted-foreground">It needs fixing.</span>
      </Heading>
      <p className="mt-6 text-sm text-muted-foreground">
        Tell us what's broken. We'll show you what we'd change.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LimeButton href={CALENDLY_URL}>Book a Product Teardown →</LimeButton>
        <GhostButton href={`mailto:${EMAIL}`}>Email Siddhant →</GhostButton>
      </div>
    </Section>
  );
}

const footerLinks = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#offer", label: "Offer" },
  { href: "#about", label: "About" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-hairline px-5 py-14 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight text-foreground">
              AXIOM<span className="text-lime">®</span>
            </p>
            <p className="mt-3 micro text-muted-foreground">Product design / UX / UI</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Critical product experiences, fixed in 72 hours.
            </p>
            <p className="mt-6 text-sm text-foreground">Siddhant Bhendkar</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              {footerLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground focus-visible:underline"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground focus-visible:underline"
              >
                Email
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground focus-visible:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
