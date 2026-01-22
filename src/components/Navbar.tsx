import { useState } from "react";

const items = ["Home", "About", "Projects", "Contact"];

export function Navbar() {
  const [active, setActive] = useState(0);

  return (
    <header className="mx-auto mt-6 max-w-6xl">
      <div className="grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <div className="justify-self-start font-sans text-2xl font-black tracking-tight">
          BR
        </div>

        {/* Center: Navigation pill */}
        <div className="justify-self-center">
          <nav className="rounded-full bg-white/10 p-1 backdrop-blur-md shadow-lg shadow-black/30">
            <div className="relative flex items-center">
              {/* Animated active background */}
              <div
                className="absolute inset-y-1 rounded-full bg-white transition-all duration-300 ease-out"
                style={{
                  width: "5.5rem",
                  transform: `translateX(${active * 5.5}rem)`,
                }}
              />

              {items.map((item, index) => (
                <button
                  key={item}
                  onClick={() => setActive(index)}
                  className={`relative z-10 w-[5.5rem] px-4 py-2 text-sm font-medium transition-colors
                    ${
                      active === index
                        ? "text-black"
                        : "text-white/70 hover:text-white"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Right: Spacer */}
        <div />
      </div>
    </header>
  );
}
