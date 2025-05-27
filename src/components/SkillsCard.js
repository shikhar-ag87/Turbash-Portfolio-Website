import React from "react";
import { motion } from "framer-motion";

const SkillsCard = ({ title, icon, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }} // off-screen to the left
      whileInView={{ opacity: 1, x: 0 }} // slide in & fade in
      transition={{
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1], // smooth ease
        delay: index * 0.2, // stagger if in a list
      }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, amount: 0.2 }}
      className="card bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-2xl shadow-lg shadow-black/70 dark:shadow-white/10 border border-border dark:border-border-dark max-w-[400px] min-h-[228px] w-full flex flex-col"
    >
      <div className="card-header flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-3">
          {title}
        </h3>
      </div>
      {skills.map((skill) => {
        return (
          <div className="skill-entries mt-2">
            <div className="skill-name flex justify-between">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
              <p clasName="text-xs text-gray-500 dark:text-gray-400">
                {skill.level}%
              </p>
            </div>
            <div className="progress-bar w=full h-2 bg-gray-300 dark:bg-gray-700 rounded-full mt-1">
              <div
                className="progress rounded-full h-full bg-indigo-600 dark:bg-indigo-400"
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
