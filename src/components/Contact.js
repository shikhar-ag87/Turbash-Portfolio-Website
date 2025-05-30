import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaAddressCard,
  FaUsers,
} from "react-icons/fa";

import {BiLinkExternal} from "react-icons/bi";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section
      id="contact"
      className="bg-sectionBg-contact dark:bg-sectionBg-dark-contact transition-colors duration-500 ease-in-out px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-fg dark:text-fg-dark text-center mb-12">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-8 lg:max-w-[85%] 2xl:max-w-[70%] mx-auto">
        <div className="bg-white dark:bg-[#142438] shadow-md rounded-xl p-6 w-full lg:w-2/3">
          <h3 className="text-2xl font-semibold text-fg dark:text-fg-dark mb-6 flex items-center gap-2">
            <FaPaperPlane /> Send a Message
          </h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-bg dark:bg-[#152238] text-fg dark:text-fg-dark border border-border dark:border-border-dark"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-bg dark:bg-[#152238] text-fg dark:text-fg-dark border border-border dark:border-border-dark"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-bg dark:bg-[#152238] text-fg dark:text-fg-dark border border-border dark:border-border-dark resize-none"
            ></textarea>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-primary dark:bg-primary-dark text-white px-6 py-2 rounded-md hover:brightness-90 hover:scale-105 transition flex items-center gap-2"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col justify-between gap-6">
          <div className="flex-1 bg-white dark:bg-[#142438] shadow-md rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-fg dark:text-fg-dark mb-5 flex items-center gap-2">
              <FaAddressCard /> Contact Info
            </h3>
            <p className="text-muted dark:text-muted-dark mb-4 flex items-center gap-2">
              <FaEnvelope className="text-2xl text-primary dark:text-primary-dark" />
              <span className="text-fg dark:text-fg-dark">
                yourname@example.com
              </span>
            </p>
            <p className="text-muted dark:text-muted-dark mb-4 flex items-center gap-2">
              <a
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg dark:text-fg-dark hover:underline flex gap-2 hover:scale-105"
              >
                              <BiLinkExternal    className="text-2xl text-primary dark:text-primary-dark" />

                yourportfolio.com
              </a>
            </p>

            <p className="text-muted dark:text-muted-dark mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-2xl text-primary dark:text-primary-dark" />
              <span className="text-fg dark:text-fg-dark">
                New Delhi, India
              </span>
            </p>
          </div>

          <div className="flex-1 bg-white dark:bg-[#142438] shadow-md rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-fg dark:text-fg-dark mb-5 flex items-center gap-2">
              <FaUsers /> Socials
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-primary-dark hover:underline text-lg flex gap-2 hover:scale-105"
                >
                  <FaGithub className="text-2xl text-primary dark:text-primary-dark"/>
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-primary-dark hover:underline text-lg flex gap-2 hover:scale-105"
                >
                  <FaLinkedin className="text-2xl text-primary dark:text-primary-dark" />
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-primary-dark hover:underline text-lg flex gap-2 hover:scale-105"
                >
                  <FaTwitter className="text-2xl text-primary dark:text-primary-dark" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
