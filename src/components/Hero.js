import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="px-6 py-20 transition-colors duration-500 ease-in-out lg:py-32 relative">
      <div className="lg:max-w-[85%] mx-auto flex flex-col md:flex-row gap-10 items-center justify-between z-[2] relative">
        <div className="left-content justify-items-center lg:w-1/2">
          <div className="text-container text-center md:text-left items-center md:items-start gap-4 flex flex-col">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm{" "}
              <span className="text-primary dark:text-primary-dark">
                Turbash
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium mt-4 min-h-[40px] text-fg dark:text-fg-dark">
              I am a{" "}
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Open Source Contributor",
                  "Tech YouTuber",
                  "Creative Coder",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-base md:text-lg text-fg/70 dark:text-fg-dark/70 mt-4 max-w-xl">
              I build full-stack apps, simplify tech on YouTube, and contribute
              to open source. Let’s collaborate and create something amazing.
            </p>
            <div className="mt-6 flex md:flex-row flex-col gap-5 z-0 button-container">
              <a href='/TurbashResume.pdf' download>
              <button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-3 transition-scale duration-300 transform hover:scale-105">
                Download Resume
              </button>
              </a>
              <a href='#contact'>
              <button className="border border-primary w-full dark:border-primary-dark text-primary dark:text-primary-dark hover:bg-primary/10 dark rounded-full px-8 py-3 transition-scale duration-300 transform hover:scale-105">
                Get In Touch
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="image-container justify-items-center md:w-1/2">
          <div className="xs:w-[389px] xs:h-[279] font-mono rounded-xl shadow-xl border border-gray-300 dark:border-slate-700 overflow-hidden bg-[#f9fafb] dark:bg-[#0f172a] text-gray-800 dark:text-slate-200">
            <div className="flex items-center space-x-2 px-5 py-3 bg-gray-200 dark:bg-slate-800 border-b border-gray-300 dark:border-slate-600">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>

            <div className="px-6 sm:px-10 py-8 text-sm text-bg bg-gray-950 dark:bg-slate-950 leading-relaxed break-words">
              <pre className="whitespace-pre-wrap">
                <span className="text-pink-600 dark:text-pink-400">const</span>{" "}
                <span className="text-blue-600 dark:text-blue-300">me</span> ={" "}
                <span className="text-yellow-600 dark:text-yellow-400">&#123;</span>
                
                <span className="block ml-4"><span className="text-teal-500">name</span>: <span className="text-orange-400">'Turbash Negi'</span>,</span>
                
                <span className="block ml-4"><span className="text-teal-500">role</span>: <span className="text-orange-400">'Web Developer'</span>,</span>
                
                <span className="block ml-4"><span className="text-teal-500">stack</span>: <span className="text-orange-400">'MERN'</span>,</span>
                
                <span className="block ml-4"><span className="text-teal-500">skills</span>: <span className="text-orange-400">['React', 'Node', 'MongoDB']</span>,</span>
                
                <span className="block ml-4"><span className="text-teal-500">tools</span>: <span className="text-orange-400">['Git', 'VS Code', 'Figma']</span>,</span>
                
                <span className="block ml-4"><span className="text-teal-500">open</span>: <span className="text-orange-400">true</span>,</span>
                
                <span className="block ml-4"><span className="text-teal-500">passion</span>: <span className="text-orange-400">'Building Apps'</span>,</span>
                
                <span className="text-yellow-600 dark:text-yellow-400">&#125;</span>;
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
