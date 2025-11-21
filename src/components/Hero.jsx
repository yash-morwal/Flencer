import React from "react";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className=" bg-[var(--main-bg-color)] pt-10 sm:pt-0">
      <div className="min-h-[100vh] mx-auto px-3 sm:px-6 md:px-14 lg:px-16 py-14 sm:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: main copy */}
        <div className="space-y-6 max-w-150">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70">
            <span
              className="inline-flex h-1.5 w-1.5 rounded-full bg-[#87e64b]"
            ></span>
            <span>AI-powered ad studio for modern brands</span>
          </div>

          <h1 className="dm-serif text-3xl sm:text-4xl lg:text-[60px] tracking-tight text-white">
            We help brands by creating the best ADS in the market.
          </h1>

          <p className="text-sm sm:text-base text-white/70 max-w-lg">
            We help brands by creating creative, high quality AI
            ads at a very affordable price<span className="text-[var(--accent-color)]">.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#87e64b] px-5 py-2.5 text-xs font-medium text-black hover:bg-[#9af963] transition-colors shadow-sm w-full sm:w-auto">
              <span>View our work</span>
            </button>
            <button className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/20 bg-transparent px-4 py-2 text-xs font-medium text-white hover:border-white hover:bg-white/5 transition-colors w-full sm:w-auto">
              <span>See ad reel</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-3 text-[11px] text-white/60">
            <span className="px-2.5 py-1 rounded-full border border-white/15 bg-white/5">
              AI-first ad production
            </span>
            <span className="px-2.5 py-1 rounded-full border border-white/15 bg-white/5">
              UGC, static &amp; motion
            </span>
            <span className="px-2.5 py-1 rounded-full border border-white/15 bg-white/5">
              Fast turnaround, fair pricing
            </span>
          </div>
        </div>

        {/* Right: simple stat / preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#9af963]/10 blur-[100px] rounded-full" />
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-7 shadow-2xl">
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#0a0a0a]/50 rounded-xl p-4 border border-white/5">
                    <p className="caption mb-1.5">Time Saved</p>
                    <p className="heading-h2 text-[2rem] font-bold text-[#9af963]">85%</p>
                  </div>
                  <div className="bg-[#0a0a0a]/50 rounded-xl p-4 border border-white/5">
                    <p className="caption mb-1.5">Cost Reduced</p>
                    <p className="heading-h2 text-[2rem] font-bold text-[#9af963]">90%</p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', label: 'Script Generation' },
                    { icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', label: 'AI Video Creation' },
                    { icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z', label: 'Voice Synthesis' },
                    { icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12', label: 'Export & Deliver' }
                  ].map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-3 bg-[#0a0a0a]/50 rounded-lg p-3 border border-white/5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#9af963]/15 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[#9af963]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                        </svg>
                      </div>
                      <span className="body-sm text-white/80 font-medium">{step.label}</span>
                      <div className="ml-auto">
                        <svg className="w-4 h-4 text-[#9af963]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
