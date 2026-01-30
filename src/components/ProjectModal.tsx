import { FaGithub } from "react-icons/fa6";
import { X } from "lucide-react";

export function ProjectModal({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative max-w-3xl w-full rounded-3xl bg-black/90 p-8 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white/60 hover:text-white"
        >
          <X />
        </button>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="mb-6 h-56 w-full rounded-xl object-cover"
        />

        {/* Content */}
        <p className="mb-2 text-xs tracking-widest text-white/50">
          {project.tag}
        </p>

        <h3 className="mb-4 text-3xl font-black">{project.title}</h3>

        <p className="mb-6 text-white/70">{project.description}</p>

        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/20"
        >
          <FaGithub />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
