import React from 'react';

const VideoCard = ({ videoUrl, title, description, aspectRatio, width, type }) => {
  // Extract media-id from the videoUrl if it's a Wistia embed URL
  const mediaId = videoUrl;

  return (
    <div className={`video-card backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-lg p-4 w-fit mx-auto `}>
      <div className={`mb-4 ${type}`}>
        <wistia-player media-id={mediaId} aspect={aspectRatio} className="video-player"></wistia-player>
        <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
