import { Modal } from "./Modal";

export function ExperienceResearchModal({
  item,
  onClose,
}: {
  item: {
    title: string;
    subtitle: string;
    description: string;
    period?: string;
    highlights?: string[];
    link?: string;
  };
  onClose: () => void;
}) {
  return (
    <Modal label={item.title} onClose={onClose}>
      <p className="mb-2 pr-10 text-xs tracking-widest text-white/50">
        {item.subtitle}
        {item.period && ` · ${item.period}`}
      </p>

      <h3 className="mb-4 pr-10 text-2xl font-black sm:text-3xl">
        {item.title}
      </h3>

      <p className="mb-6 text-white/70">
        {item.description}
      </p>

      {item.highlights && item.highlights.length > 0 && (
        <ul className="mb-6 space-y-2">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm text-white/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#5EEAD4]" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

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
    </Modal>
  );
}
