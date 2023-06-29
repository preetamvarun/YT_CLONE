import { useEffect } from 'react';
import { closeSideBarMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WatchPage = () => {
  const searchResultsSlice = useSelector((store) => store.searchResultsSlice);

  console.log(searchResultsSlice);

  const [params] = useSearchParams();

  const disptach = useDispatch();

  const close = () => {
    disptach(closeSideBarMenu());
  };

  useEffect(() => {
    close();
  }, []);

  return (
    <div>
      <iframe
        className='m-3'
        width='700'
        height='400'
        src={`https://www.youtube.com/embed/${params.get('v')}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen></iframe>
    </div>
  );
};

export default WatchPage;
