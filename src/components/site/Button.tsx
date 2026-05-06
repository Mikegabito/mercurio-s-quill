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
    "bg-[var(--gradient-gold)] text-primary-foreground shadow-warm hover:scale-[1.02] hover:shadow-[0_25px_60px_-20px_oklch(0.4_0.1_50_/_0.35)]",
  secondary:
    "bg-transparent text-foreground border border-foreground/25 hover:border-foreground/60 hover:bg-foreground/5",
  ghost: "text-foreground/80 hover:text-foreground",
};

export function Button({ variant = "primary", className, children, ...props }: Props) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
