import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const ContactSection = () => (
  <section
    id="contact"
    className="min-h-[60vh] flex flex-col items-center justify-center pt-12 pb-28 px-4 sm:px-6"
  >
    <div
      className="w-full max-w-5xl rounded-2xl sm:rounded-3xl px-5 sm:px-4 md:px-6 lg:px-8 lg:px-12 py-8 sm:py-12 shadow-2xl border border-white/10 flex flex-col items-center gap-6 sm:gap-8"
      style={{
        backdropFilter: "blur(20px)",
      }}
    >
      <h2 className="dm-serif text-3xl sm:text-4xl lg:text-5xl text-white text-center mb-1 tracking-tight">
        Contact Us
      </h2>
      <p className="text-base sm:text-lg text-white/60 text-center mb-2 sm:mb-4 max-w-lg px-2">
        Connect directly for your next project, campaign, or quick query.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 sm:gap-5 justify-center items-stretch w-full max-w-4xl">
        <a
          href="https://wa.me/917878886514"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white/90 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 hover:text-[#25D366] transition-all font-semibold text-sm sm:text-base flex-1"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
          <span className="break-all sm:break-normal">+91 78788 86514</span>
        </a>
        <a
          href="mailto:flencerstudio@gmail.com"
          className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white/90 hover:bg-[#9af963]/10 hover:border-[#9af963]/30 hover:text-[#9af963] transition-all font-semibold text-sm sm:text-base flex-1"
        >
          <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
          <span className="break-all sm:break-normal">flencerstudio@gmail.com</span>
        </a>
        <a
          href="https://www.linkedin.com/company/flencer/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white/90 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 hover:text-[#0077b5] transition-all font-semibold text-sm sm:text-base flex-1"
        >
          <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
          <span>LinkedIn</span>
        </a>
      </div>
      
      <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-white/40 text-center px-4">
        Usually replies in 8–12 hours.<br />India-based, serving globally.
      </div>
    </div>
  </section>
);

export default ContactSection;
