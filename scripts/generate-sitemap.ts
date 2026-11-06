import { writeFileSync } from "node:fs";
import { products } from "../src/data/products";

const base = "https://hypothalamuslabs.com";
const paths = ["/", "/products", "/solutions", "/services", "/careers", "/about", "/contact", ...products.map(product => `/products/${product.slug}`)];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path => `  <url><loc>${base}${path}</loc></url>`).join("\n")}\n</urlset>\n`;
writeFileSync("public/sitemap.xml", xml);
console.log(`Sitemap written with ${paths.length} public pages.`);