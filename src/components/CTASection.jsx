import React from "react";

const CTASection = () => (
  <section className="py-20 flex items-center justify-center bg-[#181818] relative">
    <div
      className="w-full max-w-2xl mx-auto rounded-3xl px-7 py-12 sm:py-16 shadow-2xl border border-white/15"
      style={{
        background: "linear-gradient(120deg, rgba(255,255,255,0.10) 40%, rgba(154,249,99,0.09) 100%)",
        backdropFilter: "blur(18px)"
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 text-center leading-tight">
        Start Your AI Ad Pilot Today.
      </h2>
      <p className="text-base sm:text-lg text-white/80 mb-7 text-center max-w-lg mx-auto">
        Get 3 high-production video ads for your brand.<br className="hidden sm:block" /> Ready to launch in days, not weeks.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-3">
        <button className="bg-[#9af963] hover:bg-[#7ee145] text-[#151e11] font-semibold px-7 py-3 rounded-xl text-base shadow-md transition-all">
          Start Pilot for $500
        </button>
        <a
          href="#strategy-call"
          className="text-[#9af963] text-base underline underline-offset-4 font-medium hover:text-[#7ee145] transition"
        >
          Questions? Book a 15-min Strategy Call.
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
