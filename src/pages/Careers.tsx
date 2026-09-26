import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import Reveal from "@/components/site/Reveal";
import DemoForm from "@/components/site/DemoForm";

const roles = ["AI Engineering Intern", "Generative AI Intern", "Agentic AI Intern", "Full Stack Engineering Intern", "Frontend Engineering Intern", "Backend Engineering Intern", "AI Research Intern", "Product Design Intern"];
const learn = ["LLMs", "RAG", "Agents", "Python", "React", "APIs", "Databases", "Cloud", "Product engineering", "Software architecture", "Testing"];

const Careers = () => (
  <>
    <PageHero eyebrow="Careers · Internships" title={<>Build What <span className="text-gradient">Comes Next.</span></>} lead="Work on AI systems, agentic applications, intelligent software and experimental products designed for the next generation of computing." />
    <Section>
      <SectionHeading eyebrow="Internships" title="Open internship tracks" lead="Interns gain exposure to real engineering practices — code reviews, evaluation, architecture and shipping." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {roles.map((r, i) => (
          <Reveal key={r} delay={(i % 4) * 80} className="card-soft p-6">
            <span className="font-mono text-[11px] text-primary">INTERNSHIP</span>
            <p className="font-semibold mt-2">{r}</p>
          </Reveal>
        ))}
      </div>
    </Section>
    <Section dark>
      <SectionHeading eyebrow="What you'll learn" title="Skills for the Agentic era" />
      <div className="flex flex-wrap gap-2.5">
        {learn.map((l, i) => <Reveal key={l} delay={i * 50}><span className="px-5 py-2.5 rounded-full border border-ink-border bg-ink-2 font-mono text-sm">{l}</span></Reveal>)}
      </div>
    </Section>
    <Section soft id="apply">
      <SectionHeading eyebrow="Apply" title="Apply for an internship" />
      <Reveal className="max-w-3xl">
        <DemoForm submit="Submit application" success="We've received your application and will be in touch."
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "college", label: "College / University" },
            { name: "role", label: "Internship track", type: "select", options: roles, required: true },
            { name: "portfolio", label: "GitHub / Portfolio link", full: true },
            { name: "about", label: "Tell us what you'd like to build", type: "textarea" },
          ]} />
      </Reveal>
    </Section>
  </>
);

export default Careers;
