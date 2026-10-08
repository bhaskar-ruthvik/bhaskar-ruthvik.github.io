import { FaLinkedin, FaGithub, FaGoogleScholar } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { GlassPanel } from "../components/GlassPanel";
import { SectionLabel } from "../components/SectionLabel";

const secondaryButton = `
  inline-flex
  items-center
  justify-center
  gap-3
  rounded-full
  bg-white/10
  px-6 py-3
  sm:px-8
  text-sm font-medium
  text-white
  backdrop-blur-md
  transition
  hover:bg-white/20
`;

export function ContactSection() {
  return (
    <GlassPanel>
        <SectionLabel>Contact</SectionLabel>

        {/* Heading */}
        <h2 className="mb-6 max-w-3xl text-[clamp(2.25rem,6vw,4rem)] font-black leading-tight">
          Let’s connect!
        </h2>

        {/* Description */}
        <p className="mb-10 max-w-2xl text-base text-white/70 sm:mb-12 sm:text-lg">
          I’m a Graduate Computer Science student at Texas A&amp;M University,
          graduating in May 2027 and exploring full-time opportunities across
          software engineering, ML systems, and AI starting June 2027. If you’re interested in
          collaborating, discussing ideas, or learning more about my work,
          I’d love to connect.
        </p>

        {/* CTA buttons: 2-up grid on phones, a single row from sm up */}
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
          {/* Email (primary) */}
          <a
            href="mailto:bhaskar-ruthvik@tamu.edu"
            className="
              col-span-2
              inline-flex
              items-center
              justify-center
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
            className={secondaryButton}
          >
            <FaLinkedin className="h-4 w-4 text-white/80" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/bhaskar-ruthvik"
            target="_blank"
            rel="noreferrer"
            className={secondaryButton}
          >
            <FaGithub className="h-4 w-4 text-white/80" />
            <span>GitHub</span>
          </a>

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=Q9gzG3cAAAAJ"
            target="_blank"
            rel="noreferrer"
            className={`col-span-2 ${secondaryButton}`}
          >
            <FaGoogleScholar className="h-4 w-4 text-white/80" />
            <span>Google Scholar</span>
          </a>
        </div>
    </GlassPanel>
  );
}
