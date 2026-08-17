import React from "react";

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className="border border-white bg-gray-900 backdrop-blur-md rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 sm:h-48 md:h-60 object-cover"
        />
      )}
      <div className="p-3 sm:p-4 md:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-2">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {tech &&
            tech.map((item, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-dark-400 rounded-full text-xs sm:text-sm text-white"
              >
                {item}
              </span>
            ))}
        </div>

        <div className="flex gap-1 sm:gap-2">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-2 sm:px-4 py-1.5 sm:py-2 bg-purple-600 rounded-lg font-medium text-xs sm:text-sm text-white hover:bg-purple-700 transition duration-300"
          >
            View Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-2 sm:px-4 py-1.5 sm:py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-medium text-xs sm:text-sm hover:bg-purple-600 hover:text-white transition duration-300"
          >
            View code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
