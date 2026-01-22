import { AppSection } from "./components/AppSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <main
        className="
          relative mx-auto min-h-screen rounded-lg
          bg-[url('./kristaps-ungurs-bscs05zXuvE-unsplash.jpg')]
          bg-cover bg-center bg-no-repeat
          p-8 shadow-2xl px-6 md:px-16
        "
      >
        {/* Overlay */}
        <div className="absolute inset-0 rounded-lg bg-black/50" />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-b from-transparent to-[#070b0a]" />
      </main>
      <AppSection/>
    </div>
  );
}

export default App;
