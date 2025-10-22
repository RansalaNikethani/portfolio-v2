// src/components/Experience.jsx
import React from 'react';
import TimelineItem from './TimelineItem';
import { timelineData } from '../data/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold inline-block pb-2 border-b-4 border-accent">
            Experience & Education
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey blending development, design, and quality assurance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {timelineData.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;