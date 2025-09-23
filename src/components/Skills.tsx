import React from 'react';

interface Skill {
  name: string;
  icon?: string;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming and Tools',
      skills: [
        { name: 'C', icon: '💻', color: 'bg-blue-600' },
        { name: 'Java', icon: '☕', color: 'bg-red-500' },
        { name: 'VS Code', icon: '💻', color: 'bg-blue-600' },
        { name: 'GitHub', icon: '🐙', color: 'bg-gray-800' },
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: '📄', color: 'bg-orange-600' },
        { name: 'CSS', icon: '🎨', color: 'bg-blue-400' },
        { name: 'React.js', icon: '⚛️', color: 'bg-blue-500' },
        { name: 'Insomnia', icon: '💤', color: 'bg-indigo-600' },
      ]
    },
    {
      title: 'Databases & Hosting',
      skills: [
        { name: 'MySQL', icon: '🐬', color: 'bg-blue-600' },
        { name: 'MongoDB', icon: '🍃', color: 'bg-green-500' },
        { name: 'Firebase', icon: '🔥', color: 'bg-yellow-600' },
        { name: 'Render', icon: '🚀', color: 'bg-purple-600' },
      ]
    },
  ];

  const allTechnologies = [
    'C', 'Java', 'HTML', 'CSS', 'React.js', 'MySQL', 'MongoDB', 'Firebase', 'Render', 'VS Code', 'Insomnia', 'GitHub'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="terminal-header">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <h2 className="text-sm font-mono">rohan@portfolio:~$ <span className="typing">npm list --skills</span></h2>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These are the core technologies and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    {skill.icon && skill.color && (
                      <div className={`w-10 h-10 rounded-full ${skill.color} flex items-center justify-center text-white text-lg font-bold mr-4`}>
                        {skill.icon}
                      </div>
                    )}
                    <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Technologies Badges */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            All Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {allTechnologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 text-sm hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
