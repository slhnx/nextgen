import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  LineChart,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

const programs = [
  {
    tag: "01 / Flagship",
    title: "Business Analytics with Gen AI",
    duration: "6 Months",
    icon: <BarChart3 className="h-6 w-6" />,
    stack: [
      "Excel",
      "SQL",
      "Power BI",
      "Tableau",
      "ChatGPT for Analytics",
      "AI Automation",
      "Prompt Engineering",
      "KPI Dashboarding",
      "Business Insights",
    ],
    roles: [
      "Business Analyst",
      "MIS Analyst",
      "Reporting Analyst",
      "Product Analyst",
    ],
  },
  {
    tag: "02 / Advanced",
    title: "Data Analytics with Gen AI",
    duration: "8 Months",
    icon: <LineChart className="h-6 w-6" />,
    stack: [
      "Python",
      "SQL",
      "Power BI",
      "Pandas",
      "Machine Learning Basics",
      "Gen AI for Data Analysis",
      "AI Reporting",
      "Automation Workflows",
    ],
    roles: ["Data Analyst", "BI Analyst", "Junior Data Scientist"],
  },
  {
    tag: "03 / New",
    title: "AI Product Management",
    duration: "5 Months",
    icon: <Boxes className="h-6 w-6" />,
    stack: [
      "Product Strategy",
      "Agile & Scrum",
      "AI Product Lifecycle",
      "Roadmapping",
      "User Research",
      "AI Product Metrics",
      "ChatGPT & AI Tools",
      "MVP Building",
    ],
    roles: [
      "Associate Product Manager",
      "Product Analyst",
      "AI Product Coordinator",
    ],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Programs" title="Our Flagship Programs" />
        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {programs.map((p) => (
            <Card
              key={p.title}
              className="glow-border rounded-2xl bg-card p-7 flex flex-col hover:translate-y-[-4px] transition duration-500 border-0 gap-0 shadow-none ring-0 overflow-visible"
            >
              <CardContent className="p-0 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    <span>{p.tag}</span>
                    <span className="text-accent">{p.duration}</span>
                  </div>
                  <div className="mt-6 h-12 w-12 rounded-xl bg-primary/15 text-primary grid place-items-center">
                    {p.icon}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-foreground">
                    {p.title}
                  </h3>

                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      {"You'll learn"}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      Career roles
                    </p>
                    <ul className="space-y-1.5 text-sm">
                      {p.roles.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="/Nxtgen Final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonVariants({
                    variant: "link",
                  })} mt-7 p-0 h-auto justify-start text-sm font-medium text-primary group/button hover:no-underline`}
                >
                  View curriculum
                  <ArrowUpRight className="h-4 w-4 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
