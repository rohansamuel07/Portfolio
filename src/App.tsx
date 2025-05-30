import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="w-16 h-16 border-4 border-t-blue-600 border-b-blue-600 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;