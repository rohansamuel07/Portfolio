import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <a 
            href="#hero" 
            className="text-2xl font-bold mb-6"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-white">Rohan</span>
            <span className="text-blue-400">.dev</span>
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com/rohansamuel07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rohan962004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:rohansamuelx07@gmail.com" 
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
            <a 
              href="#about" 
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="hover:text-blue-400 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </div>
          
          <div className="w-full max-w-4xl h-px bg-gray-800 dark:bg-gray-700 mb-6"></div>
          
          <p className="text-gray-400 text-center text-sm">
            &copy; {currentYear} Rohan Samuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
