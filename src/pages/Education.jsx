import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setEducation([
            {
              id: 1,
              institution: "University of Dodoma",
              degree: "Bachelor of Science",
              field: "Software Engineering",
              start_date: "2026",
              end_date: "2022",
              description: "Specialized in software engineering and web development. Participated in various projects including a full-stack web application and a mobile app development course."
            },
            {
              id: 2,
              institution: "Advanced Level Secondary School",
              degree: "Advanced Certificate",
              field: "Physics, Chemistry, Mathematics",
              start_date: "2019",
              end_date: "2021",
              description: "Focus on science subjects with excellent performance in mathematics and physics."
            }
          ]);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching education:', error);
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
            My Academic Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto opacity-90 animate-slide-in-up">
            Explore the milestones that shaped my expertise and passion for technology.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-400"></div>
          </div>
        ) : education.length === 0 ? (
          <p className="text-center text-xl text-gray-200 animate-fade-in">No education entries available.</p>
        ) : (
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-pink-500 transform -translate-x-1/2"></div>
            
            {education.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
              >
                <div className="p-8 bg-gray-900/70 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-cyan-500/30 transition-all duration-500 relative transform hover:scale-105">
                  <div className="hidden md:block absolute top-8 w-6 h-6 rounded-full bg-cyan-400 border-4 border-gray-900 transform -translate-y-1/2 md:left-0 md:-ml-3 md:right-auto md:mr-auto animate-pulse-slow"></div>
                  
                  <h3 className="text-3xl font-bold text-cyan-300 mb-3">{item.institution}</h3>
                  <div className="flex flex-wrap items-center mb-4">
                    <span className="bg-cyan-500/20 text-cyan-200 text-sm font-medium px-4 py-1 rounded-full mr-2">
                      {item.degree}
                    </span>
                    <span className="text-gray-200">{item.field}</span>
                  </div>
                  <div className="text-gray-300 mb-4 font-medium">
                    {item.start_date} - {item.end_date}
                  </div>
                  <p className="text-gray-200 leading-relaxed">{item.description}</p>
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