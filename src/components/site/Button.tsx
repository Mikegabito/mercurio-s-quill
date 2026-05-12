import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#4A2F24] text-[#FFF8EF] shadow-warm hover:bg-[#6B3F2D] hover:scale-[1.02] hover:shadow-[0_25px_60px_-20px_rgba(74,47,36,0.45)]",
  secondary:
    "bg-transparent text-[#4A2F24] border border-[#4A2F24]/70 hover:border-[#4A2F24] hover:bg-[#4A2F24]/5",
  ghost: "text-foreground/80 hover:text-foreground",
};

export function Button({ variant = "primary", className, children, ...props }: Props) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
