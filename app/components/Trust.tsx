const partners = [
  { name: "Google", className: "font-semibold tracking-tight" },
  { name: "Microsoft", className: "font-semibold tracking-tight" },
  { name: "Amazon", className: "font-semibold tracking-tight" },
  { name: "Deloitte", className: "font-semibold tracking-tight" },
  { name: "Accenture", className: "font-semibold tracking-tight" },
  { name: "Infosys", className: "font-semibold tracking-tight" },
  { name: "TCS", className: "font-semibold tracking-[0.2em]" },
  { name: "EY", className: "font-semibold tracking-[0.2em]" },
];

export default function Trust() {
  return (
    <section className="py-20 px-4 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground text-center">
          Companies Our Skills Align With
        </p>
        <p className="mt-3 text-sm text-muted-foreground text-center">
          Curriculum aligned with modern AI-driven industry requirements.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-background py-8 grid place-items-center text-muted-foreground hover:text-foreground transition"
            >
              <span className={`text-base sm:text-lg uppercase ${p.className}`}>
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
