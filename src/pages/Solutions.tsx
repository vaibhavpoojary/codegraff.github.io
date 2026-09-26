import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import Reveal from "@/components/site/Reveal";
import BuildCTA from "@/components/site/BuildCTA";

const solutions = [
  { t: "Enterprise Knowledge Intelligence", p: "Knowledge is scattered across drives, wikis and tickets.", s: "A RAG assistant that answers with citations and respects permissions.", a: "Connectors → embeddings → hybrid search → rerank → LLM", u: ["Policy Q&A", "Sales enablement", "Onboarding"], i: ["SharePoint", "Confluence", "Google Drive"] },
  { t: "AI Customer Support", p: "Support queues grow faster than teams.", s: "Grounded support agents that resolve, escalate and learn.", a: "Knowledge base + ticket tools + human handoff", u: ["Tier-1 resolution", "Agent assist", "Triage"], i: ["Zendesk", "Intercom", "Freshdesk"] },
  { t: "AI Workflow Automation", p: "Manual, repetitive multi-step processes.", s: "Agents that plan and execute workflows with approval gates.", a: "Planner → tool-calling agents → checkpoints", u: ["Ops automation", "Reporting", "Data entry"], i: ["Slack", "Jira", "REST APIs"] },
  { t: "AI Content Automation", p: "Content production is slow and inconsistent.", s: "Pipelines from research to publish-ready drafts.", a: "Trend signals → research → generation → review", u: ["Video scripts", "Blogs", "SEO packages"], i: ["YouTube", "CMS", "Notion"] },
  { t: "AI Marketing Intelligence", p: "Too much data, too few decisions.", s: "Assistants that turn analytics into strategy.", a: "Analytics APIs → analysis agents → recommendations", u: ["Campaign insights", "Audience analysis", "Competitor tracking"], i: ["Meta", "Google Analytics", "HubSpot"] },
  { t: "Enterprise Copilots", p: "Employees switch between dozens of tools.", s: "A copilot embedded in the tools they already use.", a: "LLM gateway + RAG + actions via MCP", u: ["Drafting", "Search", "Task execution"], i: ["Microsoft 365", "Google Workspace", "Slack"] },
  { t: "Internal Knowledge Assistants", p: "Teams repeatedly ask the same questions.", s: "Department-specific assistants with memory.", a: "Scoped knowledge + role-aware retrieval", u: ["HR", "IT helpdesk", "Engineering docs"], i: ["Notion", "GitHub", "Confluence"] },
  { t: "AI Analytics", p: "Insight requires SQL and analysts.", s: "Ask questions of your data in plain language.", a: "Text-to-SQL + semantic layer + charts", u: ["Business reporting", "Ad-hoc analysis", "KPIs"], i: ["PostgreSQL", "BigQuery", "Snowflake"] },
  { t: "Document Intelligence", p: "Contracts, invoices and forms processed by hand.", s: "Extraction, classification and review of documents.", a: "OCR + multimodal LLM + validation rules", u: ["Invoices", "Contracts", "KYC"], i: ["S3", "ERP", "DMS"] },
  { t: "Business Process Automation", p: "Legacy processes slow teams down.", s: "Modern software with AI steps where they add value.", a: "Workflow engine + AI decision nodes", u: ["Approvals", "Procurement", "Onboarding"], i: ["ERP", "CRM", "Email"] },
  { t: "Developer Productivity", p: "Engineers lose time on repetitive work.", s: "AI tools for code, docs and reviews.", a: "Repo indexing + code agents + CI hooks", u: ["Code search", "PR summaries", "Docs generation"], i: ["GitHub", "GitLab", "Jira"] },
  { t: "Custom Agentic Systems", p: "Your problem doesn't fit an off-the-shelf tool.", s: "Bespoke multi-agent systems engineered for production.", a: "Multi-agent orchestration + memory + guardrails", u: ["Research agents", "Operations", "Anything ambitious"], i: ["Your stack"] },
];

const Solutions = () => (
  <>
    <PageHero eyebrow="Solutions" title={<>From knowledge <span className="text-gradient">to action.</span></>} lead="Solutions organized around business outcomes — not technologies." />
    <Section>
      <div className="grid md:grid-cols-2 gap-5">
        {solutions.map((s, i) => (
          <Reveal key={s.t} delay={(i % 2) * 100} className="card-soft p-7 md:p-8 flex flex-col">
            <span className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="h3 mt-2">{s.t}</h3>
            <dl className="mt-6 space-y-4 text-sm flex-1">
              <div><dt className="eyebrow text-muted-foreground mb-1">Problem</dt><dd>{s.p}</dd></div>
              <div><dt className="eyebrow text-muted-foreground mb-1">Solution</dt><dd>{s.s}</dd></div>
              <div><dt className="eyebrow text-muted-foreground mb-1">Architecture</dt><dd className="font-mono text-xs bg-soft rounded-lg px-3 py-2">{s.a}</dd></div>
              <div><dt className="eyebrow text-muted-foreground mb-2">Use cases</dt><dd className="flex flex-wrap gap-1.5">{s.u.map(u => <span key={u} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs">{u}</span>)}</dd></div>
              <div><dt className="eyebrow text-muted-foreground mb-2">Integrations</dt><dd className="text-muted-foreground">{s.i.join(" · ")}</dd></div>
            </dl>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">Discuss this solution <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
        ))}
      </div>
    </Section>
    <BuildCTA />
  </>
);

export default Solutions;
