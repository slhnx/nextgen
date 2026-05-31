"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { LiaLinkedin } from "react-icons/lia";
import ScrollReveal from "./ScrollReveal";

const facultyMembers = [
  {
    name: "Aditya Verma",
    role: "Technical Instructor and SDE",
    image: "/faculty/gladden.png",
    linkedin: "https://linkedin.com",
    company: "Barclays",
    companyLogo: "/logos/barclays.svg"
  },
  {
    name: "Vishal Sharma",
    role: "Software Engineer-2",
    image: "/faculty/vishal.png",
    linkedin: "https://linkedin.com",
    company: "Zepto",
    companyLogo: "/logos/zepto.svg"
  },
  {
    name: "Bhavesh Bansal",
    role: "Senior Software Engineer",
    image: "/faculty/bhavesh.png",
    linkedin: "https://linkedin.com",
    company: "Appbrew",
    companyLogo: "/logos/appbrew.svg"
  },
  {
    name: "Rahul Jaiswal",
    role: "Full Stack (MERN) Trainer",
    image: "/faculty/rahul.png",
    linkedin: "https://linkedin.com",
    company: "DUCAT",
    companyLogo: "/logos/ducat.svg"
  },
  {
    name: "Rohit Sen",
    role: "Senior Software Engineer",
    image: "/faculty/rohit.png",
    linkedin: "https://linkedin.com",
    company: "Microsoft",
    companyLogo: "/logos/microsoft.svg"
  }
];

export default function Faculty() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 320 + 24; // Card width + gap
      const scrollTo = direction === "left" 
        ? scrollLeft - cardWidth 
        : scrollLeft + cardWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="faculty" className="py-32 px-4 relative overflow-hidden">
      <div className="section-divider" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_right,_oklch(0.62_0.22_258/0.05),_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Introducing the Faculty"
            title="Learn From The Best"
            subtitle="Get mentored directly by active practitioners working at top product companies."
          />
          
          {/* Slider Controls */}
          <ScrollReveal direction="up" delay={200}>
            <div className="flex gap-3 self-end sm:self-auto mb-4">
              <button
                onClick={() => scroll("left")}
                className="h-12 w-12 rounded-xl border border-border/80 bg-card/60 hover:bg-card hover:border-primary/50 text-foreground flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="h-12 w-12 rounded-xl border border-border/80 bg-card/60 hover:bg-card hover:border-primary/50 text-foreground flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm group"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Carousel Container */}
        <ScrollReveal direction="fade" delay={400}>
          <div 
            ref={scrollRef}
            className="mt-16 flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 scroll-smooth"
          >
            {facultyMembers.map((f, i) => (
              <div
                key={f.name}
                className="flex-none w-[280px] sm:w-[320px] snap-start rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-sm shadow-sm flex flex-col group transition-all duration-500 hover:shadow-[0_20px_40px_-15px_oklch(0.62_0.22_258/0.3)] hover:-translate-y-1 hover:border-primary/30"
              >
                {/* Portrait Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Faculty Info */}
                <div className="p-6 flex flex-col flex-grow relative z-20">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {f.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground font-medium">
                        {f.role}
                      </p>
                    </div>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors flex-shrink-0"
                      aria-label={`${f.name}'s LinkedIn profile`}
                    >
                      <LiaLinkedin className="h-5 w-5" />
                    </a>
                  </div>
                  
                  {/* Company Logo at Bottom */}
                  <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-muted-foreground">Expert from</span>
                    <div className="relative h-6 w-24">
                      <Image
                        src={f.companyLogo}
                        alt={f.company}
                        fill
                        sizes="96px"
                        className="object-contain object-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
