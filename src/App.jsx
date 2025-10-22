// src/App.jsx
import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './components/AboutMe.jsx';
import ScrollNavigation from './components/ScrollNavigation.jsx';

import './App.css';

function App() {
  return (
    // The main container sets the default colors and transition for the entire page
    // The classes here match the styles defined in the ThemeContext
    <div className="min-h-screen transition-colors duration-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 inter-regular">
      
      {/* The sticky navigation bar */}
      <Header />
      
      <main>
        
        <Hero />
        <Skills />        
        <Projects/>
        <AboutMe />
        <Experience />
        <Contact />
      </main>
        <Footer/>
        <ScrollNavigation />
    </div>
  );
}

export default App;