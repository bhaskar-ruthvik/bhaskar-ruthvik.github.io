import { Feature } from "./Feature";

export function AppSection() {
  return (
    <section className="relative pb-32 pt-16">
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
          <div className="mb-6">
  <p className="text-sm tracking-[0.3em] text-white/50">
    ABOUT
  </p>
  <div
    className="
      mt-2
      h-px
      w-8
      bg-[#5EEAD4]/50
    "
  />
</div>

            <h2 className="mb-6 text-5xl font-black leading-tight">
              Designing & Building
              <br />
              Thoughtful Digital Experiences
            </h2>

            <p className="max-w-xl text-lg text-white/70">
              I focus on building refined, high-performance interfaces
              that balance engineering precision with strong visual
              identity.
            </p>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <img
              src="/IMG_4957.jpeg"
              alt="Bhaskar Ruthvik"
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

        {/* Features */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <Feature title="Frontend" text="React, Tailwind, Motion" />
          <Feature title="3D & Motion" text="Three.js, Blender" />
          <Feature title="Performance" text="Fast & accessible" />
          <Feature title="Performance" text="Fast & accessible" />
          <Feature title="Performance" text="Fast & accessible" />
          <Feature title="Performance" text="Fast & accessible" />
        </div>
      </div>
    </section>
  );
}
