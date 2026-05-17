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
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-background py-8 px-4 flex justify-center items-center"
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
    </section>
  );
}
