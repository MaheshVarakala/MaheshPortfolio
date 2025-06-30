import React from "react";
import { Github } from "lucide-react";

import projects from "../assets/projects";


const Projects = () => {
  const projectItems = projects.map((project) => (
    <div key={project.id} className="w-64 text-white border-2 border-red-500 rounded-2xl shadow-md transform hover:scale-105 transition duration-300 hover:shadow-red-500 p-4">
      <img
        src={project.image} 
        alt={project.title} 
        className="w-full h-40 object-cover rounded-xl border-3  border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.6)] mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-300 mb-3">{project.description}</p>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium hover:underline"
      >
        <Github size={16} /> View on GitHub
      </a>
    </div>
  ));
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-945 text-white p-10">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-2xl font-bold mb-4 mt-20">
          My Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Here are some of the projects I've worked on, showcasing my skills in
          web development.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {projectItems}
        </div>
      </div>
    </div>
  );
};

export default Projects;
