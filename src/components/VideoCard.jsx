import React from 'react';

const VideoCard = ({ videoUrl, title, description, aspectRatio, width, a, b }) => {
  // Extract media-id from the videoUrl if it's a Wistia embed URL
  const mediaId = videoUrl;
  let height = 400


  return (
    <div className={`video-card p-4 `}>
      <div className={`mb-4 flex items-center relative`}>
        <div className=''>
          <iframe
              src={videoUrl}
              
              style={{ height: height, width: 'auto', aspectRatio: aspectRatio }}
              allow="autoPlay; fullScreen; encrypted-media; picture-in-picture; hide-control"
              allowfullscreen
              frameborder="0"
            ></iframe>
        </div>
      </div>
      <h3 className={`font-bold text-white text-lg mb-1 inter-font`} style={{width:`${aspectRatio*height}px`}}>{title}</h3>
      <p className={`text-gray-300 text-sm inter-font`} style={{width:`${aspectRatio*height}px`}}>{description}</p>
    </div>
  );
};

export default VideoCard;

