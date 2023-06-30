import { useEffect } from 'react';
import { closeSideBarMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SuggestedVideoCard } from './SuggestedVideoCard';

const WatchPage = () => {
  const searchResultsSlice = useSelector((store) => store.searchResultsSlice);

  const searchResults = searchResultsSlice.searchJSONData.items;

  const [params] = useSearchParams();

  const disptach = useDispatch();

  const close = () => {
    disptach(closeSideBarMenu());
  };

  useEffect(() => {
    close();
  }, []);

  if (!searchResults) return null;

  return (
    <div className='flex'>
      <iframe
        className='m-3 flex-2'
        width='700'
        height='400'
        src={`https://www.youtube.com/embed/${params.get('v')}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen></iframe>

      <div className='flex-1 mt-2'>
        {searchResults.map((eachResult) => (
          <SuggestedVideoCard
            eachResult={eachResult}
            showDescription={false}
            key={eachResult.id.videoId}
          />
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
