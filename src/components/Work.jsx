import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-purple">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 sm:mb-16 text-xs sm:text-sm md:text-base">
          A selection of my recent work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full mx-auto">
          {/* Project Card */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3  bg-purple-600 rounded-lg font-medium text-white border border-purple-600 hover:bg-purple/20 transition duration-300"
          >
            <span>View More Projects</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
