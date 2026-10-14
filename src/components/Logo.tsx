import { cn } from "@/lib/utils";

const Logo = ({ light = false, className }: { light?: boolean; className?: string }) => (
  <img
    src={`/brand/hypothalamous-labs${light ? "-light" : ""}.svg`}
    alt="Hypothalamous Labs"
    width={313}
    height={38}
    className={cn("block h-auto w-[212px] max-w-full shrink-0 sm:w-[240px]", className)}
  />
);

export default Logo;
