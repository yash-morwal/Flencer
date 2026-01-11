import React from "react";
import { motion } from "framer-motion";


const steps = [
  {
    id: 1,
    number: "01",
    title: "Share Your Vision",
    description: "Send us your product images or simply describe your ad idea. That's all we need to get started.",
    image: "./images/shoe.png",
  },
  {
    id: 2,
    number: "02",
    title: "AI Magic Happens",
    description: "Our expert team uses premium AI models like Kling, Veo, and ElevenLabs through a sophisticated workflow.",
    image: "./images/workflow.png",
  },
  {
    id: 3,
    number: "03",
    title: "Professional Delivery",
    description: "Receive your high-quality, professional ad within 48 hours—ready to launch and drive results.",
    image: "./images/shoe-ad.png",
  }
];


const HowItWorks = () => (
  <section className="py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="dm-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--main-text-color)] mb-4 ">
          How it works?
        </h2>
        <p className="text-base sm:text-lg text-[var(--secondary-text-color)] max-w-2xl mx-auto font-normal leading-relaxed">
          From your idea to professional ad in just 3 simple steps
        </p>
      </motion.div>


      {/* Smaller gap on mobile (gap-4), larger on tablet+ (md:gap-8) */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-0 gap-4 md:gap-3 lg:gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative group h-full"
          >
            {/* Floating number: overlap, subtle shadow, generous size */}
            <div className="absolute -top-7 -left-7 z-20">
              <div
                className="w-14 h-14 rounded-2xl bg-[var(--accent-color)] flex items-center justify-center font-extrabold text-black text-xl dm-serif shadow-xl"
                style={{
                  boxShadow: "0 4px 32px 0 rgba(154,249,99,0.16)",
                  letterSpacing: "0.01em",
                }}
              >
                {step.number}
              </div>
            </div>
            <div className="
              bg-gradient-to-b from-[#2a2a2a] via-[#242424] to-[#181818] 
              border border-white/10 
              rounded-2xl 
              shadow-xl 
              hover:shadow-2xl
              duration-300
              flex flex-col overflow-hidden
              h-full
            ">
              {/* Responsive aspect ratio: 16:9 on mobile, 3:4 on tablet, 16:9 on desktop */}
              <div className="w-full aspect-video md:aspect-[3/4] lg:aspect-video overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px'
                  }}
                />
              </div>
              {/* Responsive padding: smaller on mobile, larger on tablet+ */}
              <div className="flex-1 flex flex-col px-4 pb-5 pt-3 md:px-6 md:pb-8 md:pt-5">
                <h3 className="text-lg 
                font-semibold 
                text-[var(--main-text-color)] 
                mb-1.5 md:mb-2
                inter-font
                group-hover:text-[var(--accent-color)]
                transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--secondary-text-color)] leading-relaxed inter-font">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


export default HowItWorks;
