import React from 'react';

const VideoCard = ({ videoUrl, title, description, aspectRatio }) => {
  // Extract media-id from the videoUrl if it's a Wistia embed URL
  const mediaId = videoUrl;

  return (
    <div className="backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-lg p-4 h-fit mx-auto max-w-sm">
      <div className="mb-4">
        <wistia-player media-id={mediaId} aspect={aspectRatio}></wistia-player>
      </div>
      <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default VideoCard;
