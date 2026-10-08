export function SectionSeparator() {
    return (
      <div className="relative my-16 flex justify-center px-6 sm:px-8 md:my-24" aria-hidden="true">
      {/* Phones: a quiet hairline */}
      <div className="h-px w-full bg-white/10 md:hidden" />
      {/* Tablet / desktop: the glowing bar */}
      <div
        className="
          hidden
          md:block
          h-[5px]
          w-2/3
          max-w-3xl
          rounded-full
          bg-white/20
          backdrop-blur-md
          shadow-[0_0_20px_rgba(255,255,255,0.15)]
        "
      />
    </div>
    );
  }
