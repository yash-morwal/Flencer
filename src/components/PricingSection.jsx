import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'The Pilot',
    subtitle: 'One-Time',
    price: '$199',
    period: '',
    description: '',
    features: [
      '5 High-Fidelity AI Product Images',
      '1 Short Motion Ad (GIF/Loop style)',
      'Commercial Usage Rights',
      '3-Day Turnaround'
    ],
    highlight: false,
  },
  {
    name: 'The Growth',
    subtitle: 'Monthly',
    price: '$499',
    period: '/month',
    description: '',
    features: [
      '12 High-Fidelity AI Product Images ',
      '3 Premium AI Video Commercials ',
      'Reel/Story Format Resizes (9:16)',
      'Priority Support',
      '5-7 Day Turnaround'
    ],
    highlight: true,
  },
  {
    name: 'The Dominance',
    subtitle: 'Monthly',
    price: '$997',
    period: '/month',
    description: '',
    features: [
      'Unlimited Static AI Image Generation',
      '8 Premium AI Video Commercials',
      'A/B Testing Variations (Hooks & CTAs)',
      'Dedicated Account Manager',
      'Source Files Included',
    ],
    highlight: false,
  }
];

const PricingSection = () => (
  <section className="py-14 sm:py-20 px-3 sm:px-6 lg:px-20" id="pricing">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="dm-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white mb-2 ">
          Pricing Plans
        </h2>
        <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
          No hidden fees. No surprises. Just premium ads at prices that make sense.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative bg-gradient-to-br ${plan.highlight
                ? 'from-[#9af963]/15 to-[#9af963]/5 border-[#9af963]/50'
                : 'from-white/7 to-white/[0.03] border-white/10'
              } backdrop-blur-sm border-2 rounded-2xl px-4 py-6 sm:px-8 md:px-3 lg:px-4 xl:px-8 sm:py-8 ${plan.highlight ? 'shadow-xl shadow-[#9af963]/16' : ''
              }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#9af963] text-[#181818] text-xs sm:text-sm font-semibold rounded-full shadow-lg">
                MOST POPULAR
              </div>
            )}

            <div className="mb-5">
              <span className="text-xs sm:text-sm text-white/50 font-medium">{plan.subtitle}</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 mt-1">{plan.name}</h3>
            </div>

            <div className="mb-6 flex items-baseline space-x-2">
              <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
              <span className="text-white/60 text-base sm:text-lg">{plan.period}</span>
            </div>

            <button
              className={`w-full py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 mb-7 ${plan.highlight
                ? 'bg-[#9af963] text-[#181818] hover:bg-[#8ae855] hover:scale-105 shadow'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
            </button>

            <div className="space-y-2">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-left">
                  <svg className="w-4 h-4 text-[#9af963] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80 text-sm sm:text-base md:text-sm lg:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
