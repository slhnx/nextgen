import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-linear-to-br from-primary to-accent grid place-items-center">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
            </div>
            <span className="font-display font-semibold tracking-tight">
              NxtGen<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            AI-powered career transition academy for Analytics and Product
            Management.
          </p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Programs
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#programs" className="hover:text-primary">
                Business Analytics
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-primary">
                Data Analytics
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-primary">
                AI Product Management
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#why" className="hover:text-primary">
                Why NxtGen
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary">
                Projects
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-primary">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border flex flex-wrap justify-between gap-3 text-xs text-muted-foreground font-mono">
        <span>
          © {new Date().getFullYear()} NxtGen Academy. All rights reserved.
        </span>
        <span>Made for the AI-first economy.</span>
      </div>
    </footer>
  );
}
