
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  category: string;
  skills: string[];
  icon: string;
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: ["Angular 14+", "TypeScript", "SCSS", "HTML", "Responsive Design"],
      icon: "🖥️"
    },
    {
      category: "Backend",
      skills: ["Go (Fiber, Gorilla Mux)", ".NET Core", "REST APIs", "WebSockets"],
      icon: "⚙️"
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MSSQL", "MySQL", "Database Design"],
      icon: "🗄️"
    },
    {
      category: "Cloud/Infra",
      skills: ["AWS S3", "Cloudflare R2", "Firebase", "Docker", "CI/CD"],
      icon: "☁️"
    },
    {
      category: "Tools",
      skills: ["VS Code", "NGINX", "Git", "JIRA", "Postman"],
      icon: "🛠️"
    },
    {
      category: "Concepts",
      skills: ["RBAC", "Multi-tenancy", "Real-time Systems", "Payment Integration"],
      icon: "💡"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground">
            My technical toolkit for building robust, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-t-4 border-t-primary"
            >
              <div className="bg-accent/70 px-4 py-3 flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                <h3 className="font-semibold text-foreground">{category.category}</h3>
              </div>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 py-1.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
