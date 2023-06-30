import yt_logo from './Images/yt_1201.png';
import userIcon from './Images/avatar-2.png';
import { useDispatch } from 'react-redux';
import { toggleSideBarMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ytSearchAPI, ytQuerySearchAPI } from '../utils/constants';
import { useSelector } from 'react-redux';
import { manageCache } from '../utils/cacheSlice';
import { inputJSONData } from '../utils/searchResultsSlice';

const Header = () => {
  const [inputSearch, setinputSearch] = useState('');

  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const cacheSlice = useSelector((store) => store.cache);

  const dispatch = useDispatch();

  const [suggestionClick, setSuggestionClick] = useState(false);

  const HandleSearchOnClick = async () => {
    const data = await fetch(
      ytQuerySearchAPI +
        inputSearch +
        '&key=AIzaSyCn76zXUdXLcqy4Ik1QwISRFLK307QsbRI'
    );
    const json = await data.json();
    // console.log(json);
    dispatch(inputJSONData(json));
  };

  /* Implementing De-Bouncing */
  useEffect(() => {
    const timer = setTimeout(() => {
      /* If the query is already in the cache there is no need to make an api call */

      if (cacheSlice[inputSearch]) {
        setSearchSuggestions(cacheSlice[inputSearch]);
      } else {
        callSearchAPI();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearch]);

  const callSearchAPI = async () => {
    // console.log('API CALL ' + inputSearch);

    const data = await fetch(ytSearchAPI + inputSearch);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(
      manageCache({
        [inputSearch]: json[1],
      })
    );
  };

  const toggleSideBarMenuHandler = () => {
    dispatch(toggleSideBarMenu());
  };

  return (
    <div
      className='flex flex-1 items-center justify-between shadow-lg'
      onClick={() => {
        setSuggestionClick(true);
      }}>
      {/* Left Side Two Logos */}
      <div className='flex items-center'>
        <div className='mx-2 hover:cursor-pointer'>
          <i
            className='fa-solid fa-bars text-[22px] ml-4 mt-1'
            onClick={toggleSideBarMenuHandler}></i>
        </div>
        <div className='ml-2'>
          <Link to={'/'}>
            <img src={yt_logo} alt='yt_logo' className='h-[65px] w-20' />
          </Link>
        </div>
      </div>

      {/* Search Bar Field */}
      <div className='flex items-center relative'>
        <input
          type='text'
          placeholder='search'
          className='py-2 px-4 rounded-l-3xl border border-solid border-black w-96 outline-none'
          value={inputSearch}
          onChange={(e) => {
            setinputSearch(e.target.value);
            setSuggestionClick(false);
          }}
        />
        <Link to='/results'>
          <div
            className='h-[42px] px-3 rounded-r-3xl bg-slate-50 border border-black'
            onClick={HandleSearchOnClick}>
            <i className='fa-solid fa-magnifying-glass relative top-2'></i>
          </div>
        </Link>

        {!suggestionClick && (
          <div className='absolute bg-white top-full right-12 left-0 shadow-xl mt-3 rounded-md'>
            <ul className='list-none'>
              {searchSuggestions.map((s) => (
                <div
                  className='flex items-center ml-2 my-1 p-1 hover:bg-gray-200 hover:cursor-default'
                  key={s}
                  onClick={() => {
                    setSuggestionClick(true);
                    setinputSearch(s);
                  }}>
                  <i className='fa-solid fa-magnifying-glass mr-4'></i>
                  <li key={s} className='mb-1'>
                    {s}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/*Profile Pic Field*/}
      <div className='mr-4'>
        <img src={userIcon} alt='userIcon' className='h-10 mr-4' />
      </div>
    </div>
  );
};

export default Header;
