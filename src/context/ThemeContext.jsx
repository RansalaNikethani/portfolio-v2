// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// 2. Custom Hook for easy access
export const useTheme = () => useContext(ThemeContext);

// 3. The Provider Component
export const ThemeProvider = ({ children }) => {
  // Check local storage for preferred theme or default to 'dark'
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  // Effect to apply the 'dark' class to the root HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the previous theme class
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    
    // Add the current theme class
    root.classList.add(theme);

    // Save the preference to Local Storage
    localStorage.setItem('theme', theme);
  }, [theme]); // Re-run effect whenever 'theme' changes

  // Function to toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};