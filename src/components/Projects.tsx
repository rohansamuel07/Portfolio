import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import codecollabImage from '../assets/logo.png';
import blogImage from '../assets/blog.png';
import neuroImage from '../assets/neuro.png'; // NeuroNudge project image

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  demoAdmin?: {
    email: string;
    password: string;
  };
  features: string[];
  status?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'code-compiler',
      title: 'Online Collaborative Code Compiler',
      description:
        'Cloud-based collaborative code editor with 10+ language support, live sharing, AI assistance, and private session rooms.',
      image: codecollabImage,
      tags: ['React', 'Node.js', 'Socket.io', 'Monaco Editor', 'Piston API'],
      liveLink: 'https://codecollab-1-e80c.onrender.com',
      repoLink: 'https://github.com/rohansamuel07/codecollab',
      features: [
        'Real-time multi-user code collaboration',
        '10+ language support via Piston API',
        'Monaco Editor integration',
        'AI-powered code suggestions using Pollinations',
        'Collaborative drawing with tldraw',
        'Room-based private session sharing',
        'Optimized backend for 30% faster runtime',
      ],
    },
    {
      id: 'blog-app',
      title: 'Personal Blog App',
      description:
        'MERN blog app with Firebase auth, dark/light mode, and admin content dashboard.',
      image: blogImage,
      tags: ['React', 'MongoDB', 'Express', 'Firebase', 'Tailwind CSS'],
      liveLink: 'https://personalblog-8gel.onrender.com',
      repoLink: 'https://github.com/rohansamuel07/personalblog',
      demoAdmin: {
        email: 'sampleuser@gmail.com',
        password: 'sampleuser123',
      },
      features: [
        'User auth with Firebase',
        'CRUD for blogs & comments',
        'Dark/light theme toggle',
        'Responsive UI with Tailwind',
        'Admin dashboard for post & user management',
        'Optimized search (60% faster)',
      ],
    },
    {
      id: 'neuronudge',
      title: 'NeuroNudge',
      description:
        'Browser-wide behavioral analytics platform that tracks keystroke dynamics and facial emotion detection. Features a comprehensive dashboard for real-time monitoring and integrates both rule-based and ML-based models for accurate session analysis. This is an ongoing project.',
      image: neuroImage,
      tags: ['React', 'Tailwind CSS', 'OpenCV', 'ML Models', 'Browser Analytics', 'HCI'],
      features: [
        'Browser-wide keystroke tracking',
        'Facial emotion detection using ML models',
        'Real-time dashboard displaying user metrics and trends',
        'Rule-based and ML-based session analytics',
        'User behavior monitoring with interactive visualizations',
        'Focus and productivity nudges based on detected patterns',
      ],
      status: 'Ongoing',
    },
  ];

  const toggleProjectDetails = (projectId: string) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="terminal-header mb-12">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <h2 className="text-sm font-mono">
            rohan@portfolio:~$ <span className="typing">list-projects</span>
          </h2>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each showcases a unique challenge
            and demonstrates different aspects of my technical skills.
          </p>
        </div>

        {/* First row: two projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              activeProject={activeProject}
              toggleProjectDetails={toggleProjectDetails}
            />
          ))}
        </div>

        {/* Second row: single project (NeuroNudge) centered */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 justify-center">
          {projects.slice(2).map((project) => (
            <div className="lg:w-1/2 mx-auto">
              <ProjectCard
                key={project.id}
                project={project}
                activeProject={activeProject}
                toggleProjectDetails={toggleProjectDetails}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  activeProject: string | null;
  toggleProjectDetails: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, activeProject, toggleProjectDetails }) => (
  <div
    className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
      activeProject === project.id ? 'shadow-xl -translate-y-1' : 'hover:shadow-xl hover:-translate-y-1'
    }`}
  >
    <div className="relative">
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-6">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-blue-600/80 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.status && (
            <span className="mt-2 inline-block px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-300 rounded-full text-xs font-medium">
              {project.status}
            </span>
          )}
        </div>
      </div>
    </div>

    <div className="p-6">
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-3 mb-4">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline"
          >
            <Github size={16} /> Repository
          </a>
        )}
      </div>

      <button
        onClick={() => toggleProjectDetails(project.id)}
        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
      >
        {activeProject === project.id ? 'Hide Details' : 'Show Details'}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-300 ${
            activeProject === project.id ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          activeProject === project.id ? 'max-h-[500px] mt-4' : 'max-h-0'
        }`}
      >
        <div className="pl-4 border-l-2 border-blue-500 dark:border-blue-400">
          <h4 className="font-medium mb-2 text-gray-800 dark:text-white">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                <span className="text-green-500 dark:text-green-400">✓</span> {feature}
              </li>
            ))}
          </ul>

          {project.demoAdmin && (
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-white">🔐 Demo Admin Login:</h4>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> {project.demoAdmin.email}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Password:</strong> {project.demoAdmin.password}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
