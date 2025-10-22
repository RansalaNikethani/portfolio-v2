// src/components/Header.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const name = "Upuli Ransala";

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },   
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a 
          href="#hero" 
          className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-accent to-teal-500"
          aria-label="Go to homepage"
        >
          {name}
        </a>

        <div className="hidden md:flex items-center space-x-5">
          <nav aria-label="Main navigation" className="flex space-x-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-gray-700" />
            ) : (
              <Sun className="h-5 w-5 text-accent" />
            )}
          </button>

          <a
            href="/Ransala_Nikethani_Resume.pdf"
            download
            className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors shadow-sm"
          >
            <Download className="h-4 w-4" />
            <span>Resume</span>
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col p-4 space-y-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Ransala_Nikethani_Resume.pdf"
              download
              className="inline-flex items-center justify-center py-3 px-4 mt-2 bg-accent text-white font-medium rounded-lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </a>
            <button
              onClick={() => {
                toggleTheme();
                setIsMobileMenuOpen(false);
              }}
              className="inline-flex items-center justify-center py-3 px-4 mt-2 border-2 border-accent text-accent dark:text-accent font-medium rounded-lg"
            >
              {theme === 'light' ? <Moon className="h-5 w-5 mr-2" /> : <Sun className="h-5 w-5 mr-2" />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;