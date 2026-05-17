import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-28 px-4">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden p-12 md:p-20 glow-border bg-card">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float" />
        <div className="relative">
          <span className="text-xs font-mono uppercase tracking-widest text-accent">
            Your move
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] font-semibold max-w-3xl">
            Your AI career{" "}
            <span className="text-gradient italic">starts here.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Become job-ready in Analytics & AI with practical learning and
            industry-focused mentorship.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-7 py-4 font-medium hover:shadow-[0_0_40px_oklch(0.62_0.22_258/0.6)] transition"
            >
              Apply Now
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-7 py-4 font-medium hover:bg-background transition"
            >
              Talk to a Counsellor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
