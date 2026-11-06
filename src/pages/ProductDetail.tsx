import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductMockup from "@/components/site/ProductMockup";
import CatalogTile, { ProductAvailability } from "@/components/site/CatalogTile";
import { getProductCategory } from "@/lib/product-catalog";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { slug } = useParams();
  const p = products.find(x => x.slug === slug);
  if (!p) return <NotFound />;
  const others = products.filter(x => x.slug !== p.slug).slice(0, 3);
  return (
    <>
      <section className="bg-background pb-10 pt-24 md:pb-12 md:pt-28">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><ArrowLeft className="h-4 w-4" />All products</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" /><span className="text-foreground">{p.name}</span>
          </nav>
          <div className="mt-8 flex flex-wrap items-center gap-4"><span className="text-sm font-medium text-primary">{getProductCategory(p)}</span><ProductAvailability status={p.status} /></div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">{p.name}</h1>
          <p className="mt-4 max-w-3xl text-xl font-medium leading-relaxed text-primary">{p.tagline}</p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{p.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="h-11"><Link to="/contact">{p.status === "BETA" || p.status === "LIVE" ? "Request a demo" : "Enquire about this product"}<ArrowRight /></Link></Button>
            <Button asChild variant="outline" className="h-11"><a href="#capabilities">Explore capabilities</a></Button>
          </div>
        </div>
      </section>

      <nav aria-label="Product sections" className="border-y border-border bg-background">
        <div className="container-x flex flex-wrap gap-1 py-2">
          {[["Overview", "overview"], ["Capabilities", "capabilities"], ["Workflow", "workflow"], ["Related products", "related"]].map(([label, id]) => <Button asChild key={id} variant="ghost" size="sm"><a href={`#${id}`}>{label}</a></Button>)}
        </div>
      </nav>

      <section id="overview" className="scroll-mt-24 border-b border-border bg-soft py-10 md:py-14">
        <div className="container-x grid items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium text-primary">Overview</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">{p.short}</h2>
            <ul className="mt-6 space-y-4">
              {p.capabilities.slice(0, 4).map(capability => <li key={capability} className="flex items-start gap-3 text-base"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{capability}</li>)}
            </ul>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-5">
              <div><dt className="text-sm text-muted-foreground">Capabilities</dt><dd className="mt-1 text-xl font-semibold">{p.capabilities.length}</dd></div>
              <div><dt className="text-sm text-muted-foreground">Workflow steps</dt><dd className="mt-1 text-xl font-semibold">{p.workflow.length}</dd></div>
            </dl>
          </div>
          <figure className="min-w-0">
            <figcaption className="mb-3 text-sm font-medium text-muted-foreground">Illustrative product preview</figcaption>
            <ProductMockup kind={p.mock} />
          </figure>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 bg-background py-10 md:py-14">
        <div className="container-x">
          <div className="mb-7 flex flex-wrap items-center gap-3"><h2 className="text-2xl font-semibold md:text-3xl">Everything it can do</h2><span className="text-sm text-muted-foreground">{p.capabilities.length} capabilities</span></div>
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {p.capabilities.map(capability => <li key={capability} className="flex items-start gap-3 border-t border-border py-4 text-sm leading-relaxed"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{capability}</li>)}
          </ul>
        </div>
      </section>

      <section id="workflow" className="scroll-mt-24 border-y border-border bg-soft py-10 md:py-14">
        <div className="container-x">
          <h2 className="text-2xl font-semibold md:text-3xl">From input to outcome</h2>
          <p className="mt-3 text-base text-muted-foreground">The {p.name} workflow, step by step.</p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {p.workflow.map((step, index) => <li key={step} className="flex min-h-24 items-start gap-3 rounded-lg border border-border bg-card p-5"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-soft text-xs font-medium text-primary">{String(index + 1).padStart(2, "0")}</span><p className="pt-0.5 text-sm font-medium leading-relaxed">{step}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="related" className="scroll-mt-24 bg-background py-10 md:py-14">
        <div className="container-x">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-semibold md:text-3xl">Explore other products</h2><Button asChild variant="link" className="px-0"><Link to="/products">Browse all products <ArrowRight /></Link></Button></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{others.map(product => <CatalogTile key={product.slug} product={product} />)}</div>
        </div>
      </section>

      <section className="border-t border-border bg-soft py-10">
        <div className="container-x flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div><h2 className="text-2xl font-semibold">Let's talk about your use case.</h2><p className="mt-2 text-muted-foreground">Explore how {p.name} fits your team's needs.</p></div>
          <Button asChild className="h-11 shrink-0 self-start"><Link to="/contact">Talk to our team <ArrowRight /></Link></Button>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
