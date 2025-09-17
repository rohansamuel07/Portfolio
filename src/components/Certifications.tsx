import React from 'react';
import { Award, ExternalLink, Info } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 'nptel-dbms',
      title: 'Database Management Systems',
      issuer: 'NPTEL',
      date: 'April 2023',
      credential: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs18/Course/NPTEL25CS18S24330301501358400.pdf',
    },
    {
      id: 'codechef-500',
      title: 'Certificate of Completion – 500 Difficulty Level Practice Problems',
      issuer: 'CodeChef',
      date: 'September 2025',
      credential: 'https://www.codechef.com/certificates/public/7b9162d',
    },
    {
      id: 'ibm-ml',
      title: 'Machine Learning',
      issuer: 'IBM',
      date: 'July 2023',
      credential: 'https://courses.cognitiveclass.ai/certificates/861c378e11a24f4d982777ce69d975c2',
    },
    {
      id: 'oracle',
      title: 'Oracle Cloud Infrastructure Foundations',
      issuer: 'Oracle',
      date: 'February 2024',
      credential: 'https://drive.google.com/file/d/1ot0GWIM-Gn-6VJBmxeECrXiCQXufb_53/view?usp=sharing',
    },
    {
      id: 'matlab-dl',
      title: 'Deep Learning with MATLAB',
      issuer: 'MathWorks',
      date: 'November 2023',
      credential: '#',
    },
    {
      id: 'matlab-onramp',
      title: 'MATLAB Onramp',
      issuer: 'MathWorks',
      date: 'September 2023',
      credential: '#',
    },
  ];

  const handleCredentialClick = (credential?: string) => {
    if (!credential || credential === '#' || credential.trim() === '') {
      toast.warn('There is no validation URL for this certification.', {
        position: 'top-center',
        autoClose: 3000,
        pauseOnHover: true,
      });
      return;
    }
    window.open(credential, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="terminal-header">
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <h2 className="text-sm font-mono">
            rohan@portfolio:~$ <span className="typing">ls certifications/</span>
          </h2>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications I've earned to enhance my skills and knowledge.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <Award className="text-blue-600 dark:text-blue-400" size={28} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    {cert.title}
                  </h3>

                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-2">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>

                  {cert.credential && cert.credential !== '#' && cert.credential.trim() !== '' ? (
                    <button
                      type="button"
                      onClick={() => handleCredentialClick(cert.credential)}
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1 focus:outline-none"
                    >
                      View Credential <ExternalLink size={14} className="ml-1" />
                    </button>
                  ) : (
                    <>
                      <Info
                        size={16}
                        data-tooltip-id={`tooltip-${cert.id}`}
                        data-tooltip-content="There is no validation URL for this certification."
                        className="ml-1 text-gray-500 dark:text-gray-400 cursor-default"
                        aria-label="No validation URL info"
                      />
                      <Tooltip id={`tooltip-${cert.id}`} />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Certifications;
