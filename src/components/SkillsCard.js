import React from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ title, icon, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1], 
        delay: index * 0.2,
      }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, amount: 0.2 }}
      className="card bg-cardAlt-skills dark:bg-cardAlt-dark-skills p-6 lg:p-8 rounded-2xl shadow-md shadow-black/70 border border-border dark:border-border-dark max-w-[400px] min-h-[228px] w-full flex flex-col"
    >
      <div className="card-header flex items-center gap-3 mb-4 ">
        {icon}
        <h3 className="text-xl font-bold text-fg dark:text-fg-dark">
          {title}
        </h3>
      </div>
      {skills.map((skill) => {
        return (
          <div key={skill.name} className="skill-entries mt-4">
            <div className="skill-name flex justify-between">
              <p className="text-sm font-medium text-gray-800 dark:text-white">
                {skill.name}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-100">
                {skill.level}%
              </p>
            </div>
            <div className="progress-bar w-full h-2 bg-gray-300 dark:bg-bg-dark rounded-full mt-1">
              <div
                className="progress rounded-full h-full bg-indigo-600 dark:bg-primary"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default SkillsCard;
