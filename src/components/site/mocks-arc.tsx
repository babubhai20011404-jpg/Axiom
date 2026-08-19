import { Panel, PhoneFrame as PhoneFrameLike } from "./primitives-imports";

const kpis = [
  ["Revenue / mo", "$128.4K", "+8.2%"],
  ["Active accounts", "1,284", "+3.1%"],
  ["Net retention", "118%", "+2.0%"],
  ["Churn", "1.9%", "-0.4%"],
] as const;

const alerts = [
  ["Churn risk — 3 accounts below 20% usage", "High"],
  ["Expansion signal — 12 accounts near seat limit", "Info"],
  ["Report ready — Q3 board summary", "New"],
] as const;

export function ArcDashboard() {
  return (
    <Panel title="ARC — executive overview" meta="Q3 · live">
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {kpis.map(([label, value, delta]) => (
          <div key={label} className="rounded-lg border border-hairline bg-card p-4">
            <div className="micro text-muted-foreground">{label}</div>
            <div className="mt-2 font-display text-2xl font-semibold tracking-tight">{value}</div>
            <div className={`mt-1 font-mono text-[0.65rem] ${delta.startsWith("-") ? "text-positive" : "text-positive"}`}>
              {delta}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-lg border border-hairline bg-card p-4">
          <div className="flex items-center justify-between">
            <span className="micro text-muted-foreground">Revenue — 12 weeks</span>
            <span className="micro text-positive">trend up</span>
          </div>
          <div className="mt-4 flex h-32 items-end gap-1.5">
            {[30, 36, 33, 44, 40, 52, 48, 60, 57, 68, 72, 84].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-lime/60" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-3 flex justify-between font-mono text-[0.6rem] text-muted-foreground">
            <span>W1</span>
            <span>W4</span>
            <span>W8</span>
            <span>W12</span>
          </div>
        </div>
        <div className="rounded-lg border border-hairline bg-card p-4">
          <div className="micro text-muted-foreground">Alerts</div>
          <div className="mt-3 space-y-3">
            {alerts.map(([text, tag]) => (
              <div key={text} className="flex items-start justify-between gap-3 text-xs">
                <span className="text-muted-foreground">{text}</span>
                <span className="shrink-0 rounded-full border border-hairline px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-widest text-lime">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}

const teams = [
  ["Northbeam", "42 seats", 96],
  ["Helios Health", "28 seats", 81],
  ["Cartwheel", "17 seats", 64],
  ["Ferrostack", "9 seats", 38],
  ["Bluepine", "31 seats", 72],
] as const;

export function ArcDrilldown() {
  return (
    <Panel title="ARC — drill-down · team performance" meta="segment: ent">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="micro text-muted-foreground">Filters</span>
        {["All regions", "Enterprise", "Active 90d", "Seats ≥ 10"].map((f) => (
          <span
            key={f}
            className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground"
          >
            {f}
          </span>
        ))}
      </div>
      <div className="space-y-3">
        {teams.map(([name, seats, pct]) => (
          <div key={name}>
            <div className="flex items-center justify-between font-mono text-xs">
              <span>
                {name} <span className="text-muted-foreground">· {seats}</span>
              </span>
              <span className="text-lime">{pct}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-secondary">
              <div className="h-1.5 rounded-full bg-lime" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function ArcMobile() {
  return (
    <PhoneFrameLike app="ARC">
      <div className="rounded-xl border border-hairline bg-card p-4">
        <div className="micro text-muted-foreground">Revenue / mo</div>
        <div className="mt-2 font-display text-2xl font-semibold">$128.4K</div>
        <div className="font-mono text-[0.65rem] text-positive">+8.2% vs June</div>
      </div>
      <div className="rounded-xl border border-hairline bg-card p-4 font-mono text-xs">
        {[
          ["Active accounts", "1,284"],
          ["Net retention", "118%"],
          ["Churn", "1.9%"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between py-1.5">
            <span className="text-muted-foreground">{k}</span>
            <span>{v}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-warning/40 px-4 py-3 font-mono text-[0.62rem] uppercase tracking-widest text-warning">
        1 alert needs review
      </div>
    </PhoneFrameLike>
  );
}
