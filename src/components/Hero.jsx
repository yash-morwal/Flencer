import React from 'react';
import CreativeGraphic from './CreativeGraphic';

const Hero = () => {
  return (
    <section className="pt-32 md:pt-40 pb-16 animate-fadeIn bg-[var(--main-bg-color)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Hero Text Content */}
          <div className="md:w-1/2 md:text-left">
             
            <h1 className="dm-serif text-center font-[200] md:text-left text-4xl sm:text-4xl md:text-4xl lg:text-6xl  leading-[1.1] md:my-5 animate-slideUp text-[var(--main-text-color)]">
              We help brands by creating the best <span className='font-bold onest'>ADS</span> in the market<span className="text-green-500">.</span>
            </h1>
            <div className="mb-6 animate-fadeIn animation-delay-500">
              <p className="inter-font text-base sm:text-lg md:text-[16px] text-[var(--secondary-text-color)] mb-3 leading-relaxed">
                We help brands by creating creative<br className="hidden sm:block" />
                high quality AI ads in very affordable price.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start items-center">
                <button className="inter-font w-32 sm:w-40 bg-[#87e64b] text-[var(--main-bg-color)] px-3 md:px-4 py-1 md:py-2 rounded-md hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(229,231,235,0.5)] transition-all duration-300">
                  See Our work
                </button>
                <button className="inter-font w-32 sm:w-40 bg-neutral-700 text-[var(--main-text-color)] px-3 md:px-4 py-1 md:py-2 rounded-md hover:-translate-y-1 hover:bg-[#363636] hover:shadow-[0_8px_20px_rgba(54,54,54,0.5)] transition-all duration-300 border border-[var(--border-color)]">
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


      </div>
    </section>
  );
};

export default Hero;
