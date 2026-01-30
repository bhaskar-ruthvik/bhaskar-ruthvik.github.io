export function ProjectCard({
    title,
    description,
    tag,
    image,
    onClick,
  }: {
    title: string;
    description: string;
    tag: string;
    image: string;
    onClick: () => void;
  }) {
    return (
      <div
        onClick={onClick}
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          bg-white/10
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-white/15
          hover:shadow-[0_0_24px_rgba(94,234,212,0.18)]
        "
      >
        {/* Image */}
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="
              h-full w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
  
          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
  
        {/* Content */}
        <div className="p-6">
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
              text-xl
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
      </div>
    );
  }
  