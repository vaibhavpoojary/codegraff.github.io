import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

const lines = [
  { t: "$ codegraff agent run --goal \"summarize Q3 support tickets\"", c: "text-ink-foreground" },
  { t: "→ planner      decomposing goal into 4 steps", c: "text-ink-muted" },
  { t: "→ retriever    searching 12,480 tickets (hybrid + rerank)", c: "text-ink-muted" },
  { t: "→ tool         crm.query(segment=\"enterprise\")", c: "text-primary" },
  { t: "→ analyst      clustering themes · 6 found", c: "text-ink-muted" },
  { t: "→ guardrail    PII redacted · policy ok", c: "text-success" },
  { t: "→ human        approval requested", c: "text-warning" },
  { t: "✓ report ready · 3 citations per claim · 4.2s", c: "text-success" },
];

const Terminal = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (n >= lines.length) { const r = setTimeout(() => setN(0), 3500); return () => clearTimeout(r); }
    const t = setTimeout(() => setN(n + 1), n === 0 ? 400 : 650);
    return () => clearTimeout(t);
  }, [inView, n]);
  return (
    <div ref={ref} className="card-ink overflow-hidden shadow-lift">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-border">
        <span className="w-2.5 h-2.5 rounded-full bg-ink-border" /><span className="w-2.5 h-2.5 rounded-full bg-ink-border" /><span className="w-2.5 h-2.5 rounded-full bg-ink-border" />
        <span className="ml-3 font-mono text-[11px] text-ink-muted">agent-runtime</span>
      </div>
      <div className="p-5 font-mono text-[12px] md:text-[13px] leading-7 min-h-[260px]">
        {lines.slice(0, n).map((l, i) => <div key={i} className={`${l.c} animate-fade-in`}>{l.t}</div>)}
        <span className="caret" />
      </div>
    </div>
  );
};

export default Terminal;
