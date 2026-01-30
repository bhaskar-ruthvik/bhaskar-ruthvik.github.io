import { X } from "lucide-react";

export function ExperienceResearchModal({
  item,
  onClose,
}: {
  item: {
    title: string;
    subtitle: string;
    description: string;
    link?: string;
  };
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-3xl bg-black/90 p-8 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white/60 hover:text-white"
        >
          <X />
        </button>

        <p className="mb-2 text-xs tracking-widest text-white/50">
          {item.subtitle}
        </p>

        <h3 className="mb-4 text-3xl font-black">
          {item.title}
        </h3>

        <p className="mb-6 text-white/70">
          {item.description}
        </p>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              rounded-full
              bg-white/10
              px-6 py-3
              text-sm
              text-white
              transition
              hover:bg-white/20
            "
          >
            View more →
          </a>
        )}
      </div>
    </div>
  );
}
