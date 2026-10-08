import { ChevronRight } from "lucide-react";

/* Plain divided row on phones; card from md up. */
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
          py-4
          flex items-center gap-4
          transition
          md:rounded-xl
          md:bg-white/5
          md:px-5 md:py-3
          md:backdrop-blur-md
          md:hover:bg-white/10
          md:hover:-translate-y-0.5
          md:hover:shadow-[0_0_16px_rgba(94,234,212,0.15)]
          md:hover:ring-1 md:hover:ring-[#5EEAD4]/30
        "
      >
        <div className="min-w-0 flex-1">
          <p className="font-medium transition-colors group-hover:text-[#5EEAD4]">
            {title}
          </p>
          <p className="text-sm text-white/50">{venue}</p>
        </div>

        <ChevronRight className="h-4 w-4 shrink-0 text-white/30 md:hidden" />
      </button>
    );
  }
