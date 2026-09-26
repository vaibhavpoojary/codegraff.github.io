import { Mail, Clock, Briefcase } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import Reveal from "@/components/site/Reveal";
import DemoForm from "@/components/site/DemoForm";

const Contact = () => (
  <>
    <PageHero eyebrow="Contact" title={<>Let's Build Something <span className="text-gradient">Intelligent.</span></>} lead="Tell us about the product, the problem or the idea. We'll respond with thoughtful next steps." />
    <Section>
      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10">
        <Reveal>
          <p className="eyebrow mb-4">Start the Conversation</p>
          <DemoForm submit="Send message" success="Your message is on its way. We usually reply within one business day."
            fields={[
              { name: "name", label: "Name", required: true },
              { name: "email", label: "Work email", type: "email", required: true },
              { name: "company", label: "Company" },
              { name: "interest", label: "Interested in", type: "select", options: ["AI Product Engineering", "Agentic AI", "RAG", "Generative AI", "AI Consulting", "Custom Software", "A CodeGraff product", "Other"] },
              { name: "message", label: "What do you want to build?", type: "textarea", required: true },
            ]} />
        </Reveal>
        <Reveal delay={150} className="space-y-4">
          {[
            { i: Mail, t: "Email", d: "hello@codegraff.com" },
            { i: Clock, t: "Response time", d: "Within one business day" },
            { i: Briefcase, t: "Engagements", d: "Discovery sprints, MVPs, production builds and long-term partnerships" },
          ].map(x => (
            <div key={x.t} className="card-soft p-6 flex gap-4">
              <x.i className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div><p className="font-medium">{x.t}</p><p className="text-sm text-muted-foreground mt-1">{x.d}</p></div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  </>
);

export default Contact;
