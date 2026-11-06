import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Search, SearchX, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CatalogTile, { ProductAvailability } from "@/components/site/CatalogTile";
import { filterProducts, getProductCategory, productCategories, type ProductCategory } from "@/lib/product-catalog";
import { labs, products } from "@/data/products";

const Products = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategory>("All products");
  const visibleProducts = filterProducts(products, query, category);
  const reset = () => { setQuery(""); setCategory("All products"); };

  return (
    <>
      <section className="border-b border-border bg-background pb-10 pt-28 md:pb-12 md:pt-32">
        <div className="container-x">
          <p className="text-sm font-medium text-primary">Hypothalamus Labs / Products</p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Products designed <span className="text-gradient">around intelligence.</span></h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">Technology products Hypothalamus Labs is building for an AI-native world — from enterprise knowledge to autonomous digital workers.</p>
            </div>
            <Button asChild className="h-11 self-start md:self-auto"><Link to="/contact">Talk to our team <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-soft py-8 md:py-10" aria-label="Product catalog">
        <div className="container-x">
          <div className="flex flex-col-reverse justify-between gap-5 xl:flex-row xl:items-center">
            <div className="flex flex-wrap gap-1" role="group" aria-label="Product categories">
              {productCategories.map(item => {
                const count = item === "All products" ? products.length : products.filter(product => getProductCategory(product) === item).length;
                return <Button key={item} variant={category === item ? "default" : "ghost"} aria-pressed={category === item} onClick={() => setCategory(item)} className="gap-2 px-3">{item}<span className={category === item ? "text-primary-foreground/80" : "text-muted-foreground"}>{count}</span></Button>;
              })}
            </div>
            <div className="relative w-full xl:w-72">
              <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Input aria-label="Search products" placeholder="Search products or capabilities" value={query} onChange={event => setQuery(event.target.value)} className="pl-9 pr-10" />
              {query && <Button variant="ghost" size="icon" className="absolute right-0 top-0" aria-label="Clear search" onClick={() => setQuery("")}><X /></Button>}
            </div>
          </div>
          <p className="mb-5 mt-6 text-sm text-muted-foreground" role="status" aria-live="polite">{visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}{query.trim() ? ` matching “${query.trim()}”` : ""}</p>
          {visibleProducts.length > 0 ? (
            <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map(product => <CatalogTile key={product.slug} product={product} />)}
            </div>
          ) : (
            <div className="flex min-h-72 flex-col items-center justify-center text-center">
              <SearchX className="h-8 w-8 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold">No matching products</h2>
              <p className="mt-2 text-sm text-muted-foreground">Try another term or explore all products.</p>
              <Button variant="outline" className="mt-5" onClick={reset}>Reset filters</Button>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-border bg-background py-10">
        <div className="container-x">
          <details className="group">
            <summary className="flex cursor-pointer list-none flex-col gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-row sm:items-center sm:justify-between [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-3"><FlaskConical className="h-5 w-5 text-primary" /><h2 className="text-xl font-semibold">From the research lab</h2><span className="text-sm text-muted-foreground">{labs.length} concepts</span></div>
              <span className="flex items-center gap-2 text-sm text-primary">Explore research <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" /></span>
            </summary>
            <p className="mt-4 text-sm text-muted-foreground">Early research and concepts. Not publicly available.</p>
            <div className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {labs.map(lab => <div key={lab.name} className="flex flex-col gap-2 border-t border-border py-4"><h3 className="text-sm font-medium">{lab.name}</h3><ProductAvailability status={lab.status} /></div>)}
            </div>
          </details>
        </div>
      </section>

      <section className="border-t border-border bg-soft py-12">
        <div className="container-x flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div><h2 className="text-2xl font-semibold">Need something built around your business?</h2><p className="mt-2 text-muted-foreground">Let's discuss your workflow, data, and goals.</p></div>
          <Button asChild className="h-11 shrink-0 self-start sm:self-auto"><Link to="/contact">Discuss a project <ArrowRight /></Link></Button>
        </div>
      </section>
    </>
  );
};

export default Products;
