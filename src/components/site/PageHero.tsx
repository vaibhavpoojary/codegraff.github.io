import type { ReactNode } from "react";
import Reveal from "./Reveal";

const PageHero = ({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead?: ReactNode; children?: ReactNode }) => (
  <section className="dark-section relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28">
    <div className="absolute inset-0 grid-bg" />
    <div className="glow-orb w-[600px] h-[600px] -top-40 right-0 opacity-40" />
    <div className="container-x relative max-w-5xl">
      <Reveal><p className="eyebrow mb-6">{eyebrow}</p></Reveal>
      <Reveal delay={100}><h1 className="display">{title}</h1></Reveal>
      {lead && <Reveal delay={200}><p className="lead mt-8 max-w-2xl">{lead}</p></Reveal>}
      {children && <Reveal delay={300} className="mt-10">{children}</Reveal>}
    </div>
  </section>
);

export default PageHero;
