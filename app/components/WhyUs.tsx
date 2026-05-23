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
      className="py-28 px-4 bg-gradient-to-b from-transparent via-card/30 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why NxtGen"
          title="Why students choose NxtGen Academy"
        />
        <div className="mt-16 grid lg:grid-cols-[1fr_minmax(0,360px)] gap-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((it) => (
              <Card
                key={it.t}
                className="rounded-2xl border border-border bg-card/40 p-7 hover:bg-card transition group/card gap-0 overflow-visible border-0 shadow-none ring-0"
              >
                <CardContent className="p-0">
                  <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary grid place-items-center group-hover/card:bg-primary group-hover/card:text-primary-foreground transition">
                    {it.icon}
                  </div>
                  <h4 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {it.t}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {it.d}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="w-full max-w-md mx-auto lg:max-w-none lg:sticky lg:top-24 lg:self-start">
            <Card className="rounded-2xl border border-border bg-card overflow-hidden gap-0 shadow-none ring-0 border-0">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] bg-ink/50">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute inset-0 w-full h-full hover:bg-transparent grid place-items-center text-foreground/80 hover:text-foreground transition cursor-pointer"
                    aria-label="Play placement story"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-background/80 border border-border/60">
                      <Play className="h-6 w-6" />
                    </span>
                  </Button>
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
                      <div className="font-display font-semibold text-lg text-foreground">
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
              </CardContent>
            </Card>
            <div className="mt-6 flex flex-col gap-4 items-start">
              <p className="text-sm text-muted-foreground">
                Get started on your journey towards unlocking hundreds of job
                opportunities with NxtGen Academy.
              </p>
              <a
                href="#cta"
                className={`${buttonVariants({
                  size: "lg",
                })} rounded-xl px-6 py-3.5 h-auto font-medium hover:shadow-[0_0_40px_oklch(0.62_0.22_258/0.5)] transition group/button border-0`}
              >
                Request a Callback
                <ArrowUpRight className="h-4 w-4 group-hover/button:rotate-45 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
