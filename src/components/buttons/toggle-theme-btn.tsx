"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    setDark(theme === "dark");
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={dark ? () => setTheme("light") : () => setTheme("dark")}
      aria-label="Mudar tema"
    >
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}
