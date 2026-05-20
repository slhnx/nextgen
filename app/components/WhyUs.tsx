import {
  ArrowUpRight,
  Brain,
  Briefcase,
  GraduationCap,
  Play,
  Users,
  Workflow,
} from "lucide-react";
import Image from "next/image";
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
        <div className="mt-16 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] gap-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {items.slice(0, 4).map((it) => (
              <div
                key={it.t}
                className="rounded-2xl border border-border bg-card/40 p-7 hover:bg-card transition group"
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
          <div className="w-full max-w-md mx-auto">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="relative aspect-[4/5] bg-ink/50">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <button
                  type="button"
                  className="absolute inset-0 grid place-items-center text-foreground/80 hover:text-foreground transition"
                  aria-label="Play placement story"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-background/80 border border-border/60">
                    <Play className="h-6 w-6" />
                  </span>
                </button>
                <div className="absolute inset-x-0 bottom-4 px-5">
                  <div className="rounded-xl bg-background/70 border border-border/60 px-4 py-3 backdrop-blur">
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      Placement Story
                    </div>
                    <div className="mt-1 text-sm text-foreground">
                      Aman Kumar - Data Analyst
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-border/60">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-display font-semibold text-lg">
                      Aman Kumar
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Data Analyst - CTC: 8 LPA
                    </div>
                  </div>
                  <a
                    href="#"
                    className="h-9 w-9 rounded-md bg-primary/10 text-primary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"
                    aria-label="LinkedIn profile"
                  >
                    {/* <Linkedin className="h-4 w-4" /> */}
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="relative h-6 w-6 overflow-hidden rounded">
                    <Image
                      src="/logo.jpg"
                      alt="Rocket Learning"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    Rocket Learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground max-w-xl">
            Get started on your journey towards unlocking hundreds of job
            opportunities with NxtGen Academy.
          </p>
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:shadow-[0_0_40px_oklch(0.62_0.22_258/0.5)] transition"
          >
            Request a Callback
            <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
