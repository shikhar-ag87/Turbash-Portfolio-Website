import React from "react";
import { FaReact, FaNodeJs, FaTools, FaCode } from "react-icons/fa";
import SkillsCard from "./SkillsCard";
const Skills = () => {
  const cards = [
    {
      icon: (
        <FaReact className="w-10 h-10 text-indigo-600 dark:text-primary" />
      ),
      title: "Frontend",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "HTML / CSS", level: 95 },
      ],
    },
    {
      icon: (
        <FaNodeJs className="w-10 h-10 text-green-600 dark:text-green-400" />
      ),
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      icon: (
        <FaTools className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
      ),
      title: "Tools",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 70 },
      ],
    },
    {
      icon: <FaCode className="w-10 h-10 text-red-600 dark:text-red-400" />,
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "C++", level: 75 },
        { name: "Java", level: 70 },
      ],
    },
  ];
  return (
    <section id="skills" className="bg-sectionBg-skills dark:bg-sectionBg-dark-skills transition-colors duration-500 ease-in-out">
      <div className="skills-container py-20 px-6 text-fg dark:text-fg-dark flex flex-col items-center ">
        <h2 className="text-4xl font-bold mb-12 text-indigo-700 dark:text-primary">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-4 w-full justify-items-center lg:max-w-[85%] 2xl:max-w-[70%]">
          {cards.map((card,idx) => {
            return (
              <SkillsCard
                key={card.title}
                title={card.title}
                icon={card.icon}
                skills={card.skills}
                index={idx}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
