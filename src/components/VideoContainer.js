import { useEffect } from 'react';
import { ytAPI } from '../utils/constants';

const VideoContainer = () => {
  const getVideos = async () => {
    const data = await fetch(ytAPI);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <p>This is VideoContainer component</p>
    </div>
  );
};

export default VideoContainer;
