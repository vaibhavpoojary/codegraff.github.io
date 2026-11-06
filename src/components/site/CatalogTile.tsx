import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Check, Clapperboard, FileText, Network, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product, MockKind } from "@/data/products";
import { getProductCategory } from "@/lib/product-catalog";

const icons = { rag: BookOpen, social: TrendingUp, advisor: Sparkles, youtube: Clapperboard, script: FileText, agents: Network } satisfies Record<MockKind, typeof BookOpen>;

export const ProductAvailability = ({ status }: { status: Product["status"] }) => (
  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground whitespace-nowrap">
    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
    {status === "BETA" ? "Beta" : status === "LIVE" ? "Live" : status === "RESEARCH" ? "Research" : "In development"}
  </span>
);

const CatalogTile = ({ product }: { product: Product }) => {
  const Icon = icons[product.mock];
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-[border-color,box-shadow] duration-200 hover:border-primary/40 hover:shadow-card">
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-soft text-primary"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></div>
        <ProductAvailability status={product.status} />
      </div>
      <p className="mt-6 text-xs font-medium text-primary">{getProductCategory(product)}</p>
      <h2 className="mt-2 text-xl font-semibold leading-snug"><Link to={`/products/${product.slug}`} className="rounded-sm outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring">{product.name}</Link></h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
      <ul className="mb-6 mt-5 space-y-2.5">
        {product.capabilities.slice(0, 3).map(capability => <li key={capability} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{capability}</li>)}
      </ul>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
        <Button asChild variant="link" className="h-9 px-0"><Link to={`/products/${product.slug}`} aria-label={`View ${product.name} details`}>View product <ArrowRight /></Link></Button>
        <Button asChild variant="outline" size="sm"><Link to="/contact" aria-label={`Enquire about ${product.name}`}>Enquire</Link></Button>
      </div>
    </article>
  );
};

export default CatalogTile;