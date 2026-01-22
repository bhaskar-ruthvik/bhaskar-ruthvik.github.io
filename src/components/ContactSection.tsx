import { FaLinkedin, FaGithub, FaGoogleScholar } from "react-icons/fa6";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative py-40">
      {/* Glass container */}
      <div
        className="
          mx-auto max-w-6xl
          rounded-3xl
          bg-black/40
          backdrop-blur-lg
          shadow-xl
          px-8 py-20
          md:px-16
        "
      >
        {/* Label */}
        <div className="mb-6">
          <p className="text-sm tracking-[0.3em] text-white/50">
            CONTACT
          </p>
          <div className="mt-2 h-px w-8 bg-[#5EEAD4]/50" />
        </div>

        {/* Heading */}
        <h2 className="mb-6 max-w-3xl text-[clamp(2.5rem,6vw,4rem)] font-black leading-tight">
          Let’s build something
          <br />
          meaningful together
        </h2>

        {/* Description */}
        <p className="mb-12 max-w-2xl text-lg text-white/70">
          If you’re interested in working together, have a question,
          or just want to say hello — feel free to reach out.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          {/* Email (primary) */}
          <a
            href="mailto:bhaskar-ruthvik@tamu.edu"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-teal-400
              px-8 py-3
              text-sm font-semibold
              text-black
              transition
              hover:bg-teal-300
            "
          >
            <Mail className="h-4 w-4" />
            <span>Email me</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bhaskar-ruthvik-bikkina-a7908324a/"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
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
            <FaLinkedin className="h-4 w-4 text-white/80" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
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
            <FaGithub className="h-4 w-4 text-white/80" />
            <span>GitHub</span>
          </a>

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=YOUR_ID"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-3
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
            <FaGoogleScholar className="h-4 w-4 text-white/80" />
            <span>Google Scholar</span>
          </a>
        </div>
      </div>
    </section>
  );
}
