import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
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
        <div
          className="hero-fade flex items-center gap-3 micro text-muted-foreground"
          style={{ animationDelay: "0ms" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          Product design / UX / UI
        </div>
        <h1
          className="hero-fade mt-8 max-w-4xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[5.4rem]"
          style={{ animationDelay: "100ms" }}
        >
          Your product is closer to great than you think.{" "}
          <span className="text-muted-foreground">We fix the critical experience in 72 hours.</span>
        </h1>
        <div
          className="hero-fade mt-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          style={{ animationDelay: "220ms" }}
        >
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            A focused product-design intervention for startups that need a sharper, more credible and launch-ready
            product — without a three-month redesign process.
          </p>
          <div className="flex flex-wrap gap-3">
            <LimeButton href={CALENDLY_URL}>Book a Product Teardown →</LimeButton>
            <GhostButton href="#work">Explore the Work ↓</GhostButton>
          </div>
        </div>
        <div
          className="hero-fade mt-16"
          style={{ animationDelay: "380ms" }}
        >
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
  const { ref, visible } = useReveal();
  const v = visible ? "true" : "false";
  return (
    <Section>
      <div ref={ref}>
        <div className="reveal" data-visible={v}>
          <SectionLabel index="01">The Problem</SectionLabel>
          <Heading>
            Most products don't need more features.
            <br />
            <span className="text-muted-foreground">They need their important experience fixed.</span>
          </Heading>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="reveal-card hover-lift" data-visible={v} style={{ transitionDelay: "80ms" }}>
            <NumberedCard index="01" title="Confusing" body="Users don't know what to do next." />
          </div>
          <div className="reveal-card hover-lift" data-visible={v} style={{ transitionDelay: "180ms" }}>
            <NumberedCard
              index="02"
              title="Unconvincing"
              body="The product doesn't feel as credible as the company behind it."
            />
          </div>
          <div className="reveal-card hover-lift" data-visible={v} style={{ transitionDelay: "280ms" }}>
            <NumberedCard
              index="03"
              title="Unfinished"
              body="Critical flows contain friction, inconsistent states and weak visual hierarchy."
            />
          </div>
        </div>
        <p className="reveal mt-10 max-w-2xl text-sm text-muted-foreground" data-visible={v} style={{ transitionDelay: "360ms" }}>
          We identify the highest-impact problems and rebuild the experience around them.
        </p>
      </div>
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
  const { ref, visible } = useReveal();
  const v = visible ? "true" : "false";
  return (
    <Section id="process">
      <div ref={ref}>
        <div className="reveal" data-visible={v}>
          <SectionLabel index="02">The 72-Hour System</SectionLabel>
          <Heading>One critical experience. Three days.</Heading>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {phases.map((p, idx) => (
            <div
              key={p.title}
              className="reveal-card rounded-xl border border-hairline bg-card p-6"
              data-visible={v}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="flex items-center justify-between micro text-muted-foreground">
                <span>{p.window}</span>
                <span className="text-lime">{p.pct}%</span>
              </div>
              <div className="mt-3 h-1 w-full rounded-full bg-secondary">
                <div
                  className="h-1 rounded-full bg-lime transition-all duration-700"
                  style={{ width: visible ? `${p.pct}%` : "0%", transitionDelay: `${idx * 120 + 300}ms` }}
                />
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
        <p className="reveal mt-10 font-display text-xl tracking-tight" data-visible={v} style={{ transitionDelay: "420ms" }}>
          72 hours. One critical product experience.{" "}
          <span className="text-muted-foreground">No six-month redesign.</span>
        </p>
      </div>
    </Section>
  );
}

function CaseIntro({
  index,
  label,
  title,
  body,
  problem,
  hypothesis,
  decision,
  visible = true,
}: {
  index: string;
  label: string;
  title: string;
  body: string;
  problem: string;
  hypothesis: string;
  decision: string;
  visible?: boolean;
}) {
  const v = visible ? "true" : "false";
  return (
    <>
      <div className="reveal" data-visible={v}>
        <SectionLabel index={index}>{label}</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Heading>{title}</Heading>
          <div>
            <div className="micro text-lime">Independent concept — speculative redesign</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        <div className="reveal-card rounded-xl border border-hairline bg-card p-5" data-visible={v} style={{ transitionDelay: "100ms" }}>
          <div className="micro text-lime">Problem</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{problem}</p>
        </div>
        <div className="reveal-card rounded-xl border border-hairline bg-card p-5" data-visible={v} style={{ transitionDelay: "200ms" }}>
          <div className="micro text-muted-foreground">Design hypothesis</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{hypothesis}</p>
        </div>
        <div className="reveal-card rounded-xl border border-hairline bg-card p-5" data-visible={v} style={{ transitionDelay: "300ms" }}>
          <div className="micro text-muted-foreground">Key decision</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{decision}</p>
        </div>
      </div>
    </>
  );
}

export function CaseNova() {
  const { ref, visible } = useReveal(0.06);
  const v = visible ? "true" : "false";
  return (
    <Section id="work">
      <div ref={ref}>
        <CaseIntro
          index="03"
          label="Concept 01 — Fintech / Crypto"
          title="NOVA — A clearer way to move money."
          body="A speculative redesign exploring how a crypto exchange can make conversion, confirmation and transaction tracking feel clearer and more trustworthy."
          problem="Users lack confidence when moving money. Transaction states are ambiguous, conversion flows create friction, and the interface doesn't communicate trust at the moments that matter most."
          hypothesis="If portfolio visibility, transaction state and conversion flow are simplified — reducing uncertainty at high-risk moments — users will move through the product with more confidence."
          decision="Reduce cognitive load at every confirmation step. Make every transaction state unambiguous. Surface portfolio balance and movement without requiring navigation."
          visible={visible}
        />
        <div className="mt-12 space-y-10">
          <div className="reveal-up" data-visible={v} style={{ transitionDelay: "100ms" }}>
            <Caption>[ NOVA — desktop exchange dashboard ]</Caption>
            <NovaDashboard />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="reveal" data-visible={v} style={{ transitionDelay: "180ms" }}>
              <Caption>01 Convert · [ USDT → INR conversion screen ]</Caption>
              <NovaConvert />
            </div>
            <div className="reveal" data-visible={v} style={{ transitionDelay: "260ms" }}>
              <Caption>02 Confirm · [ transaction confirmation screen ]</Caption>
              <NovaConfirm />
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div className="reveal" data-visible={v} style={{ transitionDelay: "340ms" }}>
              <Caption>03 Track · [ transaction history — clear states ]</Caption>
              <NovaActivity />
            </div>
            <div className="reveal" data-visible={v} style={{ transitionDelay: "420ms" }}>
              <Caption>04 Mobile · [ NOVA — mobile exchange ]</Caption>
              <NovaMobile />
            </div>
          </div>
        </div>
        <div className="reveal mt-10 rounded-xl border border-hairline bg-card p-6" data-visible={v} style={{ transitionDelay: "480ms" }}>
          <div className="micro text-muted-foreground">The design approach</div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Reduce cognitive load. Make money movement explicit. Make transaction state impossible to misunderstand.
          </p>
        </div>
        <p className="reveal-fade mt-8 micro text-muted-foreground" data-visible={v} style={{ transitionDelay: "540ms" }}>
          Independent concept — fictional product, no client data.
        </p>
      </div>
    </Section>
  );
}

export function CaseArc() {
  const { ref, visible } = useReveal(0.06);
  const v = visible ? "true" : "false";
  return (
    <Section>
      <div ref={ref}>
        <CaseIntro
          index="04"
          label="Concept 02 — B2B SaaS"
          title="ARC — Decision-making without the dashboard overload."
          body="A concept exploration of information hierarchy in a B2B analytics platform: what an executive needs at a glance, and what stays one drill-down away."
          problem="Executives face dashboards full of data but can't quickly identify what requires action. Revenue movement, churn risk and expansion signals are buried in undifferentiated metrics."
          hypothesis="If the interface is structured around decision priority rather than data completeness — surfacing revenue, retention, alerts and drill-down in a deliberate hierarchy — executives can act faster."
          decision="Separate signal from noise at the top level. Reserve drill-down for investigation, not overview. Surface alerts with enough context to act without clicking through."
          visible={visible}
        />
        <div className="mt-12 space-y-10">
          <div className="reveal-up" data-visible={v} style={{ transitionDelay: "120ms" }}>
            <Caption>[ ARC — executive dashboard ]</Caption>
            <ArcDashboard />
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div className="reveal" data-visible={v} style={{ transitionDelay: "220ms" }}>
              <Caption>[ ARC — drill-down analytics · team performance ]</Caption>
              <ArcDrilldown />
            </div>
            <div className="reveal" data-visible={v} style={{ transitionDelay: "320ms" }}>
              <Caption>[ ARC — mobile analytics ]</Caption>
              <ArcMobile />
            </div>
          </div>
        </div>
        <p className="reveal-fade mt-8 micro text-muted-foreground" data-visible={v} style={{ transitionDelay: "400ms" }}>
          Concept exploration — fictional product, no client data.
        </p>
      </div>
    </Section>
  );
}

export function CaseVanta() {
  const { ref, visible } = useReveal(0.06);
  const v = visible ? "true" : "false";
  return (
    <Section>
      <div ref={ref}>
        <CaseIntro
          index="05"
          label="Concept 03 — AI / Automation"
          title="VANTA — Automation you can actually trust."
          body="A concept project on AI workflow automation: complex flows, explicit states, and human approval exactly where it matters. Control and transparency over magic."
          problem="AI workflow tools obscure what is happening and why. Users can't tell what the agent is doing, when it will ask for approval, or what happened after execution — which erodes trust."
          hypothesis="If automation state, approval gates and execution results are made explicit and visible at every step, users will trust the system enough to let it run consequential actions."
          decision="Never hide the agent's reasoning. Place human approval gates visually at the exact moment they are required. Make every execution result auditable without requiring a log search."
          visible={visible}
        />
        <div className="mt-12 space-y-10">
          <div className="reveal-up" data-visible={v} style={{ transitionDelay: "100ms" }}>
            <Caption>[ VANTA — AI workflow builder ]</Caption>
            <VantaWorkflow />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="reveal" data-visible={v} style={{ transitionDelay: "200ms" }}>
              <Caption>[ VANTA — agent configuration ]</Caption>
              <VantaConfig />
            </div>
            <div className="reveal" data-visible={v} style={{ transitionDelay: "300ms" }}>
              <Caption>[ VANTA — task execution · approval state ]</Caption>
              <VantaRun />
            </div>
          </div>
          <div className="reveal" data-visible={v} style={{ transitionDelay: "380ms" }}>
            <Caption>[ VANTA — activity log ]</Caption>
            <VantaLog />
          </div>
        </div>
        <p className="reveal-fade mt-8 micro text-muted-foreground" data-visible={v} style={{ transitionDelay: "460ms" }}>
          Independent concept — fictional product, no client data.
        </p>
      </div>
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
  const { ref, visible } = useReveal();
  const v = visible ? "true" : "false";
  return (
    <Section>
      <div ref={ref}>
        <div className="reveal" data-visible={v}>
          <SectionLabel index="06">What Clients Receive</SectionLabel>
          <Heading>At the end of 72 hours, you have:</Heading>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map(([i, t, b], idx) => (
            <div
              key={i}
              className="reveal-card hover-lift"
              data-visible={v}
              style={{ transitionDelay: `${idx * 80 + 80}ms` }}
            >
              <NumberedCard index={i} title={t} body={b} />
            </div>
          ))}
        </div>
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
  const { ref, visible } = useReveal();
  const v = visible ? "true" : "false";
  return (
    <Section>
      <div ref={ref}>
        <div className="reveal" data-visible={v}>
          <SectionLabel index="07">Who AXIOM Is For</SectionLabel>
          <Heading>Built for teams that already have something to lose.</Heading>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {audience.map(([i, t, b], idx) => (
            <div
              key={i}
              className="reveal-card hover-lift"
              data-visible={v}
              style={{ transitionDelay: `${idx * 80 + 80}ms` }}
            >
              <NumberedCard index={i} title={t} body={b} />
            </div>
          ))}
        </div>
        <div className="reveal mt-10 max-w-2xl space-y-2 text-sm text-muted-foreground" data-visible={v} style={{ transitionDelay: "400ms" }}>
          <p>If your product is still an idea, we're probably too early.</p>
          <p className="text-foreground">
            If you already have a product and know something isn't working, we're exactly where you need us.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function WhyAxiom() {
  const { ref, visible } = useReveal();
  const v = visible ? "true" : "false";
  return (
    <Section>
      <div ref={ref}>
        <div className="reveal" data-visible={v}>
          <SectionLabel index="08">Why AXIOM</SectionLabel>
          <Heading>Focused beats bloated.</Heading>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Agencies are built for breadth. AXIOM is a specialized alternative — built for one critical problem, solved
            properly, fast.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div
            className="reveal-card rounded-xl border border-hairline p-6"
            data-visible={v}
            style={{ transitionDelay: "120ms" }}
          >
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
          <div
            className="reveal-card rounded-xl border border-lime/40 bg-lime/[0.04] p-6"
            data-visible={v}
            style={{ transitionDelay: "240ms" }}
          >
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
      </div>
    </Section>
  );
}

export function Offer() {
  const { ref, visible } = useReveal();
  const v = visible ? "true" : "false";
  return (
    <Section id="offer">
      <div ref={ref}>
        <div className="reveal" data-visible={v}>
          <SectionLabel index="09">The Offer</SectionLabel>
          <Heading>
            One intervention. 72 hours. <span className="text-lime">$9,000.</span>
          </Heading>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div
            className="reveal-card rounded-xl border border-hairline bg-card p-6"
            data-visible={v}
            style={{ transitionDelay: "120ms" }}
          >
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
          <div
            className="reveal-card rounded-xl border border-hairline p-6"
            data-visible={v}
            style={{ transitionDelay: "240ms" }}
          >
            <div className="micro text-muted-foreground">Who this is for</div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              For teams with an existing product and a critical experience that needs to move faster.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Fixed price. Fixed scope. No hourly billing, no discovery retainer, no surprise invoices.
            </p>
          </div>
        </div>
        <div className="reveal mt-10 flex flex-wrap items-center gap-3" data-visible={v} style={{ transitionDelay: "360ms" }}>
          <LimeButton href={CALENDLY_URL}>Book a Product Teardown →</LimeButton>
          <GhostButton href={`mailto:${EMAIL}`}>Email Siddhant →</GhostButton>
        </div>
        <p className="reveal-fade mt-4 micro text-muted-foreground" data-visible={v} style={{ transitionDelay: "440ms" }}>
          Or write directly — {EMAIL}
        </p>
      </div>
    </Section>
  );
}

export function About() {
  const { ref, visible } = useReveal();
  const v = visible ? "true" : "false";
  return (
    <Section id="about">
      <div ref={ref} className="max-w-3xl">
        <p className="reveal-fade micro text-lime" data-visible={v}>
          Siddhant Bhendkar — Founder / Product Designer
        </p>
        <div className="reveal-up mt-8" data-visible={v} style={{ transitionDelay: "80ms" }}>
          <Heading>I build focused product experiences for teams that need to move fast.</Heading>
        </div>
        <div className="reveal mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground" data-visible={v} style={{ transitionDelay: "200ms" }}>
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
        <div className="reveal mt-10 flex flex-wrap gap-3" data-visible={v} style={{ transitionDelay: "320ms" }}>
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

function FaqItem({ question, answer, delay = 0 }: { question: string; answer: string; delay?: number }) {
  const [open, setOpen] = useState(false);
  const panelId = question.replace(/\W+/g, "-").toLowerCase();
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className="reveal border-b border-hairline last:border-b-0"
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
    >
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
            className={`shrink-0 text-lime transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          >
            +
          </span>
        </button>
      </h3>
      {/* Animated height via CSS grid-template-rows trick — no max-height clipping */}
      <div
        id={`${panelId}-panel`}
        role="region"
        aria-labelledby={`${panelId}-trigger`}
        aria-hidden={!open}
        className={`faq-answer${open ? " faq-answer--open" : ""}`}
      >
        <p className="pb-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export function Faq() {
  const { ref, visible } = useReveal();
  return (
    <Section>
      <div ref={ref} className="reveal" data-visible={visible ? "true" : "false"}>
        <SectionLabel index="10">FAQ</SectionLabel>
        <Heading>Straight answers.</Heading>
      </div>
      <div className="mt-12 border-y border-hairline">
        {faqs.map(([question, answer], idx) => (
          <FaqItem key={question} question={question} answer={answer} delay={idx * 60} />
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  const { ref, visible } = useReveal(0.1);
  const v = visible ? "true" : "false";
  return (
    <Section className="grid-bg">
      <div ref={ref}>
        <div className="reveal-up" data-visible={v}>
          <Heading className="max-w-4xl text-4xl md:text-6xl">
            Your product doesn't need another meeting. <span className="text-muted-foreground">It needs fixing.</span>
          </Heading>
        </div>
        <p className="reveal mt-6 text-sm text-muted-foreground" data-visible={v} style={{ transitionDelay: "120ms" }}>
          Tell us what's broken. We'll show you what we'd change.
        </p>
        <div className="reveal mt-8 flex flex-wrap gap-3" data-visible={v} style={{ transitionDelay: "240ms" }}>
          <LimeButton href={CALENDLY_URL}>Book a Product Teardown →</LimeButton>
          <GhostButton href={`mailto:${EMAIL}`}>Email Siddhant →</GhostButton>
        </div>
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
  const { ref, visible } = useReveal(0.05);
  return (
    <footer ref={ref} className="reveal border-t border-hairline px-5 py-14 md:px-10" data-visible={visible ? "true" : "false"}>
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
            <p className="mt-3 micro text-muted-foreground">
              UAE-based product design practice · Serving clients worldwide
            </p>
            <p className="mt-6 text-sm text-foreground">Siddhant Bhendkar</p>
            <p className="micro text-muted-foreground">Founder / Product Designer</p>
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
        <p className="mt-10 micro text-muted-foreground border-t border-hairline pt-6">
          © 2026 AXIOM. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
