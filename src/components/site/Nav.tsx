import { useCallback, useEffect, useState } from "react";
import { CALENDLY_URL } from "./primitives";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#offer", label: "Offer" },
  { href: "#about", label: "About" },
] as const;

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="border-b border-hairline bg-background/90 py-2 text-center">
        <span className="micro text-muted-foreground">
          72-hour product rescue &nbsp;·&nbsp; 2 engagements available
        </span>
      </div>
      <div className="flex items-center justify-between gap-4 border-b border-hairline bg-background/80 px-5 py-4 md:px-10">
        <a
          href="#top"
          className="shrink-0 font-display text-lg font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          AXIOM<span className="text-lime">°</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Primary">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground focus-visible:underline"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-lime-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex sm:px-5"
          >
            Book a Product Teardown →
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex rounded-full bg-lime px-4 py-2.5 text-xs font-semibold text-lime-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:hidden"
          >
            Book →
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-4 bg-current transition-transform ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[6px] block h-0.5 w-4 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-4 bg-current transition-transform ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-b border-hairline bg-background/95 px-5 py-6 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile primary">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-lime focus-visible:outline-none focus-visible:text-lime"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            onClick={closeMenu}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-lime px-6 py-3 text-sm font-semibold text-lime-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Book a Product Teardown →
          </a>
        </div>
      ) : null}
    </header>
  );
}

export function Marquee() {
  const items = [
    "72-hour product rescue",
    "diagnose",
    "rebuild",
    "ship",
    "one critical experience",
    "no six-month redesign",
  ];
  const strip = (
    <div className="marquee-track shrink-0 items-center gap-10 whitespace-nowrap px-5">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-10 micro text-muted-foreground">
          {item}
          <span className="h-1 w-1 rounded-full bg-lime" aria-hidden="true" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="flex overflow-hidden border-y border-hairline bg-card py-4" aria-hidden="true">
      {strip}
      {strip}
    </div>
  );
}
