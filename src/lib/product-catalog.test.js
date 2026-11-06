import { describe, expect, test } from "bun:test";
import { products } from "../data/products";
import { filterProducts } from "./product-catalog";

describe("product catalog discovery", () => {
  test("knowledge category contains the enterprise knowledge product", () => {
    expect(filterProducts(products, "", "Knowledge").map(product => product.slug)).toEqual(["enterprise-rag"]);
  });
  test("search matches capabilities case-insensitively", () => {
    expect(filterProducts(products, "  SOURCE CITATIONS  ", "All products").map(product => product.slug)).toEqual(["enterprise-rag"]);
  });
  test("search and category work together", () => {
    expect(filterProducts(products, "Source citations", "Automation")).toEqual([]);
  });
  test("all products with an empty query restores the full catalog", () => {
    expect(filterProducts(products, "", "All products")).toEqual(products);
  });
});