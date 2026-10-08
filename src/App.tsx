import { AppSection } from "./sections/AppSection";
import { ContactSection } from "./sections/ContactSection";
import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SectionSeparator } from "./components/SectionSeparator";
// July 4th fireworks over the pier, San Francisco (own photo). Pre-blurred and
// compressed from a 4000x3000 original kept outside the repo.
import bgImage from "./assets/background-sf.webp";
import { ExperienceResearchSection } from "./sections/ExperienceResearchSection";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Ambient background (blur is baked into the image) */}
      <div className="fixed inset-0 -z-10">
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
          className="
            h-full w-full
            bg-cover bg-center
            brightness-80 contrast-110
          "
        />
        {/* Phones have no panels, so darken the whole backdrop for legibility */}
        <div className="absolute inset-0 bg-black/55 md:hidden" />
      </div>

      {/* FIXED NAVBAR — ISOLATED */}
      <div className="fixed inset-x-0 top-3 z-[9999] flex justify-center md:top-6">
        <Navbar />
      </div>

      {/* Page content */}
      <main>
        <section id="home" data-section="home">
          <Hero />
        </section>
        <SectionSeparator />
        <section id="about" data-section="about" className="scroll-mt-20 md:scroll-mt-28">
          <AppSection />
        </section>
        <SectionSeparator />
        <section id="experience" data-section="experience" className="scroll-mt-20 md:scroll-mt-28">
          <ExperienceResearchSection />
        </section>
        <SectionSeparator />
        <section id="projects" data-section="projects" className="scroll-mt-20 md:scroll-mt-28">
          <ProjectsSection />
        </section>
        <SectionSeparator />
        <section id="contact" data-section="contact" className="scroll-mt-20 md:scroll-mt-28">
          <ContactSection />
        </section>
      </main>

      <footer className="px-4 pb-10 pt-12 text-center text-xs text-white/40 md:pt-16">
        © {new Date().getFullYear()} Bhaskar Ruthvik Bikkina
      </footer>
    </div>
  );
}

export default App;
