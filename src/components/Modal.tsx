import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

/* Bottom sheet on phones, centered dialog from sm up.
   Closes on Escape or a click on the backdrop, and locks page scroll while open. */
export function Modal({
  label,
  onClose,
  children,
  size = "max-w-2xl",
}: {
  label: string;
  onClose: () => void;
  children: ReactNode;
  size?: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-[10000]
        flex items-end justify-center
        bg-black/70 backdrop-blur-sm
        p-3 sm:items-center sm:p-6
      "
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(e) => e.stopPropagation()}
        className={`
          relative w-full ${size}
          max-h-[85svh] sm:max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          bg-neutral-950/95
          p-6 sm:p-8
          shadow-2xl
          ring-1 ring-white/10
        `}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute right-3 top-3 sm:right-5 sm:top-5
            rounded-full p-2
            text-white/60
            transition
            hover:bg-white/10 hover:text-white
          "
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
