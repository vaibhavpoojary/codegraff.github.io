import { cn } from "@/lib/utils";

const Logo = ({ light = false, className }: { light?: boolean; className?: string }) => (
  <span
    aria-label="Hypothalamus Labs"
    className={cn("brand-logo inline-flex items-center whitespace-nowrap text-[24px] font-semibold leading-none sm:text-[26px]", light ? "text-ink-foreground" : "text-foreground", className)}
  >
    Hypothalamus Labs
  </span>
);

export default Logo;
