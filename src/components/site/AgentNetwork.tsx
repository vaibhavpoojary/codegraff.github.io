const nodes = [
  { x: 50, y: 50, l: "Orchestrator", main: true },
  { x: 15, y: 22, l: "Planner" }, { x: 85, y: 20, l: "Retriever" },
  { x: 10, y: 72, l: "Memory" }, { x: 88, y: 76, l: "Tools" },
  { x: 50, y: 8, l: "LLM" }, { x: 50, y: 92, l: "Guardrails" },
];

const AgentNetwork = () => (
  <div className="relative w-full aspect-square max-w-[520px] mx-auto">
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
      {nodes.slice(1).map((n, i) => (
        <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="hsl(var(--primary))" strokeOpacity="0.5" strokeWidth="0.3" className="flow-line" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(var(--ink-border))" strokeWidth="0.2" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--ink-border))" strokeWidth="0.2" strokeDasharray="1 2" />
    </svg>
    {nodes.map((n, i) => (
      <div key={n.l} className="absolute -translate-x-1/2 -translate-y-1/2 float-slow" style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * 0.6}s` }}>
        <div className={n.main
          ? "px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-mono text-xs shadow-glow"
          : "px-3 py-1.5 rounded-lg bg-ink-2 border border-ink-border text-ink-foreground font-mono text-[11px] flex items-center gap-1.5"}>
          {!n.main && <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" style={{ animationDelay: `${i * 0.3}s` }} />}
          {n.l}
        </div>
      </div>
    ))}
  </div>
);

export default AgentNetwork;
