"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

const qs = [
  {
    q: "Do I need coding experience?",
    a: [
      "Not at all! Our programs are specifically designed to be beginner-friendly, taking you from absolute basics to advanced concepts step-by-step.",
      "Whether you are coming from a non-technical background or you are an absolute beginner looking to break into the tech industry, we have got you covered.",
      "The curriculum starts with foundational topics to build your confidence and slowly scales up the difficulty. By the end of the course, you will be confidently writing code and building real-world projects without any prior technical experience.",
    ],
  },
  {
    q: "Will I get placement support?",
    a: [
      "Absolutely! We provide comprehensive placement support to ensure you land your dream job after completing the curriculum.",
      "Our dedicated career team will assist you with everything from resume building and LinkedIn profile optimization to extensive mock interviews with industry experts.",
      "We also maintain a strong network of hiring partners and provide exclusive job board access for our graduates. We're committed to guiding you through every stage of your job hunt until you secure a rewarding position in the tech industry.",
    ],
  },
  {
    q: "Are the classes live?",
    a: [
      "Yes, our primary mode of instruction includes highly interactive live sessions led by industry experts. We believe that live interaction is crucial for resolving doubts instantly and engaging in real-time problem-solving.",
      "However, we also understand that professionals and students have busy schedules, so every single live class is recorded and uploaded to your dashboard immediately.",
      "You will have lifetime access to these recordings, allowing you to learn at your own pace and revisit complex topics whenever needed.",
    ],
  },
  {
    q: "Who can join?",
    a: [
      "Our programs are incredibly versatile and designed to accommodate a diverse range of learners. College students looking to gain an edge before graduation, working professionals seeking to upskill for a promotion, and absolute freshers wanting to enter the IT sector will all find immense value here.",
      "We also highly encourage career switchers from entirely different industries to join, as our beginner-to-advanced approach ensures a smooth transition.",
      "Basically, anyone with a strong willingness to learn and grow in the tech landscape is welcome to enroll.",
    ],
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="FAQ" title="Questions, answered straight." />
        <div className="mt-12 border-t border-border">
          <Accordion defaultValue={["item-0"]}>
            {qs.map((it, i) => (
              <AccordionItem key={it.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="w-full flex items-center justify-between text-left py-6 font-display text-lg hover:text-primary transition hover:no-underline">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 space-y-4">
                  {it.a.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
