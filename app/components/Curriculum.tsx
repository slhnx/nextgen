import SectionHeading from "./SectionHeading";
import { SiPython, SiOpenai, SiGooglegemini, SiJira } from "react-icons/si";
import { FaDatabase, FaBrain, FaRobot, FaSync, FaChessKnight, FaUserCheck, FaFileExcel, FaChartBar, FaChartPie } from "react-icons/fa";
import { MdWidgets, MdGroups } from "react-icons/md";

const iconMap: Record<string, React.ElementType> = {
  "Excel": FaFileExcel,
  "SQL": FaDatabase,
  "Power BI": FaChartBar,
  "Tableau": FaChartPie,
  "Python": SiPython,
  "ChatGPT": SiOpenai,
  "Gemini": SiGooglegemini,
  "Prompt Engineering": FaBrain,
  "AI Automation": FaRobot,
  "No-Code AI Tools": MdWidgets,
  "Jira": SiJira,
  "Agile": FaSync,
  "Scrum": MdGroups,
  "Product Strategy": FaChessKnight,
  "User Research": FaUserCheck,
};

const stacks = [
  {
    t: "Analytics Stack",
    items: ["Excel", "SQL", "Power BI", "Tableau", "Python"],
  },
  {
    t: "AI Stack",
    items: [
      "ChatGPT",
      "Gemini",
      "Prompt Engineering",
      "AI Automation",
      "No-Code AI Tools",
    ],
  },
  {
    t: "Product Stack",
    items: ["Jira", "Agile", "Scrum", "Product Strategy", "User Research"],
  },
];

export default function Curriculum() {
  return (
    <section className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Skills You'll Master"
          title="Analytics, AI, and product skills that make you job-ready."
        />
        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {stacks.map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h4 className="font-display text-xl font-semibold">{s.t}</h4>
              <ul className="mt-6 space-y-3">
                {s.items.map((i) => {
                  const Icon = iconMap[i];
                  return (
                    <li
                      key={i}
                      className="flex items-center justify-between border-b border-border/60 pb-3 text-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        {Icon && <Icon className="text-muted-foreground w-4 h-4" />}
                        <span>{i}</span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        [ included ]
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
