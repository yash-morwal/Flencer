import React from "react";

const CTASection = () => (
  <section className="py-16 bg-[#161c13] flex justify-center items-center">
    <div className="max-w-2xl w-full mx-auto">
      <div className="flex flex-col sm:flex-row rounded-2xl shadow-xl border border-[#9af963]/15 overflow-hidden bg-[#1a1c19]">
        {/* Left: Accent panel */}
        <div className="sm:w-1/3 flex items-center justify-center bg-gradient-to-b from-[#9af963]/80 to-[#82db54]/60 p-8">
          <h2 className="text-xl font-bold text-[#181c11] text-center">
            Start Your<br />AI Ad Pilot
          </h2>
        </div>
        {/* Right: Main CTA */}
        <div className="sm:w-2/3 px-8 py-9 flex flex-col items-center justify-center">
          <p className="text-[1.1rem] text-white/80 mb-4 text-center">
            Get <span className="text-[#9af963] font-semibold">3 high-production video ads</span> for your brand.<br /> Ready in days, not weeks.
          </p>
          <button className="w-full py-4 rounded-lg font-semibold text-[#181c11] bg-[#9af963] hover:bg-[#81e65f] transition duration-200 mb-3 shadow">
            Start Pilot for $500
          </button>
          <a
            href="#contact"
            className="block text-center text-[#9af963] text-base underline hover:text-[#63cb4c] transition-colors"
          >
            Questions? Book a 15-min Strategy Call.
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
