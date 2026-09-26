import type { MockKind } from "@/data/products";
import { cn } from "@/lib/utils";

const Bar = ({ w, className }: { w: string; className?: string }) => <div className={cn("h-2 rounded-full bg-ink-border", className)} style={{ width: w }} />;

const Frame = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-xl border border-ink-border bg-ink-2 overflow-hidden text-ink-foreground h-full">
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-ink-border">
      <span className="w-2 h-2 rounded-full bg-ink-border" /><span className="w-2 h-2 rounded-full bg-ink-border" /><span className="w-2 h-2 rounded-full bg-ink-border" />
      <span className="ml-2 font-mono text-[10px] text-ink-muted">{title}</span>
    </div>
    <div className="p-4 space-y-3 text-[11px]">{children}</div>
  </div>
);

const ProductMockup = ({ kind }: { kind: MockKind }) => {
  switch (kind) {
    case "rag":
      return (
        <Frame title="knowledge.codegraff">
          <div className="ml-auto max-w-[75%] rounded-lg bg-primary text-primary-foreground px-3 py-2">What is our refund policy for enterprise plans?</div>
          <div className="max-w-[85%] rounded-lg bg-ink-3 px-3 py-2 space-y-2">
            <p>Enterprise plans are refundable within 30 days of renewal, pro-rated monthly after that.</p>
            <div className="flex gap-1.5 flex-wrap">{["policy.pdf · p4", "contracts/msa · §7", "wiki/billing"].map(s => <span key={s} className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-primary/15 text-primary">{s}</span>)}</div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[9px] text-ink-muted"><span className="w-1.5 h-1.5 rounded-full bg-success pulse-dot" />faithfulness 0.97 · 3 sources · 820ms</div>
        </Frame>
      );
    case "social":
      return (
        <Frame title="social.assistant">
          <div className="grid grid-cols-3 gap-2">{[["Reach", "+24%"], ["Eng.", "6.8%"], ["Followers", "+1.2k"]].map(([k, v]) => <div key={k} className="rounded-md bg-ink-3 p-2"><p className="text-ink-muted text-[9px]">{k}</p><p className="font-semibold">{v}</p></div>)}</div>
          <div className="flex items-end gap-1 h-16">{[40, 55, 35, 70, 60, 85, 75, 95, 80, 100].map((h, i) => <div key={i} className="flex-1 rounded-sm bg-primary/70" style={{ height: `${h}%` }} />)}</div>
          <div className="rounded-md bg-ink-3 px-3 py-2">Carousels outperform reels by 31% for your audience on weekdays.</div>
        </Frame>
      );
    case "advisor":
      return (
        <Frame title="advisor.strategy">
          {[["Trend", "AI tools for students", "↑ 340%"], ["Hook", "\"Nobody tells you this about…\"", "high"], ["Post", "Tue · 7:30 PM", "best"]].map(([a, b, c]) => (
            <div key={a} className="flex items-center justify-between rounded-md bg-ink-3 px-3 py-2"><div><p className="text-ink-muted text-[9px]">{a}</p><p>{b}</p></div><span className="font-mono text-[9px] text-success">{c}</span></div>
          ))}
          <div className="flex gap-1.5 flex-wrap">{["#aitools", "#studytok", "#productivity"].map(h => <span key={h} className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-accent/15 text-accent">{h}</span>)}</div>
        </Frame>
      );
    case "youtube":
      return (
        <Frame title="automator.pipeline">
          {[["Discover trend", "done"], ["Research topic", "done"], ["Generate script", "done"], ["SEO package", "running"], ["Human approval", "waiting"]].map(([s, st]) => (
            <div key={s} className="flex items-center gap-2">
              <span className={cn("w-2 h-2 rounded-full", st === "done" ? "bg-success" : st === "running" ? "bg-primary pulse-dot" : "bg-ink-border")} />
              <span className="flex-1">{s}</span><span className="font-mono text-[9px] text-ink-muted">{st}</span>
            </div>
          ))}
          <div className="rounded-md bg-ink-3 p-2 flex gap-2"><div className="w-14 h-9 rounded bg-gradient-accent" /><div className="space-y-1.5 flex-1"><Bar w="90%" /><Bar w="60%" /></div></div>
        </Frame>
      );
    case "script":
      return (
        <Frame title="script.writer">
          <div className="flex gap-1.5">{["Reel", "Shorts", "YouTube"].map((t, i) => <span key={t} className={cn("px-2 py-0.5 rounded font-mono text-[9px]", i === 0 ? "bg-primary text-primary-foreground" : "bg-ink-3 text-ink-muted")}>{t}</span>)}</div>
          <p className="font-mono text-[9px] text-primary">HOOK · 0:00</p>
          <p>"You've been using ChatGPT wrong — here's the prompt pattern pros use."</p>
          <p className="font-mono text-[9px] text-primary">BEAT 1 · 0:04</p>
          <div className="space-y-1.5"><Bar w="95%" /><Bar w="80%" /><Bar w="60%" /></div>
          <p className="font-mono text-[9px] text-ink-muted">tone: confident · 42s · seo 92</p>
        </Frame>
      );
    case "agents":
      return (
        <Frame title="agents.workflow">
          <div className="grid grid-cols-3 gap-2 items-center">
            {["Intake", "Research", "Draft"].map((a, i) => <div key={a} className="rounded-md bg-ink-3 border border-ink-border p-2 text-center"><span className={cn("inline-block w-1.5 h-1.5 rounded-full mr-1 pulse-dot", i === 1 ? "bg-primary" : "bg-success")} />{a}</div>)}
          </div>
          <div className="rounded-md border border-dashed border-primary/50 p-2 text-center font-mono text-[9px] text-primary">tool: jira.create_issue · mcp</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-ink-3 p-2"><p className="text-ink-muted text-[9px]">Checkpoint</p><p>step 4 / 7</p></div>
            <div className="rounded-md bg-warning/15 text-warning p-2"><p className="text-[9px] opacity-80">Human-in-loop</p><p>Approve</p></div>
          </div>
        </Frame>
      );
  }
};

export default ProductMockup;
