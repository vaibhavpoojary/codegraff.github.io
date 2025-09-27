import { Bot, Brain, Zap, Globe, Code, Headphones } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

const Products = () => {
  const products = [
    {
      icon: Bot,
      title: "LLM Chatbots",
      description: "Custom enterprise AI assistants powered by large language models. Perfect for customer support, sales automation, and internal knowledge management.",
      features: [
        "GPT-4 powered conversations", 
        "Custom training on company data",
        "Multi-channel deployment (web, mobile, Slack)",
        "Real-time learning and improvement",
        "Advanced sentiment analysis",
        "Multi-language support"
      ]
    },
    {
      icon: Brain,
      title: "RAG Solutions", 
      description: "Retrieval-Augmented Generation systems that combine your knowledge base with AI for accurate, contextual, and up-to-date responses.",
      features: [
        "Vector database integration",
        "Real-time document ingestion",
        "Semantic search capabilities", 
        "Citation and source tracking",
        "Enterprise-grade security",
        "API-first architecture"
      ]
    },
    {
      icon: Zap,
      title: "Agentic AI Automation",
      description: "Multi-agent AI architectures that handle complex workflows with intelligent decision-making, task routing, and process optimization.",
      features: [
        "Multi-agent coordination",
        "Workflow orchestration",
        "Smart task routing",
        "Real-time monitoring",
        "Performance analytics",
        "Scalable cloud deployment"
      ]
    },
    {
      icon: Globe,
      title: "Web & App Development",
      description: "Modern, scalable web applications and SaaS platforms built with React, Next.js, and cloud-native technologies for optimal performance.",
      features: [
        "React & Next.js development",
        "Cloud-native architecture",
        "API development & integration",
        "Database design & optimization",
        "DevOps & CI/CD pipelines",
        "Performance monitoring"
      ]
    },
    {
      icon: Headphones,
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities, plan implementation, and maximize ROI from artificial intelligence investments.",
      features: [
        "AI strategy & roadmap",
        "Technology assessment",
        "ROI analysis & planning",
        "Team training & workshops",
        "Implementation support",
        "Ongoing optimization"
      ]
    },
    {
      icon: Code,
      title: "Custom AI Solutions",
      description: "Bespoke AI applications tailored to your specific business needs, from computer vision to natural language processing and beyond.",
      features: [
        "Computer vision systems",
        "Natural language processing",
        "Predictive analytics",
        "Recommendation engines",
        "Fraud detection systems",
        "Process automation"
      ]
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Hero
        title="Intelligent AI Products"
        subtitle="Discover our comprehensive suite of AI solutions designed to transform your business operations and drive innovation."
        primaryCTA={{ text: "Get Started", href: "/contact" }}
        secondaryCTA={{ text: "Schedule Demo", href: "/contact" }}
        showPattern={true}
      />

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">
              Our Product Suite
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              From intelligent chatbots to complex AI automation, we offer end-to-end solutions 
              that integrate seamlessly with your existing infrastructure.
            </p>
          </div>

          <div className="grid-responsive max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <ServiceCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-foreground mb-8">
              Cutting-Edge Technology Stack
            </h2>
            <p className="body-large text-muted-foreground mb-12">
              We leverage the latest AI frameworks and cloud technologies to deliver 
              robust, scalable solutions that grow with your business.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
              {[
                "OpenAI GPT-4", "LangChain", "Pinecone", "AWS", 
                "React", "Next.js", "Python", "FastAPI",
                "Docker", "Kubernetes", "PostgreSQL", "Redis"
              ].map((tech, index) => (
                <div key={index} className="bg-background/50 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-border hover:border-primary/50 transition-all duration-200 hover:scale-105">
                  <span className="text-xs md:text-sm font-medium text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;