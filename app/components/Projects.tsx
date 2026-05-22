import Image from "next/image";
import SectionHeading from "./SectionHeading";

const list = [
  { t: "Sales Dashboard", s: "Power BI", k: "Analytics", img: "/sales_dashboard.jpeg" },
  { t: "AI Resume Analyzer", s: "Python + LLM", k: "Gen AI", img: "/ai_resume_analyzer.jpeg" },
  { t: "Customer Churn Prediction", s: "Python · ML", k: "Data Science", img: "/customer_churn_predictions.jpeg" },
  { t: "AI Product Case Study", s: "PM Stack", k: "Product", img: "" },
  { t: "E-commerce Analytics Dashboard", s: "SQL · Tableau", k: "Analytics", img: "/ecommer_analytics.jpeg" },
  { t: "AI Chatbot Workflow", s: "No-Code AI", k: "Automation", img: "/ai_chat_workflow.jpeg" },
  { t: "Marketing Performance Dashboard", s: "GA4 · BI", k: "Analytics", img: "/marketing_performance_dashboard.jpeg" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Real Industry Projects"
          title="Real industry projects. Real portfolio outcomes."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {list.map((p, i) => (
            <div
              key={p.t}
              className="group relative aspect-[4/5] rounded-2xl border border-border bg-card overflow-hidden hover:border-primary transition"
            >
              {/* Background image */}
              {p.img ? (
                <Image
                  src={p.img}
                  alt={p.t}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="absolute inset-0 grid-pattern opacity-30" />
              )}

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />

              {/* Glow effect */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent drop-shadow-md">
                    {String(i + 1).padStart(2, "0")} / {p.k}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-xl font-semibold leading-tight text-white drop-shadow-md">
                    {p.t}
                  </h4>
                  <p className="mt-1 text-sm text-white/70">{p.s}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
