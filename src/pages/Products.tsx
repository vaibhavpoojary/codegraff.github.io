import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading, StatusBadge } from "@/components/site/Section";
import Reveal from "@/components/site/Reveal";
import ProductCard from "@/components/site/ProductCard";
import BuildCTA from "@/components/site/BuildCTA";
import { labs, products } from "@/data/products";

const Products = () => (
  <>
    <PageHero eyebrow="Products" title={<>Products designed <span className="text-gradient">around intelligence.</span></>} lead="Technology products CodeGraff is building for an AI-native world — from enterprise knowledge to autonomous digital workers." />
    <Section soft>
      <div className="grid md:grid-cols-2 gap-5">
        {products.map((p, i) => <Reveal key={p.slug} delay={(i % 2) * 100}><ProductCard p={p} /></Reveal>)}
      </div>
    </Section>
    <Section dark>
      <SectionHeading eyebrow="CodeGraff Labs" title="Exploring what software becomes when intelligence is embedded everywhere." lead="Concepts and early research. Not publicly available." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {labs.map((l, i) => (
          <Reveal key={l.name} delay={(i % 3) * 80} className="card-ink p-6 flex items-center justify-between gap-4">
            <span className="font-medium">{l.name}</span><StatusBadge status={l.status} />
          </Reveal>
        ))}
      </div>
    </Section>
    <BuildCTA />
  </>
);

export default Products;
