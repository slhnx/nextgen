"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const alumni = [
  {
    name: "Megha Chouhan",
    role: "Data Analyst",
    company: "Rocket Learning",
    before: "Research Analyst",
    after: "Data Analyst",
    accent: "from-rose-400/30 via-fuchsia-400/20 to-transparent",
  },
  {
    name: "Mansi Mishra",
    role: "MIS Executive",
    company: "IndiGo",
    before: "HR Consultant",
    after: "MIS Executive",
    accent: "from-amber-400/30 via-orange-400/20 to-transparent",
  },
  {
    name: "Yash Kumar",
    role: "Product Analyst Intern",
    company: "Spinny",
    before: "Fresher",
    after: "Product Analyst Intern",
    accent: "from-sky-400/30 via-cyan-400/20 to-transparent",
  },
  {
    name: "Vasudev",
    role: "Analyst - Trading Analytics",
    company: "Accenture",
    before: "Fresher",
    after: "Trading Analyst",
    accent: "from-emerald-400/30 via-teal-400/20 to-transparent",
  },
  {
    name: "Sana Khan",
    role: "Business Analyst",
    company: "EY",
    before: "Operations Executive",
    after: "Business Analyst",
    accent: "from-indigo-400/30 via-violet-400/20 to-transparent",
  },
  {
    name: "Ravi Patel",
    role: "Reporting Analyst",
    company: "Deloitte",
    before: "Accountant",
    after: "Reporting Analyst",
    accent: "from-lime-400/30 via-emerald-400/20 to-transparent",
  },
];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
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
          <SectionHeading
            eyebrow="Placement Stories"
            title="Newton Alumni Network"
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll(-1)}
              className="h-11 w-11 rounded-xl border border-border bg-card/70 text-foreground grid place-items-center hover:border-primary/40 hover:text-primary transition"
              aria-label="Scroll alumni list left"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll(1)}
              className="h-11 w-11 rounded-xl border border-border bg-card/70 text-foreground grid place-items-center hover:border-primary/40 hover:text-primary transition"
              aria-label="Scroll alumni list right"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {alumni.map((person) => (
            <article
              key={person.name}
              className="min-w-[260px] max-w-[260px] sm:min-w-[300px] sm:max-w-[300px] snap-start rounded-2xl border border-border bg-card/80 shadow-[0_20px_60px_oklch(0.04_0.015_250/0.45)]"
            >
              <div
                className={`relative h-40 rounded-t-2xl bg-gradient-to-br ${person.accent}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_oklch(0.97_0.005_250/0.7),_transparent_65%)]" />
                <div className="absolute left-4 bottom-4 h-16 w-16 rounded-2xl bg-background/90 border border-border/70 grid place-items-center text-xl font-display font-semibold text-foreground">
                  {getInitials(person.name)}
                </div>
              </div>
              <div className="px-5 pb-5">
                <div className="-mt-6 rounded-xl border border-border bg-background/90 px-4 py-3 shadow-sm">
                  <div className="font-display font-semibold text-base">
                    {person.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {person.role}
                  </div>
                  <div className="mt-2 text-xs font-semibold tracking-wide text-muted-foreground">
                    {person.company}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-[auto_1fr_auto] items-center gap-2 text-sm text-foreground">
                  <span className="rounded-full bg-rose-500/15 px-2.5 py-1 text-xs font-semibold text-rose-200">
                    Before
                  </span>
                  <span>{person.before}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                    After
                  </span>
                  <span>{person.after}</span>
                </div>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
