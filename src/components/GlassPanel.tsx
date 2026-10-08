import type { ReactNode } from "react";
import { Container } from "./Container";

/* Shared section container. On phones content sits directly on the page
   (the background is darkened in App) so it reads like an article rather than
   stacked cards; from md up it becomes the frosted panel. */
export function GlassPanel({ children }: { children: ReactNode }) {
  return (
    <Container
      className="
        md:rounded-3xl
        md:bg-black/40
        md:backdrop-blur-lg
        md:shadow-xl
        md:py-16
      "
    >
      {children}
    </Container>
  );
}
