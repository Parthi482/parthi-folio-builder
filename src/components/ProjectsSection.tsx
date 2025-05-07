
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  stack: string[];
  role: string;
  features: string[];
  impact: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "KlausGuru – Class Management Platform",
      description: "A comprehensive platform for managing online classes, bookings, and payments.",
      stack: ["Angular", "Go", "MongoDB", "WebSockets"],
      role: "Full-Stack Developer",
      features: ["Secure class management", "Payment gateway (Stripe, Venmo, PayPal)", "Role-Based Access Control"],
      impact: "500+ secure class registrations/month"
    },
    {
      title: "Magnolia – Health & Wellness Platform",
      description: "Multi-tenant wellness tracking platform with real-time health monitoring.",
      stack: ["Angular", ".NET Core", "Kogito", "Firebase"],
      role: "Backend Developer",
      features: ["Real-time health scoring", "Alerts system", "Multi-tenant architecture", "Flutter mobile integration"],
      impact: "Improved wellness tracking across organizations"
    },
    {
      title: "SOS – Emergency Response System",
      description: "Real-time emergency response system for quick alerting and incident reporting.",
      stack: ["Angular", "Go", "WebSockets", "AWS S3"],
      role: "Real-time backend developer",
      features: ["Instant alerts", "Media reporting", "WebSocket communication", "Real-time location tracking"],
      impact: "Reduced emergency response times by 40%"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground">
            Key projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden h-full border border-border shadow-sm hover:shadow-md">
              <div className="bg-primary p-4">
                <h3 className="text-xl font-semibold text-primary-foreground">{project.title}</h3>
              </div>
              <CardContent className="p-6 space-y-4">
                <p>{project.description}</p>
                
                <div>
                  <div className="font-medium text-sm text-muted-foreground mb-1">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-card">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-sm text-muted-foreground mb-1">Role:</div>
                  <p className="text-foreground">{project.role}</p>
                </div>
                
                <div>
                  <div className="font-medium text-sm text-muted-foreground mb-1">Key Features:</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2 border-t border-border">
                  <div className="font-medium text-sm text-muted-foreground mb-1">Impact:</div>
                  <p className="text-primary font-medium">{project.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
