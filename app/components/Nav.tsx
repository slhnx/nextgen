import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-linear-to-br from-primary to-accent grid place-items-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold tracking-tight">
            NxtGen<span className="text-primary">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#programs" className="hover:text-foreground transition">
            Programs
          </a>
          <a href="#why" className="hover:text-foreground transition">
            Why Us
          </a>
          <a href="#projects" className="hover:text-foreground transition">
            Projects
          </a>
          <a href="#pricing" className="hover:text-foreground transition">
            Pricing
          </a>
          <a href="#faq" className="hover:text-foreground transition">
            FAQ
          </a>
        </nav>
        <a
          href="#cta"
          className="group inline-flex items-center gap-1.5 rounded-xl bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition"
        >
          Apply{" "}
          <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
        </a>
      </div>
    </header>
  );
}
