import { useEffect, useState } from "react";

const items = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [active, setActive] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (index: number, id: string) => {
    setActive(index);

    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="mx-auto grid grid-cols-3 items-center px-[8rem] py-6 md:px-[10rem]">
      {/* Logo */}
      <div
        className={`
          justify-self-start
          text-2xl
          font-black
          tracking-tight
          transition-all
          duration-300
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
            rounded-full
            bg-white/10
            p-1
            backdrop-blur-md
            shadow-lg
            transition-all
            duration-300
            ${
              isAtTop
                ? "opacity-100 scale-100"
                : "opacity-60 scale-90 group-hover:opacity-100 group-hover:scale-100"
            }
          `}
        >
          <div className="relative flex">
            {/* Active indicator */}
            <div
              className="absolute inset-y-1 rounded-full bg-white transition-all duration-300"
              style={{
                width: "5.5rem",
                transform: `translateX(${active * 5.5}rem)`,
              }}
            />

            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(index, item.id)}
                className={`relative z-10 w-[5.5rem] px-4 py-2 text-sm font-medium transition-colors
                  ${
                    active === index
                      ? "text-black"
                      : "text-white/70 hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Spacer */}
      <div />
    </header>
  );
}
