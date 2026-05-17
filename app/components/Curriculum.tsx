import SectionHeading from "./SectionHeading";

const stacks = [
  {
    t: "Analytics Stack",
    items: ["Excel", "SQL", "Power BI", "Tableau", "Python"],
  },
  {
    t: "AI Stack",
    items: [
      "ChatGPT",
      "Gemini",
      "Prompt Engineering",
      "AI Automation",
      "No-Code AI Tools",
    ],
  },
  {
    t: "Product Stack",
    items: ["Jira", "Agile", "Scrum", "Product Strategy", "User Research"],
  },
];

export default function Curriculum() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Skills You'll Master"
          title="Analytics, AI, and product skills that make you job-ready."
        />
        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {stacks.map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h4 className="font-display text-xl font-semibold">{s.t}</h4>
              <ul className="mt-6 space-y-3">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between border-b border-border/60 pb-3 text-sm"
                  >
                    <span>{i}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      [ included ]
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
