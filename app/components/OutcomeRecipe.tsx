import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const referralLogos = [
  { src: "/logos/google.png", alt: "Google" },
  { src: "/logos/amazon.svg", alt: "Amazon" },
  { src: "/logos/infosys.svg", alt: "Infosys" },
  { src: "/logos/deloitte.svg", alt: "Deloitte" },
  { src: "/logos/ey.svg", alt: "EY" },
  { src: "/logos/tcs.svg", alt: "TCS" },
];

export default function OutcomeRecipe() {
  return (
    <section id="recipe" className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Welcome to the Outcome Powerhouse"
          title="Your Recipe for a Next Gen Learner"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Card className="glow-border rounded-2xl bg-card/80 p-6 md:p-7 border-0 gap-0 shadow-none ring-0 overflow-visible">
            <CardContent className="p-0 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,240px)] w-full h-full">
              <div>
                <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-amber-200">
                  Access 3000+ Companies
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  Get Referrals
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Boost your job prospects with referrals from our vast network of
                  companies.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/40 p-4 grid grid-cols-3 gap-3 place-items-center">
                {referralLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="logo-white-card animate-pulse-glow"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={64}
                      height={32}
                      className="logo-white-card-img"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glow-border rounded-2xl bg-card/80 p-6 md:p-7 border-0 gap-0 shadow-none ring-0 overflow-visible">
            <CardContent className="p-0 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,240px)] w-full h-full">
              <div>
                <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-sky-200">
                  Tailored Interview Prep
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  Company-Specific Prep
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Get ready for interviews with customized preparation for your
                  target companies.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/40 p-4">
                <div className="grid grid-cols-2 gap-3 text-[11px] font-mono uppercase text-muted-foreground">
                  <div className="rounded-lg border border-dashed border-border p-2 text-center">
                    May 29
                  </div>
                  <div className="rounded-lg border border-dashed border-border p-2 text-center">
                    May 30
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="rounded-xl bg-amber-500/15 border border-amber-400/40 p-3 text-xs text-amber-100">
                    Practice interview scheduled for Amazon
                  </div>
                  <div className="rounded-xl bg-primary/20 border border-primary/40 p-3 text-xs text-foreground">
                    Round 1 interview scheduled for Amazon
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glow-border rounded-2xl bg-card/80 p-6 md:p-7 border-0 gap-0 shadow-none ring-0 overflow-visible">
            <CardContent className="p-0 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,240px)] w-full h-full">
              <div>
                <span className="inline-flex items-center rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-violet-200">
                  Interactive Coding Sessions
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  Live Coding Practice
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Improve your skills with live coding exercises and real-time
                  feedback.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/40 p-4">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-full bg-primary/20 border border-primary/40" />
                  <div className="h-9 w-9 rounded-full bg-secondary border border-border" />
                  <div className="h-9 w-9 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                </div>
                <div className="mt-4 rounded-xl border border-border bg-card/60 p-3 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Pair session</span>
                    <span className="text-primary">Live</span>
                  </div>
                  <div className="mt-2 font-mono text-[11px] text-foreground">
                    const solution = optimize(arr);
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glow-border rounded-2xl bg-card/80 p-6 md:p-7 border-0 gap-0 shadow-none ring-0 overflow-visible">
            <CardContent className="p-0 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,240px)] w-full h-full">
              <div>
                <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-emerald-200">
                  Lifetime Placement Assurance
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  Career Support
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Continue to receive job opportunities and support as a valued
                  alumnus of NxtGen Academy.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/40 p-4 space-y-3">
                <div className="rounded-xl bg-background/80 border border-border p-3 text-xs text-foreground">
                  <div className="font-medium">Senior Software Developer</div>
                  <div className="text-muted-foreground">
                    Microsoft · Full-time
                  </div>
                </div>
                <div className="rounded-xl bg-background/80 border border-border p-3 text-xs text-foreground">
                  <div className="font-medium">Software Developer (SDE 1)</div>
                  <div className="text-muted-foreground">
                    Razorpay · Full-time
                  </div>
                </div>
                <div className="rounded-xl bg-background/80 border border-border p-3 text-xs text-foreground">
                  <div className="font-medium">Quality Assurance</div>
                  <div className="text-muted-foreground">
                    Flipkart · Full-time
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
