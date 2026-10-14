import { cn } from "@/lib/utils";

const Logo = ({ light = false, className }: { light?: boolean; className?: string }) => (
  <span
    aria-label="Graffora.ai"
    className={cn("inline-flex items-center whitespace-nowrap font-sans text-[26px] font-semibold leading-none", className)}
  >
    <span className={light ? "text-ink-foreground" : "text-foreground"}>graffora.</span>
    <span className="text-primary">ai</span>
  </span>
);

export default Logo;
