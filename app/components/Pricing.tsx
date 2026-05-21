import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";

const plans = [
  {
    n: "Starter Plan",
    p: "45,000",
    d: "Self-paced foundation + mentor calls.",
    f: [
      "Core curriculum access",
      "Recorded sessions",
      "2 mentor calls / month",
      "Community access",
      "Placement assistance",
    ],
  },
  {
    n: "Professional Plan",
    p: "70,000",
    d: "Live cohort with projects and reviews.",
    f: [
      "Everything in Starter",
      "Live cohort classes",
      "Industry projects",
      "Weekly mentor 1:1",
      "Portfolio reviews",
      "Placement assistance",
    ],
    featured: true,
  },
  {
    n: "Premium Placement Plan",
    p: "95,000",
    d: "Full placement support with dedicated guidance.",
    f: [
      "Everything in Professional",
      "Dedicated career coach",
      "Mock interviews (unlimited)",
      "Resume + LinkedIn rewrite",
      "Job referrals",
      "Placement assistance",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Pricing" title="Flexible Learning Plans" />
        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {plans.map((pl) => (
            <Card
              key={pl.n}
              className={`relative rounded-2xl p-8 flex flex-col justify-between border-0 gap-0 shadow-none ring-transparent overflow-visible h-full ${
                pl.featured ? "glow-border bg-card" : "border border-border bg-card/60"
              }`}
            >
              {pl.featured && (
                <span className="absolute -top-3 left-8 text-xs font-mono uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-md z-10">
                  Most picked
                </span>
              )}
              <div>
                <CardHeader className="p-0 gap-1">
                  <CardTitle className="font-display text-xl font-semibold text-foreground">
                    {pl.n}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-normal">
                    {pl.d}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl font-semibold text-foreground">
                      ₹{pl.p}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    EMI available · Scholarships open
                  </p>
                  <ul className="mt-8 space-y-3 text-sm">
                    {pl.f.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
              <CardFooter className="p-0 mt-8 border-0 bg-transparent rounded-none">
                <a
                  href="#cta"
                  className={`${buttonVariants({
                    variant: pl.featured ? "default" : "outline",
                    size: "lg",
                  })} w-full rounded-xl h-auto py-3 font-medium transition ${
                    pl.featured
                      ? "hover:shadow-[0_0_40px_oklch(0.62_0.22_258/0.5)]"
                      : "bg-background hover:bg-card"
                  }`}
                >
                  Enroll <ArrowUpRight className="h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
