"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { LiaLinkedin } from "react-icons/lia";
import testimonials from "./testimonials.json";

const ACCENTS = [
  "from-rose-400/30 via-fuchsia-400/20 to-transparent",
  "from-amber-400/30 via-orange-400/20 to-transparent",
  "from-sky-400/30 via-cyan-400/20 to-transparent",
  "from-emerald-400/30 via-teal-400/20 to-transparent",
  "from-indigo-400/30 via-violet-400/20 to-transparent",
  "from-lime-400/30 via-emerald-400/20 to-transparent",
];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "";
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}

export default function AlumniNetwork() {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: number) => {
    trackRef.current?.scrollBy({
      left: direction * 360,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="alumni"
      className="py-28 px-4 bg-gradient-to-b from-transparent via-card/30 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <SectionHeading
              eyebrow="Placement Stories"
              title="Learner Voices That Inspire Us"
            />
            <p className="text-muted-foreground text-sm max-w-xl">
              Early feedback from active learners experiencing the value of our hands-on training and expert mentorship.
            </p>
          </div>
          <div className="flex items-center gap-2 md:mt-10 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll(-1)}
              className="h-11 w-11 rounded-xl border border-border bg-card/70 hover:border-primary/40 hover:text-primary transition flex items-center justify-center"
              aria-label="Scroll testimonials left"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll(1)}
              className="h-11 w-11 rounded-xl border border-border bg-card/70 hover:border-primary/40 hover:text-primary transition flex items-center justify-center"
              aria-label="Scroll testimonials right"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {testimonials.map((person, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            const linkedinUrl = person.linkedin || `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(person.name)}`;
            return (
              <Card
                key={`${person.name}-${index}`}
                className="min-w-[280px] max-w-[280px] sm:min-w-[320px] sm:max-w-[320px] snap-start rounded-2xl border border-border bg-card/80 shadow-[0_20px_60px_oklch(0.04_0.015_250/0.45)] flex flex-col justify-between overflow-hidden gap-0 ring-0"
              >
                <CardContent className="p-0 flex flex-col justify-between h-full">
                  <div>
                    <div
                      className={`relative h-40 rounded-t-2xl bg-gradient-to-br ${accent}`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_oklch(0.97_0.005_250/0.7),_transparent_65%)]" />
                      <div className="absolute left-4 bottom-4 h-16 w-16 rounded-2xl bg-background/90 border border-border/70 grid place-items-center text-xl font-display font-semibold text-foreground">
                        {getInitials(person.name)}
                      </div>
                    </div>
                    <div className="px-5 pb-1">
                      <div className="-mt-6 rounded-xl border border-border bg-background/90 px-4 py-3 shadow-sm relative z-10">
                        <div className="font-display font-semibold text-base text-foreground line-clamp-1">
                          {person.name}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                          {person.role}
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <div className="text-[10px] font-semibold tracking-wide text-primary/80 truncate max-w-[150px]">
                            {person.course.replace(/ - testimonials| - DCS| – testimonials/i, "")}
                          </div>
                          <div className="flex gap-0.5 text-amber-400 text-xs shrink-0">
                            {Array.from({ length: person.rating || 5 }).map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 text-xs leading-relaxed text-muted-foreground line-clamp-5 min-h-[90px]">
                        "{person.message}"
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${buttonVariants({
                        variant: "outline",
                      })} mt-4 w-full rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:text-blue-400 border-blue-500! hover:border-blue-600 hover:bg-blue-500/10 transition bg-transparent flex items-center justify-center gap-2`}
                    >
                      <LiaLinkedin className="h-4 w-4 text-blue-500" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
