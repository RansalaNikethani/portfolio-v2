// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-gray-600 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Upuli Ransala. All Rights Reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;