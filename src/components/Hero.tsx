import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const texts = [
  "Build full-stack apps with MERN.",
  "Design scalable, reliable systems.",
  "Create responsive UIs with modern tools.",
  "Implement secure auth systems.",
  "Work with REST APIs and data flows.",
  "Write clean, optimized code.",
  "Collaborate in agile teams."
];

    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentText.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentText.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        // Pause at end of typing
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        // Pause before typing next
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const timerId = setTimeout(type, 1000);
    return () => clearTimeout(timerId);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0tNCAwaC0ydi0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0tNCAwSDh2LTJoMnYyem0yNC00aC0ydi0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0tNCAwSDE2di0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0yNCAwaC0ydi0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0tOCAwSDh2LTJoMnYyem0yNCAwSDI0di0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS04IDBoLTJ2LTJoMnYyem0tNCAwSDE2di0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0yNCAwSDI0di0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS04IDBoLTJ2LTJoMnYyem0tNCAwSDE2di0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0yNCAwSDI0di0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS04IDBoLTJ2LTJoMnYyem0tNCAwSDE2di0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0yNC00aC0ydi0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0tNCAwSDE2di0yaDJ2MnptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-70 dark:opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Rohan Samuel</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 text-gray-700 dark:text-gray-300 font-mono">
          I <span className="text-purple-600 dark:text-purple-400">{"{"}</span> 
          <span ref={textRef} className="typing-text"></span>
          <span className="inline-block w-2 h-5 bg-purple-600 dark:bg-purple-400 animate-blink"></span>
          <span className="text-purple-600 dark:text-purple-400">{"}"}</span>
        </h2>
        
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-600 dark:text-gray-400">
          Software engineer with experience in the MERN stack and modern web technologies.
          I enjoy building reliable, scalable systems and writing clean, maintainable code.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="#projects" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            View My Work
          </a>
          
          <a 
            href="#contact" 
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <ArrowDown className="text-gray-600 dark:text-gray-400" size={28} />
      </div>
    </section>
  );
};

export default Hero;