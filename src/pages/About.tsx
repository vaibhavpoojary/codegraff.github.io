import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";
import Hero from "@/components/Hero";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI, constantly exploring new technologies and methodologies to deliver breakthrough solutions."
    },
    {
      icon: Award,
      title: "Excellence", 
      description: "Quality is at the heart of everything we do. We maintain the highest standards in code quality, design, and user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our organization and in partnership with our clients to achieve shared success."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical considerations at the forefront of all our AI development practices."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & AI Research Lead",
      description: "Former OpenAI researcher with 8+ years in AI/ML. PhD in Computer Science from Stanford."
    },
    {
      name: "Marcus Rodriguez", 
      role: "CTO & Full-Stack Architect",
      description: "Ex-Google engineer specializing in scalable systems. Expert in React, Python, and cloud infrastructure."
    },
    {
      name: "Dr. Aisha Patel",
      role: "Head of AI Solutions",
      description: "AI consultant with extensive enterprise experience. Published researcher in NLP and conversational AI."
    },
    {
      name: "David Kim",
      role: "Lead Software Engineer", 
      description: "Full-stack developer with expertise in modern web technologies and AI system integration."
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Hero
        title="About CodeGraff"
        subtitle="Empowering businesses with intelligent, human-like AI solutions that transform how you work, communicate, and grow."
        showPattern={false}
      />

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Mission */}
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make artificial intelligence accessible and powerful for every business. We bridge the gap 
                  between cutting-edge AI research and practical business applications, delivering solutions that 
                  are not just intelligent, but truly transformative.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <Eye className="w-8 h-8 text-accent-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading provider of intelligent AI solutions that enhance human capabilities rather than 
                  replace them. We envision a future where AI seamlessly integrates with human workflows, making 
                  businesses more efficient, creative, and impactful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every decision we make and every solution we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of AI researchers, engineers, and consultants brings together decades 
              of experience from leading tech companies and research institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-16 h-16 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Making an Impact
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Since our founding, we've helped businesses across industries harness the power of AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "25+", label: "Happy Clients" },
              { number: "5", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;