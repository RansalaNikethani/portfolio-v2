// src/components/Skills.jsx
import React from 'react';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block pb-2 border-b-4 border-accent">
            Technical Proficiencies
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From full-stack development to quality assurance , I build and validate software with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-accent/60"
            >
              <h3 className="text-lg font-bold text-accent mb-4">
                {group.category}
              </h3>
              <div className="space-y-2">
                {group.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0 mt-1.5"></span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-500 italic">
          Every skill listed has been applied in academic, internship, or personal projects.
        </div>
      </div>
    </section>
  );
};

export default Skills;