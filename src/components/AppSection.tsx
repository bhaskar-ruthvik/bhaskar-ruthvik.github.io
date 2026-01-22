import { Feature } from "./Feature";

export function AppSection() {
    return (
      <section className="relative py-32
    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]
    bg-[#070b0a]">
 <section className="relative mx-auto max-w-6xl px-6 py-32 md:px-16">
        {/* Section container */}
        <div className="rounded-3xl bg-zinc-950 p-12 shadow-xl">
          {/* Section label */}
          <p className="mb-4 text-sm tracking-[0.3em] text-white/50">
            ABOUT
          </p>
  
          {/* Title */}
          <h2 className="mb-6 text-5xl font-black leading-tight">
            Designing & Building<br />
            Thoughtful Digital Experiences
          </h2>
  
          {/* Description */}
          <p className="max-w-2xl text-lg leading-relaxed text-white/70">
            I’m a developer focused on creating visually refined,
            high-performance web experiences. I care deeply about
            detail, motion, and clarity — blending engineering
            with design.
          </p>
  
          {/* Highlights */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Feature title="Frontend" text="React, Tailwind, Motion" />
            <Feature title="3D & Motion" text="Three.js, Blender" />
            <Feature title="Performance" text="Fast, accessible, scalable" />
          </div>
        </div>

      </section>
      </section>
     
    );
  }
  