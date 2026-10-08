export function ProjectCard({
    title,
    description,
    tag,
    image,
    onClick,
    className = "",
  }: {
    title: string;
    description: string;
    tag: string;
    image: string;
    onClick: () => void;
    className?: string;
  }) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`
          group
          relative
          flex flex-col
          w-full
          overflow-hidden
          rounded-2xl
          bg-white/10
          text-left
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-white/15
          hover:shadow-[0_0_24px_rgba(94,234,212,0.18)]
          focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-[#5EEAD4]/60
          ${className}
        `}
      >
        {/* Image */}
        <div className="relative aspect-[2/1] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="
              h-full w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* Thumbnails are already dark; only a faint edge for separation */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Tag */}
          <span
            className="
              mb-3
              inline-block
              text-xs
              tracking-widest
              text-white/60
              transition-colors
              duration-300
            "
          >
            {tag.toUpperCase()}
          </span>

          {/* Title */}
          <h3
            className="
              mb-2
              text-lg
              sm:text-xl
              font-semibold
              transition-colors
              duration-300
              group-hover:text-[#5EEAD4]
            "
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="
              text-sm
              text-white/70
              transition-colors
              duration-300
              group-hover:text-white/85
            "
          >
            {description}
          </p>
        </div>
      </button>
    );
  }
