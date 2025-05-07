
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      aria-label="Toggle theme" 
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      className="p-2"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
