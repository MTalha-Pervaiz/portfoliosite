import React from 'react';
import { ChevronRight } from 'lucide-react';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.jpg';

const projects = [
  {
    id: 1,
    name: 'Destination Management System',
    description: 'Revolutionizing e-commerce platform to generate Group Quotes.',
    logo: logo1,
  },
  {
    id: 2,
    name: 'The Wedding Connection',
    description: 'Innovative SaaS product development for the Wedding Industry.',
    logo: logo2,
  },
];

const ProjectsSection = () => {
  return (
    <section className="container mx-auto py-12">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        <a href="#" className="text-sm text-blue-500 hover:underline">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md flex items-center hover:shadow-xl transition duration-300"
          >
            <img
              src={project.logo}
              alt={project.name}
              className="w-24 h-24 rounded-md object-contain" // Adjusted size and alignment
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
            <ChevronRight className="text-gray-400" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;