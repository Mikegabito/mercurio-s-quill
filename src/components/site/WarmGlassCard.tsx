import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function WarmGlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("warm-glass rounded-3xl p-7 sm:p-8", className)}>{children}</div>
  );
}
