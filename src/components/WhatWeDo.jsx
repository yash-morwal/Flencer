import React from "react";

const WhatWeDo = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="dm-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            What we do?
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
            We make ai ads for brands that look completely professional and photorealistic in a very affordable budget
            that would otherwise take thousands of dollar as ad creation requires sets, lightings, camera man, models, locations.
          </p>
        </div>

        {/* See More Link */}
        <div className="flex justify-end mb-6">
          <a
            href="#gallery"
            className="inline-flex inter-font items-center gap-2 text-md font-[300] text-white/70 hover:text-[#9af963] transition-colors group"
          >
            See more
            <span className="text-[#9af963] ml-[-8px]">
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>

        {/* Exact Grid Layout from Image - 2 Rows, 6 Cards Total */}
        <div className="space-y-4">
          {/* Row 1: Large Landscape + Portrait + Large Landscape */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[280px]">
            {/* Card 1: Large Landscape (spans 5 cols) */}
            <div className="md:col-span-5 h-[280px] bg-[#3a3a3a] rounded-2xl overflow-hidden relative group hover:ring-2 hover:ring-[#9af963] transition-all">
              <div className="absolute inset-0 w-full h-full">
                {/* Replace with iframe */}
                <div className="w-full h-full flex items-center justify-center">
                  {/* <span className="text-white/30 text-sm">Video 1</span> */}
                </div>
              </div>
            </div>

            {/* Card 2: Portrait/Vertical (spans 2 cols) */}
            <div className="md:col-span-2 h-[280px] bg-[#3a3a3a] rounded-2xl overflow-hidden relative group hover:ring-2 hover:ring-[#9af963] transition-all">
              <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  {/* <span className="text-white/30 text-sm">Video 2</span> */}
                </div>
              </div>
            </div>

            {/* Card 3: Large Landscape (spans 5 cols) */}
            <div className="md:col-span-5 h-[280px] bg-[#3a3a3a] rounded-2xl overflow-hidden relative group hover:ring-2 hover:ring-[#9af963] transition-all">
              <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  {/* <span className="text-white/30 text-sm">Video 3</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Three Equal Landscape Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[240px]">
            {/* Card 4: Landscape */}
            <div className="h-[240px] bg-[#3a3a3a] rounded-2xl overflow-hidden relative group hover:ring-2 hover:ring-[#9af963] transition-all">
              <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  {/* <span className="text-white/30 text-sm">Video 4</span> */}
                </div>
              </div>
            </div>

            {/* Card 5: Landscape */}
            <div className="h-[240px] bg-[#3a3a3a] rounded-2xl overflow-hidden relative group hover:ring-2 hover:ring-[#9af963] transition-all">
              <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  {/* <span className="text-white/30 text-sm">Video 5</span> */}
                </div>
              </div>
            </div>

            {/* Card 6: Landscape */}
            <div className="h-[240px] bg-[#3a3a3a] rounded-2xl overflow-hidden relative group hover:ring-2 hover:ring-[#9af963] transition-all">
              <div className="absolute inset-0 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  {/* <span className="text-white/30 text-sm">Video 6</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
