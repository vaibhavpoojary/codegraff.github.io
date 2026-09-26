import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const lines = [
  "Software is changing.",
  "First, software responded.",
  "Then, software learned.",
  "Now, software can reason.",
  "The next generation of software will act.",
  "We build that generation at CodeGraff.",
];

const ScrollStory = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(Math.max(-r.top / (r.height - window.innerHeight), 0), 0.999);
      setActive(Math.floor(p * lines.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section ref={ref} className="dark-section relative" style={{ height: `${lines.length * 70}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] -right-40 top-1/4 opacity-40" />
        <div className="container-x relative">
          <p className="eyebrow mb-8">The shift</p>
          <div className="space-y-3 md:space-y-4">
            {lines.map((l, i) => (
              <p key={l} className={cn("h2 transition-all duration-700", i === active ? "opacity-100 translate-x-0" : i < active ? "opacity-25" : "opacity-10 translate-x-4", i === lines.length - 1 && i === active && "text-gradient")}>{l}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStory;
