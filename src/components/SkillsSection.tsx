import React from "react";
import {
  Code,
  Server,
  Database,
  Cloud,
  Wrench,
  Lightbulb,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  category: string;
  skills: string[];
  icon: LucideIcon;
  color: string; // Tailwind gradient
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["Angular 14+", "TypeScript", "SCSS", "HTML", "Responsive Design"],
    icon: Code,
    color: "from-pink-500 to-red-500",
  },
  {
    category: "Backend",
    skills: ["Go (Fiber, Gorilla Mux)", ".NET Core", "REST APIs", "WebSockets"],
    icon: Server,
    color: "from-blue-600 to-cyan-500",
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MSSQL", "MySQL", "Database Design"],
    icon: Database,
    color: "from-green-500 to-emerald-400",
  },
  {
    category: "Cloud/Infra",
    skills: ["AWS S3", "Cloudflare R2", "Firebase", "Docker", "CI/CD"],
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
  },
  {
    category: "Tools",
    skills: ["VS Code", "NGINX", "Git", "JIRA", "Postman"],
    icon: Wrench,
    color: "from-yellow-500 to-orange-400",
  },
  {
    category: "Concepts",
    skills: ["RBAC", "Multi-tenancy", "Real-time Systems", "Payment Integration"],
    icon: Lightbulb,
    color: "from-fuchsia-500 to-rose-500",
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-muted/40 to-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-tight mb-3 text-foreground">
            Skills
          </h2>
          <div className="h-1 w-16 mx-auto bg-primary rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Technologies and frameworks I use to build performant, scalable, and real-time systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-md hover:shadow-lg transition-all p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`bg-gradient-to-tr ${cat.color} text-white p-3 rounded-full shadow-inner transform transition-transform duration-300 hover:scale-110`}
                >
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-muted text-foreground text-sm font-medium px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
