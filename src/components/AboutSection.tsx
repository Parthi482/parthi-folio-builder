
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed">
            I'm a results-driven software engineer with 2.5+ years of experience building scalable web apps using Angular and Go. 
            I've led the backend for multi-tenant platforms, real-time dashboards, and class/payment systems. 
            {/* <span className="font-medium text-primary"> I build systems that don't break — even under pressure.</span> */}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <p>
                I specialize in building robust applications using Angular on the frontend and Go on the backend - a powerful but rare combination. 
                My focus is on creating efficient, maintainable systems that can handle real-time data and scale effectively.
              </p>
            </div>
            
            <div className="bg-card shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Design and build full-stack web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Implement real-time features using WebSockets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Integrate payment gateways (Stripe, PayPal, Venmo)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Deploy to cloud platforms with optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
