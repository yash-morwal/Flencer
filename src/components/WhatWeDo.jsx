import React from 'react';

const VideoCard = ({ videoId, title, description, platform = 'youtube' }) => {
  const embedUrl = platform === 'youtube'
    ? `https://www.youtube.com/embed/${videoId}`
    : `https://player.vimeo.com/video/${videoId}`;

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg p-4">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
      <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

const WhatWeDo = () => {
  const videos = [
    { id: 1, videoId: 'L_LUpnjgPso', title: 'Project Alpha', description: 'A short description of Project Alpha. This is a two-line description.', platform: 'youtube' },
    { id: 2, videoId: 'C0DPdy98e4c', title: 'Project Beta', description: 'A short description of Project Beta. This is a two-line description.', platform: 'youtube' },
    { id: 3, videoId: '199787351', title: 'Project Gamma', description: 'A short description of Project Gamma. This is a two-line description.', platform: 'vimeo' },
    { id: 4, videoId: '3JZ_D3ELwOQ', title: 'Project Delta', description: 'A short description of Project Delta. This is a two-line description.', platform: 'youtube' },
    { id: 5, videoId: 'dQw4w9WgXcQ', title: 'Project Epsilon', description: 'A short description of Project Epsilon. This is a two-line description.', platform: 'youtube' },
    { id: 6, videoId: '199787352', title: 'Project Zeta', description: 'A short description of Project Zeta. This is a two-line description.', platform: 'vimeo' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="dm-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-[var(--main-text-color)] mb-12">
          What We Do<span className='text-green-500'>.</span>
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="mb-8 break-inside-avoid">
              <VideoCard {...video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
