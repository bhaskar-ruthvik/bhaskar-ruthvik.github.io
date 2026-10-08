export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-6">
      <p className="text-xs tracking-[0.3em] text-white/50 sm:text-sm">
        {children.toUpperCase()}
      </p>
      <div className="mt-2 h-px w-8 bg-[#5EEAD4]/50" />
    </div>
  );
}
