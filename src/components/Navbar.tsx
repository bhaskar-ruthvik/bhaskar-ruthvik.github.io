import { useEffect, useRef, useState } from "react";

const items = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [active, setActive] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const isClickScrolling = useRef(false);

  /* ============================
     Detect top of page
     ============================ */
  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ============================
     Scroll-spy
     ============================ */
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
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ============================
     Click navigation
     ============================ */
  const handleNavClick = (index: number, id: string) => {
    setActive(index);
    isClickScrolling.current = true;

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  return (
    <header className="mx-auto grid grid-cols-3 items-center px-[8rem] py-6 md:px-[10rem]">
      {/* Logo */}
      <div
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
      </div>

      {/* Nav pill */}
      <div className="justify-self-center group">
        <nav
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
              width: "5.5rem",
              transform: `translateX(${active * 5.5}rem)`,
            }}
          />

          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(i, item.id)}
              className={`
                relative z-10 w-[5.5rem]
                px-4 py-2 text-sm font-medium
                transition-colors
                ${
                  active === i
                    ? "text-black"
                    : "text-white/70 hover:text-white"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Spacer */}
      <div />
    </header>
  );
}
