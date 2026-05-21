"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { LiaLinkedin } from "react-icons/lia";

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
    <section id="faculty" className="py-28 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Introducing the Faculty"
            title="Learn From The Best"
          />
          
          {/* Slider Controls */}
          <div className="flex gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll("left")}
              className="h-10 w-10 rounded-full border border-border bg-card hover:bg-secondary text-foreground flex items-center justify-center transition cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="h-10 w-10 rounded-full border border-border bg-card hover:bg-secondary text-foreground flex items-center justify-center transition cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="mt-16 flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 scroll-smooth"
        >
          {facultyMembers.map((f) => (
            <div
              key={f.name}
              className="flex-none w-[280px] sm:w-[320px] snap-start rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm flex flex-col group transition-all duration-300 hover:shadow-lg hover:border-zinc-300"
            >
              {/* Portrait Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-50">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Faculty Info */}
              <div className="p-5 flex flex-col flex-grow bg-white text-zinc-900">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg text-zinc-900">
                    {f.name}
                  </h3>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077b5] hover:opacity-80 transition"
                    aria-label={`${f.name}'s LinkedIn profile`}
                  >
                    <LiaLinkedin className="h-5 w-5 fill-current" />
                  </a>
                </div>
                <p className="mt-1 text-sm text-zinc-500 font-medium">
                  {f.role}
                </p>
                
                {/* Company Logo at Bottom */}
                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center h-8">
                  <div className="relative h-6 w-24">
                    <Image
                      src={f.companyLogo}
                      alt={f.company}
                      fill
                      sizes="96px"
                      className="object-contain object-left"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
