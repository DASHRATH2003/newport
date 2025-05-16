import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Construction Company Website",
      description: "A modern, responsive website for a construction company showcasing their services, projects, and company information. Features include a gallery of completed projects, service details, and contact information.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/yourusername/construction-website",
      liveLink: "https://constructionupdatenew.vercel.app"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, shopping cart functionality, user authentication, and payment processing. The site includes product filtering, search capabilities, and responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://newrepo-blond.vercel.app"
    },
    {
      id: 3,
      title: "Educational Platform",
      description: "An interactive educational platform designed for online learning. Features include course listings, video lessons, progress tracking, quizzes, and a user dashboard. The platform supports both students and instructors with different access levels.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Firebase", "Redux", "Material UI", "Responsive Design"],
      githubLink: "https://github.com/yourusername/educational-platform",
      liveLink: "https://newbrightupdate.vercel.app"
    }
  ];

  // Get all unique technologies
  const allTechnologies = ['All'];
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      if (!allTechnologies.includes(tech)) {
        allTechnologies.push(tech);
      }
    });
  });

  // Filter projects based on selected technology
  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.technologies.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  }, [filter, projects]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-dark mb-4">My Projects</h1>
          <p className="text-lg text-gray-600">A showcase of my recent work and projects</p>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl font-semibold text-dark mb-4 md:mb-0">Filter by Technology:</h2>
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    filter === tech
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600">No projects found with the selected technology.</h3>
              <button
                onClick={() => setFilter('All')}
                className="mt-4 text-primary hover:underline"
              >
                Show all projects
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-dark mb-3">{project.title}</h3>

                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-primary transition"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-primary transition"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Interested in working together?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link
            to="/contact"
            className="bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Projects;
