import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;

  const { thumbnails } = snippet;

  return (
    <Link to={'/watch?v=' + video.id}>
      <div className='m-2 w-[20rem] shadow-lg h-[21rem] rounded-md text-sm overflow-y-hidden'>
        <img
          src={thumbnails.medium.url}
          alt='video-thumbnail'
          className='rounded-lg hover:cursor-pointer p-1'
        />
        <ul className='mt-2 ml-1'>
          <li className='font-semibold'>{snippet.title}</li>
          <li className='my-2'>{snippet.channelTitle + '☑️'}</li>
          <li>{statistics.viewCount} Views</li>
        </ul>
      </div>
    </Link>
  );
};

export default VideoCard;
