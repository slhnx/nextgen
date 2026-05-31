"use client";

import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight, MessageCircle, BarChart2, Briefcase, Sparkles, Database, Code, BookOpen } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-background overflow-hidden">
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
          <div className="relative w-full h-[600px] lg:h-[700px] hidden md:block">
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
                <div className="absolute top-8 left-8 bg-white rounded-2xl p-4 shadow-xl z-20">
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
                <div className="absolute top-8 right-8 z-20 text-right">
                  <p className="text-[10px] font-medium text-white/80 mb-1">In collaboration with</p>
                  <div className="text-2xl font-black tracking-widest text-white">
                    IBM.
                  </div>
                </div>

                {/* Floating Pills */}
                <div className="absolute left-6 top-[28%] bg-white rounded-full px-4 py-2.5 shadow-lg flex items-center gap-2.5 z-20">
                  <div className="h-6 w-6 rounded-md bg-green-100 flex items-center justify-center text-green-600">
                    <MessageCircle className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#1A1A1A]">AI Digital Marketing</span>
                </div>

                <div className="absolute right-6 top-[35%] bg-white rounded-full px-4 py-2.5 shadow-lg flex items-center gap-2.5 z-20">
                  <div className="h-6 w-6 rounded-md bg-orange-100 flex items-center justify-center text-orange-600">
                    <Code className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#1A1A1A]">Generative AI</span>
                </div>

                <div className="absolute left-2 top-[45%] bg-white rounded-full px-4 py-2.5 shadow-lg flex items-center gap-2.5 z-20">
                  <div className="h-6 w-6 rounded-md bg-blue-100 flex items-center justify-center text-blue-600">
                    <BarChart2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#1A1A1A]">AI Data Analytics</span>
                </div>

                <div className="absolute right-4 bottom-[40%] bg-white rounded-full px-4 py-2.5 shadow-lg flex items-center gap-2.5 z-20">
                  <div className="h-6 w-6 rounded-md bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <Database className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#1A1A1A]">AI Data Science</span>
                </div>

                <div className="absolute left-6 bottom-[25%] bg-white rounded-full px-4 py-2.5 shadow-lg flex items-center gap-2.5 z-20">
                  <div className="h-6 w-6 rounded-md bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Briefcase className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#1A1A1A]">AI Product Management</span>
                </div>

                <div className="absolute right-12 bottom-[15%] bg-white rounded-full px-4 py-2.5 shadow-lg flex items-center gap-2.5 z-20">
                  <div className="h-6 w-6 rounded-md bg-red-100 flex items-center justify-center text-red-600">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#1A1A1A]">Advanced Generative AI</span>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
