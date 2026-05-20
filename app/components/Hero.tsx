import { ArrowUpRight, Flame, Star } from "lucide-react";

const stats = [
  { label: "Companies Hiring", value: "800+" },
  { label: "Students Placed", value: "1,500+" },
  { label: "Highest Package", value: "48 LPA" },
  { label: "Industry Experts", value: "1200+" },
  { label: "Highest Salary Hike", value: "400%" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 px-4">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-amber-400 mb-8">
              <Flame className="h-3.5 w-3.5" />
              Learn what matters
            </div>

            <h1 className="font-display text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] font-semibold max-w-5xl">
              Build your career in{" "}
              <span className="text-gradient italic">AI & Analytics</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Master Business Analytics, Data Analytics, and AI Product
              Management with real-world Gen AI tools, live projects, and
              industry mentorship.
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

            <div className="mt-6 flex flex-col items-start gap-y-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mt-6 mb-8">
                <Flame className="h-4 w-4 text-amber-400" />
                <span className="font-medium text-foreground">5K+</span>
                <span>Students Already Enrolled</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold text-foreground">
                  4.8/5
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 text-amber-400"
                      fill={index < 4 ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span>from 1500+ reviews</span>
              </div>
            </div>
          </div>

          <aside className="w-full max-w-md lg:max-w-none mx-auto">
            <div className="relative rounded-3xl border-2 border-border/80 bg-[radial-gradient(circle_at_top,_oklch(0.62_0.22_258/0.16),_transparent_60%),linear-gradient(180deg,oklch(0.12_0.03_252/0.9),oklch(0.08_0.02_250/0.9))] backdrop-blur p-6 sm:p-7 shadow-[0_30px_80px_oklch(0.04_0.015_250/0.6)]">
              <div className="pointer-events-none absolute -top-10 right-6 h-24 w-24 rounded-full bg-primary/30 blur-3xl" />
              <h3 className="text-center font-display text-xl font-semibold">
                Book a Live Class, For Free!
              </h3>
              <button
                type="button"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm font-medium hover:bg-card transition"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-background">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M23.49 12.27c0-.86-.07-1.49-.22-2.14H12v4.03h6.81c-.14 1-.9 2.51-2.58 3.52l-.02.14 3.56 2.76.25.03c2.34-2.16 3.47-5.34 3.47-8.34z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.79-2.94c-1.01.7-2.37 1.2-4.16 1.2-3.17 0-5.85-2.08-6.81-4.96l-.13.01-3.69 2.85-.04.12C3.3 21.16 7.38 24 12 24z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.19 14.39a7.4 7.4 0 0 1-.38-2.39c0-.83.15-1.63.36-2.39l-.01-.16-3.74-2.9-.12.06A11.99 11.99 0 0 0 0 12c0 1.94.47 3.77 1.3 5.39l3.89-2.99z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 4.75c2.33 0 3.9 1 4.8 1.84l3.51-3.42C17.95 1 15.24 0 12 0 7.38 0 3.3 2.83 1.3 6.61l3.86 2.99c.96-2.88 3.64-4.85 6.84-4.85z"
                      fill="#EA4335"
                    />
                  </svg>
                </span>
                Sign up with Google
              </button>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                OR
                <span className="h-px flex-1 bg-border" />
              </div>

              <form className="mt-5 space-y-4">
                <label className="block text-xs text-muted-foreground">
                  Name
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="mt-2 w-full rounded-xl border border-border bg-card/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </label>
                <label className="block text-xs text-muted-foreground">
                  Email
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="mt-2 w-full rounded-xl border border-border bg-card/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </label>
                <label className="block text-xs text-muted-foreground">
                  Phone Number
                  <div className="mt-2 flex items-center rounded-xl border border-border bg-card/60 px-3 py-2.5 text-sm">
                    <span className="text-muted-foreground">+91</span>
                    <span className="mx-2 h-5 w-px bg-border" />
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                    />
                  </div>
                </label>

                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">
                    Your Course of Interest
                  </div>
                  <div className="grid gap-2 text-sm">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="course" defaultChecked />
                      Business analytics with AI
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="course" />
                      Data Analytics with AI
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="course" />
                      AI Product Management
                    </label>
                  </div>
                </div>

                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <input type="checkbox" defaultChecked />
                  Send me updates on WhatsApp
                </label>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary text-primary-foreground px-4 py-3 text-sm font-medium hover:shadow-[0_0_40px_oklch(0.62_0.22_258/0.5)] transition"
                >
                  Send OTP
                </button>
              </form>

              <p className="mt-4 text-[11px] text-muted-foreground text-center">
                By continuing, you agree to Terms & Conditions for Signup
              </p>
            </div>
          </aside>
        </div>

        <div className="relative mt-20 rounded-2xl border border-border bg-background/70 backdrop-blur">
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5 divide-y divide-border/60 lg:divide-y-0 lg:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 sm:p-7">
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
                <div className="mt-2 text-2xl md:text-3xl font-display font-semibold text-foreground">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
