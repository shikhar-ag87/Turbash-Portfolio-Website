import React from "react";
import PojectsCard from "./ProjectCard";
const Projects = () => {
  const cards = [
  {
    title: "Cashmate",
    description:
      "A secure and user-friendly web app for peer-to-peer money lending and group expense splitting. Features include real-time group tracking, transaction history, and a seamless UI for financial coordination between friends or small communities.",
    image: "/assets/cashmate.png",
    github: "https://github.com/yourusername/cashmate",
    liveDemo: "https://cashmate.vercel.app",
    techStack: [
      { name: "React", color: "bg-blue-200 dark:bg-blue-100 text-blue-800" },
      { name: "Node.js", color: "bg-green-200 dark:bg-green-100 text-green-800" },
      { name: "MongoDB", color: "bg-emerald-200 dark:bg-emerald-100 text-emerald-800" },
      { name: "Tailwind CSS", color: "bg-cyan-200 dark:bg-cyan-100 text-cyan-800" },
    ],
  },
  {
    title: "ISStow",
    description:
      "A specialized logistics and inventory system designed for the International Space Station, enabling optimized stowage, item tracking, and storage space utilization using FastAPI and containerized deployment with Docker.",
    image: "/assets/isstow.png",
    github: "https://github.com/yourusername/isstow",
    liveDemo: "https://isstow.vercel.app",
    techStack: [
      { name: "FastAPI", color: "bg-purple-200 dark:bg-purple-100 text-purple-800" },
      { name: "Python", color: "bg-yellow-200 dark:bg-yellow-100 text-yellow-800" },
      { name: "Docker", color: "bg-sky-200 dark:bg-sky-100 text-sky-800" },
    ],
  },
  {
    title: "UFC Fight Predictor",
    description:
      "A machine learning project that analyzes historical UFC data to predict fight outcomes. Incorporates model training, logistic regression, and finish type classification using Flask and scikit-learn, deployed with an interactive frontend.",
    image: "/assets/ufc.png",
    github: "https://github.com/yourusername/ufc-fight-predictor",
    liveDemo: "https://ufc-fight-predictor.vercel.app",
    techStack: [
      { name: "Python", color: "bg-yellow-200 dark:bg-yellow-100 text-yellow-800" },
      { name: "Flask", color: "bg-red-200 dark:bg-red-100 text-red-800" },
      { name: "Scikit-learn", color: "bg-indigo-200 dark:bg-indigo-100 text-indigo-800" },
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive and animated personal portfolio site with support for dark/light themes. Showcases projects, skills, and contact options using smooth Framer Motion transitions and Tailwind CSS for styling.",
    image: "/assets/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://yourportfolio.vercel.app",
    techStack: [
      { name: "React", color: "bg-blue-200 dark:bg-blue-100 text-blue-800" },
      { name: "Tailwind CSS", color: "bg-cyan-200 dark:bg-cyan-100 text-cyan-800" },
      { name: "Framer Motion", color: "bg-pink-200 dark:bg-pink-100 text-pink-800" },
    ],
  },
];


  return (
    <section
      id="projects"
      className="bg-sectionBg-projects dark:bg-sectionBg-dark-projects transition-colors duration-500 ease-in-out"
    >
      <div className="projects-container py-20 px-6  text-fg dark:text-fg-dark flex flex-col items-center ">
        <h2 className="text-4xl font-bold mb-12 text-indigo-700 dark:text-primary">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-6 w-full justify-items-center lg:max-w-[85%] 2xl:max-w-[70%]">
          {cards.map((card, idx) => {
            return (
              <PojectsCard
                key={card.title}
                title={card.title}
                description={card.description}
                image={card.image}
                github={card.github}
                demo={card.liveDemo}
                tech={card.techStack}
                index={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
