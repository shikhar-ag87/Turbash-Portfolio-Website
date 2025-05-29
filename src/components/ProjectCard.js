import React from "react";
import { motion } from "framer-motion";

const ProjectsCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1],
        delay: props.index * 0.2,
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="card bg-cardAlt-projects dark:bg-cardAlt-dark-projects overflow-hidden group rounded-2xl shadow-md shadow-black/70 w-full flex flex-col"
    >
      <div className="image-container max-h-1/2 overflow-hidden rounded-t-2xl w-full group-hover:scale-105 transition-transform duration-300">
        <img
          alt="Screenshot ot Live Demo of the project"
          src={props.image}
          className=""
        />
      </div>
      <div className="p-4 flex flex-col gap-2 mt-2 md:mt-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-fg dark:text-fg-dark">
          {props.title}
        </h2>
        <p className="text-md text-muted dark:text-muted-dark mt-1">
          {props.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {props.tech.map((technology) => {
            return (
              <span
                key={technology.name}
                className={`px-2 py-1 rounded-full text-xs ${technology.color}`}
              >
                {technology.name}
              </span>
            );
          })}
        </div>
        <div className="flex gap-2 ms:gap-4 mt-2 items-start">
          <a
            href={props.github}
            className="bg-primary text-white px-4 ms:px-6 py-1 ms:py-2 rounded-full hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={props.demo}
            className="bg-green-700 text-white px-4 ms:px-6 py-1 ms:py-2 rounded-full hover:bg-green-600 hover:scale-105 transition-transform duration-300"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
