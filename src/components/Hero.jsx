// src/components/Hero.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="lg:min-h-[90vh] md:min-h-[60vh] sm:min-h-[60vh] flex items-center justify-center px-4"
    >
      <div className="text-center max-w-4xl">
        {/* Circular Profile Image */}
        <div className="mb-6">
          <img
            src="/images/ME.jpg" // Replace with your actual image path
            alt="Upuli Ransala"
            className="mx-auto h-32 w-32 rounded-full object-cover border-4 border-accent/20 shadow-lg md:h-40 md:w-40"
          />
        </div>

        <div className="inline-block px-4 py-1 mb-4 bg-accent/10 text-accent rounded-full text-sm font-medium">
          Full Stack Developer & QA Engineer
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Upuli <span className="text-accent">Ransala</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Building full-stack applications where quality is not an afterthought, it’s the foundation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 text-base sm:px-8 sm:py-3 sm:text-lg font-bold rounded-lg text-white bg-accent hover:bg-accent-dark transition duration-300 shadow-xl shadow-teal-500/30"
          >
            View My Work
          </a>
          <a
            href="/Ransala_Nikethani_Resume.pdf"
            download
            className="px-6 py-3 text-base sm:px-8 sm:py-3 sm:text-lg border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/5 dark:hover:bg-accent/10 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <a href="#about" className="mt-10 inline-block animate-float">
          <ChevronDown className="mx-auto h-7 w-7 sm:h-8 sm:w-8 text-gray-500 dark:text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;