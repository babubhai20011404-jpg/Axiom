import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Central booking URL — update here to change every primary CTA. */
export const CALENDLY_URL = "https://calendly.com/siddhantbhendkar14/30min";

/** Central contact email — used for all mailto links. */
export const EMAIL = "siddhantbhendkar14@gmail.com";

/** Central LinkedIn profile URL — update here to change every LinkedIn link. */
export const LINKEDIN_URL = "https://www.linkedin.com/in/siddhant-bhendkar-29430a3a0/";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("border-t border-hairline px-5 py-20 md:px-10 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-3 micro text-muted-foreground">
      <span className="text-lime">{index}</span>
      <span className="h-px w-8 bg-hairline" />
      <span>{children}</span>
    </div>
  );
}

export function Heading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl lg:text-[3.4rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Panel({
  title,
  meta,
  children,
  className,
}: {
  title: string;
  meta?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-hairline bg-panel", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-hairline px-4 py-3">
        <span className="micro text-muted-foreground">{title}</span>
        {meta ? <span className="micro text-lime">{meta}</span> : null}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function Caption({ children }: { children: ReactNode }) {
  return <p className="mb-3 micro text-muted-foreground">{children}</p>;
}

export function Stat({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <div className="rounded-lg border border-hairline bg-card px-4 py-3">
      <div className="micro text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-2xl font-semibold tracking-tight">{value}</div>
      {delta ? <div className="mt-1 font-mono text-xs text-positive">{delta}</div> : null}
    </div>
  );
}

export function StateChip({ state }: { state: string }) {
  const tone =
    state.toLowerCase() === "completed" || state.toLowerCase() === "done" || state.toLowerCase() === "sent"
      ? "text-positive border-positive/40"
      : state.toLowerCase() === "failed"
        ? "text-danger border-danger/40"
        : "text-warning border-warning/40";
  return (
    <span className={cn("rounded-full border px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-widest", tone)}>
      {state}
    </span>
  );
}

export function LimeButton({
  href,
  children,
  external = true,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-lime-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {children}
    </a>
  );
}

export function GhostButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {children}
    </a>
  );
}

export function NumberedCard({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-hairline bg-card p-6">
      <div className="micro text-lime">{index}</div>
      <h3 className="mt-6 font-display text-lg font-bold tracking-wide uppercase">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
