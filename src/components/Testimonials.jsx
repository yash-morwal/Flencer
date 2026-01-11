import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Viral Morzaria",
    role: "Instagram influencer",
    company: "ViralAI Studios",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "I worked with Flencer on a video for my Viral AI Studios page, and the final output was genuinely impressive. They have a good creative eye, take feedback well, and are clearly invested in delivering strong results. I enjoyed collaborating with them and would be happy to work together again.",
    metric: "10x ROI"
  }
];

// Carousel utility for grouped sliding
function useCarousel(length, groupSize, interval = 5000) {
  const [current, setCurrent] = React.useState(0);
  
  React.useEffect(() => {
    const totalGroups = Math.ceil(length / groupSize);
    // Reset to valid index if current is out of bounds after groupSize change
    if (current >= totalGroups) {
      setCurrent(0);
    }
  }, [groupSize, length, current]);

  React.useEffect(() => {
    const totalGroups = Math.ceil(length / groupSize);
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % totalGroups);
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

// Responsive slide variants, disables animation for mobile
const slideVariants = (withAnimation) => withAnimation ? {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -60, opacity: 0 }
} : {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const Testimonials = () => {
  // responsive group size: 1 for mobile, 2 for tablet, 3 for desktop
  const [groupSize, setGroupSize] = React.useState(3);
  const [withAnimation, setWithAnimation] = React.useState(true);
  const [isClient, setIsClient] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setGroupSize(1);
        setWithAnimation(false);
      } else if (width < 1024) {
        setGroupSize(2);
        setWithAnimation(true);
      } else {
        setGroupSize(3);
        setWithAnimation(true);
      }
    };
    
    // Initial call
    handleResize();
    
    // Debounce resize handler to prevent too many updates
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };
    
    window.addEventListener("resize", debouncedResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  const testimonialGroups = groupTestimonials(testimonials, groupSize);
  const [current, setCurrent] = useCarousel(testimonials.length, groupSize, 5000);

  // Ensure current index is valid
  const safeIndex = Math.min(current, testimonialGroups.length - 1);

  if (!isClient) {
    // Render placeholder during SSR to prevent hydration issues
    return (
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-10 sm:mb-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70 mb-6">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]"></span>
              <span>TRUSTED BY 500+ BRANDS</span>
            </div>
            <h2 className="dm-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--main-text-color)] mb-4">
              Loved by brands worldwide
            </h2>
            <p className="text-sm sm:text-base text-[var(--secondary-text-color)] max-w-2xl mx-auto">
              See what our clients say about transforming their ad production with AI
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium text-white/70 mb-6">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]"></span>
            <span>TRUSTED BY 500+ BRANDS</span>
          </div>
          <h2 className="dm-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--main-text-color)] mb-4">
            Loved by brands worldwide
          </h2>
          <p className="text-sm sm:text-base text-[var(--secondary-text-color)] max-w-2xl mx-auto">
            See what our clients say about transforming their ad production with AI
          </p>
        </div>
        {/* Carousel */}
        <div className="relative flex flex-col items-center justify-center min-h-[350px]">
          <div className="relative w-full flex justify-center overflow-hidden">
            {testimonialGroups.length > 0 && testimonialGroups[safeIndex] && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${safeIndex}-${groupSize}`}
                  variants={slideVariants(withAnimation)}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: withAnimation ? 0.7 : 0.3, ease: [0.4, 0.59, 0.48, 1] }}
                  className={`flex gap-5 sm:gap-8 justify-center w-full ${groupSize === 1 ? 'flex-col items-center' : ''}`}
                >
                  {testimonialGroups[safeIndex].map(testimonial => (
                    <div
                      key={testimonial.id}
                      className="bg-[#232323] rounded-xl border border-white/15 shadow-lg px-5 py-7 sm:px-7 sm:py-10 max-w-[98vw] w-full sm:w-[340px] md:w-[370px] mx-auto flex flex-col justify-between"
                    >
                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-2.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-[var(--accent-color)]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      {/* Text */}
                      <p className="text-base text-[var(--main-text-color)]/80 leading-relaxed mb-4 line-clamp-6">
                        "{testimonial.text}"
                      </p>
                      {/* Author */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2.5">
                          <img src={testimonial.image} alt={testimonial.name} className="w-9 h-9 rounded-full border-2 border-[#262626]" />
                          <div>
                            <p className="text-sm font-semibold text-[var(--main-text-color)]">{testimonial.name}</p>
                            <p className="text-xs text-[var(--secondary-text-color)]">{testimonial.role} · {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          {/* Dots */}
          <div className="flex gap-2 mt-7">
            {testimonialGroups.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial set ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full border border-[var(--accent-color)]/60 
                  ${safeIndex === idx ? 'bg-[var(--accent-color)]' : 'bg-transparent'}
                  transition-all`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm text-[var(--secondary-text-color)] mb-4">
            Join 500+ brands creating better ads with AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
