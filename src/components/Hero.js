import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
  id="home"
  className="mx-auto w-full max-w-screen-xl px-6 md:px-12 mt-20 md:mt-32 flex flex-col md:flex-row gap-10 items-center justify-between"
>
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
          I build full-stack apps, simplify tech on YouTube, and contribute to
          open source. Let’s collaborate and create something amazing.
        </p>
        <div className="mt-6 flex gap-4 button-container">
          <button className="bg-primary dark:bg-primary-dark text-white hover:bg-primary/90 rounded-full px-8 py-3 transition-scale duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="border border-primary dark:border-primary-dark text-primary dark:text-primary-dark hover:bg-primary/10 rounded-full px-8 py-3 transition-scale duration-100 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="image-container justify-items-center">
        <div className="w-2/3 font-mono rounded-xl shadow-xl w-full max-w-xl sm:max-w-2xl lg:max-w-3xl border border-gray-300 dark:border-slate-700 overflow-hidden bg-[#f9fafb] dark:bg-[#0f172a] text-gray-800 dark:text-slate-200">
          {/* Top bar like terminal */}
          <div className="flex items-center space-x-2 px-5 py-3 bg-gray-200 dark:bg-slate-800 border-b border-gray-300 dark:border-slate-600">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>

          {/* Code-style content */}
          <div className="px-6 sm:px-10 py-8 text-sm text-bg bg-gray-900 dark:bg-bg-dark leading-relaxed break-words">
            <pre className="whitespace-pre-wrap">
              <span className="text-pink-600 dark:text-pink-400">const</span>{" "}
              <span className="text-blue-600 dark:text-blue-300">dev</span> ={" "}
              <span className="text-yellow-600 dark:text-yellow-400">
                &#123;
              </span>
              <span className="text-teal-500">name</span>:{" "}
              <span className="text-orange-400">'Turbash'</span>,
              <span className="text-teal-500">role</span>:{" "}
              <span className="text-orange-400">'student'</span>,
              <span className="text-teal-500">tech</span>:{" "}
              <span className="text-orange-400">'MERN'</span>,
              <span className="text-teal-500">flask</span>:{" "}
              <span className="text-orange-400">true</span>,
              <span className="text-teal-500">api</span>:{" "}
              <span className="text-orange-400">'FastAPI'</span>,
              <span className="text-teal-500">docker</span>:{" "}
              <span className="text-orange-400">true</span>,
              <span className="text-teal-500">yt</span>:{" "}
              <span className="text-orange-400">true</span>,
              <span className="text-teal-500">favApp</span>:{" "}
              <span className="text-orange-400">'Cashmate'</span>,
              <span className="text-teal-500">hobby</span>:{" "}
              <span className="text-orange-400">'coding'</span>,
              <span className="text-teal-500">goal</span>:{" "}
              <span className="text-orange-400">'learn'</span>,
              <span className="text-teal-500">vibe</span>:{" "}
              <span className="text-orange-400">'real build'</span>,
              <span className="text-teal-500">campus</span>:{" "}
              <span className="text-orange-400">'Smart Infra'</span>,
              <span className="text-teal-500">stack</span>:{" "}
              <span className="text-orange-400">'JS'</span>,
              <span className="text-teal-500">fun</span>:{" "}
              <span className="text-orange-400">'UFC ML'</span>,
              <span className="text-yellow-600 dark:text-yellow-400">
                &#125;
              </span>
              ;
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
