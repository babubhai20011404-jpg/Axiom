import { Panel, StateChip } from "./primitives";

const nodes = [
  ["Trigger", "Invoice overdue 7d"],
  ["AI agent", "Draft follow-up"],
  ["AI agent", "Escalate tone"],
  ["Approval", "Needs sign-off"],
  ["Action", "Send via Gmail"],
] as const;

export function VantaWorkflow() {
  return (
    <Panel title="Vanta — workflow · invoice chaser" meta="draft v4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {nodes.map(([kind, label], i) => (
          <div key={label} className="flex flex-1 items-center gap-3">
            <div
              className={`w-full rounded-lg border p-4 ${
                kind === "Approval" ? "border-lime/50 bg-lime/5" : "border-hairline bg-card"
              }`}
            >
              <div className={`micro ${kind === "Approval" ? "text-lime" : "text-muted-foreground"}`}>{kind}</div>
              <div className="mt-2 text-xs">{label}</div>
            </div>
            {i < nodes.length - 1 ? <span className="hidden text-muted-foreground lg:block">→</span> : null}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 micro text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime" /> Human checkpoint
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-muted-foreground" /> Automated
        </span>
      </div>
    </Panel>
  );
}

export function VantaConfig() {
  return (
    <Panel title="Vanta — agent config" meta="saved">
      <div className="space-y-3">
        <div className="rounded-lg border border-hairline bg-card p-4">
          <div className="micro text-muted-foreground">Agent</div>
          <div className="mt-2 font-display text-lg font-semibold">Collections Assistant</div>
        </div>
        <div className="grid grid-cols-2 gap-2 font-mono text-xs">
          <div className="rounded-lg border border-hairline p-3">
            <div className="micro text-muted-foreground">Model</div>
            <div className="mt-2">Balanced</div>
          </div>
          <div className="rounded-lg border border-hairline p-3">
            <div className="micro text-muted-foreground">Tone</div>
            <div className="mt-2">Firm, polite</div>
          </div>
        </div>
        <div className="rounded-lg border border-hairline bg-card p-4">
          <div className="flex items-center justify-between">
            <span className="micro text-muted-foreground">Auto-execute confidence</span>
            <span className="font-mono text-xs text-lime">82%</span>
          </div>
          <div className="mt-3 h-1.5 w-full rounded-full bg-secondary">
            <div className="h-1.5 w-[82%] rounded-full bg-lime" />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Below this threshold, every action waits for human approval.
          </p>
        </div>
        <div className="space-y-2">
          {[
            ["Require approval for payments", true],
            ["Require approval for new recipients", true],
            ["Auto-send follow-ups", false],
          ].map(([label, on]) => (
            <div
              key={String(label)}
              className="flex items-center justify-between rounded-lg border border-hairline px-4 py-3 text-xs"
            >
              <span className="text-muted-foreground">{label}</span>
              <span
                className={`flex h-4 w-8 items-center rounded-full px-0.5 ${on ? "bg-lime" : "bg-secondary"}`}
              >
                <span
                  className={`h-3 w-3 rounded-full bg-background transition-transform ${on ? "translate-x-4" : ""}`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

export function VantaRun() {
  return (
    <Panel title="Vanta — run #1,204 · approval" meta="waiting">
      <div className="space-y-3">
        {[
          ["Trigger received — Invoice #INV-0892 overdue", true],
          ["Agent drafted follow-up (confidence 91%)", true],
          ["Payment link attached", true],
          ["Waiting for approval to send", false],
        ].map(([text, done]) => (
          <div key={String(text)} className="flex items-center gap-3 text-xs">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${done ? "bg-positive" : "bg-warning"}`}
            />
            <span className={done ? "text-muted-foreground" : "text-foreground"}>{text}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-hairline bg-card p-4">
        <div className="micro text-muted-foreground">Draft preview</div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          “Hi Priya — invoice #INV-0892 (₹1,24,860) is 7 days past due. Here's a direct payment link. Happy to
          answer questions.”
        </p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button className="rounded-lg bg-lime py-3 font-mono text-[0.62rem] uppercase tracking-widest text-lime-foreground">
          Approve &amp; send
        </button>
        <button className="rounded-lg border border-hairline py-3 font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground">
          Edit draft
        </button>
      </div>
    </Panel>
  );
}

const log = [
  ["14:02:11", "invoice-chaser", "Follow-up sent to Northbeam", "Sent"],
  ["13:47:55", "invoice-chaser", "Draft approved by Siddhant", "Completed"],
  ["13:47:02", "invoice-chaser", "Awaiting approval", "Held"],
  ["11:20:38", "lead-enrich", "Enriched 42 CRM records", "Done"],
  ["09:15:14", "weekly-digest", "Slack summary posted", "Done"],
  ["08:58:40", "lead-enrich", "API rate limit — retrying in 5m", "Retry"],
] as const;

export function VantaLog() {
  return (
    <Panel title="Vanta — activity log" meta="today">
      <div className="divide-y divide-hairline">
        {log.map(([time, agent, text, state]) => (
          <div key={time} className="flex items-center justify-between gap-3 py-3 font-mono text-[0.68rem]">
            <span className="flex min-w-0 items-center gap-3">
              <span className="text-muted-foreground">{time}</span>
              <span className="hidden text-lime sm:inline">{agent}</span>
              <span className="truncate">{text}</span>
            </span>
            <StateChip state={state} />
          </div>
        ))}
      </div>
      <div className="mt-4 micro text-muted-foreground">Every action logged · full audit trail</div>
    </Panel>
  );
}
