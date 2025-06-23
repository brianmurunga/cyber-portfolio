'use client';
import React from 'react';

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <nav className={`w-full py-4 px-6 fixed top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Brian Murunga</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#resume" className="hover:text-blue-500">Resume</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#labs" className="hover:text-blue-500">Labs</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
