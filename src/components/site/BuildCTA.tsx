import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

const BuildCTA = () => (
  <section className="dark-section section-y relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-60" />
    <div className="glow-orb w-[700px] h-[700px] left-1/2 -translate-x-1/2 top-1/3 opacity-40" />
    <div className="container-x relative text-center">
      <Reveal>
        <p className="h2 text-ink-muted">Have an idea that sounds impossible?</p>
        <p className="display mt-4">Good.</p>
        <p className="lead mt-6">Those are the products we like building.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full h-12 px-7 text-base">
            <Link to="/contact">Tell Us What You Want to Build <ArrowRight className="ml-1" /></Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="rounded-full h-12 px-7 text-base text-ink-foreground hover:bg-ink-3 hover:text-ink-foreground">
            <Link to="/products">Explore Products</Link>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default BuildCTA;
