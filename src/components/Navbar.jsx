import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl animate-slideDown border-b border-neutral-700">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-3">
        <div className="flex justify-between items-center">
          {/* Logo - Scrolls to top */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="heading-font text-2xl font-bold text-[var(--main-text-color)] cursor-pointer hover:text-[var(--accent-color)] transition-colors duration-300"
          >
            Flencer.
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="inter-font cursor-pointer text-[var(--secondary-text-color)] uppercase hover:text-[var(--accent-color)] transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[var(--accent-color)] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="inter-font cursor-pointer text-[var(--secondary-text-color)] uppercase hover:text-[var(--accent-color)] transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[var(--accent-color)] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="inter-font cursor-pointer text-[var(--secondary-text-color)] uppercase hover:text-[var(--accent-color)] transition-colors duration-300 relative group"
            >
              Pricing
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[var(--accent-color)] group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Desktop CTA - Scrolls to contact section */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block inter-font w-32 sm:w-40 bg-[var(--button-primary-bg)] text-[var(--main-bg-color)] px-3 md:px-4 py-1 md:py-2 cursor-pointer rounded-sm hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(229,231,235,0.3)] transition-all duration-300"
          >
            Contact us
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-[3px] bg-[var(--main-text-color)] rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
              <span className={`w-full h-[3px] bg-[var(--main-text-color)] rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-[3px] bg-[var(--main-text-color)] rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden flex flex-col gap-6 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pt-8' : 'max-h-0'}`}>
          <button 
            onClick={() => scrollToSection('home')}
            className="inter-font text-[var(--secondary-text-color)] uppercase hover:text-[var(--accent-color)] hover:pl-4 transition-all duration-300 py-2 text-left"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="inter-font text-[var(--secondary-text-color)] uppercase hover:text-[var(--accent-color)] hover:pl-4 transition-all duration-300 py-2 text-left"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="inter-font text-[var(--secondary-text-color)] uppercase hover:text-[var(--accent-color)] hover:pl-4 transition-all duration-300 py-2 text-left"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="inter-font w-32 sm:w-40 bg-[var(--button-primary-bg)] text-[var(--main-bg-color)] px-3 md:px-4 py-1 md:py-2 rounded-sm mt-4"
          >
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
