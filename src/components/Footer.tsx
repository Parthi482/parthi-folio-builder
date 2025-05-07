
import React from "react";
import SocialIcons from "./SocialIcons";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground font-medium">
              &copy; {currentYear} Parthiban U. All rights reserved.
            </p>
          </div>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
