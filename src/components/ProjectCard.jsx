// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import { Github, ExternalLink, CheckCircle, Lock, ChevronsDown, ChevronsUp } from 'lucide-react';

const ProjectCard = ({ project }) => {
  // Renamed state to be more descriptive, default to false
  const [showQaDetails, setShowQaDetails] = useState(false);

  const toggleShowDetails = () => setShowQaDetails(!showQaDetails);

  // Removed the 'displayedHighlights' logic, as we'll show all or none

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={project.image}
          alt={`${project.title} – ${project.subtitle}`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div>
          <h3 className="text-xl font-bold text-accent">{project.title}</h3>
          <p className="text-base text-gray-600 dark:text-gray-400 ">{project.subtitle}</p>
          {project.role && (
            <span className="mt-2 inline-block py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border px-3 border-gray-200 dark:border-gray-700 ">
              {project.role}
            </span>
          )}
        </div>

        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* --- MODIFICATION START --- */}

        {/* "See More" button placed *after* description */}
        {/* Only shows if highlights exist AND are currently hidden */}
        {project.qaHighlights && project.qaHighlights.length > 0 && !showQaDetails && (
          <button
            onClick={toggleShowDetails}
            className="mt-3 text-sm font-medium text-accent hover:underline flex items-center"
          >
            See Quality Impact <ChevronsDown className="w-4 h-4 ml-1" />
          </button>
        )}

        <div className="flex-grow"></div>

        {/* QA Highlights are now conditionally rendered based on 'showQaDetails' */}
        {showQaDetails && project.qaHighlights && (
          <div className="mt-4">
            <span className="text-sm font-semibold text-accent">Quality Impact:</span>
            
            {/* Now maps *all* highlights directly, not 'displayedHighlights' */}
            <ul className="mt-1 space-y-1 text-xs text-gray-600 dark:text-gray-400">
              {project.qaHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Replaced the old toggle with a simple "See Less" button */}
            <button
              onClick={toggleShowDetails}
              className="mt-2 text-xs font-medium text-accent hover:underline flex items-center"
            >
              See Less <ChevronsUp className="w-3 h-3 ml-1" />
            </button>
          </div>
        )}
        {/* --- MODIFICATION END --- */}


        {/* Tech Stack */}
        <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links or Confidential Notice */}
          <div className="mt-4 flex items-center gap-4">
            {project.demoType ? (
              <span className="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400">
                <Lock className="w-4 h-4 mr-1" />
                {project.demoType}
              </span>
            ) : (
              <>
                {project.liveLink && project.liveLink !== '#' && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
                  >
                    Live Demo <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
                  >
                    Source <Github className="w-4 h-4 ml-1" />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;