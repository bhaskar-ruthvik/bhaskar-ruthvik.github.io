import { useState } from "react";
import { ExperienceSummary } from "../components/ExperienceSummary";
import { ResearchSummary } from "../components/ResearchSummary";
import { ExperienceResearchModal } from "../components/ExperienceResearchModal";

/* ================= TYPES ================= */

type BaseDetailItem = {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
};

type ExperienceItem = BaseDetailItem & {
  type: "experience";
  logo: string;
};

type ResearchItem = BaseDetailItem & {
  type: "research";
};

type DetailItem = ExperienceItem | ResearchItem;

/* ================= COMPONENT ================= */

export function ExperienceResearchSection() {
  const [activeItem, setActiveItem] = useState<DetailItem | null>(null);
  const [expanded, setExpanded] = useState(false);

  const experiences: ExperienceItem[] = [
    {
        type: "experience",
        title: "Graduate Researcher",
        subtitle: "TAMU Flair Lab",
        description:
          "Unified XGBoost regression trees with minimal performance loss and improved the Gini metric by 33% using Bayesian optimization, large-scale SQL analysis, and Spark pipelines.",
        logo: "/logos/flair.png",
      },    
    {
        type: "experience",
        title: "Undergraduate Research Assistant - VR",
        subtitle: "BITS Hyderabad",
        description:
          "Unified XGBoost regression trees with minimal performance loss and improved the Gini metric by 33% using Bayesian optimization, large-scale SQL analysis, and Spark pipelines.",
        logo: "/logos/bits.png",
      },
    {
      type: "experience",
      title: "Data Science Intern",
      subtitle: "American Express",
      description:
        "Unified XGBoost regression trees with minimal performance loss and improved the Gini metric by 33% using Bayesian optimization, large-scale SQL analysis, and Spark pipelines.",
      logo: "/logos/amex.png",
    },
     {
        type: "experience",
        title: "Undergraduate Research Assistant - RAG",
        subtitle: "BITS Hyderabad",
        description:
          "Unified XGBoost regression trees with minimal performance loss and improved the Gini metric by 33% using Bayesian optimization, large-scale SQL analysis, and Spark pipelines.",
        logo: "/logos/bits.png",
      },
    {
      type: "experience",
      title: "Research Intern",
      subtitle: "GCIR, BITS Hyderabad",
      description:
        "Built retrieval-augmented generation systems using FAISS, LangChain, and large language models for low-literate users across legal and financial domains.",
      logo: "/logos/microsoft.jpg",
    },
    {
      type: "experience",
      title: "Software Engineer Intern",
      subtitle: "OnFinance AI",
      description:
        "Designed and deployed scalable backend services and performance-critical APIs for production financial analytics platforms.",
      logo: "/logos/onfinance.jpg",
    },
  ];

  const research: ResearchItem[] = [
    {
      type: "research",
      title: "RAG-based Question Answering for Low-Literate Users",
      subtitle: "ECIR 2025 · EMNLP 2025 Workshop",
      description:
        "Designed and deployed an end-to-end RAG system using LLMs and vector search to improve accessibility, inference quality, and robustness.",
      link: "https://scholar.google.com",
    },
    {
      type: "research",
      title: "Multimodal Sarcasm Detection",
      subtitle: "EMNLP 2025 Workshop",
      description:
        "Evaluated multimodal deep learning models for sarcasm detection and optimized inference speed and accuracy.",
    },
    {
      type: "research",
      title: "Robust ML Systems for Real-World Deployment",
      subtitle: "Under Review",
      description:
        "Investigated robustness and reliability challenges in scalable ML inference pipelines.",
    },
  ];

  const extracurriculars = [
    {
      title: "Lead — ACM BITS App Development",
      subtitle: "Student Organization",
    },
    {
      title: "Founder — Open-Source Club",
      subtitle: "Community Initiative",
    },
    {
      title: "Teaching Assistant — Data Mining",
      subtitle: "Academic Leadership",
    },
    {
      title: "Winner — FD Innovation Day",
      subtitle: "Best Poster Award",
    },
  ];

  return (
    <section className="relative py-24">
      <div
        className="
          mx-auto max-w-6xl
          rounded-3xl
          bg-black/40
          backdrop-blur-lg
          shadow-xl
          px-8 py-12
          md:px-16
        "
      >
        {/* Section label */}
        <div className="mb-10">
          <p className="text-sm tracking-[0.3em] text-white/50">
            EXPERIENCE & RESEARCH
          </p>
          <div className="mt-2 h-px w-8 bg-[#5EEAD4]/50" />
        </div>

        {/* TWO COLUMNS */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* EXPERIENCE */}
          <div>
            <h2 className="mb-4 text-2xl font-black">
              Experience
            </h2>
            <div className="space-y-3">
              {experiences.map((e, i) => (
                <ExperienceSummary
                  key={i}
                  title={e.title}
                  org={e.subtitle}
                  logo={e.logo}
                  onClick={() => setActiveItem(e)}
                />
              ))}
            </div>
          </div>

          {/* RESEARCH */}
          <div>
            <h2 className="mb-4 text-2xl font-black">
              Research Highlights
            </h2>
            <div className="space-y-3">
              {research.map((r, i) => (
                <ResearchSummary
                  key={i}
                  title={r.title}
                  venue={r.subtitle}
                  onClick={() => setActiveItem(r)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* EXPAND TOGGLE */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="
              rounded-full
              bg-white/10
              px-8 py-3
              text-sm
              font-medium
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>

        {/* EXTRACURRICULARS — ONLY WHEN EXPANDED */}
        {expanded && (
          <div className="mt-14">
            <h2 className="mb-4 text-2xl font-black">
              Leadership & Activities
            </h2>

            <div className="grid gap-3 md:grid-cols-2">
              {extracurriculars.map((item, i) => (
                <div
                  key={i}
                  className="
                    rounded-xl
                    bg-white/5
                    px-5 py-3
                    backdrop-blur-md
                  "
                >
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-white/50">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL */}
      {activeItem && (
        <ExperienceResearchModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </section>
  );
}
