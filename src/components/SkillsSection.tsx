
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  category: string;
  skills: string[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: ["Angular 14+", "TypeScript", "SCSS", "HTML", "Responsive Design"]
    },
    {
      category: "Backend",
      skills: ["Go (Fiber, Gorilla Mux)", ".NET Core", "REST APIs", "WebSockets"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MSSQL", "MySQL", "Database Design"]
    },
    {
      category: "Cloud/Infra",
      skills: ["AWS S3", "Cloudflare R2", "Firebase", "Docker", "CI/CD"]
    },
    {
      category: "Tools",
      skills: ["VS Code", "NGINX", "Git", "JIRA", "Postman"]
    },
    {
      category: "Concepts",
      skills: ["RBAC", "Multi-tenancy", "Real-time Systems", "Payment Integration"]
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
            <Card key={index} className="overflow-hidden">
              <div className="bg-primary px-4 py-3">
                <h3 className="font-semibold text-primary-foreground">{category.category}</h3>
              </div>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-tag bg-secondary text-foreground text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
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
