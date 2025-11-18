import React from 'react';

const VideoCard = ({ videoUrl, title, description, aspectRatio, width, a, b }) => {
  // Extract media-id from the videoUrl if it's a Wistia embed URL
  const mediaId = videoUrl;
  let h = 300


  return (
    <div className={`video-card backdrop-blur-lg border border-neutral-700 rounded-2xl shadow-lg p-4 w-fit mx-auto `}>
      <div className={`mb-4 flex items-center`} style={{ width: `${a * b * h}px`, height: `${h}px`, backgroundColor: 'green' }}>
        <div className=''>
          <wistia-player
            media-id={mediaId}
            aspect={aspectRatio}
            className={`video-player`}
            controls-visible-on-load="false"
            playbar="false"
            fullscreen-button="false"
            small-play-button="false"
          ></wistia-player>
        </div>
      </div>
      <h3 className={`font-bold text-white text-lg mb-2 ${width}`} style={{ width: `${a * b * h}px` }}>{title}</h3>
      <p className={`text-gray-300 text-sm ${width}`} style={{ width: `${a * b * h}px` }}>{description}</p>
    </div>
  );
};

export default VideoCard;

