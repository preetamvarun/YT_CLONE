import { useEffect } from 'react';
import { closeSideBarMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SuggestedVideoCard } from './SuggestedVideoCard';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const searchResultsSlice = useSelector((store) => store.searchResultsSlice);

  const searchResults = searchResultsSlice.searchJSONData.items;

  const [params] = useSearchParams();

  /* get the dispatch so that you can dispatch an action to close the side bar menu*/
  const disptach = useDispatch();

  /* Closing the hamburger menu when user redirects to the watch page */
  const close = () => {
    disptach(closeSideBarMenu());
  };

  useEffect(() => {
    close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!searchResults) return null;

  return (
    <>
      <div className='flex'>
        <iframe
          className='m-3 flex-2'
          width='700'
          height='400'
          src={`https://www.youtube.com/embed/${params.get('v')}` /*reading the video id from the url*/ }
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
        <CommentsContainer/>
      </div>

    </>
    
  );
};

export default WatchPage;
