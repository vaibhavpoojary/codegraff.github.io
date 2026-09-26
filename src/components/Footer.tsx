import { Link } from "react-router-dom";
import { Logo, navItems } from "./Navigation";
import { products } from "@/data/products";

const Footer = () => (
  <footer className="dark-section border-t border-ink-border">
    <div className="container-x py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="h3 mt-6 text-ink-foreground">Engineering Intelligence.</p>
          <p className="text-ink-muted mt-3 max-w-xs text-sm">AI product engineering for the Agentic era — from idea to production.</p>
        </div>
        <div>
          <p className="eyebrow text-ink-muted mb-4">Company</p>
          <ul className="space-y-2.5 text-sm">{navItems.map(i => <li key={i.path}><Link className="text-ink-muted hover:text-ink-foreground transition-colors" to={i.path}>{i.name}</Link></li>)}</ul>
        </div>
        <div>
          <p className="eyebrow text-ink-muted mb-4">Products</p>
          <ul className="space-y-2.5 text-sm">{products.map(p => <li key={p.slug}><Link className="text-ink-muted hover:text-ink-foreground transition-colors" to={`/products/${p.slug}`}>{p.name}</Link></li>)}</ul>
        </div>
        <div>
          <p className="eyebrow text-ink-muted mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-ink-muted">
            <li><a className="hover:text-ink-foreground" href="mailto:hello@codegraff.com">hello@codegraff.com</a></li>
            <li><Link className="hover:text-ink-foreground" to="/careers">Internships</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-ink-border flex flex-col md:flex-row justify-between gap-4 text-xs text-ink-muted font-mono">
        <p>© {new Date().getFullYear()} CodeGraff. All rights reserved.</p>
        <p>Built with enterprise engineering principles.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
