import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal, type Project } from "./ProjectModal";
import { GlassPanel } from "./GlassPanel";
import { SectionLabel } from "./SectionLabel";
import projectData from "../data/projects.json";

const projects: Project[] = projectData;

export function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const visibleProjects = expanded ? projects : projects.slice(0, 3);

  return (
    <>
      <GlassPanel>
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">Selected Work</h2>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {visibleProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.summary}
              tag={project.tag}
              image={project.image}
              onClick={() => setActiveProject(project)}
              // In the 2-column layout, let a trailing odd card span the row
              className={
                i === visibleProjects.length - 1 && visibleProjects.length % 2 === 1
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }
            />
          ))}
        </div>

        {/* Expand */}
        <div className="mt-10 flex justify-center md:mt-16">
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="rounded-full bg-white/10 px-8 py-3 text-sm text-white hover:bg-white/20"
          >
            {expanded ? "Show less" : `Show all ${projects.length} projects`}
          </button>
        </div>
      </GlassPanel>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
