import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setProjects([
            {
              id: 1,
              title: "E-Commerce Platform",
              description: "A full-featured online store with real chating integration and other cool staff.",
              tags: ["Django", "Javascript", "Postgresql"],
              github_link: null,
              demo_link: "https://udomshop.xyz",
              image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
              id: 2,
              title: "Civemuslim.com",
              description: "On progress heavy weight management system.",
              tags: ["Django", "Javascript", "Sqlite"],
              github_link: null,
              demo_link: 'civemuslim.com',
              image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            },
            {
              id: 3,
              title: "Ahmes Secondary School Management System",
              description: "Robust Ahmes Secondary School with high level of security and usability.",
              tags: ["Django", "Javascript", "HTML/CSS"],
              github_link: null,
              demo_link: "https://ahmes-secondary.onrender.com",
              image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-6 animate-slide-in-down">
            My Creations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto opacity-90 animate-slide-in-up">
            A showcase of my innovative projects and technical achievements.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'web', 'mobile'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-full capitalize font-medium transition-all duration-300 ${
                filter === type 
                  ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg' 
                  : 'bg-gray-900/50 text-gray-200 hover:bg-gray-900/80 hover:shadow-cyan-500/30'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-900/50 rounded-2xl shadow-lg animate-pulse">
                <div className="h-64 bg-gray-700/50 rounded-t-2xl"></div>
                <div className="p-8">
                  <div className="h-6 bg-gray-700/50 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-700/50 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-700/50 rounded w-5/6 mb-4"></div>
                  <div className="flex space-x-2">
                    <div className="h-8 w-20 bg-gray-700/50 rounded-full"></div>
                    <div className="h-8 w-20 bg-gray-700/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <p className="text-center text-xl text-gray-200 animate-fade-in">No projects available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-900/70 rounded-2xl shadow-lg backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-cyan-500/50 hover:scale-105">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-3">{project.title}</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-cyan-500/20 text-cyan-200 text-xs font-medium px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-6">
                    {project.github_link && (
                      <a 
                        href={project.github_link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-200 transition-colors duration-300"
                      >
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.demo_link && (
                      <a 
                        href={project.demo_link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-200 transition-colors duration-300"
                      >
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-80 h-80 bg-cyan-400/10 rounded-full -top-40 -left-40 animate-float"></div>
        <div className="absolute w-64 h-64 bg-pink-400/10 rounded-full -bottom-32 -right-32 animate-float delay-300"></div>
      </div>
    </section>
  );
}