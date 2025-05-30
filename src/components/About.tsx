import React from 'react';
import { Code, Cpu, Compass, Zap } from 'lucide-react';
import myimage from '../assets/myimage.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="terminal-header">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <h2 className="text-sm font-mono">rohan@portfolio:~$ <span className="typing">about-me</span></h2>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hey I'm Rohan - a Computer Science Engineering student at Sathyabama Institute of Science and Technology, 
              graduating in 2026. With a CGPA of 8.4/10, I'm passionate about building scalable web applications 
              that solve real-world problems.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            I’m a web development enthusiast currently building my skills and exploring the world of full-stack development.
            I began with HTML, CSS, and JavaScript, and I've been gradually learning technologies like React, Node.js, MongoDB, and Firebase.
            While I’m still early in my journey, I love the challenge of solving problems through code and continuously improving with every step.
            I'm passionate about creating clean, user-focused experiences and excited to keep learning and growing in this field.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start space-x-3">
                <Code className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">Full-Stack Developer</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">MERN stack coder</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Cpu className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">CS Engineering</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Strong technical foundation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Compass className="text-gray-700 dark:text-gray-300 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">Tech Explorer</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Trying new tools</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Zap className="text-yellow-500 dark:text-yellow-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">AI Enthusiast</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Human + machine collaboration</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="btn-primary inline-block"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Connect
            </a>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105">
              <img 
                src={myimage} 
                alt="Professional developer at work" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full -z-10 filter blur-3xl opacity-70"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-200 dark:bg-purple-900/30 rounded-full -z-10 filter blur-3xl opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
