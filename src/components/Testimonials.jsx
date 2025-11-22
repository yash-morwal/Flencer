// components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "Flencer transformed our ad production. We went from spending $15k per campaign to just $1.5k, with faster turnaround and better results. The AI quality is genuinely impressive.",
      metric: "10x ROI"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      company: "GrowthLabs",
      image: "https://i.pravatar.cc/150?img=2",
      rating: 5,
      text: "As a startup, we couldn't afford traditional agencies. Flencer gave us agency-quality ads at a price we could actually afford. Game changer for our growth.",
      metric: "5 campaigns"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Creative Lead",
      company: "BrandStudio",
      image: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      text: "I was skeptical about AI-generated ads, but Flencer proved me wrong. The creativity, quality, and speed are unmatched. Our clients are consistently impressed.",
      metric: "92% approval"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "E-commerce Manager",
      company: "RetailPro",
      image: "https://i.pravatar.cc/150?img=4",
      rating: 5,
      text: "We produce 15+ product ads monthly now. Before Flencer, we could barely afford 2-3. The unlimited revisions are a lifesaver for perfecting every detail.",
      metric: "15 ads/month"
    },
    {
      id: 5,
      name: "Emma Wilson",
      role: "Social Media Manager",
      company: "FashionForward",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "The turnaround time is incredible. We get high-quality ads in 48 hours that used to take weeks. Our content calendar has never been this consistent.",
      metric: "48hr delivery"
    },
    {
      id: 6,
      name: "David Kumar",
      role: "Growth Marketer",
      company: "StartupHub",
      image: "https://i.pravatar.cc/150?img=6",
      rating: 5,
      text: "Flencer's AI understands our brand voice perfectly. Every ad feels authentic and converts well. The cost savings let us test more variations and scale faster.",
      metric: "+245% CTR"
    }
  ];

  return (
    <section className="testimonials py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-14 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70 mb-6">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]"></span>
            <span>TRUSTED BY 500+ BRANDS</span>
          </div>
          
          <h2 className="dm-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Loved by brands worldwide
          </h2>
          
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
            See what our clients say about transforming their ad production with AI
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[var(--accent-color)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-white/70 leading-relaxed mb-6 inter-font">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full border-2 border-white/10"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white inter-font">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-white/50 inter-font">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="px-2.5 py-1 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 flex items-center">
                  <span className="text-[10px] text-[var(--accent-color)]">
                    {testimonial.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm text-white/60 mb-4">
            Join 500+ brands creating better ads with AI
          </p>
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent-color)] px-6 py-3 text-sm font-medium text-black hover:bg-[#87e64b] transition-colors shadow-lg">
            <span>Start creating today</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
