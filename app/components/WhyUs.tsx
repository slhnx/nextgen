import {
  ArrowUpRight,
  Sparkles,
  Play,
  MonitorPlay,
  ClipboardList,
  Contact,
  FileText,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    t: "Legal Job Guarantee Program",
    d: "A clear, written agreement that guarantees real placement opportunities and supports your career growth completely.",
  },
  {
    icon: <MonitorPlay className="h-5 w-5" />,
    t: "Proven Results",
    d: "Thousands of students placed in tech roles through strong guidance, practical training, and industry-focused preparation.",
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    t: "Job-Ready Curriculum",
    d: "Up-to-date curriculum designed with industry needs so students learn practical, job-ready skills quickly.",
  },
  {
    icon: <Contact className="h-5 w-5" />,
    t: "1:1 Mentor Support",
    d: "Learn directly from expert mentors employed at leading product-based companies who guide your progress every day.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    t: "Real-World Projects & Case Studies",
    d: "Create a professional portfolio using real-world projects that help you stand out to hiring recruiters.",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    t: "Alliances with Product Companies",
    d: "Meaningful alliances with product companies to bridge skill development and real employment.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-card/20 to-transparent"
    >
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Why NxtGen"
          title="Why students choose NxtGen Academy"
          subtitle="We bridge the gap between academic knowledge and industry expectations, transforming you into a top-tier candidate."
        />
        
        <div className="mt-20 grid lg:grid-cols-[1.2fr_minmax(0,400px)] gap-10 lg:gap-16">
          <div className="grid sm:grid-cols-2 gap-6 relative">
            {/* Subtle connecting lines */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none rounded-3xl" />
            
            {items.map((it, i) => (
              <ScrollReveal key={it.t} direction="up" delay={i * 100}>
                <Card
                  className="card-premium h-full group"
                >
                  <CardContent className="p-7">
                    <div className="flex justify-between items-start mb-6">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center border border-primary/20 shadow-sm group-hover/card:bg-primary group-hover/card:text-primary-foreground group-hover/card:scale-110 transition-all duration-500">
                        {it.icon}
                      </div>
                      <span className="font-mono text-4xl font-bold text-foreground/5 group-hover/card:text-foreground/10 transition-colors pointer-events-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-medium text-foreground group-hover/card:text-primary transition-colors">
                      {it.t}
                    </h4>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-medium">
                      {it.d}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="left" delay={300} className="w-full max-w-md mx-auto lg:max-w-none lg:sticky lg:top-32 lg:self-start">
            <Card className="rounded-3xl border border-border/60 bg-card overflow-hidden shadow-[0_20px_60px_-15px_oklch(0.04_0.015_250/0.5)] ring-1 ring-white/10 group">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] bg-ink/50 overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  
                  {/* Image placeholder - would be the video thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-card/80 to-primary/20 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute inset-0 w-full h-full hover:bg-transparent grid place-items-center text-foreground/80 hover:text-foreground transition cursor-pointer"
                    aria-label="Play placement story"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-background/80 border border-border/80 shadow-lg backdrop-blur-md group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Play className="h-7 w-7 ml-1" />
                    </span>
                  </Button>
                  
                  <div className="absolute inset-x-0 bottom-6 px-6">
                    <div className="rounded-2xl bg-background/70 border border-border/50 px-5 py-4 backdrop-blur-md shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent font-semibold mb-1">
                        Placement Story
                      </div>
                      <div className="text-base font-medium text-foreground">
                        Aman Kumar - Data Analyst
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-card border-t border-border/50">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-display font-medium text-xl text-foreground">
                        Aman Kumar
                      </div>
                      <div className="text-sm font-medium text-muted-foreground mt-1">
                        Data Analyst - CTC: <span className="text-foreground">8 LPA</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center gap-3 bg-background/50 rounded-xl p-3 border border-border/30">
                    <div className="relative h-8 w-8 overflow-hidden rounded-md border border-border">
                      <Image
                        src="/logo.jpg"
                        alt="Rocket Learning"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      Rocket Learning
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 flex flex-col gap-5 items-start">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get started on your journey towards unlocking hundreds of job
                opportunities with NxtGen Academy.
              </p>
              <a
                href="#cta"
                className={`${buttonVariants({
                  size: "lg",
                })} rounded-xl px-7 py-4 h-auto font-medium shadow-[0_0_20px_oklch(0.62_0.22_258/0.2)] hover:shadow-[0_0_40px_oklch(0.62_0.22_258/0.5)] hover:-translate-y-0.5 transition-all duration-300 group`}
              >
                Request a Callback
                <ArrowUpRight className="h-4 w-4 ml-1.5 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
