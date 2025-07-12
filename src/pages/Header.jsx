import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();
  const headerRef = useRef();

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/education', name: 'Education' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Parallax effect for header background
      if (headerRef.current) {
        headerRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkHover = (index) => {
    setHoveredLink(index);
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-gradient-to-b from-gray-900/95 to-gray-900/80 backdrop-blur-md py-2 shadow-xl'
          : 'bg-gradient-to-b from-gray-900/70 to-transparent py-4'
      }`}
      style={{
        backgroundImage: isScrolled 
          ? 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
          : 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        backgroundSize: '200% 200%',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo with animated gradient */}
          <Link 
            to="/" 
            className="relative group"
            onMouseEnter={() => handleLinkHover(-1)}
            onMouseLeave={handleLinkLeave}
          >
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                isScrolled 
                  ? 'from-blue-400 to-purple-500' 
                  : 'from-white to-blue-200'
              } group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300`}>
                Shaibu
              </span>
              <motion.span 
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  isScrolled 
                    ? 'bg-white/10 text-blue-300 border border-white/10' 
                    : 'bg-white/20 text-white border border-white/20'
                } group-hover:bg-white/30 group-hover:border-white/30 transition-all duration-300`}
                whileHover={{ rotate: 5 }}
              >
                Portfolio
              </motion.span>
            </motion.div>
            
            {hoveredLink === -1 && (
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                layoutId="underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>

          {/* Desktop Navigation with animated underline */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={() => handleLinkHover(index)}
                onMouseLeave={handleLinkLeave}
              >
                <Link
                  to={link.path}
                  className={`relative z-10 px-2 py-1 font-medium ${
                    location.pathname === link.path
                      ? 'text-white'
                      : isScrolled
                        ? 'text-gray-300 hover:text-white'
                        : 'text-white/80 hover:text-white'
                  } transition-colors duration-300`}
                >
                  <motion.span
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: '0 0 8px rgba(255,255,255,0.3)'
                    }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
                
                {(hoveredLink === index || location.pathname === link.path) && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Animated Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 focus:outline-none relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-8 h-8 relative">
              <motion.span 
                className={`absolute block w-6 h-0.5 ${
                  isScrolled ? 'bg-white' : 'bg-white'
                } transition-all duration-300`}
                animate={{
                  y: mobileMenuOpen ? 6 : 0,
                  rotate: mobileMenuOpen ? 45 : 0,
                }}
              />
              <motion.span 
                className={`absolute block w-6 h-0.5 ${
                  isScrolled ? 'bg-white' : 'bg-white'
                } transition-all duration-300`}
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  y: 6,
                }}
              />
              <motion.span 
                className={`absolute block w-6 h-0.5 ${
                  isScrolled ? 'bg-white' : 'bg-white'
                } transition-all duration-300`}
                animate={{
                  y: mobileMenuOpen ? 6 : 12,
                  rotate: mobileMenuOpen ? -45 : 0,
                }}
              />
            </div>
          </motion.button>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 pt-24 px-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: 'spring', 
                  damping: 25,
                  stiffness: 300
                }
              }}
              exit={{ 
                opacity: 0, 
                y: -20,
                transition: { duration: 0.2 }
              }}
            >
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.1 + index * 0.05,
                        type: 'spring',
                        stiffness: 300
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: -20,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`block text-2xl font-medium py-3 px-4 rounded-lg transition-all ${
                        location.pathname === link.path
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div 
                className="mt-12 pt-6 border-t border-gray-800"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.4 }
                }}
              >
                <div className="flex justify-center space-x-6">
                  {['github.com/bravomzogo/', 'com/profile.php?id=61575514160069', 'twitter'].map((social) => (
                    <motion.a
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      whileHover={{ 
                        y: -3,
                        scale: 1.1,
                        boxShadow: '0 5px 15px rgba(59, 130, 246, 0.4)'
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        {social === 'github' && (
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        )}
                        {social === 'linkedin' && (
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        )}
                        {social === 'twitter' && (
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                        )}
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}