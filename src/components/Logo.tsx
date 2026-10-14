import { cn } from "@/lib/utils";

const Logo = ({ light = false, className }: { light?: boolean; className?: string }) => (
  <span
    role="img"
    aria-label="HypothalamusLabs"
    className={cn("brand-logo", light && "brand-logo--light", className)}
  >
    <span aria-hidden="true">Hypothalamus<span className="brand-logo-labs">Labs</span></span>
  </span>
);

export default Logo;
