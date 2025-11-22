import React from 'react';

const Footer = () => (
  <footer className="bg-[#181818] py-12 px-4 border-t border-[#222]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      {/* Left: Brand */}
      <div className="flex flex-col items-center md:items-start">
        <span className="font-semibold text-2xl text-white tracking-tight">flencer.tech</span>
        <span className="text-sm text-white/60 mt-1">Cinematic ads. Without the cinematic cost.</span>
      </div>
      {/* Center: Links */}
      <div className="flex gap-8 text-base text-white/80 font-medium">
        <a href="#work" className="hover:text-[#9af963] transition">Work</a>
        <a href="#services" className="hover:text-[#9af963] transition">Services</a>
        <a href="#process" className="hover:text-[#9af963] transition">Process</a>
        <a href="#pricing" className="hover:text-[#9af963] transition">Pricing</a>
      </div>
      {/* Right: Socials */}
      <div className="flex gap-6 items-center">
        <a href="https://linkedin.com/company/flencer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg className="w-6 h-6 text-white hover:text-[#9af963]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-13 19h-3v-10h3v10zm-1.5-11.166c-.966 0-1.75-.785-1.75-1.75 0-.969.784-1.75 1.75-1.75s1.75.781 1.75 1.75c0 .965-.784 1.75-1.75 1.75zm13.5 11.166h-3v-5.604c0-1.337-.026-3.062-1.866-3.062-1.865 0-2.151 1.454-2.151 2.956v5.71h-3v-10h2.881v1.367h.041c.396-.75 1.363-1.541 2.804-1.541 3.001 0 3.56 1.975 3.56 4.545v5.629z"/>
          </svg>
        </a>
        <a href="https://behance.net/flencer" target="_blank" rel="noopener noreferrer" aria-label="Behance">
          <svg className="w-6 h-6 text-white hover:text-[#9af963]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.25 13.908c-.181-.596-.565-1.096-1.137-1.501-.569-.401-1.273-.601-2.113-.601-.843 0-1.547.198-2.133.595-.581.395-.919.895-.998 1.491-.018.124-.027.237-.027.35 0 .228.035.467.107.718.186.604.571 1.129 1.154 1.586.581.455 1.302.683 2.152.683.852 0 1.576-.21 2.162-.632.582-.419.949-.925 1.091-1.518.057-.231.072-.444.045-.638zm-2.886-.241c.343 0 .607.072.797.217.192.148.289.32.289.517 0 .205-.097.381-.287.528-.19.145-.455.217-.799.217-.342 0-.607-.072-.797-.217-.192-.147-.288-.323-.288-.527 0-.191.095-.364.285-.513.19-.147.455-.221.8-.221zm.574 1.875c.053 0 .135-.002.246-.008v.544c-.065.025-.167.045-.309.062-.145.017-.31.025-.491.025-.396 0-.726-.073-.982-.217-.257-.144-.383-.342-.383-.593v-.156c.063.01.172.016.326.016.159 0 .318-.007.477-.024.159-.017.318-.042.477-.075.159-.038.318-.075.477-.118.159-.043.296-.076.406-.099zm-14.555-9.758c-.001-1.656 1.342-2.999 2.999-2.999h8.811c1.656 0 2.999 1.343 2.999 2.999v8.811c0 1.656-1.343 2.999-2.999 2.999h-8.811c-1.657 0-2.999-1.343-2.999-2.999zm2.064 11.325h14.872c1.209 0 2.193-.984 2.193-2.193v-14.872c0-1.209-.984-2.193-2.193-2.193h-14.872c-1.209 0-2.193.984-2.193 2.193v14.872c-.001 1.209.983 2.193 2.192 2.193zm20.021-17.865v20.021c0 2.209-1.791 4-4 4h-20.021c-2.208 0-4-1.791-4-4v-20.021c0-2.209 1.792-4 4-4h20.021c2.209 0 4 1.791 4 4zm-5.666 16.399c-3.656 0-6.627-2.971-6.627-6.627s2.971-6.627 6.627-6.627c3.656 0 6.627 2.971 6.627 6.627s-2.971 6.627-6.627 6.627zm-12.659 1.099v-3.479h1.723v-1.145h-1.723v-2.688h1.896v-1.145h-3.619v8.553h3.619zm16.695-.508c0-.587-.471-1.059-1.059-1.059-.587 0-1.059.472-1.059 1.059s.472 1.059 1.059 1.059c.588 0 1.059-.472 1.059-1.059zm-10.998-7.677v8.256h1.885v-.609c.034-.029.087-.049.159-.049h.572v-.997h-1.293v-6.601h1.329v.493c.109-.12.211-.259.307-.413.095-.154.145-.338.144-.553 0-.309-.183-.547-.4-.547-.218 0-.401.238-.401.547zm14.44-1.065v3.326h2.058v1.145h-2.058v4.082h-1.885v-8.553h1.885v.636z"/>
          </svg>
        </a>
        {/* Instagram optional, remove if not needed */}
        <a href="https://instagram.com/flencer" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg className="w-6 h-6 text-white hover:text-[#9af963]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.25 5.25 0 0121.5 7.25v8.5A5.25 5.25 0 0116.25 21h-8.5A5.25 5.25 0 012 16.25v-8.5A5.25 5.25 0 017.75 2zm8.5 1.5h-8.5A3.75 3.75 0 003.25 7.25v8.5A3.75 3.75 0 007.75 19.5h8.5A3.75 3.75 0 0020.75 15.75v-8.5A3.75 3.75 0 0016.25 3.5zm-4.25 4.25A4.25 4.25 0 1116.25 12A4.26 4.26 0 0112 7.75zm0 6.5A2.25 2.25 0 1014.25 12A2.25 2.25 0 0012 14.25zm5.25-7.16a1.09 1.09 0 11-2.19 0a1.09 1.09 0 012.19 0z"/>
          </svg>
        </a>
      </div>
    </div>
    {/* Bottom line */}
    <div className="text-center text-xs text-white/40 mt-10 pt-6 border-t border-[#222]">
      © 2025 Flencer Studio. All rights reserved.
    </div>
  </footer>
);

export default Footer;
