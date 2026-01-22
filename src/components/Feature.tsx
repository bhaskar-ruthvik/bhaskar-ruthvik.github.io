export function Feature({ title, text }) {
    return (
      <div className="rounded-xl bg-white/5 p-6">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-white/60">{text}</p>
      </div>
    );
  }
  