/* A teal-ruled line item on phones; a card from md up. */
export function Feature({
    title,
    text,
  }: {
    title: string;
    text: string;
  }) {
    return (
      <div
        className="
          group
          border-l-2 border-[#5EEAD4]/40 pl-4
          md:border-l-0
          md:rounded-xl
          md:bg-white/10
          md:p-6
          md:backdrop-blur-md
          md:transition-all
          md:duration-300
          md:hover:-translate-y-1
          md:hover:bg-white/15
          md:hover:shadow-[0_0_20px_rgba(94,234,212,0.18)]
        "
      >
        <div className="mb-2 hidden h-0.5 w-8 bg-[#5EEAD4] opacity-0 transition group-hover:opacity-100 md:block" />

        <h3
          className="
            mb-1
            md:mb-2
            text-base
            md:text-lg
            font-semibold
            transition-colors
            duration-300
            group-hover:text-[#5EEAD4]
          "
        >
          {title}
        </h3>

        <p
          className="
            text-sm
            text-white/60
            transition-colors
            duration-300
            group-hover:text-white/80
          "
        >
          {text}
        </p>
      </div>
    );
  }
