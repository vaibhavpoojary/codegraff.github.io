import { Bot, Zap, Globe, Users, ArrowRight, CheckCircle } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: Bot,
      title: "LLM Chatbots",
      description: "Custom enterprise AI assistants powered by large language models for customer support, sales, and internal operations.",
      features: ["24/7 intelligent responses", "Multi-language support", "Custom training on your data", "Seamless integrations"]
    },
    {
      icon: Zap,
      title: "Agentic AI Solutions", 
      description: "Multi-agent AI architectures that automate complex business workflows with intelligent decision-making capabilities.",
      features: ["Workflow automation", "Smart routing", "Real-time analytics", "Scalable architecture"]
    },
    {
      icon: Globe,
      title: "RAG Systems",
      description: "Retrieval-Augmented Generation solutions that combine your knowledge base with AI for accurate, contextual responses.",
      features: ["Knowledge base integration", "Real-time data retrieval", "Context-aware responses", "Enterprise security"]
    },
    {
      icon: Users,
      title: "Full-Stack Development",
      description: "Modern web applications, SaaS platforms, and mobile apps built with cutting-edge technologies and best practices.",
      features: ["React & Next.js", "Cloud deployment", "API development", "Performance optimization"]
    }
  ];

  const whyChooseUs = [
    "Expert team with 5+ years in AI/ML",
    "Proven track record with 50+ successful projects",
    "End-to-end solutions from concept to deployment",
    "24/7 support and maintenance",
    "Scalable architecture for growth",
    "Enterprise-grade security"
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

      {/* Services Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We specialize in cutting-edge AI technologies and modern software development, 
              delivering solutions that transform how businesses operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Why Choose CodeGraff?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We don't just build software — we craft intelligent solutions that grow with your business. 
                  Our team combines deep AI expertise with modern development practices to deliver exceptional results.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="btn-gradient">
                  <Link to="/about" className="flex items-center space-x-2">
                    <span>Learn More About Us</span>
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-hero rounded-2xl flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <Bot size={120} className="mx-auto mb-4 opacity-80" />
                    <p className="text-2xl font-semibold">AI-Powered Innovation</p>
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