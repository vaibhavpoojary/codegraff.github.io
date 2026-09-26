export type ProductStatus = "LIVE" | "BETA" | "IN DEVELOPMENT" | "RESEARCH";
export type MockKind = "rag" | "social" | "advisor" | "youtube" | "script" | "agents";

export interface Product {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  mock: MockKind;
  capabilities: string[];
  workflow: string[];
}

export const products: Product[] = [
  {
    slug: "enterprise-rag",
    name: "Enterprise RAG",
    short: "Knowledge intelligence",
    tagline: "Turn enterprise knowledge into actionable intelligence.",
    description: "An enterprise knowledge intelligence platform that lets teams converse with documents, databases and internal systems — with citations, access control and evaluation built in.",
    status: "BETA",
    mock: "rag",
    capabilities: ["Chat with enterprise documents", "PDF knowledge retrieval", "Structured and unstructured data", "Semantic search", "Vector retrieval", "Hybrid search", "Reranking", "Source citations", "Role-aware access", "Multi-source knowledge", "Conversational memory", "Enterprise APIs", "Knowledge assistant", "Evaluation and observability"],
    workflow: ["Ingest sources", "Chunk & embed", "Index vectors", "Hybrid retrieve", "Rerank", "Generate with citations", "Evaluate"],
  },
  {
    slug: "social-ai-assistant",
    name: "Social AI Assistant",
    short: "AI OS for social",
    tagline: "Your AI operating system for social media.",
    description: "An intelligent assistant for creators, brands and businesses — analytics, audience intelligence and content planning in one conversational workspace.",
    status: "BETA",
    mock: "social",
    capabilities: ["Social media analytics", "Creator profile analysis", "Engagement analysis", "Content recommendations", "AI chat assistant", "Marketing insights", "Content planning", "Audience intelligence", "SEO recommendations", "Platform-specific suggestions", "AI tools", "Automated workflows", "Multi-workspace architecture"],
    workflow: ["Connect accounts", "Analyze audience", "Surface insights", "Plan content", "Automate"],
  },
  {
    slug: "social-advisor",
    name: "Social Advisor",
    short: "AI content strategist",
    tagline: "AI strategy for smarter content decisions.",
    description: "An AI-powered strategist that studies accounts, competitors and trends to recommend what to post, when, and how.",
    status: "IN DEVELOPMENT",
    mock: "advisor",
    capabilities: ["Analyze social media accounts", "Detect content opportunities", "Identify trends", "Suggest topics", "Improve engagement", "Recommend posting strategies", "Analyze competitors", "Recommend hooks", "Recommend captions", "Generate hashtag strategies", "Generate content plans", "AI-driven growth recommendations"],
    workflow: ["Audit account", "Scan competitors", "Detect trends", "Recommend strategy", "Generate plan"],
  },
  {
    slug: "youtube-content-automator",
    name: "YouTube Content Automator",
    short: "Content automation",
    tagline: "From trend discovery to publish-ready content.",
    description: "An agentic pipeline that discovers trends, researches topics, writes scripts and prepares SEO packages — with a human approval step before anything is published.",
    status: "IN DEVELOPMENT",
    mock: "youtube",
    capabilities: ["Topic discovery", "Trend intelligence", "Research automation", "Script writing", "SEO generation", "Description generation", "Title suggestions", "Thumbnail ideation", "Content calendar", "Automation", "Analytics", "Human approval workflows"],
    workflow: ["Discover trend", "Research topic", "Collect evidence", "Analyze competitors", "Generate idea", "Generate script", "Create SEO package", "Thumbnail concept", "Prepare content", "Human approval", "Publish", "Monitor performance", "Learn"],
  },
  {
    slug: "ai-script-writer",
    name: "AI Script Writer",
    short: "Stories that perform",
    tagline: "Ideas transformed into stories people want to watch.",
    description: "An AI writing platform for short-form and long-form creators, with platform-aware formatting, tone control and SEO-aware writing.",
    status: "BETA",
    mock: "script",
    capabilities: ["YouTube scripts", "Instagram Reel scripts", "Shorts", "Hooks", "Storytelling", "Technical content", "Educational content", "Marketing content", "Multiple tones", "Platform-aware formatting", "SEO-aware writing"],
    workflow: ["Idea", "Angle & hook", "Structure", "Draft", "Tone & format", "Polish"],
  },
  {
    slug: "agentic-automation-platform",
    name: "Agentic Automation Platform",
    short: "Digital workers",
    tagline: "Build digital workers that reason, collaborate and act.",
    description: "An enterprise platform for building multi-agent workflows with tool calling, memory, guardrails, checkpointing and human-in-the-loop control.",
    status: "IN DEVELOPMENT",
    mock: "agents",
    capabilities: ["Multi-agent orchestration", "LLM agents", "Tool calling", "MCP tools", "Human-in-the-loop", "Agent handoffs", "Parallel agents", "Sequential workflows", "State management", "Persistent memory", "Checkpointing", "Observability", "Guardrails", "Agent evaluation", "API connectivity", "Enterprise integration"],
    workflow: ["Define goal", "Plan", "Delegate to agents", "Call tools", "Checkpoint", "Human review", "Act", "Observe"],
  },
];

export const labs: { name: string; status: ProductStatus }[] = [
  { name: "AI Research Assistant", status: "IN DEVELOPMENT" },
  { name: "Personal AI Operating System", status: "RESEARCH" },
  { name: "Enterprise AI Copilot", status: "IN DEVELOPMENT" },
  { name: "Autonomous Customer Support", status: "RESEARCH" },
  { name: "AI Sales Assistant", status: "RESEARCH" },
  { name: "AI Marketing Agent", status: "IN DEVELOPMENT" },
  { name: "AI Knowledge Worker", status: "RESEARCH" },
  { name: "Intelligent Document Processing", status: "IN DEVELOPMENT" },
  { name: "Voice AI Agents", status: "RESEARCH" },
  { name: "Multimodal Assistants", status: "RESEARCH" },
  { name: "AI Developer Tools", status: "RESEARCH" },
  { name: "AI Business Automation", status: "IN DEVELOPMENT" },
  { name: "AI Analytics Assistant", status: "RESEARCH" },
];

export const lifecycle = [
  { step: "Discover", text: "Understand the problem, users, data and the outcome that matters." },
  { step: "Define", text: "Shape scope, success metrics and a product strategy worth building." },
  { step: "Architect", text: "Design the AI architecture — models, retrieval, agents and data flow." },
  { step: "Design", text: "Craft UX and UI for interfaces where humans and AI work together." },
  { step: "Build", text: "Engineer the software: frontend, backend, APIs and integrations." },
  { step: "Ground", text: "Connect LLMs to your knowledge with RAG, embeddings and reranking." },
  { step: "Orchestrate", text: "Build agents that plan, call tools, hand off and remember." },
  { step: "Evaluate", text: "Measure quality with test sets, evals and regression checks." },
  { step: "Secure", text: "Apply guardrails, access control and responsible AI practices." },
  { step: "Deploy", text: "Ship to cloud infrastructure built for reliability and scale." },
  { step: "Observe", text: "Trace every call, cost and outcome in production." },
  { step: "Improve", text: "Optimize, retrain prompts, route models and keep evolving." },
];
