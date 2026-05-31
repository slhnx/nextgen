"use client";

import { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowUpRight, MessageCircle, BarChart2, Briefcase, Sparkles, Database, Code, BookOpen } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

function SignUpForm({ idPrefix = "" }: { idPrefix?: string }) {
  return (
    <form className="mt-5 space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}name`} className="text-xs text-muted-foreground uppercase tracking-wider">Name</Label>
        <Input
          id={`${idPrefix}name`}
          type="text"
          placeholder="Enter Name"
          className="h-auto px-3 py-2.5 rounded-xl border border-border bg-card/60 text-sm focus-visible:ring-2 focus-visible:ring-primary/50 text-foreground"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}email`} className="text-xs text-muted-foreground uppercase tracking-wider">Email</Label>
        <Input
          id={`${idPrefix}email`}
          type="email"
          placeholder="Enter Email"
          className="h-auto px-3 py-2.5 rounded-xl border border-border bg-card/60 text-sm focus-visible:ring-2 focus-visible:ring-primary/50 text-foreground"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}phone`} className="text-xs text-muted-foreground uppercase tracking-wider">Phone Number</Label>
        <div className="flex items-center rounded-xl border border-border bg-card/60 px-3 py-2.5 text-sm focus-within:ring-2 focus-within:ring-primary/50 transition">
          <span className="text-muted-foreground">+91</span>
          <span className="mx-2 h-5 w-px bg-border" />
          <Input
            id={`${idPrefix}phone`}
            type="tel"
            placeholder="Enter Phone Number"
            className="h-auto p-0 border-0 bg-transparent rounded-none focus-visible:ring-0 focus-visible:border-transparent text-sm text-foreground"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">
          Your Course of Interest
        </div>
        <div className="grid gap-2 text-sm text-foreground">
          <Label className="flex items-center gap-2 font-normal cursor-pointer">
            <input type="radio" name={`${idPrefix}course`} defaultChecked />
            Business analytics with AI
          </Label>
          <Label className="flex items-center gap-2 font-normal cursor-pointer">
            <input type="radio" name={`${idPrefix}course`} />
            Data Analytics with AI
          </Label>
          <Label className="flex items-center gap-2 font-normal cursor-pointer">
            <input type="radio" name={`${idPrefix}course`} />
            AI Product Management
          </Label>
        </div>
      </div>

      <Label className="flex items-center gap-2 text-xs text-muted-foreground font-normal cursor-pointer">
        <input type="checkbox" defaultChecked />
        Send me updates on WhatsApp
      </Label>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-xl h-auto py-3 text-sm font-medium hover:shadow-[0_0_40px_oklch(0.62_0.22_258/0.5)] transition"
      >
        Send OTP
      </Button>
    </form>
  );
}

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDialogOpen(true);
    }, 2000);

    const handleOpen = () => setIsDialogOpen(true);
    window.addEventListener("open-signup-dialog", handleOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-signup-dialog", handleOpen);
    };
  }, []);

  const pills = [
    { text: "AI Digital Marketing", Icon: MessageCircle, bg: "bg-green-100", fg: "text-green-600", pos: "left-6 top-[28%]" },
    { text: "Generative AI", Icon: Code, bg: "bg-orange-100", fg: "text-orange-600", pos: "right-6 top-[35%]" },
    { text: "AI Data Analytics", Icon: BarChart2, bg: "bg-blue-100", fg: "text-blue-600", pos: "left-2 top-[45%]" },
    { text: "AI Data Science", Icon: Database, bg: "bg-yellow-100", fg: "text-yellow-600", pos: "right-4 bottom-[40%]" },
    { text: "AI Product Management", Icon: Briefcase, bg: "bg-indigo-100", fg: "text-indigo-600", pos: "left-6 bottom-[25%]" },
    { text: "Advanced Generative AI", Icon: Sparkles, bg: "bg-red-100", fg: "text-red-600", pos: "right-12 bottom-[15%]" },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-background overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted={true}
        playsInline
        className="absolute inset-0 h-full w-full object-cover pointer-events-none z-0 opacity-75"
      >
        <source src="/hero_bg_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/85 z-0" />
      {/* Faint grid background - Left side only */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_100%_at_0%_50%,#000_40%,transparent_100%)] pointer-events-none" />
        
        {/* Animated Blue Lines */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_100%_100%_at_0%_50%,#000_40%,transparent_100%)] pointer-events-none">
          <div className="absolute top-0 left-[120px] w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 animate-line-down-1" />
          <div className="absolute top-0 left-[280px] w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 animate-line-down-2" />
          <div className="absolute top-0 left-[440px] w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 animate-line-down-3" />
          
          <div className="absolute top-[200px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-line-right-1" />
          <div className="absolute top-[400px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-line-right-2" />
          <div className="absolute top-[600px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-line-right-3" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="max-w-xl">
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-[clamp(3.5rem,6vw,4.5rem)] leading-[1.1] font-bold tracking-tight text-foreground mb-6">
                Stop Using AI.<br />
                Start <span className="text-primary">Building</span> With It.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-medium max-w-md">
                AI Courses in India For Working Professionals, Freshers and Business Owners. Focusing on project and real career outcomes.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#programs"
                  className={`${buttonVariants({
                    size: "lg",
                  })} rounded-full px-8 py-7 h-auto text-base font-semibold w-full sm:w-auto hover:bg-primary/90 transition-all duration-300`}
                >
                  Explore Our Programs
                </a>
                
                <a
                  href="#curriculum"
                  className={`${buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })} rounded-full px-8 py-7 h-auto text-base font-semibold w-full sm:w-auto bg-transparent border-border/80 hover:bg-card transition-all duration-300`}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Curriculum
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side Visuals */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            <ScrollReveal direction="up" delay={400} className="w-full h-full">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#1A1B3A]">
                {/* Person Image */}
                <Image 
                  src="/hero-man.png" 
                  alt="Student" 
                  fill 
                  className="object-cover object-top"
                  priority
                />

                {/* Happy Students Badge */}
                <div className="absolute top-2 left-2 md:top-8 md:left-8 bg-white rounded-2xl p-2.5 md:p-4 shadow-xl z-20">
                  <div className="flex items-center mb-2">
                    <div className="flex -space-x-2 mr-3">
                      {[
                        "/faculty/bhavesh.png",
                        "/faculty/gladden.png",
                        "/faculty/rahul.png",
                        "/faculty/rohit.png"
                      ].map((src, idx) => (
                        <div key={idx} className="h-8 w-8 rounded-full border-2 border-white bg-secondary overflow-hidden">
                          <Image src={src} alt={`Student ${idx + 1}`} width={32} height={32} className="object-cover h-full w-full" />
                        </div>
                      ))}
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-[#1A1A1A] text-white flex items-center justify-center text-[10px] font-bold z-10">
                        1998+
                      </div>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[#1A1A1A]">Happy Students</p>
                </div>

                {/* Collaboration Text */}
                <div className="absolute top-2 right-2 md:top-8 md:right-8 z-20 text-right">
                  <p className="text-[10px] font-medium text-white/80 mb-1">In collaboration with</p>
                  <div className="text-2xl font-black tracking-widest text-white">
                    IBM.
                  </div>
                </div>

                {/* Mobile Pills Container (Aligned at the very bottom of the card) */}
                <div className="absolute bottom-3 inset-x-3 flex flex-wrap gap-1.5 justify-center z-20 md:hidden">
                  {pills.map((p, idx) => {
                    const Icon = p.Icon;
                    return (
                      <div key={idx} className="bg-white rounded-full px-2 py-1 shadow-md flex items-center gap-1">
                        <div className={`h-4.5 w-4.5 rounded-md ${p.bg} flex items-center justify-center ${p.fg} shrink-0`}>
                          <Icon className="h-2.5 w-2.5" />
                        </div>
                        <span className="text-[9px] font-bold text-[#1A1A1A] whitespace-nowrap">{p.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Desktop Floating Pills */}
                {pills.map((p, idx) => {
                  const Icon = p.Icon;
                  return (
                    <div
                      key={idx}
                      className={`absolute ${p.pos} bg-white rounded-full px-4 py-2.5 shadow-lg hidden md:flex items-center gap-2.5 z-20`}
                    >
                      <div className={`h-6 w-6 rounded-md ${p.bg} flex items-center justify-center ${p.fg}`}>
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-bold text-[#1A1A1A]">{p.text}</span>
                    </div>
                  );
                })}

              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md p-6 sm:p-7 rounded-3xl border border-border bg-card/95 backdrop-blur shadow-2xl">
          <div className="relative">
            <div className="pointer-events-none absolute -top-10 right-6 h-24 w-24 rounded-full bg-primary/30 blur-3xl" />
            <DialogHeader>
              <DialogTitle className="text-center font-display text-xl font-semibold text-foreground">
                Book a Live Class, For Free!
              </DialogTitle>
            </DialogHeader>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="mt-5 w-full rounded-xl bg-card/60 hover:bg-card h-auto py-2.5 font-medium transition text-foreground"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-background shrink-0">
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
            </Button>
            <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              OR
              <span className="h-px flex-1 bg-border" />
            </div>

            <SignUpForm idPrefix="modal-" />

            <p className="mt-4 text-[11px] text-muted-foreground text-center">
              By continuing, you agree to Terms & Conditions for Signup
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
