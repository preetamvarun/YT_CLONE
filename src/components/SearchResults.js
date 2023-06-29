import { useSelector } from 'react-redux';
import { SuggestedVideoCard } from './SuggestedVideoCard';

const SearchResults = () => {
  const searchResultsSlice = useSelector((store) => store.searchResultsSlice);

  const searchResults = searchResultsSlice.searchJSONData.items;

  if (!searchResults) return null;

  return (
    <div className='mt-5'>
      {searchResults.map((eachResult) => (
        <SuggestedVideoCard eachResult={eachResult} />
      ))}
    </div>
  );
};

export default SearchResults;
