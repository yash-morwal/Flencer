import React from 'react';
import CreativeGraphic from './CreativeGraphic';

const Hero = () => {
  return (
    <section className="pt-32 md:pt-40 pb-16 animate-fadeIn bg-[#0f0f0f]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Hero Text Content */}
          <div className="md:w-1/2 md:text-left">
            <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 md:mb-16 animate-slideUp text-white">
              We help brands by creating the best ads in the market<span className="text-blue-500">.</span>
            </h1>
            <div className="mb-16 animate-fadeIn animation-delay-500">
              <p className="paragraph-font text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                We help brands by creating creative<br className="hidden sm:block" />
                high quality AI ads in very affordable price.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start items-center">
                <button className="paragraph-font w-full sm:w-auto bg-gray-200 text-[#0f0f0f] px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(229,231,235,0.5)] transition-all duration-300">
                  See Our work
                </button>
                <button className="paragraph-font w-full sm:w-auto bg-[#2a2a2a] text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:-translate-y-1 hover:bg-[#363636] hover:shadow-[0_8px_20px_rgba(54,54,54,0.5)] transition-all duration-300 border border-gray-700">
                  Give a call
                </button>
              </div>
            </div>
          </div>

          {/* Creative Graphic */}
          <div className="md:w-1/2">
            <CreativeGraphic />
          </div>
        </div>

        {/* Section Heading - White Text */}
        <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center animate-fadeIn animation-delay-700 text-white mt-16">
          What we do?
        </h2>
      </div>
    </section>
  );
};

export default Hero;
