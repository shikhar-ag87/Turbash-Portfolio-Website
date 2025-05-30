import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f3f4f6] dark:bg-[#0a1120] text-fg dark:text-fg-dark transition-colors duration-500 ease-in-out">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 text-xl font-semibold text-primary dark:text-primary-dark">
            <FaCode />
            <span>Turbash.dev</span>
          </div>
          
          <nav className="flex gap-4 text-sm text-muted dark:text-muted-dark">
            <a href="#" className="hover:text-fg dark:hover:text-fg-dark transition">Home</a>
            <a href="#about" className="hover:text-fg dark:hover:text-fg-dark transition">About</a>
            <a href="#skills" className="hover:text-fg dark:hover:text-fg-dark transition">Skills</a>
            <a href="#projects" className="hover:text-fg dark:hover:text-fg-dark transition">Projects</a>
            <a href="#contact" className="hover:text-fg dark:hover:text-fg-dark transition">Contact</a>
          </nav>
        </div>

        <div className="flex space-x-6 ">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-muted dark:text-muted-dark pb-4">
        © 2025 Turbash Negi. Crafted with passion &lt;/&gt;
      </div>
    </footer>
  );
};

export default Footer;
