import { useEffect, useState } from 'react';
import { ytAPI } from '../utils/constants';

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

  console.log(vidoes);

  return (
    <div>
      <p>This is VideoContainer component</p>
    </div>
  );
};

export default VideoContainer;
