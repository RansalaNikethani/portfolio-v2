// src/components/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold inline-block pb-2 border-b-4 border-accent">
          Beyond Code: A Tester’s Mindset
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I build software that works , and works well for everyone.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            I’m a Software Technology undergraduate who believes <span className="font-semibold text-accent">quality is everyone’s responsibility</span>. 
            During my internship at CID Authority, I didn’t just build features, I validated them. 
            I designed test cases before writing code, caught critical bugs in pre-production, and ensured every pixel met accessibility standards.
          </p>
          
          <p className="text-lg leading-relaxed">
             My background in design (Figma, Adobe XD) helps me spot UX inconsistencies early, 
  while my development skills let me automate what’s repeatable. 
  I’m now seeking an entry-level role where I can grow as a <span className="font-semibold">QA Engineer or Full Stack Developer</span>.
          </p>

          <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="font-bold text-accent mb-2">My QA Superpowers:</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>• Test Case Design</li>
              <li>• Bug Triage & Reporting</li>
              <li>• Cross-Browser Testing</li>
              <li>• API Validation</li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-accent/10 to-teal-500/5 rounded-2xl p-8 h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-accent to-teal-400 flex items-center justify-center text-white text-4xl font-bold">
                UR
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 italic">
                “Quality is not an act, it’s a habit.”
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;