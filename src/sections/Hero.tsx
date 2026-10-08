import { FaGithub, FaGoogleScholar, FaLinkedin } from "react-icons/fa6";
import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import { containerInner, containerOuter } from "../components/Container";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/bhaskar-ruthvik",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhaskar-ruthvik-bikkina-a7908324a/",
    Icon: FaLinkedin,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=Q9gzG3cAAAAJ",
    Icon: FaGoogleScholar,
  },
  {
    label: "Email",
    href: "mailto:bhaskar-ruthvik@tamu.edu",
    Icon: Mail,
  },
];

/* Phones get only the essentials (name, one line, two buttons).
   Socials, logos and the scroll cue appear from md up. */
export function Hero() {
    return (
      <div
        className={`
          relative
          flex
          min-h-svh
          items-center
          pt-24
          pb-16
          md:pb-24
          ${containerOuter}
        `}
      >
        {/* Same column as the sections below, so left edges line up */}
        <div className={containerInner}>
          <h1 className="font-black">
            <span className="block text-base font-medium text-[#5EEAD4] sm:text-lg md:text-xl">
              Hello, I'm
            </span>
            <span
              className="
                mt-3
                block
                leading-[0.95]
                tracking-tight
                text-[clamp(3.25rem,13vw,5.5rem)]
                lg:text-[clamp(4rem,8.5vw,7rem)]
              "
            >
              Bhaskar Ruthvik
            </span>
          </h1>

          {/* Positioning — one line from lg up, balanced across two below */}
          <p
            className="
              mt-6
              text-balance
              text-lg
              sm:text-xl
              xl:text-2xl
              text-white/85
              lg:whitespace-nowrap
            "
          >
            I build LLM serving infrastructure and production backends.
          </p>
          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/55 sm:text-base">
            <span>MS Computer Science, Texas A&amp;M</span>
            <span aria-hidden="true" className="hidden text-white/25 sm:inline">·</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available June 2027
            </span>
          </p>

          {/* Calls to action */}
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="
                rounded-full
                bg-teal-400
                px-6 py-3 sm:px-8
                text-sm font-semibold
                text-black
                transition
                hover:bg-teal-300
              "
            >
              View my work
            </a>
            <a
              href="/Bhaskar_Ruthvik_Bikkina_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                px-4 py-3
                text-sm font-medium
                text-white/80
                ring-1 ring-white/20
                transition
                hover:bg-white/10 hover:text-white
                sm:px-6
              "
            >
              Résumé
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Socials (tablet / desktop) */}
            <div className="hidden items-center gap-1 pl-2 md:flex">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    text-white/50
                    transition
                    hover:bg-white/10 hover:text-white
                  "
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Credibility strip (tablet / desktop), monochrome so it reads as context, not ads */}
          <div className="mt-16 hidden md:block">
            <p className="mb-4 text-xs tracking-[0.3em] text-white/35">
              PREVIOUSLY AT
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <img
                src="/logos/zaimler.svg"
                alt="zaimler"
                width={2111}
                height={386}
                className="h-5 w-auto opacity-60 grayscale"
              />
              <span className="text-sm font-bold tracking-[0.15em] text-white/55">
                AMERICAN EXPRESS
              </span>
              <span className="text-sm text-white/45">
                Published at ECIR &amp; an EMNLP workshop
              </span>
            </div>
          </div>
        </div>

        {/* Scroll cue (tablet / desktop) */}
        <a
          href="#about"
          aria-label="Scroll to About"
          className="
            absolute bottom-6 left-1/2 hidden -translate-x-1/2
            rounded-full p-2
            text-white/40
            transition
            hover:text-white
            md:block
          "
        >
          <ChevronDown className="h-6 w-6 motion-safe:animate-bounce" />
        </a>
      </div>
    );
  }
