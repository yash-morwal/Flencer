import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl animate-slideDown">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="heading-font text-2xl font-bold text-[var(--main-text-color)] cursor-pointer hover:text-[#87e64b] transition-colors duration-300">
            Flencer.
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center bg-[var(--navbar-menu-bg)] backdrop-blur-lg border border-[var(--border-color)] border-opacity-80 rounded-full px-6 py-2">
            <a href="#home" className="paragraph-font text-[var(--main-text-color)] hover:text-[#87e64b] transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[#87e64b] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="paragraph-font text-[var(--main-text-color)] hover:text-[#87e64b] transition-colors duration-300 relative group">
              Projects
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[#87e64b] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#testimonials" className="paragraph-font text-[var(--main-text-color)] hover:text-[#87e64b] transition-colors duration-300 relative group">
              Testimonials
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[#87e64b] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block paragraph-font bg-[var(--button-primary-bg)] text-[var(--main-bg-color)] px-8 py-3 rounded-xl font-semibold hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(229,231,235,0.3)] transition-all duration-300">
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
          <a href="#home" className="paragraph-font text-[var(--main-text-color)] hover:text-[#87e64b] hover:pl-4 transition-all duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#projects" className="paragraph-font text-[var(--main-text-color)] hover:text-[#87e64b] hover:pl-4 transition-all duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#testimonials" className="paragraph-font text-[var(--main-text-color)] hover:text-[#87e64b] hover:pl-4 transition-all duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </a>
          <button className="paragraph-font bg-[var(--button-primary-bg)] text-[var(--main-bg-color)] px-8 py-3 rounded-xl font-semibold mt-4" onClick={() => setIsMenuOpen(false)}>
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
