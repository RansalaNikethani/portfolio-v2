// src/components/TimelineItem.jsx
import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ item }) => {
  const Icon = item.type === 'Professional' ? Briefcase : GraduationCap;
  const isProfessional = item.type === 'Professional';

  return (
    <div className="relative pl-10 pb-12 group">
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>

      {/* Icon Node */}
      <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-md">
        <Icon className="w-4 h-4 text-white" /> {/* Explicit white */}
      </div>

      {/* Content Card */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-accent/50">
        <div className="flex flex-wrap items-baseline gap-2 mb-2">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {item.period}
          </span>
          {isProfessional && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-accent/10 text-accent rounded">
              QA & Development
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-accent mb-1">{item.title}</h3>
        <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">
          {item.company || item.institution}
        </h4>

        <p className="text-gray-600 dark:text-gray-400 mb-4 italic text-sm">
          {item.description || item.qualification}
        </p>

        {/* Achievements / Responsibilities */}
        <ul className="space-y-2 mb-4">
          {item.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent mr-2 mt-1">•</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
            </li>
          ))}
        </ul>

        {/* Tech / Skills */}
        {item.tech && item.tech.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-wrap gap-2">
              {item.tech.map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-medium rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;