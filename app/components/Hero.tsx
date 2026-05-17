import {
  ArrowUpRight,
  Brain,
  Briefcase,
  GraduationCap,
  Users,
  Workflow,
} from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="glass rounded-2xl p-5 hover:translate-y-[-2px] transition">
      <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider font-mono">
        {icon}
        {label}
      </div>
      <div className="mt-2 font-display text-3xl font-semibold text-gradient">
        {value}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 px-4">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          AI-Powered Career Academy / Cohort 07 now open
        </div>

        <h1 className="font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] font-semibold max-w-5xl">
          Build your career in{" "}
          <span className="text-gradient italic">AI & Analytics</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Master Business Analytics, Data Analytics, and AI Product Management
          with real-world Gen AI tools, live projects, and industry mentorship.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:shadow-[0_0_40px_oklch(0.62_0.22_258/0.5)] transition"
          >
            Explore Programs
            <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3.5 font-medium hover:bg-card transition"
          >
            Book Free Career Session
          </a>
        </div>

        <div className="relative mt-20 grid lg:grid-cols-5 gap-4">
          <StatCard
            label="Learners"
            value="5,000+"
            icon={<Users className="h-4 w-4" />}
          />
          <StatCard
            label="Hiring Partners"
            value="100+"
            icon={<Briefcase className="h-4 w-4" />}
          />
          <StatCard
            label="Industry Projects"
            value="50+"
            icon={<Workflow className="h-4 w-4" />}
          />
          <StatCard
            label="AI-Powered Learning Platform"
            value="Yes"
            icon={<Brain className="h-4 w-4" />}
          />
          <StatCard
            label="Placement Support"
            value="100%"
            icon={<GraduationCap className="h-4 w-4" />}
          />
        </div>
      </div>
    </section>
  );
}
