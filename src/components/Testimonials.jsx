import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Carousel utility for grouped sliding
function useCarousel(length, groupSize, interval = 5000) {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % Math.ceil(length / groupSize));
    }, interval);
    return () => clearInterval(id);
  }, [length, groupSize, interval]);
  return [current, setCurrent];
}

// Group testimonials array for number of visible items per slide
const groupTestimonials = (items, groupSize) => {
  const groups = [];
  for (let i = 0; i < items.length; i += groupSize) {
    groups.push(items.slice(i, i + groupSize));
  }
  return groups;
};

const slideVariants = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -60, opacity: 0 }
};

const Testimonials = () => {
  // responsive group size: 2 for mobile/tablet, 3 for desktop
  const [groupSize, setGroupSize] = React.useState(3);
  React.useEffect(() => {
    const handleResize = () => {
      setGroupSize(window.innerWidth < 1024 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const testimonialGroups = groupTestimonials(testimonials, groupSize);
  const [current, setCurrent] = useCarousel(testimonials.length, groupSize, 5000);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70 mb-6">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#9af963]"></span>
            <span>TRUSTED BY 500+ BRANDS</span>
          </div>
          <h2 className="dm-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Loved by brands worldwide
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
            See what our clients say about transforming their ad production with AI
          </p>
        </div>
        {/* Carousel */}
        <div className="relative flex flex-col items-center justify-center min-h-[350px]">
          <div className="relative w-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.7, ease: [0.4, 0.59, 0.48, 1] }}
                className="flex gap-5 sm:gap-8 justify-center w-full"
              >
                {testimonialGroups[current].map(testimonial => (
                  <div
                    key={testimonial.id}
                    className="bg-[#232323] rounded-xl border border-white/15 shadow-lg px-5 py-7 sm:px-7 sm:py-10 max-w-[90vw] w-[320px] sm:w-[340px] md:w-[370px] mx-auto flex flex-col justify-between"
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-2.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#9af963]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {/* Text */}
                    <p className="text-base text-white/80 leading-relaxed mb-4 inter-font line-clamp-6">
                      "{testimonial.text}"
                    </p>
                    {/* Author + metric */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2.5">
                        <img src={testimonial.image} alt={testimonial.name} className="w-9 h-9 rounded-full border-2 border-[#262626]" />
                        <div>
                          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                          <p className="text-xs text-white/50">{testimonial.role} · {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dots */}
          <div className="flex gap-2 mt-7">
            {testimonialGroups.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial set ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full border border-[#9af963]/60 
                  ${current === idx ? 'bg-[#9af963]' : 'bg-transparent'}
                  transition-all`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm text-white/60 mb-4">
            Join 500+ brands creating better ads with AI
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
