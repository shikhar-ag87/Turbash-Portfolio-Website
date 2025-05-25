import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [spin, setSpin] = useState(false);

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
    setSpin(true);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    setTimeout(() => setSpin(false), 500);  };

  return (
    <nav className="navbar sticky top-0  px-6 md:px-12 lg:px-20 py-4 z-10">
      <div className="mt-2 flex justify-between z-50 bg-white dark:bg-slate-900 text-fg dark:text-fg-dark items-center lg:max-w-[80%] mx-auto border border-border dark:border-border-dark-dark rounded-full px-8 py-4 shadow-md shadow-black dark:shadow-white">
        <a href="./">
        <span className="text-2xl font-bold hover:text-indigo-600 dark:hover:text-indigo-400">
          Turbash Negi
        </span>
      </a>

      <div className="flex nav-links-container gap-2 lg:gap-5 xl:gap-10 items-center">
        <ul className="nav-links hidden md:flex gap-2 lg:gap-5 xl:gap-10">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              <li className="font-semibold text-lg hover:text-primary dark:hover:text-primary-dark cursor-pointer transition-colors duration-300 ">
                {link}
              </li>
            </a>
          ))}
        </ul>

        <button onClick={toggleTheme} className="toggle-theme-btn">
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon } className={`text-2xl ${
    theme === "dark" ? "text-yellow-300" : "text-blue-800"}  ${spin ? "animate-spin-once" : ""
  }`}/>
        </button>
        <svg
          className="block md:hidden cursor-pointer w-6 h-6 text-fg dark:text-fg-dark  hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="Close menu"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
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
      </div>
    </nav>
  );
}
