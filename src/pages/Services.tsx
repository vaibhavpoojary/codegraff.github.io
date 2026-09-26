import { Rocket, Bot, Database, Sparkles, Compass, Code2, Globe, Plug, RefreshCw } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import Reveal from "@/components/site/Reveal";
import BuildCTA from "@/components/site/BuildCTA";

const services = [
  { icon: Rocket, t: "AI Product Engineering", s: "Idea to production.", d: ["Product strategy", "AI architecture", "UX / UI", "Build, evaluate, deploy"] },
  { icon: Bot, t: "Agentic AI Development", s: "Design autonomous and semi-autonomous intelligent workflows.", d: ["Multi-agent systems", "Tool-using agents", "Human-in-the-loop", "Agent memory"] },
  { icon: Database, t: "RAG Engineering", s: "Build enterprise-grade knowledge retrieval.", d: ["Hybrid search", "Reranking", "Multimodal RAG", "Evaluation"] },
  { icon: Sparkles, t: "Generative AI Development", s: "LLM applications, assistants and copilots.", d: ["LLM chatbots", "NLP chatbots", "Copilots", "Prompt management"] },
  { icon: Compass, t: "AI Consulting", s: "Strategy, architecture and AI transformation.", d: ["Opportunity mapping", "Architecture reviews", "Responsible AI", "Cost optimization"] },
  { icon: Code2, t: "Custom Software Engineering", s: "Enterprise web platforms and SaaS applications.", d: ["SaaS", "Backend platforms", "Microservices", "Dashboards"] },
  { icon: Globe, t: "Web Development", s: "Modern performant websites and applications.", d: ["Marketing sites", "Web apps", "Portals", "Mobile-ready"] },
  { icon: Plug, t: "AI Integration", s: "Connect AI to existing databases, APIs and workflows.", d: ["MCP integrations", "API integrations", "LLM gateways", "Model routing"] },
  { icon: RefreshCw, t: "AI Modernization", s: "Add AI capabilities to existing products.", d: ["AI features", "Search upgrades", "Automation", "Observability"] },
];

const Services = () => (
  <>
    <PageHero eyebrow="Services" title={<>We don't simply <span className="text-gradient">write code.</span></>} lead="Discover → Design → Build → Deploy → Scale → Evolve. End-to-end AI and software product development." />
    <Section>
      <SectionHeading eyebrow="What we do" title="Premium engineering, end to end." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.t} delay={(i % 3) * 100} className="card-soft p-8 group">
            <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500"><s.icon className="w-5 h-5" /></div>
            <h3 className="h3 mt-6">{s.t}</h3>
            <p className="text-muted-foreground mt-2">{s.s}</p>
            <ul className="mt-6 pt-6 border-t border-border space-y-2 text-sm">
              {s.d.map(x => <li key={x} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" />{x}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
    <BuildCTA />
  </>
);

export default Services;
