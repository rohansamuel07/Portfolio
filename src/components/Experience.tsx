import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 'hcl',
      company: 'HCL Technologies',
      role: 'Project Intern',
      period: 'Jul 2024 - Oct 2024',
      description: 'Developed and deployed a full-stack personal blog web application using React, Firebase, and Tailwind CSS.',
      achievements: [
        'Implemented features including post creation, editing, commenting, and dark/light theme toggle',
        'Created a secure admin dashboard for managing users and content',
        'Integrated Firebase Authentication for secure login and real-time user state management',
        'Collaborated closely with mentors to identify bugs, implement fixes, and optimize application performance',
        'Gained practical experience in building scalable and responsive web applications with clean architecture and focus on user experience',
      ],
    },
    {
      id: 'eduversity',
      company: 'Eduversity',
      role: 'Web Development Intern',
      period: 'Jun 2024 - Jul 2024',
      description: 'Developed a solid foundation in the MERN stack (MongoDB, Express.js, React, Node.js).',
      achievements: [
        'Gained hands-on experience in building basic web applications with React and Node.js',
        'Strengthened front-end skills in HTML, CSS, and JavaScript',
        'Worked with APIs and state management while exploring React’s component-based architecture',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="terminal-header">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <h2 className="text-sm font-mono">
            rohan@portfolio:~$ <span className="typing">cat experience.json</span>
          </h2>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey as a developer, including internships and work experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`mb-12`}>
                <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] mt-1.5"></div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                    <Briefcase size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                    {exp.company}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                  <h4 className="font-medium mb-2 text-gray-800 dark:text-white">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-green-500 dark:text-green-400">✓</span> {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
