import React from "react";

const ContactSection = () => (
  <section className="min-h-screen flex items-center justify-center bg-[#181818] px-4 py-16 sm:py-24">
    <div
      className="w-full max-w-md mx-auto rounded-3xl px-7 py-10 shadow-2xl border border-white/15 flex flex-col items-center gap-6"
      style={{
        background: "linear-gradient(130deg, rgba(255,255,255,0.13) 55%, rgba(154,249,99,0.09) 100%)",
        backdropFilter: "blur(20px)"
      }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
        Let’s Talk
      </h2>
      <p className="text-base text-white/80 text-center mb-1">
        Ready to transform your ad strategy?<br />We’d love to hear about your brand.
      </p>
      
      {/* Email Button */}
      <a
        href="https://mail.google.com/mail/?view=cm&to=flencerstudio@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center gap-3 bg-[#9af963] hover:bg-[#7ee145] text-[#171917] py-3 px-5 rounded-xl font-semibold text-base shadow-md transition-all justify-center"
      >
        <svg className="w-6 h-6 -ml-1" fill="none" stroke="#171917" strokeWidth="1.7" viewBox="0 0 24 24">
          <rect width="20" height="14" x="2" y="5" rx="2" fill="#fff" />
          <path d="M22 5l-10 7L2 5" stroke="#7ee145" strokeWidth="1.7" />
        </svg>
        Email us via Gmail
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/company/flencer/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center gap-3 bg-white/15 hover:bg-[#9af963]/10 text-white border border-white/20 py-3 px-5 rounded-xl font-semibold text-base shadow transition-all justify-center"
      >
        <svg className="w-6 h-6 -ml-1" fill="currentColor" viewBox="0 0 24 24">
          <circle cx={4.983} cy={5.009} r={2.188} />
          <path d="M9.237 8.855h3.941v1.568h.065c.548-1.038 1.893-2.133 3.898-2.133 4.166 0 4.934 2.742 4.934 6.309v7.04h-4.219v-6.243c0-1.488-.026-3.406-2.077-3.406-2.077 0-2.395 1.623-2.395 3.305v6.344H9.237v-12.886zm-7.137 0h4.219v12.886h-4.219z" />
        </svg>
        Connect on LinkedIn
      </a>

      {/* Support/Info */}
      <div className="text-xs text-white/60 text-center mt-2 mb-1">
        <span>We typically reply within 12 hours.</span>
      </div>
      <div className="text-xs text-white/40 text-center">
        <span>Based in India, serving brands globally.</span>
      </div>
    </div>
  </section>
);

export default ContactSection;
