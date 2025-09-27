import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/Hero";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Let's Chat",
      description: "Send us a message and we'll respond within 24 hours.",
      action: "Send Message",
      highlight: true
    },
    {
      icon: Calendar,
      title: "Schedule a Demo",
      description: "Book a personalized demo of our AI solutions.",
      action: "Book Demo",
      highlight: false
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team for immediate assistance.",
      action: "Call Now", 
      highlight: false
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <Hero
        title="Get in Touch"
        subtitle="Ready to transform your business with AI? Let's discuss how CodeGraff can help you build the future."
        showPattern={false}
      />

      {/* Contact Methods */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're looking to automate workflows, build intelligent chatbots, or develop custom AI solutions, 
              we're here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`card-elegant text-center ${method.highlight ? 'border-primary shadow-glow' : ''}`}>
                <CardHeader>
                  <div className={`w-16 h-16 ${method.highlight ? 'bg-gradient-primary' : 'bg-gradient-accent'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{method.description}</p>
                  <Button 
                    variant={method.highlight ? "default" : "outline"}
                    className={method.highlight ? "btn-gradient w-full" : "w-full"}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>

                <Button type="submit" className="btn-gradient w-full h-12 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <h3 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                    <p className="text-muted-foreground">contact@codegraff.ai</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                    <p className="text-muted-foreground">+1 (234) 567-8900</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Visit Us</h4>
                    <p className="text-muted-foreground">123 Innovation Street<br />Tech City, USA 12345</p>
                    <p className="text-sm text-muted-foreground">By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-muted rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                {
                  question: "How long does a typical AI project take?",
                  answer: "Project timelines vary based on complexity, but most chatbot implementations take 2-4 weeks, while custom AI solutions may take 2-6 months."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, we offer comprehensive support packages including monitoring, updates, and optimization services to ensure your AI solutions continue to perform optimally."
                },
                {
                  question: "Can you integrate with existing systems?",
                  answer: "Absolutely. We specialize in seamless integration with existing business systems, databases, and workflows to maximize ROI and minimize disruption."
                },
                {
                  question: "What industries do you serve?",
                  answer: "We work across all industries, with particular expertise in healthcare, finance, e-commerce, SaaS, and professional services."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border">
                  <h4 className="font-semibold text-foreground mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;