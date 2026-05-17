"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const qs = [
  {
    q: "Do I need coding experience?",
    a: "No, beginner-friendly programs are available.",
  },
  {
    q: "Will I get placement support?",
    a: "Yes, including resume, interview, and job assistance.",
  },
  {
    q: "Are the classes live?",
    a: "Yes, live + recorded sessions are available.",
  },
  {
    q: "Who can join?",
    a: "Students, working professionals, freshers, and career switchers.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="FAQ" title="Questions, answered straight." />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {qs.map((it, i) => (
            <div key={it.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between text-left py-6 group"
              >
                <span className="font-display text-lg group-hover:text-primary transition">
                  {it.q}
                </span>
                <span className="h-8 w-8 rounded-full border border-border grid place-items-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition">
                  {open === i ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden text-muted-foreground leading-relaxed">
                  {it.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
