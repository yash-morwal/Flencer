import { FaLinkedin, FaBehance, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="pt-10 pb-4 px-6 border-t border-[#222] flex flex-col items-center bg-[#222222]">
    <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10 mx-auto py-6">
      {/* Left: Brand & tagline */}
      <div className="flex flex-col items-center md:items-start">
        <span className="inter-font text-2xl text-white tracking-tight">
          flencer.tech
        </span>
        <span className="text-sm text-white/60 mt-1">
          Cinematic ads. Without the cinematic cost.
        </span>
      </div>
      {/* Center: Navigation */}
      <div className="flex gap-7 text-base text-white/80 font-medium">
        <a href="#work" className="hover:text-[#9af963] transition">Work</a>
        <a href="#services" className="hover:text-[#9af963] transition">Services</a>
        <a href="#process" className="hover:text-[#9af963] transition">Process</a>
        <a href="#pricing" className="hover:text-[#9af963] transition">Pricing</a>
      </div>
      {/* Right: Social Links with colorful icons */}
      <div className="flex gap-6 items-center">
        <a href="https://linkedin.com/company/flencer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="w-6 h-6 text-[#0a6fd4] hover:text-[#005885] transition" />
        </a>
        <a href="https://behance.net/flencer" target="_blank" rel="noopener noreferrer" aria-label="Behance">
          <FaWhatsapp className="w-6 h-6 text-[#25d366] hover:text-[#0028cc] transition" />
        </a>
        <a href="https://instagram.com/flencerstudio" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="w-6 h-6 text-[#E4405F] hover:text-[#c13584] transition" />
        </a>
        <a href="mailto:flencerstudio@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaEnvelope className="w-6 h-6 text-[#ffffff] hover:text-[#c13584] transition" />
        </a>
      </div>
    </div>
    <div className="w-full text-center text-xs text-white/40 mt-6 pt-5 border-t border-[#222]">
      © 2025 Flencer Studio. All rights reserved.
    </div>
  </footer>
);

export default Footer;
