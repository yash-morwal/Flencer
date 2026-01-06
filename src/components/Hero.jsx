import React from "react";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className=" bg-[var(--main-bg-color)] pt-4 sm:pt-0">
      <div className="min-h-[100vh] mx-auto px-3 sm:px-6 md:px-14 lg:px-16 py-14 sm:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 items-center">
        {/* Left: main copy */}
        <div className="space-y-6 max-w-150">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-8 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70">
            <span
              className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]"
            ></span>
            <span>AI-powered ad studio for modern brands</span>
          </div>

          <h1 className="dm-serif text-3xl mb-2 sm:mb-8 sm:text-4xl lg:text-[60px] tracking-tight text-[var(--main-text-color)]">
            We help brands by creating the best ADS in the market.
          </h1>

          <p className="text-sm sm:text-base text-[var(--secondary-text-color)] max-w-lg">
            We help brands by creating creative, high quality AI
            ads at a very affordable price<span className="text-[var(--accent-color)]">.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent-color)] px-5 py-2.5 text-xs font-medium text-black hover:opacity-90 transition-opacity shadow-sm w-full sm:w-auto">
              <span>View our work</span>
            </button>
            <button className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/20 bg-transparent px-4 py-2 text-xs font-medium text-[var(--main-text-color)] hover:border-white hover:bg-white/5 transition-colors w-full sm:w-auto">
              <span>See ad reel</span>
            </button>
          </div>

          <div className="flex hidden sm:block flex-wrap gap-2 text-[11px] text-white/60">
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

        {/* Right: Improved Dynamic Collage */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px]"
        >
          {/* Background glow effects */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/20 blur-[80px] rounded-full -z-20" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/20 blur-[100px] rounded-full -z-20" />
          
          {/* Column 1 - Left side (narrow column) */}
          {/* Image 1 - Top left small */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-0 left-0 w-[28%] h-[22%]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 shadow-lg">
              <img src="/images/col1.png" alt="Creator 1" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Image 2 - Middle left tall */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-[24%] left-0 w-[28%] h-[40%]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 shadow-lg">
              <img src="/images/col6.png" alt="Creator 2" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Image 3 - Bottom left medium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-0 left-0 w-[28%] h-[34%]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 shadow-lg">
              <img src="/images/col2.png" alt="Creator 3" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Column 2 - Middle column */}
          {/* Image 4 - Top center wide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="absolute top-0 left-[30%] w-[40%] h-[30%]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 shadow-lg">
              <img src="/images/col4.png" alt="Creator 4" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Image 5 - Middle center small */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="absolute top-[32%] left-[30%] w-[40%] h-[25%]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 shadow-lg">
              <img src="/images/col5.png" alt="Creator 5" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Image 6 - Bottom center tall */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-0 left-[30%] w-[40%] h-[41%]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 shadow-lg">
              <img src="/images/col3.png" alt="Creator 6" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Column 3 - Right side */}
          {/* Image 7 - Top right tall */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-0 right-0 w-[28%] h-[45%]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 shadow-lg">
              <img src="/images/col7.jpeg" alt="Creator 7" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Image 8 - Middle right small */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="absolute top-[47%] right-0 w-[28%] h-[20%]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 shadow-lg">
              <img src="/images/col8.jpeg" alt="Creator 8" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Image 9 - Bottom right medium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-0 right-0 w-[28%] h-[31%]"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/5 shadow-lg">
              <img src="/images/col9.jpeg" alt="Creator 9" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Decorative Elements - All with -z-10 to stay behind */}
          {/* Floating star - top left */}
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[8%] left-[5%] w-8 h-8 sm:w-10 sm:h-10 -z-10"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-35">
              <path d="M50 0 L54 46 L100 50 L54 54 L50 100 L46 54 L0 50 L46 46 Z" fill="var(--accent-color)"/>
            </svg>
          </motion.div>

          {/* Concentric circles - center overlap */}
          <div className="absolute top-[35%] left-[35%] w-20 h-20 -z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#c084fc" strokeWidth="2" strokeDasharray="4,6" opacity="0.3"/>
              <circle cx="50" cy="50" r="28" fill="none" stroke="#c084fc" strokeWidth="2" strokeDasharray="3,5" opacity="0.25"/>
            </svg>
          </div>

          {/* Dots cluster - top center */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[5%] left-[45%] flex gap-1.5 -z-10"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-purple-400 opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-pink-400 opacity-50"></span>
          </motion.div>

          {/* Wavy line - left side */}
          <div className="absolute top-[68%] left-[2%] w-20 h-10 -z-10 opacity-40">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path d="M5 25 Q 25 10, 50 25 T 95 25" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Plus sign - center */}
          <div className="absolute top-[60%] left-[38%] text-yellow-400 opacity-35 text-xl font-bold -z-10">
            +
          </div>

          {/* Star outline - bottom center */}
          <div className="absolute bottom-[48%] left-[68%] w-8 h-8 -z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
              <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" 
                    fill="none" stroke="#fbbf24" strokeWidth="2.5" />
            </svg>
          </div>

          {/* Curved arrow - right side */}
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[70%] right-[5%] w-12 h-12 -z-10 opacity-45"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M25 50 Q 45 30, 65 50 L 60 45 M 65 50 L 60 55" 
                    fill="none" stroke="#f472b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>

          {/* Small circle accent - bottom left */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[38%] left-[8%] w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-sm -z-10"
          />

          {/* Dashed circle - top right */}
          <div className="absolute top-[18%] right-[8%] w-14 h-14 -z-10">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
              <circle cx="50" cy="50" r="45" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="6,6"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
