import { cn } from "@/lib/utils";

const Logo = ({ light = false, className }: { light?: boolean; className?: string }) => (
  <img
    src={`/brand/hypothalamous-labs${light ? "-light" : ""}.svg`}
    alt="Hypothalamous Labs"
    width={238}
    height={54}
    className={cn("block h-auto w-[186px] max-w-full shrink-0 sm:w-[205px]", className)}
  />
);

export default Logo;
