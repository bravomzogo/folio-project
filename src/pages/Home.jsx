import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false);

  const socialIcons = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: (
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      )
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: (
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
      )
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 text-white overflow-hidden">
      {/* Background elements and gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-cyan-400/20 rounded-full -top-32 sm:-top-48 -left-32 sm:-left-48 animate-float"></div>
        <div className="absolute w-48 sm:w-72 h-48 sm:h-72 bg-pink-400/20 rounded-full -bottom-24 sm:-bottom-36 -right-24 sm:-right-36 animate-float delay-300"></div>
        <div className="absolute w-40 sm:w-64 h-40 sm:h-64 bg-purple-400/20 rounded-full top-1/4 left-3/4 animate-float delay-600"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 tracking-tight animate-pulse-slow">
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                Shaibu
              </span>
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-gradient-to-r from-cyan-400/50 to-pink-500/50 blur-sm"></span>
            </span>
          </h1>
          
          <div className="relative inline-block mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wider animate-slide-in-up">
              <span className="relative inline-block">
                <span className="relative z-10 text-cyan-200">Software Engineer</span>
                <span className="absolute top-0 left-0 w-full h-full text-cyan-400/20 blur-sm">Software Engineer</span>
              </span>
            </h2>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed opacity-95 animate-slide-in-up delay-100 bg-black/20 p-4 sm:p-6 rounded-xl shadow-inner">
            Crafting immersive digital experiences with cutting-edge tech. Studying at the University of Dodoma, I'm driven to solve complex challenges through elegant code.
          </p>
          
          <div className="flex flex-col items-center gap-4 animate-slide-in-up delay-200">
            <Link
              to="/projects"
              className="relative px-8 py-3 w-full max-w-xs bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-500 ease-out overflow-hidden group"
            >
              <span className="relative z-10">Explore My Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
            
            <button
              onClick={() => setShowContactModal(true)}
              className="relative px-8 py-3 w-full max-w-xs border-2 border-cyan-400 text-cyan-200 font-bold rounded-full hover:bg-cyan-400/10 hover:text-cyan-100 hover:scale-105 transition-all duration-500 ease-out"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal backdrop */}
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setShowContactModal(false)}
            />
            
            {/* Modal content */}
            <motion.div
              className="relative z-50 w-full max-w-md bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-gray-700"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                    Get In Touch
                  </h3>
                  <button 
                    onClick={() => setShowContactModal(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-cyan-500/10 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-200">Email</h4>
                      <p className="text-gray-400">bravomzogo@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-cyan-500/10 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-200">Phone</h4>
                      <p className="text-gray-400">+255 782 728 021</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-cyan-500/10 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-200">Location</h4>
                      <p className="text-gray-400">Dar-es-salaam, Tanzania</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex justify-center space-x-4">
                    {socialIcons.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-colors"
                        aria-label={social.name}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          {social.icon}
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}