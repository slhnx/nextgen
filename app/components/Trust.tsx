import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const partners = [
  { name: "Google", logo: "/logos/google.png" },
  { name: "BlackRock", logo: "/logos/blackrock.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Deloitte", logo: "/logos/deloitte.svg" },
  { name: "Accenture", logo: "/logos/accenture.svg" },
  { name: "Infosys", logo: "/logos/infosys.svg" },
  { name: "TCS", logo: "/logos/tcs.svg" },
  { name: "EY", logo: "/logos/ey.svg" },
];

export default function Trust() {
  return (
    <section className="py-20 px-4 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground text-center">
          Companies Our Skills Align With
        </p>
        <p className="mt-3 text-sm text-muted-foreground text-center">
          Curriculum aligned with modern AI-driven industry requirements.
        </p>
        <div className="mt-10 rounded-2xl border border-border/50 bg-background overflow-hidden">
          <div className="logo-marquee">
            <div className="logo-track">
              {[...partners, ...partners].map((p, index) => (
                <div
                  key={`${p.name}-${index}`}
                  className="logo-item flex items-center justify-center"
                >
                  <div className="relative h-8 md:h-10 w-full max-w-[120px]">
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      fill
                      className="object-contain brightness-0 invert-[0.5] dark:invert-[0.8]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:shadow-[0_0_40px_oklch(0.62_0.22_258/0.5)] transition"
          >
            See Placement Reports
            <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
