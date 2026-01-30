import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import projects from "../data/projects.json";

export function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const [activeProject, setActiveProject] = useState<any | null>(null);

  const visibleProjects = expanded ? projects : projects.slice(0, 3);

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl rounded-3xl bg-black/40 backdrop-blur-lg px-8 py-16 shadow-xl md:px-16">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] text-white/50">PROJECTS</p>
          <div className="mt-2 h-px w-8 bg-[#5EEAD4]/50" />
          <h2 className="mt-6 text-5xl font-black">Selected Work</h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.summary}
              tag={project.tag}
              image={project.image}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* Expand */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full bg-white/10 px-8 py-3 text-sm text-white hover:bg-white/20"
          >
            {expanded ? "Show less" : "Show all projects"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
