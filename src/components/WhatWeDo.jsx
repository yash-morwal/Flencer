import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";



const videos = [
  {
    id: 1,
    title: "Chills Lemonade ",
    description: "Vibrant 3D motion design capturing the crisp energy and refreshing spirit of Chills canned lemonade.",
    thumbnail: "https://res.cloudinary.com/doc1619rx/image/upload/v1767972280/thumb2_pvogd9.png",
    videoUrl: "https://www.youtube.com/embed/8MmenrsWIT4",
    type: "vertical"
  },
  {
    id: 2,
    title: "Nike Spec Ad | High-Energy Brand Visuals",
    description: "Inspiring cinematic storytelling that captures the raw speed and relentless drive of Nike performance.",
    thumbnail: "https://res.cloudinary.com/doc1619rx/image/upload/v1768060593/thmb_xywxmd.jpg",
    videoUrl: "https://www.youtube.com/embed/JUKGSisMFyM",
    type: "landscape"
  },
  {
    id: 3,
    title: "Tanishq | Luxury Jewelry Spec Ad",
    description: "A sophisticated luxury showcase for Tanishq centered on elegant model photography and brand aesthetic.",
    thumbnail: "https://res.cloudinary.com/doc1619rx/image/upload/v1768060804/thmb_wkw9oi.png",
    videoUrl: "https://www.youtube.com/embed/HA_TWpet6rg",
    type: "landscape"
  },
];



const WhatWeDo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);



  const openVideo = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };



  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };



  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="dm-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--main-text-color)] mb-6">
            What we do?
          </h2>
          <p className="text-base sm:text-lg text-[var(--secondary-text-color)] max-w-4xl mx-auto leading-relaxed">
            We make ai ads for brands that look completely professional and photorealistic in a very affordable budget
            that would otherwise take thousands of dollar as ad creation requires sets, lightings, camera man, models, locations.
          </p>
        </div>



        {/* See More Link */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => {
              const element = document.getElementById('testimonials');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-flex inter-font items-center gap-2 text-md font-[300] text-[var(--secondary-text-color)] hover:text-[var(--accent-color)] transition-colors group"
          >
            See more
            <span className="text-[var(--accent-color)] ml-[-8px]">
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>



        {/* Video Grid - Dynamic for all screen sizes */}
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} onClick={() => openVideo(video)} />
          ))}
        </div>
      </div>



      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={closeVideo} />
    </section>
  );
};



// Video Card Component - 16:9 thumbnail with object-contain + blurred background
const VideoCard = ({ video, onClick, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} w-full bg-[#222222] rounded-2xl overflow-hidden group hover:ring-2 hover:ring-[var(--accent-color)] transition-all cursor-pointer flex flex-col`}
    >
      {/* Thumbnail Section - 16:9 aspect ratio with blurred background */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#1a1a1a]">
        {/* Blurred Background Layer - Always present for ALL videos */}
        <div className="absolute inset-0">
          <img 
            src={video.thumbnail} 
            alt=""
            className="w-full h-full object-cover blur-2xl scale-110 opacity-40"
          />
        </div>
        
        {/* Foreground Image - object-contain to show full image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'w-full h-full flex items-center justify-center text-white/20 text-6xl';
              fallback.textContent = '▶';
              e.target.parentElement.appendChild(fallback);
            }}
          />
        </div>
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 z-10" />



        {/* Play Icon - Center - 75% opacity */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--accent-color)] opacity-75 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl border-2 border-black/20">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>



        {/* Arrow Icon - Top Right Corner */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
          <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10">
            <svg className="w-4 h-4 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>



      {/* Content Section - Extended area below thumbnail */}
      <div className="p-4 sm:p-5 bg-[#2d2d2d] flex-1">
        <h3 className="text-base sm:text-lg poppins lg:text-lg font-semibold text-[var(--main-text-color)] mb-1 group-hover:text-[var(--accent-color)] transition-colors line-clamp-1">
          {video.title}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
};



// Video Modal Component
const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    if (video) {
      const style = document.createElement('style');
      style.innerHTML = `
        .modal-content-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .modal-content-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .modal-content-scroll::-webkit-scrollbar-thumb {
          background: rgba(154, 249, 99, 0.3);
          border-radius: 10px;
        }
        .modal-content-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(154, 249, 99, 0.6);
        }
        .modal-content-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(154, 249, 99, 0.3) transparent;
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [video]);



  if (!video) return null;



  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-1 py-4 sm:px-4 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10"
          style={{ 
            backgroundColor: 'rgba(15, 15, 15, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-[1000px] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl max-h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group"
              aria-label="Close video"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>



            <div className="overflow-y-auto modal-content-scroll flex-1">
              <div className="p-2 sm:p-5 md:p-6 lg:px-7 lg:py-3">
                <div className={`relative mx-auto bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-xl mb-3 sm:mb-4 md:mb-4 ${
                  video.type === 'vertical' ? 'aspect-[9/16] max-h-[530px] mx-auto' : 'aspect-video w-full'
                }`}>
                  <iframe
                    src={`${video.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>



                <div className="space-y-2 sm:space-y-2.5 md:space-y-1 pb-2">
                  <h2 className="inter-font text-lg sm:text-xl md:text-2xl lg:text-xl font-bold text-[var(--main-text-color)] leading-tight">
                    {video.title}
                  </h2>
                  <p className="inter-font text-xs sm:text-sm md:text-base text-[var(--secondary-text-color)] leading-relaxed">
                    {video.description}
                  </p>



                  <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-white/10">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 text-xs sm:text-sm text-[var(--accent-color)] font-medium whitespace-nowrap">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      {video.type === 'vertical' ? 'Vertical' : 'Horizontal'}
                    </span>
                    <button className="inter-font text-xs sm:text-sm text-[var(--secondary-text-color)] hover:text-[var(--accent-color)] transition-colors flex items-center gap-1 whitespace-nowrap">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span className="hidden sm:inline">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



export default WhatWeDo;
