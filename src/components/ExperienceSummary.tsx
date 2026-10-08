import { ChevronRight } from "lucide-react";

/* Plain divided row on phones; card from md up. */
export function ExperienceSummary({
    title,
    org,
    logo,
    onClick,
  }: {
    title: string;
    org: string;
    logo?: string;
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
          md:px-5
          md:backdrop-blur-md
          md:hover:bg-white/10
          md:hover:-translate-y-0.5
          md:hover:shadow-[0_0_16px_rgba(94,234,212,0.15)]
          md:hover:ring-1 md:hover:ring-[#5EEAD4]/30
        "
      >
        {/* Logo */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10">
          {logo ? (
            <img
              src={logo}
              alt={org}
              className="h-8 w-8 object-contain"
            />
          ) : (
            <span className="text-lg font-black text-[#5EEAD4]">
              {org.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <p className="font-medium transition-colors group-hover:text-[#5EEAD4]">
            {title}
          </p>
          <p className="text-sm text-white/50">{org}</p>
        </div>

        <ChevronRight className="h-4 w-4 shrink-0 text-white/30 md:hidden" />
      </button>
    );
  }
