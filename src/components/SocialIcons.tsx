
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className = "", iconSize = 20 }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a
        href="https://github.com/parthiban"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="GitHub Profile"
      >
        <Github size={iconSize} />
      </a>
      <a
        href="https://linkedin.com/in/parthiban"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        href="mailto:parthisends@gmail.com"
        className="text-foreground hover:text-primary transition-colors"
        aria-label="Email"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcons;
