import ButtonsList from './ButtonsList';
import VideoContainer from './VideoContainer';

const MainBodyContainer = () => {
  return (
    <div style={{ flex: 8 }}>
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainBodyContainer;
