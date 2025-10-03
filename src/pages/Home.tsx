import { Bot, Zap, Globe, Users, ArrowRight, CheckCircle, Brain, Code, Database, Sparkles, MessageSquare, Workflow } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aiNeuralNetwork from "@/assets/ai-neural-network.jpg";
import softwareDev from "@/assets/software-development.jpg";
import aiChatbot from "@/assets/ai-chatbot.jpg";
import enterpriseAuto from "@/assets/enterprise-automation.jpg";

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Development & Machine Learning",
      description: "We build intelligent systems that learn, adapt, and scale. From custom neural networks to production-ready AI models, we transform complex data into actionable insights and automated decision-making systems.",
      features: [
        "Custom AI model development and fine-tuning",
        "Computer vision and image recognition",
        "Natural Language Processing (NLP) solutions",
        "Predictive analytics and forecasting",
        "Deep learning architectures",
        "Model deployment and MLOps"
      ],
      details: "Our AI development services leverage cutting-edge machine learning frameworks including TensorFlow, PyTorch, and scikit-learn. We specialize in creating bespoke AI solutions that solve real business problems, from recommendation engines to anomaly detection systems."
    },
    {
      icon: MessageSquare,
      title: "Conversational AI & LLM Chatbots",
      description: "Enterprise-grade conversational AI powered by state-of-the-art large language models. We create intelligent chatbots that understand context, maintain conversation flow, and deliver human-like interactions at scale.",
      features: [
        "GPT-4 and Claude-powered assistants",
        "Multi-language support (100+ languages)",
        "Custom training on your company data",
        "Seamless CRM and helpdesk integration",
        "Voice-enabled AI assistants",
        "24/7 automated customer support"
      ],
      details: "Our LLM chatbots use advanced prompt engineering and RAG architectures to provide accurate, contextual responses. Perfect for customer service, sales automation, internal knowledge management, and virtual assistance."
    },
    {
      icon: Database,
      title: "RAG Systems & Knowledge Management",
      description: "Retrieval-Augmented Generation (RAG) systems that combine the power of AI with your organization's knowledge base. Get accurate, source-cited answers from your documents, databases, and internal resources.",
      features: [
        "Enterprise document processing",
        "Vector database integration",
        "Semantic search capabilities",
        "Real-time knowledge retrieval",
        "Source attribution and citations",
        "Multi-format support (PDF, CSV, SQL, APIs)"
      ],
      details: "Our RAG solutions use advanced embedding models and vector databases like Pinecone and Weaviate to create intelligent knowledge systems that understand and retrieve relevant information with unprecedented accuracy."
    },
    {
      icon: Workflow,
      title: "Agentic AI & Automation",
      description: "Multi-agent AI systems that autonomously execute complex workflows. Our agentic AI solutions make intelligent decisions, coordinate multiple tasks, and automate entire business processes without human intervention.",
      features: [
        "Autonomous workflow execution",
        "Multi-agent orchestration",
        "Intelligent task routing and prioritization",
        "Real-time decision making",
        "API integration and data synchronization",
        "Process mining and optimization"
      ],
      details: "Built on frameworks like LangChain and AutoGPT, our agentic systems can handle everything from automated email responses to complex multi-step business processes, reducing operational costs by up to 70%."
    },
    {
      icon: Code,
      title: "Full-Stack Software Development",
      description: "Modern, scalable web and mobile applications built with industry-leading technologies. From MVPs to enterprise platforms, we deliver beautiful, performant software that users love and businesses rely on.",
      features: [
        "React, Next.js, and TypeScript development",
        "RESTful and GraphQL API design",
        "Cloud infrastructure (AWS, Azure, GCP)",
        "Progressive Web Apps (PWA)",
        "Mobile app development (React Native)",
        "CI/CD pipelines and DevOps"
      ],
      details: "We build full-stack applications using modern frameworks and best practices. Our solutions are scalable, secure, and optimized for performance, ensuring your product can grow from startup to enterprise without technical debt."
    },
    {
      icon: Sparkles,
      title: "AI Consulting & Strategy",
      description: "Strategic guidance to help you navigate the AI landscape. We assess your business needs, identify AI opportunities, and create actionable roadmaps for successful AI adoption and digital transformation.",
      features: [
        "AI readiness assessment",
        "Custom AI strategy development",
        "Technology stack selection",
        "ROI analysis and cost modeling",
        "Team training and workshops",
        "Proof-of-concept development"
      ],
      details: "Our consulting services help organizations understand where and how AI can drive value. We provide hands-on guidance from initial strategy through implementation, ensuring your AI initiatives deliver measurable business impact."
    }
  ];

  const whyChooseUs = [
    "Expert team with 5+ years in AI/ML and software engineering",
    "50+ successful projects delivered across industries",
    "End-to-end solutions from concept to deployment and beyond",
    "24/7 technical support and proactive maintenance",
    "Scalable architecture designed for exponential growth",
    "Enterprise-grade security and compliance (SOC 2, GDPR)",
    "Agile methodology with bi-weekly sprint deliveries",
    "Transparent pricing with no hidden costs"
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: CheckCircle },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "5+", label: "Years of AI Expertise", icon: Brain },
    { number: "24/7", label: "Support Available", icon: Zap }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Hero
        title="Crafting the Future with Intelligent AI Solutions"
        subtitle="From enterprise AI automation to modern web solutions — we build intelligent, scalable, and beautiful software."
        primaryCTA={{ text: "Explore Products", href: "/products" }}
        secondaryCTA={{ text: "Get in Touch", href: "/contact" }}
      />

      {/* Stats Section */}
      <section className="section-padding bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary-foreground)/0.3)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary-foreground)/0.3)_0%,transparent_50%)]" />
        </div>
        <div className="container-padding relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-primary-foreground opacity-80" />
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-primary-foreground/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
              <Sparkles size={16} />
              <span>Our Services</span>
            </div>
            <h2 className="heading-xl text-foreground mb-6">
              Comprehensive AI & Software Solutions
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              From intelligent AI systems to modern web applications, we deliver end-to-end technology solutions 
              that drive innovation and accelerate your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="heading-xl text-foreground mb-6">
                Powered by Cutting-Edge Technology
              </h2>
              <p className="body-large text-muted-foreground max-w-3xl mx-auto">
                We leverage the latest advancements in AI and software engineering to build solutions 
                that are robust, scalable, and future-proof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI Tech */}
              <div className="group relative overflow-hidden rounded-2xl animate-fade-up" style={{ animationDelay: '0ms' }}>
                <img 
                  src={aiNeuralNetwork} 
                  alt="AI and Machine Learning Technology" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Brain className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">AI & Machine Learning</h3>
                  <p className="text-muted-foreground">
                    Neural networks, deep learning, and advanced AI models that learn and adapt.
                  </p>
                </div>
              </div>

              {/* Software Development */}
              <div className="group relative overflow-hidden rounded-2xl animate-fade-up" style={{ animationDelay: '100ms' }}>
                <img 
                  src={softwareDev} 
                  alt="Modern Software Development" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Code className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Modern Development</h3>
                  <p className="text-muted-foreground">
                    React, Next.js, TypeScript, and cloud-native architectures.
                  </p>
                </div>
              </div>

              {/* Conversational AI */}
              <div className="group relative overflow-hidden rounded-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
                <img 
                  src={aiChatbot} 
                  alt="Conversational AI and Chatbots" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <MessageSquare className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Conversational AI</h3>
                  <p className="text-muted-foreground">
                    Intelligent chatbots and virtual assistants powered by LLMs.
                  </p>
                </div>
              </div>

              {/* Enterprise Automation */}
              <div className="group relative overflow-hidden rounded-2xl animate-fade-up" style={{ animationDelay: '300ms' }}>
                <img 
                  src={enterpriseAuto} 
                  alt="Enterprise Automation Solutions" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <Workflow className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise Automation</h3>
                  <p className="text-muted-foreground">
                    Agentic AI systems that automate complex business workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-up">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
                  <CheckCircle size={16} />
                  <span>Why Choose Us</span>
                </div>
                <h2 className="heading-xl text-foreground mb-8">
                  Your Trusted Partner in AI Innovation
                </h2>
                <p className="body-large text-muted-foreground mb-8">
                  We don't just build software — we craft intelligent, enterprise-grade solutions that transform businesses. 
                  Our team combines deep AI expertise with modern development practices to deliver measurable results 
                  and exceptional user experiences.
                </p>
                
                <div className="space-y-4 mb-8">
                  {whyChooseUs.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 animate-fade-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="btn-gradient btn-enhanced">
                    <Link to="/about" className="flex items-center space-x-2">
                      <span>Learn More About Us</span>
                      <ArrowRight size={20} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/careers">View Open Positions</Link>
                  </Button>
                </div>
              </div>

              <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="relative aspect-square bg-gradient-hero rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 animate-pulse" />
                  <div className="relative h-full flex flex-col items-center justify-center text-center text-primary-foreground p-8">
                    <div className="mb-8 relative">
                      <div className="absolute inset-0 bg-primary-foreground/10 rounded-full blur-3xl" />
                      <Bot size={120} className="relative mx-auto opacity-90 animate-float" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">AI-Powered Innovation</h3>
                    <p className="text-lg text-primary-foreground/80 max-w-sm">
                      Building the future with intelligent automation and cutting-edge technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-padding text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let's discuss how our AI solutions can streamline your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;