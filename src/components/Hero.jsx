import React from "react";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className=" bg-[var(--main-bg-color)] pt-4 sm:pt-0">
      <div className="mx-auto px-3 sm:px-6 md:px-14 lg:px-16 py-14 sm:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 items-center">
        {/* Left: main copy */}
        <div className="space-y-6 max-w-150">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-8 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70">
            <span
              className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]"
            ></span>
            <span>AI-powered ad studio for modern brands</span>
          </div>

          <h1 className="dm-serif text-3xl mb-2 sm:mb-8 sm:text-4xl md:text-5xl lg:text-[60px] tracking-tight text-[var(--main-text-color)]">
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
          className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px] lg:my-5"
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
              <img src="/images/col1.jpeg" alt="Creator 1" className="w-full h-full object-cover" />
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
