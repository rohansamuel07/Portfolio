import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'certifications', 'education', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          <span className="text-gray-800 dark:text-white">Rohan</span>.dev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                  activeSection === link.id ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`py-2 px-4 rounded-md ${
                activeSection === link.id 
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;