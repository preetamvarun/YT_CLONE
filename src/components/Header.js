import ham from './Images/hamburgermenuicon.jpg';
import yt_logo from './Images/yt_1200.png';
import magnifying_glass from './Images/magnifying_glass.jpg';
import userIcon from './Images/avatar.png';
import { useDispatch } from 'react-redux';
import { toggleSideBarMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();

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
      <div className='flex items-center'>
        <input
          type='text'
          placeholder='search'
          className='py-2 px-4 rounded-l-3xl border border-solid border-black w-96 outline-none'
        />
        <div className='h-[42px] px-3 rounded-r-3xl bg-slate-50 border border-black'>
          <img
            src={magnifying_glass}
            alt='magnifying_glass'
            className='h-6 relative top-1/2 translate-y-[-50%]'
          />
        </div>
      </div>

      {/*Profile Pic Field*/}
      <div className='mr-4'>
        <img src={userIcon} alt='userIcon' className='h-10' />
      </div>
    </div>
  );
};

export default Header;
