import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import Reveal from "@/components/site/Reveal";
import InternshipForm from "@/components/site/InternshipForm";
import { internshipRoles } from "@/data/internships";

const roles = internshipRoles;
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
        {learn.map((l, i) => <Reveal key={l} delay={i * 50}><span className="inline-flex px-5 py-2.5 rounded-md border border-border bg-soft text-sm">{l}</span></Reveal>)}
      </div>
    </Section>
    <Section soft id="apply" className="scroll-mt-20">
      <SectionHeading eyebrow="Apply" title="Apply for an internship" />
      <Reveal className="max-w-3xl">
        <InternshipForm />
      </Reveal>
    </Section>
  </>
);

export default Careers;
