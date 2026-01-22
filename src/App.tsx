import { AppSection } from "./components/AppSection";
import { ContactSection } from "./components/ContactSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SectionSeparator } from "./components/SectionSeparator";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="
            h-full w-full
            bg-[url('./kristaps-ungurs-bscs05zXuvE-unsplash.jpg')]
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
        {/* HERO */}
        <section className="min-h-screen flex items-center">
          <Hero />
        </section>
    <SectionSeparator/>
        {/* ABOUT */}
        <section id="about" className="min-h-screen">
        <AppSection />
        </section>
        <SectionSeparator/>
        <section id="projects" className="min-h-screen">
        <ProjectsSection />
        </section>
       
        <SectionSeparator/>
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
