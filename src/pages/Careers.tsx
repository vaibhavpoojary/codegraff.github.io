import { GraduationCap, Code, Brain, Users, MapPin, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Careers = () => {
  const programs = [
    {
      title: "AI Engineering Internship",
      duration: "3-6 months",
      location: "Remote/Hybrid",
      description: "Work on cutting-edge LLM applications, RAG systems, and agentic AI solutions. Perfect for students passionate about artificial intelligence and machine learning.",
      requirements: [
        "Computer Science or related field",
        "Python programming experience", 
        "Basic knowledge of ML concepts",
        "Strong problem-solving skills"
      ],
      skills: ["Python", "TensorFlow/PyTorch", "LangChain", "OpenAI API"]
    },
    {
      title: "Web Development Internship", 
      duration: "3-6 months",
      location: "Remote/Hybrid",
      description: "Build modern, responsive web applications using React, Next.js, and cloud technologies. Gain hands-on experience with full-stack development.",
      requirements: [
        "Web Development fundamentals",
        "JavaScript/TypeScript knowledge",
        "React experience preferred",
        "Git version control"
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Research Internship",
      duration: "6 months",
      location: "Remote/On-site", 
      description: "Contribute to research in large language models, multi-agent systems, and AI safety. Perfect for students interested in AI research and academia.",
      requirements: [
        "Strong academic background",
        "Research experience preferred",
        "Advanced ML knowledge",
        "Publication experience (plus)"
      ],
      skills: ["Research Methods", "Deep Learning", "NLP", "Academic Writing"]
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Mentorship Program",
      description: "Work directly with senior engineers and AI researchers who are passionate about teaching and knowledge sharing."
    },
    {
      icon: Code,
      title: "Real Projects",
      description: "Contribute to production systems and client projects, not just toy examples or busywork."
    },
    {
      icon: Brain,
      title: "Cutting-Edge Tech",
      description: "Get hands-on experience with the latest AI technologies, from GPT-4 to custom neural architectures."
    },
    {
      icon: Users,
      title: "Team Integration",
      description: "Join our collaborative team culture with regular code reviews, pair programming, and knowledge sharing sessions."
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Hero
        title="Join CodeGraff and Build the Future of AI"
        subtitle="Launch your career in artificial intelligence and software development with hands-on experience, expert mentorship, and exposure to cutting-edge technology."
        description="We offer comprehensive internship programs designed to accelerate your learning and prepare you for a successful career in tech."
        primaryCTA={{ text: "Apply Now", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#programs" }}
        showPattern={false}
      />

      {/* Why Join Us */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Internship Program?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in learning by doing. Our interns work on real projects, learn from industry experts, 
              and graduate with the skills needed to excel in their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Available Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our specialized internship tracks designed to match your interests and career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {program.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{program.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {program.requirements.map((req, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full btn-gradient">
                    <Link to="/contact">Apply for this Program</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-padding text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join our team of passionate engineers and researchers. Applications are reviewed on a rolling basis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">Submit Application</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;