import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/bravomzogo/', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
{ 
  name: 'X', 
  url: 'https://x.com', 
  icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' 
},

{ 
  name: 'Facebook', 
  url: 'https://www.facebook.com/profile.php?id=61575514160069', 
  icon: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z' 
},  ];

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 to-gray-800 text-gray-200 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-6 animate-slide-in-left">
              Shaibu's Portfolio
            </h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              A passionate software engineer crafting innovative, scalable, and user-centric web solutions.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-200 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-cyan-300 mb-6 animate-slide-in-up">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-200 hover:text-cyan-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-cyan-400 transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-200 hover:text-cyan-400 transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-cyan-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-cyan-300 mb-6 animate-slide-in-up">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-200">bravomzogo@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-200">+255 761 817 680</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-200">Dar-es-salaam, Tanzania</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <p className="text-gray-300">© {currentYear} Shaibu's Portfolio. All rights reserved.</p>
<p className="text-sm mt-3 text-gray-400 font-mono tracking-wider relative inline-block group">
  <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">⎯⎯⎯ </span>
  Developed by 
  <span className="text-cyan-400 font-medium ml-1 relative" style={{ fontSize: '13px' }}>
    SHAIBU MZOGO
    <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300 ease-out"></span>
  </span>
</p>  
          <p className="text-sm mt-3 text-gray-600 font-mono tracking-wider relative inline-block group">__ unmatched perspicacity coupled with sheer indefatigability makes me a feared opponent in all aspect of human endeavor __</p>

      </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-80 h-80 bg-cyan-400/10 rounded-full -top-40 -left-40 animate-float"></div>
        <div className="absolute w-64 h-64 bg-pink-400/10 rounded-full -bottom-32 -right-32 animate-float delay-300"></div>
      </div>
    </footer>
  );
}