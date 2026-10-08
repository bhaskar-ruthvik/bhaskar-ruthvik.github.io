import { useState } from "react";
import { Feature } from "../components/Feature";
import { GlassPanel } from "../components/GlassPanel";
import { SectionLabel } from "../components/SectionLabel";
import myImage from "../assets/profile.webp";
export function AppSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassPanel>
        {/* Top content: text + image */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
          {/* Text */}
          <div>
            <SectionLabel>About</SectionLabel>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Engineering Scalable Systems
              <br className="hidden sm:block" />{" "}
              at the Intersection of AI & Software
            </h2>

            {/* Body copy */}
            <div className="max-w-xl text-base text-white/70 sm:text-lg">
              {/* Always visible */}
              <p>
                I’m a Master’s student in Computer Science at Texas A&amp;M
                University with a strong foundation in software engineering and
                applied machine learning. Most recently, I was an MTS Intern at
                zaimler, building production APIs, LLM serving infrastructure,
                and evaluation tooling for agentic AI systems.
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
                    user-facing products to optimizing LLM inference, building
                    retrieval-augmented generation (RAG) systems, and writing
                    performance-critical code from CUDA kernels to an x86
                    kernel. At the TAMU Flair Lab, I research memory
                    mechanisms that help LLM agents explore more efficiently,
                    and my earlier work on RAG and VR education has been
                    published at ECIR, an EMNLP workshop, and India HCI.
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
              width={800}
              height={800}
              loading="lazy"
              decoding="async"
              className="
                w-full
                max-w-[15rem]
                sm:max-w-sm
                aspect-square
                rounded-2xl
                object-cover
                shadow-lg
              "
            />
          </div>
        </div>

        {/* Focus areas / features */}
        <div className="mt-12 grid gap-6 md:mt-20 md:grid-cols-3">
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
    </GlassPanel>
  );
}
