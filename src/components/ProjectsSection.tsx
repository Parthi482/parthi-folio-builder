import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Link,
  Rocket,
  HeartPulse,
  AlertTriangle,
  Cloud,
  PiggyBank,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  role: string;
  features: string[];
  // impact: string;
  icon: React.ReactNode;
  gradient: string;
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
      // impact: "500+ secure class registrations/month",
      icon: <Rocket className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Magnolia – Health & Wellness Platform",
      description: "Multi-tenant wellness tracking platform with real-time health monitoring.",
      stack: ["Angular", ".NET Core", "Kogito", "Firebase"],
      role: "Backend Developer",
      features: ["Real-time health scoring", "Alerts system", "Multi-tenant architecture", "Flutter mobile integration"],
      // impact: "Improved wellness tracking across organizations",
      icon: <HeartPulse className="w-5 h-5" />,
      gradient: "from-emerald-500 to-green-400",
    },
    {
      title: "SOS – Emergency Response System",
      description: "Real-time emergency response system for quick alerting and incident reporting.",
      stack: ["Angular", "Go", "WebSockets", "AWS S3"],
      role: "Real-time Backend Developer",
      features: ["Instant alerts", "Media reporting", "WebSocket communication", "Real-time location tracking"],
      // impact: "Reduced emergency response times by 40%",
      icon: <AlertTriangle className="w-5 h-5" />,
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "CloudSync – File Management System",
      description: "Secure cloud-based file synchronization and management solution for enterprises.",
      stack: ["Angular", "Go", "Cloudflare R2", "MSSQL"],
      role: "Lead Developer",
      features: ["End-to-end encryption", "Version control", "Team collaboration", "Custom permission system"],
      // impact: "Handled 2TB+ of sensitive data with zero breaches",
      icon: <Cloud className="w-5 h-5" />,
      gradient: "from-sky-500 to-indigo-500",
    },
    {
      title: "PayTrack – Financial Management App",
      description: "Personal finance tracking application with budgeting and investment insights.",
      stack: ["Angular", "Firebase", "Node.js", "ChartJS"],
      role: "Frontend Engineer",
      features: ["Budget forecasting", "Investment tracking", "Expense categorization", "Financial reports"],
      // impact: "Helped users save average of 15% on monthly expenses",
      icon: <PiggyBank className="w-5 h-5" />,
      gradient: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-muted/40 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground">
            A portfolio of key projects that demonstrate my ability to deliver scalable, secure, and efficient solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`overflow-hidden rounded-2xl shadow-md border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  expandedIndex === index ? "ring-2 ring-primary/40 scale-[1.02]" : ""
                }`}
              >
                <div className={`p-4 flex items-center gap-3 text-white bg-gradient-to-r ${project.gradient} rounded-t-xl`}>
                  <div className="p-2 rounded-full bg-white/20">{project.icon}</div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="text-foreground/90 text-sm">{project.description}</p>
                  <div>
                    <div className="font-medium text-sm text-muted-foreground mb-1">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-background/60 px-3 py-1.5 text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-sm text-muted-foreground mb-1">Key Features:</div>
                    <ul className="space-y-1 text-sm">
                      {project.features
                        .slice(0, expandedIndex === index ? project.features.length : 2)
                        .map((f, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            {f}
                          </li>
                        ))}
                    </ul>
                    {project.features.length > 2 && (
                      <Button
                        variant="ghost"
                        className="mt-1 p-0 h-auto text-xs text-primary font-medium flex items-center gap-1"
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedIndex === index ? "Show less" : "Show more"}
                        <ArrowRight
                          className={`h-3 w-3 transition-transform duration-300 ${
                            expandedIndex === index ? "rotate-90" : ""
                          }`}
                        />
                      </Button>
                    )}
                  </div>
                  {/* <div className="pt-3 border-t border-border flex items-center justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase">Impact</div>
                      <p className="text-sm font-medium text-primary mt-1">{project.impact}</p>
                    </div>
                    <Button variant="secondary" size="sm" className="gap-1 shadow-sm hover:scale-105 transition-transform">
                      <Link className="h-4 w-4" /> View
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
