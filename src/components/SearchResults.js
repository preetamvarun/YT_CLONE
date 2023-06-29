import { useSelector } from 'react-redux';
import { SuggestedVideoCard } from './SuggestedVideoCard';

const SearchResults = () => {
  const searchResultsSlice = useSelector((store) => store.searchResultsSlice);

  const searchResults = searchResultsSlice.searchJSONData.items;

  return (
    <div className='mt-5'>
      {searchResults.map((eachResult) => (
        <SuggestedVideoCard eachResult={eachResult} showDescription={true} />
      ))}
    </div>
  );
};

export default SearchResults;
