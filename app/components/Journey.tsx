import SectionHeading from "./SectionHeading";

const steps = [
  "Career Counselling & Skill Assessment",
  "Core Foundation Training",
  "Hands-on Industry Projects",
  "Gen AI & Automation Modules",
  "Portfolio + Resume Building",
  "Mock Interviews & Placement Support",
];

export default function Journey() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Learning Journey"
          title="Your Career Transformation Roadmap"
        />
        <ol className="mt-16 relative grid md:grid-cols-2 gap-x-12 gap-y-2">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <li
              key={s}
              className={`relative py-6 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:mt-24"}`}
            >
              <div
                className={`inline-flex items-center gap-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <span className="font-mono text-xs text-primary border border-primary/40 rounded-md px-2 py-0.5">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="mt-3 font-display text-xl font-medium">{s}</h4>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
