import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const navLinks = [
    "Home", "About", "Skills", "Projects", "Contact"
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      href: "https://github.com/yourusername",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      href: "https://twitter.com/yourusername",
    },
  ];

  return (
    <footer className="bg-[#f3f4f6] dark:bg-[#0a1120] text-fg dark:text-fg-dark transition-colors duration-500 ease-in-out">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 text-xl font-semibold text-primary dark:text-primary-dark">
            <FaCode />
            <span>Turbash.dev</span>
          </div>

          <nav className="flex gap-4 text-sm text-muted dark:text-muted-dark">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="hover:text-fg dark:hover:text-fg-dark hover:text-fg/80 dark:hover:text-fg-dark/80"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay:index*0.1}}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="text-center text-xs text-muted dark:text-muted-dark pb-4">
        © 2025 Turbash Negi. Crafted with passion &lt;/&gt;
      </div>
    </footer>
  );
};

export default Footer;
