
import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin } from "lucide-react";
import SocialIcons from "./SocialIcons";

const HeroSection: React.FC = () => {
  return (
    <section id="top" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-primary">Parthiban U</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              Full-Stack Software Engineer | Angular | Go | Firebase
            </h2>

            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:parthisends@gmail.com" className="hover:text-primary transition-colors">
                  parthisends@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Chennai, India</span>
              </div>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <a
                    href="https://github.com/Parthi482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/Parthi482
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1 17h-2v-6h2v6zm-1-7c-1.1 0-1.99-.9-1.99-2s.89-2 1.99-2c1.1 0 2 .9 2 2s-.9 2-2 2z" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/parthi482"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/parthi482
                  </a>
                </div>
              </div>


            </div>

            <SocialIcons className="pt-2" />

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden">
              {/* 
                Hero image would go here
                <img 
                  src="/profile.jpg" 
                  alt="Parthiban U" 
                  className="object-cover w-full h-full"
                /> 
              */}
              <div className="flex items-center justify-center w-full h-full text-primary">
                <div className="text-center">
                  <div className="font-mono text-sm mb-2">{'<code>'}</div>
                  <div className="font-heading text-2xl">Angular + Go</div>
                  <div className="font-mono text-sm mt-2">{'</code>'}</div>
                </div>
              </div>
            </div>

            {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
              <div className="text-xs font-semibold">3+ Years</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
