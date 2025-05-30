import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="terminal-header">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <h2 className="text-sm font-mono">rohan@portfolio:~$ <span className="typing">cat education.txt</span></h2>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-100 dark:bg-purple-900/20 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Bachelor of Engineering in Computer Science
                </h3>
              </div>
              
              <div className="ml-11">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    Sathyabama Institute of Science and Technology
                  </p>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                    <Calendar size={16} className="mr-1" />
                    <span>2022 - 2026</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-800 dark:text-white">Current CGPA</p>
                    <p className="font-bold text-blue-600 dark:text-blue-400 text-xl">8.4 / 10</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    My education at Sathyabama Institute of Science and Technology has provided me with a strong 
                    foundation in computer science principles, algorithms, data structures, and software development.
                  </p>
                  
                  <p>
                    I've completed coursework in:
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-5 list-disc">
                    <li>Data Structures & Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Object-Oriented Programming</li>
                    <li>Web Technologies</li>
                    <li>Computer Networks</li>
                    <li>Operating Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;