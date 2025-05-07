
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  role: string;
  features: string[];
  impact: string;
}

const ProjectsSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
    },
    {
      title: "CloudSync – File Management System",
      description: "Secure cloud-based file synchronization and management solution for enterprises.",
      stack: ["Angular", "Go", "Cloudflare R2", "MSSQL"],
      role: "Lead Developer",
      features: ["End-to-end encryption", "Version control", "Team collaboration", "Custom permission system"],
      impact: "Handled 2TB+ of sensitive data with zero breaches"
    },
    {
      title: "PayTrack – Financial Management App",
      description: "Personal finance tracking application with budgeting and investment insights.",
      stack: ["Angular", "Firebase", "Node.js", "ChartJS"],
      role: "Frontend Engineer",
      features: ["Budget forecasting", "Investment tracking", "Expense categorization", "Financial reports"],
      impact: "Helped users save average of 15% on monthly expenses"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground">
            Key projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`project-card overflow-hidden h-full border border-border shadow-sm hover:shadow-xl transition-all duration-500 
                ${expandedIndex === index ? 'ring-2 ring-primary scale-[1.02]' : ''}`}
            >
              <div className="relative bg-gradient-to-r from-primary/90 to-primary p-4">
                <h3 className="text-xl font-semibold text-primary-foreground">{project.title}</h3>
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground rounded-bl-lg text-xs font-medium py-1 px-2">
                  {project.role}
                </span>
              </div>
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground/90">{project.description}</p>
                
                <div>
                  <div className="font-medium text-sm text-muted-foreground mb-1">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-accent/40">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-sm text-muted-foreground mb-1">Key Features:</div>
                  <ul className="list-none pl-0 space-y-1">
                    {project.features.slice(0, expandedIndex === index ? project.features.length : 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {project.features.length > 2 && (
                    <Button 
                      variant="ghost" 
                      className="mt-1 p-0 h-auto text-xs text-primary font-medium flex items-center" 
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedIndex === index ? 'Show less' : 'Show more'} 
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  )}
                </div>
                
                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm text-muted-foreground">Impact:</div>
                    <p className="text-primary font-medium">{project.impact}</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Link className="h-3.5 w-3.5" /> Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile carousel view */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="project-card overflow-hidden h-full border border-border shadow-sm">
                    <div className="relative bg-gradient-to-r from-primary/90 to-primary p-4">
                      <h3 className="text-xl font-semibold text-primary-foreground">{project.title}</h3>
                      <span className="absolute top-0 right-0 bg-accent text-accent-foreground rounded-bl-lg text-xs font-medium py-1 px-2">
                        {project.role}
                      </span>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <p className="text-foreground/90">{project.description}</p>
                      
                      <div>
                        <div className="font-medium text-sm text-muted-foreground mb-1">Tech Stack:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="bg-accent/40">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="font-medium text-sm text-muted-foreground mb-1">Key Features:</div>
                        <ul className="list-none pl-0 space-y-1">
                          {project.features.slice(0, expandedIndex === index ? project.features.length : 2).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-1.5">
                              <span className="text-primary mt-0.5">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {project.features.length > 2 && (
                          <Button 
                            variant="ghost" 
                            className="mt-1 p-0 h-auto text-xs text-primary font-medium flex items-center" 
                            onClick={() => toggleExpand(index)}
                          >
                            {expandedIndex === index ? 'Show less' : 'Show more'} 
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="pt-3 border-t border-border flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm text-muted-foreground">Impact:</div>
                          <p className="text-primary font-medium">{project.impact}</p>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Link className="h-3.5 w-3.5" /> Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex justify-center gap-2">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
