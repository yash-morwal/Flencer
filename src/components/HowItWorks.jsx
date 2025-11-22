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
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=550&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    number: "03",
    title: "Professional Delivery",
    description: "Receive your high-quality, professional ad within 48 hours—ready to launch and drive results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=550&auto=format&fit=crop&q=80",
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
        <h2 className="dm-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 ">
          How it works?
        </h2>
        <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto font-normal leading-relaxed">
          From your idea to professional ad in just 3 simple steps
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
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
                className="w-14 h-14 rounded-2xl bg-[#9af963] flex items-center justify-center font-extrabold text-black text-xl dm-serif shadow-xl"
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
              min-h-[500px]
            ">
              <div className="w-full h-[380px] overflow-hidden">
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
              <div className="flex-1 flex flex-col px-6 pb-8 pt-5">
                <h3 className="text-xl 
                font-semibold 
                text-white 
                mb-2
                inter-font
                group-hover:text-[#9af963]
                transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed inter-font">
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
