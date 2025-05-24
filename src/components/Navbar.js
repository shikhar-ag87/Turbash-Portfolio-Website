import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest(".nav-links-container")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar sticky top-0 z-50 flex justify-between items-center bg-bg dark:bg-bg-dark text-fg dark:text-fg-dark border-border dark:border-border-dark px-6 md:px-12 py-4">
      <a href="./">
        <span className="text-2xl font-bold hover:text-indigo-600 dark:hover:text-indigo-400">
          Turbash Negi
        </span>
      </a>

      <div className="flex nav-links-container gap-5 md:gap-10 items-center">
        <ul className="nav-links hidden md:flex gap-10 text-lg">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              <li className="font-semibold hover:text-primary dark:hover:text-primary-dark cursor-pointer transition-colors duration-300 ">
                {link}
              </li>
            </a>
          ))}
        </ul>

        <button onClick={toggleTheme} className="text-xl">
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        <svg
          className="block md:hidden w-6 h-6 text-gray-500 dark:text-gray-400 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        {menuOpen && (
          <div className="mobile-view fixed inset-0 bg-slate-900/80 text-white backdrop-blur-sm bg-opacity-70 flex flex-col items-center justify-center z-50 text-3xl space-y-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-6xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-10">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}>
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-semibold"
                  >
                    {link}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
