type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-accent">
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.05] font-semibold">
        {title}
      </h2>
    </div>
  );
}
