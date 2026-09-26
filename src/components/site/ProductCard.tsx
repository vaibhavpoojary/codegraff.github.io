import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import ProductMockup from "./ProductMockup";
import { StatusBadge } from "./Section";

const ProductCard = ({ p }: { p: Product }) => (
  <Link to={`/products/${p.slug}`} className="group card-ink block p-6 md:p-8 h-full relative overflow-hidden text-ink-foreground">
    <div className="glow-orb w-72 h-72 -top-24 -right-24 opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
    <div className="relative flex items-center justify-between mb-6">
      <StatusBadge status={p.status} />
      <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
    </div>
    <p className="relative font-mono text-xs text-ink-muted">CodeGraff</p>
    <h3 className="relative h3 mt-1">{p.name}</h3>
    <p className="relative text-ink-muted mt-2 mb-8">{p.tagline}</p>
    <div className="relative transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.02]">
      <ProductMockup kind={p.mock} />
    </div>
  </Link>
);

export default ProductCard;
