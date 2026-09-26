import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading, StatusBadge } from "@/components/site/Section";
import Reveal from "@/components/site/Reveal";
import ProductMockup from "@/components/site/ProductMockup";
import ProductCard from "@/components/site/ProductCard";
import BuildCTA from "@/components/site/BuildCTA";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { slug } = useParams();
  const p = products.find(x => x.slug === slug);
  if (!p) return <NotFound />;
  const others = products.filter(x => x.slug !== p.slug).slice(0, 3);
  return (
    <>
      <PageHero eyebrow={`CodeGraff ${p.name}`} title={p.tagline} lead={p.description}>
        <div className="flex flex-wrap items-center gap-4">
          <StatusBadge status={p.status} />
          <Button asChild className="rounded-full"><Link to="/contact">Request a demo <ArrowRight className="ml-1" /></Link></Button>
          <Link to="/products" className="text-sm text-ink-muted hover:text-ink-foreground inline-flex items-center gap-1"><ArrowLeft className="w-4 h-4" />All products</Link>
        </div>
      </PageHero>
      <section className="dark-section pb-24">
        <Reveal className="container-x max-w-4xl"><div className="float-slow"><ProductMockup kind={p.mock} /></div></Reveal>
      </section>
      <Section>
        <SectionHeading eyebrow="Capabilities" title="What it does" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {p.capabilities.map((c, i) => (
            <Reveal key={c} delay={(i % 3) * 70} className="card-soft px-5 py-4 flex items-center gap-3"><Check className="w-4 h-4 text-primary shrink-0" />{c}</Reveal>
          ))}
        </div>
      </Section>
      <Section soft>
        <SectionHeading eyebrow="Workflow" title="How it works" />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {p.workflow.map((s, i) => (
            <Reveal as="li" key={s} delay={(i % 4) * 80} className="rounded-xl bg-background border border-border p-5">
              <span className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-medium mt-2">{s}</p>
            </Reveal>
          ))}
        </ol>
      </Section>
      <Section dark>
        <SectionHeading eyebrow="More from CodeGraff" title="Other products" />
        <div className="grid md:grid-cols-3 gap-5">{others.map(o => <ProductCard key={o.slug} p={o} />)}</div>
      </Section>
      <BuildCTA />
    </>
  );
};

export default ProductDetail;
