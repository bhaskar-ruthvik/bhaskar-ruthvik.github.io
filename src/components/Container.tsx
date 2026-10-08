import type { ReactNode } from "react";

/* The single content column every part of the page aligns to.
   Outer = page gutter, inner = centered max-width column with the same
   inset the frosted panels use, so text left edges line up everywhere. */
export const containerOuter = "px-6 sm:px-8 md:px-6";
export const containerInner = "mx-auto w-full max-w-6xl md:px-12 lg:px-16";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full ${containerOuter}`}>
      <div className={`${containerInner} ${className}`}>{children}</div>
    </div>
  );
}
