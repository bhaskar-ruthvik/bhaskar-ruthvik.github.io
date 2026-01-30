import { useState } from "react";
import { Feature } from "../components/Feature";
import myImage from "../assets/IMG_4957.jpeg";
export function AppSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative pb-32 pt-16 h-full flex items-center">
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
        {/* Top content: text + image */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div>
            {/* Section label */}
            <div className="mb-6">
              <p className="text-sm tracking-[0.3em] text-white/50">
                ABOUT
              </p>
              <div className="mt-2 h-px w-8 bg-[#5EEAD4]/50" />
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-5xl font-black leading-tight">
              Engineering Scalable Systems
              <br />
              at the Intersection of AI & Software
            </h2>

            {/* Body copy */}
            <div className="max-w-xl text-lg text-white/70">
              {/* Always visible */}
              <p>
                I’m a Graduate Computer Science student at Texas A&amp;M University
                with a strong foundation in software engineering and applied
                machine learning. My work focuses on building robust, scalable
                systems that connect modern AI techniques with real-world
                applications.
              </p>

              {/* Expandable content */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ease-in-out
                  ${
                    expanded
                      ? "max-h-[1000px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="space-y-4">
                  <p>
                    I’ve worked across the stack — from designing APIs and
                    user-facing products to developing and optimizing LLM and
                    retrieval-augmented generation (RAG) systems, distributed
                    data pipelines, and performance-critical code. My interests
                    include improving the reliability and robustness of large
                    language models, building efficient ML systems with GPU
                    acceleration and optimized inference, and applying AI to
                    automation and robotics.
                  </p>

                  <p>
                    Alongside systems and ML work, I enjoy full-stack development
                    and building end-to-end, production-ready applications. I
                    thrive in fast-paced environments where I can take ownership,
                    learn quickly, collaborate closely, and make high-impact
                    decisions.
                  </p>
                </div>
              </div>

              {/* Toggle button */}
              <button
                onClick={() => setExpanded((v) => !v)}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-[#5EEAD4]
                  transition-colors
                  hover:text-[#2DD4BF]
                "
                aria-expanded={expanded}
              >
                {expanded ? "Show less" : "Read more"}
                <span
                  className={`
                    transition-transform
                    duration-300
                    ${expanded ? "rotate-180" : ""}
                  `}
                >
                  ↓
                </span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <img
              src= {myImage}
              alt="Bhaskar Ruthvik Bikkina, Graduate Computer Science student at Texas A&M University"
              className="
                w-full
                max-w-sm
                rounded-2xl
                object-cover
                shadow-lg
              "
            />
          </div>
        </div>

        {/* Focus areas / features */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <Feature
            title="Software Engineering"
            text="Scalable systems, APIs, distributed pipelines"
          />
          <Feature
            title="Machine Learning Systems"
            text="LLMs, RAG, GPU acceleration, optimized inference"
          />
          <Feature
            title="Full-Stack Development"
            text="End-to-end products, performance-focused UI"
          />
        </div>
      </div>
    </section>
  );
}
