import React from 'react';

const ContactSection = () => (
  <section className="bg-[#1c1c1c] py-20 px-4 flex items-center justify-center">
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-4">Let’s Talk.</h2>
      <p className="text-lg text-white/75 mb-6">
        Ready to transform your ad strategy? We’d love to hear about your brand.
      </p>
      <a
        href="mailto:hello@flencer.tech"
        className="text-[#9af963] text-lg font-medium underline hover:text-[#58e97d] transition-colors"
      >
        hello@flencer.tech
      </a>
      <div className="mt-4 text-sm text-white/60">
        We typically reply within 12 hours.
      </div>
      <div className="mt-5 text-sm text-white/40">
        Based in India, serving brands globally.
      </div>
    </div>
  </section>
);

export default ContactSection;
