import { useEffect, useState } from 'react';
import { ytAPI } from '../utils/constants';
import VideoCard from './VideoCard';

// Get the data from youtube's live api
const VideoContainer = () => {

  /* Get the videos information and set it in the variable videos */
  const [vidoes, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(ytAPI);
    const json = await data.json();
    setVideos(json.items);
  };

  /* Call the api just once after the page is loaded */
  useEffect(() => {
    getVideos();
  }, []);

  if (vidoes.length <= 0) return null;

  return (
    <div className='shadow-md flex flex-wrap justify-center items-center'>
      {/* once you get the information about the videos then display each video card accordingly.
      */}
      {vidoes.map((video) => (
        <VideoCard video={video} key={video.snippet.thumbnails.medium.url} />
      ))}
    </div>
  );
};

export default VideoContainer;
