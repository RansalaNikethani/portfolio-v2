// src/components/Projects.jsx
import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

// Dynamically get all unique categories from your project data
const allCategories = ['All', ...new Set(projectsData.flatMap(p => p.categories || []))];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Memoize the filtered projects to avoid re-calculating on every render
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(project =>
      project.categories?.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white inline-block pb-2 border-b-4 border-accent">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I'm most proud of. Use the filters to see projects by category.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                ? 'bg-accent text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Call to action for GitHub */}
        <div className="text-center mt-20">
          <a 
            href="https://github.com/your-username" // 🔴 REMEMBER TO REPLACE THIS!
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-bold rounded-lg border-2 border-accent text-accent transition-colors duration-300 hover:bg-accent hover:text-white"
          >
            See All Repositories on GitHub
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;