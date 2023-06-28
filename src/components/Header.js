import ham from './Images/hamburgermenuicon.jpg';
import yt_logo from './Images/yt_1200.png';
import userIcon from './Images/avatar.png';
import { useDispatch } from 'react-redux';
import { toggleSideBarMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ytSearchAPI } from '../utils/constants';
import { useSelector } from 'react-redux';

const Header = () => {
  const [inputSearch, setinputSearch] = useState('');

  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const cacheSlice = useSelector((store) => store.cacheSlice);

  console.log(cacheSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      callSearchAPI();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [inputSearch]);

  const callSearchAPI = async () => {
    const data = await fetch(ytSearchAPI + inputSearch);
    const json = await data.json();
    setSearchSuggestions(json[1]);
  };

  const toggleSideBarMenuHandler = () => {
    dispatch(toggleSideBarMenu());
  };

  return (
    <div className='flex flex-1 items-center justify-between shadow-lg'>
      {/* Left Side Two Logos */}
      <div className='flex items-center'>
        <div className='mx-2 hover:cursor-pointer'>
          <img
            src={ham}
            alt='hamburger-menu-icon'
            className='h-12 w-12'
            onClick={toggleSideBarMenuHandler}
          />
        </div>
        <div>
          <Link to={'/'}>
            <img src={yt_logo} alt='yt_logo' className='h-[70px] w-20' />
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
          }}
        />
        <div className='h-[42px] px-3 rounded-r-3xl bg-slate-50 border border-black'>
          <i className='fa-solid fa-magnifying-glass relative top-2'></i>
        </div>

        {inputSearch.length > 0 && (
          <div className='absolute bg-white top-full right-12 left-0 shadow-xl p-2 mt-3 rounded-md'>
            <ul className='list-none'>
              {searchSuggestions.map((s) => (
                <div className='flex items-center ml-2 my-1 p-1 hover:bg-gray-200 hover:cursor-default'>
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
        <img src={userIcon} alt='userIcon' className='h-10' />
      </div>
    </div>
  );
};

export default Header;
