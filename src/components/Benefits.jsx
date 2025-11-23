import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    id: 1,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "10x Faster Production",
    description: "Get your ads ready in 48 hours instead of weeks. Our AI workflow eliminates lengthy production cycles."
  },
  {
    id: 2,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "90% Cost Reduction",
    description: "Pay a fraction of agency rates. No need for expensive sets, crew, or equipment. Quality at startup prices."
  },
  {
    id: 3,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Agency-Quality Results",
    description: "Professional, photorealistic ads that look like they were shot with real models, sets, and lighting."
  },
  {
    id: 4,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Unlimited Revisions",
    description: "Iterate and refine until perfect. Make changes instantly without additional costs or delays."
  },
  {
    id: 5,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Full Customization",
    description: "Control every detail—scripts, visuals, voiceovers, music, and branding. Your vision, perfectly executed."
  },
  {
    id: 6,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Scale With Ease",
    description: "Produce 10+ ads per month without breaking the bank. Test more variations and grow faster."
  }
];

const Benefits = () => (
  <section className="py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="dm-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Why brands choose Flencer
        </h2>
        <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
          Everything you need to create professional ads without the traditional hassle and costs
        </p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="bg-white/4 border border-white/10 rounded-2xl p-3 sm:p-6 lg:p-7 hover:bg-white/[0.07] hover:border-[#9af963]/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col sm:flex-col items-center justify-center min-h-[92px] sm:min-h-[150px]"
            style={{ minHeight: '92px' }} // forces card min height so no overlap/crowding
          >
            <div className="w-full flex items-center sm:block">
              {/* Icon (always left) */}
              <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#9af963]/10 border border-[#9af963]/20 flex items-center justify-center text-[#9af963] group-hover:bg-[#9af963]/20 group-hover:scale-110 transition-all duration-200 mr-3 sm:mr-0 sm:mb-5">
                {benefit.icon}
              </div>
              {/* Title */}
              <span className="text-md sm:text-xl font-[400] leading-[1.3] text-white/90 sm:leading-auto md:font-medium sm:text-white group-hover:text-[#9af963] transition-colors flex-1 text-left sm:text-center">
                {benefit.title}
              </span>
            </div>
            {/* Description -- only visible above sm, with good margin */}
            <p className="hidden sm:block text-sm text-white/60 inter-font mt-1 sm:mt-2 text-left">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
