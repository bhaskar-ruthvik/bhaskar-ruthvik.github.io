import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

const PROJECTS = [
    {
      title: "Immersive Portfolio",
      description: "A 3D-driven personal portfolio built with React and Three.js.",
      tag: "Web / 3D",
      image: "kristaps-ungurs-bscs05zXuvE-unsplash.jpg",
    },
    {
      title: "Architecture Visualizer",
      description: "Real-time architectural walkthroughs using WebGL.",
      tag: "Visualization",
      image: "kristaps-ungurs-bscs05zXuvE-unsplash.jpg",
    },
    {
      title: "Design System",
      description: "A scalable UI system built with Tailwind and React.",
      tag: "UI / Frontend",
      image: "/projects/design-system.jpg",
    },
    {
      title: "Interactive Data Tool",
      description: "A performant dashboard for visualizing large datasets.",
      tag: "Data",
      image: "/projects/data-tool.jpg",
    },
    {
      title: "Motion Experiments",
      description: "A collection of animation and motion design studies.",
      tag: "Motion",
      image: "/projects/motion.jpg",
    },
  ];
  

export function ProjectsSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = expanded ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section className="relative py-32">
      {/* Glass container */}
      <div
        className="
          mx-auto max-w-6xl
          rounded-3xl
          bg-black/40
          backdrop-blur-lg
          shadow-xl
          px-8 py-16
          md:px-16
        "
      >
        {/* Header */}
        <div className="mb-16">
          <p className="mb-4 text-sm tracking-[0.3em] text-white/50">
            PROJECTS
            <div
    className="
      mt-2
      h-px
      w-8
      bg-[#5EEAD4]/50
    "
  />
          </p>

          <h2 className="text-5xl font-black leading-tight">
            Selected Work
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              tag={project.tag}
            />
          ))}
        </div>

        {/* Expand button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="
              rounded-full
              bg-white/10
              px-8 py-3
              text-sm font-medium
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
          >
            {expanded ? "Show less" : "Show all projects"}
          </button>
        </div>
      </div>
    </section>
  );
}
