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
          rounded-xl
          bg-white/10
          p-6
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-white/15
          hover:shadow-[0_0_20px_rgba(94,234,212,0.18)]
        "
      >
        <div className="mb-2 h-0.5 w-8 bg-[#5EEAD4] opacity-0 transition group-hover:opacity-100" />

        <h3
          className="
            mb-2
            text-lg
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
