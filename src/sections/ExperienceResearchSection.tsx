import { useState } from "react";
import { ExperienceSummary } from "../components/ExperienceSummary";
import { ResearchSummary } from "../components/ResearchSummary";
import { ExperienceResearchModal } from "../components/ExperienceResearchModal";
import { GlassPanel } from "../components/GlassPanel";
import { SectionLabel } from "../components/SectionLabel";

/* ================= TYPES ================= */

type BaseDetailItem = {
  title: string;
  subtitle: string;
  description: string;
  period?: string;
  highlights?: string[];
  link?: string;
};

type ExperienceItem = BaseDetailItem & {
  type: "experience";
  logo?: string;
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
      title: "MTS Intern",
      subtitle: "zaimler",
      period: "May 2026 – Aug 2026 · San Mateo, CA",
      description:
        "Built production APIs, LLM serving infrastructure, and evaluation tooling for agentic AI systems.",
      highlights: [
        "Designed and built production APIs on FastAPI and Temporal, including an inference API and progress tracking over long-running jobs, driving cross-team alignment on the contract.",
        "Benchmarked model serving on Baseten and vLLM across quantization, speculative decoding, and tensor/data/expert parallelism, cutting latency 3–4x and sustaining 2x throughput at peak traffic.",
        "Upgraded a production service across Docker and Kubernetes, patching Trivy-flagged CVEs and benchmarking each image against the incumbent deployment to confirm no inference regression.",
        "Built a config-driven evaluation pipeline for a CrewAI multi-agent system with MLflow experiment tracking and an LLM-as-judge framework for interpretable, reproducible scoring.",
        "Analyzed production query failures, establishing a POC that classifies 7 categories of query ambiguity, and prototyped compiling an IR to Cypher to constrain agentic generation.",
      ],
      logo: "/logos/zaimler-mark.svg",
    },
    {
      type: "experience",
      title: "Graduate Researcher",
      subtitle: "TAMU Flair Lab",
      period: "Oct 2025 – Present · College Station, TX",
      description:
        "Researching adaptive memory strategies that make LLM agents search more efficiently in interactive environments.",
      highlights: [
        "Benchmarked ReAct agents on ALFWorld and WebShop, characterizing search inefficiencies across model sizes.",
        "Designing cross-episode memory mechanisms that let small (1B–8B) models reduce redundant exploration.",
      ],
      logo: "/logos/flair.png",
    },
    {
      type: "experience",
      title: "Undergraduate Research Assistant - VR",
      subtitle: "BITS Hyderabad",
      period: "Jan 2025 – Jun 2025",
      description:
        "Built a VR fire safety education simulation for Meta Quest Pro, used as the experimental platform for user studies.",
      highlights: [
        "Developed the simulation in Unity with C# scripting for fire spread, extinguishing, and crowd behavior, integrating hand tracking via the Unity XR API.",
        "Optimized performance for low-powered hardware and iterated on the system through user-study feedback.",
        "A paper based on the study's findings was accepted at India HCI 2025.",
      ],
      link: "https://github.com/bhaskar-ruthvik/unity-fire-xr",
      logo: "/logos/bits.png",
    },
    {
      type: "experience",
      title: "Data Science Intern",
      subtitle: "American Express",
      period: "Jul 2024 – Dec 2024 · Gurugram, India",
      description:
        "Unified XGBoost regression trees with minimal performance loss and improved the Gini metric by 33% using Bayesian optimization, large-scale SQL analysis, and Spark pipelines.",
      highlights: [
        "Pioneered a novel approach to unify XGBoost regression trees in Python with a performance drop of less than 1%.",
        "Performed extensive case studies using SQL and Spark to gain insights, engineer features, and alter the boosting process.",
        "Used Bayesian optimization to improve the Gini evaluation metric by 33%, beating standalone models by 14%.",
        "Worked cross-functionally with decision science teams to land a compliance-approved model unification strategy.",
      ],
      logo: "/logos/amex.png",
    },
    {
      type: "experience",
      title: "Undergraduate Research Assistant - RAG",
      subtitle: "BITS Hyderabad",
      period: "Mar 2024 – Jun 2025",
      description:
        "Built a retrieval-augmented question answering system for low-literate users, published at ECIR 2025 and the HCI+NLP Workshop at EMNLP 2025.",
      highlights: [
        "Built a retrieval system over a FAISS vector index, serving semantic search results via a Flask backend.",
        "Improved retrieval quality by 53% and reduced inference latency by 30% using in-context learning.",
      ],
      logo: "/logos/bits.png",
    },
    {
      type: "experience",
      title: "Research Intern",
      subtitle: "GCIR, BITS Hyderabad",
      period: "Jan 2024 – May 2024",
      description:
        "Collaborated with Microsoft Research to build educational tools for button phones with limited compute.",
      highlights: [
        "Developed an AI voice assistant using OpenAI Whisper, potentially improving accessibility for 700+ students.",
        "Created an educational streaming application using WebRTC for potential use by 40+ visually impaired teachers.",
        "Coordinated a team of researchers in documenting clean, reusable setup code, simplifying future contributions.",
      ],
      logo: "/logos/microsoft.jpg",
    },
    {
      type: "experience",
      title: "Software Engineer Intern",
      subtitle: "OnFinance AI",
      period: "May 2023 – Jul 2023 · Remote",
      description:
        "Fine-tuned and deployed an open-source LLM on global financial data in a startup environment.",
      highlights: [
        "Led a group of interns in fine-tuning Falcon 7B on global financial data using PEFT and QLoRA.",
        "Cut model inference times by 50% using 8-bit loading and hyperparameter tuning.",
        "Worked on the CI/CD pipeline for ML models using Azure ML and handled containerization with Kubernetes.",
      ],
      logo: "/logos/onfinance.jpg",
    },
  ];

  const research: ResearchItem[] = [
    {
      type: "research",
      title: "RAG-based Question Answering for Low-Literate Users",
      subtitle: "ECIR 2025 · HCI+NLP Workshop @ EMNLP 2025",
      description:
        "Designed an end-to-end RAG system using LLMs and FAISS vector search to make question answering accessible to low-literate users, improving retrieval quality by 53% and cutting inference latency by 30%.",
      link: "https://scholar.google.com/citations?user=Q9gzG3cAAAAJ",
    },
    {
      type: "research",
      title: "VR Fire Safety Education",
      subtitle: "India HCI 2025",
      description:
        "Built a VR fire safety simulation for Meta Quest Pro and ran user studies evaluating its learning outcomes.",
      link: "https://scholar.google.com/citations?user=Q9gzG3cAAAAJ",
    },
    {
      type: "research",
      title: "Adaptive Memory for LLM Agents",
      subtitle: "TAMU Flair Lab · Ongoing",
      description:
        "Developing cross-episode memory mechanisms that help small (1B–8B) LLM agents reduce redundant exploration in interactive environments like ALFWorld and WebShop.",
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
      title: "Teaching Assistant — Data Analytics Platforms (TAMU) & Data Mining (BITS)",
      subtitle: "Academic Leadership",
    },
    {
      title: "Winner — FD Innovation Day, BITS Hyderabad",
      subtitle: "Best Poster Award",
    },
  ];

  return (
    <>
      <GlassPanel>
        <SectionLabel>Experience & Research</SectionLabel>

        {/* TWO COLUMNS (stacked below lg) */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* EXPERIENCE */}
          <div>
            <h2 className="mb-4 text-2xl font-black">
              Experience
            </h2>
            <div className="divide-y divide-white/10 md:space-y-3 md:divide-y-0">
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
            <div className="divide-y divide-white/10 md:space-y-3 md:divide-y-0">
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
            aria-expanded={expanded}
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
            {expanded ? "Show less" : "Leadership & activities"}
          </button>
        </div>

        {/* EXTRACURRICULARS — ONLY WHEN EXPANDED */}
        {expanded && (
          <div className="mt-10 md:mt-14">
            <h2 className="mb-4 text-2xl font-black">
              Leadership & Activities
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 md:gap-3">
              {extracurriculars.map((item, i) => (
                <div
                  key={i}
                  className="
                    border-l-2 border-white/15 pl-4
                    md:border-l-0
                    md:rounded-xl
                    md:bg-white/5
                    md:px-5 md:py-3
                    md:backdrop-blur-md
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
      </GlassPanel>

      {/* MODAL */}
      {activeItem && (
        <ExperienceResearchModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </>
  );
}
