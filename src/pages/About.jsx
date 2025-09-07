import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const skills = [
    { name: 'Django Framework', level: 98 },
    {name: 'Spring Boot', level: 85 },
    {name: 'Laravel Framework', level: 98 },
    { name: 'React', level: 88 },
    { name: 'Vue.js', level: 88 },
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 80 },
    {name: 'Express.js', level: 98 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Python', level: 90 },
    { name: 'Database Design', level: 95 },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-6 animate-slide-in-down">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto opacity-90 animate-slide-in-up">
            Discover my journey, passion, and the skills that drive my craft.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-semibold text-cyan-300 mb-6 animate-slide-in-left">Who Am I?</h3>
            <p style={{
  color: '#e5e7eb',
  marginBottom: '1.5rem',
  lineHeight: '1.75'
}}>
  I'm  <span style={{
    position: 'relative',
    display: 'inline-block',
    fontWeight: '500',
    background: 'linear-gradient(90deg, #22d3ee, #ec4899)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    animation: 'textGlow 3s ease-in-out infinite',
    textShadow: '0 0 8px rgba(34, 211, 238, 0.3), 0 0 16px rgba(236, 72, 153, 0.3)'
  }}>
    Shaibu Mzogo 
    <span style={{
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '2px',
      background: 'linear-gradient(90deg, rgba(34, 211, 238, 0.7), rgba(236, 72, 153, 0.7))',
      borderRadius: '9999px'
    }}></span>
    </span>, a dedicated software engineer pursuing my degree at the University of Dodoma. With a deep-rooted passion for coding, I specialize in crafting scalable, user-centric applications using modern technologies.
</p>
            <p className="text-gray-200 mb-8 leading-relaxed">
              My tech journey began in high school, sparking a love for problem-solving through code. 
              I continuously evolve, embracing the latest trends and best practices to deliver innovative solutions.
            </p>
            <Link
              to="/projects"
              className="relative inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-500 group"
            >
              <span className="relative z-10">Explore My Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border-4 border-cyan-400/50 shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 animate-pulse-slow"></div>
              <img 
                src="/p.jpg" 
                alt="Shaibu" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-10 text-center animate-slide-in-up">My Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-900/50 p-6 rounded-xl shadow-lg backdrop-blur-sm hover:shadow-cyan-500/30 transition-shadow duration-300">
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-gray-100">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/70 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-600/50">
            <div className="p-10 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-3 animate-count-up">7+</div>
              <div className="text-lg font-medium text-gray-200">Projects Completed</div>
            </div>
            <div className="p-10 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-3 animate-count-up">5+</div>
              <div className="text-lg font-medium text-gray-200">Happy Clients</div>
            </div>
            <div className="p-10 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-3 animate-count-up">3+</div>
              <div className="text-lg font-medium text-gray-200">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}