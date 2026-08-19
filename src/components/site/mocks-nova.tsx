import { Panel, StateChip } from "./primitives";

const markets = [
  ["BTC / USDT", "67,240.10", "+2.4%"],
  ["ETH / USDT", "3,512.88", "+1.1%"],
  ["SOL / USDT", "182.44", "-0.8%"],
  ["USDT / INR", "83.24", "+0.2%"],
] as const;

const wallet = [
  ["USDT", "5,842.10", "₹4,86,214"],
  ["BTC", "0.0142", "₹79,540"],
  ["ETH", "1.2040", "₹3,51,730"],
  ["INR", "83,240.00", "₹83,240"],
] as const;

const activity = [
  ["USDT → INR", "₹83,240.00", "Completed"],
  ["Buy BTC", "0.0040 BTC", "Processing"],
  ["Withdraw INR", "₹20,000.00", "Failed"],
] as const;

export function NovaDashboard() {
  return (
    <Panel title="Nova — exchange" meta="● live">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4">
          <div className="rounded-lg border border-hairline bg-card p-3">
            <div className="micro text-muted-foreground">Markets</div>
            <div className="mt-3 space-y-2 font-mono text-xs">
              {markets.map(([pair, price, delta]) => (
                <div key={pair} className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">{pair}</span>
                  <span className="flex gap-3">
                    <span>{price}</span>
                    <span className={delta.startsWith("-") ? "text-danger" : "text-positive"}>{delta}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-hairline bg-card p-3">
            <div className="micro text-muted-foreground">Wallet</div>
            <div className="mt-3 space-y-2 font-mono text-xs">
              {wallet.map(([asset, amount, inr]) => (
                <div key={asset} className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">{asset}</span>
                  <span className="flex gap-3">
                    <span>{amount}</span>
                    <span className="text-muted-foreground">{inr}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-hairline bg-card p-4">
            <div className="micro text-muted-foreground">Portfolio balance</div>
            <div className="mt-2 font-display text-3xl font-semibold tracking-tight">₹9,17,484</div>
            <div className="mt-1 font-mono text-xs text-positive">+2.4% / 24H</div>
            <div className="mt-4 flex h-24 items-end gap-1">
              {[38, 46, 41, 55, 49, 62, 58, 71, 66, 78, 74, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-lime/70"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-3 flex gap-2 font-mono text-[0.6rem] text-muted-foreground">
              {["1H", "1D", "1W", "1M"].map((t, i) => (
                <span
                  key={t}
                  className={
                    i === 1
                      ? "rounded border border-lime/50 px-2 py-0.5 text-lime"
                      : "rounded border border-hairline px-2 py-0.5"
                  }
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="rounded-lg bg-lime px-3 py-2.5 font-mono text-[0.62rem] uppercase tracking-widest text-lime-foreground">
              Convert USDT → INR
            </button>
            <button className="rounded-lg border border-hairline px-3 py-2.5 font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground">
              Withdraw
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-hairline bg-card p-3">
            <div className="micro text-muted-foreground">Recent activity</div>
            <div className="mt-3 space-y-3 font-mono text-xs">
              {activity.map(([label, amount, state]) => (
                <div key={label} className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="flex items-center gap-2">
                    <span>{amount}</span>
                    <StateChip state={state} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-hairline bg-card p-3">
            <div className="micro text-muted-foreground">USDT / INR rate</div>
            <div className="mt-2 font-mono text-lg">
              ₹83.24 <span className="text-xs text-positive">+0.24%</span>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export function NovaConvert() {
  return (
    <Panel title="Nova — convert" meta="step 1 / 2">
      <div className="mb-4 flex gap-2 font-mono text-[0.62rem] uppercase tracking-widest">
        {["USDT", "BTC", "ETH"].map((a, i) => (
          <span
            key={a}
            className={
              i === 0
                ? "rounded border border-lime/50 px-2 py-1 text-lime"
                : "rounded border border-hairline px-2 py-1 text-muted-foreground"
            }
          >
            {a}
          </span>
        ))}
        <span className="px-2 py-1 text-muted-foreground">→ INR</span>
      </div>
      <div className="space-y-3">
        <div className="rounded-lg border border-hairline bg-card p-4">
          <div className="micro text-muted-foreground">You pay</div>
          <div className="mt-2 font-display text-2xl font-semibold">1,000.00</div>
          <div className="mt-1 font-mono text-[0.65rem] text-muted-foreground">USDT · BAL 5,842.10</div>
        </div>
        <div className="rounded-lg border border-hairline bg-card p-4">
          <div className="micro text-muted-foreground">You receive</div>
          <div className="mt-2 font-display text-2xl font-semibold text-lime">₹83,240.00</div>
          <div className="mt-1 font-mono text-[0.65rem] text-muted-foreground">INR · BANK ••4821</div>
        </div>
        <div className="grid grid-cols-3 gap-2 font-mono text-[0.65rem]">
          {[
            ["Rate", "1 USDT = ₹83.24"],
            ["Fee", "0.4% · ₹332.96"],
            ["Arrives", "~4 min"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-hairline p-3">
              <div className="micro text-muted-foreground">{k}</div>
              <div className="mt-2">{v}</div>
            </div>
          ))}
        </div>
        <button className="w-full rounded-lg bg-lime py-3 font-mono text-[0.65rem] uppercase tracking-widest text-lime-foreground">
          Review conversion →
        </button>
      </div>
    </Panel>
  );
}

export function NovaConfirm() {
  return (
    <Panel title="Nova — confirm" meta="step 2 / 2">
      <div className="rounded-lg border border-hairline bg-card p-5 text-center">
        <div className="micro text-muted-foreground">You are converting</div>
        <div className="mt-3 font-display text-3xl font-semibold tracking-tight">1,000 USDT</div>
        <div className="mt-1 font-display text-xl text-lime">→ ₹83,240.00 INR</div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[0.65rem]">
        {[
          ["Recipient", "BANK ••4821 · HDFC"],
          ["Rate locked", "₹83.24 · 00:58"],
          ["Fee", "₹332.96"],
          ["Network", "TRC-20"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-hairline p-3">
            <div className="micro text-muted-foreground">{k}</div>
            <div className="mt-2">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-positive/30 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-widest text-positive">
        2FA verified · device recognized
      </div>
      <button className="mt-3 w-full rounded-lg bg-lime py-3 font-mono text-[0.65rem] uppercase tracking-widest text-lime-foreground">
        Confirm · ₹83,240.00
      </button>
    </Panel>
  );
}

const history = [
  ["USDT → INR", "Today 14:02", "₹83,240.00", "Processing"],
  ["USDT → INR", "12 Jul 09:44", "₹41,620.00", "Completed"],
  ["Buy BTC", "11 Jul 18:20", "0.0040 BTC", "Completed"],
  ["Withdraw INR", "10 Jul 11:05", "₹20,000.00", "Failed"],
  ["Receive USDT", "08 Jul 16:31", "2,500.00", "Completed"],
  ["USDT → INR", "05 Jul 10:12", "₹1,24,860.00", "Completed"],
] as const;

export function NovaActivity() {
  return (
    <Panel title="Nova — activity" meta="export ↓">
      <div className="mb-4 flex flex-wrap gap-2 font-mono text-[0.62rem] uppercase tracking-widest">
        {["All", "Convert", "Send", "Receive"].map((f, i) => (
          <span
            key={f}
            className={
              i === 0
                ? "rounded border border-lime/50 px-2 py-1 text-lime"
                : "rounded border border-hairline px-2 py-1 text-muted-foreground"
            }
          >
            {f}
          </span>
        ))}
      </div>
      <div className="divide-y divide-hairline">
        {history.map(([label, when, amount, state], i) => (
          <div key={i} className="flex items-center justify-between gap-3 py-3 font-mono text-xs">
            <span className="min-w-0">
              <span className="block truncate">{label}</span>
              <span className="block text-[0.6rem] uppercase tracking-widest text-muted-foreground">{when}</span>
            </span>
            <span className="flex shrink-0 items-center gap-3">
              <span>{amount}</span>
              <StateChip state={state} />
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function PhoneFrame({ app, children }: { app: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-hairline bg-panel p-3">
      <div className="mb-3 flex items-center justify-between px-1 font-mono text-[0.6rem] text-muted-foreground">
        <span>9:41</span>
        <span className="tracking-widest">{app}</span>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function NovaMobile() {
  return (
    <PhoneFrame app="NOVA">
      <div className="rounded-xl border border-hairline bg-card p-4">
        <div className="micro text-muted-foreground">Portfolio</div>
        <div className="mt-2 font-display text-2xl font-semibold">₹9,17,484</div>
        <div className="font-mono text-[0.65rem] text-positive">+2.4% / 24H</div>
      </div>
      <div className="rounded-xl border border-hairline bg-card p-4">
        <div className="micro text-muted-foreground">Convert</div>
        <div className="mt-2 flex items-center justify-between font-mono text-xs">
          <span>1,000 USDT</span>
          <span className="text-lime">₹83,240</span>
        </div>
      </div>
      <div className="rounded-xl border border-hairline bg-card p-4">
        <div className="micro text-muted-foreground">Activity</div>
        <div className="mt-3 space-y-2 font-mono text-[0.65rem]">
          {([
            ["USDT → INR", "₹83,240", "Processing"],
            ["Buy BTC", "0.0040", "Completed"],
            ["Withdraw", "₹20,000", "Failed"],
          ] as const).map(([a, b, c]) => (
            <div key={a} className="flex items-center justify-between gap-2">
              <span className="text-muted-foreground">{a}</span>
              <span className="flex items-center gap-2">
                {b}
                <StateChip state={c} />
              </span>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full rounded-xl bg-lime py-3 font-mono text-[0.62rem] uppercase tracking-widest text-lime-foreground">
        Convert
      </button>
    </PhoneFrame>
  );
}
