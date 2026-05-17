import SectionHeading from "./SectionHeading";

const people = [
  {
    n: "Rohit Sharma",
    f: "Sales Executive",
    t: "Business Analyst",
  },
  {
    n: "Neha Verma",
    f: "Fresher",
    t: "Data Analyst",
  },
  {
    n: "Aman Gupta",
    f: "Operations Executive",
    t: "Associate Product Manager",
  },
];

export default function Stories() {
  return (
    <section className="py-28 px-4 bg-gradient-to-b from-transparent via-card/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Career Transition Stories"
          title="Real people. Real role transitions."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {people.map((p) => (
            <article key={p.n} className="glass rounded-2xl p-7 flex flex-col">
              <div className="font-display font-semibold text-lg">{p.n}</div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  From
                </div>
                <div className="mt-1 text-sm text-foreground">{p.f}</div>
                <div className="mt-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  To
                </div>
                <div className="mt-1 text-sm text-foreground">{p.t}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
