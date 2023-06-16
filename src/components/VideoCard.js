import React from 'react';

const VideoCard = ({ video }) => {
  console.log(video);
  const { snippet, statistics } = video;

  const { thumbnails } = snippet;

  return (
    <div className='m-2 w-72 shadow-lg'>
      <img
        src={thumbnails.medium.url}
        alt='video-thumbnail'
        className='rounded-lg hover:cursor-pointer p-1'
      />
      <ul className='p-1'>
        <li className='font-semibold'>{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
