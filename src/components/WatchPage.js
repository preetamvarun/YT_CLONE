import { useEffect } from 'react';
import { closeSideBarMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const WatchPage = () => {
  const disptach = useDispatch();

  const close = () => {
    disptach(closeSideBarMenu());
  };

  useEffect(() => {
    close();
  }, []);

  return <div>Watch Page</div>;
};

export default WatchPage;
