import { FaGithub } from "react-icons/fa6";
import { Modal } from "./Modal";

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  tag: string;
  period?: string;
  image: string;
  github?: string;
};

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <Modal label={project.title} onClose={onClose} size="max-w-3xl">
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="mb-6 h-40 w-full rounded-xl object-cover sm:h-56"
      />

      {/* Content */}
      <p className="mb-2 text-xs tracking-widest text-white/50">
        {project.tag}
        {project.period && ` · ${project.period}`}
      </p>

      <h3 className="mb-4 text-2xl font-black sm:text-3xl">{project.title}</h3>

      <p className="mb-6 text-white/70">{project.description}</p>

      {/* GitHub */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/20"
        >
          <FaGithub />
          View on GitHub
        </a>
      )}
    </Modal>
  );
}
