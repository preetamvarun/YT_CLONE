import { useEffect, useState } from 'react';
import { ytAPI } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [vidoes, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(ytAPI);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (vidoes.length <= 0) return null;

  return (
    <div className='shadow-md flex flex-wrap justify-center items-center'>
      {vidoes.map((video) => (
        <VideoCard video={video} key={video.snippet.thumbnails.medium.url} />
      ))}
    </div>
  );
};

export default VideoContainer;
