import { Brain, Briefcase, GraduationCap, Users, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: <Briefcase className="h-5 w-5" />,
    t: "Industry-Focused Curriculum",
    d: "Learn exactly what companies expect in modern AI and analytics roles.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    t: "Gen AI Integrated Learning",
    d: "Master ChatGPT, AI workflows, automation, and AI productivity tools.",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    t: "Live Industry Projects",
    d: "Build portfolio-ready dashboards, AI automations, and analytics case studies.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    t: "Placement Preparation",
    d: "Resume building, LinkedIn optimization, mock interviews, and portfolio guidance.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    t: "Mentorship from Industry Experts",
    d: "Learn directly from professionals working in analytics and product domains.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      className="py-28 px-4 bg-gradient-to-b from-transparent via-card/30 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why NxtGen"
          title="Why students choose NxtGen Academy"
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {items.map((it) => (
            <div
              key={it.t}
              className="bg-background p-8 hover:bg-card transition group"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                {it.icon}
              </div>
              <h4 className="mt-5 font-display text-lg font-semibold">
                {it.t}
              </h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
