import type { ReactNode } from "react";
import type { PreviewKind } from "@/data";

/* Illustrative UI recreations of each product. Numbers inside are placeholder UI, not claims. */

function Frame({ children, url }: { children: ReactNode; url?: string }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line-strong bg-bg shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)]">
      <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-line px-3">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        {url && (
          <span className="mx-auto truncate rounded-md bg-well px-3 py-0.5 font-mono text-[10px] text-faint">
            {url}
          </span>
        )}
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

const Line = ({ w, c = "bg-white/10" }: { w: string; c?: string }) => (
  <div className={`h-1.5 rounded-full ${c}`} style={{ width: w }} />
);

function ChatPreview() {
  return (
    <Frame url="yourstore.com">
      <div className="absolute inset-0 p-4">
        <div className="space-y-2 opacity-60">
          <Line w="40%" />
          <Line w="70%" />
          <Line w="55%" />
          <div className="!mt-4 grid w-[55%] grid-cols-2 gap-2">
            <div className="aspect-[4/3] rounded-md bg-white/[0.06]" />
            <div className="aspect-[4/3] rounded-md bg-white/[0.06]" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 w-[62%] min-w-44 overflow-hidden rounded-xl border border-line-strong bg-card">
          <div className="flex items-center gap-2 border-b border-line px-3 py-2">
            <span className="pulse-dot size-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-medium">Valopt Assistant</span>
          </div>
          <div className="space-y-1.5 p-2.5 text-[9.5px] leading-snug">
            <p className="ml-auto w-fit max-w-[85%] rounded-lg rounded-br-sm bg-fg px-2 py-1 text-bg">
              Do you ship to Lyon?
            </p>
            <p className="w-fit max-w-[90%] rounded-lg rounded-bl-sm bg-well px-2 py-1 text-dim">
              Yes, free delivery across France in 2–3 days.
            </p>
            <p className="ml-auto w-fit max-w-[85%] rounded-lg rounded-br-sm bg-fg px-2 py-1 text-bg">
              Where is my order?
            </p>
            <p className="w-fit max-w-[90%] rounded-lg rounded-bl-sm bg-well px-2 py-1 text-dim">
              It shipped this morning and arrives Thursday
              <span className="caret" />
            </p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function DashboardPreview() {
  const bars = [38, 52, 44, 61, 58, 72, 66, 80, 74, 88, 70, 92];
  return (
    <Frame url="console.valopt.ai">
      <div className="absolute inset-0 grid grid-cols-[22%_1fr]">
        <div className="space-y-2 border-r border-line p-3">
          <div className="mb-3 h-2 w-3/4 rounded-full bg-accent/70" />
          {[70, 55, 62, 48].map((w, i) => (
            <Line key={i} w={`${w}%`} c={i === 0 ? "bg-white/25" : "bg-white/10"} />
          ))}
        </div>
        <div className="flex min-w-0 flex-col gap-2.5 p-3">
          <div className="grid grid-cols-3 gap-2">
            {["Live", "Resolved", "Latency"].map((k, i) => (
              <div key={k} className="rounded-md border border-line bg-card p-2">
                <p className="text-[8px] uppercase tracking-wider text-faint">{k}</p>
                <p className="mt-0.5 text-[13px] font-medium tabular-nums">
                  {["42", "96%", "0.8s"][i]}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-1 items-end gap-1 rounded-md border border-line bg-card p-2">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`flex-1 origin-bottom rounded-sm ${i === bars.length - 1 ? "bg-accent" : "bg-white/15"}`}
                style={{ height: `${h}%`, animation: `bar 1.2s ${i * 40}ms var(--ease-out-expo) both` }}
              />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function WebsitePreview() {
  return (
    <Frame url="valopt.ai">
      <div className="absolute inset-0 flex flex-col p-4">
        <div className="flex items-center justify-between">
          <div className="h-2 w-12 rounded-full bg-white/40" />
          <div className="flex gap-2">
            <Line w="1.5rem" />
            <Line w="1.5rem" />
            <div className="h-3 w-9 rounded-full bg-accent" />
          </div>
        </div>
        <div className="mt-auto space-y-2">
          <div className="h-3 w-4/5 rounded-full bg-white/70" />
          <div className="h-3 w-3/5 rounded-full bg-white/70" />
          <div className="pt-1">
            <Line w="50%" />
          </div>
        </div>
        <div className="mt-4 flex gap-3 border-t border-line pt-3 font-mono text-[9px] text-dim">
          <span>LCP <b className="text-accent">good</b></span>
          <span>CLS <b className="text-accent">good</b></span>
          <span>SSR <b className="text-fg">&lt;1s</b></span>
        </div>
      </div>
    </Frame>
  );
}

function MailerPreview() {
  const steps = ["Event", "OAuth2", "Render", "Send"];
  return (
    <Frame>
      <div className="absolute inset-0 flex flex-col justify-center gap-4 p-4">
        <div className="flex items-center">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-1 items-center last:flex-none">
              <div
                className={`rounded-md border px-2 py-1 font-mono text-[9px] ${i === 1 ? "border-accent/60 text-accent" : "border-line-strong text-dim"}`}
              >
                {s}
              </div>
              {i < steps.length - 1 && <div className="h-px flex-1 bg-line-strong" />}
            </div>
          ))}
        </div>
        <div className="space-y-1.5 rounded-lg border border-line bg-card p-3">
          {["Welcome to Valopt", "Your weekly report", "Password reset"].map((s, i) => (
            <div key={s} className="flex items-center gap-2 text-[9.5px]">
              <span className={`size-1.5 rounded-full ${i === 0 ? "bg-accent" : "bg-white/25"}`} />
              <span className="flex-1 truncate text-dim">{s}</span>
              <span className="font-mono text-faint">sent</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function StorePreview() {
  return (
    <Frame url="ecigplanet.fr">
      <div className="absolute inset-0 grid grid-cols-3 gap-2 p-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col gap-1 rounded-md border border-line bg-card p-1.5">
            <div className="aspect-square rounded bg-gradient-to-br from-white/10 to-white/[0.02]" />
            <Line w="80%" />
            <Line w="40%" c={i === 1 ? "bg-accent" : "bg-white/20"} />
          </div>
        ))}
      </div>
    </Frame>
  );
}

function StockPreview() {
  const rows: [string, number][] = [
    ["SKU-104", 82],
    ["SKU-221", 34],
    ["SKU-309", 12],
    ["SKU-417", 64],
  ];
  return (
    <Frame>
      <div className="absolute inset-0 space-y-2 p-3 font-mono text-[9px]">
        {rows.map(([sku, v]) => (
          <div key={sku} className="flex items-center gap-2">
            <span className="w-12 text-dim">{sku}</span>
            <div className="h-1.5 flex-1 rounded-full bg-white/5">
              <div
                className={`h-full rounded-full ${v < 20 ? "bg-accent" : "bg-white/30"}`}
                style={{ width: `${v}%` }}
              />
            </div>
            <span className="w-6 text-right tabular-nums">{v}</span>
          </div>
        ))}
        <p className="pt-1 text-accent">▲ 1 item below reorder level</p>
      </div>
    </Frame>
  );
}

function LoyaltyPreview() {
  return (
    <Frame>
      <div className="absolute inset-0 flex flex-col justify-center gap-3 p-4">
        <div className="flex items-center justify-between rounded-lg border border-dashed border-accent/50 px-3 py-2">
          <span className="font-mono text-[10px] tracking-widest text-accent">FRIEND-20</span>
          <span className="text-[9px] text-dim">copy</span>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-[9px] text-dim">
            <span>Silver</span>
            <span>Gold</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5">
            <div className="h-full w-[68%] rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </Frame>
  );
}

function NotifyPreview() {
  return (
    <Frame>
      <div className="absolute inset-0 flex flex-col justify-center gap-2 p-4 text-[9.5px]">
        {[
          ["WhatsApp", "Your order has shipped"],
          ["SMS", "Out for delivery today"],
        ].map(([ch, msg], i) => (
          <div key={ch} className="rounded-lg border border-line bg-card p-2">
            <p className={`font-mono text-[8px] uppercase ${i === 0 ? "text-accent" : "text-faint"}`}>
              {ch}
            </p>
            <p className="mt-0.5 text-dim">{msg}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

const map: Record<PreviewKind, () => ReactNode> = {
  chat: ChatPreview,
  dashboard: DashboardPreview,
  website: WebsitePreview,
  mailer: MailerPreview,
  store: StorePreview,
  stock: StockPreview,
  loyalty: LoyaltyPreview,
  notify: NotifyPreview,
};

export function Preview({ kind }: { kind: PreviewKind }) {
  const C = map[kind];
  return <C />;
}
