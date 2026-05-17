import SectionHeading from "./SectionHeading";

const list = [
  { t: "Sales Dashboard", s: "Power BI", k: "Analytics" },
  { t: "AI Resume Analyzer", s: "Python + LLM", k: "Gen AI" },
  { t: "Customer Churn Prediction", s: "Python · ML", k: "Data Science" },
  { t: "AI Product Case Study", s: "PM Stack", k: "Product" },
  { t: "E-commerce Analytics Dashboard", s: "SQL · Tableau", k: "Analytics" },
  { t: "AI Chatbot Workflow", s: "No-Code AI", k: "Automation" },
  { t: "Marketing Performance Dashboard", s: "GA4 · BI", k: "Analytics" },
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
              className="group relative aspect-[4/5] rounded-2xl border border-border bg-card overflow-hidden p-5 flex flex-col justify-between hover:border-primary transition"
            >
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="relative">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")} / {p.k}
                </span>
              </div>
              <div className="relative">
                <h4 className="font-display text-xl font-semibold leading-tight">
                  {p.t}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">{p.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
