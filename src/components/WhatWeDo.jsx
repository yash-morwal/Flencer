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
            videoUrl="https://player.cloudinary.com/embed/?cloud_name=doc1619rx&public_id=final_output_wtrmrk_rtgwqk&profile=new"
            title="Beverage Ad"
            description="A beverage product Ad for a hypothetical brand named Chills"
            aspectRatio='0.5625'
          />
          <VideoCard
            videoUrl="https://res.cloudinary.com/doc1619rx/video/upload/v1763643528/final_y4kgaq.mp4"
            title="Jewelery Ad "
            description="Made a product Ad for a jewelery brand took some jewelry images from Tanishq, and made video using it."
            aspectRatio='1.77777777777778'
          />


        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
