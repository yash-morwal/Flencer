import React from 'react';
import VideoCard from './VideoCard';

const WhatWeDo = () => {
  return (
    <section className="py-16 projects">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 h-fit">
        <h2 className="dm-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-[var(--main-text-color)] mb-12">
          What We Do<span className='text-green-500'>.</span>
        </h2>
        <div className="justify-center gap-8 w-full flex flex-row">
          <VideoCard
            videoUrl="xxfr5g20cu"
            title="Chills - Hypothetical Spec Ad"
            description="A high quality spec"
            // width="vertical-width"
            // height="vertical-height"
            a={`${(9/16)}`}
            b={`${1}`}
            // aspectRatio="0.562"
          />
          <VideoCard
            videoUrl="c2k2n1m1d9"
            title="Chills - The Ultimate Refreshment"
            description="Experience the refreshing taste of Chills, the perfect drink to cool you down on a hot day. Made with natural ingredients and a hint of mint, Chills is the ultimate refreshment."
            // width="horizontal-width"
            // height="horizontal-height"
            b={`${(16/9)}`}
            a={`${(1)}`}

            // aspectRatio="1.777"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
