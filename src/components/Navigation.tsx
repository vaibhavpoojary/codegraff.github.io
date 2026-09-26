import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import grafforaLogo from "@/assets/graffora-logo.webp.asset.json";

export const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Solutions", path: "/solutions" },
  { name: "Services", path: "/services" },
  { name: "Careers", path: "/careers" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Logo = ({ light = false, className }: { light?: boolean; className?: string }) => (
  <span
    className={cn(
      "inline-flex h-8 items-center overflow-hidden",
      light && "rounded bg-background px-2 py-1 h-10",
      className,
    )}
  >
    <img
      src={`https://codegraff.lovable.app${grafforaLogo.url}`}
      alt="Graffora.ai"
      className="block h-full w-auto max-w-[min(55vw,245px)] object-contain"
    />
  </span>
);

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-500",
      open ? "bg-background border-b border-border shadow-card max-h-[100dvh] overflow-y-auto" : scrolled ? "bg-background/75 backdrop-blur-xl border-b border-border/70 shadow-card" : "bg-background/90 backdrop-blur-md border-b border-border/40")}>
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" aria-label="Graffora.ai home"><Logo className="mt-2" /></Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(i => (
            <NavLink key={i.path} to={i.path} end className={({ isActive }) => cn("px-3 py-2 text-sm rounded-full transition-colors", isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground")}>
              {i.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild size="sm" className="rounded-full px-5"><Link to="/contact">Build With Us</Link></Button>
        </div>
        <button className="lg:hidden p-2 -mr-2" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={cn("lg:hidden overflow-hidden transition-all duration-500", open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0")}>
        <nav className="container-x pb-6 pt-2 flex flex-col">
          {navItems.map((i, idx) => (
            <NavLink key={i.path} to={i.path} end style={{ transitionDelay: `${idx * 30}ms` }}
              className={({ isActive }) => cn("py-3 text-2xl font-medium tracking-tight border-b border-border/60 transition-all", open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0", isActive ? "text-foreground" : "text-muted-foreground")}>
              {i.name}
            </NavLink>
          ))}
          <Button asChild className="rounded-full mt-6 h-12"><Link to="/contact">Build With Us</Link></Button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
