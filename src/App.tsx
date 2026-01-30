import { AppSection } from "./sections/AppSection";
import { ContactSection } from "./sections/ContactSection";
import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SectionSeparator } from "./components/SectionSeparator";
import bgImage from "./assets/kristaps-ungurs-bscs05zXuvE-unsplash.jpg"
import { ExperienceResearchSection } from "./sections/ExperienceResearchSection";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10">
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
          className="
            h-full w-full
            bg-cover bg-center
            blur-xl scale-110
            brightness-80 contrast-110
          "
        />
      </div>

      {/* FIXED NAVBAR — ISOLATED */}
      <div className="fixed top-6 left-0 right-0 z-[9999] flex justify-center">
        <Navbar />
      </div>

      {/* Page content */}
      <main id="home" className="relative pt-32">
  <section data-section="home" className="h-screen">
    <Hero />
  </section>
<SectionSeparator/>
  <section id="about" data-section="about" className="min-h-screen">
    <AppSection />
  </section>
  <SectionSeparator/>
  <section id="experience" data-section="experience" className="min-h-screen">
    <ExperienceResearchSection />
  </section>
<SectionSeparator/>
  <section id="projects" data-section="projects" className="min-h-screen">
    <ProjectsSection />
  </section>
<SectionSeparator/>
  <section id="contact" data-section="contact" className="h-screen">
    <ContactSection />
  </section>
</main>
    </div>
  );
}

export default App;
