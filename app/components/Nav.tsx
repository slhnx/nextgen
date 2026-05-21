import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className=" rounded-lg bg-linear-to-br from-primary to-accent grid place-items-center">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
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
          className={`${buttonVariants()} rounded-xl bg-foreground text-background px-4 py-2 h-auto text-sm font-medium hover:bg-primary hover:text-primary-foreground transition group/button border-0`}
        >
          Apply{" "}
          <ArrowUpRight className="h-4 w-4 group-hover/button:rotate-45 transition" />
        </a>
      </div>
    </header>
  );
}
