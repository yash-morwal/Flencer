import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Product Showcase Ad",
    description: "Stunning product visualization with dynamic camera movements and professional lighting effects",
    thumbnail: "/images/thumb1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "landscape"
  },
  {
    id: 2,
    title: "Instagram Reel",
    description: "Vertical format perfect for social media platforms with engaging storytelling",
    thumbnail: "/images/thumb2.jpg",
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    type: "vertical"
  },
  {
    id: 3,
    title: "Brand Story Ad",
    description: "Cinematic storytelling with AI-generated scenes and emotional narrative",
    thumbnail: "/images/thumb3.jpg",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    type: "landscape"
  },
  {
    id: 4,
    title: "E-commerce Ad",
    description: "Professional product demo in lifestyle setting with seamless transitions",
    thumbnail: "/images/thumb4.jpg",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    type: "landscape"
  },
  {
    id: 5,
    title: "TikTok Style Ad",
    description: "Fast-paced UGC style content designed for maximum engagement",
    thumbnail: "/images/thumb5.jpg",
    videoUrl: "https://www.youtube.com/embed/YQHsXMglC9A",
    type: "landscape"
  },
  {
    id: 6,
    title: "Testimonial Video",
    description: "Authentic customer stories with AI avatars and compelling narratives",
    thumbnail: "/images/thumb6.jpg",
    videoUrl: "https://www.youtube.com/embed/OPf0YbXqDm0",
    type: "landscape"
  }
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
          <a
            href="#gallery"
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
          </a>
        </div>

        {/* Video Grid */}
        <div className="space-y-4">
          {/* Row 1: Large Landscape + Portrait + Large Landscape */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[280px]">
            <VideoCard video={videos[0]} onClick={() => openVideo(videos[0])} className="md:col-span-5" />
            <VideoCard video={videos[1]} onClick={() => openVideo(videos[1])} className="md:col-span-2" />
            <VideoCard video={videos[2]} onClick={() => openVideo(videos[2])} className="md:col-span-5" />
          </div>

          {/* Row 2: Three Equal Landscape Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[240px]">
            <VideoCard video={videos[3]} onClick={() => openVideo(videos[3])} />
            <VideoCard video={videos[4]} onClick={() => openVideo(videos[4])} />
            <VideoCard video={videos[5]} onClick={() => openVideo(videos[5])} />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={closeVideo} />
    </section>
  );
};

// Video Card Component
const VideoCard = ({ video, onClick, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={`${className} h-[280px] md:h-full bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-2xl overflow-hidden relative group hover:ring-2 hover:ring-[var(--accent-color)] transition-all cursor-pointer`}
    >
      {/* Thumbnail Background */}
      <div className="absolute inset-0 w-full h-full bg-[#3a3a3a]">
        <div className="w-full h-full flex items-center justify-center text-[var(--secondary-text-color)] text-6xl opacity-20">
          ▶
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        {/* Play Icon - Top Right */}
        <div className="flex justify-end">
          <div className="w-10 h-10 rounded-full bg-[var(--accent-color)]/90 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Title & Description - Bottom */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[var(--main-text-color)] mb-1 group-hover:text-[var(--accent-color)] transition-colors">
            {video.title}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--secondary-text-color)] leading-relaxed line-clamp-2">
            {video.description}
          </p>
        </div>
      </div>

      {/* Arrow Icon - Bottom Right Corner */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-6 h-6 text-[var(--accent-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </div>
  );
};

// Video Modal Component - Fixed Size with Internal Scrolling
const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    if (video) {
      // Inject custom scrollbar styles for modal content
      const style = document.createElement('style');
      style.innerHTML = `
        .modal-content-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .modal-content-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          margin: 8px 0;
        }
        .modal-content-scroll::-webkit-scrollbar-thumb {
          background: var(--accent-color);
          border-radius: 10px;
        }
        .modal-content-scroll::-webkit-scrollbar-thumb:hover {
          background: #7ee145;
        }
        .modal-content-scroll {
          scrollbar-width: thin;
          scrollbar-color: var(--accent-color) rgba(255, 255, 255, 0.05);
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
          {/* Modal Content Container - Fixed Size */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-5xl bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group"
              aria-label="Close video"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable Content Wrapper */}
            <div className="overflow-y-auto modal-content-scroll flex-1">
              <div className="p-1 sm:p-5 md:p-6 lg:p-7">
                {/* Video Container */}
                <div className={`relative w-full bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-xl mb-3 sm:mb-4 md:mb-5 ${
                  video.type === 'vertical' 
                    ? 'aspect-[9/16] max-w-sm mx-auto' 
                    : 'aspect-video'
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

                {/* Title & Description - Below Video */}
                <div className="space-y-2 sm:space-y-2.5 md:space-y-3 px-3 pb-2">
                  <h2 className="inter-font text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--main-text-color)] leading-tight">
                    {video.title}
                  </h2>
                  <p className="inter-font text-xs sm:text-sm md:text-base text-[var(--secondary-text-color)] leading-relaxed">
                    {video.description}
                  </p>

                  {/* Format Badge & Share - Ensure visibility */}
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
