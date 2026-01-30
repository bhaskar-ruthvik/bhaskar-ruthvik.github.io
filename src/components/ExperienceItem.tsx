export function ExperienceItem({
    title,
    org,
    description,
  }: {
    title: string;
    org: string;
    description: string;
  }) {
    return (
      <div
        className="
          group
          rounded-2xl
          bg-white/10
          p-6
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-white/15
          hover:shadow-[0_0_20px_rgba(94,234,212,0.15)]
          hover:ring-1 hover:ring-[#5EEAD4]/30
        "
      >
        <h3
          className="
            text-xl
            font-semibold
            transition-colors
            duration-300
            group-hover:text-[#5EEAD4]
          "
        >
          {title}
        </h3>
  
        <p className="mt-1 text-sm text-white/50">
          {org}
        </p>
  
        <p className="mt-3 text-white/70">
          {description}
        </p>
      </div>
    );
  }
  