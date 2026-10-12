import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-black/60 backdrop-blur-md opacity-0" />
    );
  }

  return (
    <button
      type="button"
      aria-label="Alternar tema visual"
      onClick={toggleTheme}
      className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300/80 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md text-neutral-800 dark:text-[#D4AF37] hover:border-[#7B1123] dark:hover:border-[#D4AF37] transition-all duration-300 shadow-sm"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
