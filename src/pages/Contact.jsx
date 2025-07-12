import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-6 animate-slide-in-down">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto opacity-90 animate-slide-in-up">
              Got a project idea or want to collaborate? Reach out and let's create something extraordinary!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold text-cyan-300 mb-8 animate-slide-in-left">Contact Details</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-cyan-500/20 p-4 rounded-full shadow-lg">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-lg font-medium text-gray-100">Email</h4>
                    <p className="text-gray-200">bravomzogo@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-cyan-500/20 p-4 rounded-full shadow-lg">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-lg font-medium text-gray-100">Phone</h4>
                    <p className="text-gray-200">+255 761 817 680</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-cyan-500/20 p-4 rounded-full shadow-lg">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-lg font-medium text-gray-100">Location</h4>
                    <p className="text-gray-200">Dodoma, Tanzania</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-gray-900/50 text-gray-100 border border-cyan-400/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-gray-900/50 text-gray-100 border border-cyan-400/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-gray-900/50 text-gray-100 border border-cyan-400/50 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-cyan-400/50 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-500 to-pink-500 hover:shadow-lg hover:shadow-cyan-500/50'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
                
                {status === 'success' && (
                  <div className="p-4 bg-green-500/20 text-green-200 rounded-lg animate-fade-in">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="p-4 bg-red-500/20 text-red-200 rounded-lg animate-fade-in">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-80 h-80 bg-cyan-400/10 rounded-full -top-40 -left-40 animate-float"></div>
        <div className="absolute w-64 h-64 bg-pink-400/10 rounded-full -bottom-32 -right-32 animate-float delay-300"></div>
      </div>
    </section>
  );
}