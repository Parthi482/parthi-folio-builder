
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
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
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
              <div className="text-xs font-semibold">3+ Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
