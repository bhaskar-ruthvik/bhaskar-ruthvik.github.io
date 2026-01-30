export function ExperienceSummary({
    title,
    org,
    logo,
    onClick,
  }: {
    title: string;
    org: string;
    logo: string;
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
          px-5 py-4
          backdrop-blur-md
          transition
          flex items-center gap-4
          hover:bg-white/10
          hover:-translate-y-0.5
          hover:shadow-[0_0_16px_rgba(94,234,212,0.15)]
          hover:ring-1 hover:ring-[#5EEAD4]/30
        "
      >
        {/* Logo */}
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
          <img
            src={logo}
            alt={org}
            className="h-8 w-8 object-contain"
          />
        </div>
  
        {/* Text */}
        <div>
          <p className="font-medium transition-colors group-hover:text-[#5EEAD4]">
            {title}
          </p>
          <p className="text-sm text-white/50">{org}</p>
        </div>
      </button>
    );
  }
  