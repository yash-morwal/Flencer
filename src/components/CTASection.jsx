const CTASection = () => (
  <section className="py-20 flex items-center justify-center px-4 sm:px-6">
    <div
      className="w-full max-w-2xl rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-10 sm:py-16 shadow-2xl border border-white/15 flex flex-col items-center gap-6"
      style={{
        backdropFilter: "blur(18px)",
      }}
    >
      <h2 className="dm-serif text-2xl sm:text-3xl lg:text-4xl text-[var(--main-text-color)] text-center mb-4 leading-tight tracking-tight">
        Start Your AI Ad Pilot Today
      </h2>
      <p className="text-base sm:text-lg text-[var(--secondary-text-color)] text-center mb-5 max-w-lg">
        Get 3 high-production video ads for your brand.<br className="hidden sm:block" />
        Ready to launch in days, not weeks.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-3">
        <button className="bg-[var(--accent-color)] hover:opacity-90 text-[#151e11] font-semibold px-7 py-3 rounded-xl text-base shadow-md transition-all w-full sm:w-auto">
          Start Pilot for $500
        </button>
        <a
          href="#strategy-call"
          className="text-[var(--accent-color)] text-base underline underline-offset-4 font-medium hover:opacity-80 transition w-full sm:w-auto text-center"
        >
          Questions? Book a 15-min Strategy Call.
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
