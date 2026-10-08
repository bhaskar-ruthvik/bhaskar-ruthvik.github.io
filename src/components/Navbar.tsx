import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { containerInner, containerOuter } from "./Container";

const items = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [active, setActive] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const isClickScrolling = useRef(false);

  /* ============================
     Detect top of page
     ============================ */
  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ============================
     Scroll-spy
     ============================
     A section is active when it crosses a thin band through the middle of the
     viewport. Unlike an intersection-ratio threshold, this also works for
     sections taller than the screen (common on phones). */
  useEffect(() => {
    const sections =
      document.querySelectorAll<HTMLElement>("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const section = entry.target as HTMLElement;
          const id = section.dataset.section;
          if (!id) return;

          const index = items.findIndex((item) => item.id === id);
          if (index !== -1) setActive(index);
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Close the mobile menu on Escape */
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /* ============================
     Click navigation
     ============================ */
  const handleNavClick = (
    e: MouseEvent,
    index: number,
    id: string
  ) => {
    e.preventDefault();
    setActive(index);
    setMenuOpen(false);
    isClickScrolling.current = true;

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);
  };

  return (
    <>
      {/* ===== Phones & tablets: compact bar + dropdown ===== */}
      <div className="w-full px-4 md:px-6 lg:hidden">
        <div
          className="
            flex items-center justify-between
            rounded-full
            bg-black/50
            px-5 py-2
            md:px-12
            shadow-lg
            ring-1 ring-white/10
            backdrop-blur-md
          "
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 0, "home")}
            className="text-xl font-black tracking-tight"
            aria-label="Back to top"
          >
            BR
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="
              -mr-2 flex items-center gap-2
              rounded-full px-3 py-2
              text-sm font-medium text-white/80
              transition hover:bg-white/10 hover:text-white
            "
          >
            <span>{items[active].label}</span>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Primary"
            className="
              mt-2
              rounded-3xl
              bg-black/80
              p-2
              shadow-xl
              ring-1 ring-white/10
              backdrop-blur-lg
            "
          >
            {items.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, i, item.id)}
                aria-current={active === i ? "true" : undefined}
                className={`
                  block rounded-2xl px-4 py-3 text-base font-medium transition-colors
                  ${
                    active === i
                      ? "bg-white text-black"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* ===== Desktop: pill (needs ~1024px to sit centered beside the logo) ===== */}
      <header className={`hidden w-full lg:block ${containerOuter}`}>
        {/* Aligned to the shared content column */}
        <div className={`grid grid-cols-[1fr_auto_1fr] items-center py-6 ${containerInner}`}>
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 0, "home")}
          className={`
            justify-self-start
            text-2xl font-black tracking-tight
            transition-all duration-300
            ${
              isAtTop
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
        >
          BR
        </a>

        {/* Nav pill */}
        <div className="justify-self-center group">
          <nav
            aria-label="Primary"
            className={`
              relative flex rounded-full bg-white/10 p-1
              backdrop-blur-md shadow-lg
              transition-all duration-300
              ${
                isAtTop
                  ? "opacity-100 scale-100"
                  : "opacity-60 scale-90 group-hover:opacity-100 group-hover:scale-100"
              }
            `}
          >
            {/* Active indicator */}
            <div
              className="absolute inset-y-1 rounded-full bg-white transition-all duration-300"
              style={{
                width: "6.5rem",
                transform: `translateX(${active * 6.5}rem)`,
              }}
            />

            {items.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, i, item.id)}
                aria-current={active === i ? "true" : undefined}
                className={`
                  relative z-10 w-[6.5rem]
                  px-4 py-2 text-sm font-medium
                  text-center
                  transition-colors
                  ${
                    active === i
                      ? "text-black"
                      : "text-white/70 hover:text-white"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Spacer */}
        <div />
        </div>
      </header>
    </>
  );
}
