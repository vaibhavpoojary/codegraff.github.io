import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import Reveal from "@/components/site/Reveal";
import BuildCTA from "@/components/site/BuildCTA";

const values = [
  ["Craft", "We sweat architecture, interfaces and details."],
  ["Honesty", "No fake claims. We say what's live and what's research."],
  ["Curiosity", "We explore what software becomes with intelligence inside."],
  ["Ownership", "From idea to production and beyond."],
];

const About = () => (
  <>
    <PageHero eyebrow="About CodeGraff" title={<>We Build <span className="text-gradient">What's Next.</span></>} lead="CodeGraff is an AI product engineering company. We design and build intelligent products using LLMs, RAG, autonomous agents, modern software engineering and enterprise-grade architecture." />
    <Section>
      <div className="grid md:grid-cols-2 gap-5">
        <Reveal className="card-soft p-10">
          <p className="eyebrow">Mission</p>
          <p className="h3 mt-4">Transform ambitious ideas into intelligent products.</p>
        </Reveal>
        <Reveal delay={100} className="card-soft p-10 bg-foreground text-background border-foreground">
          <p className="eyebrow">Vision</p>
          <p className="h3 mt-4">Build technology where AI becomes a fundamental layer of every digital product.</p>
        </Reveal>
      </div>
    </Section>
    <Section soft>
      <SectionHeading eyebrow="How we work" title="Principles, not slogans." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map(([t, d], i) => (
          <Reveal key={t} delay={i * 90} className="bg-background rounded-2xl border border-border p-7">
            <span className="font-mono text-[11px] text-primary">0{i + 1}</span>
            <p className="font-semibold text-lg mt-3">{t}</p>
            <p className="text-muted-foreground mt-2 text-sm">{d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
    <BuildCTA />
  </>
);

export default About;
