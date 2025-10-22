// src/components/ScrollNavigation.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const ScrollNavigation = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show "Back to Top" when scrolled down more than 400px
      setShowTopButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
      {/* Back to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="p-3 rounded-full bg-accent text-white shadow-lg hover:bg-accent-dark transition-transform hover:scale-105"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Scroll to Bottom Button (optional) */}
      <button
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        className="p-3 rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-800 transition-transform hover:scale-105"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ScrollNavigation;