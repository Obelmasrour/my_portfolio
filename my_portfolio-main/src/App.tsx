import React from 'react';
import { Github as GitHub, Linkedin, Mail, Menu, X } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu} 
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-blue-600 text-white md:hidden shadow-lg"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full h-16 bg-white shadow-md z-40 transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">OB</div>
          <ul className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
              <li key={section}>
                <button 
                  onClick={() => scrollToSection(section)}
                  className={`font-medium hover:text-blue-600 transition-colors ${activeSection === section ? 'text-blue-600' : 'text-gray-700'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <GitHub size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ossamabelmasrour@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-30 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center space-y-8">
          {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
            <li key={section}>
              <button 
                onClick={() => scrollToSection(section)}
                className="text-xl font-medium hover:text-blue-600 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex space-x-8 mt-12">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
            <GitHub size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:ossamabelmasrour@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© {new Date().getFullYear()} Ossama Belmasrour. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <GitHub size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ossamabelmasrour@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;