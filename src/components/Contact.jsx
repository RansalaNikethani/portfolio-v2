// src/components/Contact.jsx
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Build Quality Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Open to entry-level Full Stack, and QA roles. Let’s connect!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Mail className="w-8 h-8" />, // Slightly larger icon
                label: "Email",
                value: "nikethani.official@gmail.com", // 🔴 REPLACE THIS!
                href: "mailto:nikethani.official@gmail.com"
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                label: "LinkedIn",
                value: "Connect",
                href: "https://www.linkedin.com/in/ransala/" // 🔴 REPLACE THIS!
              },
              {
                icon: <Github className="w-8 h-8" />,
                label: "GitHub",
                value: "View Code",
                href: "https://github.com/RansalaNikethani" // 🔴 REPLACE THIS!
              }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                // Add flex classes here to center the content
                className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent transition-colors flex flex-col items-center text-center"
              >
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="font-bold text-lg">{item.label}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 break-all">{item.value}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;