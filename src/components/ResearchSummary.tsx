export function ResearchSummary({
    title,
    venue,
    onClick,
  }: {
    title: string;
    venue: string;
    onClick: () => void;
  }) {
    return (
      <button
        onClick={onClick}
        className="
          group
          w-full
          text-left
          rounded-xl
          bg-white/5
          px-5 py-3
          backdrop-blur-md
          transition
          hover:bg-white/10
          hover:-translate-y-0.5
          hover:shadow-[0_0_16px_rgba(94,234,212,0.15)]
          hover:ring-1 hover:ring-[#5EEAD4]/30
        "
      >
        <p className="font-medium transition-colors group-hover:text-[#5EEAD4]">
          {title}
        </p>
        <p className="text-sm text-white/50">{venue}</p>
      </button>
    );
  }
  