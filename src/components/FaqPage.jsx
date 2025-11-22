import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: 'How does Flencer create "studio-quality" ads without a physical shoot?',
    a: `We leverage advanced Generative AI technologies to build hyper-realistic visuals from scratch. By bypassing the need for expensive camera crews, actors, and location rentals, we create production-grade commercials (like the Nike/Adidas examples in our portfolio) entirely digitally. This allows for limitless creativity without logistical limits.`
  },
  {
    q: "Will AI ads match my brand’s specific look and feel?",
    a: `Absolutely. We don't just generate random images; we tailor the AI models to your specific brand identity. Whether you need a specific color palette (like a 60/30/10 split), specific fonts, or a certain mood, we ensure every frame aligns perfectly with your existing brand guidelines.`
  },
  {
    q: "Why should I choose AI advertising over traditional video production?",
    a: `The two biggest advantages are speed and cost. Traditional commercials can take weeks to film and edit, costing a fortune. Flencer delivers the same high-end aesthetic in a fraction of the time and at a significantly more affordable price point, allowing you to test more creative angles for less money.`
  },
  {
    q: "What is the typical turnaround time for a project?",
    a: `Because we eliminate physical production days, our turnaround is significantly faster than traditional agencies. While timelines vary by project complexity, we typically move from concept to final delivery in days, not months.`
  },
  {
    q: "Do I need to provide the product photos?",
    a: `Yes, high-quality reference images of your product help us achieve the best results. However, we can place your product into any environment imaginable—from a futuristic lab to a rainy city street—without you ever needing to ship the product to a set.`
  }
];

const dropdownVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { height: { duration: 0.33, ease: [0.58, 0, 0.42, 1] }, opacity: { duration: 0.22 } }
  },
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { height: { duration: 0.25, ease: [0.42, 0, 1, 1] }, opacity: { duration: 0.14 } }
  }
};

const FaqPage = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="min-h-screen py-14 px-4 sm:px-8 md:px-16">
      <div className="max-w-3xl mx-auto ">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl text-white text-center dm-serif mb-8"
        
        >
          Frequently Asked Questions
          <span className="text-[var(--accent-color)]">.</span>
        </motion.h1>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#252525] border border-white/10 rounded-xl shadow-sm group transition-all relative"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(idx)}
              onTouchEnd={() => setHovered(null)}
            >
              <div
                className="
                  cursor-pointer w-full text-left px-6 py-5 flex items-center justify-between
                  text-[1.12rem] text-white/90 font-medium
                  transition-colors
                  hover:text-[#a1f56b]
                  select-none
                "
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={hovered === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="flex-1 font-[400] text-md">{faq.q}</span>
                <svg
                  className={`transition-transform duration-300 ml-3 w-5 h-5 text-[#9af963] ${hovered === idx ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <AnimatePresence initial={false}>
                {hovered === idx && (
                  <motion.div
                    key="content"
                    id={`faq-answer-${idx}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={dropdownVariants}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="px-6 pb-6 pt-4 text-white/70 text-[15px] border-t border-white/[0.09] font-[400] leading-relaxed"
                    >
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
