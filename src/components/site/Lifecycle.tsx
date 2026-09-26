import { useEffect, useState } from "react";
import { lifecycle } from "@/data/products";
import { cn } from "@/lib/utils";
import { useInView } from "./Reveal";

const Lifecycle = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  useEffect(() => {
    if (!inView || paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % lifecycle.length), 2200);
    return () => clearInterval(t);
  }, [inView, paused]);
  const cur = lifecycle[active];
  return (
    <div ref={ref} className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start" onMouseLeave={() => setPaused(false)}>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
        {lifecycle.map((s, i) => (
          <button key={s.step} onMouseEnter={() => { setPaused(true); setActive(i); }} onClick={() => { setPaused(true); setActive(i); }}
            className={cn("relative text-left rounded-xl border p-3 md:p-4 transition-all duration-500",
              i === active ? "border-primary bg-primary/10 shadow-glow" : i < active ? "border-ink-border bg-ink-2" : "border-ink-border bg-transparent hover:bg-ink-2")}>
            <span className="font-mono text-[10px] text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
            <p className={cn("font-medium text-sm md:text-base mt-1", i === active ? "text-ink-foreground" : "text-ink-muted")}>{s.step}</p>
            {i <= active && <span className="absolute bottom-0 left-3 right-3 h-px bg-primary/60" />}
          </button>
        ))}
      </div>
      <div className="card-ink p-8 md:p-10 lg:sticky lg:top-28 min-h-[260px]">
        <p className="font-mono text-xs text-primary">STAGE {String(active + 1).padStart(2, "0")} / 12</p>
        <h3 key={cur.step} className="h2 mt-4 animate-fade-in">{cur.step}</h3>
        <p key={cur.text} className="lead mt-4 animate-fade-in">{cur.text}</p>
        <div className="mt-8 h-1 rounded-full bg-ink-border overflow-hidden">
          <div className="h-full bg-primary transition-all duration-700" style={{ width: `${((active + 1) / lifecycle.length) * 100}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Lifecycle;
