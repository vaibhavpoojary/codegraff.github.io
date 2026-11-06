import type { Product } from "@/data/products";

export const productCategories = ["All products", "Knowledge", "Content & social", "Automation"] as const;
export type ProductCategory = typeof productCategories[number];

export function getProductCategory(product: Product): Exclude<ProductCategory, "All products"> {
  if (product.mock === "rag") return "Knowledge";
  if (product.mock === "agents" || product.mock === "youtube") return "Automation";
  return "Content & social";
}

export function filterProducts(products: Product[], query: string, category: ProductCategory): Product[] {
  const term = query.trim().toLowerCase();
  return products.filter(product => {
    const matchesCategory = category === "All products" || getProductCategory(product) === category;
    const searchable = [product.name, product.short, product.description, ...product.capabilities].join(" ").toLowerCase();
    return matchesCategory && (!term || searchable.includes(term));
  });
}