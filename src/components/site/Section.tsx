import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  as: Tag = "section",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}) {
  return (
    <Tag id={id} className={cn("relative py-20 sm:py-28", className)}>
      {children}
    </Tag>
  );
}
