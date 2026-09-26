import { Link } from "react-router-dom";
import { ArrowRight, Brain, Database, Workflow, ShieldCheck, Activity, Layers, Cpu, Users, Eye, Lock, Boxes, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import AgentNetwork from "@/components/site/AgentNetwork";
import Terminal from "@/components/site/Terminal";
import ScrollStory from "@/components/site/ScrollStory";
import Lifecycle from "@/components/site/Lifecycle";
import ProductCard from "@/components/site/ProductCard";
import BuildCTA from "@/components/site/BuildCTA";
import { products } from "@/data/products";

const flow = [
  { icon: Users, l: "Prompt", d: "A person states a goal in plain language." },
  { icon: Brain, l: "Reason", d: "The model plans steps and chooses tools." },
  { icon: Database, l: "Retrieve", d: "Grounded in your data with citations." },
  { icon: Workflow, l: "Act", d: "Agents call APIs, update systems, hand off." },
  { icon: ShieldCheck, l: "Verify", d: "Guardrails and humans approve outcomes." },
];

const ytFlow = products.find(p => p.slug === "youtube-content-automator")!.workflow;

const arch = [
  ["Experience", "Web apps · copilots · chat · APIs"],
  ["Orchestration", "Agents · planners · tool calling · MCP"],
  ["Intelligence", "LLM gateway · model routing · prompts"],
  ["Knowledge", "Vector DB · embeddings · hybrid search · rerank"],
  ["Trust", "Guardrails · access control · evaluation"],
  ["Platform", "Cloud · observability · cost controls"],
];

const tech = ["OpenAI", "Anthropic", "Gemini", "Llama", "Mistral", "LangGraph", "LlamaIndex", "MCP", "pgvector", "Pinecone", "Qdrant", "Python", "FastAPI", "Node.js", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Azure", "GCP"];

const why = [
  { icon: Layers, t: "Production First", d: "We design for real users, real data and real load — not demos." },
  { icon: Boxes, t: "Architecture Matters", d: "Clean systems that stay maintainable as models and needs change." },
  { icon: GitBranch, t: "Model Independent", d: "Route across providers. Never locked to a single model." },
  { icon: Users, t: "Human + AI", d: "Approval steps and control where judgment matters." },
  { icon: Eye, t: "Observability First", d: "Every call traced, evaluated and costed." },
  { icon: Lock, t: "Security by Design", d: "Guardrails, access control and data privacy from day one." },
];

const Home = () => (
  <>
    {/* HERO */}
    <section className="dark-section relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="absolute inset-0 grid-bg" />
      <div className="glow-orb w-[800px] h-[800px] -top-60 left-1/2 -translate-x-1/2 opacity-50" />
      <div className="container-x relative grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
        <div>
          <Reveal><p className="eyebrow mb-6">AI Product Engineering for the Agentic Era</p></Reveal>
          <Reveal delay={100}><h1 className="display">Building Intelligence <span className="text-gradient">Into Software.</span></h1></Reveal>
          <Reveal delay={200}><p className="lead mt-8 max-w-xl">We design AI products that understand, reason, collaborate and act — from an idea to production-ready systems built on LLMs, RAG and autonomous agents.</p></Reveal>
          <Reveal delay={300} className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="rounded-full h-12 px-7 text-base"><Link to="/products">Explore What We Build <ArrowRight className="ml-1" /></Link></Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full h-12 px-7 text-base border border-ink-border text-ink-foreground hover:bg-ink-3 hover:text-ink-foreground"><Link to="/contact">Start a Project</Link></Button>
          </Reveal>
        </div>
        <Reveal delay={200}><AgentNetwork /></Reveal>
      </div>
    </section>

    <ScrollStory />

    {/* PROMPT TO ACTION */}
    <Section>
      <SectionHeading eyebrow="Agentic AI" title="From Prompt to Action" lead="AI that moves work forward. Agents connected to the tools your business already uses." />
      <div className="grid md:grid-cols-5 gap-4 relative">
        {flow.map((f, i) => (
          <Reveal key={f.l} delay={i * 110} className="card-soft p-6 relative">
            <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center my-5"><f.icon className="w-5 h-5" /></div>
            <h3 className="font-semibold text-lg">{f.l}</h3>
            <p className="text-sm text-muted-foreground mt-2">{f.d}</p>
            {i < flow.length - 1 && <ArrowRight className="hidden md:block absolute -right-3.5 top-1/2 w-5 h-5 text-primary z-10 bg-background rounded-full" />}
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-14 max-w-3xl mx-auto"><Terminal /></Reveal>
    </Section>

    {/* LIFECYCLE */}
    <Section dark>
      <SectionHeading eyebrow="End-to-end lifecycle" title={<>From Idea to <span className="text-gradient">Intelligent Product</span></>} lead="You bring the problem. We handle every stage — strategy, architecture, engineering, evaluation and continuous evolution." />
      <Lifecycle />
      <Reveal className="mt-14"><Button asChild size="lg" className="rounded-full h-12 px-7"><Link to="/contact">Build a Product With CodeGraff <ArrowRight className="ml-1" /></Link></Button></Reveal>
    </Section>

    {/* PRODUCTS */}
    <Section soft>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <SectionHeading eyebrow="Products" title="Products Built for an AI-Native World" lead="Products designed around intelligence." className="mb-0 md:mb-0" />
        <Reveal><Button asChild variant="outline" className="rounded-full"><Link to="/products">All products <ArrowRight className="ml-1" /></Link></Button></Reveal>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        {products.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 100}><ProductCard p={p} /></Reveal>)}
      </div>
    </Section>

    {/* WORKFLOW DEMO */}
    <Section>
      <SectionHeading eyebrow="Workflow demonstration" title="YouTube Content Automator" lead="From trend discovery to publish-ready content — with a human approval step before anything goes live." />
      <div className="flex flex-wrap gap-2.5">
        {ytFlow.map((s, i) => (
          <Reveal key={s} delay={i * 60} className="flex items-center gap-2.5">
            <span className={`px-4 py-2.5 rounded-full border text-sm ${s === "Human approval" ? "border-warning bg-warning/10 text-foreground" : "border-border bg-card"}`}>
              <span className="font-mono text-[10px] text-primary mr-2">{String(i + 1).padStart(2, "0")}</span>{s}
            </span>
            {i < ytFlow.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
          </Reveal>
        ))}
      </div>
    </Section>

    {/* ARCHITECTURE */}
    <Section dark>
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <SectionHeading eyebrow="Enterprise AI architecture" title="Designed Beyond the Demo" lead="Prototype fast. Engineer for production. Every system we ship has layers for trust, observability and cost — not just a model call." className="mb-0" />
        <div className="space-y-2.5">
          {arch.map(([k, v], i) => (
            <Reveal key={k} delay={i * 90} className="card-ink px-5 py-4 flex items-center justify-between gap-4" >
              <div className="flex items-center gap-3"><Cpu className="w-4 h-4 text-primary" /><span className="font-medium">{k}</span></div>
              <span className="font-mono text-[11px] text-ink-muted text-right">{v}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>

    {/* TECH */}
    <section className="py-20 border-b border-border overflow-hidden">
      <div className="container-x mb-10"><p className="eyebrow">Technology ecosystem</p><p className="h3 mt-3 max-w-2xl">Model-independent. We choose the right stack for each problem.</p></div>
      <div className="flex w-max marquee gap-3">
        {[...tech, ...tech].map((t, i) => <span key={i} className="px-5 py-2.5 rounded-full bg-soft font-mono text-sm text-muted-foreground whitespace-nowrap">{t}</span>)}
      </div>
    </section>

    {/* WHY */}
    <Section>
      <SectionHeading eyebrow="Why CodeGraff" title="Engineering AI Beyond the Prototype" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {why.map((w, i) => (
          <Reveal key={w.t} delay={(i % 3) * 100} className="bg-background p-8 group hover:bg-soft transition-colors">
            <w.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg mt-6">{w.t}</h3>
            <p className="text-muted-foreground mt-2">{w.d}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex items-center gap-2 text-sm text-muted-foreground font-mono"><Activity className="w-4 h-4 text-primary" />Built with enterprise engineering principles.</Reveal>
    </Section>

    <BuildCTA />
  </>
);

export default Home;
