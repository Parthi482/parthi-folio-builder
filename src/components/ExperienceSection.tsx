
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      position: "Software Engineer",
      company: "KriyaTec IT Systems",
      period: "2022 – Present",
      responsibilities: [
        "Built APIs using Go Fiber & MongoDB",
        "Integrated WebSockets for real-time features",
        "Deployed to AWS S3 and Firebase; optimized with NGINX",
        "Led full-stack features across 6+ real-world projects",
        "Implemented secure payment gateways for various applications",
        "Designed and maintained role-based access control systems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-6 overflow-hidden border border-border shadow-sm">
              <div className="bg-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Briefcase size={20} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="px-3 py-1 bg-secondary rounded-full text-sm font-medium">
                        {exp.period}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mt-4">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
