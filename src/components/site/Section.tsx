import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export const Section = ({ children, dark, soft, className, id }: { children: ReactNode; dark?: boolean; soft?: boolean; className?: string; id?: string }) => (
  <section id={id} className={cn("section-y relative overflow-hidden", dark && "dark-section", soft && "bg-soft", className)}>
    <div className="container-x relative">{children}</div>
  </section>
);

export const SectionHeading = ({ eyebrow, title, lead, center, className }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; center?: boolean; className?: string }) => (
  <Reveal className={cn("max-w-3xl mb-14 md:mb-20", center && "mx-auto text-center", className)}>
    {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
    <h2 className="h2">{title}</h2>
    {lead && <p className="lead mt-6">{lead}</p>}
  </Reveal>
);

export const StatusBadge = ({ status }: { status: string }) => {
  const tone = status === "LIVE" ? "bg-success/15 text-success" : status === "BETA" ? "bg-primary/15 text-primary" : status === "RESEARCH" ? "bg-accent/15 text-accent" : "bg-warning/15 text-warning";
  return <span className={cn("font-mono text-[10px] tracking-[0.14em] px-2.5 py-1 rounded-full inline-flex items-center gap-1.5", tone)}><span className="w-1.5 h-1.5 rounded-full bg-current pulse-dot" />{status}</span>;
};
